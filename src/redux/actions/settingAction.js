import * as types from '../constants/ActionTypes';
import React from 'react';
import {
  getBasicInfo, updateBasicInfo, getRoles, addRole, updateRole, deleteRole, getSysperms,
  addAdmin, getAdmins, getAdmin, getSimpleAdmins, updateAdmin, adminOperate, delAdmin, getLegal, addLegal, getRole,
  updateLegal, delLegal, addInterviewPerson, getCustomerAdmins, addInterviewCustomer, getActionSysperms, gethandOver, posthandOver,
  getResumeSetting, postResumeSetting, uploadQuestionBank, scoreSetting, loadQuestionBankList, getQuestionPapersDet, getScoreSetting,
  getQuestionItemDet,
  editQuestionItem,
  deleteQuestionItem,
  getFormDefind,
  putFiledsOptions,
  getCanExport,
  loadResumesExport,
  loadLegalPaged,
  getDataRangeUtil,
  updateDataRangeUtil, getCustomerbusinessSetUtil, editCustomerbusinessSetUtil, addCustomerbusinessSetUtil,
  getContractSetUtil, addContractSetUtil,
  getPasswordSetUtil,
  postPasswordSetUtil,
  getAppendDeductUpdateSettingActionApi,
  submitAppendDeductUpdateSettingActionApi,
} from '../../utils/settingUtil';
import { loadMyUserInfo } from '../../utils/authedUtil';
import { message, notification } from 'antd';
import { SubmissionError, change, submit, initialize } from 'redux-form';
import { NotificationIcon } from '../../utils/comonOtherUtil';


/********************************* 设置 - 初始化宽高 **********************************/
function changeWidthAndHeight(height, width) {
  return {
    type: types.CHANGE_WIDTH_AND_HEIGHT,
    height,
    width
  };
}

export function initEnvironment() {
  return dispatch => {
    dispatch(changeWidthAndHeight(window.innerHeight, window.innerWidth));
    window.onresize = () => {
      dispatch(changeWidthAndHeight(window.innerHeight, window.innerWidth));
    }
  };
}

/********************************* 设置 - 企业基本信息 **********************************/

export function showMask(flag) {
  return {
    type: types.MASK_SHOW,
    maskShow: flag
  }
}

export function getBasicInfoAction(values) { //查看企业基本信息详情
  return dispatch => {
    return getBasicInfo(values)
      .then(data => {
        dispatch({
          type: types.BASIC_INFO,
          basicInfo: data
        })
      })
      .catch(err => {
        throw err;
      });
  };
}

export function updateBasicInfoAction(values) {
  return dispatch => {
    return updateBasicInfo(values)
      .then(data => {
        if (data.code && data.code >= 300) {
          //message.error(data.message);
          throw new SubmissionError({ _error: data.message, ...data.errors });
        } else {
          message.success('保存成功');
          dispatch(getBasicInfoAction(values.id));
          let time = new Date().getTime();
          dispatch({
            type: types.CHANGE_AVATAR,
            time: time
          });
        }
      })
      .catch(err => {
        throw err;
      });
  };
}


export function loadRoles(params) {
  return dispatch => {
    return getRoles(params)
      .then(data => {
        const { items = [], total_count } = data;
        dispatch({
          type: types.LOAD_ROLES,
          roles: items
        })
        dispatch(change("search_list_internal_staff", "total_count", total_count))
        dispatch(change("role_search_form", "total_count", total_count))
      })
      .catch(err => {
        throw err;
      });
  };
}

export function createRole(params) {
  return dispatch => {
    return addRole(params)
      .then(data => {
        if (data && data.id) {
          message.success("新增角色成功", 2)
        } else {
          message.error('新增角色失败', 2)
        }
        dispatch(submit('role_search_form'));
        return data;
      })
      .catch(err => {
        throw err;
      });
  };
}

export function editRole(params) {
  return dispatch => {
    return updateRole(params)
      .then(data => {
        const { items = [] } = data;
        if (data && data.id) {
          message.success("编辑角色成功", 2)
        } else {
          message.error('编辑角色失败', 2)
        }
        dispatch(submit('role_search_form'));
        return data;
      })
      .catch(err => {
        throw err;
      });
  };
}



