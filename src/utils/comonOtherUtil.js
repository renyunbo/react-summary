import React, { PropTypes } from 'react';
import areaData from './areaData';
import _ from 'lodash';
import moment from 'moment';



export const baseOptions = [//后道 - 实缴模板设置 ：基数是否相同
  { name: '相同', id: 'y' },
  { name: '不相同', id: 'n' },
]

export const hasFeeSourceOptions = [//后道 - 实缴模板设置 ：是否存在缴费对象列
  { name: '存在', id: 'y' },
  { name: '不存在', id: 'n' },
]


export const person_order_status_keys = {//自由社保 - 订单列表 - 订单状态
  'paying': '待支付',
  'finishing': '待完成',
  'finished': '已完成',
  'canceled': '已终止',
  'payment': '支付中',
  'paypart': '部分支付',
  'recall': '已取消',
};
export const refund_status_keys = {//自由社保 - 取消订单 - 退款状态
  'no_refund': '无需退款',
  // 'part_refund' : '部分退款',
  'refund': '已退款',
  'has_refund': '未退款',
};
export const refundStatusOption = [//自由社保 - 取消订单 - 退款状态
  { name: '无需退款', id: 'no_refund' },
  { name: '已退款', id: 'refund' },
  { name: '未退款', id: 'has_refund' },
];

export const isArrayFn = (val) => {
  return Object.prototype.toString.call(val) === '[object Array]';
}

export const put_record = {//后道办理 - 人员列表 - 备案状态
  'need': '未办理',
  'non_need': '不需要备案',
  'success': '备案成功',
  'failed': '备案失败',
};


export const putRecordOptions = [//后道办理 - 人员列表 - 备案状态下拉选项
  { name: '未办理', id: 'need' },
  { name: '备案成功', id: 'success' },
  { name: '备案失败', id: 'failed' },
  { name: '不需要备案', id: 'non_need' },
];

export const serviceFeeOptions = [//自由社保 - 收取服务费方式
  { name: '按月收取', id: 'month' },
  { name: '按固定费用收取', id: 'fixed' }
];
export const remarkOptions = [//自由社保 - 用户管理 - 备注options
  { name: '已上班,不购买', id: '已上班,不购买' },
  { name: '电话未接听', id: '电话未接听' },
  { name: '会继续购买', id: '会继续购买' },
  { name: '未确认,之后联系', id: '未确认,之后联系' },
  { name: '服务费太高', id: '服务费太高' },
  { name: '其他', id: '其他' },
];
export const timeRangeOptions = [//自由社保 - 用户管理 - 筛选条件时间范围
  { key: 'week', name: '最近一周' },
  { key: 'half_month', name: '最近15天' },
  { key: 'month', name: '最近一月' }
];
//自由社保 - 订单来源
export const orderSourceOption = [
  { 'id': 'order_backstate', 'name': '后台下单' },
  { 'id': 'order_active', 'name': '主动下单' }
];

export const order_source_option = {
  'order_backstate': '后台下单',
  'order_active': '主动下单'
};

