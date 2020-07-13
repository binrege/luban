<template>
  <div>
    <div>
      <el-carousel>
        <el-carousel-item v-for="(item,index) in lunbo" :key="index">
          <img :src="item.adImage" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="content">
      <main>
        <div class="con">
          <div class="course">
            <h3>热门课程</h3>
            <p>更多</p>
          </div>
          <div class="list">
            <dl v-for="(item,index) in hotCourse" :key="index">
              <dt>
                <div>
                  <a href="./html/class-two.html" target="_self">
                    <img src="img/start.png" />
                  </a>
                </div>
                <img class="hotIMg" :src="item.courseImage" />
              </dt>
              <dd>
                <p>{{item.courseName}}</p>
                <span>
                  <span>免费</span>
                  <span>{{item.stuNum}}人在学</span>
                </span>
              </dd>
            </dl>
          </div>
        </div>
      </main>

      <div class="btq">
        <div class="nav">
          <h3>精品套餐</h3>
          <p>更多</p>
        </div>
        <div class="list">
          <dl v-for="(item,index) in hotCourse" :key="index">
            <dt>
              <div>
                <a href="./html/class-two.html" target="_self">
                  <img src="../assets/images/start.png" />
                </a>
              </div>
              <img class="hotIMg" :src="item.courseImage" />
            </dt>
            <dd>
              <p>{{item.courseName}}</p>
              <span>
                <span>免费</span>
                <span>{{item.stuNum}}人在学</span>
              </span>
            </dd>
          </dl>
          <dl>
            <dt></dt>
            <dd></dd>
          </dl>
        </div>
      </div>
      <div></div>
      <div class="hot">
        <div class="hots">
          <div class="nav">
            <h3>热门资讯</h3>
            <p>更多</p>
          </div>
          <div class="list">
            <dl v-for="(item,index) in hotNews" :key="index">
              <dt>
                <img class="newimg" :src="item.infoImage" />
              </dt>
              <dd>
                <h4>{{item.infoDes}}</h4>
                <p>
                  大家还在为JAVA架构师一个月多少钱而烦恼么？
                  <br />各位还在网上搜寻相关信息吗？别麻烦了，今天就让小屋老师为大家一网打尽吧！
                </p>
                <span>
                  <span>2019/06/01</span>
                  <span>652</span>
                </span>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      <div class="teacher">
      
      </div>
      <div class>
        <img src="../assets/images/pic-new.png" alt="鲁班学院" style="width: 100%;" />
      </div>
      <div class>
        <img src="../assets/images/1591362192716334.jpg" alt="鲁班学院" style="width: 100%;" />
      </div>
    </div>
  </div>
</template>

