import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';

const PROVIDER_PATH = '/api/providermgm/providers';


//某服务地区的供应商
export const getServiceAreaProviderUtil = (params, options = {}) => {
	const url = '/api/providermgm/providers-area' + (params ? '?' + params : '');
	return fetch.get(url, options);
}

//获取动态表达定义
export const getFormDefind = (params, options = {}) => {
	const url = '/api/formmeta/fields' + params;
	return fetch.get(url, options);
}
//获取供应商列表
export const getProviders = (data, options = {}) => {
	const url = PROVIDER_PATH + data;
	return fetch.get(url, options);
}
export const getRecruitProvider = (data, options = {}) => {
	const url = '/api/providermgm/recruit-providers' + data;
	return fetch.get(url, options);
}

//获取供应商详情
export const getProvider = (data, options = {}) => {
	const url = PROVIDER_PATH + '/' + data;
	return fetch.get(url, options);
}

//添加供应商
export const addProvider = (data, options = {}) => {
	const url = PROVIDER_PATH;
	return fetch.post(url, data, options);
}

//更新(除了账号信息)
export const editProvider = (data, options = {}) => {
	if ('editArea' == data.type) {//供应商修改地区
		const url = '/api/providermgm/providers/' + data.id + '/service-regions';
		return fetch.putJson(url, data, options);
	} else {
		const url = PROVIDER_PATH + '/' + data.id;
		return fetch.putJson(url, data, options);
	}
}

// 停用/启用供应商
export const actProvider = (data, options = {}) => {
	const url = PROVIDER_PATH + '/' + data.id + '/action';
	return fetch.putJson(url, data, options);
}

//获取账号
export const getProviderAccount = (data, options = {}) => {
	const url = PROVIDER_PATH + '/' + data + '/admin-account';
	return fetch.get(url, options);
}

//开通账号
export const openProviderAccount = (data, options = {}) => {
	const url = PROVIDER_PATH + '/' + data.id + '/admin-account';
	return fetch.post(url, data, options);
}

//导入供应商
export const importProvider = (data, options = {}) => {
	const url = 'api/providermgm/do-import';
	return fetch.post(url, data, options);
}

//微信经纪人分销列表
export const getAgentList = (params, options = {}) => {

	const url = '/api/recruit/brokers' + `?` + params;
	return fetch.get(url, options);
}
//微信经纪人分销业绩列表
export const getAgentListDetail = (params, options = {}) => {
	const url = '/api/recruit/broker-candidates' + `?` + params;
	return fetch.get(url, options);
}

//微信经纪人分销修改状态
export const changeAgentState = (data, options = {}) => {
	const url = '/api/recruit/brokers/' + data.id + `/status-settings`;
	return fetch.put(url, data, options);
}
//微信经纪人审核操作（通过或者拒绝，包括编辑经纪人）
export const checkAgentState = (data, options = {}) => {
	const url = '/api/recruit/brokers/status-settings';
	return fetch.put(url, data, options);
}

//微信经纪人新增一级经纪人
export const addAgent = (data, options = {}) => {
	const url = '/api/recruit/brokers';
	return fetch.post(url, data, options);
}
//微信经纪人新增一级经纪人
export const editAgent = (data, options = {}) => {
	const url = '/api/recruit/brokers';
	return fetch.post(url, data, options);
}
//微信经纪人分销导入经纪人
export const importAgent = (data, options = {}) => {
	const url = '/api/recruit/brokers/do-import';
	return fetch.post(url, data, options);
}
//微信经纪人分销设置经纪人
export const setAgent = (data, options = {}) => {
	const url = '/api/recruit/brokers-setting';
	return fetch.post(url, data, options);
}
//微信经纪人分销设置经纪人
export const agentSettingDays = (params, options = {}) => {
	const url = '/api/recruit/brokers-setting';
	return fetch.get(url, options);
}

//微信经纪人详情
export const detailAgent = (data, options = {}) => {
	// const url = '/api/recruit/brokers'+'/'+data.id;
	const url = '/api/recruit/brokers' + '/' + data.id + '?query_type=' + data.type;
	console.log(url);
	return fetch.get(url, options);
}

//微信经纪人详情下级列表
export const detaiListLowerAgent = (str, id, options = {}) => {
	const url = '/api/recruit/brokers' + '/' + id + `/lower` + '?' + str;
	return fetch.get(url, options);
}
//微信经纪人详情列表
export const detaiListAgent = (str, id, options = {}) => {

	const url = '/api/recruit/brokers' + '/' + id + `/achievement-list` + '?' + str;
	return fetch.get(url, options);
}

