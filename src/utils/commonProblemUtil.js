import * as fetch from './fetch';

const PROBLEM_PATH = '/api/psiorder';

//问题列表
export const getProblemsListUitl = (params, options = {}) => {
	const url = PROBLEM_PATH + '/question-list' + params;
	return fetch.get(url, options);
}

//删除问题
export const delProblemsUtil = (params, options = {}) => {
	const url = PROBLEM_PATH + '/question-delete/' + params;
	return fetch.del(url, {}, options);
}

//新增问题
export const addProblemsUtil = (params, options = {}) => {
	const url = PROBLEM_PATH + '/question-create';
	return fetch.post(url, params, options);
}

//问题详情
export const getProblemsDetailsUitl = (params, options = {}) => {
	const url = PROBLEM_PATH + '/question-get/' + params;
	return fetch.get(url, options);
}