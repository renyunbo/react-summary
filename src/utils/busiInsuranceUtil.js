import * as fetch from './fetch'

const URL = '/api/busiinsurance'

// 产品列表
export const getProductsListUtil = (params, options = {}) => {
	const url = `${URL}/products${params}`
	return fetch.get(url, options)
}

// 新增产品
export const postAddProductsUtil = (params, options = {}) => {
	const url = `${URL}/products`
	return fetch.post(url, params, options)
}

// 删除产品
export const delProductsUtil = (id, options = {}) => {
	const url = `${URL}/products/${id}`
	return fetch.del(url, options)
}

// 购买产品
export const buyProductUtil = (params, options = {}) => {
	const url = `${URL}/buy-product`
	return fetch.post(url, params, options)
}

// 产品详情
export const getProductsDetailsUtil = (id, options = {}) => {
	const url = `${URL}/products/${id}`
	return fetch.get(url, options)
}

// 方案列表
export const getProgrammesListUtil = (params, options = {}) => {
	const url = `${URL}/programmes${params}`
	return fetch.get(url, options)
}

// 新增方案
export const postAddProgrammesUtil = (params, options = {}) => {
	const url = `${URL}/programmes`
	return fetch.post(url, params, options)
}

// 删除方案
export const delProgrammesUtil = (id, options = {}) => {
	const url = `${URL}/programmes/${id}`
	return fetch.del(url, options)
}

// 方案详情
export const getProgrammesDetailsUtil = (id, options = {}) => {
	const url = `${URL}/programmes/${id}`
	return fetch.get(url, options)
}

// 编辑方案
export const putEditProgrammesUtil = (params, options = {}) => {
	const url = `${URL}/programmes`
	return fetch.put(url, params, options)
}

// 配置方案
export const getSetProgrammesListUtil = (params, options = {}) => {
	const url = `${URL}/set-programmes${params}`
	return fetch.get(url, options)
}

// 配置方案 删除
export const postSetProgrammesUtil = (params, options = {}) => {
	const url = `${URL}/set-programmes`
	return fetch.post(url, params, options)
}

// 配置方案 删除
export const delSetProgrammesUtil = (id, options = {}) => {
	const url = `${URL}/set-programmes/${id}`
	return fetch.del(url, options)
}

// 导入在保人员
export const postOninsuredImportUtil = (params, options = {}) => {
	const url = `${URL}/oninsured-import`
	return fetch.post(url, params, options)
}

// 商保首页统计
export const getInsurancesCountUtil = (options = {}) => {
	const url = `${URL}/index-statistics`
	return fetch.get(url, options)
}

// 今日/月加/减保
export const getPersonInsurancesListUtil = (params, options = {}) => {
	const url = `${URL}/person-insurances${params}`
	return fetch.get(url, options)
}

// 今日/月加/减保  详情
export const getPersonInsurancesDetailsUtil = (id, options = {}) => {
	const url = `${URL}/person-insurances/${id}`
	return fetch.get(url, options)
}

// 批量加保、减保
export const postAddinsurancesImportUtil = (params, options = {}) => {
	let url = ''
	if (params.type == 'add') {
		url = `${URL}/addinsurances-import`
	}
	if (params.type == 'reduce') {
		url = `${URL}/reduce-import`
	}
	return fetch.post(url, params, options)
}

// 单独加保
export const postPersonInsurancesUtil = (params, options = {}) => {
	const url = `${URL}/person-insurances`
	return fetch.post(url, params, options)
}

// 获取员工信息
export const getEmployeeInfoeUtil = (params, options = {}) => {
	const url = `${URL}/get-employees?${params}`
	return fetch.get(url, options)
}

// 失败待处理 删除
export const delPersonInsuranceUtil = (query, options = {}) => {
	const url = `${URL}/person-insurances/${query.id}`
	return fetch.del(url, query, options)
}

// 办理列表
export const getDealListUtil = (params, options = {}) => {
	const url = `${URL}/deal-list${params}`
	return fetch.get(url, options)
}

// 导入办理结果
export const postDealresultImportUtil = (params, options = {}) => {
	const url = `${URL}/dealresult-import`
	return fetch.post(url, params, options)
}

// 导出办理
export const getDealresultExportUtil = (programme_id, options = {}) => {
	const url = `${URL}/dealresult-export/${programme_id}`
	return fetch.get(url, options)
}

// 导入记录
export const getImportRecordListUtil = (params, options = {}) => {
	const url = `${URL}/import-list${params}`
	return fetch.get(url, options)
}

// 导入记录详情
export const getImportRecordDetailsUtil = (id, options = {}) => {
	const url = `${URL}/import-detail/${id}`
	return fetch.get(url, options)
}

// 确认生效/拒绝/减保/加保
export const postPersonInsurancesActionUtil = (params, options = {}) => {
	const url = `${URL}/person-insurances/op/actions`
	return fetch.put(url, params, options)
}






