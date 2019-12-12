import areaData from './areaData'
export const newAreaData = function (data) {   // 得到一个含有‘全部’字段的  省市区  的地区数组
    let newAreaData = data ?JSON.parse(JSON.stringify(data)) : JSON.parse(JSON.stringify(areaData))
    newAreaData.map((outerItem , outerIndex)=>{
        outerItem.children&&outerItem.children.unshift({'value': outerItem.value + '100'  , 'label' : "全部"})
        outerItem.children&&outerItem.children.map((innerItem , innerIndex)=>{
            if(innerIndex!=0){
                innerItem.children&&innerItem.children.unshift({'value': innerItem.value + '100'  , 'label' : "全部"})
            }
        })
    })
    return newAreaData
}
export const getnewAreaDataByCode = (code = '') => {
    let name = '';
    const eachName = (items) => {
        items.map((item, i) => {
            if (item.value == code) {
                name = item.label;
            }
            if (item.children)
                eachName(item.children);
        });
    }
    eachName(newAreaData());
    return name;
}
export const getToponymyCode = function (value) {  //得到省市区 或 省全部 或 市全部 最后一个code码   全部  字段除外
    let codeAndName = [] , searchCode = '' , pureCode = []
    if (value && value.length > 0){
        if (value.length == 2){
            codeAndName[0] = { 'province_code': value[0] , 'province' : getnewAreaDataByCode( value[0] ) };
            codeAndName[1] = { 'city_code': '' , 'city' : ''};
            codeAndName[2] = { 'district_code': '' , 'district' : ''};
            searchCode = '&province_code=' + value[0] + '&city_code=%20&district_code=%20'
        } else if (value.length == 3){
            if ((value[1]+'100') == value[2] ){

                codeAndName[0] ={ 'province_code': value[0] , 'province' : getnewAreaDataByCode( value[0] ) };
                codeAndName[1] ={ 'city_code': value[1] , 'city' : getnewAreaDataByCode( value[1] ) };
                codeAndName[2] ={ 'district_code': '' , 'district' : '' };
                searchCode = '&province_code=' + value[0] +'&city_code=' + value[1] + '&district_code=%20'

            }else{
                codeAndName[0] = { 'province_code': value[0] , 'province' : getnewAreaDataByCode( value[0] ) }
                codeAndName[1] = { 'city_code': value[1] , 'city' : getnewAreaDataByCode( value[1] ) }
                codeAndName[2] = { 'district_code': value[2] , 'district' : getnewAreaDataByCode( value[2] ) }
                searchCode = '&province_code=' + value[0] +'&city_code=' + value[1] + '&district_code='+ value[2]
            }
        }
    }
    return {
        codeAndName, 
        searchCode
    }
}
export const getPureCode = function (value) {  //得到省市区 或 省全部 或 市全部 最后一个code码   全部  字段除外
    let pureCode = []
    if (value){
        if(value.province_code&&value.city_code&&value.district_code){
            pureCode = [value.province_code , value.city_code , value.district_code]
        }else if(value.province_code&&value.city_code&&!value.district_code){
            pureCode = [value.province_code , value.city_code , value.city_code+ '100' , ]
        }else if(value.province_code&&!value.city_code &&!value.district_code){
                pureCode = [value.province_code , value.province_code + '100' ]
        }
    }
    return {
        pureCode
    }
}
export const getPureCodeByType = function (value, type) {  //得到省市区 或 省全部 或 市全部 最后一个code码   全部  字段除外
    let pureCodeByType = []
    if (value && type) {
        if (value[`${type}` + '_province_code'] && value[`${type}` + '_city_code'] && value[`${type}` + '_district_code']) {

            pureCodeByType = [value[`${type}` + '_province_code'], value[`${type}` + '_city_code'], value[`${type}` + '_district_code']]

        } else if (value[`${type}` + '_province_code'] && value[`${type}` + '_city_code'] && !value[`${type}` + '_district_code']) {

            pureCodeByType = [value[`${type}` + '_province_code'], value[`${type}` + '_city_code'], value[`${type}` + '_city_code'] + '100' ]

        } else if (value[`${type}` + '_province_code'] && !value[`${type}` + '_city_code'] && !value[`${type}` + '_district_code'] ){

            pureCodeByType = [value[`${type}` + '_province_code'], value[`${type}` + '_province_code'] + '100']
        }
    } else if (value && !type) {
        if (value.province_code && value.city_code && value.district_code) {

            pureCodeByType = [value.province_code, value.city_code, value.district_code]

        } else if (value.province_code && value.city_code && !value.district_code) {

            pureCodeByType = [value.province_code, value.city_code, value.city_code + '100' ]

        } else if (value.province_code && !value.city_code && !value.district_code) {

            pureCodeByType = [value.province_code, value.province_code + "100"]

        }
    }
    return {
        pureCodeByType
    }
}
