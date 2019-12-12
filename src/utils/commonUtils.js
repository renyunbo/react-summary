import areaData from './areaData';
import _ from 'lodash';
import moment from 'moment';
import React from 'react';
/**
 * Created by xaviertung on 16/8/29.
 */
var spaceReg = /\s*/g;
var nextLineReg = /\\n/g;

var EMPLOYEE_NAME_DICT = ["员工姓名", "职工姓名", "职员姓名", "姓名", "员工名字", "名字"];
var BASE_PAY_DICT = ["基本工资", "基本薪资", "基本月薪", "基本月工资", "基本月薪资", "基本薪酬", "基本月薪酬"];



export const update_action_range = {//企业社保 - 政策生效范围
    'y': '所有人员',
    'n': '仅新增人员',
}

export const updateActionRange = [//企业社保 - 政策生效范围
    { id: 'y', name: '所有人员' },
    { id: 'n', name: '仅新增人员' },
]

export const personReminderDate = [//自由社保 - 续保设置提醒日期
    { name: "1日", id: 1 },
    { name: "2日", id: 2 },
    { name: "3日", id: 3 },
    { name: "4日", id: 4 },
    { name: "5日", id: 5 },
    { name: "6日", id: 6 },
    { name: "7日", id: 7 },
    { name: "8日", id: 8 },
    { name: "9日", id: 9 },
    { name: "10日", id: 10 },
    { name: "11日", id: 11 },
    { name: "12日", id: 12 },
    { name: "13日", id: 13 },
    { name: "14日", id: 14 },
    { name: "15日", id: 15 },
    { name: "16日", id: 16 },
    { name: "17日", id: 17 },
    { name: "18日", id: 18 },
    { name: "19日", id: 19 },
    { name: "20日", id: 20 },
    { name: "21日", id: 21 },
    { name: "22日", id: 22 },
    { name: "23日", id: 23 },
    { name: "24日", id: 24 },
    { name: "25日", id: 25 },
    { name: "26日", id: 26 },
    { name: "27日", id: 27 },
    { name: "28日", id: 28 },
    { name: "29日", id: 29 },
    { name: "30日", id: 30 },
]

// 法务实体申报日选择
export const taxApplyDate = [
    { name: "每月1日", id: '1', disabled: false },
    { name: "每月2日", id: '2', disabled: false },
    { name: "每月3日", id: '3', disabled: false },
    { name: "每月4日", id: '4', disabled: false },
    { name: "每月5日", id: '5', disabled: false },
    { name: "每月6日", id: '6', disabled: false },
    { name: "每月7日", id: '7', disabled: false },
    { name: "每月8日", id: '8', disabled: false },
    { name: "每月9日", id: '9', disabled: false },
    { name: "每月10日", id: '10', disabled: false },
    { name: "每月11日", id: '11', disabled: false },
    { name: "每月12日", id: '12', disabled: false },
    { name: "每月13日", id: '13', disabled: false },
    { name: "每月14日", id: '14', disabled: false },
    { name: "每月15日", id: '15', disabled: false },
    { name: "每月16日", id: '16', disabled: false },
    { name: "每月17日", id: '17', disabled: false },
    { name: "每月18日", id: '18', disabled: false },
    { name: "每月19日", id: '19', disabled: false },
    { name: "每月20日", id: '20', disabled: false },
    { name: "每月21日", id: '21', disabled: false },
    { name: "每月22日", id: '22', disabled: false },
    { name: "每月23日", id: '23', disabled: false },
    { name: "每月24日", id: '24', disabled: false },
    { name: "每月25日", id: '25', disabled: false },
    { name: "每月26日", id: '26', disabled: false },
    { name: "每月27日", id: '27', disabled: false },
    { name: "每月28日", id: '28', disabled: false },
    { name: "每月29日", id: '29', disabled: false },
    { name: "每月30日", id: '30', disabled: false },
]

export const getTenantAndCustomeList = (tenant, custome) => {//客户列表加入机构名称
    let newList = [];
    if (tenant) {
        newList.push(tenant)
    }
    if (custome && custome.items && custome.items.length > 0) {
        custome.items.map(data => {
            newList.push(data)
        })
    }
    return newList
}
export const yes_no_options = [//客户法务实体
    { id: 'y', name: '是' },
    { id: 'n', name: '否' },
]
export const op_si_options = [//客户法务实体
    { key: 'y', name: '是' },
    { key: 'n', name: '否' },
]
export const setBrokersOption = [//是否开启经纪人
    { name: '开启', id: 'y' },
    { name: '关闭', id: 'n' }
];

export const setEvaluateOption = [//是否开启人才测评
    { name: '开启', id: 'open' },
    { name: '关闭', id: 'close' }
];
export const belongType = [//薪酬方案归属类型
    { name: '自营', id: 'tenant' },
    { name: '客户', id: 'customer' }
];
export const declaringUnitTypeOption = [//个税申报单位归属类型
    { name: '自营', id: 'tenant' },
    { name: '客户', id: 'customer' },
    { name: '供应商', id: 'provider' },

];
export const declaringTypeOption = [//个税申报单位归属类型
    { name: '劳务费', id: 'labor' },
    { name: '工资薪金', id: 'salary' },

];

export const declaring_unit_type_option = {//个税申报单位归属类型
    'tenant': '自营',
    'customer': '客户',
    'provider': '供应商'
};

export const applayStatus = {//个税申报状态
    'unissued': '待申报',
    'issued': '已申报'
}
export const applayResult = {//个税申报结果
    'init': '--',
    'success': '申报成功',
    'failed': '申报失败'
}

export const paySalaryResultOption = [
    { name: '未发放', id: 'init' },
    { name: '发放失败', id: 'failed' },
    { name: '发放成功', id: 'success' },
];

export const taxCategoryOption = [
    { name: '工资薪金', id: 'salary' },
    { name: '劳务费', id: 'service_fee' },
    { name: '年终奖', id: 'yearend_bonus' },
];
export const taxCategory = {
    'salary': '工资薪金',
    'service_fee': '劳务费',
    'yearend_bonus': '年终奖',
}
export const sendResult = {//薪资发放结果
    'init': '未发放',
    'success': '发放成功',
    'failed': '发放失败',
    'payroll': '--'
}
export const personSendResult = {//薪资发放状态
    'unissued': '未发放',
    'success': '发放成功',
    'payroll': '发放中',
    'pending': '待发放'
}
export const sendResultOption = [
    { name: '待发放', id: 'init' },
    { name: '发放成功', id: 'success' },
    { name: '发放失败', id: 'failed' },
];
export const salaryStatus = {//薪酬发放状态
    'active': '待审核',
    'pending': '待发放',
    'processing': '处理中',
    'success': '成功',
    'fail': '失败',
    'abnormal': '数据异常',
    'unavailable': '导入失败'
};
export const handleType = [
    { name: '新增', id: '0' },
    { name: '转入', id: '1' },
    { name: '补缴', id: '2' },
    { name: '正常汇缴', id: '3' }
];
export const commentOption = [
    { name: '不再购买', id: '不再购买' },
    { name: '已上班', id: '已上班' },
    { name: '电话未接听', id: '电话未接听' },
    { name: '会继续购买', id: '会继续购买' },
    { name: '未确定,之后联系', id: '未确定,之后联系' },

];
export const payBackReasonOption = [
    { name: '不再补缴', id: '不再补缴' },
    { name: '任性,不买保险', id: '任性,不买保险' },
    { name: '其他原因', id: '其他原因' }
];
export const reasonOption = [
    { name: '不再续保', id: '不再续保' },
    { name: '已上班', id: '已上班' },
    { name: '任性,不买保险', id: '任性,不买保险' },
    { name: '其他原因', id: '其他原因' },
];

export const typeOptions = [
    { name: '自营', id: '0' },
    { name: '客户', id: '1' },
    { name: '供应商', id: '2' },
];

export const deadlineOption = [//截止办理日期
    { name: '每月1日', id: 1 }, { name: '每月2日', id: 2 }, { name: '每月3日', id: 3 }, { name: '每月4日', id: 4 }, { name: '每月5日', id: 5 },
    { name: '每月6日', id: 6 }, { name: '每月7日', id: 7 }, { name: '每月8日', id: 8 }, { name: '每月9日', id: 9 }, { name: '每月10日', id: 10 },
    { name: '每月11日', id: 11 }, { name: '每月12日', id: 12 }, { name: '每月13日', id: 13 }, { name: '每月14日', id: 14 }, { name: '每月15日', id: 15 },
    { name: '每月16日', id: 16 }, { name: '每月17日', id: 17 }, { name: '每月18日', id: 18 }, { name: '每月19日', id: 19 }, { name: '每月20日', id: 20 },
    { name: '每月21日', id: 21 }, { name: '每月22日', id: 22 }, { name: '每月23日', id: 23 }, { name: '每月24日', id: 24 }, { name: '每月25日', id: 25 },
    { name: '每月26日', id: 26 }, { name: '每月27日', id: 27 }, { name: '每月28日', id: 28 }, { name: '每月29日', id: 29 }, { name: '每月30日', id: 30 },
];
export const natureOption = [//户籍性质
    { name: '城镇', id: '0' },
    { name: '农村', id: '1' },
    { name: '本地城镇', id: '2' },
    { name: '本地农村', id: '3' },
    { name: '外地城镇', id: '4' },
    { name: '外地农村', id: '5' },
    { name: '自定义', id: '6' }
];

export const wageTypeOption = [//薪资类型
    { name: '面议', id: 'negotiable' },
    // {name:'固定月薪',id:'fixed-monthly'},
    { name: '年薪', id: 'annual' },
    { name: '月薪', id: 'monthly' },//,
    { name: '日薪', id: 'daily' },
    { name: '时薪', id: 'hourly' },

];
export const wageTypeStatus = {
    'negotiable': '面议',
    'fixed-monthly': '固定月薪',
    'monthly': '月薪',
    'daily': '日薪',
    'hourly': '时薪',
    'annual': '年薪'
}

export const selectPolicyCategory = {
    '0': '社保',
    '1': '公积金',
    '2': '社保+公积金'
}
export const policyCategoryOptiond = [
    { name: '社保', id: '0' },
    { name: '公积金', id: '1' },
    { name: '社保+公积金', id: '2' }
];
export const outPolicyCategory = [
    { name: '社保', id: '0' },
    { name: '公积金', id: '1' }
];
export const opStatusOptions = [//企业后道状态
    { name: '已完成', id: 'completed' },
    { name: '未完成', id: 'uncompleted' }
];

export const selectBelongCategory = {
    '0': '自营',
    '1': '客户',
    '2': '供应商'
}
export const backFrontStatus = {//后道需核对项状态
    '0': '待确认',
    '1': '已退回',
    '2': '按调基办理',
    '3': '无需处理'
}

export const getSingContainerHeight = () => {
    const contentMinHeight = window.innerHeight - 16 - 64;
    return { minHeight: contentMinHeight + 'px' }
}
export const IDoption = [
    { name: '身份证', id: '身份证' },
    { name: '身份证', id: '身份证' },
    { name: '台胞证件', id: '台胞证件' },
    { name: '港澳身份证', id: '港澳身份证' },
    { name: '其余证件', id: '其余证件' }
];

export const ent_payback_source = {//企业前道补缴来源
    'auto': '系统生成',
    'manual': '个人办理'
}
export const payback_source = {//个人前道补缴来源
    'auto': '系统生成',
    'manual': '个人办理'
}
export const handle_type = {//前后道办理方式
    '0': '新增',
    '1': '转入',
    '2': '补缴',
    '3': '正常汇缴',
    '4': '减员',
    '5': '调基',
    '6': '调基补差',
}
export const datum_check_status = {//前道
    'init': '待审核',
    'success': '成功',
    'failed': '失败',
    'wait-submit': '待提交'
}

