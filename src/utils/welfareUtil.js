
import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';


/************************************ 企业后台积分 *************************************/

const PRODUCT_PATH  = '/api/products';
const PURCHASE_PATH = '/api/purchase-scores';
const RELEASE_PATH  = '/api/release-score-orders';

export const getProductType=(options={}) =>{ //获取开票类型列表
	const url=PRODUCT_PATH;
	return fetch.get(url,constants.WELFARE_SCORE,options);
}

export const getProvidersUtil=(uuid,options={}) =>{ //获取供应商列表
	const url=PRODUCT_PATH+'/'+uuid+'/providers';
	return fetch.get(url,constants.WELFARE_SCORE,options);
}

export const buyPointsUtil=(data,options={}) =>{ //企业购买积分
	const url=PURCHASE_PATH;
	return fetch.post(url,data,constants.WELFARE_SCORE,options);
}

/** 
* 充值订单有以下4种状态:
* 待上传打款凭证(active)、待到账(auditing)、已到账(audited)、已退单(canceled)
*/
export const getOrdersList=(data,options={}) =>{ //获取充值记录列表接口
	const url=PURCHASE_PATH;
	return fetch.get(url,constants.WELFARE_SCORE,options);
}

export const getOrdersDetail=(uuid,options={}) =>{ //获取充值订单详情接口
	const url=PURCHASE_PATH+'/'+uuid;
	return fetch.get(url,constants.WELFARE_SCORE,options);
}

export const getCompanyScores=(options={}) =>{ //获取企业积分详情接口 
	const url='/api/ent-scores';
	return fetch.get(url,constants.WELFARE_SCORE,options);
}

export const cancelOrderUtil=(data,options={}) =>{ //取消购买积分订单接口
	const url=PURCHASE_PATH+'/'+data.uuid+'/cancel';
	return fetch.putJson(url,data,constants.WELFARE_SCORE,options);
}

export const deleteOrderUtil=(data,options={}) =>{ //删除充值订单接口
	const url=PURCHASE_PATH+'/'+data.uuid;
	return fetch.del(url,data,constants.WELFARE_SCORE,options);
}

export const uploadProofUtil=(data,options={}) =>{ //上传打款凭证接口
	const url=PURCHASE_PATH+'/'+data.uuid;
	return fetch.putJson(url,data,constants.WELFARE_SCORE,options);
}

export const getReleaseOrders=(data,options={}) =>{ //获取发放记录列表接口
	const url=RELEASE_PATH;
	return fetch.get(url,constants.WELFARE_SCORE,options);
}

export const getReleaseDetail=(data,options={}) =>{ //获取发放记录详情接口
	const url=RELEASE_PATH+'/'+data.uuid;
	return fetch.get(url,constants.WELFARE_SCORE,options);
} 

export const releaseScoresUtil=(data,options={}) =>{ //员工积分发放接口
	const url='/api/release-scores';
	return fetch.post(url,data,constants.WELFARE_SCORE,options);
}





