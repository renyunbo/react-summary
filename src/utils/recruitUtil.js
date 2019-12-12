import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';
import moment from 'moment';

const POSITION_PATH = '/api/recruit/positions';
const CANDIDATE_PATH = '/api/recruit/candidates';
const RECRUIT_PERFS_PATH = '/api/recruit/recruit-perfs';
const RESUMES_PATH = '/api/recruit/resumes';
const REWARDS_PATH = '/api/rewardmgm/rewards';
const POSITION_NAME_PATH = '/api/recruit/pos-category';
const CANDIDATE_BATCH_PATH = '/api/recruit/batch/candidates';






//招聘 - 导出简历
export const exportResumeUtil = (params, options = {}) => {
	const url = '/api/recruit/resume-pdf/export';
	return fetch.post(url, params, options);
}

//获取导入记录列表(候选人管理)
export const getCandidateRecordsUitl = (params, options = {}) => {
	const url = '/api/recruit/import-jobs' + (params ? '?' + params : '');
	return fetch.get(url, options);
}

//获取导入失败记录列表(候选人管理)
export const getFailCandidateRecordsUitl = (params, options = {}) => {
	const url = '/api/recruit/import-jobs/' + params.id + '/records';
	return fetch.get(url, options);
}
//获取职位详情
export const getPosition = (id, options = {}) => {
	const url = POSITION_PATH + '/' + id;
	return fetch.get(url, options);
}

//获取职位列表
export const getPositions = (params, options = {}) => {
	const url = POSITION_PATH + params;
	return fetch.get(url, options);
}
// 获取客户名称（职位）
export const getPositionsCustomer = (options = {}) => {
	const url = `/api/crm/positions/customers`
	return fetch.get(url, options);
}
//添加职位
export const addPositions = (data, options = {}) => {
	const url = POSITION_PATH;
	return fetch.post(url, data, options);
}
//更新基本信息
export const updatePositionBasic = (data, options = {}) => {
	const url = POSITION_PATH + '/' + data.id + '/op/update-basic';
	return fetch.putJson(url, data, options);
}

//更新职位要求
export const updatePositionRequirement = (data, options = {}) => {
	const url = POSITION_PATH + '/' + data.id + '/op/update-requirement';
	return fetch.putJson(url, data, options);
}

//更新面试安排
export const updatePositionInterview = (data, options = {}) => {
	const url = POSITION_PATH + '/' + data.id + '/op/update-interview';
	return fetch.putJson(url, data, options);
}
//上下线职位
export const updatePositionDown = (data, options = {}) => {
	const url = POSITION_PATH + '/' + data.id + '/action';
	return fetch.putJson(url, data, options);
}


//同事招聘列表
export const getRecruiterPositions = (data, options = {}) => {
	const url = POSITION_PATH + '/' + data.id + '/recruiter';
	return fetch.get(url, options);
}

//设置同事招聘
export const setRecruiterPositions = (data, options = {}) => {
	const url = POSITION_PATH + '/' + data.id + '/op/update-recruiter';
	return fetch.putJson(url, data, options);
}

//获取悬赏详情
export const getRewardSetting = (data, options = {}) => {
	const url = POSITION_PATH + '/' + data.id + '/reward-setting';
	return fetch.get(url, options);
}
//设置悬赏
export const setPositionReward = (data, options = {}) => {
	const url = POSITION_PATH + '/' + data.position_id + '/op/update-reward-setting'
	return fetch.post(url, data, options);
}



//列表面试题
export const getQuestions = (data, options = {}) => {
	const url = POSITION_PATH + '/' + data.id + '/questions';
	return fetch.get(url, options);
}
//添加面试题
export const addQuestions = (data, options = {}) => {
	const url = POSITION_PATH + '/' + data.id + '/questions';
	return fetch.post(url, data, options);
}

//生成二维码
export const buildEWM = (data, options = {}) => {
	const url = POSITION_PATH + '/' + data.id + '/tagqrcode';
	return fetch.post(url, data, options);
}


//删除面试题
export const deleteQuestion = (data, options = {}) => {
	const url = positions + '/' + data.id + '/questions';
	return fetch.del(url, {}, options);
}

