import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, InputNumber, Tooltip, Icon, Cascader, Radio, Select, Row, Col, Checkbox, Button, TimePicker, DatePicker, TreeSelect } from 'antd';
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const { MonthPicker, RangePicker } = DatePicker;
import FetchUserPick from '../FetchUserPick';
import { Field, reduxForm } from 'redux-form';
import moment from 'moment';
import { required, maxLength, number, email, mobile, startCharacter, isTelphone, } from './validate';
import UploadWrap from '../UploadWrap';
import { OSSURL } from '../../../redux/constants/Constants';
import { getAreaNameByCode } from '../../../utils/commonUtils';
import _ from 'lodash';

const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;
const { TreeNode } = TreeSelect;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.validateStatus = this.validateStatus.bind(this);
    this.showErrMessage = this.showErrMessage.bind(this);
    this.renderField = this.renderField.bind(this);
    this.fileChange = this.fileChange.bind(this);
    this.fileUploading = this.fileUploading.bind(this);
    this.fileCallBack = this.fileCallBack.bind(this);
    this.validateRequired = this.validateRequired.bind(this);
    this.relaodDefaultValue = this.relaodDefaultValue.bind(this);
    this.renderFieldForChange = this.renderFieldForChange.bind(this);
    this.checkOptions = this.checkOptions.bind(this);
    this.state = {
      needReload: false,
      value: null,
      reload: false
    }
  }
  static propTypes = {
    formItemLayout: PropTypes.object,
    name: PropTypes.string,
    type: PropTypes.string,
    format: PropTypes.string,
    formatDate: PropTypes.string,
    formatMonth: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string,
    validate: PropTypes.array,
    onKeyUp: PropTypes.func,
    size: PropTypes.string,
    inputStyle: PropTypes.object,
    itemStyle: PropTypes.object,
    options: PropTypes.array,
    rows: PropTypes.number,
    id: PropTypes.string,
    defaultValue: PropTypes.any,
    optionKey: PropTypes.string,
    optionValue: PropTypes.string,
    multiple: PropTypes.bool,
    defaultRadio: PropTypes.any,
    showSearch: PropTypes.bool,
    is_required: PropTypes.bool,
    isArea: PropTypes.bool,
    hasAllValue: PropTypes.bool,
    disabledDate: PropTypes.func,
    is_toUp_bol: PropTypes.bool,
    dropdownMatchSelectWidth: PropTypes.bool,
  }
  static defaultProps = {
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    },
    placeholder: "",
    type: "text",
    format: "HH:mm",
    formatDate: "YYYY/MM/DD",
    formatMonth: "YYYY-MM",
    validate: [],
    size: "default",
    rows: 6,
    id: '',
    is_required: false,
    disabled: false,
    inputStyle: { width: '100%' },
    onKeyUp: () => { },
    onSelect: (value, option) => { },
    disabledDate: (current) => { return false },
    options: [],
    defaultValue: '',
    optionKey: 'id',
    optionValue: 'name',
    multiple: false,
    showSearch: true,
    defaultRadio: '',
    optionFilterProp: null,
    img: null,
    allowClear: true,
    hasAllValue: false,
    itemStyle: {},
    toFixed: -1,
    isArea: false,
    allowZeroRender: false,
    dropdownMatchSelectWidth: true,
  }
  fileChange(file) {
    this.setState({
      file: file,
      error: ''
    });
  }
  fileUploading(file) {
    this.setState({
      file: file
    });
  }
  fileCallBack(field, info) {
    this.setState({
      path: "/" + info.bucket + "/" + info.path
    })
    info.domain = OSSURL;
    field.input.onChange(info);
  }
  deleteBlank(value = '') {
    const { is_toUp_bol } = this.props;
    var str = value;
    if (typeof value != 'number') {
      str = value && value.trim();
      if (is_toUp_bol) {
        str = str.toUpperCase();
      }
    }
    return str;
  }

  validateStatus(field) {
    if (field && field.meta && field.meta.touched && field.meta.error) {
      return 'error'
    } else {
      return null;
    }
  }
  showErrMessage(field) {
    if (field && field.meta && field.meta.touched && field.meta.error) {
      return field.meta.error
    } else {
      return '';
    }
  }
  validateRequired(validate) {
    let isRequireFlag = false;
    validate.map((val) => {
      if (val.toString().indexOf('此项是必填项') != -1) {
        isRequireFlag = true
      }
    });
    return isRequireFlag;
  }
  relaodDefaultValue() {//checkboxgroup 重新加载获取defaultValue
    const { defaultValue } = this.props;
    if (defaultValue && defaultValue.length > 0) {
      this.setState({
        reload: true
      });
    }
  }

  componentDidMount() {
  }
  checkOptions(options, nextOptions) {
    let hasObj = false;
    if ((options && options.length > 0) && (nextOptions && nextOptions.length > 0)) {
      let checkObj = (data) => {
        data && data.length > 0 && data.map((item, i) => {
          try {
            let valueArr = Object.values(item);
            valueArr.map((da, idx) => {
              if (da && typeof (da) == 'object') {
                hasObj = true
                throw 'out';
              }
            });
          } catch (error) {

          }
        });
      }
      checkObj(options);
      checkObj(nextOptions);
    }
    return hasObj;

  }
  componentWillReceiveProps(nextProps) {
    const { options, needReload, disabled = '' } = nextProps;
    if (options && options.length != this.props.options.length) {
      this.setState({
        needReload: true
      })
      return
    }
    if (needReload && !this.props.needReload) {
      this.setState({
        needReload: true
      })
      return
    }

    let hasObj = this.checkOptions(this.props.options, options);// 在此针对option结构中包含node节点的情况
    if (hasObj) {
      this.setState({
        needReload: !this.state.needReload
      })
    } else {
      try {

        if ((JSON.stringify(this.props.options) != JSON.stringify(options))) {
          this.setState({
            needReload: !this.state.needReload
          })
        }
      } catch (error) {
        throw error
      }
    }


    if ((JSON.stringify(this.props.disabled) != JSON.stringify(disabled))) {
      this.setState({
        needReload: !this.state.needReload
      })
    }
    //  根据options属性的处理方式，添加disabled状态的重新渲染机制
    if (disabled != this.props.disabled) {
      this.setState({
        needReload: true
      })
      return
    }
    try {
      if ((JSON.stringify(this.props.disabled) != JSON.stringify(disabled))) {
        this.setState({
          needReload: !this.state.needReload
        })
      }
    } catch (error) {
      throw error
    }

  }
  renderField(field) {
    let { formItemLayout, label, format, rows, id, formatDate, formatMonth, placeholder, name, type, onKeyUp, inputStyle, size, options, multiple, disabled, defaultValue
      , optionKey, optionValue, defaultRadio, showSearch, optionFilterProp, has, uploadType, validate, disabledDate, formFiled, disabledHours, disabledMinutes,
      is_required, dropdownMatchSelectWidth, allowZeroRender, toFixed, is_toUp_bol, allowClear, use_boolean
    } = this.props;
    const { file, value } = this.state;
    if (type && (type == 'select' || type == 'picklist')) {
      options = formFiled ? formFiled.choices : options;
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          style={this.props.itemStyle}
          help={this.showErrMessage(field)} >
          <Select multiple={multiple} allowClear={allowClear} value={field.input.value ? field.input.value : undefined} disabled={disabled}
            onSelect={this.props.onSelect} dropdownMatchSelectWidth={dropdownMatchSelectWidth}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            onChange={(value) => {
              // if(multiple&&value.join(",").indexOf("all")!=-1){
              //     // value=['all']
              // }
              if (this.props.onChange) {
                if (!value) {
                  this.props.onChange('', field);
                } else {
                  this.props.onChange(value, field);
                }
              } else {
                if (!value)
                  if (value == 0) {
                    field.input.onChange('0');
                  } else {
                    field.input.onChange('');
                  }
                else
                  field.input.onChange(value);
              }
            }}
            onBlur={(value) => {
              if (this.props.onBlur) {
                this.props.onBlur(value, field);
              } else {
                field.input.onBlur(value);
              }
            }} placeholder={placeholder} size={size} style={inputStyle} showSearch={showSearch} defaultValue={defaultValue} optionFilterProp={optionFilterProp}>
            {/*this.props.hasAllValue&&<Option key={-10} value={''}>{'全部'}</Option>*/}
            {options && options.length > 0 && options.map((option, i) => {
              return (
                <Option title={option[optionValue]} {...option} key={i} disabled={option['isDisabled']} value={option[optionKey]}>{option[optionValue]}</Option>
              )
            })}
          </Select>
        </FormItem>
      )
    } else if (type && (type == 'treeSelect')) {
      options = formFiled ? formFiled.choices : options;
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          style={this.props.itemStyle}
          help={this.showErrMessage(field)} >
          <Select multiple={multiple} allowClear={allowClear} value={field.input.value ? field.input.value : undefined} disabled={disabled}
            onSelect={this.props.onSelect} dropdownMatchSelectWidth={dropdownMatchSelectWidth}
            filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            onChange={(value) => {
              // if(multiple&&value.join(",").indexOf("all")!=-1){
              //     // value=['all']
              // }
              if (this.props.onChange) {
                if (!value) {
                  this.props.onChange('', field);
                } else {
                  this.props.onChange(value, field);
                }
              } else {
                if (!value)
                  if (value == 0) {
                    field.input.onChange('0');
                  } else {
                    field.input.onChange('');
                  }
                else
                  field.input.onChange(value);
              }
            }} placeholder={placeholder} size={size} style={inputStyle} showSearch={showSearch} defaultValue={defaultValue} optionFilterProp={optionFilterProp}>
            {/*this.props.hasAllValue&&<Option key={-10} value={''}>{'全部'}</Option>*/}
            {options && options.length > 0 && options.map((option, i) => {
              return (
                <Option title={option[optionValue]} {...option} key={i} disabled={option['isDisabled']} value={option[optionKey]}>{option[optionValue]}</Option>
              )
            })}
          </Select>
        </FormItem>
      )
    } else if (type && type == 'upload_wrap') {
      let style = {};
      if (size == 'default') {
        style = { width: '96px', height: '96px', borderRadius: '4px', paddingTop: '16px', marginTop: '-16px', backgroundColor: 'rgba(207, 232, 251,.1)' }
      } else if (size == 'large') {
        style = { width: '360px', padding: '16px 0', backgroundColor: 'rgba(207, 232, 251,.1)', margin: '0 auto' }
      }
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <div style={style} id="dropId" className='ant-upload ant-upload-drag'>
            <UploadWrap size={size} autoUpload={true} name={'uploader' + new Date().getTime()} dropId={"dropId"} type={uploadType} style={{ display: 'inline-block', marginRight: '-2px', width: '100%', height: '100%' }}
              onChange={this.fileChange} backResult={this.fileUploading} endCallBack={(info) => {
                const arrayItem = field.input.value || [];
                arrayItem.push(info);
                info.domain = OSSURL;
                if (multiple) {
                  field.input.onChange(arrayItem);
                } else {
                  field.input.onChange(info);
                }
              }}>
              <Icon type="plus" />
              {this.props.children}
            </UploadWrap>
          </div>
        </FormItem>
      )
    } else if (type && type == 'upload') {
      let style = {};
      if (size == 'default') {
        style = { width: '96px', height: '96px', borderRadius: '4px', paddingTop: '16px', marginTop: '-16px', backgroundColor: 'rgba(207, 232, 251,.1)' }
      } else if (size == 'large') {
        style = { width: '360px', padding: '16px 0', backgroundColor: 'rgba(207, 232, 251,.1)', margin: '0 auto' }
      }
      // let formItemLayout = {
      //       labelCol: { span: 6 },
      //       wrapperCol: { span: size == 'large' ? 24 : 14 },
      //     };
      return (

        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <div style={style} id="dropId" className='ant-upload ant-upload-drag'>
            <UploadWrap addFileName={true} keyNum={this.props.keyNum} extension={this.props.extension} size={size} autoUpload={true} name={'uploader' + new Date().getTime()} dropId={"dropId"} type={uploadType} style={{ display: 'inline-block', marginRight: '-2px', width: '100%', height: '100%' }}
              onChange={this.fileChange} backResult={this.fileUploading} endCallBack={this.fileCallBack.bind(this, field)}>
              {
                size == 'default' ?
                  (
                    <div>
                      <Icon type="plus" />
                      <div className="ant-upload-text">上传照片</div>
                    </div>

                  ) : (
                    <div>
                      <p className="ant-upload-drag-icon">
                        <Icon type="cloud-upload-o" />
                      </p>
                      <p className="ant-upload-text">点击或拖拽文件到此区域进行上传</p>
                      <p className="ant-upload-hint">支持上传文件的格式为:xlsx,xls</p>
                      {file && <p className="ant-upload-hint">已选择文件:{file.name}</p>}
                    </div>
                  )
              }
            </UploadWrap>
          </div>
          {this.props.img}
        </FormItem>
      )
    } else if (type && type == 'userpicker') {
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <FetchUserPick mode={this.props.mode} value={field.input.value} style={inputStyle} placeholder={placeholder} onChange={(value) => {
            if (this.props.onChange) {
              this.props.onChange(value, field);
            } else {
              field.input.onChange(value);
            }
          }} ></FetchUserPick>
        </FormItem>
      )
    } else if (type && type == 'radio') {
      return (
        <FormItem className='formItems'
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <RadioGroup disabled={this.props.disabled} onChange={(val) => {
            this.setState({
              value: val.target.value
            })
            if (this.props.onChange) {
              this.props.onChange(val.target.value, field);
            } else {
              field.input.onChange(val.target.value);
            }
          }} value={field.input.value}  >
            {options.map((option, i) => {
              return (
                <Radio key={i} value={option.key} style={inputStyle}>{option.name}</Radio>
              )
            })}
          </RadioGroup>
        </FormItem>
      )
    } else if (type && type == 'orgUserPicker') {
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <Cascader showSearch={true} filter={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
            onChange={(value) => {
              if (value && value.length < 1) {
                if (this.props.onChange) {
                  this.props.onChange("", field);
                } else {
                  field.input.onChange("");
                }
              } else {
                if (this.props.onChange) {
                  this.props.onChange(value, field);
                } else {
                  field.input.onChange(value);
                }
              }
            }} size={size} allowClear={allowClear} disabled={this.props.disabled} options={options} style={inputStyle} placeholder={placeholder} value={field.input.value ? field.input.value : []} />
        </FormItem>
      )
    } else if (type && type == 'cascader') {
      const filter = (inputValue, path) => {
        return (path.some((option) => {
          if (inputValue && option.label) {
            return (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1
          } else {
            return false;
          }
        }));
      }
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <Cascader onChange={(value) => {
            if (value && value.length < 1) {
              if (this.props.onChange) {
                this.props.onChange("", field);
              } else {
                if (this.props.isArea) {
                  this.props.change('province', '');
                  this.props.change('province_code', '');
                  this.props.change('city', '');
                  this.props.change('city_code', '');
                  this.props.change('district', '');
                  this.props.change('district_code', '');
                  field.input.onChange('');
                } else {
                  field.input.onChange('');
                }
              }
            } else {
              if (this.props.onChange) {
                this.props.onChange(value, field);
              } else {
                if (this.props.isArea) {
                  this.props.change('province', getAreaNameByCode(value[0]));
                  this.props.change('province_code', value[0]);
                  this.props.change('city', getAreaNameByCode(value[1]));
                  this.props.change('city_code', value[1]);
                  this.props.change('district', getAreaNameByCode(value[2]));
                  this.props.change('district_code', value[2]);
                  field.input.onChange(value);
                } else {
                  field.input.onChange(value);
                }
              }
            }
          }} notFoundContent={'无匹配结果'} size={size} allowClear={allowClear} showSearch={{ filter }} disabled={this.props.disabled} options={options} style={inputStyle} placeholder={placeholder} value={field.input.value ? field.input.value : []} />
        </FormItem>
      )
    } else if (type && type == 'area') {
      const filter = (inputValue, path) => {
        return (path.some((option) => {
          if (inputValue && option.label) {
            return (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1
          } else {
            return false;
          }
        }));
      }
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <Cascader filter={filter}
            onChange={(value) => {
              if (value && value.length < 1) {
                this.props.change('province', '');
                this.props.change('province_code', '');
                this.props.change('city', '');
                this.props.change('city_code', '');
                this.props.change('district', '');
                this.props.change('district_code', '');
                if (this.props.onChange) {
                  this.props.onChange(value, field);
                } else {
                  field.input.onChange(value);
                }
              } else {
                this.props.change('province', getAreaNameByCode(value[0]));
                this.props.change('province_code', value[0]);
                this.props.change('city', getAreaNameByCode(value[1]));
                this.props.change('city_code', value[1]);
                this.props.change('district', getAreaNameByCode(value[2]));
                this.props.change('district_code', value[2]);
                if (this.props.onChange) {
                  this.props.onChange(value, field);
                } else {
                  field.input.onChange(value);
                }
              }
            }} notFoundContent={'无匹配结果'} size={size} allowClear={allowClear} disabled={this.props.disabled} showSearch={{ filter }} options={options} style={inputStyle} placeholder={placeholder} value={field.input.value ? field.input.value : []} />
        </FormItem>
      )
    } else if (type && type == 'profession') {
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <Cascader onChange={(value) => {
            if (value && value.length < 1) {
              if (this.props.onChange) {
                this.props.onChange("", field);
              } else {
                if (this.props.isArea) {
                  this.props.change('one_level_name', '');
                  this.props.change('one_level_code', '');
                  this.props.change('two_level_name', '');
                  this.props.change('two_level_code', '');
                  this.props.change('three_level_name', '');
                  this.props.change('three_level_code', '');
                  field.input.onChange("");
                } else {
                  field.input.onChange("");
                }
              }
            } else {
              if (this.props.onChange) {
                this.props.onChange(value, field);
              } else {
                if (this.props.isArea) {
                  this.props.change('one_level_name', getAreaNameByCode(value[0]));
                  this.props.change('one_level_code', value[0]);
                  this.props.change('two_level_name', getAreaNameByCode(value[1]));
                  this.props.change('two_level_code', value[1]);
                  this.props.change('three_level_name', getAreaNameByCode(value[2]));
                  this.props.change('three_level_code', value[2]);
                  field.input.onChange(value);
                } else {
                  field.input.onChange(value);
                }
              }
            }
          }} size={size} allowClear={allowClear} disabled={this.props.disabled} options={options} style={inputStyle} placeholder={placeholder} value={field.input.value ? field.input.value : []} />
        </FormItem>
      )
    } else if (type && type == 'time') {
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <TimePicker onChange={(time, timeString) => {
            const value = time ? time.format(format) : ''
            field.input.onChange(value)
          }} value={field.input.value ? moment(field.input.value, format) : undefined} disabledHours={disabledHours} disabledMinutes={disabledMinutes} placeholder={placeholder} size={size} style={inputStyle} format={format} />
        </FormItem>
      )
    } else if (type && type == 'date') {
      let inputValue = field.input.value;
      // if(field.input.value&&field.input.value<-631152000){
      //     inputValue=undefined;
      // }
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <DatePicker disabledDate={disabledDate}
            onChange={(time, timeString) => {
              let value = time ? time.format(this.props.showTime ? formatDate + ' HH:mm' : formatDate) : null;
              if (this.props.unix && time) {
                value = time.unix();
              }
              if (this.props.onChange) {
                this.props.onChange(value, field);
              } else {
                field.input.onChange(value);
              }
            }}
            defaultValue={defaultValue ? moment(defaultValue, format) : ''}
            value={(inputValue || inputValue === 0) ? this.props.unix ? moment(inputValue * 1000) : moment(inputValue, this.props.showTime ? formatDate + ' HH:mm' : formatDate) : undefined}
            placeholder={placeholder} allowClear={allowClear} size={size} disabled={this.props.disabled} style={inputStyle} format={this.props.showTime ? formatDate + ' HH:mm' : formatDate} showTime={this.props.showTime ? { format: 'HH:mm' } : false} />
        </FormItem>
      )
    } else if (type && type == 'monthPicker') {
      let inputValue = field.input.value;
      if (field.input.value && field.input.value < -631152000) {
        inputValue = undefined;
      }
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <MonthPicker
            defaultValue={field.input.value ? moment(field.input.value, format) : ''}
            onChange={(time, timeString) => {
              let value = time ? time.format(formatMonth) : '';
              if (this.props.unix && time) {
                value = time.unix();
              }
              if (this.props.onChange) {
                this.props.onChange(value, field);
              } else {
                field.input.onChange(value);
              }
            }
            }
            disabledDate={disabledDate}
            placeholder={placeholder} allowClear={allowClear} value={inputValue ? this.props.unix ? moment(inputValue * 1000) : moment(inputValue, formatDate) : undefined} disabled={disabled} size={size} style={inputStyle}
          />
        </FormItem>
      )
    } else if (type && type == 'rangePicker') {
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <RangePicker onChange={(dates, dateStrings) => {
            if (dates && dates.length > 0) {
              let value = [];
              if (this.props.unix && dates.length > 1) {
                value[0] = dates[0].unix();
                value[1] = dates[1].unix();
              } else if (dates.length > 1) {
                value[0] = dates[0].format(formatDate);
                value[1] = dates[1].format(formatDate);
              }
              if (this.props.onChange) {
                this.props.onChange(value, field);
              } else {
                field.input.onChange(value);
              }
            } else {
              field.input.onChange('')
            }
          }}
            // defaultValue={field.input.value ? [moment(field.input.value[0] * 1000), moment(field.input.value[1] * 1000)] : undefined}
            // value={
            //     field.input.value[0] && field.input.value[1] ?
            //         [moment(field.input.value[0] * 1000), moment(field.input.value[1] * 1000)] :
            //         field.input.value[0] && !field.input.value[1] ?
            //             [moment(field.input.value[0] * 1000), 0] :
            //             !field.input.value[0] && field.input.value[1] ?
            //                 [0, moment(field.input.value[1] * 1000)] :
            //                 undefined
            // }
            defaultValue={field.input.value ? [moment(field.input.value[0] * 1000), moment(field.input.value[1] * 1000)] : undefined}
            value={field.input.value && field.input.value.length > 0 ? this.props.unix ? [moment(field.input.value[0] * 1000), moment(field.input.value[1] * 1000)] : [moment(field.input.value[0], formatDate), moment(field.input.value[1], formatDate)] : undefined}
            disabled={disabled} size={size} allowClear={allowClear} style={inputStyle} disabledDate={this.props.disabledDate} />
        </FormItem>
      )
    } else if (type && type == 'rangePickerStr') { //自定义时间段字段 格式要求'[yyyy-mm-dd,yyyy-mm-dd]'
      let inputVal;
      if (field.input.value) {
        inputVal = JSON.parse(field.input.value)
      }
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <RangePicker onChange={(dates, dateStrings) => {
            if (dates && dates.length > 0) {
              let value;
              if (this.props.unix && dates.length > 1) {
                value = JSON.stringify([dates[0].unix(), dates[1].unix()])
              } else if (dates.length > 1) {
                value = JSON.stringify([dates[0].format(formatDate), dates[1].format(formatDate)])
              }
              if (this.props.onChange) {
                this.props.onChange(value, field);
              } else {
                field.input.onChange(value);
              }
            } else {
              field.input.onChange('')
            }
          }}

            defaultValue={field.input.value ? [moment(field.input.value[0] * 1000), moment(field.input.value[1] * 1000)] : undefined}
            value={inputVal && inputVal.length > 0 ? this.props.unix ? [moment(inputVal[0] * 1000), moment(inputVal[1] * 1000)] : [moment(inputVal[0], formatDate), moment(inputVal[1], formatDate)] : undefined}
            disabled={disabled} size={size} allowClear={allowClear} style={inputStyle} disabledDate={this.props.disabledDate} />
        </FormItem>
      )
    } else if (type && type == 'checkboxGroup') {
      const { reload } = this.state;
      return (
        <FormItem className='formItems'
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <CheckboxGroup onChange={
            (value) => {
              if (this.props.onChange) {
                this.props.onChange(value, field);
              } else {
                if (value.length == 0) {
                  field.input.onChange(null);
                } else
                  field.input.onChange(value);
              }
            }
          } options={options} value={field.input.value ? field.input.value : null} disabled={disabled} defaultValue={defaultValue ? defaultValue : []} />
        </FormItem>
      )
    } else if (type && type == 'checkbox') {
      return (
        <FormItem className='formItems'
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <Checkbox onChange={
            (value) => {
              if (this.props.onChange) {
                if (use_boolean) {
                  this.props.onChange(value.target.checked, field);
                } else {
                  this.props.onChange(value.target.checked ? 'y' : 'n', field);
                }
              } else {
                if (use_boolean) {
                  field.input.onChange(value.target.checked);
                } else {
                  field.input.onChange(value.target.checked ? 'y' : 'n');
                }
              }
            }
          } checked={use_boolean ? field.input.value : field.input.value ? field.input.value == 'y' : false} defaultValue={defaultValue == 'y'}   >
            {this.props.checkValue}
          </Checkbox>
        </FormItem>
      )
    } else if (type && type == 'textarea') {
      return (
        <FormItem className={has ? has : 'formItems'}
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <Input onChange={field.input.onChange} type="textarea"
            disabled={disabled}
            value={field.input.value ? field.input.value : undefined} placeholder={placeholder} id={id} rows={rows} style={inputStyle} />
        </FormItem>
      )
    } else if (type && type == 'hidden') {
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} style={{ "display": 'none' }}>
          <Input {...field.input} placeholder={placeholder} type={type} onKeyUp={onKeyUp} style={inputStyle}
            size={size} />
        </FormItem>
      )
    } else if (type && type == 'search') {
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <Search {...field.input} placeholder={placeholder} style={inputStyle} onSearch={this.props.onSearch} onKeyUp={onKeyUp} size={size} />
        </FormItem>
      )
    } else if (type && type == 'number') {
      {/*value={field.input.value?field.input.value:defaultValue} */ }
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <InputNumber {...field.input} id={id} onChange={(value) => {
            if (this.props.onChange) {
              this.props.onChange(Number(value), field);
            } else {
              field.input.onChange(Number(value));
            }
          }} disabled={disabled} placeholder={placeholder} style={inputStyle} size={size} />
        </FormItem>
      )
    } else if (type && type == 'float') {
      {/*value={field.input.value?field.input.value:defaultValue} */ }
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <InputNumber value={field.input.value} id={id} formatter={(value, format) => {
            let val = value;
            if (/^\d+(\.\d+)?$/.test(val)) {//非负浮点数
              let myData = (value + "").split('.'), middleIndex = 0, subindex = 0, dianData = 0;
              if (myData[1] && myData[1].length > 10) {
                let arr = myData[1].split('').reverse();
                arr.map((arr_data, i) => {
                  middleIndex += arr_data;
                  if (middleIndex > 0) {
                    subindex = i;
                    return
                  }
                });
                dianData = myData[1].substring(0, myData[1].length - subindex);
                if (dianData == 0) {
                  val = myData[0];
                } else {
                  val = myData[0] + '.' + dianData;
                }
              } else {
                if (toFixed != -1) {
                  if (/^-?(\d+)?\d+[.]?[0]*$/.test(val)) {
                    val = value + "";
                  } else {
                    var dian = (value + "").indexOf('.');
                    if (dian == -1) {
                      val = parseFloat(parseFloat(val).toFixed(toFixed));
                    } else if ((value + "").lenght - dian <= toFixed) {
                      val = parseFloat(parseFloat(val).toFixed(toFixed));
                    } else {
                      val = (value + "").substring(0, dian + toFixed + 1);
                    }
                  }
                } else {
                  val = parseFloat(val);
                }
              }
            } else if (/^-?\d+$/.test(val)) {//整数
              val = parseInt(val);
            } else if (/^-?(\d+)?\d+[.]$/.test(val)) {
              val = val;
            } else if (/^-?(\d+)?\d+[.]?[\s\S]*$/.test(val)) {
              val = parseFloat(val);
            } else {
              val = 0;
            }
            return val;
          }} onChange={(value) => {
            if (!value) {
              value = 0;
            }
            if (this.props.onChange) {
              this.props.onChange(parseFloat(value), field);
            } else {
              field.input.onChange(parseFloat(value));
            }
          }} disabled={disabled} placeholder={placeholder} style={inputStyle} size={size} />
        </FormItem>
      )
    } else if (type && type == 'range') {
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <InputNumber {...field.input} onChange={(value) => {
            if (this.props.onChange) {
              this.props.onChange(Number(value), field);
            } else {
              field.input.onChange(Number(value));
            }
          }} disabled={disabled} placeholder={placeholder} style={inputStyle} size={size} />
        </FormItem>
      )
    } else if (type && type == 'cooperate_business') {
      console.log("#####::::!!!!", field.input.value)
      let treeValue = undefined;
      try {
        treeValue = JSON.parse(field.input.value);
      } catch (error) {
        treeValue = undefined;
      }
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <div span={14} className="treeSelectWrap">
            <TreeSelect
              showSearch
              style={{ width: 200 }}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              placeholder="请选择"
              allowClear={allowClear}
              multiple
              treeDefaultExpandAll
              value={treeValue && treeValue.length > 0 ? treeValue : undefined}
              onChange={(val) => {
                console.log('-----', val)
                if (val && val.length > 0) {
                  field.input.onChange(JSON.stringify(val));
                } else {
                  field.input.onChange('');
                }

              }}
              onSelect={(val, node, extra) => {
                console.log("!!!!!!!!::::", val, node, extra);
              }} >
              <TreeNode value="事务代理" title="事务代理" key="1">
                <TreeNode value="人事代理" title="人事代理" key="1-1" />
                <TreeNode value="委托招聘" title="委托招聘" key="1-2" />
                <TreeNode value="培训服务" title="培训服务" key="1-3" />
              </TreeNode>
              <TreeNode value="猎头" title="猎头" key="2"></TreeNode>
              <TreeNode value="外包服务" title="外包服务" key="3">
                <TreeNode value="岗位外包" title='岗位外包' key="3-1" />
                <TreeNode value="制造业流程外包" title='制造业流程外包' key="3-2" />
                <TreeNode value="服务业流程外包" title='服务业流程外包' key="3-3" />
                {/* <TreeNode value="灵活用工（非全日制）" title='灵活用工（非全日制）' key="3-4" /> */}
              </TreeNode>
              <TreeNode value="咨询服务" title="咨询服务" key="1-4"></TreeNode>
              <TreeNode value="劳务派遣" title="劳务派遣" key="1-5"></TreeNode>
            </TreeSelect>
          </div>
        </FormItem>
      )
    } else if (type && type == 'mobile') {
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <Input {...field.input} value={field.input.value ? field.input.value : defaultValue} onChange={(value) => {
            if (this.props.onChange) {
              this.props.onChange(value, field);
            } else {
              field.input.onChange(value);
            }
          }} onFocus={
            (value) => {
              if (this.props.onFocus) {
                this.props.onFocus(value, field);
              } else {
                field.input.onFocus(value);
              }
            }
          } disabled={disabled} placeholder={placeholder} type={type} onKeyUp={onKeyUp} style={inputStyle}

            size={size} />
        </FormItem>
      )
    } else {
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <Input {...field.input} value={allowZeroRender ? (field.input.value || field.input.value === 0 ? this.deleteBlank(field.input.value) : defaultValue) : (field.input.value ? this.deleteBlank(field.input.value) : defaultValue)} allowClear={allowClear}
            disabled={disabled} is_toUp_bol={is_toUp_bol} placeholder={placeholder} type={type} onKeyUp={onKeyUp} id={id} style={inputStyle} size={size}
            onChange={(value) => {
              if (this.props.onChange) {
                this.props.onChange(value, field);
              } else {
                field.input.onChange(value);
              }
            }}
            onFocus={(value) => {
              if (this.props.onFocus) {
                this.props.onFocus(value, field);
              } else {
                field.input.onFocus(value);
              }
            }}
            onBlur={(value) => {
              if (this.props.onBlur) {
                this.props.onBlur(value, field);
              } else {
                field.input.onBlur(value);
              }
            }} />
        </FormItem>
      )
    }
  }
  renderFieldForChange() {
    let { formItemLayout, label, format, rows, id, formatDate, formatMonth, placeholder, name, type, onKeyUp, inputStyle, size, options, multiple, disabled, defaultValue
      , optionKey, optionValue, defaultRadio, showSearch, optionFilterProp, has, uploadType, validate, disabledDate, formFiled, disabledHours, disabledMinutes,
      is_required, dropdownMatchSelectWidth
    } = this.props;
    if (type && type == 'range') {
      return (
        <FormItem
          {...formItemLayout}
          label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <Row gutter={8}>
            <Col span={12}>
              <Input />
            </Col>
            <Col span={12}>
              <Input />
            </Col>
          </Row>
        </FormItem>
      )
    }
  }
  render() {
    const { formItemLayout, label, name, type, validate, options, formFiled, custiomField } = this.props;
    const { needReload } = this.state, tempValidate = [required], otherValidate = [];
    if (type == 'mobile') {
      tempValidate.push(mobile);
      otherValidate.push(mobile);//添加基本表单中非必填项中的mobile数据校验

    }
    if (name == 'email') {
      tempValidate.push(email);
      otherValidate.push(email);
    }
    if (name == 'phone') {
      tempValidate.push(isTelphone, maxLength(20))
      otherValidate.push(isTelphone, maxLength(20))
    }
    if (custiomField) {
      return this.renderFieldForChange();
    } else if (needReload) {
      if (type == 'number') {
        return (
          <Field fieldId={'preField' + name} parse={(value, name) => { return type == 'number' ? isNaN(Number(value)) ? 0 : Number(value) : value }} name={name} label={label} type={type} component={(field) => { return this.renderField(field) }} validate={formFiled ? formFiled.is_required ? tempValidate : otherValidate : validate} />
        );
      } else if (type == 'radio') {
        return (
          <Field fieldId={'preField' + name} name={name} label={label} type={type == 'radio' ? 'text' : type} component={(field) => { return this.renderField(field) }} validate={formFiled ? formFiled.is_required ? tempValidate : otherValidate : validate} />
        );
      } else {
        return (
          <Field fieldId={'preField' + name} parse={(value, name) => { return type == 'number' ? isNaN(Number(value)) ? 0 : Number(value) : value }} name={name} label={label} type={type} component={this.renderField} validate={formFiled ? formFiled.is_required ? tempValidate : otherValidate : validate} />
        );
      }
    } else {
      if (type == 'number') {
        return (
          <Field fieldId={'nexField' + name} parse={(value, name) => { return type == 'number' ? isNaN(Number(value)) ? 0 : Number(value) : value }} name={name} label={label} type={type} component={this.renderField} validate={formFiled ? formFiled.is_required ? tempValidate : otherValidate : validate} />
        );
      } else {
        return (
          <Field fieldId={'nexField' + name} name={name} label={label} type={type == 'radio' ? 'text' : type} component={this.renderField} validate={formFiled ? formFiled.is_required ? tempValidate : otherValidate : validate} />
        );
      }
    }
  }
}

InputField = reduxForm({
  // a unique name for the form
  form: 'contractForm'
})(InputField)
export default InputField;
