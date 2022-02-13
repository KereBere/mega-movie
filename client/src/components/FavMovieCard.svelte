<script>
	import { commentMovieId, commentsByMovie } from '../stores';
	export let movie;
	const selectMovieUuid = async () => {
		try {
			console.log("hehe")
			$commentMovieId = movie[4];
			const submit = await fetch('https://localhost:3443/comment/getallcommentsbymovie', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					movieId: ($commentMovieId = movie[4])
				})
			});
			const data = await submit.json();
			if (data.success) {
				$commentsByMovie = data.commentsByMovie;
			} else {
				throw new Error('something went wrong. IDK neither');
			}
		} catch (error) {
			console.log(error);
		}
	};
</script>

<div class="fav-movie-card">
	<a on:click={selectMovieUuid} sveltekit:prefetch sveltekit:noscroll href={'/movie/' + movie[1]}>
		<img src={'https://image.tmdb.org/t/p/w500' + movie[2]} alt={movie[0]} /></a
	>
	<div class="description" />
</div>

<style>
	.fav-movie-card {
		margin: 15px;
		word-wrap: break-word;
	}
	.fav-movie-card:hover {
		transform: scale(1.05);
	}
	img {
		width: 125px;
		border-radius: 15px;
	}
</style>
