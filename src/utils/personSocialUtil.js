import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';

const SOCIAL_PATH = `/api/sipolicy/personal-policy`;
const ORDER_PATH = `/api/psiorder/`;




export const getPersonReminderUtil = (params, options = {}) => {//自由社保  - 获取续保提醒日期设置详情
  const url = ORDER_PATH + 'order-setting/' + params.id;//id是tenant_id
  return fetch.get(url, options);
}

export const setPersonReminderUtil = (params, options = {}) => {//自由社保  - 续保提醒日期设置
  const url = ORDER_PATH + 'order-setting/' + params.id;
  return fetch.putJson(url, params, options);
}

export const addPersonSiCommentUtil = (params, options = {}) => {//自由社保  - 用户管理，添加备注
  const url = ORDER_PATH + 'order-statistics-remark';
  return fetch.post(url, params, options);
}

export const getStatisticCommentListUtil = (params, options = {}) => {//自由社保  - 用户管理，获取备注列表
  const url = ORDER_PATH + 'order-statistics-remark/' + params.user_id;
  return fetch.get(url, options);
}

export const personSocialStatisticListUtil = (params, options = {}) => {//自由社保  - 用户管理(统计潜在客户)
  const url = ORDER_PATH + 'order-statistics' + (params ? '?' + params : '');
  return fetch.get(url, options);
}

export const getPsiPaybackRangeMonthUtil = (params, options = {}) => {//自由社保  - 补缴范围值
  const url = 'api/sipolicy/personal-policy-payback-month';
  return fetch.post(url, params, options);
}

export const updatePersonSiOrderUtil = (params, options = {}) => {//自由社保  - 更新订单
  const url = ORDER_PATH + 'order/' + params.id;
  return fetch.putJson(url, params, options);
}

export const addPersonSiOrderUtil = (params, options = {}) => {//自由社保  - 新增订单
  const url = ORDER_PATH + 'order';
  return fetch.post(url, params, options);
}

export const policyServiceFeeUtil = (params, options = {}) => {//获取自由社保 - 订单 - 社保、公积金服务费
  const url = SOCIAL_PATH + `/${params.id}/op/service-fee`;
  return fetch.post(url, params, options);
}

export const personalOrderDeadlineUtil = (params, options = {}) => {//获取自由社保 - 订单 - 截止日
  const url = ORDER_PATH + 'order-deadline';
  return fetch.post(url, params, options);
}

export const personalOrderCalcUtil = (params, options = {}) => {//获自由社保 - 社保计算器：计算缴纳费
  const url = ORDER_PATH + 'order-calc';
  return fetch.post(url, params, options);
}

export const personalPolicyHhrUtil = (params, options = {}) => {//获自由社保政策 户籍性质列表
  const url = 'api/sipolicy/personal-policy-hhr' + (params ? '?' + params : '');
  return fetch.get(url, options);
}

export const personalPolicyAreaUtil = (params, options = {}) => {//获自由社保政策 服务地区列表
  const url = 'api/sipolicy/personal-policy-area' + (params ? '?' + params : '');
  return fetch.get(url, options);
}

export const handleRemainderUtil = (params, options = {}) => {//自由社保待支付订单 - 提醒催单
  const url = ORDER_PATH + 'order-urge';
  return fetch.post(url, params, options);
}

//获个人社保政策列表
export const getPersonSocial = (params, options = {}) => {
  let url = SOCIAL_PATH + (params ? '?' + params : '');
  return fetch.get(url, options);
}

//新增个人社保政策
export const addPersonSocial = (params, options = {}) => {
  const url = SOCIAL_PATH;
  return fetch.post(url, params, options);
}

//编辑个人社保政策
export const editPersonSocial = (params, options = {}) => {
  const url = SOCIAL_PATH + '/' + `${params.id}`;
  return fetch.putJson(url, params, options);
}

//获取个人社保政策详情
export const getPersonSocialDel = (params, options = {}) => {
  const url = SOCIAL_PATH + '/' + `${params.id}`;
  return fetch.get(url, options);
}

//更新个人社保政策状态
export const updateSocialstatus = (params, options = {}) => {
  const url = `/api/sipolicy/personal-policy-state/${params.id}`;
  return fetch.putJson(url, params, options);
}

//订单列表
export const getOrderList = (params, options = {}) => {
  const url = ORDER_PATH + 'order' + (params ? '?' + params : '');
  return fetch.get(url, options);
}

//添加订单备注
export const addOrderComment = (params, options = {}) => {
  const url = ORDER_PATH + 'order-comment';
  return fetch.post(url, params, options);
}

//订单提前终止并退款
export const canceledOrder = (params, options = {}) => {
  const url = ORDER_PATH + 'order-canceled';
  return fetch.post(url, params, options)
}

//删除订单
export const deleteOrder = (params, options = {}) => {
  const url = ORDER_PATH + `order/${params.id}`;
  return fetch.del(url, params, options)
}

//订单详情
export const getOrderDetail = (params, options = {}) => {
  const url = ORDER_PATH + `order/${params.id}`;
  return fetch.get(url, options);
}

//个人社保政策详情
export const getPersonDetail = (params, options = {}) => {
  const url = `/api/sipolicy/personal-policy/${params.id}`;
  return fetch.get(url, options);
}
//个人社保政策详情
export const educe = (params, options = {}) => {
  const url = `/api/psiorder/order-do-export` + params
  return fetch.get(url, options);
}
