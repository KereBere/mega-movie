 
<script>
import { each } from 'svelte/internal';
import FavMoviesByUser from "../../components/FavMoviesByUser.svelte";
import {allMovies} from "../../stores"
	 
</script>
    {#each $allMovies as movie }
        <FavMoviesByUser favMovies={movie} />
     {/each}

