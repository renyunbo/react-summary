import React,{PropTypes} from 'react';
import {connect} from 'react-redux'; 
import { Row,Col,Input } from 'antd';
import cx from 'classnames'; 
import s from './SearchForms.les';
const InputGroup = Input.Group;


 
class SearchInputGroupWrap extends React.Component {

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
    required:true 
  }
	componentDidMount(){
	}
	componentWillReceiveProps(nextProps){
  }
	componentWillUnmount(){
	}  
	render(){
    
		return(
			<InputGroup className={cx(s.search_group_wrap,'search_group_wrap')}>  
          {React.Children.map(this.props.children,(child,i)=>{
            // console.log(child.props.className);
            if(child&&child.props){ 
              return React.cloneElement(child, { className:cx('search_from_item_wrap',child.props.className), key: i });
            }else{
              return null;
            }
          })} 
      </InputGroup>
		)
	}
}
 
export default SearchInputGroupWrap;