import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';

const SALARY_PLAN = '/api/payroll/programs';
const SALARY_CYLES = '/api/payroll/salary/cycles';
const PAYROLL_TAX = '/api/payroll/tax/cycles';
const SALARY_BILL = '/api/payroll/slip/cycles';
const SALARY_LIST = '/api/payroll/salary/cycles';
const SALARY_PROCESS = '/api/payroll/salary-cycles/op/calculate';

//更新薪酬方案
export const uploadSalaryPlan = (data, options = {}) => {
	const url = `/api/payroll/programs/${data.id}`
	return fetch.putJson(url, data, options);
}
//新建薪酬方案
export const addSalaryPlan = (params, options = {}) => {
	console.log('params', params);
	const url = `/api/payroll/program`
	return fetch.post(url, params, options);
}
//新建工资条发放任务
export const newPaySalaryBill = (params, options = {}) => {
	const url = `/api/payroll/slip`
	return fetch.post(url, params);
}
//获取薪酬方案列表
export const getSalaryPlan = (params, options = {}) => {
	const url = SALARY_PLAN + (params ? '?' + params : '');
	return fetch.get(url, options);
}


//删除薪酬方案
export const deleteSalaryPlan = (params, options = {}) => {
	const url = SALARY_PLAN + '/' + params.id;
	return fetch.del(url, params, options);
}
//获取薪酬方案详情
export const getSalaryPlanDetail = (params, options = {}) => {
	const url = SALARY_PLAN + '/' + params.id;
	// const url=EMPLOYEE_PATH+'/'+params.id;
	return fetch.get(url, options);
}




//获取发放批次列表
export const getSalaryCycles = (params, options = {}) => {
	const url = SALARY_CYLES + (params ? '?' + params : '')
	return fetch.get(url, options);
}
//获取工资条列表
export const getSalaryBillList = (params, options = {}) => {
	const url = SALARY_LIST + (params ? '?' + params : '')
	return fetch.get(url, options);
}
//获取具体工资条的用户列表
export const getSalaryBillRecord = (params, options = {}) => {
	const { query = '', id = '' } = params;
	// const url='/api/payroll/slip/cycles/'+id+'/records'+(query?'?'+query:'')
	const url = '/api/payroll/slip/records/' + id + (query ? '?' + query : '')
	return fetch.get(url, options);
}
//获取具体用户的工资条详情
export const getUserBillDetail = (params, options = {}) => {
	const { id = '' } = params;
	const url = '/api/payroll/slip/record/' + id
	return fetch.get(url, options);
}
//工资条重发撤回操作
export const repeatSendBill = (params, options = {}) => {
	const { status = '', id = '' } = params;
	const url = '/api/payroll/slip/' + id + '/op' + '?' + 'status=' + status
	return fetch.post(url, params, options);
}
/*新建发放批次*/
export const getSendBatch = (params) => {
	let url = `/api/payroll/salary/do-import`, { sourceIsFirstAdjust = false } = params;
	/*新建首次校准批次*/
	if (sourceIsFirstAdjust) {
		url = `/api/payroll/salary/do-import?type=first`
	}
	return fetch.post(url, params);
}

//待审核批次确认
// export const confirmSalaryCycles = (params,options={}) =>{
// 	const url=SALARY_CYLES+'/'+params.id
// 	return fetch.putJson(url,params,options);
// }
//待审核批次确认
export const confirmSalaryProcess = (params, options = {}) => {
	const url = '/api/payroll/salary-cycles/op/confirm';
	return fetch.post(url, params, options);
}

//待审核批次删除
export const deleteSalaryCycles = (params, options = {}) => {
	const { cycle_id = '' } = params
	console.log(params)
	const url = SALARY_CYLES + '/' + params.id
	return fetch.del(url, params, options);
}

//工资表明细列表
export const getSalaryCyclesRecord = (params, options = {}) => {
	console.log('params....params', params);
	const url = SALARY_CYLES + '/' + params.id + '/records' + (params.query ? '?' + params.query : '')
	return fetch.get(url, options);
}

//获取客户工资列表
export const getCustomerSalaryList = (offset = 0, limit = 10, cycle, search = '', options = {}) => {
	let url = '';
	if (search == '') {
		url = `/api/socialinsurance/salary/cycles/?offset=${offset}&limit=${limit}&cycle_name=${cycle}`
	} else {
		url = `/api/socialinsurance/salary/cycles/?offset=${offset}&limit=${limit}&cycle_name=${cycle}&customer=${search}`
	}
	return fetch.get(url, options);
}

