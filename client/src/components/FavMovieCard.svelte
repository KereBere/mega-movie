<script>
import {commentMovieId} from "../stores"
export let movie;
	const selectMovieUuid = ()=> {
		$commentMovieId = movie[4]
		
	}
</script>

<div class="fav-movie-card">
	<a on:click={selectMovieUuid} sveltekit:prefetch sveltekit:noscroll href={'/movie/' + movie[1]}>
		<img src={'https://image.tmdb.org/t/p/w500' + movie[2]} alt={movie[0]} /></a
	>
	<div class="description">
	</div>
</div>

<style>
	.fav-movie-card {
		margin: 15px;
		word-wrap: break-word;
	}
	.fav-movie-card:hover{
		transform: scale(1.05);
	}
	img{
	 width: 125px;
	 border-radius: 15px;
	}
</style>
