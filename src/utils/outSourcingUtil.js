import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';

const PROVIDER_PATH  = '/api/providermgm/providers';


const OUTSOURCING_PATH  = '/api/outsourcing/outsourcing-project';
const OUTSOURCING_STORE_PATH  = '/api/outsourcing/store-info';
const OUTSOURCING_SKU_PATH  = '/api/outsourcing/sku-mgm';
const OUTSOURCING_SKU_CLERK  = '/api/outsourcing/clerk';
const OUTSOURCING_SKU_INSPECTOR  = '/api/outsourcing/inspector';

//外包项目列表

export const getOutSourcingList=(params,options={})=>{
	const url=OUTSOURCING_PATH+ `?`+params;
	return fetch.get(url,options);
}
//外包项目添加

export const addOutSourcing=(data,options={})=>{
	const url=OUTSOURCING_PATH;
	return fetch.post(url,data,options);
}
//外包项目编辑

export const editOutSourcing=(data,options={})=>{
	const url=OUTSOURCING_PATH+'/'+data.id;
	return fetch.put(url,data,options);
}

//外包单体项目详情

export const getOutSourcingItemDetail=(params,options={})=>{
	const url=OUTSOURCING_PATH+'/'+params.id;
	return fetch.get(url,options);
}
//外包单体项目删除

export const deleteOutSourcing=(params,options={})=>{
	const url=OUTSOURCING_PATH+'/'+params.id;
	return fetch.del(url,options);
}
// *******************外包项目门店设置****************
//外包项目门店列表

export const getOutSourcingStoreList=(params,options={})=>{
	const url=OUTSOURCING_STORE_PATH+ `?`+params;
	return fetch.get(url,options);
}

//获取项目下的品牌options

export const getBrandlist=(data,options={})=>{
	const url=OUTSOURCING_STORE_PATH+'/brandlist';
	return fetch.post(url,data,options);
}
//获取项目下的品牌options

export const getStorelist=(data,options={})=>{
	const url=OUTSOURCING_STORE_PATH+'/storelist';
	return fetch.post(url,data,options);
}
//外包项目门店添加

export const addOutSourcingStore=(data,options={})=>{
	const url=OUTSOURCING_STORE_PATH;
	return fetch.post(url,data,options);
}
//外包项目门店删除

export const delOutSourcingStore=(data,options={})=>{
	const url=OUTSOURCING_STORE_PATH+'/batchdelete';
	return fetch.post(url,data,options);
}
//外包项目门店详情查看

export const getOutSourcingItemStoreDetail=(params,options={})=>{
	const url=OUTSOURCING_STORE_PATH+'/'+params.id;
	return fetch.get(url,options);
}
//外包项目门店详情编辑

export const editOutSourcingStore=(data,options={})=>{
	const url=OUTSOURCING_STORE_PATH+'/'+data.id;
	return fetch.put(url,data,options);
}

//外包项目门店批量修改sku

export const batchChangeOutSourcingSku=(data,options={})=>{
	const url=OUTSOURCING_STORE_PATH+'/'+'batch-update';
	return fetch.post(url,data,options);
}





// 检测记录报表
export const checkInfoList=(data,options={})=>{
	const url=`/api/outsourcing/check-info/list`;
	return fetch.post(url,data,options);
}
// 检测记录报表导出
export const exportRecordList=(params,options={})=>{
	const url=`/api/outsourcing/check-infos/do-export`+'?'+params;
	return fetch.get(url,options);
}
// 检测记录详情
export const getCheckDetail=(params,options={})=>{
	const url=`/api/outsourcing/check-info/${params.id}`;
	return fetch.get(url,options);
}
// 出勤记录报表
export const attendInfoList=(params,options={})=>{
	const url=`/api/outsourcing/inspector-attendance/statistics`+'?'+params;
	return fetch.get(url,options);
}
// 个人考勤汇总
export const privateAttendInfoList=(params,options={})=>{
	const {id='',paramsData=''}=params;
	const url=`/api/outsourcing/inspector-attendance/statistics/`+id+'?'+paramsData;
	return fetch.get(url,options);
}
// 个人考勤详情
export const attendDetailInfoList=(params,options={})=>{
	const url=`/api/outsourcing/inspector-attendance/detail`+'?'+params;
	return fetch.get(url,options);
}



// sku列表
export const getSkuList=(params,options={})=>{
	const url=OUTSOURCING_SKU_PATH+ `?`+params;
	return fetch.get(url,options);
}
//添加sku
export const addOutSourcingSku=(data,options={})=>{
	const url=OUTSOURCING_SKU_PATH;
	return fetch.post(url,data,options);
}
//sku详情查看

export const getOutSourcingItemSkuDetail=(params,options={})=>{
	const url=OUTSOURCING_SKU_PATH+'/'+params.id;
	return fetch.get(url,options);
}
//sku详情编辑

export const editOutSourcingItemSkuDetail=(data,options={})=>{
	const url=OUTSOURCING_SKU_PATH+'/'+data.id;
	return fetch.put(url,data,options);
}
//sku删除

export const deleteOutSourcingItemSku=(params,options={})=>{
	const url=OUTSOURCING_SKU_PATH+'/'+params.id;
	return fetch.del(url,options);
}
//加载sku系列-产品

