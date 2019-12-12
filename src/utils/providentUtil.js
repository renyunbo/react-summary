import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';

//获取客户公积金列表
export const getCustomerProvidentList = (offset = 0, limit = 10, cycle, search = '', options = {}) => {

    let url = '';
    if (search == '') {
        url = `/api/socialinsurance/housing-fund/views/?offset=${offset}&limit=${limit}&cycle_name=${cycle}`
    } else {
        url = `/api/socialinsurance/housing-fund/views/?offset=${offset}&limit=${limit}&cycle_name=${cycle}&customer=${search}`
    }
    return fetch.get(url, options);
}

//导入公积金
export const insertProvident = (params,options={}) =>{
	const url=`/api/socialinsurance/housing-fund/do-import`
	return fetch.post(url,{...params},options);
}

//获取在缴列表
export const getPayingList = (customer_id,cycle,offset=0,limit=10,keysearch='',options={}) =>{
	let url = '';
	if(keysearch==''){
		url=`/api/socialinsurance/housing-fund/records/?customer_id=${customer_id}&cycle_name=${cycle}&offset=${offset}&limit=${limit}&category=renewal`
	}else{
		url=`/api/socialinsurance/housing-fund/records/?customer_id=${customer_id}&cycle_name=${cycle}&offset=${offset}&limit=${limit}&name=${keysearch}&category=renewal`
	}
	return fetch.get(url,options);
}

//获取补缴缴列表
export const getSupplementList = (offset, limit, status, params = '', options = {}) => {
    const url = EMPLOYEE_PATH + `?offset=${offset}&limit=${limit}&status=${status}` + params;
    return fetch.get(url, options);
}

//获取停缴列表
export const getStopList = (customer_id,cycle,offset=0,limit=10,keysearch='',options={}) =>{
	let url = '';
	if(keysearch==''){
		url=`/api/socialinsurance/housing-fund/records/?customer_id=${customer_id}&cycle_name=${cycle}&offset=${offset}&limit=${limit}&category=decrease`
	}else{
		url=`/api/socialinsurance/housing-fund/records/?customer_id=${customer_id}&cycle_name=${cycle}&offset=${offset}&limit=${limit}&name=${keysearch}&category=decrease`
	}
	return fetch.get(url,options);
}

//获取增员列表
export const getAddList = (customer_id,cycle,offset=0,limit=10,keysearch='',options={}) =>{
	let url = '';
	if(keysearch==''){
		url=`/api/socialinsurance/housing-fund/records/?customer_id=${customer_id}&cycle_name=${cycle}&offset=${offset}&limit=${limit}&category=increase`
	}else{
		url=`/api/socialinsurance/housing-fund/records/?customer_id=${customer_id}&cycle_name=${cycle}&offset=${offset}&limit=${limit}&name=${keysearch}&category=increase`
	}
	return fetch.get(url,options);
}


//删除公积金
export const deleteProvident=(data,options={})=>{
	const url=`/api/socialinsurance/hf-cycles/${data.id}`;
	return fetch.del(url,{},options);
}

