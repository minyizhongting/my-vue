<template>
		<div class="pic">
			<img :src="nourl" alt="">
		</div>
</template>
<script>

	import noUrl from '@/static/404.jpg';
	import bgUrl from '@/static/bg.jpg';
	
	export default {
		name: 'NotFound',
		data: function() {
			return {
				nourl: noUrl
			}
		},
		mounted() {
			document.getElementsByTagName('body')[0].style.backgroundImage = 'url(' + bgUrl + ')';
		},
		destroyed() {
			document.getElementsByTagName('body')[0].style.backgroundImage = '';
		}
	}

</script>
<style scoped>
	.pic{width:80%;max-width:800px;position:absolute;top:10%;left:50%;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);}
	.pic img{width:100%;}
</style>