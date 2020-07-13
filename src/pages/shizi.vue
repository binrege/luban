<template>
  <div>
    <div class="teacher">
      <span>
        <a href="#">金牌讲师</a>
      </span>
    </div>

    <div class="banner">
      <ul v-for="(item,index) in goodteacher" :key="index">
        <a href="ahizi-child.vue" target="_self">
          <li>
            <img :src="item.teacherImage" />
            <h1>{{item.teacherName}}</h1>
            <p>{{item.teacherMotto}}</p>
            <i>{{item.teacherDes}}</i>
          </li>
        </a>
      </ul>
      <ul></ul>
      <ul></ul>
    </div>
  </div>
</template>

<script>
let Base64 = require("js-base64").Base64;
export default {
  name: "",
  data() {
    return {
      goodteacher: null
    };
  },
  components: {},
  props: {},
  // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  mounted() {
    this.findAll();
  },
  methods: {
    findAll() {
      this.$api //不变
        .findAll() //接口的名字
        .then(res => {
          //console.log(JSON.parse(Base64.decode(res)))
          console.log(res);
          this.goodteacher = res.t;
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
  height: 100%;
}
body {
  background-color: #f6f6f6;
}

.teacher {
  width: 1182px;
  height: 70px;
  margin: 0 auto;
  display: flex;
  align-items: ceneter;
  margin: 20px auto;
  background-color: #ffffff;
}

.teacher span a {
  color: #303133;
}

.banner {
  width: 1182px;
  height: 710px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #f6f6f6;
  margin: 0 auto;
  margin-bottom: 50px;
  // position: absolute;
}
.banner ul {
  width: 280px;

  display: flex;
  align-content: space-between;
  justify-content: space-between;
  flex-wrap: wrap;
}
.banner ul li {
  width: 280px;
  height: 345px;
  text-align: center;
  background: #ffffff;
  position: relative;
}
.banner ul li i {
  width: 280px;
  height: 345px;
  display: block;
  font-style: normal;
  position: absolute;
  background: black;
  top: 0;
  display: none;
  padding: 39px 20px;
  font-size: 14px;
  color: #ebebeb;
}
.banner ul li h1 {
  height: 55px;
  line-height: 55px;
  font-size: 15px;
}
.banner ul li img {
  border-radius: 10px;
  width: 200px;
  height: 200px;
}
.banner ul li p {
  font-size: 12px;
  color: #909399;
}
.banner ul li:nth-child(6) {
  transform: translateX(-150px);
}
.banner ul li:nth-child(7) {
  transform: translateX(-300px);
}
.banner ul li:hover i {
  display: block;
  opacity: 0.7;
}
</style>