//地区格式转换
export const formatAreaData = (areas = []) => {
  const newAreas = [], tempProvince = {}, tempCity = {}, myAreas = {};
  areas.map(data => {
    if (data.district_code && data.city_code && data.province_code) {
      myAreas[data.province_code + data.city_code + data.district_code] = data;
    } else if (data.province_code && data.city_code && !data.district_code) {
      myAreas[data.province_code + data.city_code] = data;
    }
  });
  Object.values(myAreas).map(area => {
    if (tempCity[area.city_code]) {
      if (area.district == '全部') {
        tempCity[area.city_code].children.unshift({
          "value": area.district_code + '100',
          "label": area.district
        })
      }
      else {
        if (area.city == '全部') {
          tempCity[area.city_code] = {
            'value': city_code + '100',
            "label": city
          }
        } else {
          tempCity[area.city_code].children.push({
            "value": area.district_code,
            "label": area.district
          })
        }
      }
    }
    else {
      if (area.district == '全部') {
        tempCity[area.city_code] = {
          "value": area.city_code,
          "label": area.city,
          "children": [{
            "value": area.district_code + '100',
            "label": area.district
          }]
        }
      }
      else {
        if (area.city == '全部') {
          tempCity[area.city_code] = {
            "value": area.city_code + '100',
            "label": area.city,
          }
        } else {
          tempCity[area.city_code] = {
            "value": area.city_code,
            "label": area.city,
            "children": [{
              "value": area.district_code,
              "label": area.district
            }]
          }
        }
      }
    }
    if (tempProvince[area.province_code]) {
      if (area.city == '全部') {
        tempProvince[area.province_code].children.unshift({
          "value": area.city_code + '100',
          "label": area.city
        })
      } else {
        tempProvince[area.province_code].children.push(tempCity[area.city_code]);
      }
    } else {
      tempProvince[area.province_code] = {
        "value": area.province_code,
        "label": area.province,
        "children": [tempCity[area.city_code]]
      }
    }
  });
  return Object.values(tempProvince) || newAreas;
}
//地区格式转换
export const formatAreaAllData = (areas = []) => {
  const newAreas = [].concat(areas);
  const eachArea = (items) => {
    items.map((item, i) => {
      if (item.children) {
        item.children.unshift({
          "value": item.value + '100',
          "label": '全部'
        });
        eachArea(item.children);
      }
    });
  }
  eachArea(newAreas);
  return newAreas;
}

export const updateInfoResultOptions = [//信息变更办理结果下拉选项
  { 'id': 'success', 'name': '成功' },
  { 'id': 'failed', 'name': '失败' },
  { 'id': 'noback', 'name': '未反馈' }
];

export const statusOptions = [//参保人状态查询下拉选项
  { 'id': '正常', 'name': '正常' },
  { 'id': '无政策', 'name': '无政策' },
  { 'id': '多政策', 'name': '多政策' },
  { 'id': '待减员', 'name': '待减员' },
  { 'id': '险种异常', 'name': '险种异常' },
];

export const fontAllDataSource = {//接单列表和前道办理详情(前端管理列表) -- 来源
  'import': '导入',
  'onboard': '入职',
  'separate': '离职',
  'update_base': '系统调基',
  'increase_split': '增员接单生成',
  'increase_fail': '上月增员失败',
  'payback_fail': '上月补缴失败',
  'inc_handle': '增员异常处理',
  'base_handle': '调基异常处理',
  'employee_update': '雇员变更',
}

export const preBillDataSource = {//接单明细 -- 账单来源
  '0': '办理反馈',
  '1': '实缴导入',
  '2': '接单明细'
}
export const fontRealDataSource = {//前道实缴明细 -- 来源
  '0': '办理反馈',
  '1': '实缴明细'
}

export const companyOutDataSource = {//后道首页列表 -- 来源
  'inter': '前道确认数据',
  'ext': '接口导入',
  'ext-import': '后道导入'
}

export const payCategorys = [//缴费类型(后道实缴模板设置--缴费类型下拉选项)
  { 'id': '1', 'name': '正常汇缴' },
  { 'id': '2', 'name': '补缴' },
  { 'id': '3', 'name': '调基补差' },
  { 'id': '4', 'name': '正常汇缴+补缴' },
  { 'id': '5', 'name': '正常汇缴+调基补差' },
  { 'id': '6', 'name': '补缴+调基补差' },
  { 'id': '7', 'name': '正常汇缴+补缴+调基补差' }
];
export const isTemPolicyOptions = [//设否为临时政策
  { name: '是', id: 'y' },
  { name: '否', id: 'n' }
];
export const deleteSuffixName = (data) => {//切除文件后缀名
  let suffix_name, name;
  if (data && data.lastIndexOf('.') != -1) {
    name = data.substring(data.lastIndexOf('.'), data.length);
    suffix_name = data.replace(name, '');
  }
  return suffix_name
}
export const requestText = [
  { text: '1. 支持文件后缀 xls、xlsx文件' },
  { text: '2. 请将要上传的内容放在第一个sheet中' },
  { text: '3. 请不要加密模板文件，将导致错误' },
  { text: '4. 请不要上传带宏的文件，将导致错误' },
  { text: '5. 请不要过多的使用格式，如背景色和边框，将可能导致超时' },
  { text: '6. 导入后只会保留Excel中的数据及通过公式计算后的值，设置的文字颜色等样式、合并的单元格、以及计算公式本身都不会被保留' }
];
export const decreaseReason = [//停保原因、减员原因
  { 'id': '个人原因离职', 'name': '个人原因离职' },
  { 'id': '协商一致解除', 'name': '协商一致解除' },
  { 'id': '公司辞退', 'name': '公司辞退' },
  { 'id': '合同到期', 'name': '合同到期' },
  { 'id': '其他', 'name': '其他' }
];

