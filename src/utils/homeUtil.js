import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';


export const insertTodo =(data,options={})=>{ //登录接口
	const url=`/api/todomgm/todo`
	return fetch.post(url,data,options);
}

//获取待办
export const getTodo =(params,options={})=>{ //登录接口
	const url='/api/todomgm/todo?t=1509206401'+params;//   offset=${offset}&limit=${limit}&state=${state}`
	return fetch.get(url,options);
}



export const finsish_Todo =(id,data={},options={})=>{ //登录接口
	const url=`/api/todomgm/todo-finish/${id}`
	return fetch.put(url,options);
}


export const removeToto =(id,data={},options={})=>{ //登录接口
	const url=`/api/todomgm/todo/${id}`
	return fetch.del(url,options);
}
