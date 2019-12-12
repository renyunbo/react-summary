import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';



//待确认

export const getConfirmingList = (year,month,offset=0,limit=10,keysearch='',options={}) =>{
	let url = '';
	if(keysearch==''){
		 url = `/api/settlemgm/settle-records?limit=${limit}&offset=${offset}&type=recruit&category=provider&settle_year=${year}&settle_month=${month}&status=confirming`;

	}else{
		url = `/api/settlemgm/settle-records?limit=${limit}&offset=${offset}&type=recruit&category=provider&settle_year=${year}&settle_month=${month}&status=confirming&keysearch=${keysearch}`;

	}
	return fetch.get(url,options);
}

//待付款
export const getPayingList = (year,month,offset=0,limit=10,keysearch='',options={}) =>{
	let url = '';
	if(keysearch==''){
		 url = `/api/settlemgm/settle-records?limit=${limit}&offset=${offset}&type=recruit&category=provider&settle_year=${year}&settle_month=${month}&status=paying`;

	}else{
		url = `/api/settlemgm/settle-records?limit=${limit}&offset=${offset}&type=recruit&category=provider&settle_year=${year}&settle_month=${month}&status=paying&keysearch=${keysearch}`;

	}
	return fetch.get(url,options);
}


//已完成
export const getCompletedList = (year,month,offset=0,limit=10,keysearch='',options={}) =>{
	let url = '';
	if(keysearch==''){
		 url = `/api/settlemgm/settle-records?limit=${limit}&offset=${offset}&type=recruit&category=provider&settle_year=${year}&settle_month=${month}&status=completed`;

	}else{
		url = `/api/settlemgm/settle-records?limit=${limit}&offset=${offset}&type=recruit&category=provider&settle_year=${year}&settle_month=${month}&status=completed&keysearch=${keysearch}`;

	}
	return fetch.get(url,options);
}


//生成结算单
export const confirm_Settlement = (id,data={},options={}) =>{
	const url=`/api/settlemgm/settle-records/${id}/op/confirm`
	return fetch.post(url,data,options);
}

//加载详情
export const loadDetail = (id,offset=0,limit=10,keysearch='',options={}) =>{
	let url = '';
	if(keysearch == ''){
		 url=`/api/settlemgm/settle-records/${id}/items?limit=${limit}&offset=${offset}`
	}else{
		 url=`/api/settlemgm/settle-records/${id}/items?limit=${limit}&offset=${offset}&keysearch=${keysearch}`
	}
	return fetch.get(url,options);
}

//驳回
export const reject_Settlement = (id,options={}) =>{
	const url=`/api/settlemgm/settle-records/${id}/op/reject`
	return fetch.post(url,options);
}

//付款
export const pay_Settlement = (id,options={}) =>{
	const url=`/api/settlemgm/settle-records/${id}/op/pay`
	return fetch.post(url,options);
}


export const export_Settlement = (id,options={}) =>{
	const url=`/api/settlemgm/settle-records/${id}/op/doexport`
	return fetch.post(url,options);
}