export const datum_check_status_options = [//前道
    { name: '待提交', id: 'wait-submit' },
    { name: '待审核', id: 'init' },
    { name: '成功', id: 'success' },
    { name: '失败', id: 'failed' }
]
export const back_op = {//后道办理进度
    '0': '前道未确认',
    '1': '待办理',
    '2': '已完成'
}
export const back_op_options = [//后道办理进度
    { name: '待办理', id: '1' },
    { name: '已完成', id: '2' },
    { name: '前道未确认', id: '0' }
]
export const op_result_options_search = [//后道办理结果
    { name: '成功', id: 'success' },
    { name: '失败', id: 'failed' },
    { name: '待反馈', id: 'init' },
]
export const progress_op = {//前道
    '0': '待前道确认',
    '1': '待后道处理',
    '2': '后道已处理'
}
export const progress = [//前道
    { name: '待前道确认', id: '0' },
    { name: '待后道处理', id: '1' },
    { name: '后道已处理', id: '2' }
]

export const next_op = {//前道
    'refund': '退款',
    'payback': '补缴',
    'increaseandpayback': '下月新增且补缴'
}
export const result_op = {//办理结果
    '': '--',
    'init': '待反馈',
    'success': '成功',
    'failed': '失败',
    'base_conflict': '基数不同',
    'returned': '后道退回',
    'wait-result': '等待结果'
}
export const addReturnReson = [//增员退回前道原因
    { name: '无法增员', id: '无法增员' },
    { name: '其他原因', id: '其他原因' }
]
export const downReturnReson = [//减员退回前道原因
    { name: '无法减员', id: '无法减员' },
    { name: '其他原因', id: '其他原因' }
]
export const repayReturnReson = [//补缴退回前道原因
    { name: '无法补缴', id: '无法补缴' },
    { name: '其他原因', id: '其他原因' }
]
export const ajustBaseReturnReson = [//调基退回前道原因
    { name: '无法办理', id: '无法办理' },
    { name: '其他原因', id: '其他原因' }
]

export const opResult = [//前道
    { name: '待反馈', id: 'init' },
    { name: '成功', id: 'success' },
    { name: '失败', id: 'failed' },
    { name: '后道退回', id: 'returned' }
]

export const handleStatus = {//后道办理状态
    'completed': '已完成',
    'uncompleted': '未完成'
}
export const op_result_options = [//后道办理结果
    { id: 'success', name: '成功' },
    { id: 'failed', name: '失败' },
]
export const all_op_result_options = [//后道办理结果:全部险种
    { id: 'all_success', name: '全部成功' },
    { id: 'all_failed', name: '全部失败' }
]
export const down_fail_reason_options = [//后道办理反馈 - 失败 -原因下拉选项
    { id: '不在本公司账户上', name: '不在本公司账户上' },
    { id: '已减员', name: '已减员' },
    { id: '其他', name: '其他' },
]
export const increase_payback_fail_reason_options = [//后道办理反馈 - 增员/补缴 - 失败原因下拉选项
    { id: '无法区分新增转入', name: '无法区分新增转入' },
    { id: '上家未减员', name: '上家未减员' },
    { id: '线下未备案', name: '线下未备案' },
    { id: '证件照格式不正确', name: '证件照格式不正确' },
    { id: '信息不完整', name: '信息不完整' },
    { id: '其他', name: '其他' }
]
export const ajustbase_fail_reason_options = [//后道办理反馈 - 调基 - 失败原因下拉选项
    { id: '信息不完整', name: '信息不完整' },
    { id: '其他', name: '其他' }
]



export const updateInfo_result_options = [//信息变更 - 办理结果
    { key: 'success', name: '成功' },
    { key: 'failed', name: '失败' },
]
export const caculateDate = (end, start) => {
    let newStart = moment(start * 1000).format('YYYY MM DD');
    let newEnd = moment(end * 1000).format('YYYY MM DD');
    if (moment(newEnd).diff(moment(newStart), 'days') < 0 || 0 < (moment(newEnd).diff(moment(newStart), 'days')) < 1) {
        return 0
    } else {
        return moment(newEnd).diff(moment(newStart), 'days');
    }

}
export const customerOptions = [
    { name: '不显示', id: '0' },
    { name: '机构名称', id: '1' },
    { name: '客户全称', id: '2' },
    { name: '客户简称', id: '3' },
    { name: '自定义', id: '4' },
];
export const customerOptionsOther = [
    { name: '不显示', id: '0' },
    { name: '机构名称', id: '1' },
    { name: '客户全称', id: '2' },
    { name: '自定义', id: '4' },
];
export const marriMap = {
    '已婚': '已婚',
    '未婚': '未婚',
    '1': '已婚',
    '2': '未婚',
}

export const systemServiceContents = [
    // {value:'S00002',label:'招聘'},
    // {value:'S00003',label:'劳动合同代签'},
    // {value:'S00004',label:'薪资个税代理'},
    // {value:'S00005',label:'社保代理'},
    // {value:'S00006',label:'公积金代理'}
    // {value:'S00001',label:'服务合同'},
    { value: 'S00002', label: '招聘服务' },
    { value: 'S00003', label: '劳动合同管理' },
    { value: 'S00004', label: '员工入离职管理' },
    { value: 'S00005', label: '员工在职人事管理' },
    { value: 'S00006', label: '员工户籍管理' },
    { value: 'S00007', label: '社会保险代缴及管理' },
    { value: 'S00008', label: '住房公积金代缴及管理' },
    { value: 'S00009', label: '招聘支持' },
    { value: 'S00010', label: '薪酬管理' },
    { value: 'S00011', label: '毕业生接收解决方案' },
    { value: 'S00012', label: '退休手续代办' },
    { value: 'S00013', label: '残保金代缴' },
    { value: 'S00014', label: '工会服务' },
    { value: 'S00015', label: '活动策划' },
    { value: 'S00016', label: '财务外包' },
    { value: 'S00017', label: '人才测评' },
    { value: 'S00018', label: '代办公积金贷款' },
    { value: 'S00019', label: '车务管理' },
    { value: 'S00020', label: '社会化用工' }
];

export const degreeData = {
    '1': '不限',
    '2': '初中',
    '3': '高中',
    '8': '中专',
    '4': '大专',
    '5': '本科',
    '6': '硕士',
    '7': '博士'
}

// 求职状态
export const inserviceStatusData = {
    'out_service_any': '离职-随时到岗',
    'in_service_month': '在职-月内到岗',
    'in_service_consider': '在职-考虑机会',
    'in_service_no_consider': '在职-暂不考虑',
}

// 求职状态select
export const inserviceStatus = [
    { name: '离职-随时到岗', id: 'out_service_any' },
    { name: '在职-月内到岗', id: 'in_service_month' },
    { name: '在职-考虑机会', id: 'in_service_consider' },
    { name: '在职-暂不考虑', id: 'in_service_no_consider' },
]


export const systemServiceProducts = [
    { name: '委托招聘', id: 'P00001' },
    { name: '人事代理', id: 'P00002' },
    { name: '劳务派遣', id: 'P00003' },
    { name: '项目外包', id: 'P00004' },
    { name: '劳务外包', id: 'P00005' },
    { name: '短期工业务', id: 'P00006' },
    { name: '社会化用工', id: 'P00007' },
    { name: '人事委托', id: 'P00008' },
    { name: '业务外包BPO', id: 'P00009' },
    { name: '人事服务外包', id: 'P000010' },
    { name: '其他', id: 'other' },
];

export const systemServiceProductMap = {
    "P00001": "委托招聘",
    "P00002": "人事代理",
    "P00003": "劳务派遣",
    "P00004": "项目外包",
    "P00005": "劳务外包",
    "P00006": "短期工业务",
    "P00007": "社会化用工",
    "P00008": "人事委托",
    "P00009": "业务外包BPO",
    "P00010": "人事服务外包",
    "other": "其他",
}

// 商保收费规则
export const chargeRulesOptions = [
    { name: '日', id: 'day' },
    { name: '月', id: 'month' },
    { name: '季', id: 'season' },
    { name: '年', id: 'year' },
    { name: '次', id: 'disposable' },
]

// 退费规则
export const refundRulesOptions = [
    { name: '日', id: 'day' },
    { name: '月', id: 'month' },
    { name: '不退', id: 'refused' },
]

export const chargeRefundRulesDate = {
    'day': '日',
    'month': '月',
    'season': '季',
    'year': '年',
    'refused': '不退',
    'disposable': '次',
}

// 职业分类
export const jobCategoryOptions = [
    { name: '生产', id: '生产' },
    { name: '加工', id: '加工' },
    { name: '制造', id: '制造' },
    { name: '服务', id: '服务' },
    { name: '其他', id: '其他' },
]

// 商报人员状态
export const busiinsurancePersonOptions = [
    { name: '在保中', id: 'on_insurance' },
    { name: '加保待生效', id: 'add_wait_effect' },
    { name: '减保待生效', id: 'reduce_wait_effect' },
    { name: '已减保', id: 'reduced' },
    { name: '失败', id: 'failed' },
]

export const busiinsurancePersonData = {
    'init': '待加保',
    'on_insurance': '在保中',
    'add_wait_effect': '加保待生效',
    'reduce_wait_effect': '减保待生效',
    'reduced': '已减保',
    'failed': '失败',
}

export const formatFormDefind = (formData) => {
    formData.map((field, i) => {
        const { type } = field;
        const options = JSON.parse(field.options) ? JSON.parse(field.options) : {};
        const { choices = [] } = options;
        if (type == 'picklist') {
            const temp = [];
            choices && choices.map(choice => {
                temp.push({
                    id: choice,
                    name: choice
                })
            })
            field['choices'] = temp;
        }
        field['is_required'] = options.is_required;
        if (options.is_opened == undefined) {
            field['is_opened'] = true;
        } else {
            field['is_opened'] = 1111;
        }

    });
    return formData;
}

