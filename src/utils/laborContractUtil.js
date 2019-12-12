import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';


//获取合同模板列表
export const loadTmpList = (query, options = {}) => {
  const url = `/api/contract/templates${query}`;
  return fetch.get(url, options);
}

//新增合同模板
export const newContractTemplate = (params, options = {}) => {
  const url = `/api/contract/templates`;
  return fetch.post(url, params, options);
}

//更新劳动合同模板
export const renewalContractTempalte = (params, options = {}) => {
  const url = `/api/contract/templates/${params.id}`;
  return fetch.put(url, params, options);
}


//获取合同模板详情
export const loadTmpDetail = (id, query, options = {}) => {
  let url = `/api/contract/templates/${id}`;
  if (query)
    url = url + `?t=1&${query}`;
  return fetch.get(url, options);
}

//删除合同模板
export const rmContractTmp = (id, data = {}, options = {}) => {
  const url = `/api/contract/templates/${id}`;
  return fetch.del(url, data, options);
}

//获取合同模板自定义字段
export const loadTmpToolbars = (query, options = {}) => {
  const url = `/api/contract/user-define-fields?${query ? query : ''}`
  return fetch.get(url, options);
}




//获取法务实体列表
export const loadLegalEntityList = (query, options = {}) => {
  const url = `/api/contract/legal-entities${query}`;
  return fetch.get(url, options);
}

//新增法务实体
export const newLegalEntity = (params, options = {}) => {
  const url = `/api/contract/legal-entities`;
  return fetch.post(url, params, options);
}

//删除法务实体
export const rmLegalEntity = (id, data = {}, options = {}) => {
  const url = `/api/contract/legal-entities/${id}`;
  return fetch.del(url, data, options);
}


//获取入职待签署列表
export const loadWaitForSignList = (params, options = {}) => {
  const url = `/api/empmgm/employees${params}`;
  return fetch.get(url, options);
}

//获取劳动合同列表

export const loadContractList = (query, options = {}) => {
  const url = `/api/contract/contracts${query}`;
  return fetch.get(url, options);
}

//导入劳动合同
export const insertLaborContract = (params, options = {}) => {
  const url = `/api/contract/do-import`
  return fetch.post(url, params, options);
}

//取消签署
export const cancel_Sign = (id, options = {}) => {
  const url = `/api/contract/contracts/${id}/op/cancel-sign`
  return fetch.post(url, options);
}
//终止签署
export const stopSign = (data, id, options = {}) => {
  const url = `/api/contract/contracts/${id}/op/terminate`
  return fetch.post(url, data, options);
}

//新增纸质合同
export const createPaperContract = (params, options = {}) => {
  const url = `/api/contract/paper-contracts`
  return fetch.post(url, params, options);
}

//获取合同详情
export const loadContractDetail = (id, options = {}) => {
  const url = `/api/contract/contracts/${id}`;
  return fetch.get(url, options);
}

//更新劳动合同
export const renewalContract = (values, options = {}) => {
  const url = `/api/contract/contracts/${values.id}`;
  return fetch.put(url, values, options);
}

//获取签章列表
export const loadSignList = (query, options = {}) => {
  const url = `/api/contract/seals${query}`;
  return fetch.get(url, options);
}


//新增签章
export const newSign = (params, options = {}) => {
  const url = `/api/contract/legal-entities/${params.id}/seals`;
  return fetch.post(url, params, options);
}

//删除签章
export const rmSign = (uuid, data = {}, options = {}) => {
  const url = `/api/contract/seals/${uuid}`;
  return fetch.del(url, data, options);
}

//获取法务实体的签章
export const loadLglEntSeal = (id, options = {}) => {
  const url = `/api/contract/legal-entities/${id}/seals`;
  return fetch.get(url, options);
}


//发起签署
export const beginSign = (params, options = {}) => {
  let url = `/api/contract/contracts`;
  if (params && params.batch) {
    url = `/api/contract/batch/contracts`;
  }
  return fetch.post(url, params, options);
}

//设置合同到期提醒日期
export const newContractRemind = (params, options = {}) => {
  const url = `/api/contract/contract-reminds`;
  return fetch.post(url, params, options);
}

//获取劳动合同到期提醒日期
export const loadContractRemind = (id, options = {}) => {
  const url = `/api/contract/contract-reminds`;
  return fetch.get(url, options);
}

