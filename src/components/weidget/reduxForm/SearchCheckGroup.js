import React, { PropTypes } from 'react';
import { Row, Col , Form, Input, InputNumber, Tooltip, Icon, Cascader, Radio, Select , Checkbox, Button, TimePicker, DatePicker } from 'antd';
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group; 
import { Field, reduxForm } from 'redux-form'; 
import moment from 'moment';
import { required, maxLength, number, email, mobile, startCharacter } from './validate'; 
import _ from 'lodash';
import cx from 'classnames';  
import s from './searchCheckGroupLess.les';
const FormItem = Form.Item;

 

class SearchCheckGroup extends React.Component {
  constructor(props) {
    super(props); 
    this.renderField = this.renderField.bind(this);
    this.state = {
      needReload: false
    }
  }
  static propTypes = { 
    name: PropTypes.string,
    type: PropTypes.string,
    options: PropTypes.array 
  }
  static defaultProps = { 
    id: '',
    options:[] 
  } 
  componentDidMount() {
    // console.log('是你componentDidMount');
  }
  componentWillReceiveProps(nextProps) {
    const { options } = nextProps;  
    try {
      if (options && (JSON.stringify(this.props.options) != JSON.stringify(options))) {
        console.log('cesih options2')
        this.setState({
          needReload: !this.state.needReload
        })
      }
    } catch (error) {
    }
  } 
  render(){
    const { name,type } = this.props;
    const { needReload } = this.state;
    if(needReload){
      return (
        <Field name={name} fieldId={'preField'} type={type == 'radio' ? 'text' : type} component={(field) => { return this.renderField(field) }}  />
      );
    }else{
      return (
        <Field name={name} fieldId={'nexField'} type={type == 'radio' ? 'text' : type} component={(field) => { return this.renderField(field) }}  />
      );
    }
    
  }
  renderField(field) { 
    const { options } = this.props;
    return (
      <div className={cx(s.search_check_wrap)}>
        <RadioGroup  onChange={(val) => { 
            if (this.props.onChange) {
              this.props.onChange(val.target.value, field);
            } else {
              field.input.onChange(val.target.value);
            }
          }} value={field.input.value} style={{width:'100%'}}>
          <Row type="flex"  justify="center" align="top" justify="space-between">
          {options.map((option,i)=>{
            console.log("field.input.value",field.input.value,option.key);
            return (
              <Col  key={i} style={{flex:1}}> 
                <div className={cx(s.check_item_wrap,'pleft-0',field.input.value==option.key?s.active:null)}>
                  <Radio  disabled={option.disabled}  value={option.key}>{option.name}<div className={cx(s.ext_item_wrap)}>{option.ext}</div></Radio>
                </div>
              </Col>
            )
          })}
          </Row>
        </RadioGroup>
      </div>
    ); 
  }
}
 
 
export default SearchCheckGroup;