<script>
let Base64 = require("js-base64").Base64;
export default {
  name: "",
  data() {
    return {
      lunbo: null,
      hotCourse: null,
      hotNews: null
    };
  },
  components: {},
  props: {},
  // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      //get
      this.$api
        .getAllAd()
        .then(res => {
          console.log(JSON.parse(Base64.decode(res)));
          this.lunbo = JSON.parse(Base64.decode(res)).t;
          console.log(this.lunbo);
        })
        .catch(err => {
          console.log(err);
        });
      this.$api
        .findHotCourse()
        .then(res => {
          console.log(res);
          // console.log(JSON.parse(Base64.decode(res)));
          this.hotCourse = res.t.list;
          // console.log(this.hotCourse);
        })
        .catch(err => {
          console.log(err);
        });
      //热门资讯
      this.$api
        .getAllHotInfo()
        .then(res => {
          console.log(res);
          console.log(JSON.parse(Base64.decode(res)));
          this.hotNews = JSON.parse(Base64.decode(res)).t;
          // console.log(this.hotCourse);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
main {
  width: 100%;
  /* height: 578px; */
  height: auto;
}
.content {
  background: #f6f6f6;
}
main .con {
  width: 1182px;
  margin: 0 auto;
}
main .con .course {
  height: 65px;
  width: 1182px;
  line-height: 65px;
}
main .con .course h3 {
  float: left;
  color: #303133;
  font-size: 18px;
  padding-left: 3px;
  height: 18px;
  line-height: 18px;
  margin-top: 25px;
  border-left: 3px solid #67c23a;
}
main .con .course p {
  float: right;
  color: #303133;
}
main .con .list {
  width: 1182px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: space-between;
}
main .con .list dl dt {
  position: relative;
  width: 220px;
  height: 124px;
}
main .con .list dl dt div {
  position: absolute;
  width: 220px;
  height: 124px;
  background: rgba(0, 0, 0, 0.6);
  display: none;
}
main .con .list dl dt div a {
  display: block;
  position: absolute;
  width: 54px;
  height: 54px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
main .con .list dl dt:hover div {
  display: block;
}
main .con .list dl {
  width: 220px;
  height: 236px;
  background: #ffffff;
  position: relative;
}
main .con .list dl dd {
  padding: 10px 10px;
  font-size: 12px;
  color: #2b2d34;
}
main .con .list dl dd p {
  line-height: 20px;
}
main .con .list dl dd > span {
  display: block;
  width: 200px;
  height: 12px;
  margin-top: 30px;
}
main .con .list dl dd > span span:nth-child(1) {
  float: left;
  color: #0486fe;
}
main .con .list dl dd > span span:nth-child(2) {
  float: right;
  color: #9093a5;
}
.hotIMg {
  width: 280px;
}

.btq {
  width: 1182px;
  margin: 0 auto;
  background: #f6f6f6;
}
.btq .nav {
  height: 65px;
  width: 1182px;
  line-height: 65px;
}
.btq .nav h3 {
  float: left;
  color: #303133;
  font-size: 18px;
  padding-left: 3px;
  height: 18px;
  line-height: 18px;
  margin-top: 25px;
  border-left: 3px solid #ffa400;
}
.btq .nav p {
  float: right;
  color: #303133;
}
.btq .list {
  width: 1182px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.btq .list dl dt {
  width: 280px;
  height: 158px;
  position: relative;
}
.btq .list dl dt div {
  position: absolute;
  width: 280px;
  height: 158px;
  background: rgba(0, 0, 0, 0.6);
  display: none;
}
.btq .list dl dt div a {
  display: block;
  position: absolute;
  width: 54px;
  height: 54px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.btq .list dl dt:hover div {
  display: block;
}
.btq .list dl {
  width: 280px;
  height: 228px;
  background: #ffffff;
  float: left;
  margin-right: 20px;
}
.btq .list dl dd {
  padding: 10px 10px;
  font-size: 12px;
  color: #2b2d34;
}
.btq .list dl dd p {
  line-height: 20px;
}
.btq .list dl dd > span {
  display: block;
  width: 260px;
  height: 12px;
  margin-top: 12px;
}
.btq .list dl dd > span span:nth-child(1) {
  float: left;
  color: #0486fe;
}
.btq .list dl dd > span span:nth-child(2) {
  float: right;
  color: #9093a5;
}

.hot {
  width: 100%;
  height: 492px;
  background: #f6f6f6;

}
.hot .hots {
  width: 1182px;
  height: 492px;
  margin: 0 auto;
}
.hot .hots .nav {
  height: 65px;
  width: 1182px;
  line-height: 65px;
}
.hot .hots .nav h3 {
  float: left;
  color: #303133;
  font-size: 18px;
  height: 18px;
  line-height: 18px;
  margin-top: 25px;
}
.hot .hots .nav p {
  float: right;
  color: #303133;
}
.hot .hots .list {
  width: 1182px;
 
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
  
}
.hot .hots .list dl {
  width: 567px;
  height: 228px;
  background: #ffffff;
  display: flex;
  padding: 20px 0px;
}
.hot .hots .list dl dt {
  width: 290px;
  height: 148px;
  padding-left: 20px;
}
.hot .hots .list dl dd {
  margin-left: 10px;
}
.hot .hots .list dl dd h4 {
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 6px;
}
.hot .hots .list dl dd p {
  font-size: 12px;
  color: #909399;
  line-height: 20px;
  overflow: hidden;
  width: 265px;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.hot .hots .list dl dd > span {
  display: block;
  width: 260px;
  height: 12px;
  margin-top: 45px;
  color: #909399;
}
.hot .hots .list dl dd > span span:nth-child(1) {
  float: left;
}
.hot .hots .list dl dd > span span:nth-child(2) {
  float: right;
}
.newimg {
  width: 260px;
  height: 268px;
}
.pp {
  padding-top: 40px;
}

.teacher{
	width: 100%;
	margin-top: 90px;
}
.teacher .teacher-1{
	width: 1150px;
	margin: 0 auto;
	text-align: center;
}
.teacher .teacher-1 .head{
	width: 100%;
	margin-bottom: 30px;
	font-size: 33px;
}
.teacher .teacher-1 p{
	margin-bottom: 60px;
	font-size: 20px;
}
.teacher .teacher-1 div{
	width: 100%;
}
.teacher .teacher-1 div dl{
	width: 100%;
	height: 260px;
	margin-bottom: 40px;
}
.teacher .teacher-1 div dl dt{
	float: left;
	width: 220px;
	height: 260px;
	background: papayawhip;
	border-radius: 20px;
	margin-right: 50px;
}
.teacher .teacher-1 div dl dd{
	width: 880px;
	float: left;
}
.teacher .teacher-1 div dl dd h2{
	width: 300px;
	font-size: 24px;
	text-align: left;
	padding-left: 25px;
	border-left: 5px solid #94d022;
	margin: 40px 0; 
}
.teacher .teacher-1 div dl dd h2 span{
	font-size: 16px;
	color: #94d022;
	margin-left: 20px;
}
.teacher .teacher-1 div dl dd h3{
	font-size: 18px;
	text-align: left;
	margin-bottom: 12px;
}
.teacher .teacher-1 div dl dd p{
	text-align: left;
	font-size: 18px;
	line-height: 40px;
}

footer{
	width: 100%;
	height: 60px;
	background: #242a39;
}
footer .foot{
	width: 1182px;
	height: 60px;
	margin: 0 auto;
	text-align: center;
	line-height: 60px;
}
footer .foot span{
	margin-right: 15px;
	font-size: 14px;
	color: #999999;
}
footer .foot span:nth-child(2){
	color: #c0c4cc;
}
footer .foot a{
	font-size: 14px;
	color: #FFFFFF;
}
</style>