<template>
  <div>
    <div class="header">
<navs></navs>
<div>
  <router-view></router-view>
</div>
    </div>
  </div>
</template>

<script>
let Base64 = require("js-base64").Base64;

import navs from "../components/nav"
export default {
  name: "",
  props: {},
  components: {navs},
  data() {
    return {
      msg: "我是home组件的数据"
    };
  },
  methods: {
    send() {
      this.$bus.$emit("send", this.msg);
      this.$router.push("/login");
    },
    getData() {
      this.$api
        .getAllAd()
        .then(res => {
          console.log(JSON.parse(Base64.decode(res)));
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    // this.getMenus()
    // this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
header{
	width: 100%;
	height: 70px;
	position: sticky;
	top: 0;
	background: #FFFFFF;
	z-index: 999;
}
</style>