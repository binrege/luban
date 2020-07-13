import service from './index'

export default {
    addAd(params) {
        return service.post('/ads/addAd', params)
    },
    // 根据id查询用户
    getUser(id) {
        return service.get(`/ads/delAdByIds`)
    },
    // 获取所有广告
    getAllAd() {
        return service.get('/ads/getAllAd')
    },

    //jfy

    //首页
    //查询所有的套餐/精品套餐
    getfindAllCombo() {
        return service.get('/combo/findAllCombo')
    },
    //查询热门课程
    findHotCourse() {
        return service.get('/course/findHotCourse')
    },
    //获取所有的热门资讯
    getAllHotInfo() {
        return service.get('/infos/getAllHotInfo')
    },



    //

    //根据资讯类别获取对应的资讯
    getInfoByInfoType() {
        return service.get('/infos/getInfoByInfoType')
    },

    //根据课程id课程目录
    findCatalogById() {
        return service.get('/course/findCatalogById')
    },

    //查询所有老师
    findAll() {
        return service.post('/teacher/findAll')
    },

    //查询课程子类类型
    findChildType(typeId) {
        return service.get(`/courseType/findChildType?typeId=${typeId}`)
    },
    //查询课程父类类型
    findCourseType() {
        return service.get('/courseType/findCourseType')
    },

    // 查询课程

 
    
     findAllCombo(){
        return service.get('/combo/findAllCombo')
    },
    //根据资讯类别获取对应的资讯
    getInfoByInfoType(){
        return service.get('/infos/getInfoByInfoType')
    },
    

    findCourse(params) {
        if (params.length === 0 || params[0] === 0) {
            return service.get(`/course/findCourse`)
        } else if (params.length === 1) {
            return service.get(`/course/findCourse?courseTypeIds=${params[0]}`)
        } else if (params.length === 2) {
            if (params[1] === 0) {
                return service.get(`/course/findCourse?courseTypeIds=${params[0]}`)
            } else {
                return service.get(`/course/findCourse?courseTypeIds=${params[0]}&courseTypeIds=${params[1]}`)
            }
        }
    },



    //end jfy
}