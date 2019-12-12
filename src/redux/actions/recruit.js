import React, { PropTypes } from 'react';
import * as types from '../constants/ActionTypes';
import {
    getPosition, getPositions, addPositions, updatePositionBasic, updatePositionRequirement,
    updatePositionInterview, updatePositionDown, getRecruiterPositions, setRecruiterPositions,
    getRewardSetting, setPositionReward, getQuestions, addQuestions, deleteQuestion, getCandidates,
    countCandidates, getCandidatesDetail, candidatesInterview, candidatesBathInterview, candidatesCheckup,
    candidatesOnboard, batchEnterOnboardUtil, candidatesAbnormal,
    candidatesSwitchPost, editUpdateResume, getRecruitPerfs, getResumes,
    getResume, importResume, extractResume, getStatusResume, analyzeResumeHistory,
    getRewards, getReward, getRewardItems, getRewardStats, pay_Reward, getInterviewContact,
    getInterviewCandidates, updateInterviewSchedule,
    getResumeNum, getRecruitNum, setProviderRecruit, setProviderList, geManageRecruitNum,
    resumeRecommend, insertCandidates, doConfirmOnboard, candidateRecommend,
    add_comment, add_CandidateComment,
    analyze_CandidateResume, getResumeEmail,
    addResumeEmail, delResumeEmail, editResume, buildEWM, topPositions, getPositionName, createResume,
    getBrokersSetting, setBrokersSetting,
    getEvaluteSetting, setEvaluteSetting,
    downloadCandidate,
    analyzeResumeHistoryBatchList,
    analyzeResumeHistoryBatchDetail,
    getSimplePositions, getCandidateRecordsUitl, getFailCandidateRecordsUitl,
    getPositionNameSerach, editMoreResume, getPositionsCustomer, submitCandidatesOnboard,
    resumeAllocate, resumeTransferOut, addRobotOutbound, addRobotOutboundList, RobotOutboundOperation, getRobotDetails,
    getOutboundRecordsList, geTchatContent, getRobotList, getRobotNumber, getRobotAllSet, postRobotAllSet, getRobotSetList,
    getDialogueProcess, postRobotSet, postCutboundComment, getIsRobot, getRobotTime, setAccount, getAccount, getScene, getFollowOwner, putFollowOwner, getAutoSelectNum, getAutoSelectList, getAddCandidate, getAutoDeny, getAutoAddFollow, loadPositionEvaluate,
    loadCandidatesOpBatch, postShareResume, exportResumes, exportResumeUtil, addPositionRuleUtil, addSettlementSetUtil, getPositionRuleDetailUtil,
    getSettlementSettingListUtil, getSettlementSettingDetailUtil, getNailApprovalListUtil, getNailApprovalDetailUtil, batchConformJoinUtil, delPositionRuleUtil,arbitrateUtil
} from '../../utils/recruitUtil';
import { message, notification } from 'antd';
import { loadAdmins, loadAdminsListDet } from '../../redux/actions/settingAction'
import { change, SubmissionError, submit, reset, initialize } from 'redux-form';
import moment from 'moment';
import { handlErrorMessage } from '../../utils/commonUtils'
import { downloadFileByUrl } from '../../utils/fileUtil'
import { NotificationIcon } from '../../utils/comonOtherUtil';




//招聘 - 导出简历
export function exportResumeAction(values) {
    return dispatch => {
        return exportResumeUtil(values).then(data => {
            if (data.path) {
                notification.open({
                    message: '成功',
                    description: '简历导出成功',
                    icon: <NotificationIcon type='success' />,
                });
                downloadFileByUrl(data.path);
            } else {
                notification.open({
                    message: '错误',
                    description: '简历导出失败,' + data.message,
                    icon: <NotificationIcon type='error' />,
                });
            }
        }).catch(err => {
            throw err;
        });
    };
}

export function cleanQuestions() {
    return {
        type: types.GET_QUESTION,
        getQuestion: {}
    }
}

export function cleanPosition() {
    return {
        type: types.POSITION_DETAIL,
        pstDetail: {},
        afterOnboardRatios: []
    }
}

//获取候选人导入记录列表
export function getCandidateRecordsList(values) {
    return dispatch => {
        return getCandidateRecordsUitl(values).then(data => {
            dispatch({
                type: types.CANDIDATE_RECORD_LIST,
                candidateRecordList: data
            })
            return data;
        }).catch(err => {
            throw err;
        });
    };
}
//获取导入失败记录列表(候选人管理)
export function getFailCandidateRecordsList(values) {
    return dispatch => {
        return getFailCandidateRecordsUitl(values).then(data => {
            dispatch({
                type: types.CANDIDATE_FAIL_RECORD_LIST,
                candidateFailRecordList: data
            })
            return data;
        }).catch(err => {
            throw err;
        });
    };
}

//获取职位列表
export function getSimpleList(values) {
    return dispatch => {
        return getSimplePositions(values).then(data => {
            dispatch({
                type: types.SIMPLE_LIST,
                simpleList: data
            })
            // dispatch(change('new_candidate_form', 'total_count', data.total_count));
            return data;
        }).catch(err => {
            throw err;
        });
    };
}


export function getPositionAction(values) { //获取职位详情
    return dispatch => {
        dispatch({ type: 'MASK_SHOW', maskShow: true })
        return getPosition(values).then(data => {
            dispatch({ type: 'MASK_SHOW', maskShow: false })
            dispatch({
                type: types.POSITION_DETAIL,
                pstDetail: data,
                afterOnboardRatios: data.reward_setting ? data.reward_setting.after_onboard_ratios : []
            })
            dispatch(reloadPositionDetail(true));
            return data;
        }).catch(err => {
            throw err;
        });
    };
}

export function clearPositionDetail() { //制空职位详情
    return dispatch => {
        dispatch({
            type: types.POSITION_DETAIL,
            pstDetail: {},
            afterOnboardRatios: []
        })
    };
}


export function reloadPositionDetail(value) { //是否重新加载职位详情
    return dispatch => {
        dispatch({
            type: types.RELOAD_POSITION_DETAIL,
            reloadPositionDetailStatus: value
        })
    };
}
export function cleanPositionList() {//清空职位列表
    return {
        type: types.POSITION_LIST,
        pstList: []
    }
}
export function getPositionsAction(values) { //获取职位列表
    return dispatch => {
        return getPositions(values)
            .then(data => {
                dispatch({
                    type: types.POSITION_LIST,
                    pstList: data
                })
                dispatch(change('hiring_search_form', 'total_count', data.total_count));
                dispatch(change('recruit_search_form', 'total_count', data.total_count));
                dispatch(change('settlement_setting_search_form', 'total_count', data.total_count));
            })
            .catch(err => {
                throw err;
            });
    };
}
// 获取客户名称（职位）
export function getPositionsCustomerAction() { //获取职位列表
    return dispatch => {
        return getPositionsCustomer()
            .then(data => {
                dispatch({
                    type: types.POSITION_CUSTOMER_LIST,
                    positionsCustomerList: data
                })
            })
            .catch(err => {
                throw err;
            });
    };
}

export function addPositionsAction(values) { //添加职位
    return dispatch => {
        dispatch({ type: 'MASK_SHOW', maskShow: true })
        return addPositions(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    // message.error(data.message);
                    dispatch({
                        type: types.ADD_POSITION,
                        addPst: data,
                        add_failed: 'failed'
                    });
                    notification.open({
                        message: '错误',
                        description: data.message,
                        icon: <NotificationIcon type='error' />,
                    });
                } else {
                    dispatch({
                        type: types.ADD_POSITION,
                        addPst: data,
                        add_failed: 'success'
                    });
                    dispatch(change('addPosition', 'current', 4))
                    dispatch(getPositionsAction('?limit=10&offset=0&status=active&view=published'));
                }

                dispatch({ type: 'MASK_SHOW', maskShow: false })
            })
            .catch(err => {
                throw err;
            });
    };
}

export function cleanAddPosition() {
    return {
        type: types.ADD_POSITION,
        add_failed: 'init'
    }
}

export function updateBasicAction(values) { //更新基本信息
    return dispatch => {
        return updatePositionBasic(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    message.error(data.message);
                } else {
                    message.success("更新成功", 2);
                    dispatch({
                        type: types.UPDATE_INFO,
                        updateInfo: data
                    });
                    dispatch(getPositionAction(values.id));
                }
                return data;
            })
            .catch(err => {
                throw err;
            });
    };
}

export function updateRequirementAction(values) { //更新职位要求
    return dispatch => {
        return updatePositionRequirement(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    message.error(data.message)
                } else {
                    message.success("更新成功", 2);
                    dispatch({
                        type: types.UPDATE_REQUIRE,
                        updateRequire: data
                    });
                    dispatch(change('positionDetail', 'showEditRequire', false))
                    dispatch(getPositionAction(values.id));
                }
            })
            .catch(err => {
                throw err;
            });
    };
}