export const is_pay_sihf = [//是否缴纳社保/公积金
  { 'id': 'y', 'name': '是' },
  { 'id': 'n', 'name': '否' }
];
export const sihf_handle_type = [//社保/公积金是否首次参保
  { 'id': '0', 'name': '新增' },
  { 'id': '1', 'name': '转入' }
];
export const sihfHandleType = {//社保/公积金是否首次参保
  '0': '新增',
  '1': '转入'
};
export const addHandleTypes = [//接单增员  办理方式
  { 'id': '0', 'name': '新增' },
  { 'id': '1', 'name': '转入' }
];
export const allHandleTypes = [//接单社保办理方式
  { 'id': '0', 'name': '新增' },
  { 'id': '1', 'name': '转入' },
  { 'id': '2', 'name': '补缴' },
  { 'id': '3', 'name': '正常汇缴' }
];
export const fontHandleTypes = [//前道 -- 办理方式
  { 'id': '0', 'name': '新增' },
  { 'id': '1', 'name': '转入' },
  { 'id': '2', 'name': '补缴' },
  { 'id': '3', 'name': '正常汇缴' },
  { 'id': '5', 'name': '调基' },
  { 'id': '6', 'name': '调基补差' },
];
export const handleCategoryItems = [//办理类型(导入)
  { 'id': 'increase', 'name': '增员' },
  { 'id': 'decrease', 'name': '减员' },
  { 'id': 'payback', 'name': '补缴' },
  { 'id': 'update_base', 'name': '调基' }
];
export const handle_category_items = {//办理类型(接单明细-人员列表)
  'increase': '增员',
  'decrease': '减员',
  'payback': '补缴',
  'update_base': '调基',
  'diff': '调基补差',
  'renew': '正常汇缴'
};
export const formHandleStatus = [//接单办理状态(下拉选项)
  { id: 'wait-confirm', name: '待确认' },
  { id: 'wait-handle', name: '待处理' },
  { id: 'confirm', name: '已确认' },
];
export const insuranceCategoryOptions = [//接单险种类型(下拉选项)
  { id: '0', name: '社保' },
  { id: '1', name: '公积金' },
  { id: '2', name: '社保+公积金' },
];
export const insurance_category = {//接单险种类型(下拉选项)
  '0': '社保',
  '1': '公积金',
  '2': '社保+公积金',
}

export const idTypes = [//证件类型(下拉选项)
  { 'id': '身份证', 'name': '身份证' },
  { 'id': '中国护照', 'name': '中国护照' },
  { 'id': '港澳居民居住证', 'name': '港澳居民居住证' },
  { 'id': '台湾居民居住证', 'name': '台湾居民居住证' },
  { 'id': '外国人永久居留身份证', 'name': '外国人永久居留身份证' },
  { 'id': '外国人工作许可证(A)', 'name': '外国人工作许可证(A)' },
  { 'id': '外国人工作许可证(B)', 'name': '外国人工作许可证(B)' },
  { 'id': '外国人工作许可证(C)', 'name': '外国人工作许可证(C)' },
];
export const idTypesPolicy = [//证件类型(下拉选项)增员详情 编辑基本信息
  { 'id': '身份证', 'name': '居民身份证' },
  { 'id': '中国护照', 'name': '中国护照' },
  { 'id': '港澳居民来往内地通行证', 'name': '港澳居民来往内地通行证' },
  { 'id': '港澳居民居住证', 'name': '港澳居民居住证' },
  { 'id': '台湾居民来往大陆通行证', 'name': '台湾居民来往大陆通行证' },
  { 'id': '台湾居民居住证', 'name': '台湾居民居住证' },
  { 'id': '外国护照', 'name': '外国护照' },
  { 'id': '外国人永久居留身份证', 'name': '外国人永久居留身份证' },
  { 'id': '外国人工作许可证', 'name': '外国人工作许可证' }
]

