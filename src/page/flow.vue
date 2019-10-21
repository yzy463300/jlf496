<template>
  <div id="flow" class="scroll">
  	<img src="../assets/r_01.jpg" class="i1">
  	<img src="../assets/r_02.jpg" class="i1">
  	<img src="../assets/r_03.jpg" class="i1">
  	<img src="../assets/r_04.jpg" class="i1">
  	<p class="return tc"><img @click='onReturn' src="../assets/btn4.png"></p>
  </div>
</template>

<script>
export default {
	data(){
		return{

		}
	},
	methods:{
		onReturn(){
			this.$router.replace('center')
		}
	}
}
</script>

<style  lang='less' scoped>
	#flow{
		position: relative;
	}
	.return{
		position: absolute;
		left: 0;
		bottom: .8rem;
		width: 100%;
		img{
			width: 4.27rem;
		}
	}
	.i1{
		width: 7.5rem;
	}
</style>
