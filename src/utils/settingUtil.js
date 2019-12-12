import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';

const SET_PATH = '/api/uaa/tenants';
const ROLE_PATH = '/api/uaa/roles';
const ADMIN_PATH = '/api/uaa/admins';
const LEGAL_PATH = '/api/uaa/tenants';


/********************************* 设置 - 企业基本信息 **********************************/

export const getBasicInfo = (id, options = {}) => { //查看企业基本信息详情
	const url = SET_PATH + "/" + id;
	return fetch.get(url, options);
}

export const updateBasicInfo = (data, options = {}) => { //修改企业基本信息详情
	const url = SET_PATH + "/" + data.id;
	return fetch.putJson(url, data, options);
}


/********************************* 设置 - 法务实体 **********************************/

export const getLegal = (data, options = {}) => {//获取法务实体列表
	const url = LEGAL_PATH + '/' + data.tenant_id + '/legal-entities?all=true';
	return fetch.get(url, options);
}
export const loadLegalPaged = (data, options = {}) => {//获取法务实体列表
	const { tenant_id = '', parm = '' } = data
	const url = LEGAL_PATH + '/' + data.tenant_id + '/legal-entities' + parm;
	return fetch.get(url, options);
}

export const addLegal = (data, options = {}) => {//添加法务实体
	const url = LEGAL_PATH + '/' + data.tenant_id + '/legal-entities';
	return fetch.post(url, data, options);
}

export const updateLegal = (data, options = {}) => {//更新法务实体
	const url = LEGAL_PATH + '/' + data.tenant_id + '/legal-entities/' + data.id;
	return fetch.putJson(url, data, options);
}

export const delLegal = (data, options = {}) => {//删除法务实体
	const url = LEGAL_PATH + '/' + data.tenant_id + '/legal-entities/' + data.id;
	return fetch.del(url, {}, options);
}


/*********************设置 - 角色列表 *********************/

export const getRoles = (data, options = {}) => { //查看角色列表
	const url = ROLE_PATH + (data ? data : '?limit=100&offset=0');
	return fetch.get(url, options);
}

export const addRole = (data, options = {}) => { //添加角色
	const url = ROLE_PATH;
	return fetch.post(url, data, options);
}

export const getRole = (id, options = {}) => { //查看角色详情
	const url = ROLE_PATH + '/' + id;
	return fetch.get(url, options);
}

export const updateRole = (data, options = {}) => { //更新角色
	const url = ROLE_PATH + '/' + data.id;
	return fetch.putJson(url, data, options);
}

export const deleteRole = (id, options = {}) => { //删除角色
	const url = ROLE_PATH + '/' + id;
	return fetch.del(url, {}, options);
}

export const getSysperms = (options = {}) => {//权限列表
	const url = '/api/uaa/sysperms';
	return fetch.get(url, options);
}

/*********************设置 - 内部员工  *********************/
export const addAdmin = (data, options = {}) => { //添加内部员工
	const url = ADMIN_PATH;
	return fetch.post(url, data, options);
}

// 内部员工 交接工作
export const gethandOver = (data, options = {}) => {
	const url = `/api/uaa/handover?admin_id=${data.id}&type=${data.type}`
	return fetch.get(url, options)
}

// 内部员工 提交交接工作
export const posthandOver = (data, options = {}) => {
	const url = `/api/uaa/handover`
	return fetch.post(url, data, options)
}

/*
*limit=10&offset=0&<其他过滤参数>
*/
export const getAdmins = (query, options = {}) => {//列表内部员工
	const url = ADMIN_PATH + query;
	return fetch.get(url, options);
}
export const getAdmin = (id, options = {}) => {//查看内部员工
	const url = ADMIN_PATH + '/' + id;
	return fetch.get(url, options);
}
/*
*?limit=10&offset=0&<其他过滤参数>
*/
export const getSimpleAdmins = (query, options = {}) => {//列表内部员工  接口简化后的请求
	const url = '/api/uaa/simple/admins' + query;
	return fetch.get(url, options);
}

export const updateAdmin = (data, options = {}) => { //更新内部员工
	const url = ADMIN_PATH + '/' + data.id;
	return fetch.putJson(url, data, options);
}
/*冻结/启用内部员工
参数名	类型	描述	Required
action	string	固定值: disable(冻结) 、 启用(enable)	Yes
*/
export const adminOperate = (data, options = {}) => { //冻结/启用内部员工
	const url = ADMIN_PATH + '/' + data.id + '/action';
	return fetch.post(url, data, options);
}
export const delAdmin = (id, options = {}) => {
	const url = ADMIN_PATH + '/' + id;
	return fetch.del(url, {}, options);
}

export const addInterviewPerson = (data, options = {}) => { //添加面试负责人（人力资源机构）
	const url = ADMIN_PATH;
	return fetch.post(url, data, options);
}

export const getCustomerAdmins = (query, options = {}) => {//企业客户用户列表
	const url = '/api/uaa/cadmins' + query;
	return fetch.get(url, options);
}

