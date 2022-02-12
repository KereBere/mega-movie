<!-- <script>
	export let movie;
</script>

<div class="fav-movie-card">
	<a sveltekit:prefetch sveltekit:noscroll href={'/movie/' + movie.id}>
		<img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} /></a
	>
	<div class="description">
		<h2>{movie.title}</h2>
	</div>
</div>

<style>
	.fav-movie-card {
		position: relative;
		display: flex;
		max-width: 100;
		flex-direction: column;
		justify-content: space-around;
		padding: 1rem;
	}
	img {
		width: 100%;
		object-fit: cover;
		border-radius: 1rem;
		margin-bottom: 1rem;
	}
	h2 {
		font-size: 0.9rem;
	}
	.description {
		height: 5vh;
	}
	p {
		font-size: 0.7rem;
	}
</style> -->