//个人发放明细列表
export const getPersonSalaryRecord = (params, options = {}) => {
	const url = `/api/payroll/salary/person-records` + (params ? '?' + params : '')
	return fetch.get(url, options);
}

//个税申报列表
export const getPayrollTaxList = (params, options = {}) => {
	const url = PAYROLL_TAX + (params ? '?' + params : '')
	return fetch.get(url, options);
}

/*上传薪酬模板*/
// export const getCustomerTem111 = (params,options={}) =>{
// 	const url=`/api/payroll/do-import-template?type=social`; 
// 	return fetch.post(url,params,options);
// }
/*上传薪酬模板*/
export const getCustomerTem = (params, options = {}) => {
	const url = `/api/payroll/do-import-template?type=hro-salary`;
	return fetch.post(url, params, options);
}

/*上传工资发放任务模板*/
export const updatePayTaskTem = (params, options = {}) => {
	const { type = '' } = params
	let url = ''
	if (type) {
		url = `/api/payroll/do-import-template?type=${type}`;
	} else {
		url = `/api/payroll/do-import-template?type=slip`;
	}

	return fetch.post(url, params, options);
}

//个税申报列表详情
export const getPayrollTaxDetail = (params, options = {}) => {
	const url = PAYROLL_TAX + `/${params.id}/person-records` + (params.query ? '?' + params.query : '')
	return fetch.get(url, options);
}


//待发放个税申报列表详情
export const getPendingPayrollTaxDetail = (params, options = {}) => {
	const url = PAYROLL_TAX + `/${params.id}/records` + (params.query ? '?' + params.query : '')
	return fetch.get(url, options);
}

//个税申报人员信息
export const getPayrollPersonDetail = (params, options = {}) => {
	const url = `/api/payroll/personnel-info/cycles/${params.id}/records` + (params.query ? '?' + params.query : '')
	return fetch.get(url, options);
}

//个税申报明细列表
export const getPayrollPersonRecords = (params, options = {}) => {
	const url = `/api/payroll/tax/person-records` + (params ? '?' + params : '')
	return fetch.get(url, options);
}

//获取发放详情
export const getSalaryCyclesDet = (params, options = {}) => {
	const url = SALARY_CYLES + '/' + params.id
	return fetch.get(url, options);
}

//获取个税详情
export const getPayrollTaxStaticDet = (params, options = {}) => {
	const url = PAYROLL_TAX + '/' + params.id
	return fetch.get(url, options);
}

//工资条明细列表
export const getSalarySilpRecord = (params, options = {}) => {
	// const url=`/api/payroll/slip/cycles/${params.id}/records`+(params.query?'?'+params.query:'')
	const url = `/api/payroll/salary/cycles/${params.id}/records` + (params.query ? '?' + params.query : '')
	return fetch.get(url, options);
}

//重新发放
export const resendSalaryCycles = (params, options = {}) => {
	const url = SALARY_CYLES + `/${params.id}/resend`
	return fetch.post(url, params, options);
}

//导出工资表
export const exportSalaryCycles = (params, options = {}) => {
	const { id = '', type = '' } = params
	const url = SALARY_CYLES + `/${id}/export?type=${type}`
	return fetch.post(url, params, options);
}

//导入发放结果
export const importSalaryCycles = (params, options = {}) => {
	const url = SALARY_CYLES + `/${params.id}/result-import`
	return fetch.post(url, params, options);
}

//导出个税申报表
export const exportPayrollTaxCycles = (params, options = {}) => {
	const url = PAYROLL_TAX + `/${params.id}/export`
	return fetch.get(url, options);
}

//导入个税申报结果
export const importPayrollTaxCycles = (params, options = {}) => {
	const url = PAYROLL_TAX + `/${params.id}/result-import`
	return fetch.post(url, params, options);
}

//异常数据列表
export const getAbnormalList = (params, options = {}) => {
	const url = `/api/payroll/abnormal/cycles/${params.id}/records` + (params.query ? '?' + params.query : '')
	return fetch.get(url, options);
}

//个税申报批次统计(首页)
export const getTaxIndexStatics = (params, options = {}) => {
	const url = `/api/payroll/tax/statistics`
	return fetch.get(url, options);
}

