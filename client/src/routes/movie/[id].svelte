<script context="module">
	export async function load({ fetch, params }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/${params.id}?api_key=${
				import.meta.env.VITE_API
			}&language=en-US`
		);
		const movieDetail = await res.json();
		if (res.ok) {
			return {
				props: {
					movieDetail
				}
			};
		} else {
			return 'HEHE';
		}
	}
</script>

<script>
	import { userData , commentMovieId, commentsByMovie } from '../../stores';
	import CommentCard from '../../components/CommentCard.svelte';
	import { fly } from 'svelte/transition';
	export let movieDetail;
	export let userComment = {name: "ali", comment: "dawhıhdwadhnwıoşad"}
	let comment;
	const newComment = async (res) => {
		try {
			const submit = await fetch('https://localhost:3443/comment/newcomment', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					comment,
					commentor: $userData.name,
					movieId: $commentMovieId
				})
			});
			const data = await submit.json();
			if (data.success) {
				$commentsByMovie = data.commentsByMovie;
			} else {
				throw new Error('something went wrong. IDK neither');
			}
		} catch (err) {
			//  fas fa-heart
		}
	};
</script>

<div
	class="movie-details"
	in:fly={{ y: 50, duration: 500, delay: 500 }}
	out:fly={{ duration: 500 }}
>
	<div class="img-container">
		<img
			src={'https://image.tmdb.org/t/p/original' + movieDetail.poster_path}
			alt={movieDetail.title}
		/>
	</div>
	<div class="txt-container">
		<h2>{movieDetail.title}</h2>
		<p class="overview">
			{movieDetail.overview}
		</p>
		<p>
			<span>Release Date :</span>
			{movieDetail.release_date} <br />
			<span>Budget :</span> ${' ' + movieDetail.budget} <br />
			<span>Runtime :</span>{movieDetail.runtime}mins
		</p>
		
	</div>
</div>

<form class="comment-form" action="" method="post">
	<textarea name="comment" id="" cols="30" rows="10" bind:value={comment} required />
	<button type="submit" on:click|preventDefault={newComment}>Send</button>
</form>
{#each $commentsByMovie as comment }
	<CommentCard userComment={comment} />
{/each}
<style>
	h2 {
		text-align: center;
	}
	.comment-form {
		display: flex;
		height: 125px;
		flex-direction: column;
		margin: 20px 0;
		font-size: 14px;
		font-weight: 400px;
	}
	textarea {
		padding: 10px;
	}
	button {
		margin: 10px 0 0 auto;
		width: 25%;
		background-color: #fcca04;
		border-radius: 10px;
		font-size: 18px;
	}
	button:hover {
		background-color: #b4a057;
	}
	p {
		margin-top: 13px;
		padding: 10px 10px;
	}
	span {
		font-weight: bold;
	}
	.movie-details {
		margin: auto;
		display: flex;
		width: 100%;
	}
	.txt-container {
		align-items: center;
		margin: 0 0 0 25px;
		text-align: justify;
	}
	img {
		width: 100%;
		border-radius: 10px;
		min-width: 300px;
		max-width: 310px;
	}
</style>
