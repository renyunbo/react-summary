import * as fetch from './fetch';
import {USE_MOCK} from '../redux/constants/Constants';

//实缴明细列表
export const frontRealListUtil= (params,options={}) => {
	const url = '/api/psiorder/front-reals'+(params?'?'+params:'');
	return fetch.get(url,options);
}

//实缴明细:人员列表
export const frontPeoListUtil= (params,options={}) => {
	const url = '/api/psiorder/front-real-details'+(params?'?'+params:'');
	return fetch.get(url,options);
}

//实缴人员列表：处理异常
export const handleInvalidUtil= (params,options={}) => {
	const url = '/api/psiorder/real-handle-invalid/'+params.id;
	return fetch.putJson(url,params,options);
}

//实缴人员列表：人员详情
export const frontRealDetailUtil= (params,options={}) => {
	const url = '/api/psiorder/real/'+params.id;
	return fetch.get(url,options);
}

//实缴明细：其他费用列表
export const otherFeesListUtil= (params,options={}) => {
	const url = '/api/psiorder/customer-other-fee'+(params?'?'+params:'');
	return fetch.get(url,options);
}

//实缴明细：其他费用列表---删除
export const delOtherFeesUtil= (params,options={}) => {
	const url =  '/api/psiorder/customer-other-fee'+(params?'?'+params:'');
	return fetch.del(url,options);
}

//实缴明细其他费用：个人列表
export const otherPersonFeesListUtil= (params,options={}) => {
	const url = '/api/psiorder/person-other-fee'+(params?'?'+params:'');
	return fetch.get(url,options);
}

//实缴明细其他费用：个人列表---修改
export const modifyOtherFeesUtil= (params,options={}) => {
	const url = '/api/psiorder/person-other-fee';
	return fetch.putJson(url,params,options);
}

//实缴明细：其他费用列表---导入
export const importOtherFeesUtil= (params,options={}) => {
	const url = '/api/psiorder/import-other-fee';
	return fetch.post(url,params,options);
}

//实缴明细：差异明细列表
export const diffFeesListUtil= (params,options={}) => {
	const url = '/api/psiorder/diffs'+(params?'?'+params:'');
	return fetch.get(url,options);
}

//实缴明细：差异明细列表---生成差异
export const genDiffFeesUtil= (params,options={}) => {
	const url =  '/api/psiorder/diff-gen/'+params.id;
	return fetch.post(url,params,options);
}

//实缴差异：个人列表
export const personDiffFeesUtil= (params,options={}) => {
	const url =  '/api/psiorder/entsi-person-diffs'+(params?'?'+params:'');
	return fetch.get(url,options);
}

//实缴差异：个人列表---个人详情
export const personDetDiffFeesUtil= (params,options={}) => {
	const url = '/api/psiorder/person-diff/'+params.id;
	return fetch.get(url,options);
}

//实缴差异：个人列表---处理异常
export const personHandleDiffUtil= (params,options={}) => {
	const url =  '/api/psiorder/handle-person-diff/'+params.id;
	return fetch.post(url,params,options);
}

//差异明细：导出已生成差异
export const exportDoneDiffUtil= (params,options={}) => {
	const url =  '/api/psiorder/real-export/'+params.id;
	return fetch.post(url,params,options);
}

//实缴明细列表
export const realInvalidListUtil= (params,options={}) => {
	const url = '/api/psiorder/invalid-real'+(params?'?'+params:'');
	return fetch.get(url,options);
}

//政策列表
export const socialListUtil = (params,options={}) =>{
	const url = '/api/sipolicy/policy'+(params?"?"+params.query:"");
	return fetch.get(url,options);
}
