import _ from 'lodash';


export const providerMenus = [
    {
        "name": "home",
        "module": "home",
        "parent_name": "",
        "display_name": "首页"
    },
    {
        "name": "crm",
        "module": "crm",
        "parent_name": "",
        "display_name": "客户管理",
        "children": [
            {
                "name": "crm_cuslist",
                "module": "crm_cuslist",
                "parent_name": "crm",
                "display_name": "客户列表"
            },
            {
                "name": "crm_sercontractlist",
                "module": "crm_sercontractlist",
                "parent_name": "crm",
                "display_name": "服务合同列表"
            }
        ]
    }, /*
    {
        "name": "entservice",
        "parent_name": "",
        "display_name": "企业服务",
        "children": [
            {
                "name": "provider_recruit",
                "parent_name": "entservice",
                "display_name": "招聘管理"
            }
        ]
    },*//*
    {
        "name": "settle",
        "module": "settle",
        "parent_name": "",
        "display_name": "结算管理",
        "children": [
            {
                "name": "settle_settlemgm",
                "module": "settle_settlemgm",
                "parent_name": "settle",
                "display_name": "结算管理"
            },
            {
                "name": "settle_setting",
                "module": "settle_setting",
                "parent_name": "settle",
                "display_name": "结算设置"
            }
        ]
    },
    {
        "name": "setting_entmgm",
        "module": "setting_entmgm",
        "parent_name": "",
        "display_name": "设置"
    },*/
    {
        "name": "percenter",
        "module": "percenter",
        "parent_name": "",
        "display_name": "个人中心",
        "children": [
            {
                "name": "percenter_changeimg",
                "module": "percenter_changeimg",
                "parent_name": "percenter",
                "display_name": "更改头像"
            },
            {
                "name": "percenter_pwdsetting",
                "module": "percenter_pwdsetting",
                "parent_name": "percenter",
                "display_name": "修改密码"
            }
        ]
    },
    {
        "name": "setting",
        "module": "setting",
        "parent_name": "",
        "display_name": "设置",
        "children": [
            {
                "name": "setting_entinfo",
                "module": "setting_entinfo",
                "parent_name": "setting",
                "display_name": "企业信息"
            }
        ]
    }
];


export const menuIconMap = {
    'home': 'img/menuicon/首页.png',									//首页
    'crm': 'img/menuicon/客户.png',	 							//客户管理
    'provider': 'img/menuicon/供应商.png',	 						//供应商管理
    'staffs': 'img/menuicon/员工.png',	 							//员工
    'entservice': 'img/menuicon/企业服务.png',	 							//企业服务
    'personsi': 'img/menuicon/社保.png',	 						//自由社保管理
    'finance': 'img/menuicon/财务.png',	 							//财务管理
    'settle': 'img/menuicon/结算.png',	 							//结算管理
    'setting': 'img/menuicon/设置.png',	 					        //企业设置
    'setting_entmgm': 'img/menuicon/设置.png',	 					        //供应商设置
    'percenter': 'img/menuicon/员工.png',	 						    //个人中心
    'dailywage': 'img/menuicon/财务.png',                              //日薪社
    'attendance': 'img/menuicon/考勤.png',                          //考勤管理
    'outsourcing': 'img/menuicon/供应商.png',                            //项目外包 
    'dashboard': 'img/menu-report.png',                         //数据报表 
    'contract': 'img/menuicon/劳动合同.png',                               //劳动合同 
    'recruit': 'img/menuicon/招聘.png',                                  //招聘 
    'entsi': 'img/menuicon/企业社保.png',                               //企业社保 
    'payroll': 'img/menuicon/薪酬.png',                                   //薪酬 
    'socialwork': 'img/menuicon/社会化用工.png',                              //社会化用工
    'trainonline': 'img/menuicon/在线培训.png',                             //在线培训
    // 'outsourcing': 'img/menuicon/供应商.png',                            //项目外包
    // 'dashboard': 'img/menuicon/menu-report.png',                         //数据报表 图片
    'contract': 'img/menuicon/劳动合同.png',                               //劳动合同
    'recruit': 'img/menuicon/招聘.png',                                  //招聘
    'entsi': 'img/menuicon/企业社保.png',                               //企业社保
    'payroll': 'img/menuicon/薪酬.png',                                   //薪酬
    'persontax': 'img/menuicon/自然人税收.png',                               //自然人税收
    'welfare': 'img/menuicon/福利.png',                              //自然人税收
    'individual': 'img/menuicon/社会化用工.png',                               //个体工商户
    'busiinsurance': 'img/menuicon/商保.png',                               //个体工商户
    'dingdingapproval': 'img/menuicon/钉钉审批流程.png',
    'settlementorg': 'img/menuicon/结算地平台.png'                     //结算地平台
    
}

