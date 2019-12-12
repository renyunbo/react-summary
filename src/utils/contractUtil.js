import * as fetch from './fetch';

const ORDER_PATH = '/api/psiorder';
const CONTRACT_PATH = '/api/servicecontract';
const ACCOUNT_PATH = '/api/settlemgm';
const WITHDRAW_PATH = '/api/walletmgm';
const SOCIALWORK_PATH = '/api/socialwork';
const RECRUIT_PATH = '/api/recruit';


//接单表列表
export const getOrderFormList = (params, options = {}) => {
	const url = ORDER_PATH + '/form' + params;
	return fetch.get(url, options);
}

//服务合同列表
export const getContractList = (params, options = {}) => {
	const url = CONTRACT_PATH + '/contracts' + params;
	return fetch.get(url, options);
}

//合同续签
export const renew = (params, options = {}) => {
	const url = CONTRACT_PATH + '/contracts/' + params.id + '/op/renew';
	return fetch.post(url, params, options);
}

//服务合同详情
export const getContractDetail = (id, options = {}) => {
	const url = CONTRACT_PATH + '/contracts/' + id;
	return fetch.get(url, options);
}

//操作记录列表
export const getOptRecordList = (params, id, options = {}) => {
	const url = CONTRACT_PATH + '/' + 'contracts/' + id + '/op-log' + params;
	return fetch.get(url, options);
}
//账套管理列表
export const getAccountSetList = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/account-books' + params;
	return fetch.get(url, options);
}
//账套管理停用/启用
export const accountManage = (id, params, options = {}) => {
	const url = ACCOUNT_PATH + '/account-book/' + id + '/op/action';
	return fetch.put(url, params, options);
}
//开票信息统计
export const getInoviceNum = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/invoices/op/sum';
	return fetch.get(url, options);
}
//待核销认领流水统计
export const getCancelNum = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/payments/op/sum';
	return fetch.get(url, options);
}
//各状态账单统计
export const getBillNum = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/bills/op/sum';
	return fetch.get(url, options);
}
//账单列表
export const getBillList = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/bills' + params;
	return fetch.get(url, options);
}
//创建合同
export const createServiceContract = (params, options = {}) => {
	const url = CONTRACT_PATH + '/contracts';
	return fetch.post(url, params, options);
}
//无账套结算费用列表
export const getNoContractList = (params, options = {}) => {
	const url = CONTRACT_PATH + '/service-projects' + params;
	return fetch.get(url, options);
}
//账单详情
export const getBillDetail = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/bill/' + id;
	return fetch.get(url, options);
}
// getSplitBillDetail
//账单拆分详情
export const getSplitBillDetail = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/split-detail/' + id + '/person-details';
	return fetch.get(url, options);
}
//导出账单
export const importBill = (id) => {
	const url = ACCOUNT_PATH + '/bill/' + id + '/op/export';
	return fetch.get(url);
}
//生成/锁定/账单
export const buildOrBlockBill = (id, params, options = {}) => {
	const url = ACCOUNT_PATH + '/bill/' + id + '/op/action';
	return fetch.put(url, params, options);
}
//申请发票
export const applyInvoice = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/invoices';
	return fetch.post(url, params, options);
}
//查看账单申请发票记录
export const getBillApplyRecordList = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/bill/' + id + '/invoices';
	return fetch.get(url, options);
}
//操作记录/开票记录
// export const getApplyRecordList = (params,id, options = {}) => {
// 	const url = ACCOUNT_PATH + '/record-logs/' + id + params;
// 	return fetch.get(url, options);
// }
export const getApplyRecordList = (params, id, options = {}) => {
	const url = ACCOUNT_PATH + '/invoice/' + id + '/operation-log' + params;
	return fetch.get(url, params, options);
}
//核销账单列表
export const getCancelBillList = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/bill/' + id + '/invoices';
	return fetch.get(url, options);
}