export function delRole(params) {
  return dispatch => {
    return deleteRole(params)
      .then(data => {
        dispatch(submit('role_search_form'));
      })
      .catch(err => {
        throw err;
      });
  };
}

export function clearRoleById(id) {
  return dispatch => {
    dispatch({
      type: types.SELECT_ROLE,
      role: {}
    })
  };
}

export function loadRoleById(id) {
  return dispatch => {
    return getRole(id)
      .then(data => {
        dispatch({
          type: types.SELECT_ROLE,
          role: data
        })
        return data;
      })
      .catch(err => {
        throw err;
      });
  };
}

export function cleanRole() {
  return {
    type: types.SELECT_ROLE,
    role: {}
  };
}


export function loadSysperms() {
  return dispatch => {
    return getSysperms()
      .then(data => {
        const { items = [] } = data;
        // items.map(item=>{
        //     item.name=item.module;
        //     item.display_name=item.module_name;
        // })
        dispatch({
          type: types.LOAD_SYS_PERMS,
          sysperms: items
        })
      })
      .catch(err => {
        throw err;
      });
  };
}


export function loadActionSysperms() {
  return dispatch => {
    return getActionSysperms()
      .then(data => {
        let perms = data.items && data.items.length > 0 ? data.items : []
        dispatch({
          type: types.LOAD_SYS_ACTION_PERMS,
          actionPerms: perms,
          view_perm: data.view_perm
        })
      })
      .catch(err => {
        throw err;
      });
  };
}


/*内部员工-- 只是真正的员工列表使用*/
export function loadAdminsListDet(query, is_options) {
  return dispatch => {
    return getAdmins(query)
      .then(data => {
        const { items = [], total_count } = data;
        if (is_options) {
          dispatch({
            type: types.LOAD_ADMINS_OPTIONS,
            adminOptions: items
          })
        } else {
          dispatch({
            type: types.LOAD_ADMINS,
            admins: items,
            adminCount: total_count
          })
        }
        dispatch(change('search_list_internal_staff', 'total_count', total_count))
      })
      .catch(err => {
        throw err;
      });
  };
}

/*内部员工*/
export function loadAdmins(query, is_options) {
  return dispatch => {
    return getSimpleAdmins(query)
      .then(data => {
        const { items = [], total_count } = data;
        if (is_options) {
          dispatch({
            type: types.LOAD_ADMINS_OPTIONS,
            adminOptions: items
          })
        } else {
          dispatch({
            type: types.LOAD_ADMINS,
            admins: items,
            adminCount: total_count
          })
        }
        dispatch(change('search_list_internal_staff', 'total_count', total_count))
      })
      .catch(err => {
        throw err;
      });
  };
}
// 精简返回数据结构的列表接口
export function loadSimpleAdmins(query) {
  return dispatch => {
    return getSimpleAdmins(query)
      .then(data => {
        const { items = [], total_count } = data;
        dispatch({
          type: types.LOAD_SIMPLE_ADMINS,
          simpleAdmins: items,
          simpleAdminCount: total_count
        })
      })
      .catch(err => {
        throw err;
      });
  };
}
export function cleanAdmins() {
  return {
    type: types.LOAD_ADMINS,
    admins: [],
    adminCount: 0
  }
}

//企业客户用户列表
export function loadCustomerAdmins(query) {
  return dispatch => {
    return getCustomerAdmins(query)
      .then(data => {
        const { items = [], total_count } = data;
        dispatch({
          type: types.LOAD_CUSTOMER_ADMINS,
          customerAdmins: items,
          adminCount: total_count
        })
      })
      .catch(err => {
        throw err;
      });
  };
}



export function createAdmin(params) {
  return dispatch => {
    return addAdmin(params)
      .then(data => {
        if (data && data.code >= 300) {
          message.error(data.message, 2);
          throw new SubmissionError({ _error: data.message });
        } else {
          message.success('添加成功', 2);
          dispatch(change('admin_form','modal',false))
          dispatch(loadAdminsListDet('?limit=10&offset=0'));
        }
      })
      .catch(err => {
        throw err;
      });
  };
}

