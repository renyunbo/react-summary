import React,{PropTypes} from 'react';
import {getSimpleEmployee} from '../../utils/hrUtil';  
import cx from 'classnames'; 
import l from './fieldSwitch.les';  
import {Select, Spin} from 'antd';  
const Option = Select.Option;

class FetchUserPick extends React.Component { 
	constructor(props) {
        super(props); 
        this.handleChange=this.handleChange.bind(this);
        this.fetchUser = this.fetchUser.bind(this);
        this.resetOption=this.resetOption.bind(this);
        this.state={
        	data: [],
		    value: [],
		    fetching: false
        }  
    } 
    static propTypes = {   
    	mode:PropTypes.string
	}   
	static defaultProps ={ 
		mode:'-',
		onSelect:(value, option)=>{}   
    } 
	componentDidMount() { console.log("FetchUserPick componentDidMount");
    	const {value}=this.props;
        if(!value){
        	this.resetOption()
        } 
	}
    componentWillReceiveProps(nextProps){console.log("FetchUserPick componentWillReceiveProps");
        const {value}=nextProps;
        if(!value){
        	this.resetOption()
        } 
    }
    fetchUser(value){
    	const self=this;
    	const {data}=this.state;
		this.setState({ fetching: true });
		getSimpleEmployee('&name='+value).then(date=>{
			const {items=[]}=date;
			self.setState({
				'data':items,
				fetching: false
			})
		}).catch(err=>{
			console.log(err);
		});
    }
    handleChange(value,option){
    	console.log(value,option);
	    this.setState({
	      value,
	      data: [],
	      fetching: false,
	    }); 
	    if(this.props.onChange){
	    	const {mode}=this.props;
		    if('multiple'==mode){
		    	const temp=[];
		    	value.map((val,i)=>{
		    		temp.push(val.key);
		    	});
		    	this.props.onChange(temp,option);
		    }else{
		    	this.props.onChange(value.key,option);	
		    }
	    } 
	}
	resetOption(){
		this.setState({
        	data: [],
		    value: [] 
        }); 
	}
    render(){ 
     	const { fetching, data, value } = this.state;
     	const {mode,placeholder='请输入'}=this.props;
    	return (
	      <Select
	      	style={this.props.style}
	        mode={mode}
	        showSearch
	        labelInValue
	        value={value}
	        placeholder={placeholder}
	        notFoundContent={fetching ? <Spin size="small" /> : null}
	        filterOption={false}
	        onSearch={this.fetchUser}
	        onChange={this.handleChange}
	        onSelect={this.props.onSelect}
	        style={{ width: 200 }} >
	        {data.map((d) => {
	        	return (<Option {...d} key={d.id} value={d.id}>{d.name}</Option>)
	        })}
	      </Select>
	    );
    }
} 

export default FetchUserPick;
