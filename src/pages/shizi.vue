<template>
 <div>
    <div class="teacher">
			<span>
				<a href="#">金牌讲师</a>
			</span>
		</div>
			
		<div class="banner">
				<ul v-for="(item,index) in goodteacher" :key="index">
					<a href="./ahizi-child.html" target="_self"><li>
						<img src="../assets/images/a1.jpg" >
						<h1>周瑜</h1>
						<p>身经百战的周瑜老师</p>
						<i>思路决定出路，气度决定高度，细节决定成败
						，性格决定命运。</i>
					</li></a>

				</ul>
		</div>
		<footer>
			<div class="foot">
				<span>版权所有 © 2017 湖南鲁班教育科技有限公司  </span>
				<span> 湘ICP备17008427号-1</span>
				<a href="#">网站地址</a>
			</div>
		</footer>
 </div>
</template>

<script>
let Base64 = require("js-base64").Base64;
 export default {
   name:'',
   data () {
     return {
        goodteacher: null,
     }
   },
   components: {

   },
   props: {

   },
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
   created() {

   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>
  *{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
ol,ul{
	list-style: none;
}
img{
	border: none;
	vertical-align: bottom;
}
a{
	text-decoration: none;
}
html,body{
	width: 100%;
	height: 100%;
	
}
body{
	background-color: #f6f6f6;
}

.teacher{
	width: 1182px;
	height: 70px;
	margin: 0 auto;
	display: flex;
	align-items: ceneter;
	margin: 20px auto;
	background-color: #FFFFFF;
}

.teacher span a{
	color: #303133;
}

.banner{
	width: 1182px;
	height: 710px;
	display: flex;
	background-color: #F6F6F6;
	margin: 0 auto;
	margin-bottom: 50px;
}
.banner ul{
	width: 1182px;
	height: 710px;
	display: flex;
	align-content: space-between;
	justify-content: space-between;
	flex-wrap: wrap;
}
.banner ul li{
	width: 280px;
	height: 345px;
	text-align: center;
	background: #FFFFFF;
	position: relative;
}
.banner ul li i{
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
.banner ul li h1{
	height: 55px;
	line-height: 55px;
	font-size: 15px;
}
.banner ul li img{
	margin-top: 40px;
	border-radius: 10px;
}
.banner ul li p{
	font-size: 12px;
	color: #909399;
}
.banner ul li:nth-child(6){
	transform: translateX(-150px);
}
.banner ul li:nth-child(7){
	transform: translateX(-300px);
}
.banner ul li:hover i{
	display: block;
	opacity: 0.7;
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