// 交接工作 获取交接信息
export function gethandOverAct(params) {
  return dispatch => {
    return gethandOver(params)
      .then(data => {
        if (data && data.code >= 300) {
          message.error(data.message, 2)
        } else {
          dispatch({
            type: types.GET_HAND_OVER_DATA,
            handOverData: data,
          })
        }
      })
      .catch(err => {
        throw err
      })
  }
}

// 交接工作 提交交接信息
export function posthandOverAct(params) {
  return dispatch => {
    return posthandOver(params)
      .then(data => {
        if (data && data.code >= 300) {
          message.error(data.message, 2)
        } else {
          dispatch(change('admin_form', 'showHandOver', false))
          dispatch(submit('search_list_internal_staff'))
        }
      })
      .catch(err => {
        throw err
      })
  }
}




export function getAdminInfo(id) {
  return dispatch => {
    return getAdmin(id)
      .then(data => {
        dispatch({
          type: types.LOAD_ADMIN_INFO,
          adminInfo: data
        })
      })
      .catch(err => {
        throw err;
      });
  };
}

export function editAdmin(params) {
  return dispatch => {
    return updateAdmin(params)
      .then(data => {
        if (data && data.code >= 300) {
          message.error(data.message);
          throw new SubmissionError({ _error: data.message });
        } else {
          message.success('更新成功', 2)
          dispatch(change('emp_info_form','visible',false))
          dispatch(loadAdminsListDet('?limit=10&offset=0'));
          dispatch(getAdminInfo(params.id))
        }

      })
      .catch(err => {
        throw err;
      });
  };
}


export function adminAction(params, type) {
  return dispatch => {
    return adminOperate(params)
      .then(data => {
        if ('all' == type) {
          dispatch(submit('search_list_internal_staff'));
        } else {
          dispatch(loadAdminsListDet('?limit=10&offset=0&status=active', true));
        }
      })
      .catch(err => {
        throw err;
      });
  };
}

export function deleteAdmin(id) {
  return dispatch => {
    return delAdmin(id)
      .then(data => {
        dispatch(loadAdminsListDet('?limit=10&offset=0'));
      })
      .catch(err => {
        throw err;
      });
  };
}


/********************************* 设置 - 法务实体 **********************************/

export function loadLegalList() {//获取机构下的法务实体列表
  return dispatch => {
    return loadMyUserInfo()
      .then(data => {
        let { user_info } = data;
        return dispatch(getLegalList({ 'tenant_id': user_info.tenant.id }))
      }).catch(err => { throw err; });
  };
}

export function getLegalList(values) {//获取机构下的法务实体列表
  return dispatch => {
    return getLegal(values)
      .then(data => {
        const { items = [] } = data;
        dispatch({
          type: types.LEGAL_LIST,
          legalList: data
        })
        return items;
      })
      .catch(err => {
        throw err;
      });
  };
}
export function loadLegalPagedList(values) {//获取机构下的法务实体列表（带分页效果）
  return dispatch => {
    return loadLegalPaged(values)
      .then(data => {
        const { items = [], total_count } = data;
        dispatch({
          type: types.LEGAL_LIST,
          legalList: data
        })
        dispatch(change('legal_origination_list_search', 'total_count', total_count))
        return items;
      })
      .catch(err => {
        throw err;
      });
  };
}
export function cleanLegalList() {//清空机构下的法务实体列表
  return dispatch => {
    dispatch({
      type: types.LEGAL_LIST,
      legalList: {}
    })
  };
}

export function addLegalAction(values) {//添加法务实体
  return dispatch => {
    return addLegal(values)
      .then(data => {
        if (data && data.code >= 300) {
          message.error(data.message);
          throw new SubmissionError({ _error: data.message });
        } else {
          //   dispatch(getLegalList(values))
          dispatch(submit('legal_origination_list_search'))
          dispatch(change('base_info_form', 'showLegalStatus', false))
        }
      })
      .catch(err => {
        throw err;
      });
  };
}

