import * as fetch from './fetch'

// 自然人基础信息采集list
export const getNaturalPersonBasicInfoCollectionUtil = (query, params, options = {}) => {
  // 基础信息未提交
  let url = `/api/persontax/personal-informations${query}`
  if (params == 'abon' || params == 'perfect') {
    // 非正常
    url = `/api/persontax/employee-informations-improper${query}`
  }
  return fetch.get(url, options)
}


// 自然人基础信息采集list  提醒员工
export const postShortMsgActionUtil = (query, options = {}) => {
  const url = `/api/persontax/personal-informations/short-msg`
  return fetch.post(url, query, options)
}

// 自然人基础信息采集list  确认非正常
export const postSureActionUtil = (query, options = {}) => {
  const url = `/api/persontax/personal-confirm`
  return fetch.post(url, query, options)
}

// 专向附加采集 list
export const getSpecAddDeduCollUtil = (query, options = {}) => {
  const url = `/api/persontax/person-additions${query}`
  return fetch.get(url, options)
}

// 专向附加采集 list  提醒员工
export const postSpecAddShortMsgUtil = (query, options = {}) => {
  const url = `/api/persontax/person-additions/op/remind`
  return fetch.post(url, query, options)
}

// 自然人信息申报 list
export const getNatuPernfoDecUtil = (query, options = {}) => {
  const url = `/api/persontax/employee-informations${query}`
  return fetch.get(url, options)
}

// 自然人信息申报 list  确认申报
export const natureSureDeclareActionUtil = (query, options = {}) => {
  let url = ''
  if (query.from == 'nature') {
    // 自然人申报
    url = `/api/persontax/do-declare`
  } else if (query.from == 'spec') {
    // 专项附加扣除
    url = `/api/persontax/addition-redeclare`
  } else if (query.from == 'prewith') {
    // 预扣预缴
    url = `/api/`
  }
  return fetch.post(url, query, options)
}

// 自然人信息申报 list  全部人数
export const getNatuPernfoDecNumUtil = (query, options = {}) => {
  const url = `/api/persontax/personal-number${query}`
  return fetch.get(url, options)
}

// 自然人信息申报 申报异常
export const getCyclesFailedListUtil = (query, options = {}) => {
  let url = ''
  if (query == 'nature') {
    // 自然人申报
    url = `/api/persontax/personal-cycles-failed`
  } else if (query == 'spec') {
    // 专项附加扣除
    url = `/api/persontax/addition-feedback-list?status=3`
  } else if (query == 'prewith') {
    // 预扣预缴
    url = `/api/`
  }
  return fetch.get(url, options)
}

// 自然人信息申报 详情
export const getNatuPernfoDecDetailedUtil = (params, options = {}) => {
  const url = `/api/persontax/employee-informations/${params.id}?category=${params.category}`
  return fetch.get(url, options)
}

// 自然人信息申报 详情  编辑
export const postPersonalInfoUtil = (query, options = {}) => {
  // let url = `/api/persontax/personal-informations/${query.person_information_id}`
  let url = ''
  if (query.opt == 'employee') {
    url = `/api/persontax/employee-informations/${query.id}`
  }
  return fetch.put(url, query, options)
}


// 专项附加扣除申报 list
export const getSpecAddDeduDecUtil = (query, options = {}) => {
  const url = `/api/persontax/person-additions${query}`
  return fetch.get(url, options)
}

// 专项附加扣除申报 list  全部人数
export const getSpecAddDeduDecNumUtil = (query, options = {}) => {
  const url = `/api/persontax/declare-status-statistics`
  return fetch.get(url, options)
}

// 专项附加扣除申报 详情
export const getSpecAddDeduDecListDetailedUtil = (params, options = {}) => {
  // const url = `/api/persontax/special-deduct-details/${params.user_id}/${params.legal_entity_id}`
  const url = `/api/persontax/special-deduct-details/${params.idcardno}/${params.legal_entity_id}`
  return fetch.get(url, options)
}

// 专项附加扣除申报 月度明细
export const getSpecAddMonthUtil = (query, options = {}) => {
  const url = `/api/persontax/month-deduction-list${query}`
  return fetch.get(url, options)
}

