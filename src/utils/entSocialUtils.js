

export const isTjOptions = [//是否调基
    { 'id': '1', 'name': '是' },
    { 'id': '0', 'name': '否' },
];

export const isRepairDiff = [//是否需要调基补差
    { 'id': '1', 'name': '需要补差' },
    { 'id': '0', 'name': '不需要补差' },
];

export const isSeparateRepairDiff = [//离职人员 -- 是否缴纳调基补差费用
    { 'id': '0', 'name': '否' },
    { 'id': '1', 'name': '是' },
];

export const payModeOption = [//离职人员 -- 收取方式
    { 'id': 'fix', 'name': '按固定月份收取' },
    { 'id': 'in-service', 'name': '按在职月收取' }
];

export const payPartOption = [//离职人员 -- 收取部分
    { 'id': 'person', 'name': '个人部分' },
    { 'id': 'ent', 'name': '企业部分' },
    { 'id': 'all', 'name': '个人部分+企业部分' },
];

export const separateBaseOption = [//离职人员新基数
    { 'id': 'min', 'name': '最低基数' },
    { 'id': 'table', 'name': '表格导入' },
];


export const ajustBaseMonthOpions = [//调基补差操作月、生效月
    { 'id': '0', 'name': '每月' },
    { 'id': '1', 'name': '每年1月' },
    { 'id': '2', 'name': '每年2月' },
    { 'id': '3', 'name': '每年3月' },
    { 'id': '4', 'name': '每年4月' },
    { 'id': '5', 'name': '每年5月' },
    { 'id': '6', 'name': '每年6月' },
    { 'id': '7', 'name': '每年7月' },
    { 'id': '8', 'name': '每年8月' },
    { 'id': '9', 'name': '每年9月' },
    { 'id': '10', 'name': '每年10月' },
    { 'id': '11', 'name': '每年11月' },
    { 'id': '12', 'name': '每年12月' }
];

export const ajustBaseEffectiveMonthOpions = [//调基生效起始月
    { 'id': '0', 'name': '每月' },
    { 'id': '1', 'name': '每年1月' },
    { 'id': '2', 'name': '每年2月' },
    { 'id': '3', 'name': '每年3月' },
    { 'id': '4', 'name': '每年4月' },
    { 'id': '5', 'name': '每年5月' },
    { 'id': '6', 'name': '每年6月' },
    { 'id': '7', 'name': '每年7月' },
    { 'id': '8', 'name': '每年8月' },
    { 'id': '9', 'name': '每年9月' },
    { 'id': '10', 'name': '每年10月' },
    { 'id': '11', 'name': '每年11月' },
    { 'id': '12', 'name': '每年12月' },
    { 'id': '13', 'name': '操作月本月生效' },
    { 'id': '14', 'name': '操作月次月生效' },
];


export const diffBaseMonthOpions = [//调基补差月
    { 'id': '1', 'name': '每年1月' },
    { 'id': '2', 'name': '每年2月' },
    { 'id': '3', 'name': '每年3月' },
    { 'id': '4', 'name': '每年4月' },
    { 'id': '5', 'name': '每年5月' },
    { 'id': '6', 'name': '每年6月' },
    { 'id': '7', 'name': '每年7月' },
    { 'id': '8', 'name': '每年8月' },
    { 'id': '9', 'name': '每年9月' },
    { 'id': '10', 'name': '每年10月' },
    { 'id': '11', 'name': '每年11月' },
    { 'id': '12', 'name': '每年12月' },
    { 'id': '15', 'name': '调基生效起始月上月' }
];

export const diffFeesMonthOpions = [//收取调基补差费用月份
    { 'id': '1', 'name': '每年1月' },
    { 'id': '2', 'name': '每年2月' },
    { 'id': '3', 'name': '每年3月' },
    { 'id': '4', 'name': '每年4月' },
    { 'id': '5', 'name': '每年5月' },
    { 'id': '6', 'name': '每年6月' },
    { 'id': '7', 'name': '每年7月' },
    { 'id': '8', 'name': '每年8月' },
    { 'id': '9', 'name': '每年9月' },
    { 'id': '10', 'name': '每年10月' },
    { 'id': '11', 'name': '每年11月' },
    { 'id': '12', 'name': '每年12月' },
    { 'id': '16', 'name': '调基生效起始月' },
    { 'id': '17', 'name': '调基生效起始月下月' }
];

//企业社保政策 - 大病
export const hasHanfChangeOptions = [
    { name: '收取', id: '1' },
    { name: '不收取', id: '0' }
];

export const hanfChangeTypeOptions = [
    { name: '每月收取固定值', id: '0' },
    { name: '参保首月收取固定值', id: '1' },
    { name: '缴纳月数*固定值', id: '2' },
];

export const daBingPayTypeOptions = [//大病缴纳方式
    { name: '基数*比例', id: '0' },
    { name: '固定值', id: '1' }
];

export const daBingFrequencyOptions = [
    { label: '每月', value: '0' },
    {
        label: '每年', value: '1',
        children: [
            { label: '1月', value: '1' },
            { label: '2月', value: '2' },
            { label: '3月', value: '3' },
            { label: '4月', value: '4' },
            { label: '5月', value: '5' },
            { label: '6月', value: '6' },
            { label: '7月', value: '7' },
            { label: '8月', value: '8' },
            { label: '9月', value: '9' },
            { label: '10月', value: '10' },
            { label: '11月', value: '11' },
            { label: '12月', value: '12' }
        ]
    }
];