export const menuLinkMap = {
    'individual_minishop': '#/container/manage_shop',	             //社会化用工  -- 店铺管理
    'home': '#/container/home',							//首页
    'crm_cuslist': '#/container/amoeba',						//
    // 'crm_sercontractlist'		:'#/container/customService/0',					//服务合同列表
    'crm_sercontractlist': '#/container/contract_index',					//服务合同列表
    'provider_providerlist': '#/container/provider/my',							//供应商列表
    'provider_sercontractlist': '#/container/customService/1',					//服务合同列表
    'provider_settlelist': '#/main/provider-settlement',					//服务合同列表
    // 'employee' 					:'#/main/employee',							//雇员管理
    'staffs_employee': '#/container/employee_home',						//员工管理
    'staffs_qa': '#/container/employee_answers',						//问答
    'staffs_other_fee': '#/container/staffs_other_expense',						//员工其他费用管理
    // 'employee' 					:'#/container/employee',						//雇员管理
    'staffs_information'          :'#/container/emp_info_search',               //员工信息查询
    'personsi': '#/container/personal-index',					//自由社保管理
    'finance_recruitreward': '#/container/financial_reward',							//招聘赏金管理
    'finance_personsirefund': '#/container/financial/psRefund',					//自由社保退款管理
    // 'settle_settlemgm' 			:'#/main/settlements',							//结算管理
    'settle_settlemgm': '#/container/accound-index',							//结算管理
    'settle_setting': '#/main/settlement-setting',					//结算设置
    'setting_entmgm': '#/container/setting-entmgm',		            //设置企业管理
    'setting_entinfo': '#/container/setting-entinfo',		            //设置信息企业
    'setting_entwxapp': '#/container/setting-entwxapp',			    //设置企业设置
    'percenter_changeimg': '#/container/setting/my-avatar',				//更改头像
    'percenter_pwdsetting': '#/container/setting/change-password',			//修改密码
    'recruit': '#/container/newRecruit',						//招聘管理
    'recruit_callbot': '#/container/OutboundStatistics',               //外呼统计
    'contract': '#/container/labor-contract',					//劳动合同管理
    'sipolicy': '#/container/socialinsurances/list',				//企业社保政策
    'socialinsurance': '#/main/socialinsurances',						//社保管理
    // 'siprocess'					:'#/container/serviceOut/index',				//社保办理
    'siprocess': '#/container/cpy_server_out_index',				//社保办理
    'housingfund': '#/main/provident',							//公积金管理
    'payroll': '#/container/salary_manage',				    //薪酬管理 '#/main/salarys',
    'payroll_mgm': '#/container/salary_manage',				    //薪酬-薪酬管理 '#/main/salarys',
    // 'payroll_index'			    :'#/container/salary_index',				    //薪酬-首页,
    'payroll_bill': '#/container/salary_bill_list',				//薪酬-工资条
    'payroll_acculate_prededuction': '#/container/payroll_acculate_prededuction',//薪酬-累计预扣预缴表
    'payroll_deduction_statistics': '#/container/payroll_deduction_statistics',	//薪酬-专项附加扣除统计表
    'payroll_monthly_deduction_detail': '#/container/payroll_monthly_deduction_detail',//薪酬-月度专项附加扣除明细表
    'payroll_settlement': '#/container/settlement_payroll',//薪酬-结算工资表
    'dailywage_recruit': '#/container/dailyCon',                        //日薪招聘
    'dailywage_riskmgm': '#/container/dailyWdControl',                  //雇员风控
    'dailywage_salarydeliver': '#/container/dailyPay',                        //日薪发放
    'dailywage_stats': '#/container/dailyPayDet',                     //日薪发放统计
    'dailywage_sosetting': '#/container/custom_serve_set',                //客服设置
    'defulat': '#/container/home',						    //首页
    'dailywage_attendance': '#/container/attendance',                      //考勤管理
    'dashboard_newresume': '#/container/newResumeNum',                    //新增简历数统计
    'finance_payroll': '#/container/financial_index',                 //薪酬管理

    'trainonline_lessons': '#/container/onLineTrain',                    //培训课程
    'trainonline_results': '#/container/TrainingResult',                    //培训结果


    'task_detail': '#/container/task_detail',                     //薪酬管理
    'task_set': '#/container/task_set',                        //薪酬设置
    'cash_management': '#/container/cash_management',                 //提现管理
    'labor_pool': '#/container/labor_pool',                      //用工池
    'post_management': '#/container/post_management',                 //岗位管理
    'socialwork_protocol': '#/container/agreement_manage',             //协议管理
    'socialwork_assignment': '#/container/task_assign',             //任务指派
    'import_labor_pool': '#/container/labor_pool/import_labor_pool',    //导入用工池 信息

    'provider_recruit': '#/main/provider/recriut',                     //供应商招聘
    'entservice_attendance': '#/container/attendance-list',                 //考勤管理
    'attendance_record': '#/container/attendanceRecord',                //考勤记录
    'attendance_stats': '#/container/attendanceStatistics',            //考勤统计
    'attendance_program': '#/container/attendanceSetting',            //考勤设置
    'entservice_broker': '#container/agent',                            //分销商
    'entservice_entsi': '#/container/new_server_in_index',                  //企业社保
    'outsourcing': '#container/outsourcing',                      //项目外包
    'dailywage_invitees': '#container/dailyInvitees',                    //邀请统计
    'dashboard_candidatestats': '#container/recruitReport',                    //招聘统计
    'dashboard_candidatesearch': '#container/jobSeekerReport',                  //求职者统计
    'dailywage_sharestats': '#container/daily_share',                      //日薪发放统计
    'recruit_home': '#/container/newRecruit',                      //招聘首页
    'recruit_position': '#/container/position/manage',                 //招聘需求
    'recruit_candidate': '#/container/candidate_mnge',                  //求职者
    'recruit_resume': '#/container/resumesContainer?from=public',    //人才库
    'recruit_broker': '#container/manage',                            //经纪人
    'entsi_ticket': '#/container/new_server_in_index',                  //接单
    'entsi_policy': '#/container/socialinsurances/list',                //政策
    'entsi_process': '#/container/cpy_server_out_index',            //办理
    'finance_finance': '#/container/financial_index',                 //财务管理
    'attendance': '#/container/attendance-list',                 //考勤
    "socialwork_position": "#/container/post_management",                  //岗位管理
    "socialwork_laborpool": "#/container/labor_pool",                       //用工池
    'dashboard_wechatpastats': '#/container/share_date_static',               //吸粉报表
    'logout': `${__PREFIX__}signOut`,                                    //登出
    'finance_acsetcheck': '#/container/finace-manage',             //账套核销
    'settle_acsetmgm': '#/container/accountSet',             //账套管理
    'finance_invoicemgm': '#/container/invoice-manages',             //开票管理
    'finance_paymentmgm': '#/container/finance-check/wait_create_bill',             //付款管理

    'dashboard_overview': '#/container/overviewData',               //数据概览
    'dashboard_conversionrate': '#/container/conversionRatioAnalyse',               //数据概览-转化率分析
    'finance_recruit_fees': '#/container/internal_settle',             //内部结算

    "persontax": "#/container/persontax_home_page",  // 自然人税收
    "welfare_insurance": "#/container/welfare_pension",  // 福利 税延养老保险 
    "welfare_health_insurance": "#/container/welfare_health",  // 福利 商业健康保险
    "welfare_deduction": "#/container/welfare_reduction",  // 福利 减免事项附表
    "individual_account": "#/container/open_manage",  // 开户管理
    "individual_invoice": "#/container/make_out_invoice",  // 开票管理
    "socialwork_contract": "#/container/financial_contract_management",  // 社会化用工 电子合同管理

    "busiinsurance_product": "#/container/busiinsurance_product",    // 商保产品超市
    "busiinsurance_programme": "#/container/busiinsurance_plan_list",  // 商保方案
    "busiinsurance_orders": "#/container/busiinsurance_receipt",      // 商保接单
    "busiinsurance_process": "#/container/busiinsurance_handle",           // 商保办理
    "socialwork_issuementmgm_batches": "#/container/distribute_manage",
    // "issuementmgm_batches" : "#/container/distribute_manage",
    "socialwork_issuementmgm_settlement_orgs": "#/container/settlementplace_manage",
    "recruit_fee_setting": "#/container/recruit_fee_set",
    "dingdingapproval": "#/container/nail_approval",

    // 社会化用工 订单管理
    "socialwork_order": "#/container/socialwork_order_management",

    // 落地方
    // 订单管理
    "settlementorg_order": "#/container/platform_order_management",
    // 电子合同管理
    "settlementorg_contract": "#/container/socialwork_contract",

}



export const getMenuKeyByPath = (pathname) => {
    const keys = Object.keys(menuLinkMap);
    let menuKey = '';
    keys.map((key, i) => {
        if (menuLinkMap[key].indexOf(pathname) != -1) {
            menuKey = key;
        }
    });
    return menuKey;
}