export const formatFormDefindNewEmployee = (formData) => {
    formData.map((field, i) => {
        const { type } = field;
        const options = JSON.parse(field.options) ? JSON.parse(field.options) : {};
        const { choices = [] } = options;
        if (type == 'picklist') {
            const temp = [];
            choices && choices.map(choice => {
                temp.push({
                    id: choice,
                    name: choice
                })
            })
            field['choices'] = temp;
        }
        field['is_required'] = options.is_required;
    });
    return formData;
}
export const formatFormDefindNew = (formData) => {
    formData.map((field, i) => {
        const { type } = field;
        const options = JSON.parse(field.options) ? JSON.parse(field.options) : {};
        const { choices = [] } = options;
        if (type == 'picklist' || type == 'select') {
            const temp = [];
            choices && choices.map(choice => {
                temp.push({
                    id: choice,
                    name: choice
                })
            })
            field['choices'] = temp;
        }
        field['is_required'] = options.is_required
        if (options.is_opened == undefined) {
            field['is_opened'] = true;
        } else {
            field['is_opened'] = options.is_opened;
        }
        if (options.show_in_list == undefined) {
            field['show_in_list'] = true;
        } else {
            field['show_in_list'] = options.show_in_list;
        }
        if (options.can_modify == undefined) {
            field['can_modify'] = true;
        } else {
            field['can_modify'] = options.can_modify;
        }
    });
    return formData;
}
export const sortByPos = (formData) => {

    let basicForm = [], extraForm = [];
    if (formData && formData.length > 0) {
        formData.map(data => {
            if (data.section == 'basic') {
                basicForm.push(data);
            } else if (data.section == 'extra') {
                extraForm.push(data);
            }
        })
    }
    let newBasicForm = [], newExtraForm = [];
    basicForm.map(data => {
        newBasicForm[data.pos] = data;
    });
    extraForm.map(data => {
        newExtraForm[data.pos] = data;
    });
    return {
        newBasicForm,
        newExtraForm
    }

}
export const sortData = (formData) => {
    let newBasicForm = [], newExtra = [], newLeaveForm = [], newIn_serviceForm = [], newEducationForm = [], newOtheForm = [], newBaseForm = [], newOnlnyOtherForm = [], allDataForm = [];
    let basicForm = [], extraForm = [], LeaveForm = [], In_serviceForm = [], EducationForm = [], OtheForm = [], BaseForm = [], onlnyOther = [];
    if (formData && formData.length > 0) {
        formData.map(data => {
            if (data.section == 'basic') {
                if (data.field_category == '离职信息') {
                    LeaveForm.push(data)
                } else if (data.field_category == '在职信息') {
                    In_serviceForm.push(data)
                } else if (data.field_category == '学历信息') {
                    EducationForm.push(data)
                } else if (data.field_category == '其他信息') {
                    onlnyOther.push(data)
                } else if (data.field_category == '基本信息') {
                    BaseForm.push(data)
                }
            } else if (data.section == 'extra') {
                extraForm.push(data);
            }
        })
        OtheForm = OtheForm.concat(OtheForm, extraForm)
    }
    extraForm.map(data => {
        newExtra[data.pos] = data;
    });
    LeaveForm.map(data => {
        newLeaveForm[data.pos] = data;
    });
    In_serviceForm.map(data => {
        newIn_serviceForm[data.pos] = data;
    });
    EducationForm.map(data => {
        newEducationForm[data.pos] = data;
    });
    BaseForm.map(data => {
        newBaseForm[data.pos] = data;
    });
    onlnyOther.map(data => {
        newOnlnyOtherForm[data.pos] = data;
    })
    allDataForm = allDataForm.concat(newIn_serviceForm, newBaseForm, newEducationForm, newLeaveForm, newOnlnyOtherForm)
    return {
        newExtra,
        newLeaveForm,
        newIn_serviceForm,
        newEducationForm,
        newBaseForm,
        newOnlnyOtherForm,
        allDataForm,
    }

}
export const newSort = (formData) => {
    let ultimatelyArr = [], temporaryArr = [], sortByPos = []
    if (formData && formData.length > 0) {
        formData.map(data => {
            if (typeof (data.is_required) == 'string') {
                data.is_required = data.is_required == 'true' ? true : false
            }
            if (temporaryArr.indexOf(data.field_category) == -1) {
                if (data.section == "basic" || (data.section == "extra" && JSON.parse(data.options).is_opened)) {
                    let arr = {}
                    // console.log(data)
                    arr[data.field_category] = [data]
                    temporaryArr.push(data.field_category)
                    ultimatelyArr.push(arr)
                }
            } else {
                if (data.section == "basic" || (data.section == "extra" && JSON.parse(data.options).is_opened)) {
                    ultimatelyArr.map((item, index) => {
                        if (Object.keys(item)[0] == data.field_category) {
                            item[data.field_category].push(data)
                        }
                    })
                }
            }
        })
    }
    // sortByPos = JSON.parse(JSON.stringify(ultimatelyArr))
    // sortByPos.map((item)=>{
    //     let temporary = [] ,arr = Object.values(item)[0]
    //     console.log(item, Object.values(item)[0], arr , typeof arr )
    //     arr.map(data=>{
    //         // console.log(data)
    //         temporary[data.pos] = data
    //     })
    //     item[Object.keys(item)[0]] = arr
    //     console.log(item)
    // })
    return { ultimatelyArr }

}
export const sortByPosNew = (formData) => {
    let basicForm = [], extraForm = [];
    if (formData && formData.length > 0) {
        formData.map(data => {
            if (typeof (data.is_required) == 'string') {
                data.is_required = data.is_required == 'true' ? true : false
            }
            if (data.section == 'basic') {
                basicForm.push(data);
            } else if (data.section == 'extra') {
                extraForm.push(data);
            }
        })
    }
    let newBasicForm = [], newExtraForm = [];
    basicForm.map(data => {
        newBasicForm[Number(data.pos)] = data;
    });
    extraForm.map(data => {
        newExtraForm[Number(data.pos)] = data;
    });

    return {
        newBasicForm,
        newExtraForm
    }

}
export const sortByPosNum = (formData) => {
    let basicForm = [], extraForm = [], newBasicForm = [], newExtraForm = []
    if (formData && formData.length > 0) {
        formData.map(data => {
            if (data.section == 'basic') {
                basicForm.push(data);
            } else if (data.section == 'extra') {
                extraForm.push(data);
            }
        })
    }
    basicForm.map(data => {
        newBasicForm[Number(data.pos) - 1] = data;
    });
    extraForm.map(data => {
        newExtraForm[Number(data.pos) - 1] = data;
    });
    return {
        newBasicForm,
        newExtraForm,
    }

}

export const leaveRason = [
    { name: '家庭原因', id: '家庭原因' },
    { name: '身体原因', id: '身体原因' },
    { name: '薪资原因', id: '薪资原因' },
    { name: '合同到期', id: '合同到期' },
    { name: '个人原因', id: '个人原因' },
    { name: '组织调控/裁员', id: '组织调控/裁员' },
    { name: '违反公司条例', id: '违反公司条例' },
    { name: '劳动强度', id: '劳动强度' },
    { name: '工作环境', id: '工作环境' },
    { name: '薪资福利', id: '薪资福利' },
    { name: '职业发展', id: '职业发展' },
    { name: '人际关系', id: '人际关系' },
    { name: '其他原因', id: '其他原因' }
]

export const categoryDataSelect = [
    { name: '操作工', id: '操作工' },
    { name: '销售', id: '销售' },
    { name: '导购', id: '导购' },
    { name: '营业员', id: '营业员' },
    { name: '保安', id: '保安' },
    { name: '司机', id: '司机' },
    { name: '技工', id: '技工' },
    { name: '快递员', id: '快递员' },
    { name: '后厨', id: '后厨' },
    { name: '人事', id: '人事' },
    { name: '文员', id: '文员' },
    { name: '收银员', id: '收银员' },
    { name: '普工', id: '普工' },
    { name: '客服', id: '客服' },
    { name: '服务员', id: '服务员' },
    { name: '车床工', id: '车床工' },
    { name: '机修汽修', id: '机修汽修' },
    { name: '电焊工', id: '电焊工' },
    { name: '市场公关', id: '市场公关' },
    { name: '财务会计', id: '财务会计' },
    { name: '行政后勤', id: '行政后勤' },
    { name: '贸易采购', id: '贸易采购' },
    { name: '建筑工', id: '建筑工' },
    { name: '家政保洁', id: '家政保洁' },
    { name: '印刷工', id: '印刷工' },
    { name: '物流仓储', id: '物流仓储' },
    { name: '其他', id: '其他' }
];
export const categoryData = [
    { name: '不限', id: '不限' },
    { name: '操作工', id: '操作工' },
    { name: '销售', id: '销售' },
    { name: '导购', id: '导购' },
    { name: '营业员', id: '营业员' },
    { name: '保安', id: '保安' },
    { name: '服务员', id: '服务员' },
    { name: '司机', id: '司机' },
    { name: '技工', id: '技工' },
    { name: '快递员', id: '快递员' },
    { name: '人事', id: '人事' },
    { name: '文员', id: '文员' },
    { name: '收银员', id: '收银员' },
    { name: '普工', id: '普工' },
    { name: '客服', id: '客服' },
    { name: '物流仓储', id: '物流仓储' },
    { name: '车床工', id: '车床工' },
    { name: '机修汽修', id: '机修汽修' },
    { name: '电焊工', id: '电焊工' },
    { name: '市场公关', id: '市场公关' },
    { name: '财务会计', id: '财务会计' },
    { name: '行政后勤', id: '行政后勤' },
    { name: '贸易采购', id: '贸易采购' },
    { name: '建筑工', id: '建筑工' },
    { name: '后厨', id: '后厨' },
    { name: '家政保洁', id: '家政保洁' },
    { name: '印刷工', id: '印刷工' },
    { name: '其他', id: '其他' }
];

export const myCategoryData = {
    '操作工': '操作工',
    '销售': '销售',
    '导购': '导购',
    '营业员': '营业员',
    '保安': '保安',
    '服务员': '服务员',
    '司机': '司机',
    '技工': '技工',
    '快递员': '快递员',
    '人事': '人事',
    '文员': '文员',
    '收银员': '收银员',
    '普工': '普工',
    '客服': '客服',
    '物流仓储': '物流仓储',
    '车床工': '车床工',
    '机修汽修': '机修汽修',
    '电焊工': '电焊工',
    '市场公关': '市场公关',
    '财务会计': '财务会计',
    '行政后勤': '行政后勤',
    '贸易采购': '贸易采购',
    '建筑工': '建筑工',
    '后厨': '后厨',
    '家政保洁': '家政保洁',
    '印刷工': '印刷工',
    '其他': '其他'
}


export const legal_area_options = [
    { key: 0, name: '大陆' },
    { key: 1, name: '香港' },
    { key: 2, name: '澳门' },
    { key: 3, name: '台湾' },
    { key: 4, name: '外籍' },
]

//企业注册类型
export const ret_type_options = [
    { name: '组织机构代码', id: 'NORMAL' },
    { name: '社会信用代码', id: 'MERGE' },
    { name: '工商注册号', id: 'REGCODE' },
]

//劳动合同状态
export const labol_contract_status_options = [
    { value: '0', name: '全部' },
    { value: 'await-emp-sign', name: '待员工签署' },
    { value: 'await-com-sign', name: '待企业签署' },
    { value: 'active', name: '生效中' },
    { value: 'expired', name: '已过期' },
    { value: 'terminating', name: '即将终止' },
    { value: 'terminated', name: '已终止' },
    { value: 'expiring', name: '即将到期' },
    { value: 'separated', name: '离职待终止' }
]

//劳动合同类型
export const contract_type_options = [
    { id: '0', name: '合同工' },
    { id: '1', name: '终身工' },
    { id: '2', name: '项目工' },
    { id: '3', name: '派遣工' },
    { id: '9', name: '劳务工' },
    { id: '4', name: '非全日制用工' },
    { id: '5', name: '协保、下岗、内退' },
    { id: '6', name: '学生、退休' },
    { id: '7', name: '外籍员工' },
]
//劳动合同类型
export const contract_type_options_add = [
    { id: '0', name: '合同工' },
    { id: '1', name: '终身工' },
    { id: '2', name: '项目工' },
    { id: '3', name: '派遣工' },
    { id: '9', name: '劳务工' },
    { id: '4', name: '非全日制用工' },
    { id: '5', name: '协保、下岗、内退' },
    { id: '6', name: '学生、退休' },
    { id: '7', name: '外籍员工' },
    { id: '8', name: '解除协议' },
]

// 电子材料
export const electronicDataOptions = [
    { id: '身份证正面', name: '身份证正面' },
    { id: '身份证反面', name: '身份证反面' },
    { id: '户口本(首页及本人页)', name: '户口本(首页及本人页)' },
    { id: '毕业证', name: '毕业证' },
    { id: '学位证', name: '学位证' },
    { id: '工资卡', name: '工资卡' },
    { id: '证件照', name: '证件照' },
    { id: '自定义', name: '自定义' },
];

