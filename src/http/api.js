import service from './index'

export default {
    login(params) {
        return service.post('/ads/addAd', params)
    },
    // 根据id查询用户
    getUser(id) {
        return service.get(`/ads/delAdByIds`)
    },
    // 获取所有广告
    getAllAd() {
        return service.get('/ads/getAllAd')
    }
}