export function editLegalAction(values) {//编辑法务实体
  return dispatch => {
    return updateLegal(values)
      .then(data => {
        if (data && data.code >= 300) {
          message.error(data.message);
          throw new SubmissionError({ _error: data.message });
        } else {
          // dispatch(getLegalList(values))
          dispatch(submit('legal_origination_list_search'))
          dispatch(change('base_info_form', 'showLegalStatus', false))
        }
      })
      .catch(err => {
        throw err;
      });
  };
}

export function delLegalAction(values) {//删除法务实体
  return dispatch => {
    return delLegal(values)
      .then(data => {
        // dispatch(getLegalList(values))
        // dispatch(submit('legal_origination_list_search'))
        if (data && data.code >= 300) {
          message.error(data.message);
        } else {
          return data
        }
      })
      .catch(err => {
        throw err;
      });
  };
}


/*添加面试联系人(人力资源机构)*/
export function addInterviewPersonAction(query) {
  return dispatch => {
    return addInterviewPerson(query)
      .then(data => {
        if (data && data.code >= 300) {
          message.error(data.message);
        } else {
          dispatch({
            type: types.ADD_INTERVIEW_PERSON,
            addInterview: data,
          })
          dispatch(loadAdmins('?all=true&status=active'));
          dispatch(change('addPosition', 'addManagerVisible', false))
        }
      })
      .catch(err => {
        throw err;
      });
  };
}

/*添加面试联系人（客户）*/
export function addInterviewCustomerAction(query) {
  return dispatch => {
    return addInterviewCustomer(query)
      .then(data => {
        if (data && data.code >= 300) {
          message.error(data.message);
        } else {
          dispatch({
            type: types.ADD_INTERVIEW_CUSTOMER,
            addInterviewItem: data,
          });
          dispatch(loadCustomerAdmins('?customer_id=' + query.customer_id + '&all=true'));
          dispatch(change('addPosition', 'addManagerVisible', false))
        }

      })
      .catch(err => {
        throw err;
      });
  };
}


// 小程序管理  招聘业务设置 get
export function getResumeSettingAction() {
  return dispatch => {
    return getResumeSetting()
      .then(data => {
        if (data && data.code >= 300) {
          message.error(data.message);
        } else {
          if (data && data.auto_transfer_pool) {
            dispatch(change('recruit_operation_from', 'auto_days', data.auto_days))
            dispatch(change('recruit_operation_from', 'auto_transfer_pool', data.auto_transfer_pool))
            dispatch(change('recruit_operation_from', 'is_charger_many', data.is_charger_many))
            dispatch(change('recruit_operation_from', 'remind_days', data.remind_days))
            dispatch(change('recruit_operation_from', 'is_private_resumes', data.is_private_resumes))
            dispatch(change('recruit_operation_from', 'is_show_mobile', data.is_show_mobile))
            dispatch(change('recruit_operation_from', 'is_resumes_can_export', data.is_resumes_can_export))
            dispatch(change('recruit_operation_from', 'is_show_onthejob', data.is_show_onthejob))
            dispatch(change('recruit_operation_from', 'is_auto_recommend', data.is_auto_recommend))
            return data
          }
        }
      })
      .catch(err => {
        throw err
      });
  };
}

