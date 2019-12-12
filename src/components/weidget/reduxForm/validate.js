import { checkTaxpayerId, checkSocialCreditCodeOrg } from '../../../utils/commonUtils'

//名称只能输入：汉字、字母、数字、以及《》 <> 【】 [ ]  { }  _  -  +  #  |  /  :  ： “ ”   " "  （） () %这些特殊字符
export const isRegExpName = function regExpName(value) {
	return value && !/^[\u4E00-\u9FA5A-Za-z0-9\《\》\<\>\\【\】\[\]\{\}\_\-\+\#\|\/\:\：\“\”\"\"\（\）\(\)\%]+$/.test(value) ?
		'名称不支持部分特殊字符' : undefined;
}

export const required = function required(value) {
	if (Array.isArray(value)) {
		return value.length > 0 ? undefined : '此项是必填项'
	} else if (typeof (value) == 'string' && value && !value.trim()) {
		return value.trim() ? undefined : '此项是必填项';
	} else {
		return typeof (value) == 'number' || value ? undefined : '此项是必填项';
	}
}

export const lowerMonth = function lowerMonth(max) {
	return (value) => {
		console.log('value.....////22@@@@', value, value >= 0);
		return value >= 0 ? `不能小于 ${max}个月` : undefined;
	};
}


export const maxLength = function maxLength(max) {
	return (value) => {
		return value && value.length > max ? `不能超过 ${max} 个字符` : undefined;
	};
}

export const minLength = function maxLength(min) {
	return (value) => {
		return value && value.length < min ? `不能少于 ${min} 个字符` : undefined;
	};
}


export const toFixNum = function toFixNum(num) {
	return (value) => {
		return value && value.toFixed(num) ? `必须小于 ${num} 个字符` : undefined;
	};
}

export const integer = function integer(value) {
	return value && !/^\+?[1-9][0-9]*$/i.test(value) ? '请输入正整数' : undefined;
}

export const positiveOrZero = function positiveOrZero(value) {
	return value && Number(value) < 0 ? '请输入正数或0' : undefined;
}

export const number = function number(value) {
	return value && isNaN(Number(value)) ? '请输入数字' : undefined;
}

export const minValue = function minValue(min) {
	return (value) => {
		return value && value.length < min ? `最小值不小于等于 ${min}` : undefined;
	}
}

export const isHaveSpaceOrComma = function isHaveSpaceOrComma(value) {
	return value && (value.indexOf(" ") != -1 || value.indexOf(".") != -1) ? '请输入数字' : undefined;
}

export const minMoreZeroInt = function minMoreZeroInt(min) {
	return (value) => {
		console.log('咳咳咳咳咳咳。。。。。', Number(value) <= Number(min));
		return value && Number(value) <= Number(min) ? `最小值不能小于等于 ${min}` : undefined;
	}
}

export const minInt = function minInt(min) {
	return (value) => {
		return Number(value) < Number(min) ? `最小值不小于 ${min}` : undefined;
	}
}

export const maxInt = function maxInt(max) {
	return (value) => {
		return Number(value) > Number(max) ? `最大值不大于 ${max}` : undefined;
	}
}

export const email = function email(value) {
	return value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
		'请输入正确的Email地址' : undefined;
}

export const mobile = function mobile(value) {
	return value && !/^(19[0-9]|16[0-9]|17[0-9]|13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(value) ?
		'请输入正确的手机号码' : undefined;
}

export const startCharacter = function startCharacter(value) {
	return value && !/^[A-Za-z]+[A-Za-z0-9]*$/i.test(value) ?
		'此项必须以字母开头' : undefined;
}

export const account = function account(value) {
	return value && !/^[a-z][a-zA-Z0-9]{3,17}$/i.test(value) ?
		'企业专属域名必须以小写字母开头，只能是数字和字母，长度大于3位,小于18位' : undefined;
}


export const password = function password(value) {
	return value && !/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/i.test(value) ?
		'密码必须为6-16位数字和字母的组合' : undefined;
}


export const lackInfo = function lackInfo(value) {
	return () => {
		console.log('value____validate', value);
		return value ? '请完善地址' : undefined
	}
}

const aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" }

// export const idNumber =function idNumber(value){
// 	return value && !/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/i.test(value)?
// 	'证件号码不合法':undefined ;
// }
// 判断身份证是否合法
export const idNumber = function idNumber(sId) {
	let iSum = 0, sBirthday = ''
	if (!/^\d{17}[\dxX]{1}$/i.test(sId)) return sId ? "输入的证照号码长度或格式错误" : undefined
	sId = sId.replace(/x$/i, "a")
	if (aCity[parseInt(sId.substr(0, 2))] == null) return "证照号码地区非法"
	sBirthday = sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2));
	var d = new Date(sBirthday.replace(/-/g, "/"));
	if (sBirthday != (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate())) return "证照号码上的出生日期非法"
	for (var i = 17; i >= 0; i--) iSum += (Math.pow(2, i) % 11) * parseInt(sId.charAt(17 - i), 11)
	if (iSum % 11 != 1) return "您输入的证照号码非法"
	//aCity[parseInt(sId.substr(0,2))]+","+sBirthday+","+(sId.substr(16,1)%2?"男":"女");//此次还可以判断出输入的身份证号的人性别
}

