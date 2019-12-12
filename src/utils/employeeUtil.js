import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';


const EMPLOYEE_PATH = '/api/empmgm/employees';
const EMPLOYEE_PATH_SIMPLE = '/api/empmgm/simple/employees';
const EMPLOYEE_PATH_COUNT = '/api/empmgm/mycount';
const EMPLOYEE_LEAVE = '/api/empmgm/separate-employees';


//生成接单表已离职编辑接口
export const updateLeaveEmpUtil = (params, options = {}) => {
	const url = EMPLOYEE_LEAVE + '/' + params.id;
	return fetch.putJson(url, params, options);
}

//新增雇员
export const newIncreaseEmpUtil = (params, options = {}) => {
	const url = EMPLOYEE_PATH;
	return fetch.post(url, params, options);
}
//获取动态表达定义
export const getFormDefind = (params, options = {}) => {
	const url = '/api/formmeta/fields' + '?form=employee&category=empmgm';
	return fetch.get(url, options);
}

//获取自定义表单列表(内含数据结构)
export const loadSelfDefineFormDefindList = (params, options = {}) => {
	const url = '/api/empmgm/employees/' + params + '/my-forms';
	return fetch.get(url, options);
}
//获取自定义表单数据
export const loadSelfDefineFormDefindDetail = (params, options = {}) => {
	const url = '/api/empmgm/employees/' + params.id + '/forms/' + params.myselfFormId + '/data';
	return fetch.get(url, options);
}
//提交自定义表单数据
export const putSelfDefineFormDefindDetail = (params, options = {}) => {
	const url = '/api/empmgm/employees/' + params.id + '/forms/' + params.myselfFormId + '/data';
	return fetch.post(url, params.data, options);
}

//在职/待入职／离职人数   （雇员首页展示）
export const getEmployeeKindNum = (params, options = {}) => {
	const url = EMPLOYEE_PATH_COUNT;
	return fetch.get(url, options);
}
//在职/待入职列表
export const getEmployee = (params, options = {}) => {
	const url = EMPLOYEE_PATH + params;
	return fetch.get(url, options);
}
//在职/待入职列表  更新（简化版本）
export const getEmployeeSimple = (params, options = {}) => {
	const url = EMPLOYEE_PATH_SIMPLE + params;
	return fetch.get(url, options);
}


//在职/待入职详情
export const getEmployeeDet = (params, options = {}) => {
	const url = EMPLOYEE_PATH + '/' + params.id;
	return fetch.get(url, options);
}

//离职列表
export const getLeaveEmployee = (params, options = {}) => {
	const url = EMPLOYEE_LEAVE + params;
	return fetch.get(url, options);
}

//离职详情
export const getLeaveEmployeeDet = (params, options = {}) => {
	const url = EMPLOYEE_LEAVE + '/' + params.id;
	return fetch.get(url, options);
}

//在职/待入职更新
export const updateEmployeeDet = (params, options = {}) => {
	const url = EMPLOYEE_PATH + '/' + params.id;
	return fetch.put(url, params, options);
}


// 雇员调岗
export const switchPosition = (params, options = {}) => {
	const url = `/api/empmgm/switch-position`
	return fetch.post(url, params, options)
}

//确认到岗
export const sureOnboard = (params, options = {}) => {
	const url = EMPLOYEE_PATH + "/" + params.id + '/op/onboard';
	return fetch.post(url, params, options);
}

//确认未入职
export const sureAbandon = (params, options = {}) => {
	const url = EMPLOYEE_PATH + "/" + params.id + '/op/abandon';
	return fetch.post(url, params, options);
}

//办理离职
export const separateUitl = (params, options = {}) => {
	const url = EMPLOYEE_PATH + "/" + params.id + '/op/separate';
	return fetch.post(url, params, options);
}
//导入在职雇员
export const importEmpUitl = (params, options = {}) => {
	const url = 'api/empmgm/do-import';
	return fetch.post(url, params, options);
}
//导入离职雇员
export const importEmpOffUitl = (params, options = {}) => {
	const url = 'api/empmgm/separate-employees/do-import';
	return fetch.post(url, params, options);
}


//获取公积金详情
export const getPersonRecords = (params, options = {}) => {
	const url = '/api/socialinsurance/housing-fund/person-records' + "?category=renewal&" + params;
	return fetch.get(url, options);
}