// 人才库,微信自定义字段显示get
export function getFormDefindAction(params, type) {
  return dispatch => {
    return getFormDefind(params)
      .then(data => {
        const { items = [] } = data
        if (type == 'pcResume') {
          dispatch({
            type: types.LOAD_PCRESUME_DEFIND,
            pcFormDefind: items
          })
          let checked = []
          if (items && items.length > 0) {
            items.map((el, i) => {
              const parseOptions = JSON.parse(el.options)
              if (parseOptions.is_opened) {
                checked.push(el.name)
              }
            })
          }
          if (checked.length != items.length) {
            dispatch(change('recruit_operation_from', 'pc_check_all', []))
          } else {
            dispatch(change('recruit_operation_from', 'pc_check_all', ['all']))
          }
          dispatch(change('recruit_operation_from', 'pc_check_roles', checked))
        } else {
          dispatch({
            type: types.LOAD_WXRESUME_DEFIND,
            wxFormDefind: items
          })
          let checked = []
          if (items && items.length > 0) {
            items.map((el, i) => {
              const parseOptions = JSON.parse(el.options)
              if (parseOptions.is_opened) {
                checked.push(el.name)
              }
            })
          }
          if (checked.length != items.length) {
            dispatch(change('recruit_operation_from', 'wx_check_all', []))
          } else {
            dispatch(change('recruit_operation_from', 'wx_check_all', ['all']))
          }
          dispatch(change('recruit_operation_from', 'wx_check_roles', checked))
        }
      })
      .catch(err => { throw err })
  }
}

// 人才库,微信自定义字段显示put
export function putFiledsOptionsAction(values, type) {
  return dispatch => {
    return putFiledsOptions(values)
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
          if (type == 'pcResume') {
            dispatch(getFormDefindAction('?form=resume&category=recruit', 'pcResume'))
          } else {
            dispatch(getFormDefindAction('?form=input-resume&category=recruit', 'wxResume'))
          }
        }
      })
      .catch(err => {
        throw err
      })
  }
}

// 小程序管理  招聘业务设置 post
export function postResumeSettingAction(values) {
  return dispatch => {
    return postResumeSetting(values)
      .then(data => {
        if (data && data.code >= 300) {
          message.error(data.message)
        } else {
          message.success('保存成功')
        }
      })
      .catch(err => {
        throw err
      });
  };
}

const getErrMsg = (data) => {
  let arr = [];
  if (typeof data == "string" && data && data.length > 0) {
    arr = JSON.parse(data);
    if (arr && arr.length > 0) {
      let html = '';
      arr.map((item, i) => {
        html += `<div><span key={${i}}>第${item.line}行 </span> <span>${item.message}</span></div>`
      })
      return html;
    }
  }

}
//题库设置  表格导入题库
export function uploadQuestionBankAction(values) {
  return dispatch => {
    dispatch({ type: 'MASK_SHOW', maskShow: true });
    return uploadQuestionBank(values)
      .then(data => {
        if (data && data.code >= 300) {
          message.error(data.message)
        } else {
          // message.success('表格导入成功');
          const { errors = '' } = data;
          if (errors) {
            let errMessage = getErrMsg(errors);
            dispatch(change("UploadQuestionBank", "errMessage", errMessage))
          } else {
            dispatch(change("UploadQuestionBank", "errMessage", ''))
            dispatch(change("UploadQuestionBank", "current", 1))
          }
        }
        dispatch({ type: 'MASK_SHOW', maskShow: false });
      })
      .catch(err => {
        dispatch({ type: 'MASK_SHOW', maskShow: false });
        throw err
      });
  };
}
//题库设置  获取题库列表
export function loadQuestionBankListAction(values) {
  return dispatch => {
    return loadQuestionBankList(values)
      .then((data) => {
        if (data && data.code >= 300) {
          message.error(data.message)
        } else {
          // message.success('表格导入成功');
          const { items = [], total_count = '' } = data;
          dispatch({
            type: types.LOAD_QUESTION_BANK_LIST,
            questionBankList: items,
          });
          return items;
        }
      });
  };
}
//题库设置  获取题库详情（试卷预览）
export function getQuestionPapersDetAct(values) {
  return dispatch => {
    return getQuestionPapersDet(values)
      .then(data => {
        if (data && data.code >= 300) {
          message.error(data.message)
        } else {
          const { question_items = [], questions_count = '' } = data;
          dispatch(change('QuestionBankSettingSearch', 'total_count', questions_count));
          return data;
        }
      })
      .catch(err => {
        throw err
      });
  };
}
//题库设置  获取单条题目的详情
export function getQuestionItemDetAct(values) {
  return dispatch => {
    return getQuestionItemDet(values)
      .then(data => {
        if (data && data.code >= 300) {
          message.error(data.message)
        } else {
          const { id = '' } = values;
          const dataObj = Object.assign({}, data, { editId: id })
          dispatch(initialize('QuestionBankSetting', dataObj));
          return data;
        }
      })
      .catch(err => {
        throw err
      });
  };
}
//题库设置   编辑单条题目
export function editQuestionItemAct(values) {
  return dispatch => {
    return editQuestionItem(values)
      .then(data => {
        if (data && data.code >= 300) {
          message.error(data.message)
        } else {
          const { id = '' } = values;
          message.success('编辑成功');
          dispatch(change('QuestionBankSetting', 'editId', ''));// 取消题目的编辑状态
          dispatch(submit('QuestionBankSettingSearch'));// 重新请求最新的题库详情
          return data;
        }
      })
      .catch(err => {
        throw err
      });
  };
}
//题库设置   删除单条题目
export function deleteQuestionItemAct(values) {
  return dispatch => {
    return deleteQuestionItem(values)
      .then(data => {
        if (data && data.code >= 300) {
          message.error(data.message)
        } else {
          const { id = '' } = values;
          message.success('删除成功');
          // dispatch(submit('QuestionBankSettingSearch'));// 重新请求最新的题库详情
          // dispatch(change('QuestionBankSetting','editId',''));// 取消题目的编辑状态
          return data;
        }
      })
      .catch(err => {
        throw err
      });
  };
}

