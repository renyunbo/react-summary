import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';

const SALARY_PLAN = '/api/payroll/programs';




 //福利-导入记录-导入操作
export const importWelfareList = (params, options = {}) => {
	const url = `/api/payroll/welfare/do-import`
	return fetch.post(url,params,options);
}
 //福利-税延养老列表
export const getTaxExtensionList = (params, options = {}) => {
	const url = `/api/payroll/welfare/tax-extension` + `${params}`
	return fetch.get(url , options);
}
 //福利-商业健康列表
export const getWelfareHealthList = (params, options = {}) => {
	const url = `/api/payroll/welfare/commercial` + `${params}`
	return fetch.get(url , options);
}
 //福利-减免事项列表
export const getWelfareReductionList = (params, options = {}) => {
	const url = `/api/payroll/welfare/reduction` + `${params}`
	return fetch.get(url , options);
}
 //福利-导入记录列表
export const getWelfareRecordsList = (params, options = {}) => {
	const url = `/api/payroll/welfare/import-jobs` +params
	return fetch.get(url , options);
}
 //福利-导入记录详情
export const getWelfareRecordsDetail = (params, options = {}) => {
    const  {id=''}=params;
	const url = `/api/payroll/welfare/import-jobs/${id}/records` 

	return fetch.get(url , options);
}

//积分管理——发放积分（批量发放积分）
export const postIntegral = (data , params, options = {}) => {
	const url = `/api/recruit/broker-point-details`
	return fetch.put(url ,data, options);
}


//提现管理——提现列表   发放
export const postDrawMoney = (data , params, options = {}) => {
	const url = `/api/walletmgm/transactions`
	return fetch.put(url, data , options);
}


  //检测薪酬方案是否重复
export const checkSalaryPlanRepeatOrNot = (params,options={}) =>{
	const url= `/api/payroll/program/check/${params}`;
	return fetch.get(url,options);
}
  //获取薪酬助手的薪酬方案模板（包括shett2）
export const downloadPlanSheet2 = (params,options={}) =>{
	const url= `/api/hrpayroll/salary/download-data`;
	return fetch.post(url,params,options);
}
