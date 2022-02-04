<script context="module">
	// export async function load({ fetch }) {
	// 	const res = await fetch(
	// 		`https://api.themoviedb.org/3/movie/popular?api_key=${
	// 			import.meta.env.VITE_API
	// 		}&language=en-US&page=1`
	// 	);
	// 	const data = await res.json();
	// 	console.log(data);
	// 	if (res.ok) {
	// 		return {
	// 			props: {
	// 				popular: data.results
	// 			}
	// 		};
	// 	}
	// }
</script>

<script>
	// import.meta.env.VITE_API;
	// import PopularMovies from '../components/PopularMovies.svelte';
	// import SearchMovies from '../components/SearchMovies.svelte';
	// export let popular;
	// import { fly } from 'svelte/transition';

	import SocialAuth from '../components/SocialAuth.svelte';
</script>

<SocialAuth />