//导出业绩详情
export const downloadAgentExcel = (params, options = {}) => {
	const url = '/api/recruit/broker-candidates/export?' + params;
	return fetch.get(url, options);
}

//导入业绩详情
export const importAgents = (params, options = {}) => {
	const url = '/api/recruit/brokerage-change/do-import'
	return fetch.post(url, params, options)
}

//获取首页经纪人设置
export const getIndexAgent = (params, options = {}) => {
	const url = '/api/recruit/broker-settings';
	return fetch.get(url, options);
}
//编辑首页经纪人设置
export const setIndexAgent = (data, options = {}) => {
	const url = '/api/recruit/broker-settings';
	return fetch.post(url, data, options);
}
//获取经纪人首页每日汇总
export const getIndexCollectToday = (params, options = {}) => {
	const url = '/api/recruit/brokers-home/daily-statistics';
	return fetch.get(url, options);
}
//获取供应商管理首页每日汇总
export const getManageCollectToday = (params, options = {}) => {
	const url = '/api/recruit/brokers-home/daily-statistics';
	return fetch.get(url, options);
}


//获取经纪人首页经纪人汇总
export const getIndexCollectAgent = (params, options = {}) => {
	const url = '/api/recruit/brokers-home/statistics';
	return fetch.get(url, options);
}

//获取供应商管理首页供应商汇总
export const getManageCollectAgent = (params, options = {}) => {
	const url = '/api/recruit/brokers-home/statistics';
	return fetch.get(url, options);
}



//获取经纪人首页业绩及结算汇总
export const getIndexCollectAchievementSettlement = (params, options = {}) => {
	const url = '/api/recruit/brokers-home/achievement-settlement-statistics';
	return fetch.get(url, options);
}

//获取供应商首页业绩及结算汇总
export const getManageCollectAchievementSettlement = (params, options = {}) => {
	const url = '/api/recruit/brokers-home/achievement-settlement-statistics';
	return fetch.get(url, options);
}

//经纪人管理 ————结算明细—————————代理——————————————————————————start

//经纪人管理————结算明细    代理 获取岗位
export const getPosttion = (params, options = {}) => {
	const url = `/api/recruit/positions?all=true&status=active&view=published` //status=active&view=published
	return fetch.get(url, options);
}


//经纪人管理————结算明细    代理  列表
export const getBillingDetails = (params, options = {}) => {
	const url = `/api/recruit/settlement-statistics?` + `${params}`
	return fetch.get(url, options);
}

//经纪人管理————结算明细    代理  导出
export const getBillingDetailsExport = (params, options = {}) => {
	const url = `/api/recruit/do-export/settlement-statistics?` + `${params}`
	return fetch.get(url, options);
}

//经纪人管理————结算明细    代理  确认（批量确认）
export const postBillingDetails = (data, params, options = {}) => {
	const url = `/api/recruit/settlement-statistics/op/confirm`
	return fetch.post(url, data, options);
}
//经纪人管理————结算明细    代理  查看
export const getLookOver = (data, params, options = {}) => {
	console.log(data)
	const url = `/api/recruit/settlement-details/${data}`
	return fetch.get(url, options);
}
//经纪人管理————结算明细    代理  查看   经纪人
export const getLookOverbroker = (id, params, options = {}) => {
	console.log(id)
	const url = `/api/recruit/settlement-statistics/${id}`
	return fetch.get(url, options);
}
//经纪人管理————结算明细    代理  查看  作废
export const postLookOverbroker = (data, params, options = {}) => {
	const url = `/api/recruit/settlement-details/op/invalid`
	return fetch.post(url, data, options);
}

//经纪人管理————结算明细    分销  查看
export const postLookOverbroke = (data, params, options = {}) => {
	console.log(data, params)
	const url = `/api/recruit/settlement-details/op/invalid`
	return fetch.post(url, data, options);
}
//经纪人管理 ————结算明细—————————代理——————————————————————————end

// 已通过经纪人导出二维码
export const importQecode = (id, options = {}) => {
	const url = `/api/recruit/brokers/${id}/posqrcode`
	return fetch.get(url, options)
}

export const brokerChangeStatusUtil = (params, options = {}) => {
	const url = `/api/recruit/brokers/op/change-status`
	return fetch.post(url, params, options)
}

//英格玛---供应商管理

//获取供应商---今日汇总数据
export const getProviderTodayCollectApi = (params, options = {}) => {
	const url = `/api/recruit/brokers-home/daily-statistics`
	return fetch.get(url, params)
}
//获取供应商---供应商汇总数据
export const getProviderManageCollectApi = (params, options = {}) => {
	const url = `/api/recruit/brokers-home/statistics`
	return fetch.get(url, params)
}

