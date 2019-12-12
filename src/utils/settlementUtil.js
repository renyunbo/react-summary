import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';

//获取客户社保列表
export const getCustomerInsList=(offset=0,limit=10,cycle,search='',options={})=>{
	let url = '';
	if(search ==''){
		 url=`/api/socialinsurance/views/?offset=${offset}&limit=${limit}&cycle_name=${cycle}`
	}else {
		 url=`/api/socialinsurance/views/?offset=${offset}&limit=${limit}&cycle_name=${cycle}&customer=${search}`
	}
	return fetch.get(url,options);
}


//获取待生成
export const getGenerateList = (year,month,offset=0,limit=10,keysearch='',options={}) =>{
	let url = '';
	if(keysearch==''){
		 url = `/api/settlemgm/settle-records?limit=${limit}&offset=${offset}&type=recruit&category=customer&settle_year=${year}&settle_month=${month}&status=generate`;

	}else{
		url = `/api/settlemgm/settle-records?limit=${limit}&offset=${offset}&type=recruit&category=customer&settle_year=${year}&settle_month=${month}&status=generate&keysearch=${keysearch}`;

	}
	// let url = 'api/settlemgm/settle-records/?status=generate';
	return fetch.get(url,options);
}

//待确认

export const getConfirmingList = (year,month,offset=0,limit=10,keysearch='',options={}) =>{
	let url = '';
	if(keysearch==''){
		 url = `/api/settlemgm/settle-records?limit=${limit}&offset=${offset}&type=recruit&category=customer&settle_year=${year}&settle_month=${month}&status=confirming`;

	}else{
		url = `/api/settlemgm/settle-records?limit=${limit}&offset=${offset}&type=recruit&category=customer&settle_year=${year}&settle_month=${month}&status=confirming&keysearch=${keysearch}`;

	}
	return fetch.get(url,options);
}

//待付款
export const getPayingList = (year,month,offset=0,limit=10,keysearch='',options={}) =>{
	let url = '';
	if(keysearch==''){
		 url = `/api/settlemgm/settle-records?limit=${limit}&offset=${offset}&type=recruit&category=customer&settle_year=${year}&settle_month=${month}&status=paying`;

	}else{
		url = `/api/settlemgm/settle-records?limit=${limit}&offset=${offset}&type=recruit&category=customer&settle_year=${year}&settle_month=${month}&status=paying&keysearch=${keysearch}`;

	}
	return fetch.get(url,options);
}


//待核销
export const getVerifyingList = (year,month,offset=0,limit=10,keysearch='',options={}) =>{
	let url = '';
	if(keysearch==''){
		 url = `/api/settlemgm/settle-records?limit=${limit}&offset=${offset}&type=recruit&category=customer&settle_year=${year}&settle_month=${month}&status=verifying`;

	}else{
		url = `/api/settlemgm/settle-records?limit=${limit}&offset=${offset}&type=recruit&category=customer&settle_year=${year}&settle_month=${month}&status=verifying&keysearch=${keysearch}`;

	}
	return fetch.get(url,options);
}



//已完成
export const getCompletedList = (year,month,offset=0,limit=10,keysearch='',options={}) =>{
	let url = '';
	if(keysearch==''){
		 url = `/api/settlemgm/settle-records?limit=${limit}&offset=${offset}&type=recruit&category=customer&settle_year=${year}&settle_month=${month}&status=completed`;

	}else{
		url = `/api/settlemgm/settle-records?limit=${limit}&offset=${offset}&type=recruit&category=customer&settle_year=${year}&settle_month=${month}&status=completed&keysearch=${keysearch}`;

	}
	return fetch.get(url,options);
}




//导入结算单
export const insertSettlement = (id,data,options={}) =>{
	const url=`/api/settlemgm/settle-records/${id}/op/import`
	return fetch.post(url,{...data},options);
}


//生成结算单
export const generate_Settlement = (id,data={},options={}) =>{
	const url=`/api/settlemgm/settle-records/${id}/op/generate`
	return fetch.post(url,data,options);
}

//生成结算单
export const confirm_Generate = (id,data={},options={}) =>{
	const url=`/api/settlemgm/settle-records/${id}/op/confirm-generate`
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

export const export_Settlement = (id,options={}) =>{
	const url=`/api/settlemgm/settle-records/${id}/op/doexport`
	return fetch.post(url,options);
}

//核销
export const verify_Settlement = (id,options={}) =>{
	const url=`/api/settlemgm/settle-records/${id}/op/verify`
	return fetch.post(url,options);
}

//加载详情
export const loadSettleRecordsDetail = (id,options={}) =>{
	const url = `/api/settlemgm/settle-records/${id}`
	return fetch.get(url,options);
}


//获取职位结算详情
export const loadPositionSettlementDetail = (id,options={}) =>{
	const url = `/api/settlemgm/positions/${id}/settle-price`
	return fetch.get(url,options);
}


//修改职位结算协议
export const modifyPositionSettlement = (values,options={}) =>{
	const url = `/api/settlemgm/positions/${values.id}/settle-price`
	return fetch.post(url,values,options);
}