export function updateInterviewAction(values) { //更新面试安排
    return dispatch => {
        return updatePositionInterview(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    message.error(data.message);
                } else {
                    message.success("更新成功", 2)
                    dispatch({
                        type: types.UPDATE_INTERVIEW,
                        updateInterview: data
                    });
                    dispatch(getPositionAction(values.id));
                }
            })
            .catch(err => {
                throw err;
            });
    };
}

export function positionDown(values) { //下线职位
    return dispatch => {
        return updatePositionDown(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    message.error(data.message);
                } else {
                    dispatch(change('search_offline_from', 'showModal', false))
                    message.success('操作成功');
                    dispatch({
                        type: types.POSITION_DOWN,
                        positionDown: data
                    });
                    if (values.action && values.action == "enable") {
                        dispatch(getPositionsAction('?limit=10&offset=0&status=inactive&view=published'));
                    } else {
                        dispatch(getPositionsAction('?limit=10&offset=0&status=active&view=published'));
                        dispatch(change('recruitForm', 'page', 1));
                    }
                }
            })
            .catch(err => {
                throw err;
            });
    };
}

export function recruiterPositionsList(values) { //同事招聘列表
    return dispatch => {
        return getRecruiterPositions(values)
            .then(data => {
                dispatch({
                    type: types.RECRUIT_LIST,
                    recruitList: data
                });
            })
            .catch(err => {
                throw err;
            });
    };
}

export function setRecruiter(values) { //设置同事招聘
    return dispatch => {
        dispatch({ type: 'MASK_SHOW', maskShow: true })
        return setRecruiterPositions(values)
            .then(data => {
                dispatch({ type: 'MASK_SHOW', maskShow: false })
                if (data.code && data.code >= 300) {
                    notification.open({
                        message: '错误',
                        description: '操作失败,' + data.message,
                        icon: <NotificationIcon type='error' />,
                    });
                } else {
                    dispatch(getPositionAction(values.id));
                    dispatch(change('recruitForm', 'isShowHiring', false));
                    dispatch(change('positionDetail', 'isShowHiring', false));
                    notification.open({
                        message: '成功',
                        description: '操作成功',
                        icon: <NotificationIcon type='success' />,
                    })
                }
            })
            .catch(err => {
                throw err;
            });
    };
}

export function getRewardDetail(values) { //获取悬赏详情
    return dispatch => {
        return getRewardSetting(values)
            .then(data => {
                dispatch({
                    type: types.GET_REWARD,
                    getReward: data
                });
            })
            .catch(err => {
                throw err;
            });
    };
}

export function setReward(values) { //设置悬赏
    return dispatch => {
        return setPositionReward(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    message.error(data.message);
                } else {
                    message.success('设置成功');
                    dispatch({
                        type: types.SET_REWARD,
                        setReward: data
                    });
                    dispatch(getPositionsAction('?limit=10&offset=0&status=active&view=published'));
                    dispatch(getPositionAction(values.id));
                    dispatch(change('recruitForm', 'page', 1));
                }
                return data;
            })
            .catch(err => {
                throw err;
            });
    };
}

export function getQuestionsAction(values) { //列表面试题
    return dispatch => {
        return getQuestions(values)
            .then(data => {
                data.id = values.id;
                dispatch({
                    type: types.GET_QUESTION,
                    getQuestion: data
                });
            })
            .catch(err => {
                throw err;
            });
    };
}

export function addQuestionsAction(values) { //智能筛选
    return dispatch => {
        return addQuestions(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    message.error(data.message);
                } else {
                    message.success('操作成功');
                    dispatch({
                        type: types.ADD_QUESTION,
                        addQuestion: data
                    });
                    dispatch(cleanQuestions())
                }
            })
            .catch(err => {
                throw err;
            });
    };
}

export function buildEWMAction(values) { //生产二维码
    return dispatch => {
        return buildEWM(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    message.error(data.message);
                } else {
                    message.success('操作成功');
                    dispatch({
                        type: types.ADD_EWM,
                        addEWMValue: data
                    });

                }
            })
    }
}

export function delQuestionsAction(values) { //删除面试题
    return dispatch => {
        return deleteQuestion(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    message.error(data.message);
                } else {
                    message.success('删除成功');
                    dispatch({
                        type: types.DEL_QUESTION,
                        delQuestion: data
                    });
                }
            })
            .catch(err => {
                throw err;
            });
    };
}

export function getCandidatesList(values) { //候选人列表
    return dispatch => {
        return getCandidates(values)
            .then(data => {
                dispatch({
                    type: types.GET_CANDIDATE,
                    getCandidate: data
                });
                dispatch(change('new_candidate_form', 'total_count', data.total_count));
                return data;
            })
            .catch(err => {
                throw err;
            });
    };
}

export function cleanCandidatesList(values) { //清除候选人列表
    return dispatch => {
        return dispatch({
            type: types.GET_CANDIDATE,
            getCandidate: {}
        });
    };
}

export function getCandidatesCount(values) {//候选人统计
    return dispatch => {
        return countCandidates(values)
            .then(data => {
                dispatch({
                    type: types.GET_CANDIDATE_COUNT,
                    countCandidates: data
                });
            })
            .catch(err => {
                throw err;
            });
    };
}

export function cleanCandidatesDetAction(values) { //清除候选人详情
    return dispatch => {
        return dispatch({
            type: types.GET_CANDIDATE_DET,
            getCandidateDet: {}
        });
    };
}

export function getCandidatesDetAction(values) { //候选人详情
    return dispatch => {
        return getCandidatesDetail(values)
            .then(data => {
                dispatch({
                    type: types.GET_CANDIDATE_DET,
                    getCandidateDet: data
                });
                return data
            })
            .catch(err => {
                throw err;
            });
    };
}

export function enterInterview(values) { //候选人进入面试
    return dispatch => {
        return candidatesInterview(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    notification.open({
                        message: '错误',
                        description: '操作失败,' + data.message,
                        icon: <NotificationIcon type='error' />,
                    });
                } else {
                    notification.open({
                        message: '成功',
                        description: '操作成功',
                        icon: <NotificationIcon type='success' />,
                    });
                    dispatch(change('candidate_from', 'showInvalidInterview', false))
                    dispatch(submit('new_candidate_form'));
                }
            })
            .catch(err => {
                throw err;
            });
    };
}

// 候选人批量进入待面试
export function bathEnterInterview(values) {
    return dispatch => {
        return candidatesBathInterview(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    notification.open({
                        message: '错误',
                        description: '操作失败,' + data.message,
                        icon: <NotificationIcon type='error' />,
                    });
                } else {
                    notification.open({
                        message: '成功',
                        description: '操作成功',
                        icon: <NotificationIcon type='success' />,
                    });
                    dispatch(change('candidate_from', 'showMoveAction', false))
                    dispatch(submit('new_candidate_form'));
                }
            })
            .catch(err => {
                throw err;
            });
    };
}

export function enterCheckup(values) { //候选人进入体检
    return dispatch => {
        return candidatesCheckup(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    notification.open({
                        message: '错误',
                        description: '操作失败,' + data.message,
                        icon: <NotificationIcon type='error' />,
                    });
                } else {
                    notification.open({
                        message: '成功',
                        description: '该候选人已进入待体检，请在待体检列表查看',
                        icon: <NotificationIcon type='success' />,
                    });
                    dispatch(submit('new_candidate_form'));
                }
                return data
            }).catch(err => {
                throw err;
            });
    };
}

export function enterOnboard(values) { //候选人:进入待入职
    return dispatch => {
        return candidatesOnboard(values).then(data => {
            if (data.code && data.code >= 300) {
                notification.open({
                    message: '错误',
                    description: '操作失败,' + data.message,
                    icon: <NotificationIcon type='error' />,
                });
            } else {
                notification.open({
                    message: '成功',
                    description: '该候选人已进入待入职，请在待入职列表查看',
                    icon: <NotificationIcon type='success' />,
                });
                dispatch(submit('new_candidate_form'));
            }
        }).catch(err => {
            throw err;
        });
    };
}


export function batchEnterOnboard(values) { //候选人:批量进入待入职
    return dispatch => {
        return batchEnterOnboardUtil(values).then(data => {
            if (data.code && data.code >= 300) {
                notification.open({
                    message: '错误',
                    description: '操作失败,' + data.message,
                    icon: <NotificationIcon type='error' />,
                });
            } else if (data.onboard_failed_lists && data.onboard_failed_lists.length > 0) {
                notification.open({
                    message: '错误',
                    description: data.onboard_failed_lists.join(',') + '数据重复或数据已存在，请重试。',
                    icon: <NotificationIcon type='error' />,
                });
                dispatch(submit('new_candidate_form'));
            } else {
                notification.open({
                    message: '成功',
                    description: '数据正在处理，请稍后到待入职中查看',
                    icon: <NotificationIcon type='success' />,
                });
                dispatch(submit('new_candidate_form'));
            }
            return data
        }).catch(err => {
            throw err;
        });
    };
}