//开票信息列表
export const getInvoiceList = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/invoices' + params;
	return fetch.get(url, params, options);
}
// 创建账套时合同和服务项目列表
export const getServerProjectList = (id, options = {}) => {
	const url = CONTRACT_PATH + '/contracts-projects?customer_id=' + id;
	return fetch.get(url, options);
}
//转客服核销流水
export const toServiceCancel = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/payment/' + id + '/op/transfer';
	return fetch.put(url, options);
}
// 流水列表
export const getBillRunWaterList = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/payments' + params;
	return fetch.get(url, params, options);
}
//生成账套
export const createAccount = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/account-books';
	return fetch.post(url, params, options);
}
//其他费用导入
export const exportOtherPay = (id, url_obj, options = {}) => {
	const url = ACCOUNT_PATH + '/bill/' + id + '/other-fees/op/import';
	return fetch.post(url, url_obj, options);
}
//查看账单核销记录
export const getBillCancelRecordList = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/bills/bill/' + id + '/cancel-records';
	return fetch.get(url, options);
}
//核销账单
// export const cancelBill = (id,params, options = {}) => {
// 	const url = ACCOUNT_PATH + '/bill/' + id + '/op/cancel';
// 	return fetch.put(url,params, options);
// }
//核销账单
export const cancelBill = (id, detail_id, options = {}) => {
	const url = ACCOUNT_PATH + `/bills/bill/${id}/bill-details/bill-detail/${detail_id}/op/cancel`;
	return fetch.put(url, options);
}
//核销流水
export const cancelWater = (id, params, options = {}) => {
	const url = ACCOUNT_PATH + '/payments/payment/' + id + '/op/cancel-bill-detail';
	return fetch.put(url, params, options);
}
//查看账单申请发票记录
export const getCancelDetailList = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/payment/' + id + '/bills';
	return fetch.get(url, options);
}
//获取账套的发票信息 
export const getAccountInvoiceInfoList = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/account-book/' + id + '/invoice-info';
	return fetch.get(url, options);
}
//领取发票
export const getInvoice = (id, params, options = {}) => {
	const url = ACCOUNT_PATH + '/invoice/' + id + '/op/draw';
	return fetch.put(url, params, options);
}
//确认签收发票
export const sureSignInvoice = (id, params, options = {}) => {
	const url = ACCOUNT_PATH + '/invoice/' + id + '/op/sign';
	return fetch.put(url, params, options);
}
//邮寄发票
export const sureSendInvoice = (id, params, options = {}) => {
	const url = ACCOUNT_PATH + '/invoice/' + id + '/op/send';
	return fetch.put(url, params, options);
}
//确认发送
export const sureEmailInvoice = (id, params, options = {}) => {
	const url = ACCOUNT_PATH + '/invoice/' + id + '/op/email';
	return fetch.put(url, params, options);
}
//驳回发票
export const returnInvoice = (id, params, options = {}) => {
	const url = ACCOUNT_PATH + '/invoice/' + id + '/op/deny';
	return fetch.put(url, params, options);
}
//确认发票
export const sureMakeInvoice = (id, params, options = {}) => {
	const url = ACCOUNT_PATH + '/invoice/' + id + '/op/confirm';
	return fetch.put(url, params, options);
}
//导入流水
export const importWater = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/payments/op/import';
	return fetch.post(url, params, options);
}
//获取账单社保公积金/工资个税/其他费用/补养明细
export const getBillDetailsList = (id, params, options = {}) => {
	const url = ACCOUNT_PATH + '/bill/' + id + '/person-details' + params;
	return fetch.get(url, options);
}
//更新账单其他费用
export const updateBillOhterPay = (id, params, options = {}) => {
	const url = ACCOUNT_PATH + '/other-fee/' + id;
	return fetch.put(url, params, options);
}
//删除账单其他费用
export const delBillOhterPay = (id, params, options = {}) => {
	const url = ACCOUNT_PATH + '/other-fee/' + id;
	return fetch.del(url, params, options);
}
//获取发票驳回信息
export const getReturnReason = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/bill/' + id + '/deny-reason';
	return fetch.get(url, options);
}
//获取账套详情
export const getAccountDetails = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/account-book/' + id;
	return fetch.get(url, options);
}
//修改账套
export const updateAccount = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/account-book/' + params.id;
	return fetch.put(url, params, options);
}
//更新合同
export const updateContract = (id, params, options = {}) => {
	const url = CONTRACT_PATH + '/contracts/' + id;
	return fetch.put(url, params, options);
}
//删除账单其他费用
export const updateData = (id, params, options = {}) => {
	const url = ACCOUNT_PATH + '/bill/' + id;
	return fetch.put(url, params, options);
}
// 打款方列表
export const getPayerLegalList = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/payment/payer_legal_entity/dropdown';
	return fetch.get(url, options);
}
// 收款方列表
export const getReceivableList = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/payment/receivable_legal_entity/dropdown';
	return fetch.get(url, options);
}
//下载附件
export const getDownPic = (id, options = {}) => {
	const url = CONTRACT_PATH + '/contracts/' + id + '/attachments/op/download';
	return fetch.get(url, options);
}
//发起支付申请
export const payApply = (id, params, options = {}) => {
	const url = ACCOUNT_PATH + '/split-detail/' + id + '/op/propose';
	return fetch.put(url, params, options);
}
//费用拆分
export const paySplit = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/bill-detail/' + params.id + '/op/split';
	return fetch.post(url, params, options);
}
//费用修改
export const paySplitUpdate = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/split-detail/' + params.id + '/op/split';
	return fetch.put(url, params, options);
}
//应付管理 -- 确认/驳回
export const checkSplit = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/split-detail/' + id + '/op/check';
	return fetch.put(url, options);
}
//确认付款
export const surePay = (options = {}) => {
	const url = ACCOUNT_PATH + '/split-details/op/confirm';
	return fetch.put(url, options);
}
//获取所有支付对象
export const getPayObjectsList = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/payment-objects';
	return fetch.get(url, options);
}
//应付管理统计
export const getAccountNum = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/split-details/op/sum';
	return fetch.get(url, options);
}
//应付管理列表
export const getAccountManageList = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/split-details' + params;
	return fetch.get(url, options);
}
//费用拆分详情
export const getSplitDetail = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/bill/' + id + '/split-details';
	return fetch.get(url, options);
}
//获取一二级审核人
export const getAuditor = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/split-detail/' + id + '/verifier';
	return fetch.get(url, options);
}
//服务合同导入
export const exportContract = (params, options = {}) => {
	const url = CONTRACT_PATH + '/contract/import';
	return fetch.post(url, params, options);
}
//提现管理（待打款、打款中、打款成功）列表
export const getWithDrawManageList = (params, options = {}) => {
	const url = WITHDRAW_PATH + '/transactions' + params;
	return fetch.get(url, options);
}
//提现管理（打款批次）列表
export const getRemitBatchList = (params, options = {}) => {
	const url = WITHDRAW_PATH + '/points-account/paybatch' + params;
	return fetch.get(url, options);
}
//打款操作
export const remitOpt = (options = {}) => {
	const url = WITHDRAW_PATH + '/points-account';
	return fetch.put(url, options);
}
//生成打款批次
export const buildRemitBatch = (options = {}) => {
	const url = WITHDRAW_PATH + '/points-account/paybatch';
	return fetch.post(url, options);
}
//打款批次操作
export const remitBatchOpt = (id, options = {}) => {
	const url = WITHDRAW_PATH + '/points-account/paybatch/' + id + '/op';
	return fetch.post(url, options);
}
//打款成功导出
export const remitSuccessImport = (params, options = {}) => {
	const url = WITHDRAW_PATH + '/points-account/op/export?money_type=1&status=finished&all=true&in_out=1' + params;
	return fetch.get(url, options);
}
//打款批次操作
export const getMoneyByIds = (options = {}) => {
	const url = WITHDRAW_PATH + '/points-account/paybatch';
	return fetch.put(url, options);
}
//账单合并导出
export const billMergeImport = (options = {}) => {
	const url = ACCOUNT_PATH + '/bills/export';
	return fetch.put(url, options);
}
//获取账单下所有的发票模板id
export const getInvoiceIdsList = (bill_id, options = {}) => {
	const url = ACCOUNT_PATH + '/bill/' + bill_id + '/invoice-template';
	return fetch.get(url, options);
}
//查看账单发票模板详情
export const getInvoiceDetail = (bill_id, invoice_id, options = {}) => {
	const url = ACCOUNT_PATH + '/bill/' + bill_id + '/invoice-template/' + invoice_id;
	return fetch.get(url, options);
}
// 查看账单详情发票模板的发票实例
export const getInvoiceRecord = (bill_id, invoice_id, options = {}) => {
	const url = ACCOUNT_PATH + '/bill/' + bill_id + '/invoice-template/' + invoice_id + '/invoice';
	return fetch.get(url, options);
}
// 查看账单详情发票模板的开票记录
export const getMakeInvoiceRecord = (bill_id, invoice_id, options = {}) => {
	const url = ACCOUNT_PATH + '/bill/' + bill_id + '/invoice-template/' + invoice_id + '/invoice/operation-log';
	return fetch.get(url, options);
}
//核销流水页面筛选待核销账单详情
export const getWaterBillList = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/payments/cancel-bill-detail' + params;
	return fetch.get(url, options);
}
// 查看账单详情核销明细（原账单核销明细接口）
export const getBillCancelDetailList = (bill_id, id, options = {}) => {
	const url = ACCOUNT_PATH + '/bill/' + bill_id + '/bill-detail/' + id + '/payments';
	return fetch.get(url, options);
}
//账套 操作记录
export const getAccountSetRecordList = (params, id, options = {}) => {
	const url = ACCOUNT_PATH + '/account-book/' + id + '/operation-log' + params;
	return fetch.get(url, options);
}
//协议管理列表
export const getAgreementManageList = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/protocol' + params;
	return fetch.get(url, params, options);
}
//协议操作
export const agreementOpt = (options = {}) => {
	const url = SOCIALWORK_PATH + '/protocol/' + options.id + '/op';
	return fetch.put(url, options);
}
//创建协议
export const createAgreement = (options = {}) => {
	const url = SOCIALWORK_PATH + '/protocol';
	return fetch.post(url, options);
}

