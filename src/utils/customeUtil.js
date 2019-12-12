import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';
import { geTchatContent } from './recruitUtil';

const SERVICE_CONTRACT_PATH = '/api/servicecontract/contracts';	//服务合同
const CUSTOMER_PATH = '/api/crm/customers'; //客户管理
const CUSTOMER_SIMPLE_PATH = '/api/crm/simple/customers'; //客户管理 精简版本
const ADMIN_PATH = '/api/uaa/customers';//客户账号
const FORMMETA_PATH = '/api/formmeta/fields';//客户账号


//导入记录列表
export const getRecordsUtil = (params, options = {}) => {
  const url = '/api/crm/import-jobs' + (params ? '?' + params : '');
  return fetch.get(url, options);
}

//导入失败记录列表
export const getFailRecordsUtil = (params, options = {}) => {
  const url = '/api/crm/import-jobs/' + params.id + '/records';
  return fetch.get(url, options);
}

/*
查询服务合同列表
*
?limit=10&offset=0&type=<xxx> //type为0时获取客户服务合同列表 1时获取供应商服务合同列表
*/
export const getServiceContracts = (params, options = {}) => {
  let url = SERVICE_CONTRACT_PATH + '?' + params;
  if (params.indexOf("?") != -1) {
    url = SERVICE_CONTRACT_PATH + params;
  }
  return fetch.get(url, options);
}



/*
*查看服务合同详情
*/
export const getServiceContractDetail = (id, options = {}) => {
  const url = SERVICE_CONTRACT_PATH + '/' + id;
  return fetch.get(url, options);
}



/*
*终止服务合同
terminated_at	time	终止时间	Yes
terminate_reason	string	终止原因	Yes
*/
export const terminateServiceContract = (data, options = {}) => {
  const url = SERVICE_CONTRACT_PATH + '/' + data.id + '/terminate';
  return fetch.post(url, data, options);
}

/*
*续签服务合同
end_time	time	结束时间	Yes
*/
export const renewServiceContract = (data, options = {}) => {
  const url = SERVICE_CONTRACT_PATH + '/' + data.id + '/op/renew';
  return fetch.post(url, data, options);
}


/*
*添加服务合同
*/
export const addServiceContract = (data, options = {}) => {
  const url = SERVICE_CONTRACT_PATH;
  return fetch.post(url, data, options);
}
/*
*编辑服务合同
*/
export const editServiceContract = (data, options = {}) => {
  const url = SERVICE_CONTRACT_PATH + '/' + data.id;
  return fetch.putJson(url, data, options);
}

/*
*变更服务合同
*/
export const updateServiceContract = (data, options = {}) => {
  const url = SERVICE_CONTRACT_PATH + '/' + data.id;
  return fetch.putJson(url, data, options);
}

/*
*分配/变更负责人
*contract_owners	array	负责人数组	Yes
*/
export const ownersServiceContract = (data, options = {}) => {
  const url = SERVICE_CONTRACT_PATH + '/' + data.id + '/owners';
  return fetch.post(url, data, options);
}

/*获取服务合同负责人列表*/
export const getServiceContractOwners = (id, options = {}) => {
  const url = SERVICE_CONTRACT_PATH + '/' + id + '/owners';
  return fetch.get(url, options);
}
/*获取服务合同内容列表 */
export const getServiceContractItems = (id, options = {}) => {
  const url = SERVICE_CONTRACT_PATH + '/' + id + '/service-contents';
  return fetch.get(url, options);
}




/*客户管理*/