//获取供应商---供应商汇总数据
export const getPerformanceSettleApi = (params, options = {}) => {
	const url = `/api/recruit/brokers-home/achievement-settlement-statistics`
	return fetch.get(url, params)
}

//获取待审核供应商数据
export const getAuditListActionApi = (params, options = {}) => {
	const url = `/api/recruit/brokers${params}`
	return fetch.get(url, params)
}

//获取所有负责人数据
export const getAllPrincipalActionApi = (params, options = {}) => {
	const url = `/api/uaa/simple/admins${params}`
	return fetch.get(url, params)
}

//批量审核选中的未审核供应商
export const batchReviewProviderActionApi = (data, options = {}) => {
	const url = `/api/recruit/brokers/status-settings`
	return fetch.put(url, data, options)
}

//已通过供应商---添加供应商
export const addPassedProviderActionApi = (data, options = {}) => {
	const url = `/api/recruit/brokers`
	return fetch.post(url, data, options)
}
//获取导出二维码
export const getImportTwoDimensionalCodeActionApi = (params, options = {}) => {
	const url = `/api/recruit/brokers/${params}/posqrcode`
	return fetch.get(url, params, options)
}

//获取所有归属公司
export const getAllCompanyActionApi = (params, options = {}) => {
	const url = `/api/uaa/myorgs`
	return fetch.get(url, params, options)
}

//获取供应商详情信息
export const getProviderInfoDetailActionApi = (params, options = {}) => {
	const url = `/api/recruit/brokers${params}`
	return fetch.get(url, params, options)
}

//供应商管理---结算明细---列表
export const getBillingListActionApi = (params, options = {}) => {
	const url = `/api/recruit/settlement-statistics${params}`
	return fetch.get(url, params, options)
}

//供应商管理---结算明细--详情---基本信息
export const getLookOverBaseInfoActionApi = (params, options = {}) => {
	const url = `/api/recruit/settlement-statistics/${params}`
	return fetch.get(url, params, options)
}

//供应商管理---结算明细--详情---列表
export const getLookOverListActionApi = (params, options = {}) => {
	const url = `/api/recruit/settlement-details/${params}`
	return fetch.get(url, params, options)
}

//供应商管理---已通过供应商---终止合作
export const endPassedCooperationActionApi = (params, options = {}) => {
	const url = `/api/recruit/brokers/op/change-status`
	return fetch.post(url, params, options)
}

//供应商管理---已通过供应商---上传附件
export const uploadingAccessoryActionApi = (params, options = {}) => {
	const url = `/api/recruit/brokers/op/upload-files/${params.id}`
	return fetch.post(url, params, options)
}

//供应商管理--已失效---启用/停用
export const startUsingActionApi = (params, options = {}) => {
	const url = `/api/recruit/brokers/op/change-status`
	return fetch.post(url, params, options)
}

//供应商管理--详情---招聘职位--列表
export const getPositionListActionApi = (str, id, options = {}) => {
	const url = `/api/recruit/broker-position-statistics/${id}${str}`
	return fetch.get(url, options)
}

//供应商管理--结算明细--详情--列表---作废/返利加减项
export const cancellationLookOverActionApi = (params, options = {}) => {
	const url = `/api/recruit/settlement-details/op/modify`
	return fetch.post(url, params, options)
}


//财务管理--积分发放--详情--列表
export const getLookDetailClassActionApi = (params, options = {}) => {
	const url = `/api/recruit/issue-details/${params}`
	return fetch.get(url, params, options)
}

//供应商管理--查看--业绩统计--职位名称
export const getAllPositionTypesActionApi = (params, options = {}) => {
	const url = `/api/recruit/has-policy-positions?all=true`
	return fetch.get(url, params, options)
}

//供应商管理--结算明细--查看--获取修改规则
export const getAmendRebateRuleActionApi = (params, options = {}) => {
	const url = `/api/recruit/position-broker-policies/${params}`
	return fetch.get(url, params, options)
}

//供应商管理--结算明细--打印
export const printFileActionApi = (params, options = {}) => {
	const url = `/api/recruit/settlement-statistic/${params}/op/print`
	return fetch.post(url, {}, options)
}

//供应商管理--已通过--查看--招聘职位--列表--下载二维码
export const getPositionTwoCodeActionApi = (position_id, broker_id, options = {}) => {
	const url = `/api/recruit/positions/${position_id}/posqrcode?broker_id=${broker_id}`
	return fetch.get(url, options)
}