export const getStateVal = {//接单列表状态
  'wait-confirm': '待确认',
  'wait-handle': '待处理',
  'confirm': '已确认'
}
export const attendStatus = [//考勤状态
  { name: '正常', id: 'normal' },
  //  {name:'异常',id:'abnormal'},
  { name: '旷工', id: 'absence' }
];
export const getInsuranceName = (data) => {
  let str = '';
  if (data == "") {
    return str;
  } else if (Array.isArray(data)) {
    return data.join(',');
  } else {
    let arr = JSON.parse(data);
    if (arr && arr.length > 0) {
      str = arr.join(',');
      return str;
    } else {
      return str;
    }
  }
}
export const hasInsurance = [//是否分险种
  { name: '分险种', id: 'y' },
  { name: '不分险种', id: 'n' }
];
export const moveActions = [//候选人管理：候选人批量操作
  { name: '进入待入职', id: 'move_recruit' },
];

export const moveNewActions = [//候选人管理：候选人批量操作
  { name: '进入待入职', id: 'move_recruit' },
  { name: '进入待面试', id: 'move_interview' }
];

export const moveActions_new = [//候选人管理：候选人批量操作
  { name: '邀请面试', id: 'move_interview' },
  { name: '进入体检', id: 'move_physical' },
  { name: '进入待入职', id: 'move_recruit' },
  { name: '放弃', id: 'move_abandon' }
];

export const moveActions_interview = [//候选人管理：待面试批量操作
  { name: '面试合格', id: 'move_success_recruit' },
  { name: '面试不合格', id: 'move_fail_recruit' },
  { name: '进入体检', id: 'move_physical' },
  { name: '进入待入职', id: 'move_recruit' },
  { name: '放弃', id: 'move_abandon' }
];

export const moveActions_checkup = [//候选人管理：待体检批量操作
  { name: '体检合格', id: 'move_recruit' },
  { name: '体检不合格', id: 'move_fail_physical' },
  { name: '进入待入职', id: 'move_recruit' },
  { name: '放弃', id: 'move_abandon' }
];


export const allFeesOptions = [//分险
  { label: '(单险)个人费用', value: 'ins_person_fee' },
  { label: '(单险)企业费用', value: 'ins_ent_fee' },
  { label: '(单险)小计', value: 'ins_fee' },
  { label: '(所有险)个人合计', value: 'total_person_fee' },
  { label: '(所有险)企业合计', value: 'total_ent_fee' },
  { label: '(所有险)总费用', value: 'total_fee' }
];

export const feesOptions = [//不分险
  { label: '(单险)个人费用', value: 'ins_person_fee' },
  { label: '(单险)企业费用', value: 'ins_ent_fee' },
  { label: '(单险)小计', value: 'ins_fee' }
];

export const zhengZhoufeesOptions = [
  { label: '缴费金额', value: 'ins_person_ent_fee' }
];

export const applayStatus = [//日薪发放申请状态
  { name: '待处理', id: 'processing' },
  { name: '待发放', id: 'tobeissued' },
  { name: '已发放', id: 'issued' },
  { name: '发放失败', id: 'failed' }
];


export const commentOptions = [//候选人备注选项
  { name: '电话无人接听', id: '电话无人接听' },
  { name: '电话为空号', id: '电话为空号' },
  { name: '暂不考虑换工作', id: '暂不考虑换工作' },
  { name: '薪酬太低暂不考虑', id: '薪酬太低暂不考虑' },
  { name: '希望有住宿', id: '希望有住宿' },
  { name: '工作地点较远不考虑', id: '工作地点较远不考虑' },
  { name: '候选人不在招聘所在地，需跟踪联系', id: '候选人不在招聘所在地，需跟踪联系' },
  { name: '其它', id: 'other' },
];

