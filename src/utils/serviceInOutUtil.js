import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';



const FRONTPATH = `/api/psiorder/front-process`;
const PSIORDER  = `/api/psiorder`;

//后道
//获取后道首页按账户统计的列表
export const loadBackProcessStatisticsList=(query,options={})=>{
	const url = `/api/psiorder/back-process-statistics${query}`;
	return fetch.get(url,options);
}

//后道首页统计数字
export const loadBackProcessStatistics=(query,options={})=>{
	const url = `/api/psiorder/${query}`;
	return fetch.get(url,options);
}


//参保人列表
export const loadBackProcessList=(query,options={})=>{
	const url = `/api/psiorder/back-process/account/${query}`;
	return fetch.get(url,options);
}

//后道参保人详情
export const loadBackProcessDetail=(params,options={})=>{
	const url = `/api/psiorder/back-process-detail/${params}`;
	return fetch.get(url,options);
}


//后道导入
export const insertBackProcessResult=(params,options={})=>{
	const url = `/api/psiorder/back-process-import`;
	return fetch.post(url,params,options);
}

//后道核对列表
export const loadOutCheckList=(query,options={})=>{
	const url = `/api/psiorder/conflict-check${query}`;
	return fetch.get(url,options);
}

//退回前道
export const backToFront=(params,options={})=>{
	const url = `/api/psiorder/conflict-check/${params.id}/op/return`;
	return fetch.post(url,params,options);
}

//后道导出
export const exportBackProcess = (params,options={})=>{
	const url = `/api/psiorder/back-process/account/${params}`
	return fetch.get(url,options);
}

//后道导出办理结果
export const exportBackProcessResult = (params,options={})=>{
	const url = `/api/psiorder/back-process/ext-export-result/account/${params}`
	return fetch.get(url,options);
}

//后道批量下载资料
export const downloadBatchBackProcess = (params,options={})=>{
	const url = `/api/psiorder/back-process-batch-download`;
	return fetch.post(url,params,options);
}

//后道下载资料
export const downloadBackProcess = (params,options={})=>{
	const url = `/api/psiorder/back-process-download`;
	return fetch.post(url,params,options);
}

//后道详情编辑
export const editBackProcessDetail = (params,options={})=>{
	const url = `/api/psiorder/back-process/${params.id}`;
	return fetch.put(url,params,options);
}


//后道办理反馈
export const dealBackProcess = (params,options={})=>{
	const url = `/api/psiorder/back-process/${params.id}/op/feedback`;
	return fetch.post(url,params,options);
}

//按调基办理
export const serviceOutRemain=(values,options={})=>{
	const url = `/api/psiorder/conflict-check/${values.id}/op/continue`;
	return fetch.post(url,options);
}

//待核对页面统计
export const loadOutCheckStatistics=(options={})=>{
	const url = `/api/psiorder/conflict-check-statistics`;
	return fetch.get(url,options);
}

//前道列表
export const getFrontProcessList = (params,options={}) => {
	const url = FRONTPATH+params;
	return fetch.get(url,options);
}

//前道详情
export const getFrontProcessDetail = (params,options={}) => {
	const url = FRONTPATH+'/'+params;
	return fetch.get(url,options);
}

//前道申请实操
export const applyAct = (params,options={}) => {
	const url = FRONTPATH+'/op/apply';
	return fetch.post(url,params,options);
}

//前道下月新增且补缴
export const increaseAndPayback = (params,options={}) => {
	const url = FRONTPATH+'/op/increase-and-payback';
	return fetch.post(url,params,options);
}

//前道退款
export const frontProcessRefund = (params,options={}) => {
	const url = FRONTPATH+'/op/refund';
	return fetch.post(url,params,options);
}

//前道统计信息
export const frontProcessStatistics = (params,options={}) => {
	const url = `/api/psiorder/front-process-statistics`+(params?'?'+params:'');
	return fetch.get(url,options);
}

//前道下月补缴
export const onlyPayback = (params,options={}) => {
	const url = FRONTPATH+`/op/payback`
	return fetch.post(url,params,options);
}

//前道取消
export const frontProcessCancel = (params,options={}) => {
	const url = FRONTPATH+`/op/cancel`
	return fetch.post(url,params,options);
}
//前道资料审核
export const checkDatum = (params,options={}) => {
	const url = 'api/psiorder/datum-check';
	return fetch.post(url,params,options);
}
//前道更新记录
export const updateInfo = (params,options={}) => {
	const url = FRONTPATH+'/'+params.id;
	return fetch.putJson(url,params,options);
}

//社保服务统计信息
export const serviceStatistics = (params,options={}) => {
	const url = PSIORDER+'/si-service-statistics';
	return fetch.get(url,options);
}

//订单统计信息
export const orderStatistics = (params,options={}) => {
	const url = PSIORDER+'/si-order-statistics';
	return fetch.get(url,options);
}

//接单统计信息
export const processStatistics = (params,options={}) => {
	const url = PSIORDER+'/si-process-statistics';
	return fetch.get(url,options);
}

//资料审核统计
export const datumStatistics = (params,options={}) => {
	const url = PSIORDER+'/datum-statistics';
	return fetch.get(url,options);
}

//资料审核列表
export const datumCheck = (params,options={}) => {
	const url = PSIORDER+'/datum-check'+(params?params:'');
	return fetch.get(url,options);
}

//更新前道资料
export const updateFiles = (params,options={}) => {
	const url = 'api/psiorder/insured-person/'+params.insured_person_id;
	return fetch.put(url,params,options);
}

//退回前道操作
export const backProcessReturn = (params,options={}) => {
	const url = 'api/psiorder/back-process-return';
	return fetch.post(url,params,options);
}


//添加协议
export const uploadAgreement=(params,options={})=>{
	const url = `/api/common/user-agreements`;
	return fetch.post(url,params,options);
}

//获取协议
export const getAgreement = (params,options={}) => {
	const url = `/api/common/user-agreements?type=psiorder`;
	return fetch.get(url,options);
}
