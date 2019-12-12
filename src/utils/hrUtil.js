import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';

const HR_ORG_PATH='/api/uaa/orgs';	//部门操作
const HR_POSITION_PATH='/api/uaa/positions';	//职位操作 
const SIMPLE_EMPLOYEE_PATH = '/api/uaa/simple/admins';//查询雇员信息
const TENANT_PATH = '/api/uaa/tenants';//获取公司列表
 
/*
查询部门列表
*  
?all=true //all=true取当前tenant所有部门, parent_org_id为空的部门为顶级部门
*/
export const getOrgs=(params,options={}) =>{
	const url = `${HR_ORG_PATH}${params ? params : '?all=true'}`
	return fetch.get(url,options);
}
 


/*
*查看部门详情
*/
export const getOrgDetail=(uuid,options={})=>{ 
	const url=HR_ORG_PATH+'/'+uuid;
	return fetch.get(url,constants.HR,options);
}

/*
*添加部门
name	string	部门名称	Yes
parent_org_id	string	上级部门id	Yes
owner_id	string	部门负责人id	No
*/
export const addOrg=(data,options={})=>{ 
	const url=HR_ORG_PATH;
	return fetch.post(url,data,options);
}

/*
*更新部门信息
*/
export const updateOrg=(data,options={}) =>{ 
	const url=HR_ORG_PATH+'/'+data.id;
	return fetch.putJson(url,data,options);
}

/*
*查询所有职位
?org_id=xxxxx&all=true //all=true取当前部门所有职位, org_id为指定的部门id
*/
export const getPositions=(data,options={}) =>{ 
	let url;
	if(data.all){
		url=HR_POSITION_PATH+`?all=true`;
	}else{
		url=HR_POSITION_PATH+`?org_id=${data.org_id}&all=true`;
	}
	
	return fetch.get(url,options);//constants.HR
}
 

/*查询职位详情 
*/
export const getPositionDetail=(uuid,options={})=>{ 
	const url=HR_POSITION_PATH+"/"+uuid; 
	return fetch.get(url,options);
}

/*添加职位 
参数名	类型	描述	Required
name	string	职位名称	Yes
org_id	string	部门id	Yes
*/
export const addPosition=(data,options={})=>{
	const url=HR_POSITION_PATH ;
	return fetch.post(url,data,options);
}

/*
*更新职位信息
*/
export const updatePosition=(data,options={}) =>{ 
	const url=HR_POSITION_PATH+'/'+data.id;
	return fetch.putJson(url,data,options);
}
  
/*获取企业列表
*all=true
*/ 
export const getTenants=(options={})=>{
	const url=TENANT_PATH+"?all=true"; 
	return fetch.get(url,options);
}

/*
*切换公司
*/
export const changeTenant=(data,options={})=>{
	const url="/changeTenant"; 
	return fetch.post(url,data,options);
}


/*获取简单员工列表
*status=active必须要传
*organization_ID为指定部门id, showSubOrgs为true表示显示所有下属部门成员
*limit=10&offset=0&name=xxxxx // name为员工姓名， 按姓名在当前部门模糊查询
*/
export const getSimpleEmployee=(query,options={})=>{
	const url=SIMPLE_EMPLOYEE_PATH+'?status=active'+(query?query:"");
	return fetch.get(url,constants.HR,options);
}


/*获取所有下级列表 */
export const getSubordinates=(query,options={})=>{
	const url=`/api/uaa/subordinates${query ? query : ''}`
	return fetch.get(url,constants.HR,options);
}



// 删除部门
export const deleteOrgActionUtil = (params, options = {}) => {
	const url=`/api/uaa/orgs/${params.id}`
	return fetch.del(url, options)
}

// 删除部门
export const getAppNameUtil = (params, options = {}) => {
	const url=`/api/uaa/persontax-app-name`
	return fetch.get(url, options)
}