//获取个人社保详情
export const getSocialinsurance = (params, options = {}) => {
	const url = '/api/socialinsurance/person-records' + "?category=renewal&" + params;
	return fetch.get(url, options);
}

//获取短信模版
export const smsTemplates = (params, options = {}) => {
	const url = 'api/sms/sms_templates?' + params;
	return fetch.get(url, options);
}

//获取雇员人数
export const employeeNum = (values = '', options = {}) => {
	const url = 'api/empmgm/employee-num' + values;
	return fetch.get(url, options);
}


//批量入职
export const batchOnboard = (params, options = {}) => {
	const url = 'api/empmgm/batch/employees/op/onboard';
	return fetch.post(url, params, options);
}

//批量离职
export const batchSeparate = (params, options = {}) => {
	const url = '/api/empmgm/batch/employees/op/separate';
	return fetch.post(url, params, options);
}

//导出在职/离职雇员
export const downloadEmployees = (params, options = {}) => {
	const url = 'api/empmgm/do-export' + params;
	return fetch.get(url, options);
}
//办理入职模版列表
export const entryTemplateList = (params, options = {}) => {
	const url = 'api/empmgm/onboard-templates' + '?' + params;
	return fetch.get(url, options);
}
//办理入职模版详情
export const loadEntryTmpDetail = (params = '', options = {}) => {
	const url = '/api/empmgm/onboard-templates/' + params;
	return fetch.get(url, options);
}
//办理入职模版详情 批量
export const getEntryTmpDetail = (params, employeeId, options = {}) => {
	console.warn(params)
	const url = `/api/contract/templates/op/batch-query`
	return fetch.post(url, params, options);
}

//模版详情-->合同开始时间
export const getOnboardTemplates = (id, options = {}) => {
	const url = `/api/empmgm/onboard-templates/${id}`
	return fetch.get(url, options);
}

//
export const submitNewOnboard = (params, options = {}) => {
	const url = `/api/empmgm/batch/employees/new-onboard`
	return fetch.post(url, params, options);
}

//删除办理入职模版
export const delEntryTmp = (params = '', options = {}) => {
	const url = '/api/empmgm/onboard-templates/' + params;
	return fetch.del(url, options);
}
//新建办理入职模版
export const newEntryTmp = (params, options = {}) => {
	const url = '/api/empmgm/onboard-templates';
	return fetch.post(url, params, options);
}
//编辑办理入职模版
export const editEntryTmp = (params, options = {}) => {
	const url = '/api/empmgm/onboard-templates/' + params.id;
	return fetch.put(url, params, options);
}
//入职办理进度列表
export const entryProcessList = (params, options = {}) => {
	console.log(params);
	console.log(3333);
	const url = EMPLOYEE_PATH + params;
	return fetch.get(url, options);
}
//入职办理进度异常与提醒
export const warnAndException = (params, options = {}) => {
	console.log(params);
	console.log(3333);
	const url = EMPLOYEE_PATH + "/" + params.id + '/onboard-action';
	// const url=EMPLOYEE_PATH+"/"+123+'/onboard-action';
	return fetch.post(url, params, options);
}
//入职办理进度通过或者拒绝
export const employeeJoinOrRefuse = (params, options = {}) => {
	console.log(params);
	console.log(3333);
	const { id = '', } = params
	const url = EMPLOYEE_PATH + "/" + id;
	// const url=EMPLOYEE_PATH+"/"+123+'/onboard-action';
	return fetch.put(url, params, options);
}
//获得入职模版修改详情
export const getContractsModifyDetail = (params, options = {}) => {
	console.log(params);
	console.log(3333);
	const url = EMPLOYEE_PATH + "/" + params.id + '/onboard-template/contracts-modify';
	return fetch.get(url, params, options);
}
//获取自定义的所有表单列表
export const getFormsList = (params, options = {}) => {
	console.log(params);
	console.log(3333);
	const url = '/api/formmeta/forms' + '?' + params;
	return fetch.get(url, options);

}
//获取入职任务列表
export const joinTaskList = (params, options = {}) => {
	console.log(params);
	console.log(3333);
	const url = '/api/empmgm/employees/' + params + '/onboard-checks';
	return fetch.get(url, options);

}
//自定义表单模版解析
export const formRresolveTemplate = (params, options = {}) => {
	console.log(params);
	console.log(3333);
	const url = '/api/common/resolve-template';
	return fetch.post(url, params, options);

}
//新建表单
export const newFormInEmployee = (params, options = {}) => {
	if (params) {
		const url = '/api/empmgm/onboard-templates' + "/" + params.id + '/forms';
		return fetch.post(url, params, options);
	}

}
//获取表单数据
export const getFormItem = (params, options = {}) => {
	const url = '/api/formmeta/fields' + params;
	return fetch.get(url, params, options);
}