//导入客户
export const importCustomers = (data, options = {}) => {
  const url = 'api/crm/do-import';
  return fetch.post(url, data, options);
}
//添加客户
export const addCustomers = (data, options = {}) => {
  const url = CUSTOMER_PATH;
  // const url = 'crm/customers'
  return fetch.post(url, data, options);
}
//查重客户名称
export const getCustomerName = (name, customer_id = '',) => {
  let url = ``
  if (customer_id) {
    url = `/api/crm/customer-name?name=${name}&update_customer_id=${customer_id}`
  } else {
    url = `/api/crm/customer-name?name=${name}`
  }
  return fetch.get(url);
}
//查看客户
export const getCustomer = (id, options = {}) => {
  const url = '/api/crm/view-customers/' + id;
  return fetch.get(url, options);
}
//列表客户精简版本
export const getCustomers = (params, options = {}) => {
  let url = CUSTOMER_SIMPLE_PATH + "?" + params;
  if (params.indexOf("?") != -1) {
    url = CUSTOMER_SIMPLE_PATH + params;
  }
  return fetch.get(url, options);
}
//列表客户
export const getListCustomers = (params, options = {}) => {
  let url = CUSTOMER_PATH + "?" + params;
  if (params.indexOf("?") != -1) {
    url = CUSTOMER_PATH + params;
  }
  return fetch.get(url, options);
}
// 添加跟进记录
export const postCustomerRecord = (values, options = {}) => {
  const url = '/api/crm/customer-comment'
  return fetch.post(url, values, options)
}
//列表跟进记录
export const getCustomercomments = (params, options = {}) => {
  let url = '/api/crm/customer-comment' + "?" + params;
  if (params.indexOf("?") != -1) {
    url = '/api/crm/customer-comment' + params;
  }
  return fetch.get(url, options);
}
//编辑基本信息
export const editCustomerBasic = (params, options = {}) => {
  const url = 'api/crm/view-customers/' + params.id;
  return fetch.putJson(url, params, options);
}

//客户公司简介添加
export const addProfiles = (data, options = {}) => {
  const url = CUSTOMER_PATH + '/' + data.customer_id + '/profiles';
  return fetch.post(url, data, options);
}
//客户公司简介修改
export const editProfiles = (data, options = {}) => {
  const url = CUSTOMER_PATH + '/' + data.customer_id + '/profiles';
  return fetch.putJson(url, data, options);
}
//客户公司简介
export const profilesCustomerDetail = (id, options = {}) => {
  const url = CUSTOMER_PATH + '/' + id + '/profiles';
  return fetch.get(url, options);
}
//添加法务实体
export const addCustomerLegalEntitie = (data, options = {}) => {
  const url = CUSTOMER_PATH + '/' + data.customer_id + '/legal-entities';
  return fetch.post(url, data, options);
}
//更新法务实体
export const updateCustomerLegalEntitie = (data, options = {}) => {
  const url = CUSTOMER_PATH + '/' + data.customer_id + '/legal-entities/' + data.id;
  return fetch.putJson(url, data, options);
}
//删除法务实体
export const deleteCustomerLegalEntitie = (data, options = {}) => {
  const url = CUSTOMER_PATH + '/' + data.customer_id + '/legal-entities/' + data.id;
  return fetch.del(url, {}, options);
}
//列表法务实体
export const getCustomerLegalEntities = (params, options = {}) => {
  let url = `${CUSTOMER_PATH}/${params}/legal-entities?all=true`;
  if (params.org_id) {
    url = `${CUSTOMER_PATH}/${params.id}/legal-entities?all=true&org_id=${params.org_id}`;
  }
  return fetch.get(url, options);
}
//列表法务实体 （支持分页）
export const getCustomerLegalEntitiesPaged = (data, options = {}) => {
  const { id = '', para = '' } = data;
  const url = CUSTOMER_PATH + '/' + id + '/legal-entities' + para;
  return fetch.get(url, options);
}
//添加客户联系人
export const addContactsCustomer = (data, options = {}) => {
  const url = CUSTOMER_PATH + '/' + data.id + '/contacts';
  return fetch.post(url, data, options);
}
//删除客户联系人
export const deleteContactsCustomer = (data, options = {}) => {
  const url = CUSTOMER_PATH + '/' + data.customer_id + '/contacts/' + data.id;
  return fetch.del(url, {}, options);
}
//列表客户联系人
export const getContactsCustomers = (id, options = {}) => {
  const url = CUSTOMER_PATH + '/' + id + '/contacts';
  return fetch.get(url, options);
}
//更新客户联系人
export const updateContactsCustomer = (data, options = {}) => {
  const url = CUSTOMER_PATH + '/' + data.customer_id + '/contacts/' + data.id;
  return fetch.putJson(url, data, options);
}
//更新客户负责人
export const updateContactsOwner = (data, options = {}) => {
  const url = CUSTOMER_PATH + '/' + data.id + '/owners';
  return fetch.post(url, data, options);
}
//列表客户负责人
export const getContactsCustomerOwners = (id, options = {}) => {
  const url = CUSTOMER_PATH + '/' + id + '/owners';
  return fetch.get(url, options);
}
//获取根账号信息
export const getContactsAdmin = (id, options = {}) => {
  const url = ADMIN_PATH + '/' + id + '/root-admin';
  return fetch.get(url, options);
}
//客户账号信息开通账号
export const addContactsAdmin = (data, options = {}) => {
  const url = ADMIN_PATH + '/' + data.id + '/admins';
  return fetch.post(url, data, options);
}
//客户账号信息变更账号
export const changeCustom = (data, options = {}) => {
  const url = ADMIN_PATH + '/' + data.id + '/admins';
  return fetch.put(url, data, options);
}
//停用/启用账号
export const updateContactsAdmin = (data, options = {}) => {
  const url = ADMIN_PATH + '/' + data.customer_id + '/admins/' + data.id + '/action';
  return fetch.putJson(url, data, options);
}