export function confirmOnboard(values) { //候选人进入待入职
    return dispatch => {
        return doConfirmOnboard(values)
            .then(data => {
                if (data && data.code >= 300) {
                    message.error(data.message);
                    throw new SubmissionError({ _error: data.message })
                } else {
                    // dispatch(getCandidatesList('?limit=100&offset=0&status='+values.status));
                    dispatch(submit('search_list_candidate'));
                    dispatch(cleanCandidatesDetAction());
                }
            })
            .catch(err => {
                throw err;
            });
    };
}

export function candidatesAbnormalAction(values) { //异常终结操作
    return dispatch => {
        return candidatesAbnormal(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    notification.open({
                        message: '错误',
                        description: '处理失败,' + data.message,
                        icon: <NotificationIcon type='error' />,
                    });
                } else {
                    notification.open({
                        message: '成功',
                        description: '处理成功',
                        icon: <NotificationIcon type='success' />,
                    });
                    dispatch(change('candidate_from', 'showAbandonJoin', false));
                    dispatch(submit('new_candidate_form'));
                }
            })
            .catch(err => {
                throw err;
            });
    };
}

export function candidatesSwitchPosition(values) { //推荐到其他职位
    return dispatch => {
        return candidatesSwitchPost(values)
            .then(data => {
                if (data && data.code >= 300) {
                    message.error(data.message);
                } else {
                    message.success('推荐成功');
                    dispatch({
                        type: types.SWITCH_POSITION,
                        switchPosition: data
                    });
                }
            })
            .catch(err => {
                throw err;
            });
    };
}

export function editUpdateResumeAction(values) { //修改简历基本信息
    return dispatch => {
        return editUpdateResume(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    notification.open({
                        message: '错误',
                        description: '修改失败',
                        icon: <NotificationIcon type='error' />,
                    });
                } else {
                    notification.open({
                        message: '成功',
                        description: '修改成功',
                        icon: <NotificationIcon type='success' />,
                    });
                    dispatch(getCandidatesDetAction(values));
                    return data
                }
            })
            .catch(err => {
                throw err;
            });
    };
}



export function loadRecruitPerfs(offset, limit, recruiter_id, position, start_join_date, end_join_date, keysearch, customer_id) {  //加载业绩列表
    return dispatch => {
        // if(start_join_date!=''&&end_join_date!=''){
        //   let start_join_date = moment(start_join_date).unix();
        //   let end_join_date = moment(end_join_date).unix();
        // }
        return getRecruitPerfs(offset, limit, recruiter_id, position, start_join_date, end_join_date, keysearch, customer_id)
            .then(data => {
                dispatch({
                    type: types.RECRUIT_PERFS_LIST,
                    recruitPerfs: data
                })
            })
            .catch(err => {
                throw err;
            });
    };
}



export function loadResumes(values) {//简历列表
    return dispatch => {
        return getResumes(values)
            .then(data => {
                const { total_count = 0 } = data;
                dispatch({
                    type: types.LOAD_RESUMES,
                    resumes: data
                })

                dispatch(change('resumes_container_search', 'total_count', total_count));
            })
            .catch(err => {
                throw err;
            });
    };
}

// 简历搜索参数
export function getResumesSearchParmas(params) {
    return dispatch => {
        if (params) {
            let obj = {}
            const paramsArr = params.split('&')
            paramsArr.map((item, index) => {
                let arr = item.split('=')
                if ((arr[0] != 'limit') && (arr[0] != 'offset')) {
                    obj[arr[0]] = arr[1]
                }
            })
            dispatch({
                type: types.LOAD_RESUMES_SEARCH_PARAMS,
                filterParams: obj
            })
        }

    };
}

export function loadResume(id) {//简历详情
    return dispatch => {
        return getResume(id)
            .then(data => {
                dispatch({
                    type: types.LOAD_RESUME,
                    resume: data
                })
            })
            .catch(err => {
                throw err;
            });
    };
}

export function importResumeAct(values) {//导入简历(execl导入)
    return dispatch => {
        dispatch({ type: 'MASK_SHOW', maskShow: true })
        return importResume(values)
            .then(data => {
                dispatch({ type: 'MASK_SHOW', maskShow: false });
                if (data.code && data.code >= 300) {
                    dispatch({
                        type: types.IMPORT_RESUME,
                        import_resume: 'failed',
                        messageAll: data.message
                    })
                } else {
                    if (data.errors && data.errors != '[]') {
                        let messageArr = [];
                        const newMessage = JSON.parse(data.errors);
                        newMessage.map(data => {
                            messageArr.push(data.message);
                        });
                        dispatch({
                            type: types.IMPORT_RESUME,
                            import_resume: 'failed',
                            messageAll: messageArr.join(',')
                        })
                    } else {
                        dispatch(change('resume_form', 'current', 1))
                        dispatch({
                            type: types.IMPORT_RESUME,
                            import_resume: 'success'
                        })
                    }

                }

            })
            .catch(err => {
                throw err;
            });
    };
}

export function cleanImportResume() {
    return dispatch => {
        dispatch({
            type: types.IMPORT_RESUME,
            import_resume: 'init',
            messageAll: ''
        })
    };
}



export function extractResumeAct(values) {//简历批量解析
    return dispatch => {
        dispatch(startAnalyze()) // 开始上传的时候，将提交按钮disabled
        return extractResume(values)
            .then(data => {
                dispatch(cleanAnalyze())
                if (data.code && data.code >= 300) {
                    // message.error('简历格式无效,文件模板只支持word或pdf(后缀分别为docx,doc,pdf)')
                    message.error(data && data.message)
                } else {
                    const { source = '' } = values;
                    dispatch(getResumeNumAct(`?permission=${values.permission}`))
                    dispatch(loadResumes(`limit=10&offset=0&permission=${values.permission}`))
                    if (source == 'candidate') {
                        dispatch(change('candidate_from', 'showAnalyze', false))
                        dispatch(change('candidate_from', 'showSuccessTip', true))
                    }
                    if (source == 'resume') {
                        dispatch(change('resumes_container', 'showAnalysisResumes', false))
                        dispatch(change('resumes_container', 'showSuccessTip', true))
                    }
                    // notification.open({
                    //     message: '成功',
                    //     description: '解析需要一定的时间在此期间您可关闭此页面并在解析历史中进行查看',
                    //     icon: <NotificationIcon type='success' />,
                    // })
                }
            })
            .catch(err => {
                dispatch(cleanAnalyze())
                throw err
            });
    };
}

export function getStatusResumeAct(values) {//简历状态列表
    return dispatch => {
        return getStatusResume(values)
            .then(data => {
                const { items = [] } = data;
                let paths = {};
                items.map(item => {
                    paths[item.object_path] = item.status;
                })
                dispatch({
                    type: types.STATUS_RESUME_LIST,
                    statusResumeList: paths
                })
            })
            .catch(err => {
                throw err;
            });
    };
}

export function analyzeResumeHistoryAct(values) {//简历解析历史
    return dispatch => {
        return analyzeResumeHistory(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    message.error(data && data.message)
                } else {
                    const { total_count = '' } = data;
                    dispatch({
                        type: types.HISTORY_RESUME_LIST,
                        historyResumeList: data
                    })
                    dispatch(change('analyzeResumeHistory_from', 'total_count', total_count));

                }
            })
            .catch(err => {
                throw err;
            });
    };
}
export function analyzeResumeHistoryBatchListAct(values) {//简历解析历史批次列表
    return dispatch => {
        return analyzeResumeHistoryBatchList(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    message.error(data && data.message)
                } else {
                    const { total_count = '' } = data;
                    dispatch({
                        type: types.HISTORY_RESUME_LIST,
                        historyResumeList: data
                    })
                    dispatch(change('analyzeResumeHistory_from', 'total_count', total_count));

                }
            })
            .catch(err => {
                throw err;
            });
    };
}
export function analyzeResumeHistoryBatchDetailAct(values) {//简历解析历史批次详情（简历解析历史列表）
    return dispatch => {
        return analyzeResumeHistoryBatchDetail(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    message.error(data && data.message)
                } else {
                    const { total_count = '' } = data;
                    dispatch({
                        type: types.HISTORY_RESUME_LIST,
                        historyResumeList: data
                    })
                    dispatch(change('analyzeResumeHistoryDetail_from', 'total_count', total_count));

                }
            })
            .catch(err => {
                throw err;
            });
    };
}
export function cleanAnalyze() {
    return {
        type: types.START_ANALYZE,
        startAnalyze: false
    }
}
export function startAnalyze() {
    return {
        type: types.START_ANALYZE,
        startAnalyze: true
    }
}
export function loadRewards(params) {//获取赏金管理列表
    return dispatch => {
        return getRewards(params)
            .then(data => {
                dispatch({
                    type: types.LOAD_REWARDS,
                    rewards: data
                })
            })
            .catch(err => {
                throw err;
            });
    };
}


