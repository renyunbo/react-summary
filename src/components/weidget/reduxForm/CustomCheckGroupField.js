import React, { PropTypes } from 'react';
import { Form, Input, InputNumber, Tooltip, Icon, Cascader, Radio, Select, Row, Col, Checkbox, Button, TimePicker, DatePicker, notification } from 'antd';
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const { MonthPicker } = DatePicker;
import FetchUserPick from '../FetchUserPick';
import { Field, reduxForm } from 'redux-form';
import moment from 'moment';
import { required, maxLength, number, email, mobile, startCharacter } from './validate';
import UploadWrap from '../UploadWrap';
import { OSSURL } from '../../../redux/constants/Constants';
const FormItem = Form.Item;
const Option = Select.Option;
const defaultOptions = [];
import { safetyOption } from '../../socialinsurances/socialHelpUtils';
import cx from 'classnames';

const diffChoiceInsurance = (preInfos, newInfos) => {
  const tempMap = {}, resuls = [];
  preInfos.map((preItem, i) => {
    tempMap[preItem.value] = true;
  });
  newInfos.map((newItem, i) => {
    if (!tempMap[newItem.value])
      resuls.push(newItem);
  });
  return resuls;
}
const mergeChoiceInsurance = (preInfos, newInfos) => {//按照险种名合并数组
  const tempMap = {};
  newInfos.map((newItem, i) => {
    tempMap[newItem.value] = newItem;
  });
  preInfos.map((preItem, i) => {
    if (tempMap[preItem.value])
      tempMap[preItem.value] = preItem;
    else {
      tempMap[preItem.value] = preItem;
    }
  });
  return Object.values(tempMap);
}

