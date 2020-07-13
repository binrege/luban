<template>
  <div>
    <main>
      <p>
        <a href="#">首页</a>/
        <a href="#">套餐</a>
      </p>
      <div>
        <dl v-for="(item,index) in taochan" :key="index">
          <dt>
            <img :src="item.courseImage" />
          </dt>
          <dd>{{item.courseName}}</dd>
          <dd>
            <a href="#">￥{{item.coursePrice}}</a>
            <span>包含2门课程</span>
          </dd>
        </dl>
       
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      taochan: null
    };
  },
  components: {},
  props: {},
  // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
  mounted() {
    this.findHotCourse();
  },
  methods: {
    findHotCourse() {
      //自己命名  ,对应上面的数据
      this.$api //不变
        .findHotCourse() //接口的名字
        .then(res => {
          //   console.log(JSON.parse(Base64.decode(res)))
          console.log(res);
          this.taochan = res.t.list;
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
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  background-color: #f6f6f6;
}
main div {
  width: 1180px;
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  margin: 0 auto;
  margin-bottom: 50px;
}
main p {
  width: 1180px;
  height: 60px;
  margin: 0 auto;
  line-height: 60px;
}
main p a {
  color: #000;
}
main div {
  width: 1180px;
  flex-wrap: wrap;
  // justify-content: space-between;
  margin: 0 auto;
  font-size: 12px;
  // display: flex;
  background-color: #f6f6f6;
}
main div dl {
  width: 280px;
  height: 240px;
  margin-right: 100px;
  margin-bottom: 40px;
}
main div img {
  width: 280px;
  height: 158px;
}
main div dt {
  width: 280px;
  height: 158px;

}
main div dd {
  margin: 0 10px;
  line-height: 38px;

}

main div dd span {
  color: #909399;
  float: right;
}
main div dd a {
  color: #0486fe;
}
</style>