//获取提醒 - 设置
export const getRemindSetting = (options = {}) => {
  const url = '/api/common/remindsettings?biz_type=servicecontract';
  return fetch.get(url, options);
}
//获取提醒 - 添加修改
export const updateRemindSetting = (data, options = {}) => {
  const url = '/api/common/remindsettings';
  return fetch.post(url, data, options);
}

//纸制服务合同
export const getAttachments = (params, options = {}) => {
  const url = `/api/servicecontract/contracts/${params.id}/attachments`;
  return fetch.get(url, options);
}

//纸制服务合同
export const downloadAttachments = (params, options = {}) => {
  const url = `/api/servicecontract/contracts/${params.id}/attachments/op/download`;
  return fetch.get(url, options);
}
//纸制服务合同
export const addAttachments = (data, options = {}) => {
  const url = `/api/servicecontract/contracts/${data.id}/attachments`;
  return fetch.post(url, data, options);
}
//导出客户列表
export const downloadCustoms = (params, options = {}) => {
  let url = `/api/crm/do-export?${params}`;
  return fetch.get(url, options);
}

// 获取表单元数据中的表单列表
export const getBasicFormList = (params, options = {}) => {
  const url = '/api/formmeta/forms?category=crm&name=customer'
  return fetch.get(url, options);
}

//获取动态表达定义
export const getFormDefind = (params, options = {}) => {
  const url = `/api/formmeta/fields?form=customer&category=crm${params ? params : ''}`
  return fetch.get(url, options)
}

// 客户自定义字段添加
export const addFormField = (params, options = {}) => {
  const url = FORMMETA_PATH
  return fetch.post(url, params, options)
}
// 客户自定义字段编辑
export const editFormField = (params, options = {}) => {
  const url = `${FORMMETA_PATH}/${params.id}`
  return fetch.put(url, params, options)
}
// 客户自定义字段删除
export const delFormField = (id, options = {}) => {
  const url = `${FORMMETA_PATH}/${id}`
  return fetch.del(url, options)
}
// 客户自定义字段详情
export const getFormFieldDetail = (id, options = {}) => {
  const url = `${FORMMETA_PATH}/${id}`
  return fetch.get(url, options)
}
// 客户自定义字段分类列表
export const getClassifyList = (params, options = {}) => {
  const url = `/api/formmeta/fields-category?form=${params.name}&category=${params.category}`
  return fetch.get(url, options)
}
// 删除客户列表
export const delCustomerlist = (params, options = {}) => {
  const url = `/api/crm/delete-customers/${params.id}`
  return fetch.del(url, options)
}
//获取字段分类列表
export const getFieldsCategoryUtil = (params, options = {}) => {
  const url = `/api/formmeta/fields-category${params}`
  return fetch.get(url, options)
}
//归属公司or归属阿米巴
export const getDepartmentNameUtil = (params, options = {}) => {
  const url = `/api/uaa/org-setting`
  return fetch.get(url, options)
}
//更新表单字段显示字段

export const updateFieldsOptionsUtil = (params, options = {}) => {
  const url = `api/formmeta/fields-options`
  return fetch.putJson(url, params, options)
}

// 客户列表  -->  查看  -->  负责人信息的编辑权限
export const chargePerEditAuthApi = (id) => {
  const url = `/api/crm/admin-info/${id}`;
  return fetch.get(url);
}
