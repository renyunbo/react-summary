import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';

const PROVIDER_PATH  = '/api/providermgm/providers';

//求职者数据列表
export const loadJobSeekerInfoList=(params,options={})=>{
	const url='/api/statistics/candidates'+ `?`+params;
	return fetch.get(url,options);
}
//招聘数据列表
export const loadRecruitDataInfoList=(params,options={})=>{
	const url='/api/statistics/candidates/stats'+ `?`+params;
	return fetch.get(url,options);
}
//招聘数据总数统计
export const loadRecruitDataSum=(params,options={})=>{
	const url='/api/statistics/candidates/stats-sum'+ `?`+params;
	return fetch.get(url,options);
}
//求职者数据列表导出
export const exportJobSeekerReportList=(params,options={})=>{
	const url='/api/statistics/candidates/export'+ `?`+params;
	return fetch.get(url,options);
}
//招聘数据列表导出
export const exportRecruitReportList=(params,options={})=>{
	const url=`/api/statistics/candidates/stats/export`+'?'+params;
	return fetch.get(url,options);
}

// 数据概览
// 客户总数
export const loadCrmData = (options = {}) => {
	const url = `/api/crm/statistics`
	return fetch.get(url, options)
}

// 招聘
export const loadRecruitData = (params, options = {}) => {
	const url = `/api/recruit/statistics${params}`
	return fetch.get(url, options)
}

// 雇员
export const loadEmpmgmData = (params, options = {}) => {
	const url = `/api/empmgm/statistics${params}`
	return fetch.get(url, options)
}

// 薪酬
export const loadPayrollData = (params, options = {}) => {
	const url = `/api/payroll/statistics${params}`
	return fetch.get(url, options)
}

// 社保
export const loadPsiorderData = (params, options = {}) => {
	const url = `/api/psiorder/statistics${params}`
	return fetch.get(url, options)
}

// 劳动合同
export const loadContractData = (params, options = {}) => {
	const url = `/api/contract/statistics${params}`
	return fetch.get(url, options)
}
// 新增简历数详细数据列表
export const newAdResumeList = (params, options = {}) => {
	const url = `/api/statistics/` + params
	return fetch.get(url, options)
}
// 新增简历数详细数据   分页
export const newAdResumepage = (params, options = {}) => {
	const url = `/api/statistics/list-rank` + params
	return fetch.get(url, options)
}
// 转化率分析-汇总数据
export const loadAnalyzeTotalInfoList = (params, options = {}) => {
	const url = `/api/statistics/conversion-statistics` + params
	return fetch.get(url, options)
}
// 转化率分析-绩效分析
export const loadStatisticsPerformanceList = (params, options = {}) => {
	const url = `/api/statistics/statistics-performance` + params
	return fetch.get(url, options)
}
// 转化率分析-招聘过程分析
export const loadStatisticsProcedureList = (params, options = {}) => {
	const url = `/api/statistics/statistics-procedure` + params
	return fetch.get(url, options)
}
// 转化率分析-渠道效果分析分析
export const loadStatisticsChannelList = (params, options = {}) => {
	const url = `/api/statistics/statistics-channel` + params
	return fetch.get(url, options)
}
//转化率分析-来源途径列表
export const loadSourceWayList = (params, options = {}) => {
    const url = `/api/statistics/source-list`;
	return fetch.get(url, options)
}
//转化率分析-推荐人列表
export const loadRecommenderList = (params, options = {}) => {
    const url = `/api/statistics/recommender-list` ;
	return fetch.get(url, options)
}