//申请职位
export const addPositionApply = (data, options = {}) => {
	const url = POSITION_PATH + '/' + data.id + '/op/apply';
	return fetch.post(url, data, options);
}

//推荐职位
export const addRecommendCandidate = (data, options = {}) => {
	const url = POSITION_PATH + '/' + data.id + '/op/recommend-candidate';
	return fetch.post(url, data, options);
}

//完善简历
export const addMyresume = (data, options = {}) => {
	const url = '/api/recruit/myresume';
	return fetch.post(url, data, options);
}

//获取简历详情
export const getMyresume = (params, options = {}) => {
	const url = '/api/recruit/myresume' + "?" + params;
	return fetch.get(url, options);
}


//候选人列表
export const getCandidates = (params, options = {}) => {
	const url = CANDIDATE_PATH + params;
	return fetch.get(url, options);
}

//候选人列表count
export const countCandidates = (params, options = {}) => {
	const url = 'api/recruit/stats/candidates' + params;
	return fetch.get(url, options);
}

//候选人详情
export const getCandidatesDetail = (data, options = {}) => {
	const url = CANDIDATE_PATH + '/' + data.id;
	return fetch.get(url, options);
}

//候选人进入面试
export const candidatesInterview = (data, options = {}) => {
	const url = CANDIDATE_PATH + '/' + data.id + '/op/interview';
	return fetch.post(url, data, options);
}

//候选人批量进入面试
export const candidatesBathInterview = (data, options = {}) => {
	const url = `/api/recruit/batch/candidates/op/interview`
	return fetch.post(url, data, options);
}

//候选人进入体检
export const candidatesCheckup = (data, options = {}) => {
	const url = CANDIDATE_PATH + '/' + data.id + '/op/checkup';
	return fetch.post(url, data, options);
}

//候选人:进入待入职
export const candidatesOnboard = (data, options = {}) => {
	const url = CANDIDATE_PATH + '/' + data.id + '/op/onboard';
	return fetch.post(url, data, options);
}

//候选人:批量进入待入职
export const batchEnterOnboardUtil = (data, options = {}) => {
	const url = CANDIDATE_BATCH_PATH + '/op/onboard';
	return fetch.post(url, data, options);
}

//异常终结操作
export const candidatesAbnormal = (data, options = {}) => {
	const url = CANDIDATE_PATH + '/' + data.id + '/abnormal-action';
	return fetch.post(url, data, options);
}

//推荐到其他职位
export const candidatesSwitchPost = (data, options = {}) => {
	const url = CANDIDATE_PATH + '/' + data.id + '/switch-position';
	return fetch.post(url, data, options);
}

//修改简历基本信息
export const editUpdateResume = (data, options = {}) => {
	const url = CANDIDATE_PATH + '/' + data.id + '/op/update-resume';
	return fetch.post(url, data, options);
}


//业绩列表
export const getRecruitPerfs = (offset = 0, limit = 10, recruiter_id, position, start_join_date, end_join_date, keysearch, customer_id, options = {}) => {

	let url = `${RECRUIT_PERFS_PATH}?offset=${offset}&limit=${limit}`;
	if (recruiter_id && recruiter_id != '') {
		url = url + `&recruiter_id=${recruiter_id}`;
	} if (position && position != '' && position != '不限') {
		url = url + `&position_category=${position}`;
	} if (start_join_date != '') {
		url = url + `&start_join_date=${start_join_date}`;
	} if (end_join_date != '') {
		url = url + `&end_join_date=${end_join_date}`;
	} if (keysearch && keysearch != '') {
		url = url + `&keysearch=${keysearch}`;
	} if (customer_id && customer_id != '') {
		url = url + `&customer_id=${customer_id}`;
	}
	return fetch.get(url, options);
}


//简历库列表
export const getResumes = (query, options = {}) => {
	const url = RESUMES_PATH + '?' + query;
	return fetch.get(url, options);
}


//获取简历详情
export const getResume = (id, options = {}) => {
	const url = RESUMES_PATH + '/' + id;
	return fetch.get(url, options);
}

//导入简历(execl导入)
export const importResume = (data, options = {}) => {
	const url = 'api/recruit/resume-import';
	return fetch.post(url, data, options);
}

//简历批量解析
export const extractResume = (data, options = {}) => {
	const url = 'api/recruit/resume-extract';
	return fetch.post(url, data, options);
}