// 专项附加扣除申报 月度明细详情
export const getSpecAddMonthDetailedUtil = (params, options = {}) => {
  const url = `/api/persontax/deduction-detail/${params.user_id}/${params.legal_entity_id}`
  return fetch.get(url, options)
}

// 预扣预缴申报list
export const getPreWithholdingDeclarenUtil = (query, options = {}) => {
  const url = `/api/payroll/tax/cycles${query}`
  return fetch.get(url, options)
}

// 预扣预缴申报list  全部人数
export const getPreWithholdingDeclarenNumUtil = (query, options = {}) => {
  const url = `/api/payroll/tax/statistics`
  return fetch.get(url, options)
}


// 预扣预缴申报  确认申报
export const postDoDeclareUtil = (query, options = {}) => {
  const url = `/api/payroll/do-declare`
  return fetch.post(url, query, options)
}

// 预扣预缴申报list  个人申报明细
export const getPreDeclareDetailedListUtil = (query, id, options = {}) => {
  const url = `/api/payroll/tax/cycles/${id}/person-records${query}`
  return fetch.get(url, options)
}

// 预扣预缴申报list  个人申报明细  详情
export const getTaxPersonRecordsDetailedUtil = (id, options = {}) => {
  const url = `/api/payroll/tax/person-records/${id}`
  return fetch.get(url, options)
}






// 查询个人预扣预缴明细 list
export const getTaxPersonTaxesUtil = (query, options = {}) => {
  const url = `/api/payroll/person/tax-records${query}`
  return fetch.get(url, options)
}

// 预扣预缴申报list  查询个人预扣预缴明细  详情
export const getTaxPersonTaxesDetailedUtil = (query, options = {}) => {
  const url = `/api/payroll/tax/person-records${query}`
  return fetch.get(url, options)
}


// 职位列表
export const loadProfessionUtil = (params, options = {}) => {
  const url = `/api/common/professions${params}`
  return fetch.get(url, options)
}

// 薪酬   专项附加扣除统计表
export const additionalDeductionListUtil = (query, options = {}) => {
  const url = `/api/persontax/payroll-additions-statistics${query}`
  return fetch.get(url, options)
}
// 专项附加扣采集——帮助录入——专项附加申报
export const addSpecialAdditionalDeclaration = (query, options = {}) => {
  const url = `/api/persontax/additional-settings`
  return fetch.post(url, query, options)
}
// 国籍列表
export const getNationListutil = (query, options = {}) => {
  const url = `/api/persontax/nation-list`
  return fetch.get(url, options)
}
// 添加子女教育专项附加信息
export const postChildrenEducation = (query, options = {}) => {
  const url = `/api/persontax/children-educations`
  return fetch.post(url, query, options)
}
// 添加继续教育专项附加信息
export const postContinuingEducation = (query, options = {}) => {
  const url = `/api/persontax/continuing-educations`
  return fetch.post(url, query, options)
}
// 添加赡养老人专项附加信息
export const postSupportDuty = (query, options = {}) => {
  const url = `/api/persontax/support-duties`
  return fetch.post(url, query, options)
}
// 创建住房专项扣除
export const postHouseFund = (query, options = {}) => {
  const url = `/api/persontax/house-funds`
  return fetch.post(url, query, options)
}
// 创建住房专项扣除
export const getCertificate = (query, options = {}) => {
  const url = `/api/persontax/certification-list` + (query ? query : "")
  return fetch.get(url, options)
}
// 专项附加删除
export const postSpecialDelete = (query, options = {}) => {
  const url = `/api/persontax/op/delete`
  return fetch.post(url, query, options)
}
// 添加赡养老人专项附加信息
export const postCommonSupportDuty = (query, options = {}) => {
  const url = `/api/persontax/co-supporters`
  return fetch.post(url, query, options)
}

