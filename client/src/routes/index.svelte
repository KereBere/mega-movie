<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=efaf0b9bf33d3ed3967457d165031a0b&language=en-US&page=1`
		);
		const data = await res.json();
		if (res.ok) {
			return {
				props: {
					popular: data.results
				}
			};
		}
	}
</script>

<script> 
	import PopularMovies from '../components/PopularMovies.svelte';
	import SearchMovies from '../components/SearchMovies.svelte';
	export let popular;
	export let title = 'Popular Movies';
	import { fly } from 'svelte/transition';
</script>

<!-- {JSON.stringify($session)} -->
<SearchMovies />
<PopularMovies {popular} {title} />
