import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';


/************************************ 企业IM *************************************/

const IM_PATH  = '/api/common'; 

export const getRongCloudToken=(query,options={}) =>{ //获取融云 token 
	const url=IM_PATH+"/rongcloud/auth/tokens";
	return fetch.get(url,options);
}
 

export const getUserInfo=(id,options={})=>{
	const url="/api/uaa/accounts/"+id;
	return fetch.get(url,options);
}