// 证件照规格
export const identificationPhotoOptions = [
    { id: '一寸', name: '一寸' },
    { id: '一寸小', name: '一寸小' },
    { id: '一寸大', name: '一寸大' },
    { id: '二寸', name: '二寸' },
    { id: '二寸小', name: '二寸小' },
    { id: '二寸大', name: '二寸大' },
    { id: '五寸', name: '五寸' },
    { id: '六寸', name: '六寸' },
];
// 民族
export const nationOptions = [
    { name: '汉族', id: '汉族' },
    { name: '回族', id: '回族' },
    { name: '蒙古族', id: '蒙古族' },
    { name: '藏族', id: '藏族' },
    { name: '维吾尔族', id: '维吾尔族' },
    { name: '苗族', id: '苗族' },
    { name: '彝族', id: '彝族' },
    { name: '壮族', id: '壮族' },
    { name: '布依族', id: '布依族' },
    { name: '朝鲜族', id: '朝鲜族' },
    { name: '满族', id: '满族' },
    { name: '侗族', id: '侗族' },
    { name: '瑶族', id: '瑶族' },
    { name: '白族', id: '白族' },
    { name: '土家族', id: '土家族' },
    { name: '哈尼族', id: '哈尼族' },
    { name: '哈萨克族', id: '哈萨克族' },
    { name: '傣族', id: '傣族' },
    { name: '黎族', id: '黎族' },
    { name: '傈僳族', id: '傈僳族' },
    { name: '佤族', id: '佤族' },
    { name: '畲族', id: '畲族' },
    { name: '高山族', id: '高山族' },
    { name: '拉祜族', id: '拉祜族' },
    { name: '水族', id: '水族' },
    { name: '东乡族', id: '东乡族' },
    { name: '纳西族', id: '纳西族' },
    { name: '景颇族', id: '景颇族' },
    { name: '柯尔克孜族', id: '柯尔克孜族' },
    { name: '土族', id: '土族' },
    { name: '达斡尔族', id: '达斡尔族' },
    { name: '仫佬族', id: '仫佬族' },
    { name: '羌族', id: '羌族' },
    { name: '布朗族', id: '布朗族' },
    { name: '撒拉族', id: '撒拉族' },
    { name: '毛南族', id: '毛南族' },
    { name: '仡佬族', id: '仡佬族' },
    { name: '锡伯族', id: '锡伯族' },
    { name: '阿昌族', id: '阿昌族' },
    { name: '普米族', id: '普米族' },
    { name: '塔吉克族', id: '塔吉克族' },
    { name: '怒族', id: '怒族' },
    { name: '乌孜别克族', id: '乌孜别克族' },
    { name: '俄罗斯族', id: '俄罗斯族' },
    { name: '鄂温克族', id: '鄂温克族' },
    { name: '德昂族', id: '德昂族' },
    { name: '保安族', id: '保安族' },
    { name: '裕固族', id: '裕固族' },
    { name: '京族', id: '京族' },
    { name: '塔塔尔族', id: '塔塔尔族' },
    { name: '独龙族', id: '独龙族' },
    { name: '鄂伦春族', id: '鄂伦春族' },
    { name: '赫哲族', id: '赫哲族' },
    { name: '门巴族', id: '门巴族' },
    { name: '珞巴族', id: '珞巴族' },
    { name: '基诺族', id: '基诺族' },
]

//根据劳动合同id 查找劳动合同类型
export const getContractType = (id) => {
    let contract_type = '';
    if (id) {
        if ((_.find(contract_type_options_add, ['id', id]))) {
            contract_type = (_.find(contract_type_options_add, ['id', id])).name
        }
    }
    return contract_type
}

//劳动合同终止方式
export const terminate_way_options = [
    { id: '提前解除', name: '提前解除' },
    { id: '提前终止', name: '提前终止' },
    { id: '到期终止', name: '到期终止' },
    { id: '退休', name: '退休' },
]

//劳动合同终止原因
export const terminate_reason_options = [
    { id: '个人原因', name: '个人原因' },
    { id: '协商解除', name: '协商解除' },
    { id: '其他', name: '其他' },
]

//劳动合同签署方式
export const labor_contract_category_options = [
    { id: '0', name: '电子和纸质合同' },
    { id: '1', name: '电子合同' },
    { id: '2', name: '纸质合同' },
]
//获取劳动合同结束日期
export const getLaborContractEndTime = (period_type, end_time) => {
    switch (period_type) {
        case '':
            // return moment(end_time * 1000).format("YYYY-MM-DD")
            return '--'
            break;
        case '0':
            if (end_time <= 0) {
                return '--'
            } else {
                return moment(end_time * 1000).format("YYYY-MM-DD")
            }
            break;
        case '1':
            return '--'
            break;
        case '2':
            return '项目结束日期'
            break;
    }
}



export const period_type_options = [
    { id: '0', name: '固定期限' },
    { id: '1', name: '无固定期限' },
    { id: '2', name: '项目' },
]

// 来源途径
export const sourceTypeOptions = [
    { name: '二维码', id: '二维码' },
    { name: '分享', id: '分享' },
    { name: '录入', id: '录入' },
    { name: '推荐', id: '推荐' },
    { name: '推荐职位', id: '推荐职位' },
    { name: '简历库', id: '简历库' },
    { name: '导入', id: '导入' },
    { name: '主动申请', id: '主动申请' },
    { name: '其他', id: '其他' },
]
// 期望岗位为空非空全部
export const NoneExpectJobOptions = [
    { name: '未填写', id: 'y' },
    { name: '已填写', id: 'n' },
]

export const getPeriodType = (id) => {
    let period_type = '';
    if (id) {
        period_type = _.find(period_type_options, ['id', id]).name;
        return period_type
    } else {
        return ''
    }

}

const simplify = (origin) => {
    return origin.replace(spaceReg, '').replace(nextLineReg, '');
};

const matchEmployeeName = (origin) => {
    const simple = simplify(origin);
    let flag = false;
    for (var employeeName of EMPLOYEE_NAME_DICT) {
        if (simple.indexOf(employeeName) != -1) {
            flag = true;
            break;
        }
    }
    return flag;
}

const matchBasePay = (origin) => {
    const simple = simplify(origin);
    let flag = false;
    for (var basePay of BASE_PAY_DICT) {
        if (simple.indexOf(basePay) != -1) {
            flag = true;
            break;
        }
    }
    return flag;
}


function noop() {
    return false;
}





function setLeaf(treeData, curKey, level) {
    const loopLeaf = (data, lev) => {
        const l = lev - 1;
        data.forEach((item) => {
            if ((item.key.length > curKey.length) ? item.key.indexOf(curKey) !== 0 :
                curKey.indexOf(item.key) !== 0) {
                return;
            }
            if (item.children) {
                loopLeaf(item.children, l);
            } else if (l < 1) {
                item.isLeaf = true;
            }
        });
    };
    loopLeaf(treeData, level + 1);
}

function getNewTreeData(treeData, curKey, child) {
    const loop = (data) => {
        for (let item of data) {
            //if (item.key==='0-0') return;
            if (curKey.indexOf(item.key) === 0) {
                item.children = child;
            } else {
                if (item.children) loop(item.children);
            }
        }
    };
    loop(treeData);
    //setLeaf(treeData, curKey, level);
}

export const mapToTree = (orgTree, root) => {
    const loop = (pidNode, children, key) => {
        pidNode.children = [];
        pidNode.is_leaf = 'n';
        for (let i = 0; i < children.length; i++) {
            const subNode = children[i];
            subNode.title = subNode.name;
            subNode.pid = pidNode.uuid;
            subNode.key = key + "-" + i;
            subNode.is_leaf = 'n';
            subNode.children = [];
            if (subNode && subNode.uuid && orgTree[subNode.uuid] && orgTree[subNode.uuid].length > 0) {
                loop(subNode, orgTree[subNode.uuid], subNode.key);
            }
            pidNode.children.push(subNode);
        }
    }
    if (orgTree && orgTree[root]) {
        const rootNode = orgTree[root];
        rootNode.title = rootNode.name;
        rootNode.key = "0";
        rootNode.pid = root;
        if (rootNode && rootNode.uuid && orgTree[rootNode.uuid] && orgTree[rootNode.uuid].length > 0) {
            loop(rootNode, orgTree[rootNode.uuid], "0");
        }
        return rootNode;
    }
}

/*org tree help*/
const addEmpToOrgTree = (orgTree, emps) => {
    const loop = (children, key) => {
        for (let i = 0; i < children.length; i++) {
            const subNode = children[i];
            if (emps[subNode.uuid] && emps[subNode.uuid].length > 0) {
                emps[subNode.uuid].map((emp, i) => {
                    emp.title = emp.name;
                    emp.is_leaf = 'y';
                    emp.key = subNode.key + (orgTree.children.length + i);
                    emp.pid = subNode.uuid;
                    subNode.children.push(emp);
                });
            }
            if (subNode && subNode.uuid && subNode.children && subNode.children.length > 0) {
                loop(subNode.children, subNode.key);
            }
        }
    }
    if (orgTree && orgTree.uuid && orgTree.children && orgTree.children.length > 0) {
        if (emps[orgTree.uuid] && emps[orgTree.uuid].length > 0) {
            emps[orgTree.uuid].map((emp, i) => {
                emp.title = emp.name;
                emp.is_leaf = 'y';
                emp.key = orgTree.key + orgTree.children.length + i;
                emp.pid = "root";
                orgTree.children.push(emp);
            });
        }
        loop(orgTree.children, orgTree.key)
    }
    return orgTree;
}

const getOrgTree = (orgs, expandedKeys) => {
    const tempOrg = {};
    orgs.map((org, i) => {
        if (!org.parent_org_id) {
            tempOrg['root'] = org;
        } else {
            if (tempOrg[org.parent_org_id]) {
                tempOrg[org.parent_org_id].push(org)
            } else {
                tempOrg[org.parent_org_id] = [org];
            }
        }
    })
    const loop = (pidNode, children, key) => {
        pidNode.children = [];
        pidNode.is_leaf = 'n';
        for (let i = 0; i < children.length; i++) {
            const subNode = children[i];
            subNode.title = subNode.name;
            subNode.pid = pidNode.id;
            subNode.key = key + "-" + i;
            subNode.is_leaf = 'n';
            subNode.children = [];
            if (subNode && subNode.id && tempOrg[subNode.id] && tempOrg[subNode.id].length > 0) {
                loop(subNode, tempOrg[subNode.id], subNode.key);
            } else {
                expandedKeys.push(subNode.key);
            }
            pidNode.children.push(subNode);
        }
    }
    if (tempOrg && tempOrg['root']) {
        const rootNode = tempOrg['root'];
        rootNode.title = rootNode.name;
        rootNode.key = "0";
        rootNode.pid = 'root';
        if (rootNode && rootNode.id && tempOrg[rootNode.id] && tempOrg[rootNode.id].length > 0) {
            loop(rootNode, tempOrg[rootNode.id], "0");
        }
        return rootNode;
    }
    return {};
}

// export const empOrgTree=(employees=[],orgs=[])=>{
//     if(orgs.length<1||employees.length<1){
//         return {
//             orgTree:{children:[]},
//             orgEmps:{}
//         };
//     }
//     const orgEmps={},expandedKeys=[];
//     employees.map((emp,i)=>{
//         if(orgEmps[emp.organization_ID]){
//             orgEmps[emp.organization_ID].push(emp);
//         }else{
//             orgEmps[emp.organization_ID]=[emp];
//         }
//     });
//     const orgTree=getOrgTree(orgs,expandedKeys);
//     const trees=addEmpToOrgTree(orgTree,orgEmps);
//     return {
//         orgTree,
//         expandedKeys,
//         orgEmps
//     }
// }