//薪酬批次统计(首页)
export const getSalaryIndexStatics = (params, options = {}) => {
	const url = `/api/payroll/salary/statistics` + (params ? '?' + params : '')
	return fetch.get(url, options);
}

//查看个税申报明细详情
export const getPersonTaxRecordDetail = (params, options = {}) => {
	const url = `/api/payroll/tax/person-records/${params.id}`
	return fetch.get(url, options);
}

//查看个人发放明细详情
export const getPersonSalaryRecordDetail = (params, options = {}) => {
	const url = `/api/payroll/salary/person-records/${params.id}`
	return fetch.get(url, options);
}
//查看个人发放统计
export const getPersonSalaryCountRecord = (params, options = {}) => {
	const { id = '', data = '' } = params
	console.log('params', params);
	const url = `/api/payroll/salary/sum/${id}?${data}`
	return fetch.get(url, options);
}

//网商银行机构设置:创建
export const addMybank = (params, options = {}) => {
	const url = `/api/walletmgm/mybank`
	return fetch.post(url, params, options);
}

//网商银行机构设置:获取
export const getMybank = (params, options = {}) => {
	const url = `/api/walletmgm/mybank`
	return fetch.get(url, options);
}
//直接发放
export const salaryPayroll = (params, options = {}) => {
	const url = `/api/payroll/salary/payroll`
	return fetch.post(url, params, options);
}
//第三方发放
export const thirdPartyPay = (params, options = {}) => {
	const url = `/api/payroll/salary/send`
	return fetch.post(url, params, options);
}

//申报单位列表
export const getLegalEntities = (params, options = {}) => {
	const url = `/api/payroll/tax/legal-entities${params ? params : '?'}`
	return fetch.get(url, options);
}

//财务薪酬 -- 个税列表去申报
export const goDeclareTax = (params, options = {}) => {
	const url = `/api/payroll/do-declare`
	return fetch.post(url, params, options);
}

//积分管理——积分列表
export const getIntegral = (params, options = {}) => {
	const url = `/api/recruit/broker-point-details?` + `${params}`
	return fetch.get(url, options);
}

//积分管理——发放积分（批量发放积分）
export const postIntegral = (data, params, options = {}) => {
	const url = `/api/recruit/broker-point-details`
	return fetch.put(url, data, options);
}

//提现管理——提现列表
export const getDrawMoney = (params, options = {}) => {
	const url = `/api/walletmgm/transactions?type=BD` + `${params}`
	return fetch.get(url, options);
}

//提现管理——提现列表   发放
export const postDrawMoney = (data, params, options = {}) => {
	const url = `/api/walletmgm/transactions`
	return fetch.put(url, data, options);
}

//提现管理——— 导出   （发放  未发放）
export const dowmDrawMoney = (data, params, options = {}) => {
	const url = `/api/walletmgm/transactions/do-export?type=BD&` + `${data}`
	return fetch.get(url, options);
}

