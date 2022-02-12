<script  context="module">
	import.meta.env.VITE_API;
	import PopularMovies from '../../components/PopularMovies.svelte';
	import { popular, userData } from '../../stores'; 
	import { fly } from 'svelte/transition';
	// import { userData} from "../../stores"
	// import { session } from '$app/stores';
	export const title = "Favorite Movies"
</script>
<script>
	import { onMount } from 'svelte';
	import {isAuth} from "../../stores"
	import {goto} from "$app/navigation"

	onMount(()=> {
		if(!$isAuth){
			goto("/auth/signin")
		}
	})
	</script>


<div class="profile">
	<img src="/profile.png" alt="" />
	<ul class="user">
		<li>{$userData.name}</li>
		<li>{$userData.username}</li>
		<li>{$userData.email}</li>
	</ul>
	<a href="">Fav Movies</a>
	<a href="">Fav Actors</a>
</div>

<PopularMovies popular={$popular} {title}  />

<style>
	.profile {
		position: relative;
		width: 100%;
		height: 70px;
		background-color: red;
		display: flex;
		align-items: center;
		border-radius: 25px;
	}
	img {
		position: absolute;
		left: -40px;
		top: -15px;
	}
	.user {
		margin: 0 auto 0 70px;
	}
	a {
		margin-right: 15px;
		font-size: 15px;
		font-weight: 700;
	}
</style>
