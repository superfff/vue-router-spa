<template>
	<div class="container-wrapper">
		<div class="head">
			<ul class="catalogue-wrapper">
				<router-link class="item" to="/">A</router-link>
				<router-link class="item" to="/b">B</router-link>
				<router-link class="item" to="/c">C</router-link>
			</ul>
		</div>
		<div class="contain">
			<router-view></router-view>
		</div>
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
	.container-wrapper{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;

		.head{
			flex: 0 0 100px;
			background-color: gray;

			.catalogue-wrapper{
				.item{
					display: inline-block;
					width: 50px;
					height: 100px;
					line-height: 100px;
					text-align: center;
					cursor: pointer;
				}
			}
		}
		.contain{
			flex: 1;
			background-color: pink;
		}
	}
</style>