//修改个税缴纳地
export const declaringUnit = (params, options = {}) => {
	const url = `/api/payroll/declaring-unit/set`
	return fetch.post(url, params, options);
}
//获取个人发放明细列表 ---统计维度：客户
export const getSalarySendDetailInCustomer = (params, options = {}) => {
	const url = `/api/payroll/declaring-unit/set`
	return fetch.get(url, options);
}
//待提交专项附加扣除 忽略，直接计算
export const ignoreSpecialDecutionToCount = (params, options = {}) => {

	/**
	 * 
	 * 
	 * {
			"cycle_id": "xxxxxxxx"
			}
	 *  */

	const url = `/api/payroll/salary-cycles/op/calculate`
	return fetch.post(url, params, options);
}
//待提交专项附加扣除 提醒员工确认
export const remindSpecialDecution = (params, options = {}) => {
	const { cycle_id = '' } = params;
	const url = `/api/payroll/cycles/${cycle_id}/remind-sad`
	return fetch.post(url, params, options);
}
//待申报自然人 提醒财务专员确认
///   hrpayroll/v1/salary/remind/:id
export const remindFinanceDecution = (params, options = {}) => {
	const { cycle_id = '' } = params;
	const url = `/api/payroll/salary/remind/${cycle_id}`
	return fetch.post(url, params, options);
}
//个人发放明细   首页的根据法务实体进行的搜索
export const getsendSimpleList = (params, options = {}) => {
	const { cycle_id = '' } = params;
	const url = `/api/payroll/salary/person-records` + params
	return fetch.get(url, options);
}
//个人发放明细   获取个人在某一个法务实体下的所有的发放批次  统计数据
export const getsendPersonalSendBatchList = (params, options = {}) => {
	const { id = '' } = params;

	const url = `/api/payroll/salary/person-records/` + id
	return fetch.get(url, options);
}
//个人发放明细   获取工资批次中未申报自然人信息列表
export const getWaitSendNaturalList = (params, options = {}) => {
	const { id = '', query = '' } = params;
	const url = `/api/payroll/salary-cycles/` + id + '/inactive-persons' + `${query ? query : ''}`
	return fetch.get(url, options);
}
//个人发放明细   获取工资批次中未提交附加项专项扣除人信息列表
export const getSpecialDeuctionList = (params, options = {}) => {
	const { id = '', query = '' } = params;
	const url = `/api/payroll/salary-cycles/` + id + '/inactive-persons?category=special' + `${query ? query : ''}`
	return fetch.get(url, options);
}
//社税机器人助手下载地址
export const getAssistanceDownloadUrl = (params, options = {}) => {
	const url = '/api/hrpayroll/taxbot';
	return fetch.get(url, options);
}
//异常批次处理
export const dealAbnormalCyCles = (params, options = {}) => {
	const { id = '' } = params;
	const url = `/api/payroll/abnormal/cycles/${id}/deal`;
	return fetch.post(url, params, options);
}
//发放批次中  计算异常详情列表
export const loadErrorInCaculate = (params, options = {}) => {
	const { id = '' } = params;
	const url = `/api/payroll/salary-cycles/${id}/calculate-abnormals`;
	return fetch.get(url, params, options);
}
//检测薪酬方案是否重复
export const checkSalaryPlanRepeatOrNot = (params, options = {}) => {
	const url = `/api/payroll/program/check/${params}`;
	return fetch.get(url, options);
}
//获取薪酬助手的薪酬方案模板（包括shett2）
export const downloadPlanSheet2 = (params, options = {}) => {
	// const url= `/api/hrpayroll/salary/download-data`;
	const url = `/api/payroll/salary/download-data`;
	return fetch.post(url, params, options);
}
//获取海峡人力的摘要配置列表
export const getHaiXiaAbstractList = (params, options = {}) => {
	const url = `/api/payroll/abstract` + params;
	return fetch.get(url, options);
}
//添加海峡人力的摘要配置字段
export const addHaiXiaAbstractItem = (params, options = {}) => {
	const url = `/api/payroll/abstract`;
	return fetch.post(url, params, options);
}
//删除海峡人力的摘要配置字段
export const delHaiXiaAbstractItem = (params, options = {}) => {
	const { id = '' } = params
	const url = `/api/payroll/abstract/${id}`;
	return fetch.del(url, params, options);
}
//编辑海峡人力的摘要配置字段
export const editHaiXiaAbstractItem = (params, options = {}) => {
	const { id = '' } = params
	const url = `/api/payroll/abstract/${id}`;
	return fetch.put(url, params, options);
}
//获取海峡人力的摘要配置字段详情
export const getHaiXiaAbstractItemDetail = (params, options = {}) => {
	const { id = '' } = params
	const url = `/api/payroll/abstract/${id}`;
	return fetch.get(url, options);
}
//自然人税收_税款缴纳_立即缴款
export const payTaxNow = (params, options = {}) => {
	const url = `/api/payroll/payment/tax`;
	return fetch.post(url, params, options);
}
//自然人税收_税款缴纳列表
export const payTaxList = (params, options = {}) => {
	const url = `/api/payroll/payment/cycles` + `${params ? params : ""}`;
	return fetch.get(url, options);
}
//自然人税收_税款缴纳列表(统计)
export const payTaxStatistics = (params, options = {}) => {
	const url = `/api/payroll/payment/statistics`;
	return fetch.get(url, options);
}
//自然人税收_税款缴纳详情
export const payTaxDetail = (params, options = {}) => {
	const url = `/api/payroll/payment/cycles/${params.id}/person-records${params.url}`;
	return fetch.get(url, options);
}
//自然人税收_税款缴纳详情(统计)
export const payTaxDetailStatistics = (params, options = {}) => {
	const url = `/api/payroll/payment/cycles/${params.id}`;
	return fetch.get(url, options);
}
//获取合并计税列表 
export const getConsolidatedList = (params, options = {}) => {
	const { dataParam = {}, id = '', category = '' } = params;
	const url = `/api/payroll/salary/consolidated/${id}` + `${category ? category : ""}`;
	return fetch.get(url, options);
}
//获取自动确认开关状态 
export const getSettingState = (params, options = {}) => {
	const url = `/api/payroll/salary/setting`;
	return fetch.get(url, options);
}
//设置自动确认开关状态 
export const makeSettingState = (params, options = {}) => {
	const url = `/api/payroll/salary/setting`;
	return fetch.post(url, params, options);
}
// 导出自然人人员信息
export const exportNaturalInfo = (params, options = {}) => {
	const url = `/api/persontax/payroll/person-export`;
	return fetch.post(url, params, options);
}
// 更新自然人报税基础信息
export const updateNatureHuman = (params, options = {}) => {
	const url = `/api/persontax/payroll/person-import`;
	return fetch.post(url, params, options);
}
// 获取薪酬自然人导入记录
export const getSalaryImportList = (params, options = {}) => {
	const url = `/api/persontax/payroll/person-import`;
	return fetch.post(url, params, options);
}
// 获取薪酬自然人导入详情
export const getSalaryImportDetail = (params, options = {}) => {
	const url = `/api/persontax/payroll/person-import`;
	return fetch.post(url, params, options);
}
//  薪酬管理_发放批次_待发放      提交财务发放  操作
export const putIssueToFinance = (params, options = {}) => {
	const url = `/api/payroll/salary/cycles/${params.id}/finance-payroll`;
	return fetch.put(url, params, options);
}
/*上传历史工资表模板*/
export const uploadHistoryBill = (params, options = {}) => {
	const url = `/api/payroll/do-import-template?type=history`;
	return fetch.post(url, params, options);
}
/*导入历史工资表*/
export const creatHistoryBill = (params, options = {}) => {
	const { category = '' } = params;
	const url = `/api/payroll/salary/history/do-import?category=${category}`;
	return fetch.post(url, params, options);
}