//确认过协议人员明细
export const getConfirmAgreementStaffDetailsUtil = (id, params, options = {}) => {
	const url = SOCIALWORK_PATH + `/protocol/${id}/my-protocols${params}`;
	return fetch.get(url, options);
}

//协议详情
export const getAgreementDetails = (id, options = {}) => {
	const url = SOCIALWORK_PATH + '/protocol/' + id;
	return fetch.get(url, options);
}
//修改协议
export const updateAgreement = (options = {}) => {
	const url = SOCIALWORK_PATH + '/protocol/' + options.id;
	return fetch.put(url, options);
}
//查看付款进度列表
export const getPayProgressList = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/split-detail/' + id + '/operation-log';
	return fetch.get(url, options);
}
//任务列表
export const getTaskList = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/freedom-jobs' + params;
	return fetch.get(url, params, options);
}
//生成批量匹配的id
export const getBatchMathId = (id, options = {}) => {
	const url = SOCIALWORK_PATH + '/matching';
	return fetch.get(url, options);
}
//批量指派的导入
export const batchAssignImport = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/batch-matching/op-import';
	return fetch.post(url, params, options);
}
//批量任务的导入
export const batchTaskImport = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/freedom-jobs-temp/op-import';
	return fetch.post(url, params, options);
}
//批量指派-确认指派/取消
export const batchAssign = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/batch-matching/op';
	return fetch.post(url, params, options);
}
// 批量添加任务-确认发布/取消
export const batchAddTask = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/freedom-jobs-temp/op';
	return fetch.post(url, params, options);
}
// 指派自由职业者-确认指派/取消
export const batchAssignFreelance = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/freedom-emps-temp/op';
	return fetch.post(url, params, options);
}
//创建单个任务
export const createSingleTask = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/freedom-job';
	return fetch.post(url, params, options);
}
// 自由职位导入的删除
export const freedomEmployeeImportDel = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/freedom-emps-temp';
	return fetch.del(url, params, options);
}
// 自由职位导入的删除
export const freedomTaskImportDel = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/freedom-jobs-temp';
	return fetch.del(url, params, options);
}
//日志列表
export const getLogList = (log_id, options = {}) => {
	const url = SOCIALWORK_PATH + '/import-record/' + log_id;
	return fetch.get(url, options);
}
//任务列表
export const getFreedomJobList = (id, options = {}) => {
	const url = SOCIALWORK_PATH + '/freedom-jobs-temp/' + id + '/emps';
	return fetch.get(url, options);
}
//自由职业者列表
export const getFreelanceList = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/freedom-emps';
	return fetch.post(url, params, options);
}
//查看指派列表
export const getAssignList = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/freedom-jobs/emps' + params;
	return fetch.get(url, options);
}
//筛选详情人员详情
export const getOrderAssignList = (params, options = {}) => {
	let url = '/auth_api/socialwork/freedom-emps/freedom-emp/' + params.id;

	return fetch.get(url, options);
}
// 指派自由职业者的导入
export const batchFreelanceImport = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/freedom-emps-temp/op-import';
	return fetch.post(url, params, options);
}
//删除任务
export const delTask = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/freedom-jobs';
	return fetch.del(url, params, options);
}
//手动生成账单
export const handlecreateBill = (params, options = {}) => {
	const url = `/api/settlemgm/account-book/${params.id}/bills`
	return fetch.post(url, params, options)
}

