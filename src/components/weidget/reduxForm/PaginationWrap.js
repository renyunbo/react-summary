import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm,formValueSelector,getFormValues,change} from 'redux-form';
import { Row,Col,Input,Pagination } from 'antd';
import cx from 'classnames';
const InputGroup = Input.Group;



class PaginationWrap extends React.Component {
	constructor(props) {
		super(props);
    this.onChange=this.onChange.bind(this);
		this.state={
    }
	}
  static propTypes = {
    onChange: PropTypes.func,
    formName:PropTypes.string,
    style:PropTypes.object,
    pageSizeOptions:PropTypes.array,
  }
  static defaultProps={
    onChange:(values)=>{

    },
    formName:'search_list',
    style:{},
    pageSizeOptions:['10' , '25' , '50' , '100']
  }
	componentDidMount(){
	}
	componentWillReceiveProps(nextProps){
  }
	componentWillUnmount(){
	}
  onChange(page,limit){
    const {myValues={},dispatch,formType,formName}=this.props;
    dispatch(change(formType?formType:formName,'offset',((page-1)*limit)))
    this.props.onChange({
      ...myValues,
      offset:((page-1)*limit),
      from: 'pagination',
    })
  }
  onShowSizeChange = (current, pageSize) => {
    const {myValues={},dispatch,formType,formName}=this.props;
    dispatch(change(formType?formType:formName,'offset',((current-1)*pageSize)))
    dispatch(change(formType?formType:formName,'limit',pageSize))
    this.props.onChange({
      ...myValues,
      offset:((current-1)*pageSize),
      limit: pageSize,
      from: 'pagination',
    })
  }
	render(){
    const {myValues={},style={} , pageSizeOptions=[] } = this.props;
    const {total_count} = myValues;
		return(
      <Pagination style={{textAlign:'right',marginTop:'15px',...style}}
        onChange={this.onChange}
        current={myValues.offset?parseInt(myValues.offset/myValues.limit)+1:1}
        pageSize={myValues.limit}
        total={myValues.total_count}
        showTotal={(total_count, range) => `当前： ${range[0]}-${range[1]} 条 共 ${total_count} 条`}
        showSizeChanger
        onShowSizeChange={this.onShowSizeChange}
        showQuickJumper
        // pageSizeOptions={['10', '20', '30', '40', '50']}
        pageSizeOptions={pageSizeOptions}
      />
		)
	}
}


const mapState = (state,props) => {
  const { formName = 'search_list' } = props;
    return {
        myValues: getFormValues(formName)(state)
    }
};

export default connect(mapState, null, null, { ref: true })(PaginationWrap);
