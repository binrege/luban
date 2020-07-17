<template>
 <div>
     <div class="nav">
        <div class="navs">
            <div class="left">
                <p>
                    <a href="#">课程</a>
                    <a href="#">></a>
                    <a href="#">ji精品课程</a>
                    <a href="#">></a>
                    <span>占位符</span>
                </p>
                <dl>
                    <dt>
                           
                    </dt>
                    <dd>
                        <span>【鲁班学院】springIOC底层源码解析</span>
                        <h5>本课程是一门短小、精悍、专门介绍spring原理以及源码设计的课程。整个课程将由浅入深，介绍spring5源码的构建、springbean的生命周期、spring循环依赖的解决方案、spring循环依赖的源码设计、spring扩展或者二次开发的原理、主流开源框架如何配合spring特点、如何扩展spring框架。</h5>
                        <i>2105人在学</i> 
                    </dd>
                </dl>
            </div>
            <div class="right">
                <i class="i-1"></i>
                <div class="i1"></div>
                <i class="i-2"></i>
                <div class="i2"></div>
                <p>免费</p>
                <a href="#">立即报名</a>
            </div>
        </div>
    </div>
 </div>
</template>

<script>
 export default {
   name:'',
   data () {
     return {
       items:null
     }
   },
   components: {

   },
   props: {

   },
   // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
   mounted() {
     console.log(this.$route.params.item);
     this.item=this.$route.params.item
   },
   methods: {

   },
   // 生命周期 - 创建完成（可以访问当前this实例）
   created() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
.nav{
    /* position: relative; */
    width: 100%;
    height: 180px;
    background: peachpuff;
    background-size: 100% 100%;
    /* filter: blur(30px); */
    z-index: -1;
    background-color: rgba(0, 0, 0, 0.4);
}
.nav .navs{
    width: 1000%;
    height: 180px;
    margin: 0 auto;
}
.nav .navs .left{
    float: left;
    width: 1020px;
    height: 180px;
    margin-left: 60px;
}
.nav .navs .left p{
    float: left;
    width: 1020px;
    height: 20px;
    margin: 10px 0 30px;
}
.nav .navs .left p a{
    color: #fff;
}
.nav .navs .left p span {
    color: #ccc;
}
.nav .navs .left dl{
    width: 1020px;
    height: 90px;
    float: left;
}
.nav .navs .left dl dt{
    float: left;
    width: 160px;
    height: 90px;
    margin-right: 15px;
    background: papayawhip;
}
.nav .navs .left dl dd{
    float: left;
    width: 845px;
    height: 90px;
}
.nav .navs .left dl dd span{
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    color: #fff;
}
.nav .navs .left dl dd h5{
    font-size: 12px;
    line-height: 16px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 20px;
    width: 800px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.nav .navs .left dl dd i{
    font-size: 14px;
    color: rgba(41, 43, 51, 0.8);
    color: #0486FE;
    margin-left: 5px;
}
.nav .navs .right{
    float: left;
    position: relative;
    width: 160px;
    height: 180px;
}
.nav .navs .right i{
    position: absolute;
    margin-right: 20px;
    width: 22px;
    height: 24px;
    background: pink;
    z-index: 2;
    left: 100px;
    top: 20px;
}
.nav .navs .right i:nth-child(3){
    left: 140px;
}
.nav .navs .right div{
    position: absolute;
    width: 158px;
    height: 188px;
    background: paleturquoise;
    z-index: 2;
    display: none;
}
.nav .navs .right .i1{
    left: -36px;
    top: 45px;
}
.nav .navs .right .i2{
    left: 5px;
    top: 44px;
}

.nav .navs .right p{
    font-size: 20px;
    color: #fff;
    position: absolute;
    left: 38px;
    top: 135px;
}
.nav .navs .right a{
    font-size: 18px;
    color: #fff;
    position: absolute;
    width: 96px;
    height: 32px;
    background: cornflowerblue;
    left: 85px;
    top: 135px;
    text-align: center;
    line-height: 32px;
}

</style>