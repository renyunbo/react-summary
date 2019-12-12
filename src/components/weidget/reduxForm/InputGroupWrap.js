import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import { Row,Col,Input } from 'antd';
import cx from 'classnames';
const InputGroup = Input.Group;



class InputGroupWrap extends React.Component {

	constructor(props) {
		super(props);
		this.state={
    }
	}
  static propTypes = {
    label :PropTypes.string,
    required: PropTypes.bool,
    formItemLayout: PropTypes.object
  }
  static defaultProps={
    formItemLayout:{
        labelCol   : 6 ,
        wrapperCol :  14
    },
    label      :"",
    style:{},
    required:true
  }
	componentDidMount(){
	}
	componentWillReceiveProps(nextProps){
  }
	componentWillUnmount(){
	}
	render(){
    const { formItemLayout:{labelCol,wrapperCol},label,required,widthPercent,style={}} = this.props;
        const width_percent = (widthPercent!==null?widthPercent:'100%');
		return(
			<InputGroup > 
        <Col span={labelCol} style={{paddingRight: '0px',width:width_percent}}>
          <div className="ant-row">
            <div className="ant-form-item-label" style={{width:'100%',...style}}>
              {label&&<label className={cx({"ant-form-item-required":required})} title={label}>{label}</label>}
            </div>
          </div>
        </Col>
        <Col span={wrapperCol}  >
          {this.props.children}
        </Col>
      </InputGroup>
		)
	}
}

export default InputGroupWrap;
