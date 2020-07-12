<template>
  <div class="head">
    <div class="logo">
      <img src="../assets/images/logo.jpg" />
      <!-- <img src="./img/logo.jpg"/> -->
    </div>
    <div class="list" id="list">
      <ul>
        <li class="head-nav-active">
          <router-link to="/">首页</router-link>

          <i></i>
        </li>
        <li>
          <router-link to="/class">课程</router-link>
          <i></i>
        </li>
        <li>
             <router-link to="/information">资讯</router-link>
          <i></i>
        </li>
        <li>
             <router-link to="/wenda">问答</router-link>
          <i></i>
        </li>
        <li>
             <router-link to="/taochan">套餐</router-link>
          <i></i>
        </li>
        <li>
             <router-link to="/shizi">师资</router-link>
          <i></i>
        </li>
        <li>
             <router-link to="/">关于我们</router-link>
          <i></i>
        </li>
        <li>
             <router-link to="/cheng">学员成果</router-link>
          <i></i>
        </li>
        <li>
             <router-link to="/">【领取资料】</router-link>
          <i></i>
        </li>
        <!-- <li class="head-nav-active"><a href="#" >首页</a><i></i></li>
            <li><a href="./html/class.html">课程</a><i></i></li>
            <li><a href="./html/information.html">资讯</a><i></i></li>
            <li><a href="./html/wenda.html">问答</a><i></i></li>
            <li><a href="./html/taochan.html">套餐</a><i></i></li>
            <li><a href="./html/shizi.html">师资</a><i></i></li>
            <li><a href="#">关于我们</a><i></i></li>
            <li><a href="./html/cheng.html">学员成果</a><i></i></li>
        <li><a href="#">【领取资料】</a><i></i></li>-->
      </ul>
    </div>
    <div class="head-right">
      <div class="head-search">
        <img src="../assets/images/list.png" alt />
      </div>
      <div class="head-login">
        <a href="javascript:;">登录</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  components: {},
  props: {},
  // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  mounted() {},
  methods: {
    go(path) {
      this.$router.push(path);
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
img {
  border: none;
  vertical-align: bottom;
}
a {
  text-decoration: none;
}
html,
body {
  width: 100%;
  /* 	height: 100%; */
}

.head {
  width: 1182px;
  height: 70px;
  margin: 0 auto;
}
.head .logo {
  float: left;
  width: 47px;
  height: 50px;
  margin-top: 8px;
}
.head .logo img {
  width: auto;
  height: 50px;
}
.head .list {
  float: left;
}
.head .list ul {
  height: 70px;
  display: flex;
}
.head .list ul li {
  margin-left: 40px;
  font-size: 16px;
  position: relative;
  padding-bottom: 6px;
  height: 70px;
  padding-top: 24px;
}
.head .list ul li a {
  color: #303133;
}
.head .list ul .head-nav-active a {
  color: #0486fe;
  font-weight: bold;
}
.head .list ul .head-nav-active i {
  width: 20px;
  height: 2px;
  background: #0486fe;
  position: absolute;
  left: 50%;
  margin-left: -10px;
  bottom: 16px;
}
.head .list ul li a:hover {
  color: #0486fe;
}
.head .head-right {
  display: flex;
  align-items: center;
  height: 70px;
  float: right;
}
.head .head-login {
  margin-left: 40px;
  cursor: pointer;
}
.head .head-login a {
  color: #303133;
}
</style>