//获取用工池列表
export const getLaborPoolDataList = (params, options = {}) => {
	// const url = RECRUIT_PATH + '/myresumes' + params;
	const url = SOCIALWORK_PATH + '/employees' + params;
	return fetch.get(url, options);
}

//创建协议
export const addTask = (options = {}) => {
	// const url = RECRUIT_PATH + '/org-resume';
	const url = SOCIALWORK_PATH + '/employees';
	return fetch.post(url, options);
}

// 指派自由职业者-现在自由职业之后传给我选择的id
export const assignEmps = (options = {}) => {
	const url = SOCIALWORK_PATH + '/freedom-emps-temp/op-select';
	return fetch.post(url, options);
}
// 指派自由职业者-调用的接口
export const getAssignFreelanceList = (options = {}) => {
	const url = SOCIALWORK_PATH + '/freedom-emps-temp/pre';
	return fetch.post(url, options);
}
// 获取待付款/已付款结算月份下拉列表
export const getMonthList = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/split-details/drop-down-list' + params;
	return fetch.get(url, options);
}
//流水导入
export const waterImport = (options = {}) => {
	const url = ACCOUNT_PATH + '/payments/op/import';
	return fetch.post(url, options);
}
//查看某批次导入流水失败记录
export const getImportFailList = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/payments/op/import/' + id + '/record';
	return fetch.get(url, options);
}
//确认导入流水
export const suerImportWater = (options = {}) => {
	const url = ACCOUNT_PATH + '/payments/op/import/confirm';
	return fetch.put(url, options);
}
// 查看某批次导入流水自动核销账单列表
export const getImportCancelBillList = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/payments/op/import/' + id + '/cancel-bill';
	return fetch.post(url, options);
}
// 任务导出
export const importTask = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/freedom-jobs/emps/export' + params;
	return fetch.get(url, options);
}
//结算管理数据统计
export const getAccountManageNum = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/progress/op/sum';
	return fetch.get(url, options);
}
// 账单费用拆分列表
export const getBillCostSplitList = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/split-details/bills' + params;
	return fetch.get(url, options);
}
// 已拆分费用项目列表
export const getSplitedList = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/bill/' + id + '/has-split-details';
	return fetch.get(url, options);
}
// 账单可拆分费用项目列表
export const getCanSplitedList = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/bill/' + id + '/wait-split-details';
	return fetch.get(url, options);
}
//批量发起付款申请
export const batchStartPay = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/bill/' + id + '/split-details/op/propose';
	return fetch.put(url, options);
}
//简历库下载身份证
export const getDownLoadIDCard = (options = {}) => {
	const url = 'api/uaa/users/id-card/op/download';
	return fetch.post(url, options);
}
//导出打印pdf
export const importPrint = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/split-detail/' + id + '/export/pdf';
	return fetch.get(url, options);
}
//指派员工修改手机号
export const updateMobile = (options = {}) => {
	const url = SOCIALWORK_PATH + '/freedom-jobs/add-freedom-emp';
	return fetch.post(url, options);
}
//删除承揽者
export const delTasker = (options = {}) => {
	const url = SOCIALWORK_PATH + '/freedom-emps';
	return fetch.del(url, options);
}
// 承揽者列表
export const getApplyList = (options = {}) => {
	const url = SOCIALWORK_PATH + '/freedom-emps';
	return fetch.get(url, options);
}
// 获取机构类型
export const getTenantType = (options = {}) => {
	const url = CONTRACT_PATH + '/tenant-type';
	return fetch.get(url, options);
}
// 用工池导出
export const laborPoolExportUtil = (params, options = {}) => {
	const url = `/api/socialwork/employees/export${params}`;
	return fetch.get(url, options)
}
//开户管理列表
export const getOpenManageList = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/individual-house-businesses' + params;
	return fetch.get(url, options);
}
//批量设置归属客户
export const batchSetCustom = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/individual-house-businesses/customer';
	return fetch.put(url, params, options);
}
// 开户管理导出
export const openManageExport = (params, options = {}) => {
	const url = SOCIALWORK_PATH + `/individual-house-businesses/op/export${params}`;
	return fetch.get(url, options)
}
// 开户操作（成功/失败）
export const openOpt = (id, params, options = {}) => {
	const url = SOCIALWORK_PATH + `/individual-house-business/${id}/op/account`;
	return fetch.put(url, params, options);
}
// 更改个体工商户开户信息
export const updateOpenOpt = (id, params, options = {}) => {
	const url = SOCIALWORK_PATH + `/individual-house-business/${id}`;
	return fetch.put(url, params, options);
}
// 更改个体工商户名字（自动/手动）
export const changeName = (id, params, options = {}) => {
	const url = SOCIALWORK_PATH + `/individual-house-business/${id}/name`;
	return fetch.put(url, params, options);
}
//查看个体工商户开户信息
export const openInfoDetail = (id, options = {}) => {
	const url = SOCIALWORK_PATH + '/individual-house-business/' + id;
	return fetch.get(url, options);
}
// 临时导入个体工商户
export const importIndividual = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/individual-house-businesses/op/import';
	return fetch.post(url, params, options);
}
// 确认导入临时导入的个体工商户
export const importIndustrial = (options = {}) => {
	const url = SOCIALWORK_PATH + `/individual-house-businesses/op/import/confirm`;
	return fetch.post(url, options);
}
// 除临时导入的个体工商户
export const delIndustrial = (params, options = {}) => {
	const url = SOCIALWORK_PATH + `/individual-house-businesses/imports`;
	return fetch.del(url, params, options);
}
// 个体工商户下载附件
export const individualDown = (id, options = {}) => {
	const url = SOCIALWORK_PATH + `/individual-house-business/${id}/attachments/op/download`;
	return fetch.get(url, options)
}
// 销户
export const cancelOpt = (id, params, options = {}) => {
	const url = SOCIALWORK_PATH + `/individual-house-business/${id}/op/cancel`;
	return fetch.put(url, params, options);
}
//查看开户失败原因
export const searchOpenFailReason = (id, params, options = {}) => {
	const url = SOCIALWORK_PATH + `/individual-house-business/${id}/fail-reason`;
	return fetch.get(url, params, options);
}
//个体工商户发票列表
export const loadIndividualInvoice = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/individual-house-businesses/invoices' + params;
	return fetch.get(url, options);
}
//登记发票
export const registerInvoice = (id, params, options = {}) => {
	const url = SOCIALWORK_PATH + `/individual-house-businesses/invoice/${id}/op/check`;
	return fetch.put(url, params, options);
}
//开票列表导出
export const invoiceExport = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/individual-house-businesses/invoices/op/export' + params;
	return fetch.get(url, options);
}
//导入个体工商户发票号码
export const exportInvoice = (options = {}) => {
	const url = SOCIALWORK_PATH + '/individual-house-businesses/invoices/op/import';
	return fetch.put(url, options);
}
//导入个体工商户发票号码最后的确认
export const exportInvoiceSure = (options = {}) => {
	const url = SOCIALWORK_PATH + '/individual-house-businesses/invoices/op/import';
	return fetch.post(url, options);
}
//开户管理操作记录列表
export const getOpenOptRecordList = (id, params, options = {}) => {
	const url = SOCIALWORK_PATH + `/individual-house-business/${id}/operation-log${params}`;
	return fetch.get(url, options);
}
//开户管理 查看失败原因
export const getFailReason = (id, params, options = {}) => {
	const url = SOCIALWORK_PATH + `/individual-house-business/${id}/fail-reason`;
	return fetch.get(url, options);
}
//统计账单中某个项目的险种合计
export const getSocialTotal = (id, params, options = {}) => {
	const url = ACCOUNT_PATH + `/bill/${id}/person-details/insurance-cost${params}`;
	return fetch.get(url, options);
}
//检查账套的服务项目是否可以修改
export const getServerIsCheck = (id, params, options = {}) => {
	const url = ACCOUNT_PATH + `/account-book/${id}/check`;
	return fetch.get(url, options);
}
//服务合同列表导出
export const contractExport = (params, options = {}) => {
	const url = CONTRACT_PATH + '/contract/export' + params;
}
//财务管理 - 任务明细 列表
export const getTaskDetailsList = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/tasks' + params;
	return fetch.get(url, options);
}
//财务管理 - 任务明细 批量发放
export const batchGrant = (options = {}) => {
	const url = SOCIALWORK_PATH + '/tasks/op/point-confirm';
	return fetch.put(url, options);
}
//财务管理 任务明细 导出
export const exportTaskDetails = (params, options = {}) => {
	// const url = SOCIALWORK_PATH + '/tasks/op/export' + params;
	const url = SOCIALWORK_PATH + '/tasks/orders/export' + params;
	return fetch.get(url, options);
}
//批量岗位导入
export const batchPositionExport = (options = {}) => {
	const url = SOCIALWORK_PATH + '/positions/import';
	return fetch.post(url, options);
}
//批量岗位导入
export const batchExportSure = (options = {}) => {
	const url = SOCIALWORK_PATH + '/positions/import/op';
	return fetch.post(url, options);
}
//用工池修改手机号
export const updateLoginMobile = (options = {}) => {
	const url = SOCIALWORK_PATH + '/employees/mobile';
	return fetch.put(url, options);
}
// 用工池查看详情