export function loadReward(id) {//获取奖金详情
    return dispatch => {
        return getReward(id)
            .then(data => {
                dispatch({
                    type: types.LOAD_REWARD,
                    reward: data
                })
            })
            .catch(err => {
                throw err;
            });
    };
}

export function loadRewardItems(id) {//赏金条目历史
    return dispatch => {
        return getRewardItems(id)
            .then(data => {
                dispatch({
                    type: types.LOAD_REWARD_ITEMS,
                    rewardItems: data
                })
            })
            .catch(err => {
                throw err;
            });
    };
}

export function loadRewardStats() {//获取赏金总统计情况
    return dispatch => {
        return getRewardStats()
            .then(data => {
                dispatch({
                    type: types.LOAD_REWARD_STATS,
                    rewardStats: data
                })
            })
            .catch(err => {
                throw err;
            });
    };
}

export function payReward(params) {//确认打款
    const { id } = params;
    const money = parseFloat(params.amount);
    const amount = { amount: money };
    return dispatch => {
        return pay_Reward(id, amount)
            .then(data => {
                if (data.code == 200) {
                    message.success("发放成功", 1, () => {
                        dispatch(loadRewardStats());
                        dispatch(loadRewards());
                    })
                } else {
                    message.error(data.message, 1)
                }
            }

            )
            .catch(err => {
                throw err;
            });
    };
}

//获取面试联系人列表
export function loadInterviewContact(interviewer_id, status) {
    return dispatch => {
        return getInterviewContact(interviewer_id, status)
            .then(data => {
                const { items, total_count } = data;
                dispatch({
                    type: types.LOAD_INTERVIEW_CONTACT,
                    interviewContactList: items,
                    interviewContactListCount: total_count
                })
            })
            .catch(err => {
                throw err;
            });
    };
}
//获取面试候选人列表
export function loadInterviewCandidates(id) {
    return dispatch => {
        return getInterviewCandidates(id)
            .then(data => {
                const { items, total_count } = data;
                dispatch({
                    type: types.LOAD_INTERVIEW_CANDIDATES,
                    interviewCandidatesList: items,
                    interviewCandidatesListCount: total_count
                })
            })
            .catch(err => {
                throw err;
            });
    };
}

//修改面试日程
export function changeInterviewSchedule(params) {
    return dispatch => {
        return updateInterviewSchedule(params)
            .then(data => {
                if (data.code == 200) {
                    message.success('修改成功', 2);
                    dispatch(cleanInterviewCandidate());
                } else {
                    message.error(data.message, 2);
                    throw new SubmissionError({ _error: data.message });

                }

            })
            .catch(err => {
                throw err;
            });
    };
}

//清空候选人列表

export function cleanInterviewCandidate() {
    return dispatch => {
        dispatch({
            type: types.LOAD_INTERVIEW_CANDIDATES,
            interviewCandidatesList: [],
            interviewCandidatesListCount: 0
        })
    }
}

//统计简历数
export function getResumeNumAct(params) {
    return dispatch => {
        return getResumeNum(params)
            .then(data => {
                dispatch({
                    type: types.RESUME_NUM,
                    resumeNum: data,
                })
            })
            .catch(err => {
                throw err;
            });
    };
}

//清除统计简历数
export function cleanResumeNumAct(params) {
    return dispatch => {
        dispatch({
            type: types.RESUME_NUM,
            resumeNum: {},
        })
    }
}

//招聘统计数据(在招)
export function getRecruitNumAct() {
    return dispatch => {
        return getRecruitNum()
            .then(data => {
                dispatch({
                    type: types.RECRUIT_NUM,
                    recruitNum: data,
                })
            })
            .catch(err => {
                throw err;
            });
    };
}

//招聘统计数据(我管理的招聘)
export function getManageRecruitNumAct() {
    return dispatch => {
        return geManageRecruitNum()
            .then(data => {
                dispatch({
                    type: types.RECRUIT_MANAGE_NUM,
                    recruitManageNum: data,
                })
            })
            .catch(err => {
                throw err;
            });
    };
}
export function setProviderRecruitAct(values) { //委托给供应商
    return dispatch => {
        return setProviderRecruit(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    message.error(data.message);
                } else {
                    if (data.errors && data.errors != '[]') {
                        message.error(data.errors);
                    } else {
                        message.success('委托成功');
                    }
                }
            })
            .catch(err => {
                throw err;
            });
    };
}

// 招聘 经纪人设置
// 获取
export function getBrokersSettingAct(positionId) {
    return dispatch => {
        return getBrokersSetting(positionId)
            .then(data => {
                dispatch({
                    type: types.GET_BROKERS_SETTING,
                    brokersData: data,
                })
                return data
            })
            .catch(err => {
                throw err;
            });
    }
}
// 设置
export function setBrokersSettingAct(params) {
    return dispatch => {
        return setBrokersSetting(params).then(data => {
            if (data.code && data.code >= 300) {
                notification.open({
                    message: '错误',
                    description: '设置失败,' + data.message,
                    icon: <NotificationIcon type='error' />,
                });
            } else {
                notification.open({
                    message: '成功',
                    description: '设置成功',
                    icon: <NotificationIcon type='success' />,
                });
                dispatch(getPositionsAction('?limit=10&offset=0&status=active&view=published'));
                // dispatch(getPositionAction(values.id));
                dispatch(change('recruitForm', 'page', 1));
            }
            return data
        })
            .catch(err => {
                throw err;
            });
    }
}

export function setProviderListAct(values) { //职位委托供应商列表
    return dispatch => {
        return setProviderList(values)
            .then(data => {
                dispatch({
                    type: types.PROVIDER_RECRUIT,
                    providerRecruit: data
                });
                dispatch(changeProviderNeedLoad(true))
            })
            .catch(err => {
                throw err;
            });
    };
}

export function changeProviderNeedLoad(value) {
    return dispatch => {
        dispatch({
            type: types.CHANGE_PROVIDER_NEED_LOAD,
            providerNeedLoad: value
        })
    }
}

export function resumeRecommendAct(values) { //简历 推荐职位
    return dispatch => {
        return resumeRecommend(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    notification.open({
                        message: '错误',
                        description: `推荐应聘失败，${data.message}`,
                        icon: <NotificationIcon type='error' />,
                    });
                    dispatch({
                        type: types.RESUME_RECOMMEND,
                        is_recommend: 'failed'
                    });
                } else {
                    notification.open({
                        message: '成功',
                        description: '推荐应聘成功',
                        icon: <NotificationIcon type='success' />,
                    })
                    dispatch({
                        type: types.RESUME_RECOMMEND,
                        is_recommend: 'success'
                    });
                    return data
                }
            })
            .catch(err => {
                throw err;
            });
    };
}

export function candidateRecommendAct(values) { //候选人 推荐职位
    return dispatch => {
        return candidateRecommend(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    message.error(data.message);
                    dispatch({
                        type: types.RESUME_RECOMMEND,
                        is_recommend: 'failed'
                    });
                } else {
                    message.success('推荐成功');
                    dispatch({
                        type: types.RESUME_RECOMMEND,
                        is_recommend: 'success'
                    });
                }
            })
            .catch(err => {
                throw err;
            });
    };
}

export function cleanISresume() {
    return {
        type: types.RESUME_RECOMMEND,
        is_recommend: 'init'
    }
}

// 职位测评设置
// 获取测评状态
export function getEvaluteSettingAct(positionId) {
    return dispatch => {
        return getEvaluteSetting(positionId)
            .then(data => {
                if (data.code && data.code >= 300) {
                    notification.open({
                        message: '错误',
                        description: '设置失败,' + data.message,
                        icon: <NotificationIcon type='error' />,
                    });
                } else {
                    if (data) {
                        return data
                    }
                }
            })
            .catch(err => {
                throw err;
            });
    }
}
// 设置测评状态
export function setEvaluteSettingAct(params) {
    return dispatch => {
        return setEvaluteSetting(params).then(data => {
            if (data.code && data.code >= 300) {
                notification.open({
                    message: '错误',
                    description: '设置失败,' + data.message,
                    icon: <NotificationIcon type='error' />,
                });
                dispatch(change("recruitForm", "errorLock", true))
            } else {
                notification.open({
                    message: '成功',
                    description: '设置成功',
                    icon: <NotificationIcon type='success' />,
                });
                dispatch(getPositionsAction('?limit=10&offset=0&status=active&view=published'));
                // dispatch(getPositionAction(values.id));
                dispatch(change('recruitForm', 'page', 1));
            }
            return data
        })
            .catch(err => {
                throw err;
            });
    }
}

