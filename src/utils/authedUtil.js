import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';

const SMS_CODE_PATH='/auth_api/sms/sms_codes';	//获取验证码
const REGISTER_PATH='/auth_api/uaa/tenants';//注册
const USER_LOGIN_PATH='/doLogin'; //用户登录


export const loadMyUserInfo=()=>{//获取用户信息
	return fetch.post('/loadUserInfo',{}).then((data)=>{
		if(data&&data.user_info&&data.user_info.oss){ 
			window.oss=data.user_info.oss;
		}else{
			window.oss={
				app_url : "https://oss.workai.com.cn",
				bucket : "hro",
				end_point : "oss-cn-beijing.aliyuncs.com",
				public_bucket : "hropublic",
				isDefault:true
			}
		}		
		return data;
	});
}

export const getSmsCode=(data,options={}) =>{ //获取验证码
	return fetch.post(SMS_CODE_PATH,data,options);
}

export const registerHro = (data,options={}) => { //注册接口
	const url=REGISTER_PATH
	return fetch.post(url,data,options);
}

export const userLogin =(data,options={})=>{ //登录接口
	const url=USER_LOGIN_PATH
	return fetch.post(url,data,options);
}


export const getResetSmsCode =(data,options={})=>{ //重置验证码
	const url= SMS_CODE_PATH
	return fetch.post(url,{...data},options);
}


//登录前重置密码
export const modifyPassword =(data,options={})=>{ //修改密码
	const url='/auth_api/uaa/reset-pwd'
	return fetch.post(url,data,options);
}

//登录后重置密码
export const modify_Password =(data,options={})=>{ //修改密码
	const url='/api/uaa/reset-pwd'
	return fetch.post(url,data,options);
}

export const getQuickLoginSmsCode =(data,options={})=>{ //重置验证码
	const url= SMS_CODE_PATH
	return fetch.post(url,{...data},options);
}

export const checkPerms = (perms = [], key, action) => {
  let flag = false;
	if (key && action) {
		perms && perms.map((perm, i) => {
			if (perm.module == key) {
				perm.actions && perm.actions.map(d => {
					if (d == action) {
						flag = true
				
					} 
					// else {
					// 	flag = false
					// }

				})
			}
		});
	
	} else if (key && !action) {
		perms && perms.map((perm, i) => {
			if (perm.module == key) {
				flag = true;
			}
		});
		
    }
    return flag;
}
//申报操作权限查询
export const getPermission =(options={})=>{ //修改密码
	const url='/api/persontax/operate-perm'
	return fetch.get(url,options);
}