//简历状态列表
/*
	status = error(解析错误) | processing(解析中) | finish(解析完成)
*/
export const getStatusResume = (data, options = {}) => {
	const url = 'api/recruit/resume-extract/batch/' + data.batch_id;
	return fetch.get(url, options);
}

//简历解析历史
export const analyzeResumeHistory = (data, options = {}) => {
	const url = 'api/recruit/resume-extract-history' + data;
	return fetch.get(url, options);
}
//简历解析历史批次列表
export const analyzeResumeHistoryBatchList = (data, options = {}) => {
	const url = 'api/recruit/resume-extract/batch' + data;
	return fetch.get(url, options);
}
//简历解析历史批次详情（简历解析历史列表）
export const analyzeResumeHistoryBatchDetail = (data, options = {}) => {
	const { param = '', id = '' } = data;
	let url = ''
	if (id) {
		url = 'api/recruit/resume-extract/batch' + '/' + id + param;
	}
	return fetch.get(url, options);
}

//获取赏金管理列表
export const getRewards = (params, options = {}) => {
	let url = REWARDS_PATH + (params ? '?' + params : '');
	return fetch.get(url, options);
}

//查看赏金详情
export const getReward = (id, options = {}) => {
	const url = REWARDS_PATH + '/' + id;
	return fetch.get(url, options);
}

//赏金条目历史
export const getRewardItems = (id, options = {}) => {
	const url = REWARDS_PATH + '/' + id + '/items?offset=0&limit=1000';
	return fetch.get(url, options);
}

//获取赏金总统计情况
export const getRewardStats = (options = {}) => {
	const url = '/api/rewardmgm/stats';
	return fetch.get(url, options);
}

//发放赏金
export const pay_Reward = (id, amount, options = {}) => {
	const url = `/api/rewardmgm/rewards/${id}/op/pay`;
	return fetch.post(url, { ...amount }, options);
}

//获取面试联系人列表
export const getInterviewContact = (interviewer_id = '', status = 'all', options = {}) => {
	let url = '';
	switch (status) {
		case 'all':
			url = '/api/recruit/interviews';
			break;
		case 'before':
			url = `/api/recruit/interviews?end_interview_date=${moment(new Date()).unix() - 86400}`;
			break;
		case 'today':
			url = `/api/recruit/interviews?start_interview_date=${moment(new Date()).unix()}&end_interview_date=${moment(new Date()).unix()}`;
			break;
		case 'after':
			url = `/api/recruit/interviews?start_interview_date=${moment(new Date()).unix() + 86400}`;
			break;
		default:
	}
	if (status == 'all') {
		if (interviewer_id != '') {
			url = url + `?interviewer_id=${interviewer_id}`;
		}
	} else {
		if (interviewer_id != '') {
			url = url + `&interviewer_id=${interviewer_id}`;
		}
	}
	return fetch.get(url, options);
}

//获取候选人列表
export const getInterviewCandidates = (id, options = {}) => {
	const url = `/api/recruit/interviews/${id}/candidates`;
	return fetch.get(url, options);
}

//修改面试日程

export const updateInterviewSchedule = (params, options = {}) => {
	const url = `/api/recruit/candidate/op/change-interview`;
	return fetch.post(url, { ...params }, options);
}

//统计简历数
export const getResumeNum = (params = '', options = {}) => {
	const url = `/api/recruit/home/resume-num${params}`;
	return fetch.get(url, options);
}
//招聘统计数据(在招)
export const getRecruitNum = (params, options = {}) => {
	const url = `/api/recruit/home/my-responsible-recruit`;
	return fetch.get(url, options);
}
//招聘统计数据(我管理的招聘)
export const geManageRecruitNum = (params, options = {}) => {
	const url = `/api/recruit/home/my-managing-position`;
	return fetch.get(url, options);
}

//委托给供应商
export const setProviderRecruit = (params, options = {}) => {
	const url = `/api/recruit/positions/${params.id}/op/delegate-provider`;
	return fetch.post(url, params, options);
}