//题库设置  分数设置(测评参考） post
export function scoreSettingAction(values) {
  return dispatch => {
    return scoreSetting(values)
      .then(data => {
        if (data && data.code >= 300) {
          message.error(data.message)
        } else {
          message.success('设置成功');
          dispatch(change('QuestionBankSetting', 'showSetting', false));// 关闭弹框
        }
      })
      .catch(err => {
        throw err
      });
  };
}
//题库设置  分数设置(测评参考） get
export function getScoreSettingAction(values) {
  return dispatch => {
    return getScoreSetting(values)
      .then(data => {
        if (data && data.code >= 300) {
          message.error(data.message)
        } else {
          const { contents = [] } = data;
          dispatch(change('QuestionBankSetting', 'contents', contents));// 取消题目的编辑状态
        }
      })
      .catch(err => {
        throw err
      });
  };
}

// 是否可以导出简历
export function getCanExportAction() {
  return dispatch => {
    return getCanExport()
      .then(data => {
        if (data && data.can_export) {
          dispatch({
            type: types.CAN_EXPORT,
            canExport: data.can_export
          })
        }
      })
      .catch(err => {
        throw err
      })
  }
}

// 导出简历log
export function loadResumesExportAction(params) {
  return dispatch => {
    return loadResumesExport(params)
      .then(data => {
        if (data && data.code >= 300) {
          message.error(data.message)
        } else {
          dispatch({
            type: types.LOAD_RESUMES_EXPORT_LIST,
            resumsExportList: data,
          })
          dispatch(change('resumes_export_logs_search', 'total_count', data.total_count));
        }
      })
      .catch(err => {
        throw err
      })
  }
}



