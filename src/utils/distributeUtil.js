import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';
import { getFixedTwo } from './commonUtils'

//发放管理生成批次列表
export const getIssueBatchListUtil = (params, options = {}) => {
    const url = `/api/socialwork/issue-batches${params}`;
    return fetch.get(url, options);
}
//发放管理待发放批次列表
export const getWaitIssueBatchListUtil = (params, options = {}) => {
    const url = `/api/socialwork/freedom-emp-details${params}`
    return fetch.get(url, options)
}
//发放管理批次详情
export const getIssueBatchDetailUtil = (id, options = {}) => {
    const url = `/api/socialwork/issue-batches/${id}`
    return fetch.get(url, options)
}
//新建批次
export const addIssueBatchUtil = (params, options = {}) => {
    const url = `/api/socialwork/issue-batches`
    return fetch.post(url, params, options)
}
//取消发放批次
export const delIssueBatchUtil = (id, params, options = {}) => {
    const url = `/api/socialwork/issue-batches/${id}`
    return fetch.putJson(url, params, options)
}
//落地方列表
export const getSettlementPlaceListUtil = (params, options = {}) => {
    const url = `/api/socialwork/settlement-orgs${params}`
    return fetch.get(url, options)
}
//落地方详情
export const getSettlementPlaceDetailUtil = (id, options = {}) => {
    const url = `/api/socialwork/settlement-orgs/${id}`
    return fetch.get(url, options)
}
//获取短信提醒
export const getNoticeMobileUtil = (options = {}) => {
    const url = `/api/socialwork/notice-mobile`
    return fetch.get(url, options)
}
//短信提醒修改
export const updateNoticeMobileUtil = (id, params, options) => {
    const url = `/api/socialwork/notice-mobile/${id}`
    return fetch.putJson(url, params, options)
}

export const calculateServiceFee = (arr, fee_levels) => {
    let fee_level = JSON.parse(fee_levels)
    let fee = 0, percent = 0, bol = true;
    arr.map(item => {
        if (fee_level && fee_level.length > 0) {
            fee_level.map(cl => {
                if (cl.lower_limit < item.total_salary) {
                    // fee += item.total_salary * cl.percentage/100
                    bol = false
                    percent = cl.percentage
                }
            })
            if (bol) {
                percent = fee_level[0].percentage
            }
            fee += item.total_salary * percent / 100
        }
    })
    return getFixedTwo(fee)
}

//财务待发放确认发放
export const confirmBatchSendUtil = (id, params, options) => {
    const url = `/api/socialwork/issue-batches/${id}/confirm`
    return fetch.post(url, params, options)
}
//打印请款凭证
export const printIssueBatchUtil = (id, params, options) => {
    const url = `/api/socialwork/issue-batches/${id}/print`
    return fetch.post(url, params, options)
}
//落地方动账记录
export const payMoneyRecordUtil = (params, options) => {
    const url = `/api/socialwork/settlement-org-details${params}`
    return fetch.get(url, options)
}
//落地方余额提现
export const getMoneyUtil = (id, params, options = {}) => {
    const url = `/api/socialwork/settlement-org/${id}/op/withdraw`
    return fetch.post(url, params, options)
}
//获取总行列表 
export const getBankNameListUtil = (params, options = {}) => {
    const url = `/api/walletmgm/bankinfos${params}`
    return fetch.get(url, options)
}
//修改银行卡号并发放
export const updateAndsPayUtil = (id, params, options = {}) => {
    const url = `/api/socialwork/batch-records/${id}/op/issue`
    return fetch.post(url, params, options)
}
//导出发放明细
export const exportPayDetailUtil = (id, options = {}) => {
    const url = `/api/socialwork/issue-batches/${id}/export`
    return fetch.get(url, options)
}
//获取支行列表
export const getBranchBankNameListUtil = (params, options = {}) => {
    const url = `/api/walletmgm/bankinfos/branch`
    return fetch.post(url, params, options)
}
//获取客户下的法务实体
export const getLegalEntityListUtil = (params, options = {}) => {
    const url = `/api/crm/legal-entities${params}`
    return fetch.get(url, options)
}
//生成发放批次计算合计所得
export const countTotalSalary = (arr) => {
    let num = 0;
    arr && arr.length > 0 && arr.map(cl => {
        num += parseFloat(cl.total_salary)
    })
    return num.toFixed(2)
}