export function importCandidates(values) { //导入候选人+待入职
    return dispatch => {
        dispatch({ type: 'MASK_SHOW', maskShow: true });
        return insertCandidates(values)
            .then(data => {
                dispatch({ type: 'MASK_SHOW', maskShow: false });
                const errors = data.errors;
                if (data && data.code >= 300) {
                    const error = [{ 'message': data.message }];
                    const message = JSON.stringify(error);
                    throw new SubmissionError({ _error: message });
                }
                if (data && JSON.parse(errors).length > 0) {
                    throw new SubmissionError({ _error: errors });
                }
            })
            .catch(err => {
                dispatch({ type: 'MASK_SHOW', maskShow: false });
                throw err;
            });
    };
}

// 导出候选人
export function exportCandidateAction(parmas) {
    return dispatch => {
        return downloadCandidate(parmas).then(data => {
            if (data.download_path) {
                notification.open({
                    message: '成功',
                    description: '数据导出成功',
                    icon: <NotificationIcon type='success' />,
                });
                downloadFileByUrl(data.download_path)
            } else {
                notification.open({
                    message: '错误',
                    description: '数据导出失败,' + data.message,
                    icon: <NotificationIcon type='error' />,
                });
            }
        }).catch(err => { throw err; })
    }
}

//简历库添加备注

export function addComment(values) {
    return dispatch => {
        return add_comment(values)
            .then(data => {
                if (data && data.code >= 300) {
                    notification.open({
                        message: '错误',
                        description: '添加跟进失败,' + data.message,
                        icon: <NotificationIcon type='error' />,
                    });
                } else {
                    notification.open({
                        message: '成功',
                        description: '添加跟进成功',
                        icon: <NotificationIcon type='success' />,
                    });
                    dispatch(change('resumes_container', 'showComment', false))
                    dispatch(submit('resumes_container_search'))
                    dispatch(getResumeNumAct(`?permission=${values.permission}`))
                }
                return data;
            })
            .catch(err => {
                throw err;
            });
    };
}

//候选人添加备注

export function addCandidateComment(values) {
    return dispatch => {
        return add_CandidateComment(values).then(data => {
            if (data.code && data.code >= 300) {
                notification.open({
                    message: '错误',
                    description: '添加跟进失败,' + data.message,
                    icon: <NotificationIcon type='error' />,
                });
            } else {
                notification.open({
                    message: '成功',
                    description: '添加跟进成功',
                    icon: <NotificationIcon type='success' />,
                });
                dispatch(submit('new_candidate_form'));
            }
        }).catch(err => {
            throw err;
        });
    };
}

//智能解析候选人简历

export function analyzeCandidateResume(values) {
    return dispatch => {
        return analyze_CandidateResume(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    notification.open({
                        message: '错误',
                        description: '简历解析失败,' + data.message,
                        icon: <NotificationIcon type='error' />,
                    });
                    dispatch(change('candidate_from', 'showAnalyze', true));
                } else {
                    // notification.open({
                    //     message: '成功',
                    //     description: '简历解析成功',
                    //     icon: <NotificationIcon type='success' />,
                    // });
                    dispatch(change('candidate_from', 'showAnalyze', false));
                    dispatch(change('candidate_from', 'showSuccessTip', true));
                    dispatch(submit('new_candidate_form'));
                }
                return data
            }).catch(err => {
                throw err;
            });
    };
}



//获取邮箱列表
export function getResumeEmailAct(values) {
    return dispatch => {
        return getResumeEmail(values)
            .then(data => {
                dispatch({
                    type: types.EMAIL_LIST,
                    emailList: data
                })
            })
            .catch(err => {
                throw err;
            });
    };
}

//添加简历邮箱
export function addResumeEmailAct(values) {
    return dispatch => {
        return addResumeEmail(values)
            .then(data => {
                if (data.code && data.code >= 300) {
                    message.error(data.message);
                } else {
                    dispatch({
                        type: types.ADD_EMAIL,
                        addEmail: data
                    });
                    dispatch(getResumeEmailAct());
                }
            })
            .catch(err => {
                throw err;
            });
    };
}

//删除已设置的简历邮箱
export function delResumeEmailAct(values) {
    return dispatch => {
        return delResumeEmail(values)
            .then(data => {
                dispatch(getResumeEmailAct());
            })
            .catch(err => {
                throw err;
            });
    };
}

//更新简历
export function editResumeAction(values) {
    return dispatch => {
        return editResume(values)
            .then(data => {
                if (data.code && data.code > 300) {
                    notification.open({
                        message: '错误',
                        description: '更新失败，' + data.message,
                        icon: <NotificationIcon type='error' />,
                    })
                } else {
                    notification.open({
                        message: '成功',
                        description: '更新成功',
                        icon: <NotificationIcon type='success' />,
                    })
                    dispatch(loadResume(values.id));
                }
                return data
            })
            .catch(err => {
                throw err
            });
    };
}

//更新期望岗位
export function editExpectJobAction(values) {
    return dispatch => {
        return editResume(values)
            .then(data => {
                if (data.code && data.code > 300) {
                    notification.open({
                        message: '错误',
                        description: '更新失败，' + data.message,
                        icon: <NotificationIcon type='error' />,
                    })
                } else {
                    notification.open({
                        message: '成功',
                        description: '更新成功',
                        icon: <NotificationIcon type='success' />,
                    })
                    dispatch(change('resumes_container', 'showEditExpectJob', false))
                    dispatch(submit('resumes_container_search'))
                    dispatch(getResumeNumAct(`?permission=${values.permission}`))
                }
                return data;
            })
            .catch(err => {
                throw err;
            });
    };
}

//批量更新期望岗位
export function editMoreExpectJobAction(values) {
    return dispatch => {
        dispatch({ type: 'MASK_SHOW', maskShow: true })
        return editMoreResume(values)
            .then(data => {
                dispatch({ type: 'MASK_SHOW', maskShow: false })
                if (data.code && data.code > 300) {
                    notification.open({
                        message: '错误',
                        description: '更新失败，' + data.message,
                        icon: <NotificationIcon type='error' />,
                    })
                } else {
                    notification.open({
                        message: '成功',
                        description: '更新成功',
                        icon: <NotificationIcon type='success' />,
                    })
                    dispatch(change('resumes_container', 'showEditExpectJob', false))
                    dispatch(change('resumes_container', 'selectedRowKeys', []))
                    dispatch(submit('resumes_container_search'))
                    dispatch(getResumeNumAct(`?permission=${values.permission}`))
                }
            })
            .catch(err => {
                throw err
            });
    };
}

// 分配个人
export function resumeAllocateAction(values) {
    return dispatch => {
        return resumeAllocate(values)
            .then(data => {
                if (data.code && data.code > 300) {
                    notification.open({
                        message: '错误',
                        description: `操作失败 ${data.message}`,
                        icon: <NotificationIcon type='error' />,
                    });
                } else {
                    dispatch(change('resumes_container', 'showToOtherPerson', false))
                    dispatch(change('resumes_container', 'selectedRowKeys', []))
                    dispatch(submit('resumes_container_search'))
                    dispatch(getResumeNumAct(`?permission=${values.permission}`))
                    notification.open({
                        message: '成功',
                        description: '操作成功',
                        icon: <NotificationIcon type='success' />,
                    })
                }
            })
            .catch(err => {
                throw err
            });
    };
}

// 转入公海，，转入他人
export function resumeTransferOutAction(values) {
    return dispatch => {
        return resumeTransferOut(values)
            .then(data => {
                if (data.code && data.code > 300) {
                    notification.open({
                        message: '错误',
                        description: `操作失败 ${data.message}`,
                        icon: <NotificationIcon type='error' />,
                    });
                } else {
                    dispatch(change('resumes_container', 'selectedRowKeys', []))
                    dispatch(change('resumes_container', 'showToOtherPerson', false))
                    dispatch(change('resumes_container', 'showToMorePublicResumes', false))
                    dispatch(submit('resumes_container_search'))
                    dispatch(getResumeNumAct(`?permission=${values.permission}`))
                    notification.open({
                        message: '成功',
                        description: '操作成功',
                        icon: <NotificationIcon type='success' />,
                    })
                }
            })
            .catch(err => {
                throw err
            });
    };
}

// 共享简历
export function shareResumeAction(values) {
    return dispatch => {
        return postShareResume(values)
            .then(data => {
                if (data.code && data.code > 300) {
                    notification.open({
                        message: '错误',
                        description: `操作失败 ${data.message}`,
                        icon: <NotificationIcon type='error' />,
                    })
                } else {
                    dispatch(submit('resumes_container_search'))
                    dispatch(change('resumes_container', 'selectedRowKeys', []))
                    dispatch(getResumeNumAct(`?permission=${values.permission}`))
                    notification.open({
                        message: '成功',
                        description: '操作成功',
                        icon: <NotificationIcon type='success' />,
                    })
                }
                return data
            })
            .catch(err => {
                throw err
            });
    };
}

