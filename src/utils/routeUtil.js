
export const backPath = () => {//返回客户管理 - 客户列表
  let  path = '';
  if( //返回客户管理 - 客户列表
    (window.location.hash.indexOf('main/detail') != -1)||
    (window.location.hash.indexOf('main/customer/import') != -1)||
    (window.location.hash.indexOf('/main/customer/add') != -1)
  ){
    path = '#/container/customer'
  }else if (
    (window.location.hash.indexOf('/main/financial_pay') != -1)
  ){
    path = '#/container/financial_index';
  }else if (//返回劳动合同首页
    (window.location.hash.indexOf('/in-service/personnal_info') != -1)||
    (window.location.hash.indexOf('/onboard/personnal_info') != -1)||
    (window.location.hash.indexOf('/leave/personnal_info')!= -1)
  ){
    path = '#main/employee'
  }else if(//返回客户管理 - 服务合同列表
    (window.location.hash.indexOf('main/customServiceDetail/custome') != -1)||
    (window.location.hash.indexOf('main/serviceDetail/renew') != -1)||
    (window.location.hash.indexOf('main/serviceDetail/edit/0') != -1)
  ){
    path = '#/container/customService/0'
  }else if(//返回首页
    (window.location.hash.indexOf('main/provider/my') != -1)||
    (window.location.hash.indexOf('main/provider-settlement') != -1)||
    (window.location.hash.indexOf('main/employee') != -1)||
    (window.location.hash.indexOf('main/provident') != -1)||
    (window.location.hash.indexOf('main/salarys') != -1)||
    (window.location.hash.indexOf('main/settlements') != -1)
 ){
    path = '#/container/home';
  }else if(//返回供应商管理 - 我的供应商列表
    (window.location.hash.indexOf('main/provider/detail') != -1) ||
    (window.location.hash.indexOf('main/provider/import') != -1)||
    (window.location.hash.indexOf('main/provider/add') != -1)
  ){
    path = '#/container/provider/my';
  }else if( //返回供应商管理 - 服务合同列表
    window.location.hash.indexOf('main/customServiceDetail/provider') != -1
  ){
    path = '#/container/customService/1';
  }else if(//返回雇员管理 - 雇员列表
    (window.location.hash.indexOf('main/emp/import/onduty') != -1)||
    (window.location.hash.indexOf('main/emp/import/onboard') != -1)
  ){
    path = '#/main/employee';
  }else if (
    (window.location.hash.indexOf('main/position/hiring') != -1) &&
    (window.location.hash.indexOf('?from=public') != -1)
  ) {
    path = '#/container/resumesContainer?from=public'
  } else if (
    (window.location.hash.indexOf('main/position/hiring') != -1) &&
    (window.location.hash.indexOf('?from=private') != -1)
  ){
    path = '#/container/myResumesContainer?from=private'
  }else if(//返回企业服务 - 招聘管理
    (window.location.hash.indexOf('main/position/manage') != -1)||
    (window.location.hash.indexOf('main/position/hiring') != -1)||
    (window.location.hash.indexOf('main/candidate') != -1)||
    (window.location.hash.indexOf('main/schedule') != -1)||
    (window.location.hash.indexOf('container/resumesContainer') != -1)||
    (window.location.hash.indexOf('main/rewards') != -1)||
    (window.location.hash.indexOf('main/results') != -1)||
    (window.location.hash.indexOf('main/new/recruit/set') != -1)
  ){
    path = '#/container/newRecruit';
  }else if(//返回企业服务 - 招聘管理 - 我管理的职位
    (window.location.hash.indexOf('main/position/add') != -1)||
    (window.location.hash.indexOf('main/position/offline') != -1)
  ){
    path = '#/container/position/manage';
  }else if(//返回企业服务 - 职位详情返回上一步
    (window.location.hash.indexOf('main/position/detail') != -1)||
    (window.location.hash.indexOf('main/dailyPosdet') != -1)||
    (window.location.hash.indexOf('main/customer/add') != -1)||
    (window.location.hash.indexOf('main/contract/add/0') != -1)
  ){
    window.history.back();
  }else if(//返回结算管理 - 结算管理
    (window.location.hash.indexOf('main/settlement/detail') != -1)
  ){
    path = '#/main/settlements'
  }else if(//返回企业服务 - 简历库管理列表
    (window.location.hash.indexOf('main/resumes/analyze/history?from=public') != -1)||
    (window.location.hash.indexOf('main/resumes/more/import?from=public') != -1)||
    (window.location.hash.indexOf('main/new/recruit/detail?from=public') != -1)
  ){
    path = '#/container/resumesContainer?from=public'
  }else if (
    (window.location.hash.indexOf('main/resumes/analyze/history?from=private') != -1)||
    (window.location.hash.indexOf('main/resumes/more/import?from=private') != -1)||
    (window.location.hash.indexOf('main/new/recruit/detail?from=private') != -1)
  ){
    path = '#/container/myResumesContainer?from=private'
  }else if(//返回企业服务 - 赏金管理列表
    (window.location.hash.indexOf('main/reward/detail/readOnly') != -1)
  ){
    path = '#/main/rewards'
  }else if(//返回企业服务 - 赏金管理列表
    (window.location.hash.indexOf('main/reward/detail') != -1)
  ){
    path = '#/container/financial_reward'
  }else if(//返回企业服务 - 社保管理 - 社会保险列表
    (window.location.hash.indexOf('main/social/import/renewal') != -1)||
    (window.location.hash.indexOf('main/social/detail') != -1)
  ){
    path = '#/main/socialinsurances'
  }else if(//返回企业服务 - 公积金管理列表
    (window.location.hash.indexOf('main/provid/import/renewal') != -1)||
    (window.location.hash.indexOf('main/provid/detail') != -1)
  ){
    path = '#/main/provident'
  }else if (//返回企业服务 - 薪酬管理列表
    (window.location.hash.indexOf('main/salary/import') != -1)||
    (window.location.hash.indexOf('main/salary/detail') != -1)
  ){
    path = '#/main/salarys'
  }else if(//返回设置 - 企业管理 - 内部员工
    (window.location.hash.indexOf('main/empInfo') != -1)
  ){
    path = '#/container/setting-entmgm?key=0'
  }else if(//返回设置 - 企业管理 - 角色
    (window.location.hash.indexOf('main/rolesInfo') != -1)
  ){
    path = '#/container/setting-entmgm?key=1'
  }  else if(//返回后道列表页
    (window.location.hash.indexOf('main/serviceOut/detail') != -1)||
    (window.location.hash.indexOf('main/serviceOut/import') != -1)
  ){
    window.history.back();
    return;
  }
  else if(//返回后道首页
    (window.location.hash.indexOf('main/serviceOut') != -1)
  ){
    path = '#/container/serviceOut/index'
  }else if (//返回劳动合同
    (window.location.hash.indexOf('main/labor-contract/tmp') != -1)
  ){
    path = '#/container/labor-contract'
  }else if (//返回劳动合同模板
    (window.location.hash.indexOf('main/labor-contract/add-tmp') != -1)
  ){
    path = '#/main/labor-contract/tmp'
  }else if (//返回劳动合同管理
    window.location.hash.indexOf('main/labor-contract/com-sign/') != -1||
    window.location.hash.indexOf('#/main/labor-contract/com-sign') != -1
  ){
     path = '#/main/labor-contract/manage/await-com-sign'
  }else if (//返回劳动合同管理
    window.location.hash.indexOf('main/labor-contract/com-sign') != -1
  ){
    path = '#/main/labor-contract/manage'
  }else if(//返回劳动合同首页
    (window.location.hash.indexOf('main/labor-contract/manage') != -1)||
    (window.location.hash.indexOf('#/main/labor-contract/tmp') != -1)||
    (window.location.hash.indexOf('#/main/labor-contract/lgl-ent') != -1)||
    (window.location.hash.indexOf('#/main/labor-contract/sign') != -1)||
    (window.location.hash.indexOf('#/main/labor-contract/setting') != -1)||
    (window.location.hash.indexOf('#/main/labor-contract/manage/await-emp-sign') != -1)||
    (window.location.hash.indexOf('#/main/labor-contract/manage/await-com-sign') != -1)
  ){
    path = '#/container/labor-contract'
  }

  if(path){
    window.location.href =  path;
  }else{
    window.history.back();
  }
}
