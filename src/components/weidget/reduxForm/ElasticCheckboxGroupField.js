import React,{PropTypes} from 'react';
import { Form, Input,InputNumber, Tooltip, Icon, Cascader,Radio, Select, Row, Col, Checkbox, Button, TimePicker, DatePicker,message} from 'antd';
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;
const {MonthPicker} = DatePicker;
import FetchUserPick from '../FetchUserPick';
import { Field, reduxForm } from 'redux-form';
import moment from 'moment';
import {required,maxLength,number,email,mobile,startCharacter} from './validate';
import InputField from './InputField';


const FormItem = Form.Item;
const Option = Select.Option;


const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const checkOption = [
	{label:'五险',value:'五险'},
    {label:'公积金',value:'公积金'},
	{label:'交通补助',value:'交通补助'},
	{label:'加班补助',value:'加班补助'},
	{label:'年底双薪',value:'年底双薪'},
	{label:'周末双休',value:'周末双休'},
	{label:'话补',value:'话补'},
	{label:'饭补',value:'饭补'},
	{label:'房补',value:'房补'},
	{label:'工作餐',value:'工作餐'},
	{label:'提供住宿',value:'提供住宿'},

];

class ElasticCheckboxGroupField extends React.Component {
	constructor(props) {
        super(props); 
        this.addOption=this.addOption.bind(this);
        this.state={ 
        	options:checkOption,
        	selectOtion:'',
        	showInput:false
        }
    }
    static propTypes = {
        name:PropTypes.string,
        validate:PropTypes.array,
        label:PropTypes.string,
        options:PropTypes.array,
        callback:PropTypes.func,
	    changeCheckbox:PropTypes.func
    }
    static defaultProps={
        
    } 
    componentDidMount() {
		const {options}=this.props;
	    if(options){
	      	this.setState({
	      		options
	      	})
	    }
    }
    componentWillReceiveProps(nextProps){
      const {options}=nextProps;
	    console.log('options',options);
	    console.log('this.props.options',this.props.options);
      if(options&&!this.props.options){
      	this.setState({
      		options
      	})
      }
      if(JSON.stringify(options) !=JSON.stringify(this.props.options)){
	      this.setState({
		      options
	      })
      }
    } 
    addOption(){
    	const {selectOtion,options}=this.state; 
        const backString =selectOtion&&selectOtion.length>10?selectOtion.substring(0,10):selectOtion;
        let reNameFalg=false;
        options.map(opt=>{
            if(backString==opt.label){
                reNameFalg=true;
            }
        })
        if(reNameFalg){
            message.error('职位福利已存在');
        }else{
            const newOptions=options.concat();
            if(backString)
                newOptions.push({
                    label:backString,
                    value:backString
                })
            this.setState({
                options:newOptions,
                showInput:false,
                selectOtion:''
            })
            this.props.callback(newOptions,backString);
        } 
    }
	render(){
		const {formItemLayout,label,name,validate,formFiled,styleProps,title,addModalFunc,changeCheckbox}=this.props,self=this;
        const {needReload,options,showInput}=this.state,tempValidate=[required];
		console.log('options',options);
        return (
            <div style={{position:'relative'}}>
            	<InputField name={name} defaultValue={[]} formItemLayout={formItemLayout} validate={validate} label={label}
	                        onChange={(value, field)=> {
		                        if (typeof changeCheckbox == 'function') {
			                        changeCheckbox(value, field)
		                        } else {
			                        field.input.onChange(value);
		                        }
	                        }} type="checkboxGroup" options={options} />
            	<div
                    className={'ElasticCheckboxGroupField'}
                    style={styleProps?styleProps:{lineHeight:'38px', paddingLeft:'120px',overflow:'hidden',height:'62px'}}>

	            	<Tooltip placement="top" title={title?title:'点击添加职位福利'}>
				        <div onClick={()=>{
				        	console.log('addModalFunc',addModalFunc);
				        	if(addModalFunc){
						        addModalFunc();
					        }else{
						        this.setState({
							        showInput:true
						        })
					        }
		            			
	            			}} style={{display:'inline-block',float:'left' ,cursor:'pointer'}} >
				            {/*<Icon type="plus" />*/}
                            <img src="./img/add.png" alt="" style={{ width:'46px', height:'17px'}}/>
				        </div>
				    </Tooltip>
                    {showInput&&<div style={{display:'inline-block', float: 'left', marginLeft: '8px' ,marginTop: '5px'}}>
                        <Input onChange={(e)=>{
                            this.setState({
                                selectOtion:e.target.value
                            })
                        }} value={this.state.selectOtion} placeholder='请输入福利内容' addonAfter={<span style={{cursor: 'pointer'}} onClick={self.addOption}>确定</span>} />
                    </div>}
            	</div>
            </div>
        );
         
	}
}


export default ElasticCheckboxGroupField;