export const searchEmp = (employees = [], keyword = '') => {
    if (!keyword) {
        return employees;
    } else {
        return employees.filter((item) => {
            const { name, pinyin, pinyinfl } = item;
            if (name && name.indexOf(keyword) != -1) {
                return true
            } if (pinyin && pinyin.indexOf(keyword) != -1) {
                return true
            } if (pinyinfl && pinyinfl.indexOf(keyword) != -1) {
                return true
            }
            return false;
        });
    }
}

export const filterOfEmployee = (employees = []) => {
    let needEmp = [];
    employees.map((item, index) => {
        if (item.status == "in-service" || item.status == "probation") {
            needEmp.push(item)
        }
    })
    return needEmp;
}


export const formatFields = (sections) => {
    const backFileds = [], fields = [], files = [], tablars = []
    sections.map((section, i) => {
        if ("tabular" == section.type) {
            tablars.push(section);
        } else if (section.fields && section.fields.length > 0) {
            section.fields.map((field, i) => {
                if (['join_date', 'employee_no', 'mobile', 'position', 'name', 'organization', 'email'].join(",").indexOf(field.name) != -1) {
                    field.edit = false;
                } else {
                    field.edit = true;
                }
                if ("file_upload" == field.type) {
                    files.push(field);
                } else {
                    fields.push(field);
                }
            })
        }
    })
    return { fields, files, tablars };
}


export const splitStringTemplate = (template = '', splits = []) => {
    const loop = (index, tplArray) => {
        const splitString = splits[index];
        const tempTemp = tplArray;
        tplArray = [];
        tempTemp.map((temTpl, i) => {
            const subTemp = temTpl.split(splitString);
            subTemp.map((temp, i) => {
                if (i % 2 != 0 && (i - 1) != subTemp.length) {
                    tplArray.push(splitString);
                }
                tplArray.push(temp);
            })
        })
        if ((splits.length - 1) != index) {
            return loop((index + 1), tplArray);
        } else {
            return tplArray;
        }
    }
    const splitString = splits[0];
    const tempTemp = template.split(splitString);
    let tplArray = [];
    tempTemp.map((temp, i) => {
        if (i % 2 != 0 && (i - 1) != tempTemp.length) {
            tplArray.push(splitString);
        }
        tplArray.push(temp);
    })
    if (splits.length > 1) {
        return loop(1, tplArray);
    } else {
        return tplArray;
    }
}

export const changeCountForTree = (orgTree, values = {}, organizationLookup = {}, employeesLookup = {}) => {
    const count = values.employee_ids ? values.employee_ids.length : 0;
    const keys = Object.keys(orgTree);
    const minusArray = [], plusArray = [];
    const loop = (node, tempArray) => {
        if (node && node.parent_organization_ID) {
            tempArray.push(node.uuid);
            loop(organizationLookup[node.parent_organization_ID], tempArray);
        } else if (node && !node.parent_organization_ID) {
            tempArray.push(node.uuid);
        }
    }
    if (values && values.opt == 'transfer_in' && values.employee_ids) {
        values.employee_ids.map((emp, m) => {
            loop(organizationLookup[employeesLookup[emp].organization_ID], minusArray);
        });
        loop(organizationLookup[values.to_org_id], plusArray);
    } else if (values && values.opt == 'transfer_out') {
        loop(organizationLookup[values.organization_ID], minusArray);
        loop(organizationLookup[values.to_org_id], plusArray);
    }
    keys.map((key, i) => {
        if (key == "root") {
            const rootNode = orgTree['root'];
            if (values && values.opt == 'transfer_out') {
                if (minusArray.join(",").indexOf(rootNode.uuid) != -1) {
                    rootNode.count = rootNode.count - count;
                }
                if (plusArray.join(",").indexOf(rootNode.uuid) != -1) {
                    rootNode.count = rootNode.count + count;
                }
            } else if (values && values.opt == 'transfer_in') {
                if (plusArray.join(",").indexOf(rootNode.uuid) != -1) {
                    rootNode.count = rootNode.count + count;
                }
                if (minusArray.join(",").indexOf(rootNode.uuid) != -1) {
                    rootNode.count = rootNode.count - count;
                }
            }
            orgTree['root'] = rootNode;
        } else {
            const children = orgTree[key] || [];
            children.map((item, j) => {
                if (values && values.opt == 'transfer_out') {
                    if (minusArray.join(",").indexOf(item.uuid) != -1) {
                        item.count = item.count - count;
                    }
                    if (plusArray.join(",").indexOf(item.uuid) != -1) {
                        item.count = item.count + count;
                    }
                } else if (values && values.opt == 'transfer_in') {
                    if (plusArray.join(",").indexOf(item.uuid) != -1) {
                        item.count = item.count + count;
                    }
                    if (minusArray.join(",").indexOf(item.uuid) != -1) {
                        item.count = item.count - 1;
                    }
                }
            });
        }
    });
    return orgTree;
}


export const transOrgTree = (orgs = []) => {
    if (orgs.length < 1) {
        return {
            orgTree: { children: [] }
        };
    }
    const expandedKeys = [];

    const orgTree = getOrgTree(orgs, expandedKeys);

    return {
        orgTree,
        expandedKeys
    }
}

/*根据code获取地区名称*/
export const getAreaNameByCode = (code = '') => {
    let name = '';
    const eachName = (items) => {
        items.map((item, i) => {
            if (item.value == code) {
                name = item.label;
            }
            if (item.children)
                eachName(item.children);
        });
    }
    eachName(areaData);
    return name;
}

// /*根据adcode获取省市区code*/
// export const getAreaNameByADcode=(code='')=>{
//    let area=[],maptenm;
//    const eachName=(items)=>{
//       items.map((item,i)=>{
//           if(item.value==code){
//               area[2]=item.value;
//           }
//           if(item.children){
//             eachName(item.children);
//           }
//       });
//     }
//     eachName(areaData);
//     return area;
// }

/*根据code获取服务类型名称*/
export const getServiceNameByCode = (code = '') => {
    if (code == 'S00001') {
        return '服务合同'
    }
    if (code == 'S00002') {
        return '招聘服务'
    }
    if (code == 'S00003') {
        return '劳动合同管理'
    }
    if (code == 'S00004') {
        return '劳动合同管理'
    }
    if (code == 'S00005') {
        return '员工在职人事管理'
    }
    if (code == 'S00006') {
        return '员工户籍管理'
    }
    if (code == 'S00007') {
        return '社会保险代缴及管理'
    } if (code == 'S00008') {
        return '住房公积金代缴及管理'
    }
    if (code == 'S00009') {
        return '招聘支持'
    }
    if (code == 'S00010') {
        return '薪酬管理'
    }
    if (code == 'S00011') {
        return '毕业生接收解决方案'
    }
    if (code == 'S00012') {
        return '退休手续代办'
    }
    if (code == 'S00013') {
        return '残保金代缴'
    }
    if (code == 'S00014') {
        return '工会服务'
    }
    if (code == 'S00015') {
        return '活动策划'
    }
    if (code == 'S00016') {
        return '财务外包'
    }
    if (code == 'S00017') {
        return '人才测评'
    }
    if (code == 'S00018') {
        return '代办公积金贷款'
    }
    if (code == 'S00019') {
        return '车务管理'
    }
    if (code == 'S00020') {
        return '社会化用工'
    }
    return '';
}
/*根据path返回回调*/
export const getLastPath = (path) => {
    if ('/main/interview' == path || '/container/candidate_mnge' == path || '/main/healthCheck' == path ||
        '/main/onboarding' == path || '/main/results' == path || '/main/position/hiring' == path
        || '/main/position/offline' == path || '/main/reward' == path || '/main/position/manage' == path
        || '/main/position/manage' == path) {
        return '#container/recruit';
    }

    // const pathMap ={
    //     '':''
    // }
    return path;
}

// 月份起始日
export const getStartEndDays = (month) => {
    const vStartDate = moment(month * 1000).add('month', 0).format("YYYY-MM") + '-01'
    const vEndM = moment(vStartDate).add('month', 1).add('days', -1)
    const vEndDate = moment(vEndM).format("YYYY-MM-DD")
    const startEndDays = [new Date(vStartDate).getTime() / 1000, new Date(vEndDate).getTime() / 1000]
    return startEndDays
}


export const splitQuery = (parmas) => {
    const keys = Object.keys(parmas);
    const querys = [];
    keys.map((key, i) => {
        if (i == 0) {
            querys.push('?');
        } else {
            querys.push('&');
        }
        querys.push(`${key}=${parmas[key]}`);

    });
    return querys.join("");
}

export const getOssFilePath = (path = '') => {
    let arr = path.split("/");
    let object = _.slice(arr, 2, arr.length).join('/');
    const url = `/filemeta?t=${new Date().getTime()}&bucket=${arr[1]}&object=${encodeURIComponent(object)}`;
    return url;
}


export const handlErrorMessage = (errs, mappingConfig, type = 'splite') => {
    const errsKey = Object.keys(errs), tempMessage = [];
    errsKey.map(key => {
        tempMessage.push(mappingConfig[key] + errs[key])
    });
    if (type == 'splite') {
        return tempMessage.join(",");
    }
}

export const gotoPageByNotification = (item = {}) => {
    let { extra = '' } = item;
    if (extra) {
        extra = JSON.parse(extra);
        const { biz_service = '', entity = '', entity_id = '', entity_scope = '' } = extra.goto;
        if (biz_service == 'recruit' && entity_scope == 'list' && entity == 'candidate') {
            document.location.href = '#/container/candidate_mnge';
        }
    }
}

export const deepCompare = (x, y) => {
    let i, l, leftChain, rightChain;
    function compare2Objects(x, y) {
        var p;
        // remember that NaN === NaN returns false
        // and isNaN(undefined) returns true
        if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
            return true;
        }
        // Compare primitives and functions.
        // Check if both arguments link to the same object.
        // Especially useful on the step where we compare prototypes
        if (x === y) {
            return true;
        }
        // Works in case when functions are created in constructor.
        // Comparing dates is a common scenario. Another built-ins?
        // We can even handle functions passed across iframes
        if ((typeof x === 'function' && typeof y === 'function') ||
            (x instanceof Date && y instanceof Date) ||
            (x instanceof RegExp && y instanceof RegExp) ||
            (x instanceof String && y instanceof String) ||
            (x instanceof Number && y instanceof Number)) {
            return x.toString() === y.toString();
        }
        // At last checking prototypes as good as we can
        if (!(x instanceof Object && y instanceof Object)) {
            return false;
        }
        if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
            return false;
        }
        if (x.constructor !== y.constructor) {
            return false;
        }
        if (x.prototype !== y.prototype) {
            return false;
        }
        // Check for infinitive linking loops
        if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
            return false;
        }
        // Quick checking of one object being a subset of another.
        // todo: cache the structure of arguments[0] for performance
        for (p in y) {
            if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                return false;
            } else if (typeof y[p] !== typeof x[p]) {
                return false;
            }
        }
        for (p in x) {
            if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                return false;
            } else if (typeof y[p] !== typeof x[p]) {
                return false;
            }
            switch (typeof (x[p])) {
                case 'object':
                case 'function':
                    leftChain.push(x);
                    rightChain.push(y);
                    if (!compare2Objects(x[p], y[p])) {
                        return false;
                    }
                    leftChain.pop();
                    rightChain.pop();
                    break;
                default:
                    if (x[p] !== y[p]) {
                        return false;
                    }
                    break;
            }
        }
        return true;
    }
    if (arguments.length < 1) {
        return true; //Die silently? Don't know how to handle such case, please help...
        // throw "Need two or more arguments to compare";
    }
    for (i = 1, l = arguments.length; i < l; i++) {
        leftChain = []; //Todo: this can be cached
        rightChain = [];
        if (!compare2Objects(arguments[0], arguments[i])) {
            return false;
        }
    }
    return true;
}

