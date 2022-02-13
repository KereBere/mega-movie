<script> 
    import FavMovieCard  from "./FavMovieCard.svelte"
    export let favMovies
</script>

<div class="fav-movie-con">
<div class="profile">
    <img src="profile.png" alt="">
    <p>{favMovies[0][5]}'s Favorite Movies</p>
</div>
    
    {#each favMovies as movie}
        <FavMovieCard {movie} />
    {/each}
</div>

<style>
    .fav-movie-con{
        display: flex;
        flex-wrap: wrap;
        background-color: rgb(255, 231, 231);
        border-radius: 25px;
        margin-bottom: 25px;
    }
    .user{
        width: 50px;
    }
    .profile{
        display: flex;
        flex-direction: column;
        width: 150px;
        text-align: center;
    }
</style>