export const getEmployeeDetailsUtil = (id, options = {}) => {
	const url = SOCIALWORK_PATH + '/employee/' + id
	return fetch.get(url, options)
}
//开户管理更改接单手机号
export const updateOrderMobile = (id, options = {}) => {
	const url = SOCIALWORK_PATH + '/individual-house-business/' + id + '/mobile';
	return fetch.put(url, options);
}
//获取年检设置
export const getAsSetting = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/individual-house-businesses/annual-inspection';
	return fetch.get(url, options);
}
//年检设置
export const AsSet = (options = {}) => {
	const url = SOCIALWORK_PATH + '/individual-house-businesses/annual-inspection';
	return fetch.put(url, options);
}
//获取待年检年份
export const getASYear = (id, options = {}) => {
	const url = SOCIALWORK_PATH + `/individual-house-business/${id}/annual-inspection-year`;
	return fetch.get(url, options);
}
//办理年检
export const optAs = (id, options = {}) => {
	const url = SOCIALWORK_PATH + `/individual-house-business/${id}/op/annual-inspect`;
	return fetch.put(url, options);
}
//新增任务关联岗位列表
export const getRelevancePosition = (id, options = {}) => {
	const url = SOCIALWORK_PATH + `/positions/dropdown`;
	return fetch.get(url, options);
}
//检测账套编号是否存在
export const getAccountIsExist = (options = {}) => {
	const url = ACCOUNT_PATH + `/account-books/account-book-no/op/check`;
	return fetch.put(url, options);
}
//获取任务类型列表
export const getTaskTypeList = (id, options = {}) => {
	const url = SOCIALWORK_PATH + `/job-types`;
	return fetch.get(url, options);
}
//服务合同导入
export const contractImport = (options = {}) => {
	const url = CONTRACT_PATH + '/contract/import';
	return fetch.post(url, options);
}
//服务合同导入-确认/取消
export const contractImportSure = (options = {}) => {
	const url = CONTRACT_PATH + '/contract/import/op';
	return fetch.post(url, options);
}
//任务指派 设置用工成果
export const setLabor = (id, options = {}) => {
	const url = SOCIALWORK_PATH + `/freedom-emps/${id}/update-fee`;
	return fetch.put(url, options);
}
//获取乙方法务实体信息
export const getPartyBLengalEntity = (tentant_id, id, options = {}) => {
	const url = `/api/uaa/tenants/${tentant_id}/legal-entities?id=${id}`;
	return fetch.get(url, options);
}
//审核hr发起的任务
export const checkHrSendTask = (id, options = {}) => {
	const url = SOCIALWORK_PATH + `/freedom-job/${id}/op/check`;
	return fetch.put(url, options);
}
//批量岗位导入
export const batchResultImport = (options = {}) => {
	const url = SOCIALWORK_PATH + '/payment-import';
	return fetch.post(url, options);
}
// 导入银行流水的操作
export const batchExportWaterSure = (options = {}) => {
	const url = SOCIALWORK_PATH + '/payment-import';
	return fetch.put(url, options);
}

