import * as fetch from './fetch';


const COMPANY_PATH = '/api/empmgm';
const ORDER_PATH 	 = '/api/psiorder';
const FRONT_PROCESS= '/api/psiorder/front-process';
const OP_ADMIN		 = '/api/psiorder/back-op-admin';



export const insuredDirectDecreaseUtil=(params,options={})=>{//参保人 - 一键减员
	const url=ORDER_PATH + '/ent-insured-persons/op/batch-direct-decrease';
	return fetch.post(url,params,options);
}

export const getBuildOrderInsUtil=(params,options={})=>{//入离职接单 - 人员险种信息
	const url=COMPANY_PATH+'/statistics-insurance';
	return fetch.post(url,params,options);
}

export const getEntIndPersonInsuranceUtil=(params,options={})=>{//参保人 - 获取政策+参保人险种
	const url=ORDER_PATH+'/ent-insured-persons/'+params.id+'/abnormal'+(params.query?'?'+params.query:'');
	return fetch.get(url,options);
}

export const deleteOrderListUtil=(params,options={})=>{//接单 - 删除记录
	const url=ORDER_PATH+'/front-delete/record'+(params?'?'+params:'');
	return fetch.get(url,options);
}

export const getLimitRangeDetailUtil=(params,options={})=>{//接单 - 处理异常获取回填的信息数据的上线控制
	const url=ORDER_PATH+'/form/'+params.id+'/base-range'+(params.query?'?'+params.query:'');
	return fetch.get(url,options);
}

export const getHistoryDetailUtil=(id,options={})=>{//历史缴纳记录详情
	const url=ORDER_PATH+'/pre-bill-detail/'+id;
	return fetch.get(url,options);
}

export const getEntRenewDetailUtil=(id,options={})=>{//接单列表--正常汇缴 -- 详情接口
	const url=ORDER_PATH+'/pre-bill-detail/'+id;
	return fetch.get(url,options);
}

export const getOrderList = (params, options = {}) => {
	const url = COMPANY_PATH + '/do-form-status' + params;
	return fetch.get(url, options);
}
//获取户籍性质列表
export const getGegisterList = (id, options = {}) => {
	const url = '/api/sipolicy/policy-hhr/' + id;
	return fetch.get(url, options);
}
//接单统计信息
export const getOrderCount = () => {
	const url = ORDER_PATH + '/ent-form-statistics';
	return fetch.get(url);
}
//办理信息失败统计
export const getInfoFieldCount = () => {
	const url = ORDER_PATH + '/ent-process-statistics';
	return fetch.get(url);
}
//资料信息统计
export const getDataInfoCount = () => {
	const url = ORDER_PATH + '/ent-datum-statistics';
	return fetch.get(url);
}
//参保人员列表
export const getInsuredMember = (params, options = {}) => {
	const url = ORDER_PATH + '/ent-insured-persons' + params;
	return fetch.get(url, options);
}
//客户统计列表
export const getCustomerCount = () => {
	const url = ORDER_PATH + '/customer-statistics';
	return fetch.get(url);
}

//生成接单表增员
export const orderOperate = (params, options = {}) => {
	const url = ORDER_PATH + '/form/op/confirm-increase';
	return fetch.post(url, params, options);
}
//生成接单表减员
export const orderDecrease = (params, options = {}) => {
	const url = ORDER_PATH + '/form/op/confirm-decrease';
	return fetch.post(url, params, options);
}
//接单表确认提交
export const orderSubmit = (params, options = {}) => {
	const url = ORDER_PATH + '/form-submit';
	return fetch.post(url, params, options);
}
//接单表再次确认提交
export const orderAgainSubmit = (params, options = {}) => {
	const url = ORDER_PATH + '/form-re-submit';
	return fetch.post(url, params, options);
}
//资料信息列表
export const getDataInfoList = (params, options = {}) => {
	const url = ORDER_PATH + '/datum-check' + params;
	return fetch.get(url, options);
}
//提醒上传资料
export const hintUpdate = (params,options = {}) => {
	const url = ORDER_PATH + '/datum-check/warning';
	return fetch.post(url, params, options);
}
//历史缴纳记录列表
export const getHistoryList = (params, options = {}) => {
	const url = ORDER_PATH + '/pre-bill-detail' + params;
	return fetch.get(url, options);
}
//预收明细导出
export const presellBillImport = (params, options = {}) => {
	const url = ORDER_PATH + '/pre-bills/op/export';
	return fetch.post(url,params, options);
}
//预收账单列表
export const getPreseList = (params, options = {}) => {
	const url = ORDER_PATH + '/pre-bill' + (params?'?'+params:'');
	return fetch.get(url, options);
}
//预收账单详情列表
export const getPreseDetailList = (params, options = {}) => {
	const url = ORDER_PATH + '/pre-bill/' + params.id + '/op/detail?' + params.query ;
	return fetch.get(url, options);
}
//所需办理资料
export const getDataNeeded = (params, options = {}) => {
	const url = '/api/sipolicy/datum-fields';
	return fetch.post(url, params, options);
}
//增员
export const addMember = (params, options = {}) => {
	const url = ORDER_PATH + '/pre-bill-increase';
	return fetch.post(url, params, options);
}
//接单表列表
export const getOrderFormList = (params, options = {}) => {
	const url = ORDER_PATH + '/form' + params;
	return fetch.get(url, options);
}
//生成账单明细
export const buildOrder = (params, options = {}) => {
	const url = ORDER_PATH + '/pre-bill-generate';
	return fetch.post(url, params, options);
}
//生成账单明细再次提交
export const againSubmit = (params, options = {}) => {
	const url = ORDER_PATH + '/pre-bill-submit';
	return fetch.post(url, params, options);
}
//上传接单模板
export const getOrderTem = (params) =>{
	const url=ORDER_PATH + '/do-import-template';
	return fetch.post(url,params);
}
//新建社保接单模板
export const addSocialOrderTem = (params, options = {}) => {
	const url = ORDER_PATH + '/form-template';
	return fetch.post(url,params, options);
}

