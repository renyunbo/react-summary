import * as fetch from './fetch'

const URL = '/api/socialwork'

// 订单列表
export const getOrdersListUtil = (params, options = {}) => {
	const url = `${URL}/orders${params}`
	return fetch.get(url, options)
}

// 订单详情
export const getOrdersDetailsUtil = (order_id, options = {}) => {
	const url = `${URL}/orders/order/${order_id}`
	return fetch.get(url, options)
}

// 设置用工成果
export const putTotalSalaryUtil = (params, options = {}) => {
	const url = `${URL}/orders/order/${params.order_id}/freedom-emps/freedom-emp/${params.id}/total-salary`
	return fetch.put(url, params, options)
}

// 导出
export const getOrderExportUtil = (order_id, type,from, options = {}) => {
  let url = ``
  // 下载订单
  if (type == 'order') {
	  if(from == 'plat'){
		url = `${URL}/orders/order/${order_id}/op/export?role=settlement_org`
	  }else{
		url = `${URL}/orders/order/${order_id}/op/export`
	  }

  }
  // 下载身份证信息
  if (type == 'id_card') {
    url = `${URL}/orders/order/${order_id}/freedom-emps/id-cards/op/download`
  }
	return fetch.get(url, options)
}

// 渠道列表////机构列表
export const getTenantsListUtil = (options = {}) => {
	const url = `${URL}/settlement-orgs/tenants`
	return fetch.get(url, options)
}

// 订单详情人员
export const getFreedomEmpsListUtil = (params, order_id, options = {}) => {
	const url = `${URL}/orders/order/${order_id}/freedom-emps${params}`
	return fetch.get(url, options)
}

// 删除订单详情人员
export const delFreedomEmpsUtil = (params, options = {}) => {
	const url = `${URL}/orders/order/${params.order_id}/freedom-emps/freedom-emp/${params.id}`
	return fetch.del(url, options)
}

// 重新支付订单
export const putOrderRepayUtil = (params, options = {}) => {
	const url = `${URL}/orders/order/${params.order_id}/op/repay`
	return fetch.put(url, params, options)
}
// 订单失败列表更正
export const putCorrectionsUtil = (params, options = {}) => {
	const url = `${URL}/orders/order/${params.order_id}/freedom-emps/freedom-emp/${params.id}`
	return fetch.put(url, params, options)
}

// 支付订单
export const putOrderPayUtil = (params, options = {}) => {
	const url = `${URL}/orders/order/${params.order_id}/op/pay`
	return fetch.put(url, params, options)
}

// 支付订单
export const isConfirmOrderPayUtil = (params, options = {}) => {
	const url = `${URL}/orders/order/${params.order_id}/op/pay-check`
	return fetch.get(url, options)
}



// 上传凭证
export const uploadEvidenceUtil = (params, options = {}) => {
	const url = `${URL}/orders/order/${params.order_id}/task_proofs`
	return fetch.post(url, params.info, options)
}

// 查看凭证详情
export const getEvidenceDetailsUtil = (order_id,params,options = {}) => {
	const url = `${URL}/orders/order/${order_id}/task_proofs` + params
	return fetch.get(url, options)
}

// 下载凭证
export const downloadEvidenceUtil = (params,options = {}) => {
	const url = `${URL}/orders/order/${params.order_id}/freedom-emps/freedom-emp/${params.freedom_emp_id}/task-proofs/op/download`
	return fetch.get(url, options)
}

// 删除凭证
export const delEvidenceUtil = (params,options = {}) => {
	const url = `${URL}/orders/order/${params.order_id}/task_proofs/task_proof/${params.proof_id}`
	return fetch.del(url, options)
}

// 删除订单
export const delWaitPayOrderUtil = (order_id, options = {}) => {
	const url = `${URL}/orders/order/${order_id}`
	return fetch.del(url, options)
}

// 设置常用地址
export const postSetAddressesUtil = (params, options = {}) => {
	const url = `${URL}/addresses`
	return fetch.post(url, params, options)
}

