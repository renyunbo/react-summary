import * as fetch from './fetch';
// const COMPANY_PATH = '/api/psiorder';
import {USE_MOCK} from '../redux/constants/Constants';

//财务统计：抵扣_补缴_退款
export const getDiffStaticUtil= (params,options={}) => {
	const url =  '/api/psiorder/diff-handle-statistics'+(params?'?'+params:'');
	return fetch.get(url,options);
}
//财务费用列表：抵扣_补缴_退款
export const getDiffListUtil= (params,options={}) => {
	const url = '/api/psiorder/customer-handle-diffs'+(params?'?'+params:'');
	return fetch.get(url,options);
}

//财务统计：导出费用
export const outputDiffFeesUtil= (params,options={}) => {
	const url = '/api/psiorder/customer-diff-export'+(params?'?'+params:'');
	return fetch.post(url,{},options);
}

//财务确认操作：抵扣_补收_退款
export const confirmDiffFeesUtil= (params,options={}) => {
	const url = '/api/psiorder/customer-diff-confirm/'+params.id;
	return fetch.post(url,params,options);
}

//个人费用列表：退款
export const getPersonDiffListUtil= (params,options={}) => {
	const url =  '/api/psiorder/person-handle-diffs'+(params?'?'+params:'');
	return fetch.get(url,options);
}

//个人导出费用
export const outputPersonDiffFeesUtil= (params,options={}) => {
	const url = '/api/psiorder/person-diff-export'+(params?'?'+params:'');
	return fetch.post(url,{},options);
}
//个人确认退款操作
export const personConfirmDiffFeesUtil= (params,options={}) => {
	const url = '/api/psiorder/person-diff-confirm/'+params.id;
	return fetch.post(url,params,options);
}
