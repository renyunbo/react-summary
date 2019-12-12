import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';

const QRCODE_FANS = '/api/officialaccount/qrcode-fans';	//粉丝统计


//粉丝统计折线图
export const qrcodeFansEchartUtil=(params,options={})=>{
	const url=QRCODE_FANS+'/count'+(params?'?'+params:'');
	return fetch.get(url,options);
}

//粉丝数据列表
export const qrcodeFansListUtil=(params,options={})=>{
	const url=QRCODE_FANS+(params?'?'+params:'');
	return fetch.get(url,options);
}