//新建入职模版资料
export const newTemplateInfo = (params, options = {}) => {
	const url = '/api/empmgm/onboard-items';
	return fetch.post(url, params, options);

}
//查看入职模版资料
export const getMaterialInfoDetail = (params, options = {}) => {
	const url = '/api/empmgm/onboard-items/' + params;
	return fetch.get(url, params, options);

}
//编辑入职模版资料
export const editTemplateInfo = (params, options = {}) => {
	console.log(params);
	console.log(777);
	const url = '/api/empmgm/onboard-items/' + params.id;
	return fetch.put(url, params, options);

}


//删除入职模版资料
export const delTemplateInfo = (params, options = {}) => {
	const url = '/api/empmgm/onboard-items/' + params
	return fetch.del(url, options);
}

// 雇员导入记录
export const getEmpoyeeRecordsUitl = (params, options = {}) => {
	const url = '/api/empmgm/import-jobs' + (params ? params : '')
	return fetch.get(url, options)
}


//获取导入失败记录列表(雇员管理)
export const getFailEmpoyeeRecordsUitl = (params, type, options = {}) => {
	let url = ''
	if (type == "Employee") {
		url = '/api/empmgm/import-jobs/' + params.id + '/records';
	} else if (type == "Natural") {
		url = '/api/persontax/import-jobs/' + params.id + '/records';
	}
	return fetch.get(url, options);
}

//离职办理进度——（获取离职办理进度列表）列表
export const getResignation = (params, options = {}) => {
	const url = '/api/empmgm/separate-employees?' + params
	return fetch.get(url, options);
}
//离职办理进度——（获取离职办理进度详情）
export const getResignationAll = (params, options = {}) => {
	const url = '/api/empmgm/separate-employees/' + params
	return fetch.get(url, options);
}
//办理离职 —— 第三个页面 ——合同详情
export const getContractsDetail = (id, params, options = {}) => {
	const url = '/api/contract/contracts?status=active&employee_id=' + id
	return fetch.get(url, options);
}



//离职办理进度——（离职申请）拒绝
export const putResignation = (data, options = {}) => {
	const url = '/api/' + data.id
	return fetch.put(url, data, options);
}



//员工服务管理 列表
export const getStaffServiceManagement = (params, options = {}) => {
	const url = '/api/empmgm/service-applications?' + params
	return fetch.get(url, options);
}
//员工服务管理 操作（拒绝） and （离职申请）拒绝
export const postStaffServiceManagement = (data, params, options = {}) => {
	const url = '/api/empmgm/service-applications/' + data.id + "/op/handle"
	return fetch.post(url, data, options);
}
// //员工服务管理 操作（查看） 详情
export const getStaffServiceManagementDetails = (id, params, options = {}) => {
	const url = '/api/empmgm/service-applications/' + id
	return fetch.get(url, options);
}

//员工服务管理 操作（办理） 详情 
export const getTemplateDetails = (id, params, options = {}) => {
	const url = '/api/empmgm/templates/' + id
	return fetch.get(url, options);
}
//新建公告
export const makeNotice = (params, options = {}) => {
	const url = '/api/empmgm/notices';
	return fetch.post(url, params, options);

}
//公告列表
export const empNoticeList = (params, options = {}) => {
	const url = '/api/empmgm/notices?' + params
	return fetch.get(url, options);
}
//公告删除
export const delNotice = (params, options = {}) => {
	const { id = '' } = params;
	const url = '/api/empmgm/notices/' + id
	return fetch.del(url, options);
}
//公告详情
export const getNoticeDetail = (params, options = {}) => {
	const { id = '' } = params;
	const url = '/api/empmgm/notices/' + id
	return fetch.get(url, options);
}
//公告阅读和回执列表
export const empNoticeReadReceiptList = (value, options = {}) => {
	const { params = '', id = '' } = value
	const url = `/api/empmgm/notice-receipts/${id}?` + params
	return fetch.get(url, options);
}


