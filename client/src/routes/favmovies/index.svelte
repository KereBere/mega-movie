 
<script>
import FavMovieCard from "../../components/FavMovieCard.svelte";
import {onMount} from "svelte"

onMount(async()=> {
	 
		const data = await fetch("https://localhost:3443/movie/getFavMovies",{
			method: "cors",
		});
		 
			console.log(data)
			return {
				props: {
					popular: data.results
				}
		 
		} 
})
</script>

<FavMovieCard  />