<template>
	<div class="c">
		<p>THIS IS C</p>
		<p>image</p>
		<img src="~assets/111111.gif" alt="">
		<p>background-image</p>
		<div class="pic"></div>
	</div>
</template>

<script>
export default {
	data(){
		return {

		}
	},
	created(){

	},
	methods: {

	}
}
</script>

<style lang="less" scoped>
	.c{
		background-color: blue;
		color: #fff;
	}
	.pic{
		width: 352px;
		height: 240px;
		background-image: url('~assets/111111.gif');
		background-size: 100%;
	}
</style>