//自然人详情
export const getPersontaxDetail = (query, options = {}) => {
  const url = `/api/persontax/personal-informations/${query}`
  return fetch.get(url, options)
}
//自然人详情
export const putPersontaxDetail = (query, options = {}) => {
  const url = `/api/persontax/personal-informations/${query.id}`
  return fetch.put(url, query, options)
}
//导出
export const Download = (params, options = {}) => {
  const url = `/api/payroll/tax/do-export/person-records` + `${params ? params : ""}`
  return fetch.get(url, options)
}
//专项附加申报信息列表导出
export const personAdditionsDownload = (params, options = {}) => {
  const url = `/api/persontax/person-additions/do-export` + `${params ? params : ""}`
  return fetch.get(url, options)
}
//专专项附加申报统计导出
export const payrollAdditionsStatisticsDownload = (params, options = {}) => {
  const url = `/api/persontax/payroll-additions-statistics/do-export` + `${params ? params : ""}`
  return fetch.get(url, options)
}

//专项附加扣除累计数据
export const exportGrandListActionApi = (params, options = {}) => {
  const url = `/api/persontax/cumulative-export` + `${params ? params : ""}`
  return fetch.get(url, options)
}
//税款缴纳打印凭证
export const PrintProof = (params, options = {}) => {
  const url = `/api/payroll/payment/print` + `${params ? params : ""}`
  return fetch.get(url, options)
}
//下载转向附加扣除人员（合并国家App内的人员）
export const downloadAdditions = (params, options = {}) => {
  const url = `/api/persontax/download-additions`
  return fetch.post(url, params, options)
}
//作废
export const doCancel = (params, options = {}) => {
  const url = `/api/payroll/do-cancel`
  return fetch.post(url, params, options)
}
//立即申报
export const ImmediatelyVoid = (params, options = {}) => {
  const url = `/api/persontax/manual-declare/` + `${params.legal_entity_id}`
  return fetch.post(url, params, options)
}
//手动申报数量
export const getDeclareNumber = (params, type, options = {}) => {
  let url = '';
  if (type == "nature") {
    url = `/api/persontax/employee-informations-declare` + `${params ? params : ""}`
  } else {
    url = `/api/persontax/manual-declare-count` + `${params ? params : ""}`
  }
  return fetch.get(url, options)
}
//自然人信息采集 导出
export const naturalExport = (params, type, options = {}) => {
  let url = '';
  if (type == "do-export") {
    url = `/api/persontax/do-export` + `${params ? params : ""}`
  } else {
    url = `/api/persontax/do-export-employee` + `${params ? params : ""}`
  }
  return fetch.get(url, options)
}
//自然人   错误处理
export const postFeedback = (params, options = {}) => {
  let url = `/api/persontax/feedback`
  return fetch.post(url, params, options)
}
//预扣预缴申报  导出
export const PreWithholdingDownload = (params, options = {}) => {
  let url = `/api/payroll/tax/cycles/${params.id}/export`
  return fetch.get(url, options)
}
//自然人   取消申报
export const cancel_the_declaration = (params, options = {}) => {
  let url = `/api/persontax/cancel-declare`
  return fetch.post(url, params, options)
}
//专项附加扣除明细表  导出
export const specialAdditional = (params, options = {}) => {
  let url = `/api/persontax/month-detail-export` + `${params ? params : ''}`
  return fetch.get(url, options)
}
//获取报送次数
export const personalNumber = (params, options = {}) => {
  let url = `/api/persontax/personal-cycles/${params}`
  return fetch.get(url, options)
}
//确认三方协议 
export const agreement = (params, options = {}) => {
  let url = `/api/payroll/payment/confirm`
  return fetch.post(url, params, options)
}

//薪酬--专项附加扣除统计表--专项附加扣除累计数据
export const getGrandDataListActionApi = (params, options = {}) => {
  let url = `/api/persontax/additions-cumulatives${params}`
  return fetch.get(url, params, options)
}

//薪酬--专项附加扣除统计表--专项附加扣除累计数据--更新
export const updateGrandListActionApi = (params, options = {}) => {
  let url = `/api/persontax/additions-cumulatives`
  return fetch.post(url, params, options)
}
//财务=>财务管理=>预扣预缴申报=>重新核验
export const aCheckUtil = (id, options = {}) => {
  let url = `/api/payroll/tax/validate-tax/${id}`
  return fetch.post(url, options)
}