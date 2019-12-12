import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';



//雇员 - 批量变更参保信息 - 确认操作
export const changeEmployeeSiHfInfosUtil = (params,options={}) =>{
	const url='/api/empmgm/employee-insured-sihf-confirm';
	return fetch.post(url,params,options);
}

//雇员 - 批量变更参保信息 - 获取提示信息
export const getEmployeeInsuredPromptUtil = (params,options={}) =>{
	const url='/api/psiorder/employee-insured-prompt';
	return fetch.post(url,params,options);
}

//雇员 - 批量变更参保信息 - 获取减员月份
export const getEmployeeInsSihfMonthUtil = (params,options={}) =>{
	const url='/api/psiorder/employee-insured-sihf-month';
	return fetch.post(url,params,options);
}

//确认退款
export const personSocialRefundUtil = (params,options={}) =>{
	const url='/api/psiorder/refund-order-confirm/'+params.id;
	// const url='/api/psiorder/refund-orders/'+params.id+'/op/confirm';(文档不确定)
	return fetch.post(url,params,options);
}

//获取客户社保列表
export const getCustomerInsList=(offset=0,limit=10,cycle,search='',options={})=>{
	let url = '';
	if(search ==''){
		 url=`/api/socialinsurance/views/?offset=${offset}&limit=${limit}&cycle_name=${cycle}`
	}else {
		 url=`/api/socialinsurance/views/?offset=${offset}&limit=${limit}&cycle_name=${cycle}&customer=${search}`
	}
	return fetch.get(url,options);
}


//获取在缴列表
export const getPayingList = (customer_id,cycle,offset=0,limit=10,keysearch='',options={}) =>{
	let url = '';
	if(keysearch==''){
		url=`/api/socialinsurance/records/?customer_id=${customer_id}&cycle_name=${cycle}&offset=${offset}&limit=${limit}&category=renewal`
	}else{
		url=`/api/socialinsurance/records/?customer_id=${customer_id}&cycle_name=${cycle}&offset=${offset}&limit=${limit}&name=${keysearch}&category=renewal`
	}
	return fetch.get(url,options);
}

//获取停缴列表
export const getStopList = (customer_id,cycle,offset=0,limit=10,keysearch='',options={}) =>{
	let url = '';
	if(keysearch==''){
		url=`/api/socialinsurance/records/?customer_id=${customer_id}&cycle_name=${cycle}&offset=${offset}&limit=${limit}&category=decrease`
	}else{
		url=`/api/socialinsurance/records/?customer_id=${customer_id}&cycle_name=${cycle}&offset=${offset}&limit=${limit}&name=${keysearch}&category=decrease`
	}
	return fetch.get(url,options);
}


//导入社保
export const insertIns = (params,options={}) =>{
	const url=`/api/socialinsurance/do-import`
	return fetch.post(url,{...params},options);
}



//获取增员列表
export const getAddList = (customer_id,cycle,offset=0,limit=10,keysearch='',options={}) =>{
	let url = '';
	if(keysearch==''){
		url=`/api/socialinsurance/records/?customer_id=${customer_id}&cycle_name=${cycle}&offset=${offset}&limit=${limit}&category=increase`
	}else{
		url=`/api/socialinsurance/records/?customer_id=${customer_id}&cycle_name=${cycle}&offset=${offset}&limit=${limit}&name=${keysearch}&category=increase`
	}
	return fetch.get(url,options);
}

//获取补缴缴列表
// export const getSupplementList = (offset,limit,status,params='',options={}) =>{
// 	const url=EMPLOYEE_PATH+`?offset=${offset}&limit=${limit}&status=${status}`+params;
// 	return fetch.get(url,options);
// }

//新政社保政策
export const addSocial = (data,options={}) =>{
	const url = '/api/sipolicy/policy';
	return fetch.post(url,data,options);
}

//更新社保政策
export const updateSocial = (data,options={}) =>{
	const url = '/api/sipolicy/policy/'+data.id;
	return fetch.putJson(url,data,options);
}

//更新公积金政策
export const updatePolicyHF = (data,options={}) =>{
	const url = '/api/sipolicy/policy-hf/'+data.id;
	return fetch.putJson(url,data,options);
}

//政策列表 - 所有的政策(包含已停用、正在启用)
export const allListSocialUtil = (query,options={}) =>{
	const url = '/api/sipolicy/policy'+(query?"?"+query:"");
	return fetch.get(url,options);
}

//政策列表 - 正在启用的政策
export const listSocial = (query,options={}) =>{
	const url = '/api/sipolicy/policy'+(query?"?"+query:"");
	return fetch.get(url,options);
}

// 获取正在使用状态
export const getCheckoutAvailable = (id, options = {}) => {
	const url = `/api/psiorder/policy/${id}/checkout-available`
	return fetch.get(url, options)
}

//更新状态
export const updateSocialState =(data,options={})=>{
	const url = '/api/sipolicy/policy-state/'+data.id;
	return fetch.putJson(url,data,options);
}

//获取社保详情
export const getSocialDetail =(data,options={})=>{
	const url = '/api/sipolicy/policy/'+data.id+(data.hhr_id?"?hhr_id="+data.hhr_id:"");
	return fetch.get(url,options);
}

//获取公积金详情
export const getPolicyHFDetail =(data,options={})=>{
	const url = '/api/sipolicy/policy-hf/'+data.id+(data.hhr_id?"?hhr_id="+data.hhr_id:"");
	return fetch.get(url,options);
}

//户籍性质列表
export const listPolicyHhr =(data,options={})=>{
	const url = '/api/sipolicy/policy-hhr/'+data.id;
	return fetch.get(url,options);
}

//服务地区列表
export const listPolicyArea = (data,options={})=>{
	const url = '/api/sipolicy/policy-area?all=true'+(data?data:'');
	return fetch.get(url,options);
}

//获取退款列表
export const getRefund = (params,data,options={})=>{
	// const url = '/api/psiorder/refund-order'+query;
	const url = `/api/psiorder/refund-order`+(params?'?'+params:'');
	return fetch.get(url,options);
}

//获取退款详情内容
export const getDetail = (data,options={})=>{
	const url = '/api/psiorder/refund-order/'+data.id;
	return fetch.get(url,options);
}


//退款统计信息
export const getRefundOrdersStatic = (data,options={})=>{
	const url = '/api/psiorder/refund-order-statistics';
	return fetch.get(url,options);
}


//社保政策附件
export const getAttachments=(params,options={})=>{
	const url=`/api/sipolicy/policies/${params.id}/attachments`;
	return fetch.get(url,options);
}

//下载社保政策附件
export const downloadAttachments=(params,options={})=>{
	const url=`/api/sipolicy/policies/${params.id}/attachments/op/download`;
	return fetch.get(url,options);
}
//添加社保政策附件
export const addAttachments=(data,options={}) =>{
	const url=`/api/sipolicy/policies/${data.id}/attachments`;
	return fetch.post(url,data,options);
}

//删除社保
export const deleteSocial=(data,options={})=>{
	const url=`/api/socialinsurance/si-cycles/${data.id}`;
	return fetch.del(url,{},options);
}

//操作记录
export const getSnapshot=(params,options={})=>{
	const url=`/api/sipolicy/snapshots/${params.id}`;
	return fetch.get(url,options);
}

//参保人员参保险种
export const getEntInsuredPersons=(params,options={})=>{
	const url=`/api/psiorder/ent-insured-persons/${params.id}`;
	return fetch.get(url,options);
}