//经纪人设置
// 获取入职天数
// export const getBrokersSetting = (positionId, options = {}) => {
// 	const url = `/api/recruit/brokers-setting?position_id=${positionId}`
// 	return fetch.get(url, options)
// }
// 	// 更新入职天数
// export const setBrokersSetting = (params, options = {}) => {
// 	const url = `/api/recruit/brokers-setting`
// 	return fetch.post(url, params, options)
// }

//经纪人设置
// 获取经纪人设置详情
export const getBrokersSetting = (positionId, options = {}) => {
	const url = `/api/recruit/position-broker-policies/${positionId}`
	return fetch.get(url, options)
}
// 设置经纪人
export const setBrokersSetting = (params, options = {}) => {
	const url = `/api/recruit/position-broker-policies`
	return fetch.post(url, params, options)
}
//职位的测评设置
//获取测评开启状态
export const getEvaluteSetting = (positionId, options = {}) => {
	const url = `/api/intelligencemgm/position-evaluation-settings/${positionId}/status`
	return fetch.get(url, options)
}
// 设置测评状态
export const setEvaluteSetting = (params, options = {}) => {
	const url = `/api/intelligencemgm/position-evaluation-settings`
	return fetch.post(url, params, options)
}

//职位委托供应商列表
export const setProviderList = (id, options = {}) => {
	const url = `/api/recruit/positions/${id}/providers`;
	return fetch.get(url, options);
}
//简历推荐职位
export const resumeRecommend = (data, options = {}) => {
	const url = `/api/recruit/resumes/op/recommend`;
	return fetch.post(url, data, options);
}



//候选人推荐
export const candidateRecommend = (data, options = {}) => {
	const url = `/api/recruit/candidates/${data.id}/op/switch-position`;
	return fetch.post(url, data, options);
}

//获取职位列表
export const getSimplePositions = (data, options = {}) => {
	const url = `/api/recruit/simple-positions?all=true&view=recruiting&status=active`;
	return fetch.get(url, options);
}


//确认到岗
export const doConfirmOnboard = (data, options = {}) => {
	const url = CANDIDATE_PATH + '/' + data.id + '/op/confirm-onboard';
	return fetch.post(url, data, options);
}

//导入候选人+待入职
export const insertCandidates = (data, options = {}) => {
	const url = `/api/recruit/do-import`;
	return fetch.post(url, data, options);
}
//添加备注
export const add_comment = (data, options = {}) => {
	const url = `/api/recruit/resume-comment`;
	return fetch.put(url, data, options);
}

//添加候选人备注
export const add_CandidateComment = (data, options = {}) => {
	const url = `/api/recruit/candidate-comment`;
	return fetch.put(url, data, options);
}


//智能导入候选人简历
export const analyze_CandidateResume = (data, options = {}) => {
	const url = `/api/recruit/candidate/op/resume-import`;
	return fetch.post(url, data, options);
}


//获取邮箱列表
export const getResumeEmail = (data, options = {}) => {
	const url = `/api/recruit/resume-emails`;
	return fetch.get(url, options);
}

//添加简历邮箱
export const addResumeEmail = (data, options = {}) => {
	const url = `/api/recruit/resume/set-emails`;
	return fetch.post(url, data, options);
}

//删除已设置的简历邮箱
export const delResumeEmail = (data, options = {}) => {
	const url = `/api/recruit/resume-emails/` + data.id;
	return fetch.del(url, data, options);
}

//更新简历
export const editResume = (data, options = {}) => {
	const url = `/api/recruit/resume/` + data.id;
	return fetch.putJson(url, data, options);
}

//批量更新期望岗位
export const editMoreResume = (data, options = {}) => {
	const url = `/api/recruit/resumes`
	return fetch.put(url, data, options);
}

// 分配个人
export const resumeAllocate = (data, options = {}) => {
	const url = `/api/recruit/resume-allocate`
	return fetch.post(url, data, options)
}

// 转入公海，，转入他人
export const resumeTransferOut = (data, options = {}) => {
	const url = `/api/recruit/transfer-out`
	return fetch.post(url, data, options)
}

// 共享简历
export const postShareResume = (data, options = {}) => {
	const url = `/api/recruit/resume/op/allocate/department`
	return fetch.post(url, data, options)
}