export const diffOptions = [//财务费用状态：抵扣费用
  { name: '未抵扣', id: 'wait' },
  { name: '已抵扣', id: 'handled' }
];
export const diffPaybackOptions = [//财务费用状态：补收费用
  { name: '未补收', id: 'wait' },
  { name: '已补收', id: 'handled' }
];
export const diffReturnOptions = [//财务费用状态：退款费用
  { name: '未退款', id: 'wait' },
  { name: '已退款', id: 'handled' }
];
export const returnTypeOptions = [//财务费用退款方式
  { name: '立即退款', id: 'now' },
  { name: '退到下月工资', id: 'next_month' }
];
export const getAllQuery = (handle_type, keysearch, start_month, status) => {//财务费用处理参数方法
  const params = [];
  if (handle_type)
    params.push("diff_handle_type=" + handle_type);
  if (keysearch)
    params.push("&keysearch=" + keysearch);
  if (start_month)
    params.push("&start_month=" + moment(start_month));
  if (status)
    params.push("&status=" + status);
  return params.join('')
}
export class NotificationIcon extends React.Component {
  render() {
    const { type } = this.props;
    if (type == 'success') {
      return (
        <img style={{ width: '32px', height: '32px' }} src='./img/成功icon.png' />
      )
    } else if (type == 'error') {
      return (
        <img style={{ width: '32px', height: '32px' }} src='./img/错误icon.png' />
      )
    } else if (type == 'info') {
      return (
        <img style={{ width: '32px', height: '32px' }} src='./img/信息icon.png' />
      )
    }
  }
}

export const formatArrayToTableFun = (infoArray = [], column = 4) => {
  const arrayLength = infoArray.length, tempArray = [];
  let empty = 0, subTemp = [];
  if (arrayLength % column > 0) {
    empty = column - (arrayLength % column);
  }
  if (empty > 0) {
    for (let i = 0; i < empty; i++) {
      infoArray.push({
        lable: '',
        key: '',
        type: 'empty'
      })
    }
  }
  infoArray.map((info, i) => {
    if (i % column == 0) {
      subTemp = [{
        lable: info.name,
        key: 'my_key',
        value: info.value,
        type: info.type ? info.type : 'empty',
        pay_frequency: info.pay_frequency ? info.pay_frequency : '',
        pay_type: info.pay_type ? info.pay_type : '',
      }];
      tempArray.push(subTemp);
    } else {
      subTemp.push({
        lable: info.name,
        key: 'my_key',
        value: info.value,
        type: info.type ? info.type : 'empty',
        pay_frequency: info.pay_frequency ? info.pay_frequency : '',
        pay_type: info.pay_type ? info.pay_type : '',
      });
    }
  });
  return tempArray;
}

export const formartOrgUser = (sharedRecrutiers) => {
  const tempArray = [];
  const compare = (x, y) => {
    // if (x.org < y.org) {
    //   return 1;
    // } else if (x.org > y.org) {
    //   return -1;
    // } else {
    //   return 0;
    // }
    return x.org.localeCompare(y.org, "zh");
  }
  sharedRecrutiers.map((recrutier, i) => {
    const item = Object.assign({}, recrutier);
    if (item.org_id) {
      item.name = item.name + '  (' + item.org + ')';
    } else {
      item.name = item.name + '  (暂无部门)';
      item.org = '暂无部门';
    }
    tempArray.push(item)
  });
  return tempArray.sort(compare);
}

export const getBusiinsurancePlanColumns = () => {
  const columns = [
    {
      title: '险种', dataIndex: 'category', key: 'category', width: 250,
      render: (text, record) => {
        return (
          <div style={{ padding: '0px 8px' }}>{text}</div>
        )
      }
    },
    {
      title: '保障内容', dataIndex: 'task_no', key: 'task_no', width: 200,
      render: (text, record) => {
        return (
          <div className={cx(s.detailes_tab)}>
            {
              record.items.map((item, index) => {
                return <div key={index}>{item.name}</div>
              })
            }
          </div>
        )
      }
    },
    {
      title: '保额', dataIndex: 'task_place', key: 'task_place', width: 200,
      render: (text, record) => {
        return (
          <div className={cx(s.detailes_tab)}>
            {
              record.items.map((item, index) => {
                return <div key={index}>{item.insurance_amount}元</div>
              })
            }
          </div>
        )
      }
    },
  ]
  return columns
}
