import * as fetch from './fetch';

const RECHARGE_PATH = '/api/billing';

//账户余额
export const getAccountbalance = (options={}) =>{
	const url=RECHARGE_PATH +'/my-account';
	return fetch.get(url,options);
}
//昨日消费
export const getYesterdayPay = (options={}) =>{
	const url=RECHARGE_PATH +'/consume-records/stats/lastday';
	return fetch.get(url,options);
}
//月结账单明细
export const getMonthBillList = (params,options={}) =>{
	const url=RECHARGE_PATH +'/consume-records/month-bill' +params;
	return fetch.get(url,options);
}
//月结账单总额
export const getMonthAccountTotal = (params,options={}) =>{
	const url=RECHARGE_PATH +'/consume-records/month-bill/stats'+params;
	return fetch.get(url,options);
}
//消费记录
export const getConsumerReocrdList = (params,options={}) =>{
	const url=RECHARGE_PATH +'/consume-records' +params;
	return fetch.get(url,options);
}
//开票记录
export const getInvoicesList = (params,options={}) =>{
	const url=RECHARGE_PATH +'/invoices' +params;
	return fetch.get(url,options);
}
//索取发票
export const askForinvoices = (params, options = {}) => {
	const url = RECHARGE_PATH + '/invoices';
	return fetch.post(url, params, options);
}
//发票模板
export const getInvoiceTem = (options={}) =>{
	const url=RECHARGE_PATH +'/invoice-templates';
	return fetch.get(url,options);
}
//模板详情
export const getInvoiceTemDetail = (id,options={}) =>{
	const url=RECHARGE_PATH +'/invoice-templates/'+id;
	return fetch.get(url,options);
}
//模板详情
export const getInvoiceMoney = (options={}) =>{
	const url=RECHARGE_PATH +'/invoice-balance';
	return fetch.get(url,options);
}



//企业充值后台
//客户账号管理
export const getAccountManageList = (params,options={}) =>{
	const url=RECHARGE_PATH +'/accounts' +params;
	return fetch.get(url,options);
}
//客户账户管理-充值
export const accountRecharge = (params,options={}) =>{
	const url=RECHARGE_PATH +'/accounts/' +params.id + '/op/recharge';
	return fetch.post(url,params,options);
}
//客户账户管理-查看发票记录
export const getInoviceRecord = (id,params,options={}) =>{
	let url = '';
	if(params){
		url=RECHARGE_PATH +'/invoices/' +id + '/' + params;
	}else{
		url=RECHARGE_PATH +'/invoices/' +id;
	}
	
	return fetch.get(url,params,options);
}