// 查看常用地址
export const getSetAddressesListUtil = (options = {}) => {
	const url = `${URL}/addresses`
	return fetch.get(url, options)
}

// 删除常用地址
export const deltAddressesUtil = (id, options = {}) => {
	const url = `${URL}/addresses/address/${id}`
	return fetch.del(url, options)
}

// 创建订单
export const createOrderUtil = (params, options = {}) => {
	const url = `${URL}/orders`
	return fetch.post(url, params, options)
}

// 获取付款人信息
export const getpayEntUtil = (params, options = {}) => {
	const url = `api/walletmgm/pay_ent/${params.legal_entity_id}/customer_type/${params.legal_entity_type}`
	return fetch.get(url, params, options)
}

// 导入用工明细
export const importEmpsTempBatchesUtil = (params, type, options = {}) => {
	let url = ``
	if (type == 'emps') {
		url = `${URL}/freedom-emps/temp-batches/op/import`
	}
	if (type == 'achieve') {
		url = `${URL}/orders/order/${params.order_id}/freedom-emps/temp-batches/op/import-salary`
	}
	return fetch.post(url, params, options)
}

// 获取导入数据
export const getImportBatchesListUtil = (params, options = {}) => {
	const url = `${URL}/freedom-emps/temp-batches?${params}`
	return fetch.get(url, options)
}

// 删除任务明细
export const delImportBatchesUtil = (id, options = {}) => {
	const url = `${URL}/freedom-emps/temp-batches/temp-batch/${id}`
	return fetch.del(url, options)
}

// 失败记录
export const getImportFailedRecordListUtil = (params, batch_id, options = {}) => {
	const url = `${URL}/freedom-emps/temp-batches/temp-batch/${batch_id}/fail-reasons${params}`
	return fetch.get(url, options)
}

// 导入任务明细提交
export const postImportEmpsTempBatchesUtil = (params, type,  options = {}) => {
	let url = ``
	if (type == 'emps') {
		url = `${URL}/orders/order/${params.order_id}/freedom-emps`
		return fetch.post(url, params, options)
	}
	if (type == 'achieve') {
		url = `${URL}/orders/order/${params.order_id}/freedom-emps/total-salary`
		return fetch.put(url, params, options)
	}
}

// 导出订单无任务金额的人员
export const exportNoTotalSalaryUtil = (order_id, options = {}) => {
	const url = `${URL}/orders/order/${order_id}/freedom-emps/op/export-no-total-salary`
	return fetch.get(url, options)
}

// 编辑法务实体证件信息
export const putCertificationInfoUtil = (params, options = {}) => {
	console.warn(params)
	let url = ``
	if (params.payer_object_type == 'tenant') {
		url = `api/uaa/certification/legal-entities/${params.payer_object_id}`
		return fetch.put(url, params, options)
	}
	if (params.payer_object_type == 'customer') {
		url = `api/crm/certification/legal-entities/${params.payer_object_id}`
		return fetch.put(url, params, options)
	}
}

//订单管理导出
export const exportSocialOrdersUtil = (params,options={}) => {
	const url = `api/socialwork/orders/op/export${params}`
	return fetch.get(url,options)
}
export const uploadIDorContractFileUtil = (params,options) => {
	const url = `api/socialwork/orders/order/${params.id}/freedom-emps/freedom-emp/${params.emp_id}/attachments`
	return fetch.post(url,params,options)
}
export const createFinancialOrderUtil = (params,options) => {
	const url = `api/socialwork/orders/task-orders`
	return fetch.post(url,params,options)
}

//电子合同导出 
export const exportElContractUtil = (params,options={}) => {
	const url = `api/contract/socialwork-contracts/op/export${params}`
	return fetch.get(url,options)
}
//全部接单
export const acceptAllOrderUtil = (params,options={}) => {
	const url = `api/socialwork/orders/order/${params.id}/freedom-emps/op/batch-confirm`
	return fetch.put(url,params,options)
}
//下载电子合同
export const downEleContractPathUtil = (id,options={}) => {
	const url = `api/socialwork/orders/order/${id}/op/download-contract`
	return fetch.get(url,options)
}