//店铺管理列表
export const getMinishopListUtil = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/minishop' + params;
	return fetch.get(url, options);
}

//添加店铺
export const addMinishopUtil = (options = {}) => {
	const url = SOCIALWORK_PATH + '/minishop';
	return fetch.post(url, options);
}

//编辑店铺
export const editMinishopUtil = (params, options = {}) => {
	const url = SOCIALWORK_PATH + '/minishop/' + params.id;
	return fetch.put(url, params, options);
}

//用工池下载银行卡照片
export const loadDownLoadBankCardUtil = (params, options = {}) => {
	const url = 'api/walletmgm/bank_cards' + params;
	return fetch.get(url, options);
}

//修改服务费金额
export const updateServiceFee = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/split-detail/' + params.id + '/op/update-service-fee';
	return fetch.put(url, params, options);
}
//结算>结算管理>账单信息>查看 >打印
export const printBillUtil = (params, options = {}) => {
	const url = `api/settlemgm/bill/${params}/total/export/pdf`;
	return fetch.get(url, options);
}
//结算>结算管理>账单信息>查看 >打印
export const printDetailBillUtil = (params, options = {}) => {
	const url = `api/settlemgm/bill/${params}/detail/export/pdf`;
	return fetch.get(url, options);
}
//结算   删除未锁定账单
export const deleteBillUtil = (params, options = {}) => {
	const url = `api/settlemgm/bill/${params}`;
	return fetch.del(url, options);
}
// 删除二次拆分详情
export const delSplitDetail = (id, options = {}) => {
	const url = `api/settlemgm/split-detail/${id}`;
	return fetch.del(url, options);
}
//费用拆分
export const paySplitTwo = (params, options = {}) => {
	const url = ACCOUNT_PATH + `/split-detail/${params.id}/op/split`;
	return fetch.post(url, params, options);
}
//回滚账单
export const billRollback = (params, options = {}) => {
	const url = ACCOUNT_PATH + '/bill/' + params.id + '/op/rollback';
	return fetch.put(url, params, options);
}
// 获取业务类型列表
export const getBusinessType = (params, options = {}) => {
	const url = CONTRACT_PATH + `/service-content/service-product-type`;
	return fetch.get(url, options);
}
// 获取服务项目列表
export const getServiceProject = (params, options = {}) => {
	const url = CONTRACT_PATH + `/service-content/service-project`;
	return fetch.get(url, options);
}
// 获取收费规则列表
export const getFeeProjectCode = (params, options = {}) => {
	const url = CONTRACT_PATH + `/fee-project/options`;
	return fetch.get(url, options);
}
// 合同查看-审批/归档记录列表 
export const getPackageList = (id, options = {}) => {
	const url = CONTRACT_PATH + `/contracts/${id}/package`;
	return fetch.get(url, options);
}
// 合同查看-查看关联合同列表
export const getRelationContractList = (params, options = {}) => {
	const url = CONTRACT_PATH + `/contracts/${params.id}/relation?${params.query}`;
	return fetch.get(url, options);
}

