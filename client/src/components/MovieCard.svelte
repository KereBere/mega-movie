<script>
	import { page } from '$app/stores';
	export let pageName = $page.url.pathname
	import { favMovies, popular, userData, isAuth } from '../stores';
	export let movie;
	const newFavMovie = async (res) => {
		try {
			console.log('hehe');
			const submit = await fetch('https://localhost:3443/movie/newFavMovie', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					id: movie.id,
					title: movie.title,
					overview: movie.overview,
					poster_path: movie.poster_path,
					backdrop_path: movie.backdrop_path,
					release_date: movie.release_date
				})
			});
			console.log(movie);
			const data = await submit.json();
			console.log(data);
			$favMovies = data.favMovies.map((a) => a.id);
			$popular = data.favMovies;
		} catch (error) {}
	};
	const visibleToggle = async () => {
		console.log('hehe');
		try {
			const submit = await fetch('https://localhost:3443/movie/visibletoggle', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					movieuuid: movie.uuid,
					user: $userData.id
				})
			});
			console.log(movie);

			const data = await submit.json();
			$popular = data.favMovies;
		} catch (error) {
			console.log(error);
		}
	};
</script>

<div class="movie-card">
	{#if pageName == "/profile/profile"}
		{#if movie.isVisible}
			<i on:click={visibleToggle} class="is-visible fas fa-eye" />
		{:else}
			<i on:click={visibleToggle} class="is-hidden fa-solid fa-eye-slash fas" />
		{/if}
	{/if}
	<!-- svelte-ignore a11y-missing-attribute -->
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
	</div>
</div>

<style>
	.is-visible {
		position: absolute;
		cursor: pointer;
		z-index: 1;
		top: 25px;
		left: 20px;
		color: #fbd43f;
	}
	.is-hidden {
		position: absolute;
		cursor: pointer;
		z-index: 1;
		top: 25px;
		left: 20px;
		color: #3f3e3a;
	}
	h2 {
		text-align: center;
	}
	.heart {
		position: absolute;
		cursor: pointer;
		top: 25px;
		right: 25px;
		z-index: 1;
	}
	.fas:hover {
		color: red;
		transform: scale(1.05);
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
		max-width: 250px;
		flex-direction: column;
		justify-content: space-around;
		padding: 1rem;
	}
</style>
