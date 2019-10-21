<template>
  <div class="item">
  	<div class="content bbox">
  		<p class="title tc"><img src="../assets/13/inser2_1.png" height="122" width="577" alt=""></p>
  		<p class="tip tc"><img src="../assets/13/inser2_2.png" height="55" width="250" alt=""></p>
  		<img src="../assets/13/inser2_3.png" class="i1">
  		<img src="../assets/13/inser2_4.png" class="i2">
  		<img src="../assets/13/inser2_5.png" class="i3">
  	</div>
  	<img src="../assets/13/inser2_6.png" height="721" width="240" alt="" class="jiu">
  </div>
</template>

<script>
export default {
	data(){
		return{

		}
	},
	methods:{
		
	}
}
</script>

<style  lang='less' scoped>
	.item{
		background-image: url(../assets/13/inser2_bg.jpg);
		background-size: cover;
	}
	.jiu{
		position: absolute;
		right: 0;
		bottom: 1%;
		z-index: -1;
		opacity: 0;
		animation: fadeInRight 1s 1s both;
	}
	.content{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
		padding:0 68px;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: flex-start;
		padding-bottom: 50px;
		.title{
			width: 100%;
			opacity: 0;
			animation: fadeInDown 1s .5s both;
		}
		.tip{
			width: 100%;
			opacity: 0;
			animation: fadeInDown 1s .6s both;
		}
		.i1{
			opacity: 0;
			animation: fadeInUp 1s .7s both;
		}
		.i2{
			opacity: 0;
			animation: fadeInUp 1s .8s both;
		}
		.i3{
			opacity: 0;
			animation: fadeInUp 1s .9s both;
		}
	}
</style>