// 数据范围设置列表
export function getDataRangeUtilAction(params) {
  return dispatch => {
    return getDataRangeUtil(params)
      .then(data => {
        if (data.items && data.items.length > 0) {
          let special_data, salary_data, prepay_data, special_data_id, salary_data_id, prepay_data_id;
          data.items.map((cl) => {
            if (cl.data_range_type == 'addition') {
              special_data = cl.admin_type;
              special_data_id = cl.id
            } else if (cl.data_range_type == 'payroll') {
              salary_data = cl.admin_type;
              salary_data_id = cl.id
            } else if (cl.data_range_type == 'prepay') {
              prepay_data = cl.admin_type;
              prepay_data_id = cl.id
            }
          })
          dispatch(change('PayTaxSetting', 'special_data', special_data))
          dispatch(change('PayTaxSetting', 'special_data_id', special_data_id))
          dispatch(change('PayTaxSetting', 'salary_data', salary_data))
          dispatch(change('PayTaxSetting', 'salary_data_id', salary_data_id))
          dispatch(change('PayTaxSetting', 'prepay_data', prepay_data))
          dispatch(change('PayTaxSetting', 'prepay_data_id', prepay_data_id))
          // dispatch(initialize('PayTaxSetting',{
          //   special_data,
          //   special_data_id,
          //   salary_data,
          //   salary_data_id,
          //   prepay_data,
          //   prepay_data_id
          // }))
          dispatch({
            type: types.DATA_RANGE_SETTING,
            data_range_setting: {
              special_data,
              salary_data,
              prepay_data
            }
          })
        } else {
          dispatch(change('PayTaxSetting', 'special_data', '全部'))
          dispatch(change('PayTaxSetting', 'special_data_id', ''))
          dispatch(change('PayTaxSetting', 'salary_data', '全部'))
          dispatch(change('PayTaxSetting', 'salary_data_id', ''))
          dispatch(change('PayTaxSetting', 'prepay_data', '全部'))
          dispatch(change('PayTaxSetting', 'prepay_data_id', ''))
          // dispatch(initialize('PayTaxSetting',{
          //   special_data_id:'',
          //   special_data:'全部',
          //   salary_data_id:'',
          //   salary_data:'全部',
          //   prepay_data_id:'',
          //   prepay_data:'全部',
          // }))
          dispatch({
            type: types.DATA_RANGE_SETTING,
            data_range_setting: {
              special_data: '全部',
              salary_data: '全部',
              prepay_data: '全部',
            }
          })
        }
        return data
      })
      .catch(err => {
        throw err
      })
  }
}
// 数据范围设置编辑
export function updateDataRangeUtilAction(params) {
  return dispatch => {
    return updateDataRangeUtil(params)
      .then(data => {
        if (data && data.code >= 300) {
          notification.open({
            message: '错误',
            description: '操作失败，' + data.message,
            icon: <NotificationIcon type='error' />,
          })
        } else {
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
      })
  }
}

// 
export function loadLegalPagedAction(params) {
  return dispatch => {
    return loadLegalPaged(params)
      .then(data => {
        if (data && data.code >= 300) {
          notification.open({
            message: '错误',
            description: '操作失败，' + data.message,
            icon: <NotificationIcon type='error' />,
          })
        } else {
          // notification.open({
          //     message: '成功',
          //     description: '操作成功，',
          //     icon: <NotificationIcon type='success' />,
          // })
        }
        return data
      })
      .catch(err => {
        throw err
      })
  }
}
//获取客户业务设置 getCustomerbusinessSetUtil
export function loadCustomerbusinessSetAction(params) {
  return dispatch => {
      return getCustomerbusinessSetUtil(params)
          .then(data => {
              if(data&&data.id){
                  let obj = {};
                  Object.keys(data).map(cl=>{
                    if(data[cl] == 0&&typeof data[cl] == 'number') {
                      obj[cl] = ''
                    }else {
                      obj[cl] = data[cl]
                    }
                  })
                  dispatch(initialize('customerBusinessSettingOne',{
                      ...obj,
                      // differentiate:data.differentiate?'y':'n',
                      control_count:data.control_count?'y':'n',
                      opt:'eidt'
                  }))
              }else {
                  dispatch(initialize('customerBusinessSettingOne',{
                     opt:"add",
                     model:'1',
                     control_count:'n',
                  //    differentiate:'n'
                  }))
              }
              dispatch({
                  type: types.GET_CUSTOMER_BUSINESS_SETTING_DETAIL,
                  customer_business_set_detail: data
              })
              return data
          })
          .catch(err => {
              throw err;
          });
  };
}
//新增客户业务设置   addCustomerbusinessSetUtil
export function addCustomerbusinessSetAction(params) {
  return dispatch => {
      return addCustomerbusinessSetUtil(params)
          .then(data => {
              if (data && data.code >= 300) {
                  notification.error({
                      message: '错误',
                      description:  data.message
                  })
              } else {
                  notification.success({
                      message: '成功',
                      description: '操作成功'
                  })
                  dispatch(loadCustomerbusinessSetAction())
              }
              return data
          })
          .catch(err => {
              throw err;
          });
  };
}
//更新客户业务设置   addCustomerbusinessSetUtil
export function editCustomerbusinessSetAction(params) {
  return dispatch => {
      return editCustomerbusinessSetUtil(params)
          .then(data => {
              if (data && data.code >= 300) {
                  notification.error({
                      message: '错误',
                      description:  data.message
                  })
              } else {
                  notification.success({
                      message: '成功',
                      description: '操作成功'
                  })
                  dispatch(loadCustomerbusinessSetAction())
              }
              return data
          })
          .catch(err => {
              throw err;
          });
  };
}
//获取服务合同设置 
export function loadContractSetAction(params) {
  return dispatch => {
      return getContractSetUtil(params)
          .then(data => {
              dispatch(initialize('customerBusinessSettingTwo',{
                  ...data,
              }))
              return data
          })
          .catch(err => {
              throw err;
          });
  };
}
//新增服务合同设置   addCustomerbusinessSetUtil
export function addContractSetAction(params) {
  return dispatch => {
      return addContractSetUtil(params)
          .then(data => {
              if (data && data.code >= 300) {
                  notification.error({
                      message: '错误',
                      description:  data.message
                  })
              } else {
                  notification.success({
                      message: '成功',
                      description: '操作成功'
                  })
                  dispatch(loadContractSetAction())
              }
              return data
          })
          .catch(err => {
              throw err;
          });
  };
}
// 获取支付密码
export function getPasswordSetUtilAction(params) {
  return dispatch => {
    return getPasswordSetUtil(params).then(data => {
      if (data && data.code >= 300) {
        notification.open({
          message: '错误',
          description: '操作失败，' + data.message,
          icon: <NotificationIcon type='error' />,
        })
      } else {
        dispatch({
          type: types.GET_PASSWORD_SET_UTIL,
          getPasswordSet: data,
        })
        dispatch(change('PayTaxSetting', 'tenant_id', data.tenant_id ? data.tenant_id : ''))
        dispatch(change('PayTaxSetting', 'charge_person', data.charge_person ? data.charge_person : ''))
        dispatch(change('PayTaxSetting', 'charge_person_id', data.charge_person_id ? data.charge_person_id : ''))
        dispatch(change('PayTaxSetting', 'charge_person_mobile', data.charge_person_mobile ? data.charge_person_mobile : ''))
        dispatch(change('PayTaxSetting', 'pass_word', data.charge_person_id ? '000000' : ''))
        dispatch(change('PayTaxSetting', 'id', data.id ? data.id : ''))
      }
      return data
    })
      .catch(err => {
        throw err
      })
  }
}
// 设置支付密码
export function postPasswordSetUtillAction(params) {
  return dispatch => {
    return postPasswordSetUtil(params).then(data => {
      if (data && data.code >= 300) {
        notification.open({
          message: '错误',
          description: '操作失败，' + data.message,
          icon: <NotificationIcon type='error' />,
        })
      } else {
        dispatch(getPasswordSetUtilAction())
      }
      return data
    })
      .catch(err => {
        throw err
      })
  }
}

//专项附加扣除更新设置
export function getAppendDeductUpdateSettingAction(params) {
  return dispatch => {
    return getAppendDeductUpdateSettingActionApi(params).then(data => {
      if (data && data.code >= 300) {
        notification.open({
          message: '错误',
          description: '操作失败，' + data.message,
          icon: <NotificationIcon type='error' />,
        })
      } else {
        return { code: 200, data }
      }
    })
      .catch(err => {
        throw err
      })
  }
}

//专项附加扣除更新设置--提交
export function submitAppendDeductUpdateSettingAction(params) {
  return dispatch => {
    return submitAppendDeductUpdateSettingActionApi(params).then(data => {
      if (data && data.code >= 300) {
        notification.open({
          message: '错误',
          description: '操作失败，' + data.message,
          icon: <NotificationIcon type='error' />,
        })
      } else {
        return { code: 200, data }
      }
    })
      .catch(err => {
        throw err
      })
  }
}