//创建合同-新增岗位单价
export const addPosition = (options = {}) => {
	const url = CONTRACT_PATH + '/position-fee';
	return fetch.post(url, options);
}

// 合同查看-基本信息
export const getContractBaseInfo = (id, options = {}) => {
	const url = CONTRACT_PATH + `/simple-contracts/${id}`;
	return fetch.get(url, options);
}
//服务合同中岗位导入
export const contractPositionImport = (options = {}) => {
	const url = CONTRACT_PATH + '/position-fee/import';
	return fetch.post(url, options);
}
// 添加补充协议
export const addProtocol = (id, options = {}) => {
	const url = CONTRACT_PATH + `/contracts/${id}/protocol`;
	return fetch.post(url, options);
}
// 归档
export const contractPackage = (id, options = {}) => {
	const url = CONTRACT_PATH + `/contracts/${id}/package`;
	return fetch.post(url, options);
}
// 合同查看-费用项目
export const getContractProjectInfo = (id, options = {}) => {
	const url = CONTRACT_PATH + `/contracts/${id}/fee-project`;
	return fetch.get(url, options);
}
// 服务合同政策地区
export const getPolicyAreaList = (params, options = {}) => {
	const url = `/api/sipolicy/policy-area${params}`;
	return fetch.get(url, options);
}
// 归档补充协议信息
export const getPackageAgreeList = (id, options = {}) => {
	const url = CONTRACT_PATH + `/contracts/${id}/protocol`;
	return fetch.get(url, options);
}
//续签合同
export const renewContract = (id, params, options = {}) => {
	const url = CONTRACT_PATH + '/contracts/' + id + '/renew';
	return fetch.post(url, params, options);
}
// 获取服务合同常用名称设置
export const getServiceNormalName = (id, options = {}) => {
	const url = CONTRACT_PATH + `/custom/setting`;
	return fetch.get(url, options);
}
// 作废
export const cancelContract = (id, options = {}) => {
	const url = CONTRACT_PATH + `/contracts/${id}/cancel`;
	return fetch.put(url, options);
}
// 发起审批
export const approval = (id, options = {}) => {
	const url = CONTRACT_PATH + `/contracts/${id}/approval`;
	return fetch.post(url, options);
}
//继续编辑
export const redditContract = (id, params, options = {}) => {
	const url = CONTRACT_PATH + `/contracts/${id}/reedit`
	return fetch.put(url, params, options);
}
//重新发起
export const reconfirmContract = (id, params, options = {}) => {
	const url = CONTRACT_PATH + `/contracts/${id}/reedit`
	return fetch.put(url, params, options);
}
//社保费用拆分
export const actionProjectSplit = (id, options = {}) => {
	const url = ACCOUNT_PATH + `/split-detail/${id}/insurances/op/split`;
	return fetch.post(url, options);
}

