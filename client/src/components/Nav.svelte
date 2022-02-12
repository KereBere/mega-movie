<script>
import { goto } from '$app/navigation';

    import{isAuth, favMovies, userData, popular} from "../stores"
    export const logout =()=> {
        console.log("zuzu")
        $isAuth = "";
        $favMovies ="";
        $userData="";
        $popular=""
    }
</script>
<nav>
    <a class="logo" href="/"><img src="/logom.png" alt="">Popcorn Movie</a>
    {#if $isAuth}
    <a href="/profile/profile">Profile</a>
    {/if}
    <a href="/auth/signin">Sign in</a>
    <a href="/auth/signup">Sign up</a>
    {#if $isAuth}
    <a on:click={logout}>Logout</a>
    {/if}
</nav>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Festive&display=swap');
    nav{
        display: flex;
        min-height: 10vh;
        align-items: center;
        justify-content: center;
        padding: 25px 0;
    }
    a{
        font-weight: 700;
        cursor: pointer;
        margin-right: 15px;
        font-size: 18px;
    }
    .logo{
        position: relative;
        font-weight: bold;
        font-family: "Poppins";
        color: black;
        text-decoration: none;
        font-family: 'Festive', cursive;
        font-size: 50px;
        margin-right: auto;
    }
    img{
        position: absolute;
        top: -10px;
        left: -55px;
        width: 75px;
    }
</style>