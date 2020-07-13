<template>
 <div>
 <footer>
        <div class="foot">
          <span>版权所有 © 2017 湖南鲁班教育科技有限公司</span>
          <span>湘ICP备17008427号-1</span>
          <a href="#">网站地址</a>
        </div>
      </footer>
 </div>
</template>

<script>
 export default {
   name:'',
   data () {
     return {

     }
   },
   components: {

   },
   props: {

   },
   // 生命周期 - 载入后, Vue 实例挂载到实际的 DOM 操作完成，一般在该过程进行 Ajax 交互
   mounted() {

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
footer{
	width: 100%;
	height: 60px;
	background: #242a39;
  position: absolute;
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