class CustomCheckGroupField extends React.Component {
  constructor(props) {
    super(props);

    this.addSafety = this.addSafety.bind(this);
    this.validateStatus = this.validateStatus.bind(this);
    this.showErrMessage = this.showErrMessage.bind(this);
    this.renderField = this.renderField.bind(this);
    this.validateRequired = this.validateRequired.bind(this);

    this.state = {
      needReload: false,
      value: null,
      inputVlaue: '',
      addOptions: [],
      checkValues: []
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
    options: PropTypes.array,
    rows: PropTypes.number,
    id: PropTypes.string,
    defaultValue: PropTypes.any,
    optionKey: PropTypes.string,
    optionValue: PropTypes.string,
    multiple: PropTypes.bool,
    defaultRadio: PropTypes.any,
    showSearch: PropTypes.bool,
    showInput: PropTypes.bool,
    is_required: PropTypes.bool
  }
  static defaultProps = {
    formItemLayout: {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    },
    placeholder: "",
    type: "text",
    validate: [],
    size: "default",
    rows: 6,
    id: '',
    is_required: false,
    disabled: false,
    inputStyle: { width: '100%' },
    onKeyUp: () => { },
    onSelect: (value, option) => { },
    options: defaultOptions,
    defaultValue: '',
    optionKey: 'id',
    optionValue: 'name',
    multiple: false,
    showSearch: false,
    showInput: true,
    defaultRadio: '',
    optionFilterProp: null,
    checkValues: [],
    customOption: safetyOption
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

  addSafety(e) {//添加险种
    let { addOptions, inputVlaue } = this.state;
    const { extOption, options = [] } = this.props;
    if (!inputVlaue || !inputVlaue.trim()) {
      return;
    }
    if (inputVlaue.trim().length > 10) {
      notification.error({
        message: '提示',
        description: '最多只能录入10个字符哦'
      });
      return;
    }
    let isPush = false;
    options.map((opt, i) => {
      if (opt.value == inputVlaue) {
        notification.error({
          message: '提示',
          description: inputVlaue + '，此险种名称已存在哦'
        });
        isPush = true;
      }
    });
    addOptions.map((opt, i) => {
      if (opt.value == inputVlaue) {
        notification.error({
          message: '提示',
          description: inputVlaue + '，此险种名称已存在哦'
        });
        isPush = true;
      }
    });
    if (!isPush) {
      addOptions.push({ label: inputVlaue, value: inputVlaue, ...extOption });
      this.setState({
        addOptions,
        inputVlaue: ''
      });
    }
  }

  removeItem(option, i, field) {
    let { addOptions, checkValues } = this.state;
    const { options, customOption } = this.props;
    const deleteOpt = addOptions.splice(i, 1);
    const newCheckValues = [];
    if (checkValues.length == 0) {
      checkValues = [].concat(field.input.value);
    }
    checkValues.map((val, i) => {
      if (deleteOpt[0].value != val) {
        newCheckValues.push(val)
      }
    })
    this.setState({ addOptions, checkValues: newCheckValues });
    if (newCheckValues && newCheckValues.length > 0) {
      if (this.props.onChange) {
        const tempOptions = [], newOptions = [];
        options.concat(addOptions).map((op, i) => {
          newCheckValues.map((val, j) => {
            if (op.label == val) {
              tempOptions.push(op);
            }
          })
          if (op.label != option.label) {
            newOptions.push(op);
          }
        });
        this.props.onChange(newCheckValues, field, tempOptions, newOptions);
      } else {
        if (newCheckValues.length == 0) {
          field.input.onChange(null);
        } else
          field.input.onChange(newCheckValues);
      }
    }
  }
  componentDidMount() {
    const { options, needReload, customOption } = this.props;
    const { addOptions } = this.state;
    this.setState({
      needReload: !needReload,
      addOptions: mergeChoiceInsurance(diffChoiceInsurance(customOption, options), addOptions)
    });
  }
  componentWillReceiveProps(nextProps) {
    const { options, needReload, customOption } = nextProps;
    if (JSON.stringify(customOption) != JSON.stringify(options)) {
      const { addOptions } = this.state;
      this.setState({
        needReload: !needReload,
        addOptions: mergeChoiceInsurance(diffChoiceInsurance(customOption, options), addOptions)
      })
    }
  }

  renderField(field) {
    let { formItemLayout, label, format, rows, id, formatDate, formatMonth, placeholder, name, type, onKeyUp, inputStyle, size, options, multiple, disabled,
      defaultValue, optionKey, optionValue, defaultRadio, showSearch, optionFilterProp, has, uploadType, validate, disabledDate, formFiled, disabledHours,
      disabledMinutes, is_required, customOption
    } = this.props;
    const { file, value, addOptions } = this.state;
    if (type && type == 'checkboxGroup') {
      return (
        <FormItem className='formItems'
          {...formItemLayout} label={label}
          required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
          validateStatus={this.validateStatus(field)}
          help={this.showErrMessage(field)} >
          <CheckboxGroup style={{ width: '500px' }} value={field.input.value ? field.input.value : null} defaultValue={defaultValue}
            onChange={
              (value) => {
                const tempOptions = [];
                options.concat(addOptions).map((option, i) => {
                  value.map((val, j) => {
                    if (option.label == val) {
                      tempOptions.push(option);
                    }
                  })
                });
                if (this.props.onChange) {
                  this.props.onChange(value, field, tempOptions);
                } else {
                  if (value.length == 0) {
                    field.input.onChange(null);
                  } else
                    field.input.onChange(value);
                }
                this.setState({
                  checkValues: value.length == 0 ? [] : value
                })
              }
            }>
            <Row>
              {customOption.map((option, i) => {//option.disabled
                return (
                  <Col span={5} key={i}>
                    <div>
                      <Checkbox value={option.value} disabled={false} >{option.label}</Checkbox>
                    </div>
                  </Col>
                )
              })}
              {addOptions.map((option, i) => {//option.disabled
                return (
                  <Col span={5} key={i} >
                    <div>
                      <Checkbox value={option.value} disabled={false}>{option.label}</Checkbox>
                      <Icon type="close" style={{ cursor: 'pointer', color: 'red', marginLeft: '-8px' }} onClick={this.removeItem.bind(this, option, i, field)} />
                    </div>
                  </Col>
                )
              })}
            </Row>
          </CheckboxGroup>
        </FormItem>
      )
    }
  }
  render() {
    const { formItemLayout, label, name, type, validate, options, formFiled, showInput, addInsStyle } = this.props;
    const tempValidate = [required], otherValidate = [];
    return (
      <div className={cx('custom_check_box')}>
        <Row>
          <Col span={24}>
            <Field name={name} label={label} type={type} component={(field) => { return this.renderField(field) }} validate={formFiled ? formFiled.is_required ? tempValidate : otherValidate : validate} />
          </Col>
          {
            showInput &&
            <Col span={24} style={{ marginTop: '-16px' }}>
              <div style={addInsStyle ? addInsStyle : { width: '130px', margin: '0 0 32px 200px' }}>
                <Input size="default" placeholder="添加险种" value={this.state.inputVlaue} onPressEnter={this.addSafety}
                  onChange={(e) => {
                    this.setState({ inputVlaue: e.target.value });
                  }}
                  addonAfter={<span style={{ cursor: 'pointer' }} onClick={this.addSafety}>确认</span>}
                />
              </div>
            </Col>
          }
        </Row>
      </div>
    );
  }
}

export default CustomCheckGroupField;