export const monthDiff = (end, start) => {
    if (moment(end.format('YYYY-MM') + '-01 00:00:00').isSame(moment(start.format('YYYY-MM') + '-01 00:00:00'), 'month')) {
        return 0;
    } else {
        return moment(end.format('YYYY-MM') + '-01 00:00:00').diff(moment(start.format('YYYY-MM') + '-01 00:00:00'), 'month');
    }
}

const getChildren = (items) => {
    var arrs = [];
    if (items && items.length > 0) {
        items.map((items, index) => {
            arrs[index] = {
                "value": items.value,
                "label": items.label,
            };
        });
    }
    return arrs;
}

//根据省市区截取省市
export const getProvenceCity = (areaDataItems) => {
    let areaProvenceCity = [];
    areaDataItems.map((items, index) => {
        areaProvenceCity[index] = {
            "value": items.value,
            "label": items.label,
            "children": getChildren(items.children)
        };
    });
    return areaProvenceCity;
}




// 处理职位类别二级
const getPositionsChildren = (items) => {
    var arrs = [];
    if (items && items.length > 0) {
        items.map((items, index) => {
            arrs[index] = {
                "value": items,
                "label": items,
            };
        });
    }
    return arrs;
}


export const getPositionsNames = (areaDataItems) => {
    let areaProvenceCity = []
    areaDataItems.map((items, index) => {
        areaProvenceCity[index] = {
            "value": items.name,
            "label": items.name,
            "children": getPositionsChildren(items.sub_categories)
        };
    });
    return areaProvenceCity;
}

/***********       时间戳部分      *************/
//当前月份的开始时间   如 2018年9月1日零点
export const getCurrentMonthFirst = () => {
    let date = new Date();
    date.setDate(1);
    date.setHours(0, 0, 0, 0);
    return new Date(date) / 1000;
}
//当前月份的截止时间   如 2018年9月30日零点
export const getNextMonthFirst = () => {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (++month > 12) {
        year++;
        month = 1;
    }
    let newDate = new Date(year, month - 1, 1);
    return (newDate.getTime() / 1000)
}
// 如果传进来参数(毫秒)，得到的是传进来的时间的开始时间   即传进来时间的凌晨零点
// 如果不传参数，得到的是传进来的时间的当天凌晨零点

export const getCurrentDay = (time) => { //
    if (time) {
        return (
            new Date(
                new Date(new Date(time).getFullYear(), new Date(time).getMonth(), new Date(time).getDate()
                ).getTime()) / 1000);
    } else {
        return (
            new Date(
                new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()
                ).getTime()) / 1000);
    }

}
//当天的截止时间  即当前时间的下一天的零点
// 如果传进来参数(毫秒)，得到的是传进来的时间截止时间  即传进来时间的下一天的零点
// 如果不传参数，得到的是传进来的时间的当天截止时间    即当天时间的下一天的零点
export const getNextDayFirst = (time) => {
    if (time) {
        return (
            new Date(
                new Date(new Date(time).getFullYear(), new Date(time).getMonth(), new Date(time).getDate() + 1
                ).getTime()) / 1000);
    } else {
        return (
            new Date(
                new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1)
            ).getTime() / 1000);

    }

}

//当天所在周开始时间 即当前时间的上个周一的零点
export const getLastWeek = () => {
    //按周日为一周的最后一天计算
    var date = new Date();
    //今天是这周的第几天
    var today = date.getDay();
    //上周日距离今天的天数（负数表示）
    var stepSunDay = -today + 1;
    // 如果今天是周日
    if (today == 0) {
        stepSunDay = -7;
    }
    // 周一距离今天的天数（负数表示）
    var stepMonday = 7 - today + 1;

    var time = date.getTime();
    return (new Date(
        new Date(time).getFullYear(), new Date(time).getMonth(), new Date(time).getDate()
    ).getTime()
        + stepSunDay * 24 * 3600 * 1000) / 1000;

}

//当天所在周截止 即当前时间的下个周一的零点
export const getNextWeek = () => {

    //按周日为一周的最后一天计算
    var date = new Date();
    //今天是这周的第几天
    var today = date.getDay();
    //上周日距离今天的天数（负数表示）
    var stepSunDay = -today;
    // 如果今天是周日
    if (today == 0) {
        stepSunDay = -7;
    }
    // 周一距离今天的天数（负数表示）
    var stepMonday = 7 - today + 1;
    var time = date.getTime();
    return
    (new Date(
        new Date(time).getFullYear(), new Date(time).getMonth(), new Date(time).getDate()
    ).getTime()
        + stepMonday * 24 * 3600 * 1000) / 1000;
}

/***********       时间戳部分      *************/


//get code by
/*根据code获取地区名称
 * type code|name
*/
export const getAreaByCode = (code = '', type = 'code') => {
    let province_code = '', city_code = '', district_code = '', area = {}, areaName = {}, tempArea = [], tempAreaName = [],
        province = '', city = '', district = '';
    const eachName = (items, deep) => {
        items.map((item, i) => {
            if (1 == deep) {
                province_code = item.value;
                province = item.label;
            } else if (2 == deep) {
                city_code = item.value;
                city = item.label;
            } else {
                district_code = item.value;
                district = item.label;
            }
            if (item.children) {
                eachName(item.children, deep + 1);
            } else {
                tempArea = [province_code, city_code, district_code];
                tempAreaName = [province, city, district];
                area[item.value] = tempArea;
                areaName[item.value] = tempArea;
            }
        });
    }
    eachName(areaData, 1);
    if ('code' == type) {
        return area[code];
    } else if ('name' == type) {
        return areaName[code];
    }
}

export const checkPerms = (perms = [], key) => {
    let flag = false;
    perms && perms.map((perm, i) => {
        perm.actions && perm.actions.map(action => {
            if (action == key) {
                flag = true;
            }
        });
    });
    return flag;
}

export const checkPermsForModule = (perms = [], key) => {
    let flag = false;
    perms && perms.map((perm, i) => {
        if (perm.module == key) {
            flag = true;
        }
    });
    return flag;
}

// 去除对象数组 arr 中某个属性 props,为某一个特定值 propsVal 的的对象
export const deleteObjPropsInFilter = (props = '', propsVal, arr = []) => {
    return arr && Array.isArray(arr) && arr.filter((item, ) => {
        if (item && item.id) {
            return item[props] != propsVal;
        }
        return [];
    });
}

/**
 * 计算2个日期相差的天数，包含今天，如：2016-12-13到2016-12-15，相差3天
 * @param startDateString
 * @param endDateString
 * @returns
 */
export const dateDiffIncludeToday = (startDateString, endDateString) => {
    var separator = "-"; //日期分隔符
    var startDates = startDateString.split(separator);
    var endDates = endDateString.split(separator);
    var startDate = new Date(startDates[0], startDates[1] - 1, startDates[2]);
    var endDate = new Date(endDates[0], endDates[1] - 1, endDates[2]);
    return parseInt(Math.abs(endDate - startDate) / 1000 / 60 / 60 / 24) + 1;//把相差的毫秒数转换为天数
}
/**
 * 计算2个日期相差的天数，不包含今天，如：2016-12-13到2016-12-15，相差2天
 * @param startDateString
 * @param endDateString
 * @returns
 */

export const dateDiff = (startDateString, endDateString) => {
    var separator = "-"; //日期分隔符
    var startDates = startDateString.split(separator);
    var endDates = endDateString.split(separator);
    var startDate = new Date(startDates[0], startDates[1] - 1, startDates[2]);
    var endDate = new Date(endDates[0], endDates[1] - 1, endDates[2]);
    return parseInt(Math.abs(endDate - startDate) / 1000 / 60 / 60 / 24);//把相差的毫秒数转换为天数
}


export default {
    simplify,
    matchEmployeeName,
    matchBasePay,
    noop,
    setLeaf,
    getNewTreeData,
    deepCompare,
    getProvenceCity
};
/*根据code获取职位名称*/
export const getProfessionNameByCode = (code = '', professionData) => {
    let name = '';
    const eachName = (items) => {
        items.map((item, i) => {
            if (item.value == code) {
                name = item.label;
            }
            if (item.children)
                eachName(item.children);
        });
    }
    eachName(professionData);
    return name;
}


// 根据出生日期算出年龄
export const getAge = (strBirthday) => {
    let returnAge = ''
    const strBirthdayArr = strBirthday.split("-");
    const birthYear = strBirthdayArr[0]
    const birthMonth = strBirthdayArr[1]
    const birthDay = strBirthdayArr[2]

    const d = new Date()
    const nowYear = d.getFullYear()
    const nowMonth = d.getMonth() + 1
    const nowDay = d.getDate()

    if (nowYear == birthYear) {
        returnAge = 0 // 同年 则为0岁
    } else {
        const ageDiff = nowYear - birthYear  // 年之差
        if (ageDiff > 0) {
            if (nowMonth == birthMonth) {
                const dayDiff = nowDay - birthDay // 日之差
                if (dayDiff < 0) {
                    returnAge = ageDiff - 1
                } else {
                    returnAge = ageDiff
                }
            }
            else {
                const monthDiff = nowMonth - birthMonth;// 月之差
                if (monthDiff < 0) {
                    returnAge = ageDiff - 1
                } else {
                    returnAge = ageDiff
                }
            }
        } else {
            returnAge = -1 //返回-1 表示出生日期输入错误 晚于今天
        }
    }
    return returnAge // 返回周岁年龄
}









const vcity = {
    11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古",
    21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏",
    33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南",
    42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆",
    51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃",
    63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外"
}
//验证身份证格式有效性
export const isCardNo = (card) => {
    const regIdNo = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (regIdNo.test(card) === false) {
        return false
    } else {
        return true
    }
}
//取身份证前两位校验省份
export const checkProvince = (card) => {
    var province = card.substr(0, 2);
    if (vcity[province] == undefined) {
        return false
    }
    return true
}
//校验生日是否正确
export const checkBirthday = (card) => {
    var len = card.length;
    //身份证15位时，次序为省（3位）市（3位）年（2位）月（2位）日（2位）校验位（3位），皆为数字
    if (len == '15') {
        var re_fifteen = /^(\d{6})(\d{2})(\d{2})(\d{2})(\d{3})$/;
        var arr_data = card.match(re_fifteen);
        var year = arr_data[2];
        var month = arr_data[3];
        var day = arr_data[4];
        var birthday = new Date('19' + year + '/' + month + '/' + day);
        return verifyBirthday('19' + year, month, day, birthday);
    }
    //身份证18位时，次序为省（3位）市（3位）年（4位）月（2位）日（2位）校验位（4位），校验位末尾可能为X
    if (len == '18') {
        var re_eighteen = /^(\d{6})(\d{4})(\d{2})(\d{2})(\d{3})([0-9]|X)$/;
        var arr_data = card.match(re_eighteen);
        var year = arr_data[2];
        var month = arr_data[3];
        var day = arr_data[4];
        var birthday = new Date(year + '/' + month + '/' + day);
        return verifyBirthday(year, month, day, birthday);
    }
    return false;
}
//校验日期
export const verifyBirthday = (year, month, day, birthday) => {
    var now = new Date();
    var now_year = now.getFullYear();
    //年月日是否合理
    if (birthday.getFullYear() == year && (birthday.getMonth() + 1) == month && birthday.getDate() == day) {
        //判断年份的范围（3岁到100岁之间)
        var time = now_year - year;
        if (time >= 3 && time <= 100) {
            return true;
        }
        return false;
    }
    return false;
}