//新增简历
export const createResume = (data, options = {}) => {
	const url = `/api/recruit/input-resume`;
	return fetch.post(url, data, options);
}
//置顶职位
export const topPositions = (data, options = {}) => {
	const url = `/api/recruit/positions/${data.id}/ranking`;
	return fetch.post(url, data, options);
}
//职位列表
export const getPositionName = (query, options = {}) => {
	const url = POSITION_NAME_PATH;
	return fetch.get(url, options);
}

//职位列表筛选
export const getPositionNameSerach = (options = {}) => {
	const url = `/api/recruit/expect-job-category`
	return fetch.get(url, options)
}

// 导出候选人
export const downloadCandidate = (parmas, options = {}) => {
	// TODO: 接口待更换
	let url = `/api/recruit/candidate/do-export?${parmas}`
	return fetch.get(url, options)
}

// 求职者确认入职
export const submitCandidatesOnboard = (params, options = {}) => {
	const url = `/api/recruit/candidates/${params.employee_ids[0]}/op/confirm-onboard`
	return fetch.post(url, params, options);
}
// 新增外呼任务
export const addRobotOutbound = (data, options = {}) => {
	const url = "api/callbot/call_batches"
	return fetch.post(url, data, options);
}
// 获取外呼任务列表 (外呼统计-任务统计)
export const addRobotOutboundList = (data, options = {}) => {
	const url = `/api/callbot/call_batches${data}`
	return fetch.get(url, options);
}
// 外呼任务操作     (外呼统计-任务统计)
export const RobotOutboundOperation = (data, options = {}) => {
	const url = `/api/callbot/call_batches/${data.id}/action`
	return fetch.post(url, data, options);
}
// 外呼任务详情 （数量）    (外呼统计-任务统计)
export const getRobotDetails = (id, options = {}) => {
	const url = `/api/callbot/call_batches/${id}`
	return fetch.get(url, options);
}
// 获取外呼记录列表  （列表内容）   (外呼统计-任务统计-详情)
export const getOutboundRecordsList = (params, options = {}) => {
	const url = `/api/callbot/call_tasks${params}`
	return fetch.get(url, options);
}
//查看聊天记录 （列表内容）   (外呼统计-任务统计-详情)
export const geTchatContent = (id, options = {}) => {
	const url = `/api/callbot/call_tasks/${id}/call_texts`
	return fetch.get(url, options);
}
// 机器人统计  列表
export const getRobotList = (params, options = {}) => {
	const url = `/api/callbot/call_bots${params}`
	return fetch.get(url, options);
}
// 机器人统计  （数量）
export const getRobotNumber = (params, options = {}) => {
	const url = `/api/callbot/call_bots/stats${params}`
	return fetch.get(url, options);
}
// 获取机器人 全部设置  （数量）
export const getRobotAllSet = (params, options = {}) => {
	const url = `/api/callbot/settings/global`
	return fetch.get(url, options);
}
// 设置机器人 全部设置  （数量）
export const postRobotAllSet = (data, params, options = {}) => {
	const url = `/api/callbot/settings/global`
	return fetch.post(url, data, options);
}
// 单个机器人设置
export const postRobotSet = (data, params, options = {}) => {
	const url = `/api/callbot/call_bots/${data.id}/settings`
	return fetch.post(url, data, options);
}
// 获取机器人设置列表
export const getRobotSetList = (params, options = {}) => {
	const url = `/api/callbot/settings/bots`
	return fetch.get(url, options);
}
// 获取外呼场景列表
export const getDialogueProcess = (params, options = {}) => {
	const url = `/api/callbot/call_scenes`
	return fetch.get(url, options);
}

// 更新外呼记录备注
export const postCutboundComment = (params, options = {}) => {
	const url = `/api/callbot/call_tasks/${params.id}/comments`
	return fetch.post(url, params, options);
}
// 是否购买机器人
export const getIsRobot = (params, options = {}) => {
	const url = `/api/callbot/call_bots/num_stats`
	return fetch.get(url, params, options);
}
// 机器人用时统计
export const getRobotTime = (params, options = {}) => {
	const url = `/api/callbot/call_bots/usage_stats`
	return fetch.get(url, params, options);
}
// 招聘甲方结算设置
export const setAccount = (id, params, options = {}) => {
	const url = 'api/settlemgm/positions/' + id + '/settle-price';
	return fetch.post(url, params, options)
}

