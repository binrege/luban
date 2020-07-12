<template>
  <div>
    <div>
      <el-carousel>
        <el-carousel-item v-for="(item,index) in lunbo" :key="index">
          <img :src="item.adImage" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div>
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
      hotCourse: null
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
  background: #f6f6f6;
}
main .con {
  width: 1182px;
  height: 578px;
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
  height: 490px;
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
  width: 220px;
}

 .btq {
  width: 1182px;
  height: 312px;
  margin: 0 auto;
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
  height: 490px;
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
</style>