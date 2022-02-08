<script>
	import { onMount } from 'svelte';
	onMount(() => {
		window.fbAsyncInit = function () {
			FB.init({
				appId: '2945418792437629',
				autoLogAppEvents: true,
				xfbml: true,
				version: 'v12.0'
			});
		};
	});
</script>