// 港澳通行证
export const isPassCheckNo = function isPassCheckNo(value) {
	return value && !/^[a-zA-Z0-9]{5,17}$/.test(value) ?
		'您输入正确的证件号码' : undefined;
}
export const isFormosa = function isPassCheckNo(value) {   //台湾通行证
	return value && !/^[DJTLQYFCG]{1}([0-9]{10}|[0-9]{8})$/.test(value) ?
		'您输入正确的证件号码' : undefined;
}

// 护照
export const isPassportNo = function isPassportNo(value) {
	// return value && !/^((1[45]\d{7})|(G\d{8})|(P\d{7})|(S\d{7,8}))?$/.test(value) ?
	return value && !/^1[45][0-9]{7}|([P|p|S|s]\d{7})|([S|s|G|g]\d{8})|([Gg|Tt|Ss|Ll|Qq|Dd|Aa|Ff]\d{8})|([H|h|M|m]\d{8，10})$/.test(value) ?
		'您输入正确的证件号码' : undefined;
}


export const isname = function isname(value) {
	return value && !/[\u4e00-\u9fa5]/i.test(value) ?
		'名称必须是中文' : undefined;
}
export const isallnumber = function isname(value) {
	if (/^(17[0-9]|13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(value) || /^(0\d{2,3}-\d{7,8})$/.test(value) || /^(\d{2,3}-\d{4}-\d{3})$/.test(value)) {
		return undefined
	} else {
		return '电话号不合法'
	}
}

export const isTelphone = function email(value) {
	return value && !/^[0-9._+/-]*$/i.test(value) ?
		'请输入正确的电话号码' : undefined;
}

export const englishLetterNumer = function englishLetterNumer(value) {
	return value && !/^[a-zA-Z0-9]+$/i.test(value) ?
		'此项必须填写数字和字母' : undefined;
}
export const englishLetterNumerAnd = function englishLetterNumer(value) {
	return value && !/^[a-zA-Z0-9_-]+$/i.test(value) ?
		'此项只能填写数字、字母或_-' : undefined;
}
export const isRepeat = function isRepeat(value) {
	return () => {
		console.log('mmmmmmmmmmmmm', value)
		return value ? '账户重复，请重新输入' : undefined
	}
}


export const allNumber = function allNumber(value) {
	return value && /^[0-9]*$/.test(value) ?
		'名称不能为纯数字' : undefined;
}
export const isHanzi = function isHanzi(value) {
	return value && !/^[\u4e00-\u9fa5]+$/i.test(value) ?
		'名称必须是中文' : undefined;
}
export const isHanzibank = function isHanzibank(value) {
	return value && !/^[\u4e00-\u9fa5（）()]+$/i.test(value) ?
		'名称必须是中文' : undefined;
}

export const maxInputLength = function maxInputLength(max) {
	return (value) => {
		return value && value.length > max ? `不能超过 ${max} 个字` : undefined;
	};
}
export const isBankId = function isBankId(value) {
	return value && !/^([1-9]{1})(\d{14}|\d{15}|\d{16}|\d{17}|\d{18})$/.test(value) ?
		'请输入正确的银行卡号' : undefined;
}
export const isBankLong = function isBankId(value) {
	return value && !/^[A-Za-z0-9]{14,36}$/.test(value) ?
		'请输入正确的银行卡号' : undefined;
}
export const numLength = function numLength(value) {
	return value && value > 9999999999999 ?
		`必须小于等于13个字符` : undefined;
}

export const noChinese = function noChinese(value) {
	return value && /^[\u4e00-\u9fa5]+$/i.test(value) ?
		'不能输入中文' : undefined;
}
export const isAllEnglish = function isAllEnglish(value) {
	return value && /([\u4e00-\u9fa5]+|[0-9]+)/i.test(value) ?
		'不能输入中文和数字' : undefined;
}
export const letterAndnumber = function isAllEnglish(value) {
	return value && !/^[a-zA-Z0-9]{15}$/i.test(value) ?
		'请输入15位数字和字母' : undefined;
}

export const nineLength = function nineLength(value) {
	return !(value && /^[0-9a-zA-Z]{9}$/i.test(value)) ? `请输入9位数字和字母` : undefined;
}
export const passport_no = function passport_no(value) {
	return !(value && /^[0-9]{18}$/.test(value)) ? `请输入18位数字` : undefined;
}


//  该校验验证了  诸如以下的数字输入    00   00.   00.3  .9  .98   1.345(小数点的位数由参数传入）
export const toCashNum = (num) => {

	return (value) => {
		console.log(value)
		// let re =new RegExp("\^\[1\-9\]\(\\d\+\)\?\(\\.\\d\{1\,2\}\)\?\$\)\|\(\^0\$\)\|\(\^\\d\\.\\d\{1\,2\}\$","i"); // re为/^\d+bl$/gim
		let re = new RegExp('\(^\[1-9\]\(\\d\+\)?\(\.\\d\{1,' + num + '\}\)\?$\)\|\(^0$\)\|\(^\\d\.\\d\{1,' + num + '\}$\)', 'i');

		// 00  012  0234.4 的校验
		if (/(^0[0-9]+(\.)*\d*$)/i.test(value)) {
			return value && /(^0[0-9]+(\.)*\d*$)/i.test(value) ? `数字格式有误` : undefined;
		}
		if (/(^00$)/i.test(value)) {
			return value && /(^00$)/i.test(value) ? `数字格式有误` : undefined;
		}
		// .98  .1 的校验
		if (/(^\.[0-9](\d+)?$)/i.test(value)) {
			return value && /(^\.[0-9](\d+)?$)/i.test(value) ? `数字格式有误` : undefined;
		}
		return value && !re.test(value) ? `小数点后最多输入 ${num} 位` : undefined;

		// return value&&!/(^[1-9](\d+)?(\.\d{1,2})?$)|(^0$)|(^\d\.\d{1,2}$)/i.test(value)?`小数点后最多输入 ${num} 位`:undefined;
	};

}
//验证纳税人识别号
export const taxPayerId = function taxPayerId(value) {
	return value && (!checkTaxpayerId(value)) ?
		'请输入正确的纳税人识别号' : undefined;
}
//验证统一社会信用代码
export const socialReditId = function socialReditId(value) {
	return value && (!checkTaxpayerId(value)) ?
		'请输入正确的统一社会信用代码' : undefined;
}
export const exceptionSymbols = function exceptionSymbols(value) {  // 此项必须填写汉字字母数字（）     -----中文的括号
	return value && !/^([a-zA-Z0-9（）]|[\u4e00-\u9fa5])+$/i.test(value) ?
		'此项必须填写汉字字母数字（）' : undefined;
}

export const toFixedTwo = function toFixedTwo(value) {
	return value && !/^(?!0+(?:\.0+)?$)(?:[1-9]\d*|0)(?:\.\d{1,2})?$/.test(value) ?
		'此项最多输入两位小数' : undefined;
}

export const onlyNumber = function onlyNumber(value) {
	return value && !/^[0-9]*$/.test(value) ?
		'此项只能输入数字' : undefined;
}

export const numOverZero = function numOverZero(value) {
	return value && parseFloat(value) <= 0 ? '此项不能小于0' : undefined;
}

export const maxMoreZeroInt = function minMoreZeroInt(min) {
	return (value) => {
		return Number(value) > Number(min) ? `最大值不能大于 ${min}` : undefined;
	}
}
export const maxFloat = function maxFloat(value) {
	return value && String(Math.floor(value)).length > 12 ? `金额整数位不能超过12位` : undefined;
}
export const intnumOverZero = function intnumOverZero(value) {
	return parseFloat(value) <= 0 ? '此项不能小于0' : undefined;
}
export const minIntText = function minIntText(min) {
	return (value) => {
		return value && Number(value) < Number(min) ? `最小值不小于 ${min}` : undefined;
	}
}
export const minIntNumber = function minIntNumber(min) {
	return (value) => {
		return value == 0 && Number(value) <= Number(min) ? `最小值不小于等于 ${min}` : undefined;
	}
}
export const equal = function equal(equal) {
	return (value) => {
		return value && value.length == equal ? undefined : `必须是 ${equal} 个字符`;
	};
}
