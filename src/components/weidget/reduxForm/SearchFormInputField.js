import React, { PropTypes } from 'react';
import { Form, Input, InputNumber, Tooltip, Icon, Cascader, Radio, Select, Row, Col, Checkbox, Button, TimePicker, DatePicker } from 'antd';
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const { MonthPicker, RangePicker } = DatePicker;
import FetchUserPick from '../FetchUserPick';
import { Field, reduxForm, submit } from 'redux-form';
import moment from 'moment';
import { required, maxLength, number, email, mobile, startCharacter } from './validate';
import UploadWrap from '../UploadWrap';
import { OSSURL } from '../../../redux/constants/Constants';
import _ from 'lodash';
const FormItem = Form.Item;
const Option = Select.Option;
const Search = Input.Search;
const InputGroup = Input.Group;

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 14 },
};

class SearchFormInputField extends React.Component {
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
        checkValue: PropTypes.string,
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
        is_required: PropTypes.bool,
        dropdownMatchSelectWidth: PropTypes.bool
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
        options: [],
        defaultValue: '',
        optionKey: 'id',
        optionValue: 'name',
        multiple: false,
        showSearch: true,
        defaultRadio: '',
        optionFilterProp: null,
        img: null,
        dropdownMatchSelectWidth: true,
        allowClear: true,
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
    relaodDefaultValue() {
        const { defaultValue } = this.props;
        if (defaultValue && defaultValue.length > 0) {
            this.setState({
                reload: true
            });
        }
    }

