import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import cx from 'classnames';
import s from './uploader.les';
import * as fetch from '../../utils/fetch';
import { getTokenForFile } from '../../utils/fileUtil';
import { notification } from 'antd';
import { extractResumeAct, analyzeCandidateResume, startAnalyze, cleanAnalyze } from '../../redux/actions/recruit';

let max_file_size_props = "20mb"

export class UploadWrap extends React.Component {
  constructor(props) {
    super(props);
    this.removeAllFile = this.removeAllFile.bind(this);
    this.removeFile = this.removeFile.bind(this);
    this.upload = this.upload.bind(this);
    this.uploadBtn = this.uploadBtn.bind(this);
    this.transformModel = this.transformModel.bind(this);
    this.state = {
      timeStamp: Date.parse(new Date())
    }
  }
  static propTypes = {
    type: PropTypes.string,
    maxFileSize: PropTypes.number,
    filesAcountNum: PropTypes.number, // number 类型  针对多个文件上传的时候，限制文件总数目
    onChange: PropTypes.func,
    backResult: PropTypes.func,
    endCallBack: PropTypes.func,
    autoUpload: PropTypes.bool,
    style: PropTypes.object,
    extra: PropTypes.object,
    single: PropTypes.bool,
    extension: PropTypes.bool,
    useFileName: PropTypes.bool,
    autoName: PropTypes.bool,
    mimeTypes: PropTypes.object, // obj-- {title:'',extensions:'' } 类型  title为该过滤器的名称，extensions为文件扩展名，有多个时用逗号隔开  同时title内容参与错误提示文案的显示 （张浩20181025）
    multiple: PropTypes.bool,
    keyNum: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    max_file_size: PropTypes.string,
    maskShow: PropTypes.bool,
    completeCallBack:PropTypes.func,
    multi_selection:PropTypes.bool
  }
  static defaultProps = {
    maxFileSize: 10,
    filesAcountNum: 0,
    autoUpload: false,
    single: true,
    extra: {},
    extension: true,
    useFileName: false,
    autoName: false,
    multiple: false,
    mimeTypes: {},
    keyNum: '1',
    maskShow: false,
    backResult: () => { },
    onChange: () => { },
    endCallBack: () => { },
    errorCallBack: () => { },
    max_file_size: '20mb',
    addFileName: false,
    completeCallBack: () => {},
    multi_selection:true
  }
  uploadBtn() {
    const self = this;
    const { only = false, type, extra, name = '${filename}', extension, useFileName, autoName, multiple, customerUrl = '', addFileName } = this.props;
    const maskShow = self.props.maskShow
    self.props.dispatch({ type: 'MASK_SHOW', maskShow })
    getTokenForFile(type, 'web_upload').then(data => {
      let Name, fileName, extensionName;
      if (only) {
        Name = name;
      } else {
        const last = self.uploader.files[0]['name']
        const num = last.lastIndexOf('.');
        const lastName = last.substring(num);
        Name = name + lastName;
        fileName = last;
        extensionName = lastName
        console.log('Name...', Name, 'fileName...', fileName, 'extensionName...', extensionName);
      }
      let url = autoName ? data.object_path + '/' + Date.parse(new Date()) + fileName : useFileName ? data.object_path + '/' + fileName : extension ? data.object_path + extensionName : data.object_path
      // if (customerUrl) {
      //   url = `${customerUrl}/${fileName}`
      // }

      self.uploader.ossToken = data;
      const optionParam = {
        'url': 'https://' + data.bucket + "." + data.domain + '/',
        // 'multi_selection'   : multiple,
        'multipart_params': {
          'Filename': Name,
          OSSAccessKeyId: data.access_key_id,
          key: url,
          policy: data.policy,
          signature: data.signature,
          callback: data.callback_body,
          'x:access_token': data.callback_token,
          'x-oss-security-token': data.security_token,
          'x:name': fileName,
          success_action_status: '200'
        }
      }
      if (multiple) {
        optionParam.multipart_params.key = data.object_path + '/${filename}';
        optionParam.multipart_params['x:name'] = '${filename}';
        optionParam.multipart_params.Filename = '${filename}';
      }
      self.uploader.setOption(optionParam);
      self.uploader.start();
    }).catch(err => { throw err; });
  }
  upload() {
    this.uploadBtn();
  }
  removeAllFile(files) {
    const self = this;
    console.log('files   ddddddd', files);
    let delFiles = this.uploader.files;
    if (files) {
      delFiles = files;
    }
    if (delFiles) {
      delFiles.map((file, i) => {
        self.uploader.removeFile(file);
      })
    }
  }
  removeFile(file) {
    this.uploader.removeFile(file);
  }
  transformModel(backInfo) {
    const modal = Object.assign({}, backInfo, {
      "file_id": backInfo.uuid,
      "target_type": backInfo.type,
      "created_by": backInfo.resource_owner_id,
      "target_id": backInfo.InstanceId,
      "type": backInfo.mime_type
    })
    return backInfo;
  }
  componentDidUpdate(prevProps, prevState) { }
  componentDidMount() {
    const self = this;
    const { single, keyNum, typeName, mimeTypes, max_file_size, filesAcountNum,multi_selection } = this.props;
    const dropId = this.props.dropId || '';
    const { timeStamp } = this.state;
    max_file_size_props = max_file_size
    this.uploader = new plupload.Uploader({
      runtimes: 'html5,flash,silverlight,html4',
      browse_button: 'selectfiles' + keyNum + timeStamp,
      container: self.refs['file_uploader_wrap'],
      url: '//oss.aliyuncs.com',
      drop_element: dropId,//filelist  放入id  拖拽文本框的id,
      multi_selection:multi_selection,
      filters: {

        max_file_size: max_file_size_props,

        mime_types: mimeTypes.extensions ? [
          mimeTypes
        ] : []
      },
      init: {
        PostInit: function () {

        },
        QueueChanged: function (uploader) {// 在改变上传文件的队列时候调用，在FileFiltered之后 、FilesAdded之前（添加文件或者删除文件）
          console.log('uploader  QueueChanged.......', uploader);
        },
        FileFiltered: function (uploader, file) {
          console.log('uploader  FileFiltered.......', uploader);
        },
        FilesAdded: function (up, files) {
          let len = up.files.length, newFilesLength = files.length;
          if (filesAcountNum && up.files && len > Number(filesAcountNum)) {  //多个文件上传的时候添加限制上限数目
            let removeFilesArr = up.files.slice(-newFilesLength);
            self.removeAllFile(removeFilesArr);
            self.props.dispatch({ type: 'MASK_SHOW', maskShow: false });
            return notification.error({
              message: '错误提示',
              description: `上传文件数目大于${filesAcountNum}`,
            });
          }
          if (up.files && up.files.length > 0 && single) {
            const removeFiles = up.files.slice(0, up.files.length - 1);
            self.props.onChange(up.files[up.files.length - 1]);
            self.removeAllFile(removeFiles);
          }
          if (self.props.autoUpload) {
            self.uploadBtn();
          }
        },
        UploadProgress: function (up, file) {
          self.props.backResult(file);
        },
        FileUploaded: function (up, file, info) {
          const { files = [] } = up;
          // console.log('filesfilesfilesfilesfiles', info, info.response);
          if (info && info.response) {
            const backInfo = JSON.parse(info.response);
            if ('${filename}' == backInfo.name) {
              backInfo.name = backInfo.object.substring(backInfo.object.lastIndexOf('/')+1);
            }
            if (backInfo && backInfo.path) {
              const name = backInfo.path.substring(backInfo.path.lastIndexOf('/') + 1);  //   '/' 换成 '.''
              self.props.endCallBack(self.transformModel({ name, ...backInfo, pluploadObj: file }), typeName, files);
            } else
              self.props.endCallBack(self.transformModel({ ...backInfo, pluploadObj: file }), typeName, files);
          } else {
            self.props.endCallBack({ 'err': 'upload fail' });
          }
        },
        UploadComplete: function (up, files) {
          console.log('upupupup',up)
          console.log('filesfilesfilesfiles',files)
          self.props.completeCallBack()
        },
        Error: function (up, err) {

          // 上传过程中  如果有任何报错，将上传成功的文件保留，其余的剔除出上传队列
          const { total = {}, files = [] } = up;
          const { failed = '', uploaded = '' } = total;
          let removeFilesArr = files.slice(uploaded);
          self.removeAllFile(removeFilesArr);
          // 上传过程中  如果有任何报错，将上传成功的文件保留，其余的剔除出上传队列

          // 报错后onChange返回错误
          self.props.onChange({ 'err': 'upload fail' })

          //self.props.dispatch(cleanAnalyze())  // 在有报错的时候 利用redux存储一个全局的bool值，放开简历解析中的提交按钮  允许其点击上传
          self.props.dispatch({ type: 'MASK_SHOW', maskShow: false })
          notification.error({
            message: '错误提示',
            description: err.code,
          });
          self.props.errorCallBack(err)
        }
      }
    });
    this.uploader.init();
    plupload.FILE_SIZE_ERROR = `上传文件过大，请小于${max_file_size_props}。`;
    plupload.FILE_EXTENSION_ERROR = (mimeTypes && mimeTypes.title) ? `上传文件格式错误，当前只支持${mimeTypes.title}文件格式。` : '上传文件格式错误';
    plupload.HTTP_ERROR = `连接网络失败，请检查网络设置后重新上传。`;
  }
  componentWillUnmount() {
    this.uploader.destroy();
  }
  render() {
    const { style, keyNum, max_file_size } = this.props;
    const { timeStamp } = this.state;
    console.log(max_file_size)
    return (
      <div className={cx(s.upload_wrap)} style={style} ref='file_upload_wrap' id={"selectfiles" + keyNum + timeStamp}>
        {this.props.children}
      </div>
    )
  }
}



// export default UploadWrap;
const mapState = (state) => {
  return {
  };
}
export default connect(mapState, null, null, { ref: true })(UploadWrap);