//新增简历
export function createResumeAct(values) {
    return dispatch => {
        return createResume(values)
            .then(data => {
                if (data.code && data.code > 300) {
                    if (data.code == 409) {
                        message.error('该手机号创建的简历已存在，请重试');
                        throw new SubmissionError({ _error: data.message })
                        return false
                    }
                    message.error(data.message)
                    throw new SubmissionError({ _error: data.message })
                } else {
                    dispatch(getResumeNumAct(`?permission=${values.permission}`))
                    dispatch(loadResumes(`limit=10&offset=0&permission=${values.permission}`))
                    // 关闭新增简历 modal
                    dispatch(change('resumes_container', 'showCreateResumes', false))
                    dispatch(reset('resumes_container_search'))
                }
            })
            .catch(err => {
                throw err
            })
    }
}

//置顶职位
export function topPositionsAction(values) {
    return dispatch => {
        return topPositions(values)
            .then(data => {
                if (data.code && data.code > 300) {
                    message.error(data.message);
                } else {
                    dispatch(getPositionsAction('?limit=10&offset=0&status=active&view=published'));
                    dispatch(change('recruitForm', 'page', 1));
                }
            })
            .catch(err => {
                throw err;
            });
    };
}

//职位列表
export function loadPositionName(values) {
    return dispatch => {
        return getPositionName(values)
            .then(data => {
                const { categories = [] } = data;
                const postionNameOptions = [];
                if (categories && categories.length > 0) {
                    categories.map(function (item, index) {
                        item.isShow = 'none';
                        const temp_sub_categories = [{
                            'name': '全部',
                            'id': item.name,
                            'searchKey': 'job_category'
                        }]
                        item.sub_categories.map((sub, num) => {
                            temp_sub_categories.push({
                                'name': sub,
                                'id': sub,
                                'searchKey': 'except_job'
                            })
                            postionNameOptions.push({
                                'name': item.name + '/' + sub,
                                'id': sub
                            })
                        })
                        item.search_sub_categories = temp_sub_categories;
                    });

                }
                dispatch({
                    type: types.LOAD_POSITION_NAME,
                    postionNameList: categories,
                    postionNameOptions: postionNameOptions
                })
            })
            .catch(err => {
                throw err;
            });
    };
}

//职位列表筛选
export function loadPositionNameSerach() {
    return dispatch => {
        return getPositionNameSerach()
            .then(data => {
                const { categories = [] } = data;
                const postionNameOptions = []
                if (categories && categories.length > 0) {
                    categories.map(function (item, index) {
                        item.isShow = 'none';
                        const temp_sub_categories = [{
                            'name': '全部',
                            'id': item.name,
                            'searchKey': 'job_category'
                        }]
                        item.sub_categories.map((sub, num) => {
                            temp_sub_categories.push({
                                'name': sub,
                                'id': sub,
                                'searchKey': 'except_job'
                            })
                            postionNameOptions.push({
                                'name': item.name + '/' + sub,
                                'id': sub
                            })
                        })
                        item.search_sub_categories = temp_sub_categories;
                    });

                }
                dispatch({
                    type: types.LOAD_POSITION_NAME_SERACH,
                    postionNameListSerach: categories,
                })
            })
            .catch(err => {
                throw err;
            });
    };
}




export function updatePositionName(value) {
    return {
        type: types.LOAD_POSITION_NAME,
        postionNameList: value
    }
}

// 确认入职提交
export function submitCandidatesOnboardAction(params) {
    return dispatch => {
        return submitCandidatesOnboard(params)
            .then(data => {
                if (data.code && data.code >= 300) {
                    message.error(data.message)
                } else {
                    message.success('操作已成功，请稍后到在职列表中进行查看哦')
                    dispatch(submit('new_candidate_form'));
                    dispatch(change('candidate_from', 'showConfirmJoin', false));
                    dispatch(change('confirmJoin_modal_form', 'showConfirmJoinBol', false));
                }
            })
            .catch(err => {
                throw err;
            });
    };
}
//获取选择 创建外呼机器人 的信息
export function addRobotAction(RobotData) {
    return dispatch => {
        dispatch({ type: types.ADDROBOTACTION, RobotData });
    };
}
//新增外呼任务
export function addRobotOutboundAction(data) {
    return dispatch => {
        return addRobotOutbound(data).then(data => {
            if (data.code && data.code >= 300) {
                message.error(data.message)
            } else {
                dispatch({ type: types.ADDROBOTOUTBOUND, addRobotOutboundData: data });
                dispatch(change("AddRobotModal", "moduleLock", false))
                dispatch(submit('resumes_container_search'))
                message.success("外呼任务正在创建中")
            }
            return data
        })
            .catch(err => {
                throw err;
            });
    };
}
//获取外呼任务列表   (任务统计列表)
export function addRobotOutboundListAction(data) {
    return dispatch => {
        return addRobotOutboundList(data).then(data => {
            if (data.code && data.code >= 300) {
                message.error(data.message)
            } else {
                const { items = [], total_count } = data;
                dispatch({ type: types.ADDROBOTOUTBOUNDLIST, addRobotOutboundListData: items });
                dispatch(change("OutboundStatistics_from", "total_count", total_count))
            }
        }).catch(err => {
            throw err;
        });
    };
}
//外呼任务操作     (外呼统计-任务统计)
export function RobotOutboundOperationActions(data) {
    return dispatch => {
        return RobotOutboundOperation(data).then(data => {
            if (data.code && data.code >= 300) {
                message.error(data.message)
            } else {
                dispatch(addRobotOutboundListAction("?offset=0&limit=10"))
            }
        })
            .catch(err => {
                throw err;
            });
    };
}
//外呼任务详情     (外呼统计-任务统计)
export function getRobotDetailsActions(id) {
    return dispatch => {
        return getRobotDetails(id).then(data => {
            if (data.code && data.code >= 300) {
                message.error(data.message)
            } else {
                dispatch({ type: types.GETROBOTDETAILS, getRobotDetailsData: data })
            }
        })
            .catch(err => {
                throw err;
            });
    };
}
// 获取外呼记录列表  （列表内容）   (外呼统计-任务统计-详情)
export function getOutboundRecordsListActions(params) {
    return dispatch => {
        return getOutboundRecordsList(params).then(data => {
            if (data.code && data.code >= 300) {
                message.error(data.message)
            } else {
                const { items = [], total_count } = data;
                dispatch({ type: types.GETOUTBOUNDRECORDSLIST, getOutboundRecordsListData: items })
                dispatch(change("ChattingRecords", "total_count", total_count))
                dispatch(change("OutboundStatisticsDetails_from", "total_count", total_count))
                dispatch(change("IntentionStatistics_from", "total_count", total_count))
                if (items && items.length > 0) {
                    items.map(data => {
                        dispatch(change("ChattingRecords", `${data.id}.comment`, data.comment))
                    })
                }

            }
            return data
        })
            .catch(err => {
                throw err;
            });
    };
}
//查看聊天记录 （列表内容）   (外呼统计-任务统计-详情)
export function geTchatContentActions(id) {
    return dispatch => {
        return geTchatContent(id).then(data => {
            if (data.code && data.code >= 300) {
                message.error(data.message)
            } else {
                const { items = [] } = data
                dispatch({ type: types.GETCHATCONTENT, geTchatContentData: items })
            }
            return data
        })
            .catch(err => {
                throw err;
            });
    };
}
//机器人列表 （列表内容）
export function getRobotListActions(url) {
    return dispatch => {
        return getRobotList(url).then(data => {
            if (data.code && data.code >= 300) {
                message.error(data.message)
            } else {
                const { items = [], total_count } = data
                dispatch({ type: types.GETROBOTLIST, getRobotListData: items })
                dispatch(change("OutboundStatistics_from", "total_count", total_count))
            }
        })
            .catch(err => {
                throw err;
            });
    };
}
// 机器人统计  （数量）
export function getRobotNumberActions(url) {
    return dispatch => {
        return getRobotNumber(url).then(data => {     //getRobotNumber
            if (data.code && data.code >= 300) {
                message.error(data.message)
            } else {
                dispatch({ type: types.GETROBOTNUMBER, getRobotNumberData: data })
            }
        })
            .catch(err => {
                throw err;
            });
    };
}
// 获取机器人 全部设置
export function getRobotAllSetActions() {
    return dispatch => {
        return getRobotAllSet().then(data => {
            if (data.code && data.code >= 300) {
                // message.error(data.message)
            } else {
                const { item = {} } = data
                dispatch({ type: types.GETROBOTALLSET, getRobotAllSetData: item })
            }
            return data
        })
            .catch(err => {
                throw err;
            });
    };
}
// 机器人 全部设置  （数量）
export function postRobotAllSetActions(url) {
    return dispatch => {
        return postRobotAllSet(url).then(data => {
            if (data.code && data.code >= 300) {
                message.error(data.message)
            } else {
                dispatch(getRobotAllSetActions())
                dispatch(getRobotSetListActions())
                message.success("设置成功")
            }
        })
            .catch(err => {
                throw err;
            });
    };
}
// 机器人 单个设置  （数量）
export function postRobotSetActions(url) {
    return dispatch => {
        return postRobotSet(url).then(data => {
            if (data.code && data.code >= 300) {
                message.error(data.message)
            } else {
                dispatch(getRobotSetListActions())
                message.success("设置成功")
            }
        })
            .catch(err => {
                throw err;
            });
    };
}
// 机器人设置列表
export function getRobotSetListActions() {
    return dispatch => {
        return getRobotSetList().then(data => {
            if (data.code && data.code >= 300) {
                message.error(data.message)
            } else {
                const { items = [], total_count } = data;
                dispatch({ type: types.GETROBOTSETLIST, getRobotSetListData: items })
                if (data && data.items && data.items.length > 0) {
                    data.items.map((data, index) => {
                        dispatch(change("RobotSettingUnity", `${data.id}.isLock`, data.enabled == "y" ? true : false))
                        dispatch(change("RobotSettingUnity", `${data.id}.name`, data.name))
                        dispatch(change("RobotSettingUnity", `${data.id}.enabled`, data.enabled))
                    })
                }
            }
            return data
        })
            .catch(err => {
                throw err;
            });
    };
}
// 获取外呼场景列表
export function getDialogueProcessActions() {
    return dispatch => {
        return getDialogueProcess().then(data => {
            if (data.code && data.code >= 300) {
                message.error(data.message)
            } else {
                const { items = [], total_count } = data;
                dispatch({ type: types.GETDIALOGUEPROCESS, getDialogueProcessData: items })
            }
        })
            .catch(err => {
                throw err;
            });
    };
}
// 获取外呼场景列表
export function postCutboundCommentActions(url) {
    return dispatch => {
        return postCutboundComment(url).then(data => {
            if (data.code && data.code >= 300) {
                message.error(data.message)
            } else {
                message.success(data.message)
            }
            return data
        })
            .catch(err => {
                throw err;
            });
    };
}
// 是否购买机器人
export function getIsRobotActions(url) {
    return dispatch => {
        return getIsRobot(url).then(data => {
            if (data.code && data.code >= 300) {
                message.error(data.message)
            } else {

            }
            return data
        })
            .catch(err => {
                throw err;
            });
    };
}
// 否购买机器人 时间
export function getRobotTimeActions(url) {
    return dispatch => {
        return getRobotTime(url).then(data => {
            if (data.code && data.code >= 300 && data.code != 404) {
                message.error(data.message)
            } else if (data.code && data.code == 404) {
                message.error("服务未初始化，暂不能使用！")
            } else {
                dispatch({ type: types.GETROBOTTIME, getRobotTimeData: data })
            }
        })
            .catch(err => {
                throw err;
            });
    };
}

