import * as fetch from './fetch';
import * as constants from '../redux/constants/Constants';

//通知列表
export const getNotificationList = (offset = 0, limit = 30, options = {}) => {
	const url = `/api/messagemgm/messages?offset=${offset}&limit=${limit}`;
	return fetch.get(url, options);
}


//确认提醒
export const finish_Notification = (id, options = {}) => {
	const url = `/api/messagemgm/message-finish/${id}`
	return fetch.put(url, options);
}

//获取未读提醒

export const getUnreadMessage = (offset = 0, limit = 5, options = {}) => {
	const url = `/api/messagemgm/messages?offset=${offset}&limit=${limit}&status=active`;
	return fetch.get(url, options);
}

export const readAllMessages = (values, options = {}) => {
	const url = `/api/messagemgm/message/op/batch-finish`;
	return fetch.put(url, values, options);
}