// 历史税差-历史税差统计
export const getHistorySalaryStatistics = (params, options = {}) => {
	const { category = '' } = params;
	// const url = `/api/payroll/history/salary/statistics?salary_source=history&status=completed` + `${params? params : ""}`;
	const url = `/api/payroll/history/salary/statistics` + `${params ? params : ""}`;
	return fetch.get(url, options);
}
// 历史税差-查看历史税差列表
export const getHistorySalaryList = (params, options = {}) => {
	const { category = '' } = params;
	const url = `/api/payroll/history/salary?salary_source=history` + `${params ? params : ""}`;
	return fetch.get(url, options);
}
// 历史税差-查看历史税差批次简明详情
export const getHistorySalaryDet = (params, options = {}) => {
	const { id = '' } = params;
	const url = `/api/payroll/history/cycles/${id}`;
	return fetch.get(url, options);
}
// 历史税差-查看历史税差批次记录详情
export const getHistorySalaryRecords = (params, options = {}) => {
	const { id = '', query = '' } = params;
	const url = `/api/payroll/history/cycles/${id}/records` + (params.query ? '' + params.query : '');
	return fetch.get(url, options);
}
// 历史税差-导入记录
export const getHistorySalaryImportRecords = (params, options = {}) => {
	const { id = '' } = params;
	const url = `/api/payroll/history/import-jobs?type=history` + `${params ? params : ""}`;
	return fetch.get(url, options);
}
// 历史税差-导入记录详情列表
export const getHistorySalaryImportRecordsDet = (params, options = {}) => {
	const { id = '' } = params;
	const url = `/api/payroll/history/import-jobs/${id}/records`;
	return fetch.get(url, options);
}
// 历史税差-删除历史税差批次
export const delHistorySalaryList = (params, options = {}) => {
	const { id = '' } = params;
	const url = `/api/payroll/history/cycles/${id}`;
	return fetch.del(url, options);
}
// 历史税差-删除个人税差明细
export const delPersonalTaxDeuction = (params, options = {}) => {
	const { id = '' } = params;
	const url = `/api/payroll/history/balance/${id}`;
	return fetch.del(url, options);
}
// 历史税差-计算税差
export const countHistorySalary = (params, options = {}) => {
	const { param = '' } = params
	const url = `/api/payroll/history/calculate` + `${param ? param : ""}`;
	return fetch.post(url, params, options);
}
// 历史税差-税差列表
export const getHistoryTaxBalanceList = (params, options = {}) => {
	const { id = '' } = params;
	const url = `/api/payroll/history/taxbalance` + `${params ? params : ""}`;
	return fetch.get(url, options);
}
// 历史税差-查看税差详情
export const getHistoryTaxBalanceDetail = (params, options = {}) => {
	const { id = '' } = params;
	const url = `/api/payroll/history/balance/${id}`;
	return fetch.get(url, options);
}
// 历史税差-查看税差计算状态
export const getHistorySalaryCountState = (params, options = {}) => {
	const { customer_id = '' } = params;
	const url = `/api/payroll/history/calculate-tax/status?customer_id=${customer_id}`;
	return fetch.get(url, options);
}
// 历史税差-查看历史工资表中是否有税差明细
export const isOrNotTaxDeuction = (params, options = {}) => {
	const { id = '' } = params;
	const url = `/api/payroll/history/judge/${id}`;
	return fetch.get(url, options);
}