export const addInterviewCustomer = (data, options = {}) => { //添加面试负责人（客户）
	const url = '/api/uaa/cadmins';
	return fetch.post(url, data, options);
}


export const getActionSysperms = (options = {}) => {//权限列表
	const url = '/api/uaa/perms';
	return fetch.get(url, options);
}


// 小程序设置  招聘业务get
export const getResumeSetting = (options = {}) => {
	const url = '/api/recruit/resume-setting'
	return fetch.get(url, options)
}

// 人才库,微信自定义字段显示get
export const getFormDefind = (params, options = {}) => {
	const url = `/api/formmeta/fields${params}`
	return fetch.get(url, options)
}

// 人才库,微信自定义字段显示put
export const putFiledsOptions = (params, options = {}) => {
	const url = `/api/formmeta/fields-options`
	return fetch.put(url, params, options)
}

// 小程序设置  招聘业务post
export const postResumeSetting = (data, options = {}) => {
	const url = '/api/recruit/resume-setting'
	return fetch.post(url, data, options)
}
// 题库设置-题库表格导入
export const uploadQuestionBank = (data, options = {}) => {
	const url = '/api/intelligencemgm/questions/do-import'
	return fetch.post(url, data, options)
}
// 题库设置-获取题库列表
export const loadQuestionBankList = (options = {}) => {
	const url = '/api/intelligencemgm/question-papers'
	return fetch.get(url, options)
}
// 题库设置-获取题库详情（试卷预览）
export const getQuestionPapersDet = (data, options = {}) => {
	const { id = '', param = '' } = data;
	const url = '/api/intelligencemgm/question-papers/' + id + param
	return fetch.get(url, options)
}
// 题库设置-获取单条题目的详情
export const getQuestionItemDet = (data, options = {}) => {
	const { id = '', param = '' } = data;
	const url = '/api/intelligencemgm/questions/' + id
	return fetch.get(url, options)
}
// 题库设置-编辑单条题目
export const editQuestionItem = (data, options = {}) => {
	const { id = '', param = '' } = data;
	const url = '/api/intelligencemgm/questions/' + id
	return fetch.put(url, data, options)
}
// 题库设置-删除单条题目
export const deleteQuestionItem = (data, options = {}) => {
	const { id = '', param = '' } = data;
	const url = '/api/intelligencemgm/questions/' + id
	return fetch.del(url, data, options)
}
// 题库设置-分数设置post(测评参考）
export const scoreSetting = (data, options = {}) => {
	const url = '/api/intelligencemgm/evaluation-references'
	return fetch.post(url, data, options)
}
// 题库设置-分数设置get(测评参考）
export const getScoreSetting = (data, options = {}) => {
	const { id = '', param = '' } = data;
	const url = '/api/intelligencemgm/evaluation-references/' + id;
	return fetch.get(url, data, options)
}

// 是否可以导出简历
export const getCanExport = (options = {}) => {
	const url = `/api/recruit/can-export/resume`
	return fetch.get(url, options)
}

// 导出简历log
export const loadResumesExport = (data, options = {}) => {
	const url = `/api/recruit/logs/resumes${data}`
	return fetch.get(url, options)
}

//数据范围设置列表
export const getDataRangeUtil = (params, options) => {
	const url = `/api/uaa/data-range-setting`
	return fetch.get(url, options)
}

//数据范围设置编辑
export const updateDataRangeUtil = (params, options) => {
	const url = `/api/uaa/data-range-setting`
	return fetch.put(url,params,options)
}

//客户业务设置
export const getCustomerbusinessSetUtil = (params,options={}) => {
	const url = `api/crm/setting`
	return fetch.get(url,options)
}

//新增客户业务设置
export const addCustomerbusinessSetUtil = (params,options={}) => {
	const url = `api/crm/setting`
	return fetch.post(url,params,options)
}
//更新客户业务设置
export const editCustomerbusinessSetUtil = (params,options={}) => {
	const url = `api/crm/setting/${params.id}`
	return fetch.putJson(url,params,options)
}
//获取服务合同
export const getContractSetUtil = (params,options={}) => {
	const url = `api/servicecontract/custom/setting`
	return fetch.get(url,options)
}
//新建或更新服务合同设置   
export const addContractSetUtil = (params,options={}) => {
	const url = `api/servicecontract/custom/setting`
	return fetch.put(url, params, options)
}
//获取支付密码
export const getPasswordSetUtil = (params, options) => {
	const url = `/api/payroll/pay/passwords`
	return fetch.get(url, options)
}
//设置支付密码
export const postPasswordSetUtil = (params, options) => {
	const url = `/api/payroll/pay/passwords`
	return fetch.post(url, params, options)
}

//专项附加扣除更新设置
export const getAppendDeductUpdateSettingActionApi = (params, options) => {
	const url = `/api/persontax/download-setting`
	return fetch.get(url, params, options)
}

//专项附加扣除更新设置--提交
export const submitAppendDeductUpdateSettingActionApi = (params, options) => {
	const url = `/api/persontax/download-setting`
	return fetch.post(url, params, options)
}