//处理政策异常
export const dealPolicy = (params, options = {}) => {
	const url = ORDER_PATH + '/form-handle-policy/'+params.id;
	return fetch.post(url, params, options);
}

//接单明细详情
export const getBillListDetailUtil = (id, options = {}) => {
	const url = ORDER_PATH + '/pre-bill-detail/' + id;
	return fetch.get(url, options);
}

//接单列表详情
export const getOrderListDetail = (id, options = {}) => {
	const url = ORDER_PATH + '/form/' + id;
	return fetch.get(url, options);
}

//参保人员详情
export const getInsuredDetail = (id, options = {}) => {
	const url = ORDER_PATH + '/ent-insured-persons/' + id;
	return fetch.get(url, options);
}
//社保人员批量导入
export const socialImport = (params, options = {}) => {
	const url = ORDER_PATH + '/ent-insured-persons/op/import';
	return fetch.post(url, params, options);
}
//接单详情修改
export const detailUpdate = (params, options = {}) => {
	const url = ORDER_PATH + '/form/'+params.id;
	return fetch.put(url, params, options);
}
//预收明细详情修改
export const presellUpdate = (params, options = {}) => {
	const url = ORDER_PATH + '/pre-bill-detail/'+params.id;
	return fetch.put(url, params, options);
}
//接单表删除
export const orderDel = (params, options = {}) => {
	const url = ORDER_PATH + '/form';
	return fetch.del(url,params,options);
}
//接单模板列表
export const getFormTem = (params, options = {}) => {
	const url = ORDER_PATH + '/form-templates' + params;
	return fetch.get(url, options);
}
//接单表删除
export const delTem = (id, options = {}) => {
	const url = ORDER_PATH + '/form-templates/'+id;
	return fetch.del(url, options);
}
//参保人员处理政策异常
export const insuredDeaPolicy = (params, options = {}) => {
	const url = ORDER_PATH + '/ent-insured-persons/'+params.id+'/op/handle-policy';
	return fetch.put(url, params, options);
}
//参保人员缺少信息处理异常
export const insuredDealWith = (params, options = {}) => {
	const url = ORDER_PATH + '/ent-insured-persons/'+params.id;
	return fetch.put(url, params, options);
}
//客户统计信息
export const getCustomerStatistics = () => {
	const url = ORDER_PATH + '/ent-customer-statistics';
	return fetch.get(url);
}
//社保人员减员
export const insuredDecrease = (params, options = {}) => {
	const url = ORDER_PATH + '/ent-insured-persons/'+params.id+'/op/decrease';
	return fetch.put(url,params,options);
}
//社保人员删除
export const insuredDelete = (params, options = {}) => {
	const url = ORDER_PATH + '/ent-insured-persons/'+params.id;
	return fetch.del(url,options);
}
//预收明细导出
export const prebillExport = (params, options = {}) => {
	const url = ORDER_PATH + '/pre-bill-export?id='+params.id;
	return fetch.post(url,params,options);
}
//导入接单
export const importOrder = (params) =>{
	const url=ORDER_PATH + '/form/do-import';
	return fetch.post(url,params);
}

//接单预导入
export const preImportOrder = (params) =>{
	const url=ORDER_PATH + '/form/pre-import';
	return fetch.post(url,params);
}

//导入接单
export const getAccountInfo = (params) =>{
	const url=ORDER_PATH + '/pre-bill-policy-accounts';
	return fetch.post(url,params);
}



/**********************************企业前后道**********************************/

