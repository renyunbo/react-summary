import * as fetch from './fetch'
import * as constants from '../redux/constants/Constants'

// 视频课程列表
export const getTrainVideoList = (params, options = {}) => {
	const url = `/api/intelligencemgm/train-lessons${params}`
	return fetch.get(url, options)
}
// 视频课程详情
export const getTrainVideoDetail = (params, options = {}) => {
    const url = `/api/intelligencemgm/train-lessons/${params}`
	return fetch.get(url, options)
}
// 删除视频 某一条
export const delTrainVideo = (params, options = {}) => {
    const url = `/api/intelligencemgm/train-lessons/${params}`
	return fetch.del(url, options)
}
// 新增视频
export const postTrainVideo = (params, options = {}) => {
    const url = `/api/intelligencemgm/train-lessons`
	return fetch.post(url,params, options)
}
// 编辑视频
export const putTrainVideo = (params, options = {}) => {
    const url = `/api/intelligencemgm/train-lessons/${params.id}`
	return fetch.put(url,params, options)
}
// 发起培训
export const postGoTrain = (params, options = {}) => {
    const url = `/api/intelligencemgm/trains`
	return fetch.post(url,params, options)
}
// 培训列表
export const getTrainList = (params, options = {}) => {
    const url = `/api/intelligencemgm/trains${params}`
	return fetch.get(url, options)
}
// 培训详情
export const getTrainDetail = (params, options = {}) => {
    const url = `/api/intelligencemgm/lesson-learnings${params}`
	return fetch.get(url, options)
}
