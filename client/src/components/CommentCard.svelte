<script>
    export let userComment
</script>

<div class="comment">
    <div class="user">
        <img src="/profile.png" alt="">
        <p>{userComment.commentor}</p>
    </div>
    <p class="comment-text">
        {userComment.comment}
    </p>
</div>

<style>
    .comment{
        display: flex;
    margin-bottom: 10px;
        background-color: rgb(242, 249, 255);
        border-radius: 15px;
    }
    .comment-text{
        padding : 25px 0 0 15px;
    }
    img{
        margin-left: 15px;
        width: 75px;
    }.user{
        text-align: center;
    }
</style>