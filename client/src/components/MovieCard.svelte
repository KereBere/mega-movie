<script>
	import { favMovies } from '../stores';

	export let movie;
	const newFavMovie = async (res) => {
		try {
			console.log('hehe');
			const submit = await fetch('https://localhost:3443/movie/newFavMovie', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					movieId: movie.id,
					originalTile: movie.original_title,
					overview: movie.overview,
					posterPath: movie.poster_path,
					backdropPath: movie.backdrop_path
				})
			});
			if ($favMovies.includes(movie.id)) {
				$favMovies = $favMovies.filter((id) => id != movie.id);
			} else {
				let arr = [...$favMovies, movie.id];
				favMovies.set(arr);
			}

			const data = await submit.json();
			message = data;
			console.log('data' + data);
		} catch (err) {
			//  fas fa-heart
		}
	};
</script>

<div class="movie-card">
	<a class="heart" on:click={newFavMovie}
		><i
			class={JSON.stringify($favMovies).includes(movie.id)
				? 'fas fa-heart fav'
				: 'fas fa-heart no-fav'}
		/>
	</a>
	<a sveltekit:prefetch sveltekit:noscroll href={'/movie/' + movie.id}>
		<img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} alt={movie.title} /></a
	>
	<div class="description">
		<h2>{movie.title}</h2>
		<p>{movie.release_date}</p>
	</div>
</div>

<style>
	.heart {
		position: absolute;
		cursor: pointer;
		top: 25px;
		right: 25px;
		z-index: 1;
	}
	.fas:hover {
		color: red;
		transform: scale(1.1);
	}
	.fas {
		font-size: 30px;
	}
	.fav {
		font-size: 30px;
		color: red;
	}
	.no-fav {
		font-size: 30px;
		color: gray;
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
	.movie-card {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 1rem;
	}
</style>
