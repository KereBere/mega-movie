<script context="module">
	export async function load({ fetch }) {
		const res = await fetch(
			`https://api.themoviedb.org/3/movie/popular?api_key=${
				import.meta.env.VITE_API
			}&language=en-US&page=1`
		);
		const data = await res.json();
		if (res.ok) {
			return {
				props: {
					popular: data.results 
				}
			};
		} 
	}
	
</script>

<script>
	import.meta.env.VITE_API;
	import PopularMovies from '../../components/PopularMovies.svelte'; 
	export let popular;
	import { fly } from 'svelte/transition';
	// import { userData} from "../../stores"
	// import { session } from '$app/stores';
</script>
<div class="profile">
	 <img src="/profile.png" alt="">
	 <ul class="user">
		 <!-- <li>{$userData}</li> -->
		 <li>Username</li>
		 <li>Email</li>
	 </ul>
	 <a href="">Fav Movies</a>
	 <a href="">Fav Actors</a> 
</div>

<PopularMovies {popular}/>


<style>
	.profile{
		position: relative;
		width: 100%;
		height: 70px;
		background-color: red;
		display: flex;
		align-items: center;
		border-radius: 25px;
	}
	img{
		position: absolute;
		left: -40px;
		top: -15px;
	}
	.user {
		margin: 0 auto 0 70px;
	}
	a{
		margin-right: 15px;
		font-size: 15px;
		font-weight: 700;
	}

</style>