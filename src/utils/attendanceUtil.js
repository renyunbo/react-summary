import * as fetch from './fetch'
import * as constants from '../redux/constants/Constants'

// 雇员添加考勤方案
export const employeeAddAttendanceWay = (values, options = {}) => {
	const url = `/api/attendance/plan/binding`
	return fetch.post(url, values, options)
}

// 删除考勤
export const deleteAttendanceWay = (id, options = {}) => {
	const url = `/api/attendance/plan/${id}`
	return fetch.del(url, options)
}

// 考勤设置  list
export const attendanceWayList = (params, options = {}) => {
	const url = `/api/attendance/plans?${params}`
	return fetch.get(url, options)
}

// 添加考勤方案
export const addAttendanceWay = (values, options = {}) => {
	const url = `/api/attendance/plan`
	return fetch.post(url, values, options)
}

// 编辑考勤方案
export const editAttendanceWay = (values,  options = {}) => {
	const url = `/api/attendance/plan/${values.id}`
	return fetch.put(url, values, options)
}

// 查看考勤方案
export const attendanceWayDetaile = (id, options = {}) => {
	const url = `/api/attendance/plan/${id}`
	return fetch.get(url, options)
}

// 考勤记录  缺勤预警 list
export const attendanceRecordAbsent = (params, options = {}) => {
	const url = `/api/attendance/absence?${params}`
	return fetch.get(url, options)
}

// 考勤记录 编辑缺勤预警
export const editAttendanceAbsent = (values, id,  options = {}) => {
	const url = `/api/attendance/absence/${id}`
	return fetch.put(url, values, options)
} 

// 考勤记录  自动打卡记录 list
export const attendanceRecordClock = (params, options = {}) => {
	const url = `/api/attendance/attendance?${params}`
	return fetch.get(url, options)
}

//考勤————考勤统计  列表
export const getAttendanceStatistics = (params, options = {}) => {
	const url = `/api/attendance/` + `${params}`
	return fetch.get(url, options)
}

//考勤————考勤统计 导入
export const postAttendanceStatistics = (data, href, params, options = {}) => {
	const url = `/api/attendance/attendances-${href}`
	return fetch.post(url, data , options)
}