// 钉钉发起部门选择
export const getDepartmentList = (id, options = {}) => {
	const url = `/api/approval/user/departments`;
	return fetch.get(url, options);
}

//核销发票
export const cancelInvoice = (id, options = {}) => {
	const url = ACCOUNT_PATH + '/payments/payment/' + id + '/op/cancel-invoice';
	return fetch.put(url, options);
}

//查看账单核销记录
export const getBillRejectList = (id, detail_id, type, options = {}) => {
	let url = ''
	if (type == 'bill') {
		url = ACCOUNT_PATH + '/bills/bill/' + id + '/bill-details/bill-detail/' + detail_id + '/cancel-records';
	} else {
		url = ACCOUNT_PATH + '/invoices/invoice/' + id + '/cancel-records';
	}
	return fetch.get(url, options);
}
//查看账单核销记录
export const getBillCancelList = (id, params, options = {}) => {
	let url = url = ACCOUNT_PATH + '/payments/payment/' + id + '/cancel-bill-detail-records' + params;
	return fetch.get(url, options);
}
//查看发票核销记录
export const getBillInvoiceList = (id, params, options = {}) => {
	let url = url = ACCOUNT_PATH + '/payments/payment/' + id + '/cancel-invoice-records' + params;
	return fetch.get(url, options);
}
//驳回账单
export const rejectBill = (id, options = {}) => {
	const url = ACCOUNT_PATH + `/bills/bill/${id}/op/rollback`;
	return fetch.put(url, options);
}
//转客服核销流水
export const returnCancelWater = (id, options = {}) => {
	const url = ACCOUNT_PATH + `/payments/payment/${id}/op/transfer`;
	return fetch.put(url, options);
}
//审核流水核销
export const cancelVerify = (id, options = {}) => {
	const url = ACCOUNT_PATH + `/payments/payment/${id}/op/cancel-verify`;
	return fetch.put(url, options);
}
//发票核销流水
export const cancelInvoiceCancel = (id, options = {}) => {
	const url = ACCOUNT_PATH + `/invoices/invoice/${id}/op/cancel`;
	return fetch.put(url, options);
}
export const getFinancialTaskDetailUtil = (params, options) => {
	const url = `api/socialwork/tasks/orders${params}`
	return fetch.get(url, options)
}
//核销流水关联法务实体 提交
export const addRelationLegalEntityUtil = (params, options) => {
	const url = `api/settlemgm/payments/payer/relations`
	return fetch.post(url, params, options)
}
//获取开票记录--多个发票模板--每一个发票模板下的所有发票
export const getTemplateAllInvoiceActionApi = (id, params, options = {}) => {
	const url = `/api/settlemgm/bills/bill/${id}/invoice-templates/invoice-template/${params}/invoices`;
	return fetch.get(url, options);
}

//作废
export const loadCancellationActionApi = (id, params, options = {}) => {
	const url = `/api/settlemgm/invoices/invoice/${id}/op/abandon`;
	return fetch.put(url, params, options);
}

//驳回
export const loadRejectActionApi = (id, params, options = {}) => {
	const url = `/api/settlemgm/invoices/invoice/${id}/op/deny`;
	return fetch.put(url, params, options);
}