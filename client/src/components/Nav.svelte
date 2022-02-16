<script>
	import { goto } from '$app/navigation';
	import { isAuth, favMovies, userData, popular, allMovies } from '../stores';
	export const logout = async () => {
		$isAuth = '';
		$favMovies = '';
		$userData = '';
		$popular = '';
		$allMovies = '';
		const submit = fetch('https://ultra-movie.herokuapp.com/user/logout');
		const data = await submit.json();
	};
</script>

<nav>
	<a class="logo" href="/"><img src="/logom.png" alt="" />Popcorn Movie</a>
	{#if $isAuth}
		<a href="/favmovies/">Users' Favs</a>
	{/if}

	{#if $isAuth}
		<a href="/profile/profile">Profile</a>
	{/if}
	{#if !$isAuth}
		<a href="/auth/signin">Sign in</a>
	{/if}
	{#if !$isAuth}
		<a href="/auth/signup">Sign up</a>
	{/if}
	{#if $isAuth}
		<a on:click={logout}>Logout</a>
	{/if}
	<a>Dashboard</a>
</nav>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Festive&display=swap');
	nav {
		display: flex;
		min-height: 10vh;
		align-items: center;
		justify-content: center;
		padding: 25px 0;
	}
	a {
		font-weight: 700;
		cursor: pointer;
		margin-right: 15px;
		font-size: 18px;
	}
	.logo {
		position: relative;
		font-weight: bold;
		font-family: 'Poppins';
		color: black;
		text-decoration: none;
		font-family: 'Festive', cursive;
		font-size: 50px;
		margin-right: auto;
	}
	img {
		position: absolute;
		top: -10px;
		left: -55px;
		width: 75px;
	}
</style>