// 招聘甲方结算设置
export function setAccountAction(id, params) {
    return dispatch => {
        return setAccount(id, params).then(data => {
            if (data.code && data.code >= 300) {
                notification.open({
                    message: '错误',
                    description: '设置失败,' + data.message,
                    icon: <NotificationIcon type='error' />,
                });
            } else {
                notification.open({
                    message: '成功',
                    description: '设置成功',
                    icon: <NotificationIcon type='success' />,
                });
                // dispatch(getPositionsAction('?limit=10&offset=0&status=active&view=published'));
                dispatch(change('recruitForm', 'accountSetIsShow', false));
                dispatch(change('recruitForm', 'accountUpdateIsShow', false));
            }
            return data
        })
            .catch(err => {
                throw err;
            });
    }
}

//获取甲方结算设置
export function getAccountAction(id) {
    return dispatch => {
        return getAccount(id).then(data => {
            return data
        })
            .catch(err => {
                throw err;
            });
    }
}

//获取招聘首页自动推荐数量
export function loadAutoSelectNum(value) {
    return dispatch => {
        return getAutoSelectNum(value).then(data => {
            if (data.code && data.code >= 300) {
                message.error(data.message);
                dispatch({
                    type: types.GET_AUTOSELECT_NUM,
                    autoSelectNum: {}
                });
            } else {
                dispatch({
                    type: types.GET_AUTOSELECT_NUM,
                    autoSelectNum: data
                });
            }
            return data;
        })
            .catch(err => {
                throw err;
            });
    }
}
//获取招聘自动推荐列表
export function loadAutoSelectList(value) {
    return dispatch => {
        return getAutoSelectList(value).then(data => {
            if (data.code && data.code >= 300) {
                message.error(data.message);
            } else {
                dispatch({
                    type: types.GET_AUTOSELECT_LIST,
                    autoSelectList: data
                });
                dispatch(change('new_candidate_form', 'total_count', data.total_count))
            }
            return data;
        })
            .catch(err => {
                throw err;
            });
    }
}
//利用测评详情列表，获取雇员参与测评的职位列表
export function loadPositionEvaluateAct(url) {
    return dispatch => {
        return loadPositionEvaluate(url).then(data => {
            if (data.code && data.code >= 300) {
                message.error(data.message)
            } else {
                const { items = [] } = data;
                return items;
            }


        }).catch(err => {
            throw err;
        });
    }
}

//加入候选人操作
export function loadAddCandidate(value, type) {
    return dispatch => {
        dispatch({ type: 'MASK_SHOW', maskShow: true });
        return getAddCandidate(value, type).then(data => {
            if (data.code && data.code >= 300) {
                notification.open({
                    message: '失败',
                    description: '提交失败',
                    icon: <NotificationIcon type='error' />,
                });
                dispatch(change('candidate_from', 'disabledBtnbol', 'false'))

            } else {
                dispatch({ type: 'MASK_SHOW', maskShow: false });
                notification.open({
                    message: '成功',
                    description: '加入候选人成功',
                    icon: <NotificationIcon type='success' />,
                });
                // dispatch(change('candidate_from','disabledBtnbol','true'))
                dispatch(submit('new_candidate_form'))
            }
            return data;
        })
    }
}

//不合适拒绝操作
export function loadAutoDeny(value, type) {
    return dispatch => {
        dispatch({ type: 'MASK_SHOW', maskShow: true });
        return getAutoDeny(value, type).then(data => {
            if (data.code && data.code >= 300) {
                notification.open({
                    message: '失败',
                    description: '提交失败',
                    icon: <NotificationIcon type='error' />,
                });
                dispatch(change('candidate_from', 'disabledBtnbol', 'false'))
            } else {
                dispatch({ type: 'MASK_SHOW', maskShow: false });
                notification.open({
                    message: '成功',
                    description: '处理成功',
                    icon: <NotificationIcon type='success' />,
                });
                // dispatch(change('candidate_from','disabledBtnbol','true'))
                dispatch(submit('new_candidate_form'))
            }
            return data;
        })
    }
}
//添加跟进操作
export function loadAddFollow(value, type) {
    return dispatch => {
        dispatch({ type: 'MASK_SHOW', maskShow: true });
        return getAutoAddFollow(value, type).then(data => {
            if (data.code && data.code >= 300) {
                notification.open({
                    message: '失败',
                    description: '提交失败',
                    icon: <NotificationIcon type='error' />,
                });
                dispatch(change('candidate_from', 'disabledBtnbol', 'false'))
            } else {
                dispatch({ type: 'MASK_SHOW', maskShow: false });
                notification.open({
                    message: '成功',
                    description: '提交成功',
                    icon: <NotificationIcon type='success' />,
                });
                // dispatch(change('candidate_from','disabledBtnbol','false'))
                dispatch(submit('new_candidate_form'))
            }
            return data;
        })
    }
}


// 机器人外呼场景详情
export function getSceneActions(url) {
    return dispatch => {
        return getScene(url).then(data => {
            if (data.code && data.code >= 300) {
                message.error(data.message)
            } else {
                const { items = [] } = data
                dispatch({ type: types.GETSCENE, getSceneData: items })
            }
            return data

        }).catch(err => {
            throw err;
        });
    };
}

//  机器人清除原始数据
export function clearRobotData() {
    return dispatch => {
        dispatch({ type: types.GETSCENE, getSceneData: [] })
        dispatch({ type: types.GETDIALOGUEPROCESS, getDialogueProcessData: [] })
        dispatch({ type: types.GETROBOTSETLIST, getRobotSetListData: [] })
        dispatch({ type: types.GETROBOTALLSET, getRobotAllSetData: {} })
        dispatch({ type: types.ADDROBOTOUTBOUNDLIST, addRobotOutboundListData: [] });
        dispatch({ type: types.GETOUTBOUNDRECORDSLIST, getOutboundRecordsListData: [] })
        dispatch({ type: types.GETCHATCONTENT, geTchatContentData: [] })
        dispatch({ type: types.GETROBOTLIST, getRobotListData: [] })

    };
}

