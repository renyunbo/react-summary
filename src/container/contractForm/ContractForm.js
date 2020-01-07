import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form'
import InputField from '../../components/weidget/reduxForm/InputField';
import { connect } from 'react-redux';
import {getUserInfo} from '../../../src/con'


class ContractForm extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

    }

    handleSubmit = ()=>{
        const {dispatch,submit} = this.props;
        dispatch(submit());
    }
    render() {
        return (
            <div>
                ccccccccccc
                <InputField name='name' placeholder="姓名" type="text" />
                <button onClick={this.handleSubmit}>submit</button>
            </div>
        )
    }
}

const submitForm = (value)=>{
    console.log('value1111111',value);
}
ContractForm = reduxForm({
    form:'contractForm',
    onSubmit:submitForm
})(ContractForm);

const mapState = (state)=>{
    return {};
}
export default connect(mapState)(ContractForm);