//花名册添加
export const addFormField = (params, options = {}) => {
	const url = '/api/formmeta/fields';
	return fetch.post(url, params, options);
}
//花名册编辑
export const editFormField = (params, options = {}) => {
	const { id = '' } = params;
	const url = `/api/formmeta/fields/${id}`;
	return fetch.put(url, params, options);
}
//花名册删除
export const delFormField = (params, options = {}) => {
	const { id = '' } = params;
	const url = `/api/formmeta/fields/${id}`;
	return fetch.del(url, options);
}
//花名册字段详情
export const getFormFieldDetail = (params, options = {}) => {
	const { id = '' } = params;
	const url = `/api/formmeta/fields/${id}`;
	return fetch.get(url, options);


}


//获取离职模板列表
export const getPactList = (type, params, options = {}) => {
	const url = `/api/empmgm/templates?type=${type}&all=true`
	return fetch.get(url, options);
}
//获取离职模板列表（证明模板）  详情
export const getPactListDetails = (id, params, options = {}) => {
	const url = '/api/empmgm/templates/' + id
	return fetch.get(url, options);
}

//办理离职  请求
export const postSeparate = (values, params, options = {}) => {
	const url = `/api/empmgm/employees/${values.id}/op/separate`
	return fetch.post(url, values, options);

}

//获取表单元数据中的表单列表
export const getBasicFormList = (params, options = {}) => {
	const url = '/api/formmeta/forms?category=empmgm&name=employee'
	return fetch.get(url, options);
}
//离职证明模板内容填充
export const postLeaveTemplate = (data, params, options = {}) => {
	const url = '/api/empmgm/application-handle/company-fill'
	return fetch.post(url, data, options);
}
//离职证明模板 开具证明  提交数据
export const postPresentTemplate = (data, params, options = {}) => {
	console.log(data)
	const url = '/api/empmgm/separate-employees/op/certificate/' + data.id
	return fetch.post(url, data, options);
}

// 雇员模板服务中模板列表
export const multipleTemplateList = (params, options = {}) => {
	const url = `/api/empmgm/templates?` + params
	return fetch.get(url, options);
}
// 雇员模板服务中新建模板
export const createMultipleTemplate = (params, options = {}) => {
	const url = `/api/empmgm/templates`
	return fetch.post(url, params, options);
}
// 雇员模板服务中编辑模板
export const updateMultipleTemplate = (params, options = {}) => {
	const { id = '' } = params;
	const url = `/api/empmgm/templates/${id}`;
	return fetch.put(url, params, options);
}
// 雇员模板服务中删除模板
export const delMultipleTemplate = (params, options = {}) => {
	const url = `/api/empmgm/templates/` + params
	return fetch.del(url, options);
}
// 雇员模板服务中获取模板详情
export const getMultipleTemplateDetail = (params, options = {}) => {
	const url = `/api/empmgm/templates/` + params
	return fetch.get(url, options);
}
// 雇员模板服务中编辑模板
export const editMultipleTemplateDetail = (params, options = {}) => {
	const url = `/api/empmgm/templates` + params
	return fetch.put(url, params, options);
}
//分类列表
export const getClassifyList = (params, options = {}) => {
	const url = `/api/formmeta/fields-category?form=` + params.name + '&category=' + params.category
	return fetch.get(url, options);
}
//获取银行名称列表
export const loadBankCardList = (data, options = {}) => {
	// const url = '/api/walletmgm/bankinfos';
	const url = '/api/persontax/bank-list';
	return fetch.get(url, options);
}

// 雇员模板服务中新建模板
export const postActivationReminderUtil = (id, options = {}) => {
	const url = `/api/empmgm/employees/${id}/short-msg`
	return fetch.get(url, options)
}
// 人工问题列表
export const getManualQuestions = (params, options = {}) => {
	const url = `/api/chatbot/manual_questions${params ? params : ""}`
	console.log(url)
	return fetch.get(url, options)
}
// 回复人工问题
export const putManualQuestions = (params, options = {}) => {
	const url = `/api/chatbot/manual_questions/${params.id}/op/react`
	return fetch.post(url, params, options)
}
// 获取人工问题详情
export const getManualQuestionsDetail = (id, options = {}) => {
	const url = `/api/chatbot/manual_questions/${id}`
	return fetch.get(url, options)
}