export const frequencyOptions = [
    { label: '每月', value: '0' },
    {
        label: '每年', value: '1',
        children: [
            {
                label: '参保首月一次性收取', value: '0',
                children: [
                    { label: '次年1月', value: '1' },
                    { label: '次年2月', value: '2' },
                    { label: '次年3月', value: '3' },
                    { label: '次年4月', value: '4' },
                    { label: '次年5月', value: '5' },
                    { label: '次年6月', value: '6' },
                    { label: '次年7月', value: '7' },
                    { label: '次年8月', value: '8' },
                    { label: '次年9月', value: '9' },
                    { label: '次年10月', value: '10' },
                    { label: '次年11月', value: '11' },
                    { label: '次年12月', value: '12' }
                ]
            },
            {
                label: '固定月份', value: '1',
                children: [
                    { label: '1月', value: '1' },
                    { label: '2月', value: '2' },
                    { label: '3月', value: '3' },
                    { label: '4月', value: '4' },
                    { label: '5月', value: '5' },
                    { label: '6月', value: '6' },
                    { label: '7月', value: '7' },
                    { label: '8月', value: '8' },
                    { label: '9月', value: '9' },
                    { label: '10月', value: '10' },
                    { label: '11月', value: '11' },
                    { label: '12月', value: '12' }
                ]
            },
        ]
    }
];

export const changedRulseOption = [//收取规则
    { name: '全额收取', id: '0' },
    { name: '参保月份7月以后支付50%', id: '1' },
    { name: '年度甚于月份*固定值', id: '2' }
];

export const calculateRulseOption = [//计算规则
    { name: '基数*比例', id: '0' },
    { name: '固定值', id: '1' },
    { name: '比例+固定值', id: '11' },
    { name: '社会平均工资*固定比例', id: '2' },
    { name: '社保缴费基数*固定比例', id: '3' },
    { name: '养老保险基数*固定比例', id: '4' },
    { name: '医疗保险基数*固定比例', id: '5' },
    { name: '个人每月工资*固定比例', id: '6' },
    { name: '企业每月平均工资总额*固定比例', id: '7' },
    { name: '企业每月工资总额*固定比例', id: '8' },
    { name: '(企业公司职工人数*固定比例-公司已安置残疾人)*当地上年全年平均工资', id: '9' },
    { name: '(企业公司职工人数*固定比例-公司已安置残疾人)*企业上年全年平均工资', id: '10' }
];

export const choiceWayOption = [//数值取舍方式
    { name: '四舍五入', id: '0' },
    { name: '截位', id: '1' },
    { name: '向上进位', id: '2' },
    { name: '先截位再向上进位', id: '3' },
    { name: '先四舍五入再向上进位', id: '4' }
];

export const exactValueOption = [//精确值
    { name: '0位小数(精确到元)', id: '0' },
    { name: '1位小数(精确到角)', id: '1' },
    { name: '2位小数(精确到分)', id: '2' },
    { name: '3位小数(精确到厘)', id: '3' }
];

export const downMethodOption = [//减员方式
    { name: '当月减当月', id: '0' },
    { name: '当月减下月', id: '1' }
];

export const increaseMethodOption = [//增员方式
    { name: '当月增当月', id: '0' },
    { name: '当月增下月', id: '1' }
];

export const payMethodOption = [//补缴方式
    { name: '当月缴当月', id: '0' },
    { name: '当月缴下月', id: '1' }
];

export const allowPayOption = [//是否补缴(当年补缴，跨年补缴)
    { name: '允许', id: 'y' },
    { name: '不允许', id: 'n' }
];

export const payMonthOption = [
    { name: '无', id: '0' },
    { name: '1个月', id: '1' },
    { name: '2个月', id: '2' },
    { name: '3个月', id: '3' },
    { name: '4个月', id: '4' },
    { name: '5个月', id: '5' },
    { name: '6个月', id: '6' },
    { name: '7个月', id: '7' },
    { name: '8个月', id: '8' },
    { name: '9个月', id: '9' },
    { name: '10个月', id: '10' },
    { name: '11个月', id: '11' },
    { name: '12个月', id: '12' }
];

export const socialOPCategory = [
    { name: '险种合一', id: '0' },
    { name: '险种分离', id: '1' }
];

export const datumOtherOptions = {
    'text': '文本',
    'number': '数值',
    'date': '日期',
    'picklist': '选项'
}

export const creatPaybackOptions = [//企业社保政策 - 补缴信息设置
    { name: '根据政策自动生成补缴', id: 'y' },
    { name: '不允许自动补缴', id: 'n' },
];

export const base_month_opions = {//调基补差操作月、生效月,调基补差月、收取调基补差月份
    '0': '每月',
    '1': '每年1月',
    '2': '每年2月',
    '3': '每年3月',
    '4': '每年4月',
    '5': '每年5月',
    '6': '每年6月',
    '7': '每年7月',
    '8': '每年8月',
    '9': '每年9月',
    '10': '每年10月',
    '11': '每年11月',
    '12': '每年12月',
    '13': '操作月本月生效',
    '14': '操作月次月生效',
    '15': '调基生效起始月上月',
    '16': '调基生效起始月',
    '17': '调基生效起始月下月',
};