/*
*公司签署
*/
export const comSign = (data = {}, options = {}) => {
  const url = '/api/contract/contracts/' + data.contract_id + '/op/com-sign';
  return fetch.post(url, data, options);
}

//离职待终止合同列表
export const loadWaitTerminateList = (params, options = {}) => {
  const url = `/api/contract/contracts${params}`;
  return fetch.get(url, options);
}

// 批量结束离职待终止合同
export const batchStopContract = (ids, options = {}) => {
  const url = `/api/contract/batch-terminate`;
  return fetch.post(url, ids, options);
}

//获取首页统计数据
export const loadContractNum = (params, options = {}) => {
  const url = `/api/contract/contract-statistic`;
  return fetch.get(url, options);
}

//获取劳动合同上传二维码
export const loadQRcode = (id, options = {}) => {
  const url = `/api/contract/contracts/${id}/op/scan-upload`;
  return fetch.get(url, options);
}
//设置密码
export const setSignPwd = (data = {}, options = {}) => {
  const url = '/api/uaa/sign-pwd';
  return fetch.post(url, data, options);
}
//获取是否设置密码
export const getSignPwd = (id, options = {}) => {
  const url = `/api/uaa/sign-pwd`;
  return fetch.get(url, options);
}

//获取导入记录列表(劳动合同)
export const getLaborContractRecordsUitl = (params, options = {}) => {
  const url = '/api/contract/import-jobs' + (params ? '?' + params : '');
  return fetch.get(url, options);
}

//获取导入失败记录列表(劳动合同)
export const getFailLaborContractRecordsUitl = (params, options = {}) => {
  const url = '/api/contract/import-jobs/' + params.id + '/records'
  return fetch.get(url, options);
}

//获取公积金社保缴纳状态
export const getFundAndSocialSecurity = (id, params, options = {}) => {
  const url = `/api/empmgm/employees/${id}/si-hf-status`
  // const url =`/api/empmgm/employees/200747291584237568/si-hf-status`
  return fetch.get(url, options);
}
//获取公积金社保缴纳详情
export const getFundAndSocialSecurityDetail = (params, options = {}) => {
  let url = `/api/psiorder/ent-insured-persons?insurances=true`
  if (params && params.service_contract_id) {
    url = url + `&service_contract_id=${params.service_contract_id}`;
  }
  if (params && params.customer_id) {
    url = url + `&customer_id=${params.customer_id}`;
  }
  if (params && params.id_card_no) {
    url = url + `&id_num=${params.id_card_no}`;
  }
  return fetch.get(url, options);
}

//劳动合同管理（变更）
export const postLaborContractChange = (id, data, options = {}) => {
  const url = `/api/contract/contracts/${id}/op/change`
  // const url =`/api/contract/contracts/200747291584237568/op/change`
  return fetch.post(url, data, options);
}
//劳动合同管理（续签）
export const postLaborContractContinue = (data, options = {}) => {
  console.log(data)
  const url = `/api/contract/contracts/${data.id}/op/renew`
  return fetch.post(url, data, options);
}


// 删除劳动合同
export const deleteContract = (id, options = {}) => {
  const url = `/api/contract/papery-contracts/${id}`
  return fetch.del(url, options)
}

//验证重名字
export const checkTemplateName = (data, options = {}) => {
  const url = `/api/contract/template-duplicate-check`
  return fetch.post(url, data, options);
}

//上传模版生成图片
export const uploadConfractForPic = (data, options = {}) => {
  const url = `/api/contract/convert-template-file`
  return fetch.post(url, data, options);
}

// 预览合同
export const previewTemplateUtil = (data, options = {}) => {
  const url = `/api/contract/preview-template`
  return fetch.post(url, data, options)
}

// 社会化用工 公司签章
export const SocialWorkComSign = (data = {}, options = {}) => {
  const url = `/api/contract/common/contracts/${data.contract_id}/op/partya-sign`
  return fetch.post(url, data, options)
}
// 劳动合同管理  导出
export const exportLaborContract = (data, options = {}) => {
  const url = '/api/contract/do-export' + `${ data ? data : '' }`
  return fetch.get(url, options)
}

// 落地落地方 电子合同 重新签署
export const postSocialWorkReSignUtil = (data = {}, options = {}) => {
  const url = `/api/contract/common/contracts/${data.contract_id}/op/modify`
  return fetch.post(url, data, options)
}