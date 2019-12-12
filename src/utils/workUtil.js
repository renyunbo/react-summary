import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';

const WORK_PATH             = '/api/';	 
const PROVIDENT_FUNDS_PATH  = '/api/provident-funds';	//公积金
const SOCIA_INSURANCES_PATH = '/api/socia-insurances';	//社保
const HORNOR_PATH           = '/api/honors'; //员工 - 荣誉

/*********************** 日常管理 —— 公积金 ************************/


export const getProvidentFunds = (data) => { //获取公积金列表
	let url = WORK_PATH+'provident-funds?payment_cycle='+data;
	return fetch.get(url,constants.WORKING,{});
}

export const searchPersonalFundsRecords = (data,options={}) => { //查询个人社保公积金缴纳详情
	const url = WORK_PATH+'get-personal-records';
	return fetch.post(url,data,constants.WORKING,options);
}

export const searchCompanyRecords = (data,options={}) => { //查询企业社保公积金缴纳详情
	const url = WORK_PATH+'get-company-records';
	return fetch.post(url,data,constants.WORKING,options);
}



/*********************** 日常管理 —— 社保 ************************/


export const getSociaFunds = (data) => { //获取社保列表
	let url = WORK_PATH+'socia-insurances?payment_cycle='+data;
	return fetch.get(url,constants.WORKING,{});
}

export const searchPersonalSociaRecords = (data,options={}) => { //查询个人社保公积金缴纳详情
	const url = WORK_PATH+'get-personal-records';
	return fetch.post(url,data,constants.WORKING,options);
}

export const searchCompanySociaRecords = (data,options={}) => { //查询企业社保公积金缴纳详情
	const url = WORK_PATH+'get-company-records';
	return fetch.post(url,data,constants.WORKING,options);
}


/**************************** 员工 - 荣誉 ******************************/

export const getHornorList = (data,options={}) => { //获取荣誉列表
	const url = HORNOR_PATH+'?employee_id='+data.employee_id;
	return fetch.get(url,constants.WORKING,options);
}

export const addHornorUtil = (data,options={}) => { //添加荣誉
	const url = HORNOR_PATH;
	return fetch.post(url,data,constants.WORKING,options);
}

export const editHornorUtil = (data,options={}) => { //更新荣誉
	const url = HORNOR_PATH+'/'+data.uuid;
	return fetch.putJson(url,data,constants.WORKING,options);
}

 export const delHornorUtil = (data,options={}) => { //删除荣誉
	const url = HORNOR_PATH+'/'+data.uuid;
	return fetch.del(url,data,constants.WORKING,options);
}




