<template>
  <div>
    <div class="main">
      <div class="main-first" style="width: 1180px;margin:0 auto;">
       
	    <ul class="pid">
          <li class="active">全部</li>
          <li v-for="(item,index) in fatherClassName" :key="index">{{item.courseTypeName}}</li>
        </ul>

        <ul class="child">
          <li class="active">全部</li>
          <li>项目专题</li>
          <li>上期课程</li>
          <li>本期课程</li>
        </ul>
			<div class="main-sec">
			<button>
				价格
				<div>
				<i></i>
				<i></i>
				</div>
			</button>
			<button>
				热度
				<div>
				<i></i>
				<i></i>
				</div>
			</button>
			</div>
   
    </div>

		<div class="main-thrid">
		<div class="c">
			<div class="top">
			<dl>
				<dt>
				<div>
					<a href="../assets/images/start.png" target="_self">
					<img src="../assets/images/10.gif" />
					</a>
				</div>
				<img src="../assets/images/start.png" />
				</dt>
				<dd>
				【鲁班学院】ZooKeeper专题
				<br />
				<span>vip课程系列</span>
				</dd>
			</dl>
			</div>
			<div class="bottom">
			<p>
				￥7580.00
				<span>3946人在学</span>
			</p>
			</div>
		</div>
		</div>
  </div>

    <div class="footer">
      <div class="tex">
        版权所有◎2017湖南鲁班教育科技有限公司
        <span>湘ICP备17008427号-1</span>
        <span>网站地图</span>
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
      fatherClassName: null,
      ChildClassName: null
    };
  },
  components: {},
  props: {},
  // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  mounted() {
    this.findCourseType(); //调用方法 ,记到加this
    this.findChildType();
  },
  methods: {
    findCourseType() {
      //自己命名  ,对应上面的数据
      this.$api //不变
        .findCourseType() //接口的名字
        .then(res => {
          //   console.log(JSON.parse(Base64.decode(res)))
          console.log(res);
          this.fatherClassName = res.t;
        })
        .catch(err => {
          console.log(err);
        });
    },

    findChildType() {
      this.$api //不变
        .findChildType() //接口的名字
        .then(res => {
          //   console.log(JSON.parse(Base64.decode(res)))
          console.log(res);
          this.ChildClassName = res.t;
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ol,
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  border: 0;
  vertical-align: center;
}
.clear::after {
  content: "";
  display: block;
  clear: both;
  height: 0;
  visibility: hidden;
}
.clear {
  zoom: 1;
}

/* main */
.main {
  width: 100%;
  min-height: 1052px;
  background-color: #f6f6f6;
  border: 1px solid #ebebeb;
  padding-top: 19px;
}
.main .main-first {
  height: 220px;
}
.main .main-first .pid {
  padding-bottom: 24px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
}
.main .main-first .pid li {
  height: 20px;
  font-size: 14px;
  color: #303133;
  line-height: 20px;
  padding: 4px 12px;
  margin-top: 20px;
  margin-left: 20px;
  text-align: center;
  box-sizing: content-box;
  flex: none;
  cursor: pointer;
}
.main .main-first .pid .active {
  background-color: #0088ff;
  border-radius: 4px;
  color: #fff;
}
.main .main-first .child {
  padding-bottom: 24px;
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
}
.main .main-first .child li {
  height: 20px;
  font-size: 14px;
  color: #303133;
  line-height: 20px;
  padding: 4px 12px;
  margin-top: 20px;
  margin-left: 20px;
  text-align: center;
  box-sizing: content-box;
  flex: none;
  cursor: pointer;
}
.main .main-first .child .active {
  background-color: #0088ff;
  border-radius: 4px;
  color: #fff;
}
.main .main-first .main-sec {
  display: flex;
  margin-top: 20px;
}
.main .main-first .main-sec button {
  position: relative;
  margin-right: 20px;
  height: 32px;
  font-size: 14px;
  color: #303133;
  width: 100px;
  line-height: 32px;
  background-color: #fff;
  text-align: center;
  padding-right: 12px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  padding: 0;
}
.main .main-first .main-sec button div {
  flex-direction: column;
  justify-content: space-between;
  height: 10px;
  display: flex;
  width: 6px;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translate(0, -50%);
  padding-left: 20px;
}
.main .main-first .main-sec button div i {
  height: 4px;
  width: 6px;
  background: url("../assets/images/10.gif") no-repeat center/contain;
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
}
.main .main-first .main-sec button div i:nth-child(2) {
  transform: rotate(0);
}

.main .main-thrid {
  width: 1180px;
  height: 748px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 63px;
}

.main .main-thrid .c {
  width: 220px;
  height: 236px;
  background-color: #fff;
}
.main .main-thrid .c .top {
  height: 196px;
  width: 220px;
}
.main .main-thrid .c .top dl {
  height: 196px;
  width: 220px;
}
.main .main-thrid .c .top dl dt {
  cursor: pointer;
  position: relative;
  width: 220px;
  height: 124px;
}
.main .main-thrid .c .top dl dt > img {
  width: 220px;
  height: 124px;
}
.main .main-thrid .c .top dl dt div {
  position: absolute;
  width: 220px;
  height: 124px;
  background: rgba(0, 0, 0, 0.6);
  display: none;
}
.main .main-thrid .c .top dl dt div a {
  display: block;
  position: absolute;
  width: 36px;
  height: 36px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.main .main-thrid .c .top dl dt div a img {
  width: 36px;
  height: 36px;
}
.main .main-thrid .c .top dl dt:hover div {
  display: block;
}
.main .main-thrid .c .top dl dd {
  font-size: 13px;
  color: #303133;
  line-height: 24px;
  margin-left: 10px;
}
.main .main-thrid .c .top dl dd span {
  font-size: 12px;
  color: #909399;
}
.main .main-thrid .c .bottom p {
  width: 220px;
  height: 42px;
  font-size: 12px;
  color: #0088ff;
  line-height: 42px;
}
.main .main-thrid .c .bottom p span {
  float: right;
  color: #909399;
}

.main .nav {
  width: 252px;
  height: 34px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 43px;
}

.main .nav .first {
  width: 35px;
  height: 32px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  line-height: 30px;
  text-align: center;
  font-weight: 900;
}
.main .nav .first:hover {
  background-color: #0486fe;
  color: #fff;
}
.main .nav .sec {
  width: 33px;
  height: 32px;
  background-color: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  line-height: 30px;
  text-align: center;
  /* font-weight: 900; */
  font-size: 12px;
}
.main .nav .sec:hover {
  background-color: #0486fe;
  color: #fff;
}

.footer {
  width: 100%;
  height: 60px;
  background-color: #242a39;
}
.footer .tex {
  height: 60px;
  width: 525px;
  margin: 0 auto;
  line-height: 60px;
  color: #999999;
  font-size: 12px;
}

.footer .tex span:nth-child(1) {
  color: #c0c4cc;
}
.footer .tex span:nth-child(2) {
  color: #f6f6f6;
  float: right;
}
</style>