/*通知创建人*/
export const notifyFounder = (params, options = {}) => {
	const { id = '' } = params;
	const url = `/api/payroll/salary/cycles/${id}/notice-creator`;
	return fetch.put(url, params, options);
}
/*导出薪酬方案*/
export const downloadScheme = (params, options = {}) => {
	const url = `/api/payroll/program/export` + `${params ? params : ''}`;
	return fetch.get(url, options);
}
/*模拟算税 list*/
export const SimulationTaxlist = (params, options = {}) => {
	const url = `/api/payroll/simulated/cycles` + `${params ? params : ''}`;
	return fetch.get(url, options);
}
/*模拟算税判断*/
export const SimulationTaxJudge = (params, options = {}) => {
	const url = `/api/payroll/simulated/judge?` + `${params ? params : ''}`;
	return fetch.get(url, options);
}
/*add模拟算税*/
export const addSimulationTax = (params, options = {}) => {
	const url = `/api/payroll/simulated/do-import`;
	return fetch.post(url, params, options);
}
/*获取模拟算税批次详情*/
export const SimulationTaxDetail = (params, options = {}) => {
	const url = `/api/payroll/simulated/cycles/${params}`;
	return fetch.get(url, options);
}
/*模拟算税批次列表明细 */
export const SimulationTaxDetailList = (params, options = {}) => {
	const url = `/api/payroll/simulated/cycles/${params.id}/records?${params.query}`;
	return fetch.get(url, options);
}
/*模拟算税批次 删除 */
export const SimulationTaxDel = (params, options = {}) => {
	const url = `/api/payroll/simulated/cycles/${params}`;
	return fetch.del(url, options);
}
/*模拟算税批次统计 */
export const SimulationTaxStatis = (params, options = {}) => {
	const url = `/api/payroll/simulated/statis`;
	return fetch.get(url, options);
}
/*模拟算税批次   f发起校准 */
export const SimulationTaxDo = (params, options = {}) => {
	const url = `/api/payroll/simulated/adjust/${params}`;
	return fetch.post(url, options);
}
/*模拟算税批次   确认 */
export const SimulationTaxConfirm = (params, options = {}) => {
	const url = `/api/payroll/simulated/confirm/${params}`;
	return fetch.put(url, options);
}
/*模拟算税    税差痕迹 */
export const SimulationTaxDifference = (params, options = {}) => {
	const url = `/api/payroll/simulated/balance/${params}`;
	return fetch.get(url, options);
}
/*模拟算税    下载工资表 */
export const downWageSheet = (params, options = {}) => {
	const url = `/api/payroll/simulated/export/${params}`;
	return fetch.get(url, options);
}
/*财务   代发放  撤回 */
export const recallUtil = (params, options = {}) => {
	const url = `/api/payroll/salary/cycles/${params.id}/finance-back`;
	return fetch.put(url, params, options);
}
/*薪酬 发放批次  导出 */
export const salaryBatchDown = (params, options = {}) => {
	const url = `/api/payroll/export/salary-cycles` + `${params ? params : ''}`;
	return fetch.get(url, options);
}
/*模拟算税    获取合并计税列表 */
export const consolidatedTaxList = (params, options = {}) => {
	const { id = '', query = '' } = params
	const url = `/api/payroll/simulated/consolidated/${id}` + `${query ? query : ''}`;
	return fetch.get(url, options);
}
/*模拟算税    批量发起校准 */
export const calibrationAll = (params, options = {}) => {
	const url = `/api/payroll/simulated/batch-adjust`;
	return fetch.post(url, params, options);
}
/*工资条批次    撤回  */
export const salarySheetRecall = (params, options = {}) => {
	const url = `/api/payroll/slip/${params}/withdraw`;
	return fetch.put(url, options);
}
/*薪酬方案  作废  */
export const salaryPlanCancle = (params, options = {}) => {
	const url = `/api/payroll/programs/${params}/cancle`;
	return fetch.post(url, options);
}
/*初始化模拟算税数据 列表  */
export const getInitializeSimulatedTaxList = (params, options = {}) => {
	const url = `/api/payroll/history-tax` + `${params ? params : ''}`;
	return fetch.get(url, options);
}
/*初始化模拟算税数据 导入  */
export const postInitializeTaxImport = (params, options = {}) => {
	const url = `/api/payroll/history-tax/do-import`;
	return fetch.post(url, params, options);
}
/*初始化模拟算税数据 导入记录  */
export const taxImportRecord = (params, options = {}) => {
	const url = `/api/payroll/history/import-jobs` + `${params ? params : ''}`;
	return fetch.get(url, options);
}
/*离线算税列表*/
export const offLineCalculateTax = (params, options = {}) => {
	const url = `/api/payroll/salary/offline` + `${params ? params : ''}`;
	return fetch.get(url, options);
}
/*离线算税  发起校准*/
export const offLineCalibration = (params, options = {}) => {
	const url = `/api/payroll/salary/offline`;
	return fetch.post(url, params, options);
}
/*确认校准*/
export const verifyCorrect = (params, options = {}) => {
	const url = `/api/payroll/salary/offline-confirm/${params}`;
	return fetch.post(url, options);
}
/*获取离线算税申报单位列表 */
export const offlineDeclareUnit = (params, options = {}) => {
	const url = `/api/payroll/salary/offline/declare-unit` + `${params ? params : ''}`;
	return fetch.get(url, options);
}
/*薪酬  方法失败  修改 打印*/
export const DistributionFailurePrint = (params, options = {}) => {
	const url = `/api/payroll/salary/cycles/${params.id}/pdf`;
	return fetch.get(url, options);
}
export const postSettlement = (params, options = {}) => {
	const url = `/api/payroll/settlement`;
	return fetch.post(url, params, options);
}
/*删除结算工资批次*/
export const deleteSettlement = (params, options = {}) => {
	const url=`/api/payroll/settlement/cycles/${params}`;
	return fetch.del(url , options);
}
export const getPaywaysUtil = (legal_entity_id, options = {}) => {
	const url = `/api/payroll/pay/payways/${legal_entity_id}`
	return fetch.get(url, options)
}
/*获取手续费配置列表*/
export const   commissionConfingList  = (params,options={}) =>{
	const url=`/api/payroll/salary/fee-setting` + `${params ? params : ''}`;
	return fetch.get(url , options);
}
/*编辑手续费配置*/
export const   putCommissionConfing  = (params,options={}) =>{
	const url=`/api/payroll/salary/fee-setting/${params.id}`;
	return fetch.put(url ,params,  options);
}
/*删除手续费配置*/
export const   delCommissionConfing  = (params,options={}) =>{
	const url=`/api/payroll/salary/fee-setting/${params}`;
	return fetch.del(url ,  options);
}
/*导入手续费配置*/
export const   importCommissionConfing  = (params,options={}) =>{
	const url=`/api/payroll/salary/setting-import`;
	return fetch.post(url , params , options);
}
/*新增手续费配置*/
export const   addCommissionConfing  = (params,options={}) =>{
	const url=`/api/payroll/salary/fee-setting/add`;
	return fetch.post(url , params , options);
}
export const getWelfareRecordsList = (params, options = {}) => {
	const url = `/api/payroll/welfare/import-jobs` +params
	return fetch.get(url , options);
}