    componentDidMount() {
    }
    componentWillReceiveProps(nextProps) {
        const { options, needReload } = nextProps;
        if (options && options.length != this.props.options.length) {
            this.setState({
                needReload: true
            })
        }

        try {
            if (options && (JSON.stringify(this.props.options) != JSON.stringify(options))) {
                this.setState({
                    needReload: !this.state.needReload
                })
            }
        } catch (error) {
            throw error
        }

        if (needReload && !this.props.needReload) {
            this.setState({
                needReload: true
            })
        }
    }
    renderField(field) {
        let { formItemLayout, label, format, rows, id, formatDate, formatMonth, placeholder, name, type, onKeyUp, inputStyle, size, options, multiple, disabled, defaultValue
            , optionKey, optionValue, defaultRadio, showSearch, optionFilterProp, has, uploadType, validate, disabledDate, formFiled, disabledHours, disabledMinutes,
            is_required, allowClear, filterOption, customLabel, customKeys = [], checkValue, dropdownMatchSelectWidth
        } = this.props;
        const { file, value } = this.state;
        const renderCustomLable = (option) => {
            const backLables = [];
            customKeys.map((key, i) => {
                if (i != customKeys.length - 1) {
                    backLables.push(option[key] + "|")
                } else {
                    backLables.push(option[key])
                }
            })
            return backLables.join("")
        }
        if (type && (type == 'select' || type == 'picklist')) {
            options = formFiled ? formFiled.choices : options;
            return (
                <FormItem
                    {...formItemLayout}
                    label={label} >
                    <Select multiple={multiple} dropdownMatchSelectWidth={dropdownMatchSelectWidth} allowClear={allowClear} value={field.input.value ? field.input.value : undefined} disabled={disabled}
                        onSelect={this.props.onSelect} filterOption={(input, option) => filterOption ? filterOption(input, option) : option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        onChange={(value) => {
                            if (multiple && value.join(",").indexOf("all") != -1) {
                                value = ['all']
                            }
                            if (this.props.onChange) {
                                this.props.onChange(value, field);
                            } else {
                                if (!value)
                                    field.input.onChange('');
                                else
                                    field.input.onChange(value);
                            }
                        }} placeholder={placeholder} size={size} style={inputStyle} showSearch={showSearch} defaultValue={defaultValue} optionFilterProp={optionFilterProp}>
                        {options && options.length > 0 && options.map((option, i) => {

                            return (
                                <Option {...option} key={i} title={option[optionValue]} value={option[optionKey]}>{customLabel ? renderCustomLable(option) : option[optionValue]}</Option>
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
                    label={label} >
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
            return (

                <FormItem
                    {...formItemLayout}
                    label={label} >
                    <div style={style} id="dropId" className='ant-upload ant-upload-drag'>
                        <UploadWrap keyNum={this.props.keyNum} size={size} autoUpload={true} name={'uploader' + new Date().getTime()} dropId={"dropId"} type={uploadType} style={{ display: 'inline-block', marginRight: '-2px', width: '100%', height: '100%' }}
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
                    label={label} >
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
                    label={label} >
                    <RadioGroup onChange={(val) => {
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
        } else if (type && type == 'cascader') {
            const filter = (inputValue, path) => {
                return (path.some((option) => {
                    if (inputValue && option.label) {
                        return (option.label).toLowerCase().indexOf(inputValue.toLowerCase()) > -1
                    } else
                        return false;
                }));
            }
            return (
                <FormItem
                    {...formItemLayout}
                    label={label} >
                    <Cascader onChange={(value) => {
                        if (value && value.length < 1) {
                            if (this.props.onChange) {
                                this.props.onChange("", field);
                            } else
                                field.input.onChange("");
                        } else {
                            if (this.props.onChange) {
                                this.props.onChange(value, field);
                            } else {
                                field.input.onChange(value);
                            }
                        }
                    }} size={size} showSearch={{ filter }} allowClear={allowClear} disabled={this.props.disabled} options={options} style={inputStyle} placeholder={placeholder} value={field.input.value ? field.input.value : []} />
                </FormItem>
            )
        } else if (type && type == 'time') {
            return (
                <FormItem
                    {...formItemLayout}
                    label={label} >
                    <TimePicker onChange={(time) => {
                        const value = time.format(format);
                        field.input.onChange(value)
                    }} value={field.input.value ? moment(field.input.value, format) : undefined} disabledHours={disabledHours} disabledMinutes={disabledMinutes} placeholder={placeholder} size={size} style={inputStyle} format={format} />
                </FormItem>
            )
        } else if (type && type == 'date') {
            let inputValue = field.input.value;
            if (field.input.value && field.input.value < 0) {
                inputValue = undefined;
            }
            return (
                <FormItem
                    {...formItemLayout}
                    label={label} >
                    <DatePicker disabledDate={disabledDate} onChange={(time, timeString) => {
                        let value = time ? time.format(formatDate) : null;
                        if (this.props.unix && time) {
                            value = time.unix();
                        }
                        if (this.props.onChange) {
                            this.props.onChange(value, field);
                            console.log('说说说说说说说说说说说说');
                        } else {
                            field.input.onChange(value);
                        }
                    }}
                        value={inputValue ? this.props.unix ? moment(inputValue * 1000) : moment(inputValue, formatDate) : undefined}
                        placeholder={placeholder} size={size} style={inputStyle} />
                </FormItem>
            )
        } else if (type && type == 'monthPicker') {
            return (
                <FormItem
                    {...formItemLayout}
                    label={label} >
                    <MonthPicker disabledDate={disabledDate} onChange={(time, timeString) => {
                        if (time) {
                            let value = time.format(formatMonth);
                            if (this.props.unix && time) {
                                value = time.unix();
                            }
                            if (this.props.onChange) {
                                this.props.onChange(value, field);
                            } else {
                                field.input.onChange(value)
                            }
                        } else {
                            if (this.props.onChange) {
                                this.props.onChange('', field);
                            } else {
                                field.input.onChange('')
                            }
                        }
                    }}
                        value={field.input.value ? this.props.unix ? moment(field.input.value * 1000) : moment(field.input.value, format) : undefined}
                        placeholder={placeholder} disabled={disabled} size={size} style={inputStyle} allowClear={allowClear} />
                </FormItem>
            )
        } else if (type && type == 'rangePicker') {
            return (
                <FormItem
                    {...formItemLayout}
                    label={label} >
                    <RangePicker onChange={(dates, dateStrings) => {
                        if (dates) {
                            // let value = time.format(formatMonth);
                            // if(this.props.unix&&time){
                            //     value=time.unix();
                            // }
                            if (this.props.onChange) {
                                this.props.onChange(dates, field);
                            } else {
                                field.input.onChange(dates);
                            }
                            // field.input.onChange(dates)
                        } else {
                            field.input.onChange('')
                        }
                    }}
                        value={field.input.value ? field.input.value : undefined}
                        disabled={disabled} size={size} placeholder={placeholder ? placeholder : ['开始日期', '结束日期']} allowClear={allowClear} style={inputStyle} />
                </FormItem>
            )
        } else if (type && type == 'checkboxGroup') {
            return (
                <FormItem className='formItems'
                    {...formItemLayout}
                    label={label} >
                    <CheckboxGroup onChange={(value) => {
                        if (this.props.onChange) {
                            this.props.onChange(value, field);
                        } else {
                            if (value.length == 0) {
                                field.input.onChange(null);
                            } else {
                                field.input.onChange(value);
                            }
                        }
                    }
                    } options={options} value={field.input.value ? field.input.value : null} defaultValue={defaultValue} />
                </FormItem>
            )
        } else if (type && type == 'checkbox') {
            return (
                <FormItem className='formItems'
                    {...formItemLayout}
                    label={label}
                    required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
                    validateStatus={this.validateStatus(field)} >
                    <Checkbox onChange={field.input.onChange} style={inputStyle}>{checkValue}</Checkbox>
                </FormItem>
            )
        } else if (type && type == 'textarea') {
            return (
                <FormItem className={has ? has : 'formItems'}
                    {...formItemLayout}
                    label={label} >
                    <Input onChange={field.input.onChange} type="textarea" value={field.input.value ? field.input.value : undefined} placeholder={placeholder} id={id} rows={rows} style={inputStyle} />
                </FormItem>
            )
        } else if (type && type == 'customer') {
            return (
                <FormItem
                    {...formItemLayout}
                    label={label}  >
                    {this.props.children}
                </FormItem>
            )
        } else if (type && type == 'hidden') {
            return (
                <FormItem
                    {...formItemLayout}
                    label={label} style={{ "display": 'none' }}>
                    <Input {...field.input} placeholder={placeholder} type={type} onKeyUp={onKeyUp} style={inputStyle}
                        size={size} />
                </FormItem>
            )
        } else if (type && type == 'search') {
            return (
                <FormItem
                    {...formItemLayout}
                    required={formFiled ? formFiled.is_required : this.validateRequired(validate)}
                    validateStatus={this.validateStatus(field)}
                    help={this.showErrMessage(field)}
                    label={label} >
                    <Search {...field.input} placeholder={placeholder} style={inputStyle} onSearch={(value) => {
                        if (this.props.onSearch) {
                            this.props.onSearch(value, field);
                        } else {
                            field.input.onChange(value);
                        }
                    }}
                        onChange={(value) => {
                            if (this.props.onChange) {
                                this.props.onChange(value, field);
                            } else {
                                field.input.onChange(value);
                            }
                        }}
                        onBlur={(value) => {
                            if (this.props.onBlur) {
                                this.props.onBlur(value, field);
                            } else {
                                field.input.onBlur(value);
                            }
                        }}
                        size={size}
                        onKeyUp={onKeyUp}
                    />
                </FormItem>
            )
        } else if (type && type == 'number') {
            return (
                <FormItem
                    {...formItemLayout}
                    label={label} >
                    <InputNumber {...field.input} onChange={(value) => {
                        if (this.props.onChange) {
                            this.props.onChange(Number(value), field);
                        } else {
                            field.input.onChange(Number(value));
                        }
                    }} disabled={disabled} placeholder={placeholder} style={inputStyle} size={size} />
                </FormItem>
            )
        } else if (type && type == 'mobile') {
            return (
                <FormItem
                    {...formItemLayout}
                    label={label} >
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
                    label={label} >
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
                    } disabled={disabled} placeholder={placeholder} type={type} style={inputStyle}
                        size={size} />
                </FormItem>
            )
        }
    }
    render() {
        const { formItemLayout, label, name, type, validate, options, formFiled, checkValue } = this.props;
        const { needReload } = this.state, tempValidate = [required], otherValidate = [];
        if (needReload) {
            if (type == 'number') {
                return (
                    <Field parse={(value, name) => { return type == 'number' ? isNaN(Number(value)) ? 0 : Number(value) : value }} name={name} label={label} type={type} component={(field) => { return this.renderField(field) }} />
                );
            } else if (type == 'radio') {
                return (
                    <Field name={name} label={label} type={type == 'radio' ? 'text' : type} component={(field) => { return this.renderField(field) }} />
                );
            } else {
                return (
                    <Field parse={(value, name) => { return type == 'number' ? isNaN(Number(value)) ? 0 : Number(value) : value }} name={name} label={label} type={type} component={(field) => { return this.renderField(field) }} />
                );
            }
        } else {
            if (type == 'number') {
                return (
                    <Field parse={(value, name) => { return type == 'number' ? isNaN(Number(value)) ? 0 : Number(value) : value }} name={name} label={label} type={type} component={this.renderField} />
                );
            } else {
                return (
                    <Field name={name} label={label} type={type == 'radio' ? 'text' : type} component={this.renderField} validate={formFiled ? formFiled.is_required ? tempValidate : otherValidate : validate} />

                );
            }
        }
    }
}

export default SearchFormInputField;
