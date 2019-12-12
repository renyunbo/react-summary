import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';



const TASK_DETAIL_PATH = '/api/socialwork/tasks';//获取公司列表  
const TASK_CONFIRM_PATH = '/api/socialwork/tasks/op/point-confirm';//发放任务金额
const GET_DOWN_PATH = '/api/socialwork/tasks/op/export';//导出文档

// ?exportprogress=success/point-paid


//——————————————————————————————薪酬管理——任务明细————start——————————————————————————————
// 薪酬管理>任务明细列表(未发放)
export const getTaskDetailList = (params, options = {}) => {
	console.log(params)
	const url = TASK_DETAIL_PATH + `${params}`;
	return fetch.get(url, options);
}
//薪酬管理>任务明细列表(已发放)
export const getTaskDetailDoList = (params, options = {}) => {
	const url = TASK_DETAIL_PATH + `${params}`;
	return fetch.get(url, options);
}
//薪酬管理>任务明细列表   发放按钮  请求
export const putTaskConfirm = (data, options = {}) => {
	const url = TASK_CONFIRM_PATH;
	return fetch.put(url, data, options);
}

//薪酬管理>任务明细     岗位  搜索条件（全部岗位）
export const getPostiondata = (options = {}) => {
	const url = '/api/socialwork/positions?allposi=true&src=hroweb';
	return fetch.get(url, options);
}


// // 薪酬管理>任务明细列表（搜索）任务明细列表（搜索）
// export const searchTaskDetailList = (name, condition, options = {}) => {
// 	if (condition) {
// 		const url = TASK_DETAIL_PATH + `?progress=success&keysearch=${name}`;
// 		return fetch.get(url, options);
// 	} else {
// 		const url = TASK_DETAIL_PATH + `?progress=point_paid&keysearch=${name}`;
// 		return fetch.get(url, options);
// 	}
// }
//导出
export const GET_DOWN_List = (params, key, options = {}) => {
	console.log(key)
	if (key == 1) {
		const url = GET_DOWN_PATH + "?progress=point_paid"
		return fetch.get(url, options);
	} else if (key == 0) {
		const url = GET_DOWN_PATH + "?progress=success"

		return fetch.get(url, options);
	}
}


//——————————————————————————————薪酬管理——任务明细————end——————————————————————————————


//——————————————————————————————薪酬管理——提现管理————start——————————————————————————————

const CASH_MANAGEMENT_PATH = '/api/walletmgm/transactions';//提现管理（未发放列表）
const PUT_CASH_MANAGEMENT_PATH = '/api/walletmgm/points-account'; //发放请求

export const getCashManagementWaitList = (params, options = {}) => {   //获取  待处理列表
	const url = CASH_MANAGEMENT_PATH + `${params}`;
	return fetch.get(url, options);
}

// export const getCashManagementStayOutList = (params, options = {}) => {  //获取   未发放列表
// 	const url = CASH_MANAGEMENT_PATH + "?money_type=1&status=processing&in_out=1";
// 	return fetch.get(url, options);
// }

// export const getCashManagementIssuedList = (params, options = {}) => {  //获取   已发放列表
// 	const url = CASH_MANAGEMENT_PATH + "?money_type=1&status=finished&in_out=1";
// 	return fetch.get(url, options);
// }

export const searchCashManagementlList = (name, c, options = {}) => { //   待处理列表 ，未发放列表 ，已放列表  搜索
	if (c == "1") {
		const url = CASH_MANAGEMENT_PATH + `?money_type=1&status=new&in_out=1&keysearch=${name}`;
		return fetch.get(url, options);
	} else if (c == "2") {
		const url = CASH_MANAGEMENT_PATH + `?money_type=1&status=processing&in_out=1&keysearch=${name}`;
		return fetch.get(url, options);
	} else if (c == "3") {
		const url = CASH_MANAGEMENT_PATH + `?money_type=1&status=finished&in_out=1&keysearch=${name}`;
		return fetch.get(url, options);
	}
}

export const putCashManagement = (data, options = {}) => {							 //    待处理列表   确认
	const url = PUT_CASH_MANAGEMENT_PATH;
	return fetch.put(url, data, options);
}


export const down_list = (params, options = {}) => { 								//    导出
	const url = "api/walletmgm/points-account/op/export" + `${params}`
	return fetch.get(url, options);
}
//——————————————————————————————薪酬管理——提现管理————end——————————————————————————————


//——————————————————————————————薪酬管理——设置————————start——————————————————————————————
const GET_TASKSET_TYPE_PATH = '/api/walletmgm/points-account/setting'  //获取    社会化用工个税申报类型
const PUT_TASKSET_TYPE_PATH = '/api/walletmgm/points-account/setting'  //获取    社会化用工个税申报类型
const PUT_LEGALENTITY_PATH = '/api/walletmgm/points-account/setting/legalentity'  //设置  添加法务实体
const DEL_LEGALENTITY_PATH = '/api/walletmgm/points-account/setting/legalentity'  //设置 删除法务实体

export const gettasksettypepathlist = (params, options = {}) => {   //获取  社会化用工个税申报类型    （拉添加的取法务实体列表）
	const url = GET_TASKSET_TYPE_PATH;
	return fetch.get(url, options);
}
export const put_taskset_type_pathlist = (data, options = {}) => {   //设置  社会化用工个税申报类型
	const url = PUT_TASKSET_TYPE_PATH;
	return fetch.put(url, data, options);
}
export const put_legalentity_pathlist = (data, options = {}) => {   //  添加法务实体
	console.log(data)
	const url = PUT_LEGALENTITY_PATH;
	return fetch.put(url, data, options);
}
export const del_legalentity_pathlist = (data, options = {}) => {   //  删除法务实体
	console.log(data)
	const url = DEL_LEGALENTITY_PATH;
	return fetch.del(url, data, options);
}



//——————————————————————————————薪酬管理——设置————灵活用工————end——————————————————————————————




//————————————————————————————————————————小程序管理———————start———————————————————————————
const GET_MANAGEMENT_PATH = '/api/uaa/ext-app-creds'	//获取   小程序列表
const POST_MANAGEMENT_ADD_PATH = '/api/uaa/ext-app-creds'  //设置 添加小程序管理 
const PUT_MANAGEMENT_PATH = '/api/uaa/ext-app-creds/'  //设置 修改小程序管理



export const get_management_list = (params, options = {}) => {    //获取小程序列表
	const url = GET_MANAGEMENT_PATH;
	return fetch.get(url, options);
}
export const put_management_add_pathlist = (data, options = {}) => {   //设置  添加小程序管理
	const url = POST_MANAGEMENT_ADD_PATH;
	return fetch.post(url, data, options);
}
export const modification_management_add_pathlist = (id, options = {}) => {   //设置  修改小程序管理
	const ids = id.id
	const url = PUT_MANAGEMENT_PATH + `${ids}`;
	return fetch.put(url, id, options);
}
//————————————————————————————————————————小程序管理———————end———————————————————————————

//任务指派 获取查看指派链接
export const getJumpLikn = (id, options = {}) => {
	const url = '/getTastLink';
	return fetch.post(url, { id }, options);
}