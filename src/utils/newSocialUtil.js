import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';




const API_PSIORDER 			= '/api/psiorder/';
const API_PSIORDER_FORM = '/api/psiorder/form/';





export const handleEntIndPersonInsUtil = (params,options={}) => {//参保人 -- 险种异常处理
	const url = API_PSIORDER+'ent-insured-persons/'+params.id+'/confirm';
	return fetch.putJson(url,params,options);
}
export const companyOutDeleteUtil = (params,options={}) => {//后道列表 - 删除(传ids数组，没有批量删除，但是蹬阳要求传数组)
	const url = API_PSIORDER+'back_process/ext-deletes';
	return fetch.putJson(url,params,options);
}

export const companyOutSubmitUtil = (params,options={}) => {//后道列表 - 重新提交
	const url = API_PSIORDER+'back_process/ext/re-do-import';
	return fetch.post(url,params,options);
}

export const insuInfoExportUtil = (params,options={}) => {//信息变更 - 导出
	const url = API_PSIORDER+'change-infos/export'+(params?params.query:'');
	return fetch.post(url,params,options);
}

export const insuInfoFeedBackUtil = (params,options={}) => {//信息变更 - 办理反馈
	const url = API_PSIORDER+'change-info';
	return fetch.post(url,params,options);
}

export const sipolicySetBaseUtil = (params,options={}) => {//社保政策 - 调基设置
	const url = '/api/sipolicy/policy-tj/'+params.id;
	return fetch.putJson(url,params,options);
}

export const loadInsuredInfosUpdateUtil = (params,options={}) => {//信息变更列表
	const url = API_PSIORDER+'change-infos'+(params?params:'');
	return fetch.get(url,options);
}

export const updateInfosActUtil = (params,options={}) => {//参保人 -- 信息变更操作
	const url = API_PSIORDER+'change-info/'+params.id;
	return fetch.putJson(url,params,options);
}

export const ajustBaseUnnormalActUtil = (params,options={}) => {//获取接单异常信息--调基处理异常操作
	const url = API_PSIORDER_FORM+params.id+'/abnormal/deal-update-base';
	return fetch.putJson(url,params,options);
}

export const ajustBaseUnnormalDetailUtil = (params,options={}) => {//获取接单异常信息--调基处理异常操作 : 获取回填数据
	const url = API_PSIORDER_FORM+params.id+'/abnormal/update-base';
	return fetch.get(url,options);
}

export const ajustAlarmOprateActUtil = (params,options={}) => {//基数必调、基数可调 -- 调基操作
	const url = API_PSIORDER+'update-base';
	return fetch.putJson(url,params,options);
}

export const ajustAlarmOprateDetailUtil = (params,options={}) => {//基数必调、基数可调 -- 调基操作的回填数据
	const url = API_PSIORDER+'update-base/insurance/'+params;
	return fetch.get(url,options);
}

export const ajustAlarmListUtil = (params,options={}) => {//调基警报列表 -- 基数必调、基数可调
	const url = API_PSIORDER+'ent-insured-persons'+(params?params:'');
	return fetch.get(url,options);
}

export const fontHandleReturnUtil = (params,options={}) => {//前道处理退回操作
	const url = API_PSIORDER+'pre-bill-handle-return';
	return fetch.post(url,params,options);
}

export const updateIsAllowFormUtil=(params,options={})=>{//更新后道首页统计（更新停止接单、允许继续接单）
	const url=API_PSIORDER+'back-process-statistics';
	return fetch.putJson(url,params,options);
}

export const batchImportDatumUtil=(params,options={})=>{//资料信息 - 导入材料
	const url=API_PSIORDER+'datum-import';
	return fetch.post(url,params,options);
}

export const getAllInvalidDatumUtil=(params,options={})=>{//资料信息 - 获取异常材料列表
	const url=API_PSIORDER+'invalid-datums'+(params?'?'+params:'');
	return fetch.get(url,options);
}

export const getInvalidDupPeopleUtil=(params,options={})=>{//资料信息 - 重名人员名称列表(下拉框数据)
	const url=API_PSIORDER+'datum-dup-people'+(params?'?'+params:'');
	return fetch.get(url,options);
}