// 员工服务  证明模版

//验证重名字
export const checkEmployeeTemplateName = (data, options = {}) => {
	const url = `/api/empmgm/template-duplicate-check`
	return fetch.post(url, data, options)
}

//获取模板自定义字段
export const loadEmployeeTmpToolbars = (options = {}) => {
	const url = `/api/empmgm/user-define-fields`
	return fetch.get(url, options)
}

//获取模板详情
export const loadEmployeeTmpDetail = (id, query, options = {}) => {
	let url = `/api/empmgm/templates/${id}`
	if (query)
		url = `${url}?t=1&${query}`
	return fetch.get(url, options)
}

//上传模版生成图片
export const uploadEmployeeForPic = (data, options = {}) => {
	const url = `/api/contract/convert-template-file`
	return fetch.post(url, data, options)
}

//新增模板
export const newEmployeeTemplate = (params, options = {}) => {
	const url = `/api/empmgm/templates`
	return fetch.post(url, params, options)
}

//更新模板
export const renewalEmployeeTempalte = (params, options = {}) => {
	const url = `/api/empmgm/templates/${params.template_id}`
	return fetch.put(url, params, options)
}

// 修改快递信息
export const updateModifyExpressInfoUrl = (params, options = {}) => {
	const url = `/api/empmgm/service-applications/${params.id}`
	return fetch.put(url, params, options)
}
// 更新报税基础信息
export const updateemployee = (params, type, options = {}) => {
	const url = `/api/persontax/do-import`
	return fetch.post(url, params, options)
}
// 更新自认人基础信息
export const updateNatural = (params, options = {}) => {
	const url = `/api/persontax/import-jobs` + `${params ? params : ""}`
	return fetch.get(url, options)
}
// 导入自认人基础信息 详情
export const updateNaturalDetail = (params, options = {}) => {
	const url = `/api/persontax/import-jobs/${params.id}/records`
	return fetch.get(url, options)
}

// 雇员模版申请启停
export const templatesAppliSettingUtil = (params, options = {}) => {
	const url = `/api/empmgm/templates/op/apply-setting`
	return fetch.post(url, params, options)
}

// 表头设置
export const postListColumnSettingUtil = (params, options = {}) => {
	const url = `/api/formmeta/list-column-settings`
	return fetch.post(url, params, options)
}

// 表头设置
export const getListColumnSettingUtil = (params, options = {}) => {
	const url = `/api/formmeta/list-column-settings?${params}`
	return fetch.get(url, options)
}


// 员工服务选择模版字段回填
export const applicationHandleBackFillUtil = (params, options = {}) => {
	const url = `/api/empmgm/application-handle/back-fill`
	return fetch.post(url, params, options)
}
// 员工 花名册设置 （系统字段）
export const employeeSetUtil = (params, options = {}) => {
	const url = `/api/formmeta/fields-options`
	return fetch.put(url, params, options)
}
// 员工 银行卡信息导入
export const inportEmployeeBank = (params, options = {}) => {
	const url = `/api/empmgm/do-import-salary`
	return fetch.post(url, params, options)
}
// 员工 导入失败的数据
export const importError = (params, options = {}) => {
	const url = `/api/empmgm/export-fail-jobs/${params}/records`
	return fetch.get(url, options)
}

// 员工其他费用列表
export const getEmployeeOtherExpenseListUtils = (params, options = {}) => {
	const url = `/api/empmgm/settlement/other-fees` + params
	return fetch.get(url, options)
}

//添加其他费用
export const addEmployeeOtherExpenseUtil = (params, options = {}) => {
	const url = '/api/empmgm/settlement/other-fees'
	return fetch.post(url, params, options)
}
 /*员工信息查询  数量*/
export const getEmpInfoSearchNumber = (params, options = {}) => {
	const url = '/api/empmgm/employee-num?source=message_search&keysearch=' + `${params ? params : ''}`
	return fetch.get(url , options)
}