//后道资料更新
export const backUpdateFilesUtil = (params,options={}) => {
	const url = ORDER_PATH+'/insured-person-back/'+params.id;
	return fetch.putJson(url,params,options);
}

//前道列表
export const getFrontProcessList = (params,options={}) =>{
	const url=FRONT_PROCESS+(params?'?target_type=ent&'+params:'');
	return fetch.get(url,options);
}
//前道详情
export const getFrontProcessDetail = (params,options={}) =>{
	const url=FRONT_PROCESS+'/'+params.id+'?target_type=ent';
	return fetch.get(url,options);
}

//前道资料更新
export const updateFiles = (params,options={}) => {
	const url = ORDER_PATH+'/insured-person/'+params.insured_person_id;
	return fetch.put(url,params,options);
}

//获取后道负责人列表
export const getAjustAdminList = (params,options={}) => {
	const url = OP_ADMIN+(params?'?'+params:'');
	return fetch.get(url,options);
}

//前道资料审核
export const checkDatum = (params,options={}) => {
	const url = ORDER_PATH+'/datum-check';
	return fetch.post(url,params,options);
}

//前道确认提交
export const applyAct = (params,options={}) => {
	const url = FRONT_PROCESS+'/op/apply';
	return fetch.post(url,params,options);
}

//前道下月新增且补缴
export const increaseAndPayback = (params,options={}) => {
	const url = FRONT_PROCESS+'/op/increase-and-payback';
	return fetch.post(url,params,options);
}

//前道取消
export const frontProcessCancel = (params,options={}) => {
	const url = FRONT_PROCESS+`/op/cancel`
	return fetch.post(url,params,options);
}

//前道下月补缴
export const onlyPayback = (params,options={}) => {
	const url = FRONT_PROCESS+`/op/payback`
	return fetch.post(url,params,options);
}

//分配实操负责人
export const opBackAdmin = (params,options={}) => {
	const url = OP_ADMIN;
	return fetch.post(url,params,options);
}
//获取后道办理人详情
export const getBackAdminDetail = (params,options={}) => {
	const url = OP_ADMIN+'/'+params.id;
	return fetch.get(url,options);
}

//获取后道办理人账户客户信息
export const getBackAccountCustomerList = (params,options={}) => {
	const url = '/api/psiorder/back-account-customer';
	return fetch.get(url,options);
}

//取消后道分配办理人
export const cancelBackAdmin = (params,options={}) => {
	const url = '/api/psiorder/back-op-admin/'+params.id;
	return fetch.del(url,params,options);
}

//获取前道按基数处理回填数据
export const getBackClict = (params,options={}) => {
	const url = '/api/psiorder/conflict-check/'+params.id+'/info';
	return fetch.get(url,options);
}

//前道按基数处理操作
export const handleBackClict = (params,options={}) => {
	const url = '/api/psiorder/conflict-check/'+params.front_process_id+'/op/handle';
	return fetch.put(url,params,options);
}

//获取所有险种
export const getInsuranceByParams = (params,options={}) =>{
	const url = '/api/sipolicy/insurances';
	return fetch.post(url,params,options);
}

//上传历史缴纳记录模板
export const hisImportTemplate = (params,options={}) =>{
	const url = '/api/psiorder/historical/import-template';
	return fetch.post(url,params,options);
}

//创建历史缴纳记录模板
export const addHisImportTemplate = (params,options={}) =>{
	const url = '/api/psiorder/historical/create-template';
	return fetch.post(url,params,options);
}


// 导入记录列表(社保)
export const getCompanyServerRecordsUitl=(params,options={})=>{
	const url='/api/psiorder/import-jobs'+(params?'?'+params:'');
	return fetch.get(url,options);
}

//导入失败记录列表(社保)
export const getFailCompanyServerRecordsUitl=(params,options={})=>{
	const url='/api/psiorder/import-jobs/'+params.id+'/records';
	return fetch.get(url,options);
}
// 社保办理后道导入

// 获取法务实体列表
export const getLegalAll=(data,options={})=>{
	const url=`/api/uaa/tenants/${data.tenant_id}/legal-entities?customer=true`
	return fetch.get(url,options)
}

// 新建社保导入模板
export const addSocialOrderTemImport = (params, options = {}) => {
	const url = `/api/psiorder/back_process/ext/do-import`
	return fetch.post(url,params, options);
}
// 删除退回险种   //撤销参保
export const deleteSendBack = (params, options = {}) => {
	const url = FRONT_PROCESS + '/op/' + params.op_type
	return fetch.post(url,params, options);
}
// 后道退回 获取其他账户的险种
export const getAssociatedRisks = (params, options = {}) => {
	const url = '/api/psiorder/back-process/account/' +  params+ '/otherins'
	return fetch.get(url, options);
}