export const getInvalidDatumNameUtil=(params,options={})=>{//资料信息 - 材料名称列表(下拉框数据)
	const url=API_PSIORDER+'online-datums'+(params?'?'+params:'');
	return fetch.get(url,options);
}

export const dealInvalidDupPeopleUtil=(params,options={})=>{//资料信息 - 重名处理
	const url=API_PSIORDER+'datum-dup-people';
	return fetch.post(url,params,options);
}

export const dealInvalidDatumNameUtil=(params,options={})=>{//资料信息 - 材料名称处理
	const url=API_PSIORDER+'datum-select-names';
	return fetch.post(url,params,options);
}

export const deleteInvalidDatumUtil=(params,options={})=>{//资料信息 - 异常材料删除操作
	const url=API_PSIORDER+'invalid-datum/'+params.id;
	return fetch.del(url,params,options);
}


export const preImportHisRecordUtil=(params,options={})=>{//历史缴纳记录 - 历史缴纳记录预导入
	const url=API_PSIORDER+'historical/get-mapping';
	return fetch.post(url,params,options);
}

export const realImportHisRecordUtil=(params,options={})=>{//历史缴纳记录 - 导入历史缴纳记录
	const url=API_PSIORDER+'historical/do-import';
	return fetch.post(url,params,options);
}


export const deletHistoryModalUtil=(params,options={})=>{//历史缴纳记录 - 删除历史缴纳记录模板
	const url=API_PSIORDER+'historical/del-template/'+params.id;
	return fetch.del(url,params,options);
}

export const getHistoryModalsUtil=(params,options={})=>{//历史缴纳记录 - 获取历史缴纳记录模版列表
	const url=API_PSIORDER+'historical/list-templates'+(params?'?'+params:'');
	return fetch.get(url,options);
}

export const deletBillEmployeeUtil=(params,options={})=>{//(生成接单表数据中)删除新入职或已离职员工
	const url='/api/empmgm/do-form-status';
	return fetch.putJson(url,params,options);
}

export const getHhrsipolicyUtil=(params,options={})=>{//户籍性质列表--雇员使用(根据部分信息获取户籍性质：客户ID和社保缴纳地)
	const url='/api/sipolicy/policy-hhr'+(params?'?'+params:'');
	return fetch.get(url,options);
}

export const handlePaybackUnabnormalPolicyUtil=(params,options={})=>{//接单列表--处理补缴异常
	const url=API_PSIORDER+'payback-range/'+params.id;
	return fetch.putJson(url,params,options);
}

export const geEntRenewListUtil=(params,options={})=>{//接单列表--正常汇缴
	const url=API_PSIORDER+'pre-bill-detail'+(params?params:'');
	return fetch.get(url,options);
}

export const getSipolicyLimitsUtil=(params,options={})=>{//险种限制条件
	const url='/api/sipolicy/limits/'+params.id+(params.query?'?'+params.query:'');
	return fetch.get(url,options);
}

export const billExportAbnormalUtil=(params,options={})=>{//接单列表-批量导出异常
	const url=API_PSIORDER+'form-abnormal/export'+(params?'?'+params:'');
	return fetch.get(url,options);
}

export const getAbnormalDetailUtil=(params,options={})=>{//获取同月增员且减员的信息详情
	const url=API_PSIORDER_FORM+params.id+'/abnormal/infos';
	return fetch.get(url,options);
}

export const handleDealOriginalBaseUtil=(params,options={})=>{//接单列表：处理同月增减异常-按原基数办理
	const url=API_PSIORDER_FORM+params.id+'/abnormal/deal-originalbase';
	return fetch.putJson(url,params,options);
}

export const handleDealAddDecreaseUtil=(params,options={})=>{//接单列表：处理同月增减异常-本月减员且增员
	const url=API_PSIORDER_FORM+params.id+'/abnormal/deal-decreaseadd';
	return fetch.putJson(url,params,options);
}

export const handleDealDecreaseUtil=(params,options={})=>{//接单列表：处理同月增减异常-本月减员
	const url=API_PSIORDER_FORM+params.id+'/abnormal/deal-decrease';
	return fetch.putJson(url,params,options);
}
