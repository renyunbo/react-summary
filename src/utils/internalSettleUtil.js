import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';
import moment from 'moment';

//获取内部结算报表
export const getInternalSettleList = (params, options) => {
    const url = `/api/settlemgm/inner-settlement/form${params}`
    return fetch.get(url, options)
}

//获取合并后的其他费用
export const getCombineOtherCost = (params, options) => {
    const url = `/api/settlemgm/inner-settlement/form/other-fee${params}`
    return fetch.get(url, options)
}

//导出
export const exportSettleReport = (params, options) => {
    const url = `/api/settlemgm/inner-settlement/export${params}`
    return fetch.get(url, options)
}

//根据时间戳判断是那个月/那个季度/那年
export const getYearMonthQuarter = (type, unixNum) => {
    if (type == 'month') {
        return moment(unixNum * 1000).format('YYYY-MM')
    } else if (type == 'quarter') {
        console.log(moment(unixNum * 1000).format('YYYY-MM'))
        const nowMonth = moment(unixNum * 1000).month() + 1;
        if (nowMonth >= 1 && nowMonth <= 3) {
            return moment(unixNum * 1000).format('YYYY') + '年第一季度（1-3）'
        } else if (nowMonth >= 4 && nowMonth <= 6) {
            return moment(unixNum * 1000).format('YYYY') + '年第二季度（4-6）'
        } else if (nowMonth >= 7 && nowMonth <= 9) {
            return moment(unixNum * 1000).format('YYYY') + '年第三季度（7-9）'
        } else if (nowMonth >= 10 && nowMonth <= 12) {
            return moment(unixNum * 1000).format('YYYY') + '年第四季度（10-12）'
        }
    } else if (type == 'year') {
        return moment(unixNum * 1000).format('YYYY')
    }
}
