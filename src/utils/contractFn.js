import { notification } from 'antd';
const openNotificationWithInfo = (type) => {
    notification[type]({
        message: '提示',
        description: '请至少选择一项应收费用（社保费用/公积金费用/工资个税/招聘服务）',
    });
};
export const sendEndDateList = [
    { id: 1, name: '每月1日' },
    { id: 2, name: '每月2日' },
    { id: 3, name: '每月3日' },
    { id: 4, name: '每月4日' },
    { id: 5, name: '每月5日' },
    { id: 6, name: '每月6日' },
    { id: 7, name: '每月7日' },
    { id: 8, name: '每月8日' },
    { id: 9, name: '每月9日' },
    { id: 10, name: '每月10日' },
    { id: 11, name: '每月11日' },
    { id: 12, name: '每月12日' },
    { id: 13, name: '每月13日' },
    { id: 14, name: '每月14日' },
    { id: 15, name: '每月15日' },
    { id: 16, name: '每月16日' },
    { id: 17, name: '每月17日' },
    { id: 18, name: '每月18日' },
    { id: 19, name: '每月19日' },
    { id: 20, name: '每月20日' },
    { id: 21, name: '每月21日' },
    { id: 22, name: '每月22日' },
    { id: 23, name: '每月23日' },
    { id: 24, name: '每月24日' },
    { id: 25, name: '每月25日' },
    { id: 26, name: '每月26日' },
    { id: 27, name: '每月27日' },
    { id: 28, name: '每月28日' },
];
export const sendEndDateList1 = [
    { id: 1, name: '每月1日' },
    { id: 2, name: '每月2日' },
    { id: 3, name: '每月3日' },
    { id: 4, name: '每月4日' },
    { id: 5, name: '每月5日' },
    { id: 6, name: '每月6日' },
    { id: 7, name: '每月7日' },
    { id: 8, name: '每月8日' },
    { id: 9, name: '每月9日' },
    { id: 10, name: '每月10日' },
    { id: 11, name: '每月11日' },
    { id: 12, name: '每月12日' },
    { id: 13, name: '每月13日' },
    { id: 14, name: '每月14日' },
    { id: 15, name: '每月15日' },
    { id: 16, name: '每月16日' },
    { id: 17, name: '每月17日' },
    { id: 18, name: '每月18日' },
    { id: 19, name: '每月19日' },
    { id: 20, name: '每月20日' },
    { id: 21, name: '每月21日' },
    { id: 22, name: '每月22日' },
    { id: 23, name: '每月23日' },
    { id: 24, name: '每月24日' },
    { id: 25, name: '每月25日' },
    { id: 26, name: '每月26日' },
    { id: 27, name: '每月27日' },
    { id: 28, name: '每月28日' },
    { id: 29, name: '每月29日' },
    { id: 30, name: '每月30日' },
    { id: 31, name: '每月31日' },
];
//服务合同发起审批的时候判断是否至少选择一项应收费用项目
export const handleHaveSystemContent = (value, systemProjectCode) => {
    let isFlag = false;
    value.feeProjectCodeList && value.feeProjectCodeList.map((item, i) => {
        if (item.checked && systemProjectCode.indexOf(item.code) != -1) {
            isFlag = true;
        }
    })
    if(!isFlag){
        openNotificationWithInfo('warning');
    }
    return isFlag;
}
//对新增合同数据进行处理
export const handleDealWithData = (value, type) => {

    //选择地区/派单截止日期/是否垫付的处理
    let whether_advance = true;
    value.whether_advance == '1' ? whether_advance = true : whether_advance = false;
    value.settle_setting = {
        whether_advance: whether_advance,
        insure_area: value.insure_area ? value.insure_area.join(',') : '',
        collect_day: Number(value.collect_day)
    };

    //处理系统服务项目和自定义服务项目
    let service_catalog = [];
    value.custom_contents ? service_catalog = value.service_content.concat(value.custom_contents) : service_catalog = value.service_content;
    value.service_catalog = service_catalog;
    //处理应收费用（对甲方）
    let service_projects = [];

    value.feeProjectCodeList && value.feeProjectCodeList.map((item, i) => {
        //改项目被选中
        if (item.checked) {
            let obj = {
                name: item.code,
                code: item.code,
                settle_cycle: value[`settle_cycle_${item.code}`],
                settlement_rule: value[`settlement_rule_${item.code}`],
                is_make_invoice: value[`is_make_invoice_${item.code}`],
                // payment_rule:value[`payment_rule_${item.code}`],
                whether_advance: whether_advance
            };
            //如果是 社保费用 或者是 公积金费用 有 结款规则
            if (item.code == 'S00007' || item.code == 'S00008') {
                obj.payment_rule = value[`payment_rule_${item.code}`];
            }
            service_projects.push(obj);
        }
    });
    value.service_projects = service_projects;
    // 处理自定义费用项目
    let service_price_items = [];

    //判断是否有自定义费用
    value.customerProjectCode && value.customerProjectCode.map((item, i) => {
        let price_policy = [],
            price_proto = value[`tag_${item}_price_proto`],
            calc_type = value[`tag_${item}_calc_type`];
        //收费规则 -- 按人次收费
        if (price_proto == '24' || price_proto == '25' || price_proto == '26' || price_proto == '27' || price_proto == '28') {
            //收费规则  -- 固定单价
            if (calc_type == '0' || price_proto == '26') {
                price_policy = [{
                    price: Number(value[`tag_${item}_price`]),
                }];
            } else { //收费规则 -- 阶梯单价-总人次 或阶梯单价-达成率
                value[`tag_${item}_entity`].map((list, j) => {
                    price_policy.push({
                        'left': Number(list.left),
                        'right': Number(list.right),
                        'unit': String(list.unit),
                    });

                });
            }
        }
        let other_struct = {};
        //当收费规则为按'人次收费' 并且 收费方式 为'固定单价' 或 '阶梯单价 - 总人次' 显示去重设置
        if (price_proto == '24' && (calc_type == '0' || calc_type == '11')) {
            //当收费规则为按'人次收费' 并且 收费方式 为 '阶梯单价-总人次'
            if (calc_type == '11') {
                other_struct.calc_rule = Number(value[`tag_${item}_calc_rule`]);
            }
            other_struct.repeat_set = Number(value[`tag_${item}_repeat_set`]);
        }
        // 收费规则为'按金额比例收费' 收费方式为 '阶梯比例' 添加 '计算规则'
        if ((price_proto == '25' && calc_type == '10') || (price_proto == '27' && calc_type == '17') || (price_proto == '28' && calc_type == '14')) {
            other_struct.calc_rule = Number(value[`tag_${item}_calc_rule`]);
        }
        //当收费规则为按'人次收费' 并且 收费方式 为 '阶梯单价-达成率'
        if (price_proto == '24' && calc_type == '12') {
            other_struct.ask_day = Number(value[`tag_${item}_ask_day`]);
            other_struct.day_limit = Number(value[`tag_${item}_day_limit`]);
        }
        //收费规则为 '打包周期' 添加 打包周期
        if (price_proto == '26') {
            other_struct.pack_cycle = Number(value[`tag_${item}_pack_cycle`]);
        }
        //收费规则为'计时收费' 收费方式为 '固定单价'或者'阶梯单价'时添加'计时单位'
        if (price_proto == '27' && (calc_type == '0' || calc_type == '17')) {
            other_struct.calc_unit = Number(value[`tag_${item}_calc_unit`]);
        }
        let project_obj = {};
        project_obj = {
            calc_type: calc_type,
            price_policy: JSON.stringify(price_policy),
            price_proto: price_proto,
            service_content_code: item,
            other_struct: other_struct,
        }

        //收费规则为 '计时收费' 收费方式 为 '岗位单价'添加 position_fees
        if ((price_proto == '27' && calc_type == '15') || (price_proto == '28' && calc_type == '13')) {
            project_obj.position_fees = value[`${item}_project`][0].addPositionList;
        }
        //判断人次包含是否存在
        if (value[`tag_${item}_insured`]) {
            project_obj.projects = value[`tag_${item}_insured`].toString();
        }
        service_price_items.push(project_obj)
    });
    console.log(service_price_items);
    value.service_price_items = service_price_items;


    return value;
}
//对编辑/重新发起/续签/编辑/重新编辑合同数据进行处理
export const handleUpdateDealWithData = (value) => {
    //选择地区/派单截止日期/是否垫付的处理
    let whether_advance = true;
    value.whether_advance == '1' ? whether_advance = true : whether_advance = false;
    value.settle_setting = {
        whether_advance: whether_advance,
        insure_area: value.insure_area ? value.insure_area.join(',') : '',
        collect_day: Number(value.collect_day)
    };

    //处理系统服务项目和自定义服务项目
    let service_catalog = [];
    value.custom_contents ? service_catalog = value.service_content.concat(value.custom_contents) : service_catalog = value.service_content;
    value.service_catalog = service_catalog;
    //处理应收费用（对甲方）
    let service_projects = [];
    value.feeProjectCodeList && value.feeProjectCodeList.map((item, i) => {
        //改项目被选中
        if (item.checked) {
            let obj = {
                name: item.code,
                code: item.code,
                settle_cycle: value[`settle_cycle_${item.code}`],
                settlement_rule: value[`settlement_rule_${item.code}`],
                is_make_invoice: value[`is_make_invoice_${item.code}`],
                whether_advance: whether_advance
                // payment_rule:value[`payment_rule_${item.code}`],
            };
            //如果是 社保费用 或者是 公积金费用 有 结款规则
            if (item.code == 'S00007' || item.code == 'S00008') {
                obj.payment_rule = value[`payment_rule_${item.code}`];
            }
            service_projects.push(obj);
        }
    });
    value.service_projects = service_projects;
    // 处理自定义费用项目
    let service_price_items = [];

    //判断是否有自定义费用
    value.customerProjectCode && value.customerProjectCode.map((item, i) => {
        let price_policy = [],
            price_proto = value[`tag_${item}_price_proto`],
            calc_type = value[`tag_${item}_calc_type`];
        //收费规则 -- 按人次收费
        if (price_proto == '24' || price_proto == '25' || price_proto == '26' || price_proto == '27' || price_proto == '28') {
            //收费规则  -- 固定单价
            if (calc_type == '0' || price_proto == '26') {
                price_policy = [{
                    price: Number(value[`tag_${item}_price`]),
                }];
            } else { //收费规则 -- 阶梯单价-总人次 或阶梯单价-达成率
                value[`tag_${item}_entity`].map((list, j) => {
                    price_policy.push({
                        'left': Number(list.left),
                        'right': Number(list.right),
                        'unit': String(list.unit),
                    });

                });
            }
        }
        let other_struct = {};
        //当收费规则为按'人次收费' 并且 收费方式 为'固定单价' 或 '阶梯单价 - 总人次' 显示去重设置
        if (price_proto == '24' && (calc_type == '0' || calc_type == '11')) {
            //当收费规则为按'人次收费' 并且 收费方式 为 '阶梯单价-总人次'
            if (calc_type == '11') {
                other_struct.calc_rule = Number(value[`tag_${item}_calc_rule`]);
            }
            other_struct.repeat_set = Number(value[`tag_${item}_repeat_set`]);
        }
        // 收费规则为'按金额比例收费' 收费方式为 '阶梯比例' 添加 '计算规则'
        if ((price_proto == '25' && calc_type == '10') || (price_proto == '27' && calc_type == '17') || (price_proto == '28' && calc_type == '14')) {
            other_struct.calc_rule = Number(value[`tag_${item}_calc_rule`]);
        }
        //当收费规则为按'人次收费' 并且 收费方式 为 '阶梯单价-达成率'
        if (price_proto == '24' && calc_type == '12') {
            other_struct.ask_day = Number(value[`tag_${item}_ask_day`]);
            other_struct.day_limit = Number(value[`tag_${item}_day_limit`]);
        }
        //收费规则为 '打包周期' 添加 打包周期
        if (price_proto == '26') {
            other_struct.pack_cycle = Number(value[`tag_${item}_pack_cycle`]);
        }
        //收费规则为'计时收费' 收费方式为 '固定单价'或者'阶梯单价'时添加'计时单位'
        if (price_proto == '27' && (calc_type == '0' || calc_type == '17')) {
            other_struct.calc_unit = Number(value[`tag_${item}_calc_unit`]);
        }
        let project_obj = {};
        project_obj = {
            calc_type: calc_type,
            price_policy: JSON.stringify(price_policy),
            price_proto: price_proto,
            service_content_code: item,
            other_struct: other_struct,
        }

        //收费规则为 '计时收费' 收费方式 为 '岗位单价'添加 position_fees
        if ((price_proto == '27' && calc_type == '15') || (price_proto == '28' && calc_type == '13')) {
            project_obj.position_fees = value[`${item}_project`][0].addPositionList
        }
        //判断人次包含是否存在
        if (value[`tag_${item}_insured`]) {
            project_obj.projects = value[`tag_${item}_insured`].toString();
        }
        service_price_items.push(project_obj)
    });
    console.log(service_price_items);
    value.service_price_items = service_price_items;


    return value;
}
export const sendEndDateList2 = [
    { id: 1, name: '每月1日' },
    { id: 2, name: '每月2日' },
    { id: 3, name: '每月3日' },
    { id: 4, name: '每月4日' },
    { id: 5, name: '每月5日' },
    { id: 6, name: '每月6日' },
    { id: 7, name: '每月7日' },
    { id: 8, name: '每月8日' },
    { id: 9, name: '每月9日' },
    { id: 10, name: '每月10日' },
    { id: 11, name: '每月11日' },
    { id: 12, name: '每月12日' },
    { id: 13, name: '每月13日' },
    { id: 14, name: '每月14日' },
    { id: 15, name: '每月15日' },
    { id: 16, name: '每月16日' },
    { id: 17, name: '每月17日' },
    { id: 18, name: '每月18日' },
    { id: 19, name: '每月19日' },
    { id: 20, name: '每月20日' },
    { id: 21, name: '每月21日' },
    { id: 22, name: '每月22日' },
    { id: 23, name: '每月23日' },
    { id: 24, name: '每月24日' },
    { id: 25, name: '每月25日' },
    { id: 26, name: '每月26日' },
    { id: 27, name: '每月27日' },
    { id: 28, name: '每月28日' },
    { id: 29, name: '每月29日' },
    { id: 30, name: '每月30日' },
    { id: 31, name: '每月31日' },
];
export const getDateTime = function (date) {
    const time = new Date(date);
    return Date.parse(time) / 1000;

}