//获取甲方结算设置
export const getAccount = (id, options = {}) => {
	const url = 'api/settlemgm/positions/' + id + '/settle-price';
	return fetch.get(url, options)
}

//自动推荐统计数
export const getAutoSelectNum = (params, options = {}) => {
	const url = `/api/recruit/autorecommend-sum${params}`
	return fetch.get(url, options)
}

//招聘自动筛选列表
export const getAutoSelectList = (params, options = {}) => {
	const url = `/api/recruit/autorecommend-list${params}`
	return fetch.get(url, options)
}

//加入候选人
export const getAddCandidate = (params, type, options = {}) => {
	const url = `/api/recruit/candidate-add`
	return fetch.putJson(url, params, options)
}
//不合适
export const getAutoDeny = (params, type, options = {}) => {
	const url = `/api/recruit/candidate-mismatch`
	return fetch.putJson(url, params, options)
}
//添加跟进
export const getAutoAddFollow = (params, type, options = {}) => {
	const url = `/api/recruit/candidate-follow`
	return fetch.putJson(url, params, options)
}
//获取机器人外呼场景详情
//获取测评详情
export const loadPositionEvaluate = (data, options = {}) => {
	const { id = '', param = '' } = data
	const url = '/api/recruit/resume-position-evaluations/' + id + param;
	return fetch.get(url, options)
}

export const getScene = (id, options = {}) => {
	const url = `/api/callbot/call_scenes/${id}`
	return fetch.get(url, options)
}

// 招聘需求  获取添加跟进人
export const getFollowOwner = (id, options = {}) => {
	const url = `/api/recruit/positions/${id}/follow-owner`
	return fetch.get(url, options)
}

// 招聘需求  设置添加跟进人
export const putFollowOwner = (params, options = {}) => {
	const url = `/api/recruit/position/follow-owner`
	return fetch.put(url, params, options)
}

// 候选人进入带面试状态

export const exportResumes = (params, options = {}) => {
	const url = `/api/recruit/op/export/resume`
	return fetch.post(url, params, options)
}
export const addPositionRuleUtil = (params, options = {}) => {
	const url = `/api/recruit/position-broker-policies`
	return fetch.post(url, params, options)
}
//职位返佣规则详情
export const getPositionRuleDetailUtil = (position_id, params, options = {}) => {
	const url = `/api/recruit/position-broker-policies/${position_id}${params ? params : ''}`
	return fetch.get(url, options)
}
//创建或修改甲方结算设置
export const addSettlementSetUtil = (position_id, params, options = {}) => {
	const url = `/api/settlemgm/positions/${position_id}/settlement-setting`
	return fetch.post(url, params, options)
}
//获取甲方结算列表
export const getSettlementSettingListUtil = (params, options = {}) => {
	const url = `/api/settlemgm/position-settle-settings${params}`
	return fetch.get(url, options)
}
//获取甲方结算详情
export const getSettlementSettingDetailUtil = (position_id, category, options = {}) => {
	const url = `/api/settlemgm/positions/${position_id}/settlement-setting/${category}`
	return fetch.get(url, options)
}
//获取钉钉审批列表
export const getNailApprovalListUtil = (params, options = {}) => {
	const url = `/api/approval/approvals${params}`
	return fetch.get(url, options)
}
//获取钉钉审批详情
export const getNailApprovalDetailUtil = (process_instance_id, options = {}) => {
	const url = `/api/approval/approvals/${process_instance_id}`
	return fetch.get(url, options)
}

//批量确认入职  
export const batchConformJoinUtil = (params, options = {}) => {
	const url = `/api/recruit/batch/candidates/op/confirm-onboard`
	return fetch.post(url, params, options)
}

//职位返佣规则删除   /recruit/v1/position-broker-policies/:id
export const delPositionRuleUtil = (id, options = {}) => {
	const url = `/api/recruit/position-broker-policies/${id}`
	return fetch.del(url, options)
}

//本月不合格人数统计
export const getAbandonCount = (params, options = {}) => {
	const url = `/api/recruit/statistics/everyday-count?status=abandon&${params}`
	return fetch.get(url, options)
}

// 发起仲裁

export const arbitrateUtil = (id,options={}) =>{
	const url = `/api/crm/customer/${id}/arbitrate`;
	return fetch.post(url, options)
}