//校验位的检测
export const checkParity = (card) => {
    //15位转18位
    card = changeFivteenToEighteen(card);
    var len = card.length;
    if (len == '18') {
        var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
        var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
        var cardTemp = 0, i, valnum;
        for (i = 0; i < 17; i++) {
            cardTemp += card.substr(i, 1) * arrInt[i];
        }
        valnum = arrCh[cardTemp % 11];
        if (valnum == card.substr(17, 1)) {
            return true;
        }
        return false;
    }
    return false;
}
//15位转18位身份证号
export const changeFivteenToEighteen = (card) => {
    if (card.length == '15') {
        var arrInt = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2);
        var arrCh = new Array('1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2');
        var cardTemp = 0, i;
        card = card.substr(0, 6) + '19' + card.substr(6, card.length - 6);
        for (i = 0; i < 17; i++) {
            cardTemp += card.substr(i, 1) * arrInt[i];
        }
        card += arrCh[cardTemp % 11];
        return card;
    }
    return card;
}
//获取新的法务实体
export const getAge_BirthDate_Gender = (value) => {
    if (isCardNo(value) === false || checkProvince(value) === false || checkBirthday(value) === false || checkParity(value) === false) {
        return [{ "age": "" }, { "birth_date": "" }, { "gender": "" }]
    } else {
        const idcardNo = value;
        let birthdayno, birthdaytemp, sexno, sex;
        if (idcardNo.length == 18) {
            birthdayno = idcardNo.substring(6, 14)
            sexno = idcardNo.substring(16, 17)
        } else if (idcardNo.length == 15) {
            birthdaytemp = idcardNo.substring(6, 12);
            birthdayno = "19" + birthdaytemp;
            sexno = idcardNo.substring(14, 15)
        }

        const birthday = birthdayno.substring(0, 4) + "-" + birthdayno.substring(4, 6) + "-" + birthdayno.substring(6, 8);
        const birthdate = new Date(birthday + " 08:00").getTime();
        const nowDate = moment(new Date()).format('YYYY-MM-DD');
        // const perage = Number(nowDate.substring(0, 4)) - Number(birthdayno.substring(0, 4));
        let perage = Number(nowDate.substring(0, 4)) - Number(birthdayno.substring(0, 4));
        if (moment(birthday).month() > moment().month()) {
            perage = perage - 1;
        } else if (moment(birthday).month() == moment().month()) {
            if (moment(birthdate).dayOfYear() > moment().dayOfYear()) {
                perage = perage - 1
            }
        }
        if (sexno % 2 == 0) {
            sex = '女'
        } else {
            sex = '男'
        }
        return [{ "age": Number(perage) }, { "birth_date": moment(birthdate).unix() }, { "gender": sex }]
    }
}
//得到带有类型的法务实体列表
export const getNewLegalWntityData = (value) => {
    let arr = []
    console.warn(value)
    if (value && value.items) {
        value.items.map((item, index) => {
            arr.push({ ...item, "oldName": item.name, "name": (item.legal_entity_category == "customer" ? "客户丨" : item.legal_entity_category == "tenant" ? "自营丨" : item.legal_entity_category == "provider" ? "供应商丨" : "") + (item.name), "id": item.id })
        })
    }
    return arr
}


//统一社会信用代码验证
export const checkSocialCreditCodeOrg = (Code) => {
    var patrn = /^[0-9A-Z]+$/;
    //18位校验及大写校验
    if ((Code.length != 18) || (patrn.test(Code) == false)) {
        return false;
    }
    else {
        var Ancode;//信用代码/税号的每一个值
        var Ancodevalue;//信用代码/税号每一个值的权重
        var total = 0;
        var weightedfactors = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28];//加权因子
        var str = '0123456789ABCDEFGHJKLMNPQRTUWXY';
        //不用I、O、S、V、Z
        for (var i = 0; i < Code.length - 1; i++) {
            Ancode = Code.substring(i, i + 1);
            Ancodevalue = str.indexOf(Ancode);
            total = total + Ancodevalue * weightedfactors[i];
            //权重与加权因子相乘之和
        }
        var logiccheckcode = 31 - total % 31;
        if (logiccheckcode == 31) {
            logiccheckcode = 0;
        }
        var Str = "0,1,2,3,4,5,6,7,8,9,A,B,C,D,E,F,G,H,J,K,L,M,N,P,Q,R,T,U,W,X,Y";
        var Array_Str = Str.split(',');
        logiccheckcode = Array_Str[logiccheckcode];

        var checkcode = Code.substring(17, 18);
        if (logiccheckcode != checkcode) {
            return false;
            // alert("不是有效的统一社会信用编码！");
        } else {
            return true;
        }
    }
}
//验证纳税人识别号
export const checkTaxpayerId = (values) => {
    // console.log(values , /\s/g.test(values) )
    if (values != undefined && (values.split("-").length > 2 || (values.split("-").length >= 2 && values.split("-")[1].length > 3) || (values.split("-").length == 2 && values.split("-")[1].length == 0) || /\s/g.test(values))) {
        return false;
    } else {
        let taxpayerId = values.split("-")[0];

        if (taxpayerId != "" && (taxpayerId.length == 15 || taxpayerId.length == 18)) {
            let addressCode;
            if (taxpayerId.length == 15) {
                addressCode = taxpayerId.substring(0, 6);
            } else if (taxpayerId.length == 18) {
                addressCode = taxpayerId.substring(2, 8);
            }
            // 校验地址码
            var check = checkAddressCode(addressCode);
            if (!check) {
                return false;
            }
            // 校验组织机构代码
            let orgCode;
            if (taxpayerId.length == 15) {
                orgCode = taxpayerId.substring(6, 9);
            } else if (taxpayerId.length == 18) {
                orgCode = taxpayerId.substring(8, 11);
            }
            check = isValidOrgCode(orgCode);
            if (!check) {
                return false;
            }
            return true;
        } else {
            return false;
        }
    }
}
function isValidOrgCode(value) {
    if (value != "") {
        var part1 = value.substring(0, 8);
        var part2 = value.substring(value.length - 1, 1);
        var ws = [3, 7, 9, 10, 5, 8, 4, 2];
        var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var reg = /^([0-9A-Z]){8}$/;
        if (!reg.test(part1)) {
            return true
        }
        var sum = 0;
        for (var i = 0; i < 8; i++) {
            sum += str.indexOf(part1.charAt(i)) * ws[i];
        }
        var C9 = 11 - (sum % 11);
        var YC9 = part2 + '';
        if (C9 == 11) {
            C9 = '0';
        } else if (C9 == 10) {
            C9 = 'X';
        } else {
            C9 = C9 + '';
        }
        return YC9 != C9;
    }
}
function checkAddressCode(addressCode) {
    var check = /^[1-9]\d{5}$/.test(addressCode);
    if (!check) return false;
    if (vcity[parseInt(addressCode.substring(0, 2))]) {
        return true;
    } else {
        return false;
    }
}
//根据不通的TenantType 返回不同的提示
export const getRemindByTenantType = (type, TenantType, appname) => {
    if (TenantType == "") {
        return hro(type, appname)
    } else if (TenantType == "haixia") {
        return haixia(type)
    }
}

export const dealNumber = (money) => { // 将数字处理成100,100,100.00的格式
    if (money && money != null) {
        money = String(money);
        var left = money.split('.')[0], right = money.split('.')[1];
        right = right ? (right.length >= 2 ? '.' + right.substr(0, 2) : '.' + right + '0') : '.00';
        var temp = left.split('').reverse().join('').match(/(\d{1,3})/g); //  将字符串顺序反转  ：字符串-->数组 --> 顺序反转-->字符串
        return (Number(money) < 0 ? "-" : "") + temp.join(',').split('').reverse().join('') + right;
    } else if (money === 0) { //注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
        return '0.00';
    } else {
        return "";
    }
};

function haixia(type) {
    switch (type) {
        case 'NaturalPersonBasicInfoCollection':
            return '提醒您，您的自然人基础信息不完善，无法进行个税申报，请您尽快在“海峡人力”公众号个人中心点击“海峡易税”并进入小程序完善相关信息，谢谢！'
            break;
        case 'SpecialAdditionalDeductionCollection':
            return '提醒您，您的专项附加扣除信息还未提交，这将会影响您享受国家的税收优惠政策，请您尽快在“海峡人力”公众号“个人中心”中点击“海峡易税”进入小程序完善相关信息，谢谢！'
            break;
        case 'SalarySendBatchList':
            return '提醒内容示例：张三您好，您在xxx公司申报的专项附加扣除信息还未提交，请您尽快在“海峡人力”公众号“个人中心”中点击“海峡易税”进入小程序完善相关信息，谢谢！'
            break;
    }
}
function hro(type, appname) {
    let name = appname && appname.name
    switch (type) {
        case 'NaturalPersonBasicInfoCollection':
            return `提醒您，您的自然人基础信息不完善，无法进行个税申报，请您尽快在微信中搜索小程序“` + name + `”并进入小程序完善相关信息，谢谢！`
            break;
        case 'SpecialAdditionalDeductionCollection':
            return '提醒您，您的专项附加扣除信息还未提交，这将会影响您享受国家的税收优惠政策，请您尽快在微信中搜索小程序“' + name + '”并进入小程序完善相关信息，谢谢！'
            break;
        case 'SalarySendBatchList':
            return '提醒内容示例：张三您好，您在xxx公司申报的专项附加扣除信息还未提交，这将会影响您享受国家的税收优惠政策，请您到“' + name + '”微信小程序中提交相关信息小程序完善相关信息，谢谢！'
            break;
    }
}

//动态算出列表（columns）宽度  columns里必须都有width
export const getColumnsWidth = (columns = []) => { // 将数字处理成100,100,100.00的格式
    let width = 0;
    if (columns.length > 0) {
        columns.map((item, index) => {
            width += item.width
        })
    }
    return { x: width }
};

//保留两位小数
export const getFixedTwo = (num) => {
    return num.toFixed(2);
}

// 部门员工处理
export const transOrgEmplyeeTree = (orgs = []) => {
    if (orgs.length < 1) {
        return {
            orgEmployeeTree: { children: [] }
        }
    }

    const orgEmployeeTree = getOrgEmplyeeTree(orgs)

    return {
        orgEmployeeTree
    }
}

const getOrgEmplyeeTree = (orgs) => {
    const tempOrg = {};
    orgs.map((org, i) => {
        if (!org.parent_org_id) {
            tempOrg['root'] = org;
        } else {
            if (tempOrg[org.parent_org_id]) {
                tempOrg[org.parent_org_id].push(org)
            } else {
                tempOrg[org.parent_org_id] = [org];
            }
        }
    })
    const loop = (pidNode, children) => {
        pidNode.children = [];
        for (let i = 0; i < children.length; i++) {
            const subNode = children[i];
            subNode.title = subNode.name;
            subNode.admins = subNode.admins;
            subNode.children = [];
            if (subNode && subNode.id && tempOrg[subNode.id] && tempOrg[subNode.id].length > 0) {
                loop(subNode, tempOrg[subNode.id]);
            }
            pidNode.children.push(subNode);
        }
    }
    if (tempOrg && tempOrg['root']) {
        const rootNode = tempOrg['root'];
        rootNode.title = rootNode.name;
        if (rootNode && rootNode.id && tempOrg[rootNode.id] && tempOrg[rootNode.id].length > 0) {
            loop(rootNode, tempOrg[rootNode.id]);
        }
        return rootNode;
    }
    return {};
}
/**
 * @desc 函数节流
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param type 1 表时间戳版，(时间段开始时候触发) 2 表定时器版 (时间段结束时候触发) 
 */
