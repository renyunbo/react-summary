import * as fetch from './fetch';

const SET_POLICY_LIST = '/api/psiorder/policy-config';
const API_POLICY = '/api/sipolicy/';




export const getPolicyStoreUtil=(params,options={})=>{//用地区code 从社保通获取部分企业社保政策信息
	const url=API_POLICY+'policy-store'+(params?'?'+params:'');;
	return fetch.get(url,options);
}

export const setPolicysListUtil=(params,options={})=>{//政策配置 - 列表
	const url=SET_POLICY_LIST+(params?'?'+params:'');
	return fetch.get(url,options);
}

export const setPolicyServiceAreaListUtil=(params,options={})=>{//政策配置 - 服务地区 - 列表
	const url=SET_POLICY_LIST+'/'+params.id+'/area';
	return fetch.get(url,options);
}

export const addPolicyServiceAreaListUtil=(params,options={})=>{//政策配置 - 新增服务地区
	const url=SET_POLICY_LIST+'/'+params.id+'/area';
	return fetch.post(url,params,options);
}

export const editPolicyServiceAreaUtil=(params,options={})=>{//政策配置 - 修改服务地区
	const url='/api/psiorder/policy-config-area/'+params.id;
	return fetch.putJson(url,params,options);
}

export const deletePolicyServiceAreaUtil=(params,options={})=>{//政策配置 - 删除服务地区
	const url='/api/psiorder/policy-config-area/'+params.id;
	return fetch.del(url,options);
}
