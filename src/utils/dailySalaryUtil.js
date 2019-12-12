import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';


const DAILY_WAGE      = 'api/dailywage/apply_emps';   //风控管理
const DAILY_PAYMENT   = 'api/dailywage/wage_payments';//日薪发放
const ATTENDANCE_PATH = 'api/dailywage/attendances';  //考勤管理
const RECRUIT_PATH    = 'api/recruit/positions';      //日薪招聘
const SETCUSTOM_PATH  = 'api/sos/consultants'         // 设置客服负责人


//
export const getShareListUtil=(params,options={})=>{//日薪分享统计列表
  const url = DAILY_WAGE+'/share-invite'+(params?'?'+params:'')
	return fetch.get(url,options);
}
//日薪宝
export const getDailyWageUtil=(params,options={})=>{//获取风控管理列表
  const url = DAILY_WAGE+(params?'?'+params:'')
	return fetch.get(url,options);
}

export const dailyWageDisableUtil=(params,options={})=>{//风控管理停用操作
  const url = DAILY_WAGE+'/op/disable'
	return fetch.putJson(url,params,options);
}

export const getDailyStatisticsUtil=(params,options={})=>{//获取日薪发放统计信息
  const url = DAILY_PAYMENT+'/statistics'+(params?'?'+params:'')
	return fetch.get(url,options);
}

export const exportDailyStatisticsUtil=(params,options={})=>{//导出日薪发放列表
  const url = DAILY_PAYMENT+'/statistics/export'+(params?'?'+params:'')
	return fetch.get(url,options);
}

export const getDailyPaymentUtil=(params,options={})=>{//获取日薪发放列表
  const url = DAILY_PAYMENT+(params?'?'+params:'')
	return fetch.get(url,options);
}

export const exportDailyPaymentUtil=(params,options={})=>{//导出日薪发放列表
  const url = DAILY_PAYMENT+'/export'+(params?'?'+params:'')
	return fetch.get(url,options);
}

export const importDailyPaymentUtil=(params,options={})=>{//导入日薪发放列表
  const url = DAILY_PAYMENT+'/import'
	return fetch.post(url,params,options);
}

export const opUpdateDailyPaymentUtil=(params,options={})=>{//日薪发放确认接口
    console.log(params);
    console.log(11111);
  const url = DAILY_PAYMENT+'/op/batch_update';
	return fetch.putJson(url,params,options);
}
// export const opRefuseUpdateDailyPaymentUtil=(params,options={})=>{//日薪发放拒绝接口
//   const url = DAILY_PAYMENT+'/op/batch_update'
// 	return fetch.putJson(url,params,options);
// }

//考勤管理
export const getAttendanceUtil=(params,loadAttendance,options={})=>{//获取考勤管理列表
  let url = ATTENDANCE_PATH+(params?'?'+params:'');
  if(loadAttendance){
      url = 'api/attendance/attendance'+(params?'?'+params:'');
  }
	return fetch.get(url,options);
}

export const updateAttendanceUtil=(params,options={})=>{//更新考勤管理
  const url = ATTENDANCE_PATH+'/'+params.id
  return fetch.putJson(url,params,options);
}

//日薪招聘
export const getDailyRecruitUtil=(params,options={})=>{//获取日薪招聘列表
  const url = RECRUIT_PATH+'?position_type=dailywage'+(params?params:'')
	return fetch.get(url,options);
}

export const addDailyRecruitUtil=(params,options={})=>{//新增日薪职位
  const url = RECRUIT_PATH
	return fetch.post(url,params,options);
}

export const getDailyRecruitDetailUtil=(params,options={})=>{//获取日薪职位详情
  const url = RECRUIT_PATH+'/'+params.id
	return fetch.get(url,options);
}

export const updatePositionBasicUtil=(params,options={})=>{//更新基本信息,福利待遇,工作环境
  const url = RECRUIT_PATH+'/'+params.id+'/op/update-basic'
	return fetch.putJson(url,params,options);
}

export const updatePositionRequireUtil=(params,options={})=>{//更新职位要求
  const url = RECRUIT_PATH+'/'+params.id+'/op/update-requirement'
	return fetch.putJson(url,params,options);
}

export const updateDailyServeUtil=(params,options={})=>{//更新日薪服务
  const url = RECRUIT_PATH+'/'+params.id+'/op/update-dailywage'
	return fetch.putJson(url,params,options);
}

export const updatePositionRecruiterUtil=(params,options={})=>{//设置同事招聘
  const url = RECRUIT_PATH+'/'+params.id+'/op/update-recruiter'
	return fetch.putJson(url,params,options);
}

export const getRecruiterListUtil=(params,options={})=>{//获取同事招聘列表
  const url = RECRUIT_PATH+'/'+params.id+'/recruiter'
	return fetch.get(url,options);
}

export const opDailyRecruitUtil=(params,options={})=>{//上下线职位操作
 const url = RECRUIT_PATH+'/'+params.id+'/action'
 return fetch.putJson(url,params,options);
}

export const setCutomServiceUtil=(params,options={})=>{//设置客服负责人
 const url = SETCUSTOM_PATH
 return fetch.post(url,params,options);
}

export const getCutomServiceUtil=(params,options={})=>{//获取客服负责人
 const url = SETCUSTOM_PATH+'?type=dailywage'
 return fetch.get(url,options);
}

export const getDailyInviteesUtil=(params,options={})=>{//获取邀请统计
 const url =  'api/dailywage/invitees?'+params;
 return fetch.get(url,options);
}
