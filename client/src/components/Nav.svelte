<nav>
    <a class="logo" href="/"><img src="/logom.png" alt="">Popcorn Movie</a>
    <a href="/profile/profile">Profile</a>
    <a href="/auth/signin">Sign in</a>
    <a href="/auth/signup">Sign up</a>
    <a href="">Logout</a>
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