export const loadSkuList=(data,options={})=>{
	const url=OUTSOURCING_SKU_PATH+'/statistics';
	return fetch.post(url,data,options);
}




// 检测员列表


export const getCheckerList=(params,options={})=>{
	const url=OUTSOURCING_SKU_CLERK+ `?`+params;
	return fetch.get(url,options);
}
//添加检测员
export const addOutSourcingChecker=(data,options={})=>{
	const url=OUTSOURCING_SKU_CLERK;
	return fetch.post(url,data,options);
}
//检测员|业务员详情查看

export const getOutSourcingItemCheckerDetail=(params,options={})=>{
	const url=OUTSOURCING_SKU_CLERK+'/'+params.id;
	return fetch.get(url,options);
}
//检测员|业务员详情编辑

export const editOutSourcingItemCheckerDetail=(data,options={})=>{
	const url=OUTSOURCING_SKU_CLERK+'/'+data.id;
	return fetch.put(url,data,options);
}
//检测员删除

export const deleteOutSourcingItemChecker=(params,options={})=>{
	const url=OUTSOURCING_SKU_CLERK+'/'+params.id;
	return fetch.del(url,options);
}
//加载检测员系列-产品

export const loadCheckerList=(data,options={})=>{
	const url=OUTSOURCING_SKU_CLERK+'/statistics';
	return fetch.post(url,data,options);
}









//获取动态表达定义
export const getFormDefind=(params,options={})=>{
	const url='/api/formmeta/fields'+params;
	return fetch.get(url,options);
}
//获取供应商列表
export const getProviders=(data,options={})=>{
	const url=PROVIDER_PATH+data;
	return fetch.get(url,options);
}
 export const getRecruitProvider=(data,options={})=>{
	 const url='/api/providermgm/recruit-providers'+data;
	 return fetch.get(url,options);
 }

//获取供应商详情
export const getProvider=(data,options={})=>{
	const url=PROVIDER_PATH+'/'+data;
	return fetch.get(url,options);
}

//添加供应商
export const addProvider=(data,options={})=>{
	const url=PROVIDER_PATH;
	return fetch.post(url,data,options);
}

//更新(除了账号信息)
export const editProvider=(data,options={})=>{
	const url=PROVIDER_PATH+'/'+data.id;
	return fetch.putJson(url,data,options);
}

// 停用/启用供应商
export const actProvider=(data,options={})=>{
	const url=PROVIDER_PATH+'/'+data.id+'/action';
	return fetch.putJson(url,data,options);
}

//获取账号
export const getProviderAccount=(data,options={})=>{
	const url=PROVIDER_PATH+'/'+data+'/admin-account';
	return fetch.get(url,options);
}

//开通账号
export const openProviderAccount=(data,options={})=>{
	const url=PROVIDER_PATH+'/'+data.id+'/admin-account';
	return fetch.post(url,data,options);
}

//导入供应商
export const importProvider=(data,options={})=>{
	const url='api/providermgm/do-import';
	return fetch.post(url,data,options);
}

//微信经纪人分销列表
export const getAgentList =(params,options={})=>{//获取风控管理列表

  	const url = '/api/recruit/brokers'+ `?` + params;
	return fetch.get(url,options);
}

//微信经纪人分销修改状态
export const changeAgentState =(data,options={})=>{//获取风控管理列表
	console.log(data);console.log(55555);
	const url = '/api/recruit/brokers/'+data.id+ `/status-settings`;
	return fetch.put(url,data,options);
}

//微信经纪人新增一级经纪人
export const addAgent =(data,options={})=>{//获取风控管理列表
	console.log(data);
	const url = '/api/recruit/brokers';
	return fetch.post(url,data,options);
}
//微信经纪人分销导入经纪人
export const importAgent =(data,options={})=>{//获取风控管理列表
	console.log(data);
	const url = '/api/recruit/brokers/do-import';
	return fetch.post(url,data,options);
}
//微信经纪人分销设置经纪人
export const setAgent =(data,options={})=>{//获取风控管理列表
	console.log(data);
	const url = '/api/recruit/brokers-setting';
	return fetch.post(url,data,options);
}
//微信经纪人分销设置经纪人
export const agentSettingDays =(params,options={})=>{//获取风控管理列表
	console.log(params);
	const url = '/api/recruit/brokers-setting';
	return fetch.get(url,options);
}

//微信经纪人详情
export const detailAgent =(data,options={})=>{//获取风控管理列表
	console.log(data);
	const url = '/api/recruit/brokers'+'/'+data.id;
	console.log(url);
	return fetch.get(url,options);
}
//微信经纪人详情列表
export const detaiListlAgent =(str,id,options={})=>{//获取风控管理列表
	console.log(str);
	console.log(id);

	console.log(55555);
	const url = '/api/recruit/brokers'+'/'+id+`/lower`+'?'+str;

	return fetch.get(url,options);
}

// 门店信息导出
export const exportOutsourcingStore =(params,options={})=>{
	const url = `/api/outsourcing/store-infos/do-export?${params}`
	return fetch.get(url,options)
}

//
export const batchOperationClerkUtil = (params, options = {}) => {
	const url = '/api/outsourcing/store-info/batch-operation-clerk'
	return fetch.post(url, params, options)
}