<script>
	import {goto} from "$app/navigation"
	import MovieCard from './MovieCard.svelte';
	export let popular;
	export let title 
	</script>
	
	<a><h3>{title}</h3></a>
<div class="popular-movies">
	{#each popular as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	h3 {
		padding: 0 1rem;
	}
	.popular-movies {
		display: flex; 
		width: 100%;
		justify-content: center;
		flex-wrap: wrap;
	}
</style>
