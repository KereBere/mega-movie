<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=efaf0b9bf33d3ed3967457d165031a0b&language=en-US`
		);
		const movieDetail = await res.json();
		if (res.ok) {
			return {
				props: {
					movieDetail
				}
			};
		}else {
			return "HEHE"
		}
	}
</script>

<script>
	import {fly} from "svelte/transition"
	export let movieDetail;
</script>

<div class="movie-details" in:fly={{y:50 , duration: 500, delay:500}} out:fly={{  duration: 500}}>
	<div class="img-container">
		<img
			src={'https://image.tmdb.org/t/p/w500' + movieDetail.backdrop_path}
			alt={movieDetail.title}
			srcset=""
		/>
	</div>
	<div class="txt-container">
		<h1>{movieDetail.title}</h1>
		<p class="overview">
			{movieDetail.overview}
		</p>
		<p>
			<span>Release Date</span>
			{movieDetail.release_date} <br />
			<span
				>Budget:<span />${movieDetail.budget} <br />
				<span>Rating: </span>
				{movieDetail.vote_avarage}<br />
				<span>Runtime: </span>
				{movieDetail.runtime}mins
		</p>
	</div>
</div>
	
<style>
	img{
		width: 100%;
		border-radius: 25px;
	}
</style>