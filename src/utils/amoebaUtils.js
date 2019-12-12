import * as fetch from './fetch';
import qs from 'querystring';

const prefix = '/api';

// 客户列表
export const selectCustomerListApi = (params) => {
  return fetch.get(`${prefix}/crm/customers?${params}`)
}

/**
 * 
 * 查看详情
 */

export const customerDetailApi = (key_no) => {
  return fetch.get(prefix + `/crm/companys/${key_no}`)
}

/**
 * 查看详情 的 基本信息
 */

export const baseInfoApi = (id, own_id) => {
  return fetch.get(prefix + `/crm/view-customers/${id}?customer_owner_id=${own_id}`)
}

/**
 * 编辑基本信息
 */
export const editBaseInfoApi = (customer_id, params) => {
  return fetch.put(prefix + `/crm/view-customers/${customer_id}`, params)
}


/**
 * 编辑基本信息 (这个接口只可编辑：公司简介、公司相册)
 */

export const editCompanyImagesInfoApi = (params) => {
  return fetch.put(prefix + `/crm/customers/${params.customer_id}/profiles`, params)
}

// 放弃
// export const customerOperateApi = (id, data) => {
//   // '/crm/customer/' + id
//   return fetch.post(prefix + `/crm/customer/${id}/operate`, data)
// }

// 申领
export const applyOperateApi = (id, data) => {
  return fetch.post(prefix + `/crm/customer-owners/${id}/apply`, data)
}
// 终止
export const terminateOperateApi = (id, data) => {
  return fetch.post(prefix + `/crm/customer-owners/${id}/terminate`, data)
}
// 放弃
export const abandonOperateApi = (id, data) => {
  console.log('djjjj', id)
  return fetch.post(prefix + `/crm/customer-owners/${id}/abandon`, data)
}
// 白名单
export const whitelistOperateApi = (id, data) => {
  return fetch.post(prefix + `/crm/customer-owners/${id}/whitelist`, data)
}
// 黑名单
export const blacklistOperateApi = (id, data) => {
  return fetch.post(prefix + `/crm/customer-owners/${id}/blacklist`, data)
}


// 新增客户
export const addNewCustomerApi = (data) => {
  return fetch.post(prefix + '/crm/customers', data)
}

// 归属公司
export const selectCompanyApi = () => {
  return fetch.get(prefix + '/uaa/myorgs')
}
// 归属公司
export const selectShareCompanyApi = () => {
  return fetch.get(prefix + '/uaa/myorgs?share=yes')
}

// 钉钉发起部门
export const departmentsApi = () => {
  return fetch.get(prefix + '/approval/user/departments')
}
/**
 * 查看详情 --- 联系人
 */

export const getContactsListApi = (id) => {
  // get           /crm/customers/${id}/contacts
  return fetch.get(prefix + `/crm/customers/${id}/contacts`)
}

/**
 * 编辑联系人
 */
export const editContactsApi = (customer_id, contact_id, params) => {
  //     put           /crm/customers/${id}/contacts/${customer_id}
  return fetch.put(prefix + `/crm/customers/${customer_id}/contacts/${contact_id}`, params)
}

/**
 * 新增联系人
 */
export const addContactsApi = (id, params) => {
  //           post           /crm/customers/${id}/contacts
  return fetch.post(prefix + `/crm/customers/${id}/contacts`, params)
}

/**
 * 企查查
 */
export const searchCompanyApi = (params) => {
  return fetch.get(prefix + '/crm/companys?' + qs.stringify(params))
}

/**
 * 添加拜访记录
 */
export const addVisitHistoryApi = (data) => {
  // crm/v1/customer-comment
  return fetch.post(prefix + `/crm/customer-comment`, data)
}

/**
 * 请求共享客户
 */
export const shareCustomerApi = (data) => {
  return fetch.post(prefix + `/crm/customer-share`, data)
}

/**
 * 重新申请
 */

export const reApplicationApi = (id, params) => {
  return fetch.post(prefix + `/crm/customer-owners/${id}/reapply`, params)
}

/**
 * 查看详情中的负责人
 */

export const chargePersonApi = ({id,org_id}) => {
  // owners?ownerId=xxxxxx
  return fetch.get(prefix + `/crm/customers/${id}/owners?org_id=${org_id}`)
}


/**
 * 查看详情中的负责人 - 编辑负责人
 */

export const editChargePersonApi = (params) => {
  return fetch.post(prefix + `/crm/customers/${params.id}/owners`, params)
}

/**
 * 获取拜访记录
 */

export const getCustomerCommentApi = (customer_id) => {
  return fetch.get(prefix + `/crm/customer-comment/${customer_id}`)
}

/**
 * 黑白名单，放弃记录
 */
export const getBlackWhiteListApi = ({ customer_id, category }) => {
  //                         /crm/v1/customer-logs/:customer_id/operate
  return fetch.get(prefix + `/crm/customer-logs/${customer_id}/operate?category=${category}`)
}

/**
 * 查看详情中的公司信息
 */

export const compangDetailApi = (customer_id) => {
  return fetch.get(prefix + `/crm/customers/${customer_id}/profiles`)
}

/**
 * 更新详情中的公司信息
 */
// /crm/v1/customers/:customer_id/regain-profiles
export const upDateCompanyInfoApi = (customer_id,params) => {
  return fetch.put(prefix + `/crm/customers/${customer_id}/regain-profiles`,params);
}

/**
 * 导出
 */

export const doExportFileApi = (params) => {
  console.log('params****',params)
  return fetch.get(prefix + `/crm/do-export?${params}`);
}

/**
 * 编辑基本信息中的企业类型的权限
 */

 export const servicecontractApi = (params)=>{
  return fetch.get(prefix +`/servicecontract/contracts?`+qs.stringify(params))
 }
