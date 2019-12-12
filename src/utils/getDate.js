export const getCurrentDate = function () {
	let todayDate = new Date();
	let date = todayDate.getDate();
	let month = todayDate.getMonth() + 1;
	let year = todayDate.getYear();
	var dateweek = "";
	if (navigator.appName == "Netscape") {
		dateweek = dateweek + (1900 + year) + "/" + month + "/" + date + "";
	}
	if (navigator.appVersion.indexOf("MSIE") != -1) {
		dateweek = dateweek + year + "年" + month + "月" + date + "日 ";
	}
	return dateweek;
}

export const getFormatDate = (timestamp = '') => {
	timestamp = parseInt(timestamp + '000');
	var newDate = new Date(timestamp);
	Date.prototype.format = function (format) {
		var date = {
			'M+': this.getMonth() + 1,
			'd+': this.getDate(),
			'h+': this.getHours(),
			'm+': this.getMinutes(),
			's+': this.getSeconds(),
			'q+': Math.floor((this.getMonth() + 3) / 3),
			'S+': this.getMilliseconds()
		};
		if (/(y+)/i.test(format)) {
			format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
		}
		for (var k in date) {
			if (new RegExp('(' + k + ')').test(format)) {
				format = format.replace(RegExp.$1, RegExp.$1.length == 1 ?
					date[k] : ('00' + date[k]).substr(('' + date[k]).length));
			}
		}
		return format;
	}
	//				return newDate.format('yyyy-MM-dd h:m');
	return newDate.format('yyyy/M/d');
}
//获取当前月的第一天
export const getCurrentMonthFirst = () => {
	let date = new Date();
	date.setDate(1);
	return date;
}
//获取当前月的最后一天
export const getCurrentMonthLast = () => {
	let date = new Date();
	let currentMonth = date.getMonth();
	let nextMonth = ++currentMonth;
	let nextMonthFirstDay = new Date(date.getFullYear(), nextMonth, 1);
	let oneDay = 1000 * 60 * 60 * 24;
	return new Date(nextMonthFirstDay - oneDay);
}

