import * as fetch from './fetch';
import {USE_MOCK} from '../redux/constants/Constants';


const PSIORDER = '/api/psiorder/';


//后道实缴明细 - 确认实缴
export const realConfirmUtil= (params,options={}) => {
	const url =PSIORDER+'real-confirm';
	return fetch.post(url,params,options);
}

//后道实缴明细列表
export const backRealListUtil= (params,options={}) => {
	const url =PSIORDER+'real'+(params?'?'+params:'');
	return fetch.get(url,options);
}

//后道实缴明细列表---人员列表
export const backPersonRealListUtil= (params,options={}) => {
	const url =PSIORDER+'real-detail'+(params?'?'+params:'');
	return fetch.get(url,options);
}

//后道实缴模板列表
export const backTemplateListUtil= (params,options={}) => {
	const url =PSIORDER+'real-templates'+(params?'?'+params:'');
	return fetch.get(url,options);
}

//后道删除实缴模板
export const delBackTemplateUtil= (params,options={}) => {
	const url =PSIORDER+'real-templates/'+params.id;
	return fetch.del(url,options);
}

//新增模板：获取账户列表
export const backAccountsListUtil= (params,options={}) => {
	const url =PSIORDER+'accounts'+(params?'?'+params:'');
	return fetch.get(url,options);
}

//新增模板：上传
export const importBackTemplateUtil= (params,options={}) => {
	const url =PSIORDER+'do-import-real-template';
	return fetch.post(url,params,options);
}

//新增模板：新建实缴模板
export const addBackTemplateUtil= (params,options={}) => {
	const url =PSIORDER+'real-template';
	return fetch.post(url,params,options);
}

//导入实缴：获取险种映射表
export const getMappingUtil= (params,options={}) => {
	const url =PSIORDER+'get-real-mapping';
	return fetch.post(url,params,options);
}

//导入实缴：导入操作
export const importTemplateUtil= (params,options={}) => {
	const url =PSIORDER+'real/do-import';
	return fetch.post(url,params,options);
}
