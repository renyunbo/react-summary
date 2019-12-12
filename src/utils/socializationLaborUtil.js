import * as fetch from './fetch'
import * as constants from '../redux/constants/Constants'

//社会化用工         用工池       start

//获取用工池    列表
export const getLaborAllList = (params, options = {}) => {
    //获取全部的  用工池列表
    const url = '/api/recruit/myresumes' + `${params}`
    return fetch.get(url, options)
}

//用工池    列表   (导入)
// export const importLaborList = (data, params, options = {}) => {            //导入用工池成员
//     const url = '/api/recruit/import/org-resumes'
//     return fetch.post(url, data, options)
// }
export const importLaborList = (data, params, options = {}) => {            //导入用工池成员
    // const url = '/api/recruit/org-resume/op/import'
    const url = '/api/socialwork/employees/op/import'
    return fetch.post(url, data, options)
}

//社会化用工         用工池       end
// 岗位管理    获取岗位 列表   搜索  岗位名称
export const getPost = (params, options = {}) => {
    const url = '/api/socialwork/positions' + `${params}`
    return fetch.get(url, options)
}
// 岗位管理      添加岗位
export const postPost = (data, params, options = {}) => {
    const url = '/api/socialwork/position'
    return fetch.post(url, data, options)
}
// 岗位管理     获取上级岗位
export const getPostALl = (params, options = {}) => {
    const url = '/api/socialwork/positions?parent=true'
    return fetch.get(url, options)
}
// 岗位类型
export const getPosCategory = (options = {}) => {
    const url = `/api/recruit/pos-category/socialwork`
    return fetch.get(url, options)
}

// 岗位类型列表
export const getOrgannizationJobs = (params, options = {}) => {
    const url = '/api/personnelmgm/ent/positions?all=true'
    return fetch.get(url, options)
}

// 编辑岗位
export const editPosition = ( options = {}) => {
    let url = '/api/socialwork/position/'+options.id;
    return fetch.put(url, options)
}

// 删除岗位
export const delPostPost = (id, options = {}) => {
    let url = '/api/socialwork/position/'+id;
    return fetch.del(url, options)
}