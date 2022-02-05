<script>
	import SocialAuth from './SocialAuth.svelte';
</script>

<div id="animatedBackground">
	<div id="login-box">
		<div class="left">
			<h1>Sign up</h1>
			<input type="text" name="name" placeholder="Name" />
			<input type="text" name="username" placeholder="Username" />
			<input type="text" name="email" placeholder="E-mail" />
			<input type="password" name="password" placeholder="Password" />
			<input type="password" name="password2" placeholder="Retype password" />
			<input type="submit" name="signup_submit" value="Sign me up" />
		</div>

		<div class="right" id="right">
			<SocialAuth />
		</div>
		<div class="or" id="or">OR</div>
	</div>
</div>

<style>
	#animatedBackground {
        display: flex;
        align-items: center;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: url('http://twibbon.s3.amazonaws.com/238/63bb30c8-2649-465e-9df1-ab2f8e5f7ecc.jpg');
		background-repeat: repeat;
		background-position: 0 0;
		background-size: auto 100%;
		/*adjust s value for speed*/
		animation: animatedBackground 500s linear infinite;
	}

	@keyframes animatedBackground {
		from {
			background-position: 0 0;
		}
		/*use negative width if you want it to flow right to left else and positive for left to right*/
		to {
			background-position: -10000px 0;
		}
	}
	@media (max-width: 600px) {
		#or {
			position: absolute;
			top: 418px;
			left: 65px;
			width: 40px;
			height: 40px;
			background: #ddd;
			border-radius: 50%;
			box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
			line-height: 40px;
			text-align: center;
		}
		#login-box {
            background-color: rgba(0, 0, 0, 0.4);
			display: flex;
			flex-direction: column;
			position: relative;
			margin: 5% auto;
			min-width: 250px;
			max-width: 600px;
			background: #fff;
			border-radius: 2px;
		}

		#right {
			box-sizing: border-box;
			padding: 40px;
			width: 300px;
			background: url('https://goo.gl/lPCXrQ');
			background-size: cover;
			background-position: center;
			border-radius: 0 2px 2px 0;
		}
	}

	#login-box {
		display: flex;
		position: relative;
        padding: 25px;
		margin: 5% auto;
		min-width: 250px;
		max-width: 600px;
		background: #fff;
		border-radius: 15px;
        background: rgba(27, 29, 27, 0.8) /* Green background with 30% opacity */

	}

	.left {
        color: white;
		box-sizing: border-box;
		padding: 40px;
		width: 300px;
		height: 400px;
	}

	h1 {
		margin: 0 0 20px 0;
		font-weight: 300;
		font-size: 28px;
	}
    input{
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 25px;
    }

	input[type='text'],
	input[type='password'] {
		display: block;
		box-sizing: border-box;
		margin-bottom: 20px;
		width: 220px;
		height: 32px;
		border: none;
		border-bottom: 1px solid #aaa;
		font-family: 'Roboto', sans-serif;
		font-weight: 400;
		font-size: 15px;
		transition: 0.2s ease;
	}

	input[type='text']:focus,
	input[type='password']:focus {
		border-bottom: 2px solid #16a085;
		color: #16a085;
		transition: 0.2s ease;
	}

	input[type='submit'] {
		width: 120px;
		height: 32px;
		background: rgba(27, 29, 27, 0.8);
		border: none;
		border-radius: 2px;
		color: #fff;
		font-family: 'Roboto', sans-serif;
		font-weight: 500;
		text-transform: uppercase;
		transition: 0.1s ease;
		cursor: pointer;
	}

	input[type='submit']:hover,
	input[type='submit']:focus {
		opacity: 0.8;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
		transition: 0.1s ease;
	}

	input[type='submit']:active {
		opacity: 1;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
		transition: 0.1s ease;
	}

	.or {
		position: absolute;
		top: 210px;
		left: 305px;
		width: 40px;
		height: 40px;
		background: rgba(27, 29, 27, 0.8);
		border-radius: 50%;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
		line-height: 40px;
		text-align: center;
        color: white;
	}
 

	.right {
		box-sizing: border-box;
		padding: 40px;
		padding-top: 140px;
		width: 300px;
		background: url('https://goo.gl/lPCXrQ');
		background-size: cover;
		background-position: center;
		border-radius: 0 2px 2px 0;
	}

	.right .loginwith {
		display: block;
		margin-bottom: 40px;
		font-size: 28px;
		color: #fff;
		text-align: center;
	}

	button.social-signin {
		margin-bottom: 20px;
		width: 220px;
		height: 36px;
		border: none;
		border-radius: 2px;
		color: #fff;
		font-family: 'Roboto', sans-serif;
		font-weight: 500;
		transition: 0.2s ease;
		cursor: pointer;
	}

	button.social-signin:hover,
	button.social-signin:focus {
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
		transition: 0.2s ease;
	}

	button.social-signin:active {
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
		transition: 0.2s ease;
	}

	button.social-signin.facebook {
		background: #32508e;
	}

	button.social-signin.twitter {
		background: #55acee;
	}

	button.social-signin.google {
		background: #dd4b39;
	}
</style>
