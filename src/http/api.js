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
    //根据资讯类别获取对应的资讯
    getInfoByInfoType() {
        return service.get('/infos/getInfoByInfoType')
    },

    //根据课程id课程目录
    findCatalogById() {
        return service.get('/course/findCatalogById')
    },

    //查询所有老师
    getfindAll() {
        return service.get('/teacher/findAll')
    },

    //查询课程子类类型
    findChildType() {
        return service.get('/courseType/findChildType')
    },
    //查询课程父类类型
    findCourseType() {
        return service.get('/courseType/findCourseType')
    },

    // 查询课程
    findCourse(){
            return service.get('/course/findCourse')
     },
    

  
    //end jfy
}