// 招聘需求  获取添加跟进人
export function getFollowOwnerActions(id) {
    return dispatch => {
        return getFollowOwner(id).then(data => {
            if (data.code && data.code >= 300) {
                notification.open({
                    message: '错误',
                    description: data.message,
                    icon: <NotificationIcon type='error' />,
                });
            } else {
                const { position_follow_owners = [] } = data
                dispatch(change('recruitForm', 'admin_id', position_follow_owners.length > 0 ? position_follow_owners[0].follow_owner_id : ''))
                dispatch({ type: types.GET_FOLLOW_OWNER, followOwnerData: data })
            }
        })
            .catch(err => {
                throw err;
            });
    };
}

// 招聘需求  获取添加跟进人
export function putFollowOwnerActions(params) {
    return dispatch => {
        return putFollowOwner(params).then(data => {
            if (data.code && data.code >= 300) {
                notification.open({
                    message: '错误',
                    description: '添加失败,' + data.message,
                    icon: <NotificationIcon type='error' />,
                });
            } else {
                notification.open({
                    message: '成功',
                    description: '添加成功',
                    icon: <NotificationIcon type='success' />,
                });
                dispatch(change('recruitForm', 'addPrivateAdminsStatus', false))
            }
        })
            .catch(err => {
                throw err;
            });
    };
}

export function getCandidatesOpBatch(values) {
    return dispatch => {
        return loadCandidatesOpBatch(values).then(data => {
            dispatch({ type: types.CAN_BATCH_ALL_INTERVIEW, can_batch_all_interview: data.can_batch_all_interview })
        })
            .catch(err => {
                throw err;
            });
    };
}

// 简历库批量导出
export function exportResumesAction(params) {
    return dispatch => {
        return exportResumes(params).then(data => {
            if (data.code && data.code >= 300) {
                notification.open({
                    message: '错误',
                    description: '导出失败' + data.message,
                    icon: <NotificationIcon type='error' />,
                })
            } else {
                notification.open({
                    message: '成功',
                    description: '导出成功',
                    icon: <NotificationIcon type='success' />,
                })
                dispatch(change('resumes_container', 'showExportResumes', false))
                downloadFileByUrl(data.download_path)
            }
        })
            .catch(err => {
                throw err
            })
    }
}

// 人才库新增简历查重
export function checkResumesAction(mobile) {
    return dispatch => {
        return getResumes(`keysearch=${mobile}`).then(data => {
            if (data.code && data.code >= 300) {
                notification.open({
                    message: '错误',
                    description: '失败' + data.message,
                    icon: <NotificationIcon type='error' />,
                })
            } else {
                if (data && data.items && data.items.length) {
                    // notification.open({
                    //     message: '提示',
                    //     description: '手机号已存在！',
                    //     icon: <NotificationIcon type='info' />,
                    // })
                    dispatch(change('resumes_container', 'checkResumesStatus', true))
                } else {
                    notification.open({
                        message: '提示',
                        description: '手机号可用！',
                        icon: <NotificationIcon type='info' />,
                    })
                    dispatch(change('resumes_container', 'checkResumesStatus', false))
                }

            }
        })
    }
}
//职位返佣规则设置
export function addPositionRuleAction(params) {
    return dispatch => {
        dispatch({ type: 'MASK_SHOW', maskShow: true })
        return addPositionRuleUtil(params).then(data => {
            if (data.code && data.code >= 300) {
                dispatch({ type: 'MASK_SHOW', maskShow: false })
                notification.warning({
                    message: '错误',
                    description: data.message,
                })

            } else {
                dispatch({ type: 'MASK_SHOW', maskShow: false })
                notification.success({
                    message: "成功",
                    description: '操作成功'
                })
                dispatch(change('position_rule_set_modal_form', 'showPositionRule', false))
            }
        })
    }
}
//创建或修改甲方结算规则    addSettlementSetUtil
export function addSettlementSetAction(position_id, params) {
    return dispatch => {
        dispatch({ type: 'MASK_SHOW', maskShow: true })
        return addSettlementSetUtil(position_id, params).then(data => {
            if (data.code && data.code >= 300) {
                dispatch({ type: 'MASK_SHOW', maskShow: false })
                notification.warning({
                    message: '错误',
                    description: data.message,
                })
            } else {
                dispatch({ type: 'MASK_SHOW', maskShow: false })
                notification.success({
                    message: "成功",
                    description: '操作成功'
                })
                dispatch(change('recruit_fee_set_modal_form', 'showRecruitSet', false))
                dispatch(submit('recruit_search_form'))
                return true
            }
        })
    }
}
//获取岗位返佣详情  getPositionRuleDetailUtil
export function loadPositionRuleDetailAction(position_id, params) {
    return dispatch => {
        return getPositionRuleDetailUtil(position_id, params).then(data => {
            if (data.code && data.code >= 300) {
                notification.warning({
                    message: '错误',
                    description: data.message,
                })
            } else {
                dispatch({
                    type: types.POSITION_RULE_DETAIL,
                    position_rule_details: data
                })
            }
            return data
        })
    }
}
//甲方结算列表  getSettlementSettingListUtil
export function loadSettlementSettingListAction(position_id) {
    return dispatch => {
        return getSettlementSettingListUtil(position_id).then(data => {
            if (data.code && data.code >= 300) {

            } else {
                const { items } = data;
                dispatch({
                    type: types.SETTLEMENTSETTINGLIST,
                    settlement_setting_list: items
                })
                dispatch(change('recruit_fee_set_search_form', 'total_count', data.total_count))
            }
            return data
        })
    }
}
//甲方结算详情 getSettlementSettingDetailUtil
export function loadSettlementSettingDetailAction(position_id, category) {
    return dispatch => {
        dispatch({ type: 'MASK_SHOW', maskShow: true })
        return getSettlementSettingDetailUtil(position_id, category).then(data => {
            dispatch({ type: 'MASK_SHOW', maskShow: false })
            if (data.code && data.code >= 300) {

            } else {
                dispatch({
                    type: types.SETTLEMENTSETTINGDETAIL,
                    settlement_setting_detail: data
                })
            }
            return data
        })
    }
}
//钉钉审批列表
export function loadNailApprovalListAction(params) {
    return dispatch => {
        return getNailApprovalListUtil(params).then(data => {
            if (data.code && data.code >= 300) {

            } else {
                const { items, total_count } = data;
                dispatch({
                    type: types.GET_NAILAPPROVAL_LIST,
                    nail_approval_list: items
                })
                dispatch(change('nail_approval_search_form', 'total_count', total_count))
            }
            return data
        })
    }
}
//钉钉审批记录
export function loadNailApprovalDetailAction(params) {
    return dispatch => {
        return getNailApprovalDetailUtil(params).then(data => {
            if (data.code && data.code >= 300) {

            } else {
                const { process_instance } = data;
                dispatch({
                    type: types.GET_NAILAPPROVAL_DETAIL,
                    nail_approval_detail: process_instance
                })
                return process_instance
            }

        })
    }
}
export function cleanApprovalDetail() {
    return {
        type: types.GET_NAILAPPROVAL_DETAIL,
        nail_approval_detail: {}
    }
}


//批量确认入职    
export function batchConformJoinAction(params) {
    return dispatch => {
        return batchConformJoinUtil(params).then(data => {
            if (data.code && data.code >= 300) {
                notification.warning({
                    message: '错误',
                    description: data.message,
                })
            } else {
                notification.success({
                    message: '成功',
                    description: '操作已成功，请稍后到在职列表中进行查看哦',
                })
                dispatch(submit('new_candidate_form'));
                dispatch(change('confirmJoin_modal_form', 'showConfirmJoinBol', false));
            }
            return data
        })
    }
}

//删除职位返佣规则
export function delPositionRuleAction(values) { //删除面试题
    return dispatch => {
        return delPositionRuleUtil(values)
            .then(data => {
                // if (data.code && data.code >= 300) {
                //     message.error(data.message);
                // } else {
                //     message.success('删除成功');
                // }
                return data
            })
            .catch(err => {
                throw err;
            });
    };
}

// 发起仲裁
export function shareCustometArbitrate(id, params) {
    return dispatch => {
        return arbitrateUtil(id, params).then(data => {
            if (data.code && data.code >= 300) {
                notification.warning({
                    message: '错误',
                    description: data.message,
                })
            } else {
                notification.success({
                    message: '成功',
                    description: '操作已成功，请稍后到审批列表中查看',
                })
            }
        });
    }
}