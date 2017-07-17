<template>
	<div class="a">
		<p>THIS IS A</p>
		<button @click="aaaa">公用方法</button>
		<button @click="bbbb">axios</button>
		<button @click="cccc">router to b</button>
	</div>
</template>

<script>

//引入公用方法
import common from 'assets/js/common'

export default {
	data(){
		return {

		}
	},
	created(){

	},
	methods: {
		aaaa(){
			console.log(1);
			common.a();
		},
		bbbb(){
			this.$axios.get('http://www.baidu.com')
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				console.log(error);
			})
		},
		cccc(){
			this.$router.push({ path: '/b', query: { userId: 123 }})
		}
	}
}
</script>

<style lang="less" scoped>
	.a{
		background-color: red;
		color: #fff;
	}
</style>