export const throttle = (func, wait, type) => {
    if (type === 1) {
        let previous = 0;
    } else if (type === 2) {
        let timeout;
    }
    return function () {
        let context = this;
        let args = arguments;
        if (type === 1) {
            let now = Date.now();

            if (now - previous > wait) {
                func.apply(context, args);
                previous = now;
            }
        } else if (type === 2) {
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null;
                    func.apply(context, args)
                }, wait)
            }
        }
    }
}
export const handleColumns = (arr = []) => {
    if (arr && arr.length > 0) {
        arr.map((item, i) => {
            switch (item.attr) {
                case 'pre':
                    if (item.render) {
                        item.render = (text, record) => {
                            return (
                                <pre className={'pre'}>{item.render(text, record)}</pre>
                            )
                        }
                    } else {
                        item.render = (text, record) => {
                            return (
                                <pre className={'pre'}>{text}</pre>
                            )
                        }
                    }
                    break;
                case 'date':
                    if (!item.render) {
                        item.render = (text, record) => {
                            return (
                                <span>{moment(text * 1000).format('YYYY-MM-DD')}</span>
                            )
                        }
                    }
                    break;
                case 'time':
                    if (!item.render) {
                        item.render = (text, record) => {
                            return (
                                <span>{moment(text * 1000).format('YYYY-MM-DD H:mm')}</span>
                            )
                        }
                    }
                    break;
                case 'month':
                    if (!item.render) {
                        item.render = (text, record) => {
                            return (
                                <span>{moment(text * 1000).format('YYYY-MM')}</span>
                            )
                        }
                    }
                    break;
                case 'money':
                    if (!item.render) {
                        item.render = (text, record) => {
                            return (
                                <span>{dealNumber(text)}</span>
                            )
                        }
                    }
                    break;
                case 'start-end':
                    if (!item.render) {
                        item.render = (text, record) => {
                            return (
                                <span>{`${moment(record[item.start_attr ? start_attr : `start_time`] * 1000).format('YYYY-MM-DD')}-${moment(record[item.end_attr ? end_attr : `end_time`] * 1000).format('YYYY-MM-DD')}`}</span>
                            )
                        }
                    }
                    break;
            }

        })
    }
    return arr
}
//账套 -- 发票内容
export const invoiceContentArray = [
    { id: '人力资源服务费', name: '人力资源服务费' },
    { id: '劳务代理费', name: '劳务代理费' },
    { id: '劳务派遣服务费', name: '劳务派遣服务费' },
    { id: '代收代付工资', name: '代收代付工资' },
    { id: '劳务派遣费', name: '劳务派遣费' },
    { id: '代收代付公积金', name: '代收代付公积金' },
    { id: '代收代付劳务费', name: '代收代付劳务费' },
    { id: '代收代付社会保险', name: '代收代付社会保险' },
    { id: '代收代付工会费', name: '代收代付工会费' },
    { id: '代收代付体检费', name: '代收代付体检费' },
    { id: '代收代付残障金', name: '代收代付残障金' },
    { id: '技术外包服务费', name: '技术外包服务费' },
    { id: '呼叫中心服务费', name: '呼叫中心服务费' },
    { id: '代维外包服务费', name: '代维外包服务费' },
    { id: '网络技术服务费', name: '网络技术服务费' },
    { id: '通信信息系统服务费', name: '通信信息系统服务费' },
    { id: '业务流程管理服务费', name: '业务流程管理服务费' },
    { id: '代理劳务费', name: '代理劳务费' },
    { id: '分拣封发服务费', name: '分拣封发服务费' },
    { id: '派送服务费', name: '派送服务费' },
    { id: '通信台席外包服务费', name: '通信台席外包服务费' },
    { id: '劳务外包费', name: '劳务外包费' },
    { id: '外包服务费', name: '外包服务费' },
    { id: '搬运装卸服务费', name: '搬运装卸服务费' },
    { id: '物业管理服务费', name: '物业管理服务费' },
    { id: '咨询服务费', name: '咨询服务费' },
    { id: '网络托管服务费', name: '网络托管服务费' },
    { id: '信息服务费', name: '信息服务费' },
    { id: '信息技术服务费', name: '信息技术服务费' },
    { id: '信息系统服务费', name: '信息系统服务费' },
    { id: '工程服务费', name: '工程服务费' },
    { id: '代理服务费', name: '代理服务费' },
    { id: '业务服务费', name: '业务服务费' },
    { id: '安装服务费', name: '安装服务费' },
    { id: '邮件制作服务费', name: '邮件制作服务费' },
    { id: '收件服务费', name: '收件服务费' },
    { id: '业务推广外包服务费', name: '业务推广外包服务费' },
    { id: '业务代办服务费', name: '业务代办服务费' },
    { id: '劳务费', name: '劳务费' },
    { id: '家客维护费', name: '家客维护费' },
    { id: '网络维护费', name: '网络维护费' },
    { id: '家客安装服务费', name: '家客安装服务费' },
    { id: '技术服务费', name: '技术服务费' },
    { id: '促销费', name: '促销费' },
    { id: '技术服务费', name: '技术服务费' },
    { id: '扩容整治安装服务费', name: '扩容整治安装服务费' },
    { id: '经纪代理服务', name: '经纪代理服务' },
    { id: '生活服务', name: '生活服务' },
    { id: '物流辅助服务', name: '物流辅助服务' },
    { id: '现代服务', name: '现代服务' },
    { id: '企业管理服务', name: '企业管理服务' },
    { id: '经营租赁', name: '经营租赁' },
    // { id: 'customContent', name: '自定义' },
];
export const salarySendBatchDownDefaultFieldAll = () => {
    let English = ["social_insurance_refund", "reduction_cost", "special_deduction", "other_deduction", "special_additional_deduction", "personal_endowment1", "personal_medical1", "personal_unemployment1", "personal_house_fund1", "childrens_education1", "caring_old_people1", "housing_loan_interest1", "housing_rent1", "serious_illness_medical1", "continuing_education1", "commercial_insurance1", "tax_extension1", "annuity1", "actual_donation1", "donation_way1", "donation_deducted1", "other_fee1", "remark", "tax_savings1", "last_pay_salary", "last_tax_free_income", "accumulated_taxable_income", "tax_rate", "deduction_number", "accumulated_payable_tax", "accumulated_deductible_tax", "accumulated_withholding_tax", "prepay_tax", "personal_tax", "salary1", "tax_balance", 'real_salary'];
    let Chinese = ["社保退款", "累计减除费用", "累计专项扣除合计", "累计其他扣除合计", "累计专项附加扣除合计", "养老个人", "医疗个人", "失业个人", "公积金个人", "累计子女教育", "累计赡养老人", "累计住房贷款", "累计住房租金", "累计大病医疗", "累计继续教育", "商业健康保险", "税延养老保险", "年金", "实际捐赠额", "捐赠方式", "准予扣除的捐赠额", "其他扣除", "备注", "减免税额", "上期累计收入", "上期累计免税收入", "累计应纳所得额", "税率", "速算扣除数", "累计应纳税额", "累计减免税额", "累计应扣缴税额", "已预交税额", "个税", "实发", "个税差额", '最终实发']
    let arr = []
    English.map((item, index) => {
        arr.push({
            category: "system",
            key: item,
            name: Chinese[index],
        })
    })
    return arr
}
export const salarySendBatchDownDefaultField = () => {
    let English = ["social_insurance_refund", "reduction_cost", "other_deduction", "actual_donation1", "donation_way1", "donation_deducted1", "other_fee1", "remark", "tax_savings1", "last_pay_salary", "last_tax_free_income", "accumulated_taxable_income", "tax_rate", "deduction_number", "accumulated_payable_tax", "accumulated_deductible_tax", "accumulated_withholding_tax", "prepay_tax", "personal_tax", "salary1", "tax_balance", 'real_salary']
    let Chinese = ["社保退款", "累计减除费用", "累计其他扣除合计", "实际捐赠额", "捐赠方式", "准予扣除的捐赠额", "其他扣除", "备注", "减免税额", "上期累计收入", "上期累计免税收入", "累计应纳所得额", "税率", "速算扣除数", "累计应纳税额", "累计减免税额", "累计应扣缴税额", "已预交税额", "个税", "实发", "个税差额", '最终实发']
    let arr = []
    English.map((item, index) => {
        arr.push({
            category: "system",
            key: item,
            name: Chinese[index],
        })
    })
    return arr
}

//获取 权限
export const getPermission = (special_data, user, legal_entity_admins) => {
    switch (special_data) {
        case '系统管理员':
            if (user && user.is_root == 'y') {
                return true
            } else {
                return false
            }
        case '个税申报专员':
            let tax_bol = false
            if (legal_entity_admins && legal_entity_admins.length > 0) {
                legal_entity_admins.map((cl) => {
                    if (cl.admin_type == '个税申报专员' && user.id == cl.admin_id) {
                        tax_bol = true
                    }
                })
            }
            return tax_bol
        case '全部':
            return true
    }
}
export const countWidth = (columns) => {
    let num = 0;
    if (columns && columns.length > 0) {
        columns.map((item, i) => {
            const { width = 0 } = item;
            num += width;
        })
    }
    return num;
}
//手机号中间四位****
export const phoneStar = (phone) => {
    var reg = /(\d{3})\d{4}(\d{4})/;
    var tel1 = phone.replace(reg, "$1****$2")
    return tel1
}


export const filterPayMoneyContents = (items, key) => {
    if ('haixia' == key) {
        const newArray = [];
        items.map((key, i) => {
            if ('S00005' != key.value) {
                newArray.push(key)
            }
        })
        return newArray;
    } else
        return items;
}
//得到带有类型的法务实体
export const getNewLegalWntityName = (type, name) => {
    let str = ''
    switch (type) {
        case 'customer':
            str = "客户丨" + name
            break;
        case 'tenant':
            str = "自营丨" + name
            break;
        case 'provider':
            str = "供应商丨" + name
            break;
    }
    return str
}

export const certificateTypeOptions = [
    { id: 'organization_code', name: '组织代码' },
    { id: 'business_license', name: '营业执照' },
    { id: 'other_organization_code', name: '其他组织代码' },
    { id: 'other_enterprise_certificate', name: '其他企业证件类型' },
]

export const certificateTypeData = {
    'organization_code': '组织机构代码',
    'business_license': '社会统一信用代码',
    'other_organization_code': '组织代码',
    'other_enterprise_certificate': '证件号码'
}

// 判断当前用户是否属于某个阿米巴
export const adminIsOrgs = (orgs = [] , org_id = '') => {
    let flag = 'n'
    orgs.map((item, index) => {
        if ((item.org_id == org_id) && (item.org_level == '3')) {
            flag = 'y'
        }
    })
    return flag
}

// 新增 获取合作中的客户
export const getCooperationCustomers = (list = []) => {
    return list.filter(el => el.status == 'cooperation')
}

// 新增 获取合作中的服务合同
export const getActiveContracts = (list = []) => {
    return list.filter(el => el.status == 'active')
}

// 筛选  获取合作中，已终止，已放弃的客户
export const getCustomersSearch = (list = []) => {
    let newList = []
    list.map((items, index) => {
        if ((items.status == 'cooperation') || (items.status == 'terminated')) {
            newList.push(items)
        }
    })
    return newList
}

// 筛选  获取合作中，已终止，已过期，已续签的服务合同
export const getContractsSearch = (list = []) => {
    let newList = []
    list.map((items, index) => {
        if ((items.status == 'active') || (items.status == 'overdue') || (items.status == 'terminated') || (items.status == 'renew')) {
            newList.push(items)
        }
    })
    return newList
}

