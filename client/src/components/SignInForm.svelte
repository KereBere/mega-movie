<script>
	import { onMount } from 'svelte';
	import SocialAuth from './SocialAuth.svelte';
	import { goto } from '$app/navigation';
	import { userData, isAuth, favMovies, popular, allMovies } from '../stores';
	let email, password;
	let message;
	let error;
	onMount(async () => {
		if ($isAuth) {
			goto('/');
		}
	});
	const submitForm = async (res) => {
		message = '';
		error = '';
		try {
			const submit = await fetch('https://ultra-movie.herokuapp.com/user/login', {
				credentials: 'same-origin',
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					email,
					password
				})
			});
			const data = await submit.json();
			if (data.success) {
				console.log(data);
				$userData = data.user;
				message = data.message;
				$allMovies = data.allMovies;
				$userData = data.user;
				$isAuth = 1;
				$favMovies = data.favMovies.map((a) => +a.id);
				$popular = data.favMovies;
				setTimeout(() => {
					goto('/');
				}, 1000);
			} else {
				error = data.error;
				throw new Error('something went wrong. IDK neither');
			}
		} catch (err) {
			console.log(err);
		}
	};
</script>

<div id="animatedBackground">
	<div id="login-box">
		<div class="left">
			<h1>Sign In</h1>
			<form on:submit|preventDefault={submitForm}>
				<input type="text" name="email" placeholder="E-mail" bind:value={email} required />
				<input
					type="password"
					name="password"
					placeholder="Password"
					bind:value={password}
					required
				/>
				<input type="submit" value="Sign me in" />
			</form>
		</div>
		<div class="right" id="right">
			<div class="error-con">
				{#if error}
					<p class="error-p">
						{'! ' + error}
					</p>
				{/if}
				{#if message}
					<p class="success-p">
						{'! ' + message + 'Redirecting to homepage'}
					</p>
				{/if}
			</div>
			<SocialAuth />
			<a class="have-acc" href="/auth/signup"><p>Don't have an account? Sign up!</p></a>
			<a class="have-acc" href="/"><p>Or continue without login!</p></a>
		</div>
		<div class="or" id="or">OR</div>
	</div>
</div>

<style>
	.success-p {
		color: greenyellow;
	}
	.error-con {
		position: absolute;
		top: 50px;
		color: red;
		font-size: 12px;
	}
	.have-acc {
		text-decoration: none;
		color: white;
		font-size: 13px;
		margin: 8px;
	}
	#animatedBackground {
		display: flex;
		align-items: center;
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: url('/bg.jpg');
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
		.error-con {
			position: absolute;
			top: 310px;
			left: 90px;
			color: red;
			font-size: 11px;
		}
		#or {
			position: absolute;
			top: 300px;
			left: 40px;
			width: 40px;
			height: 40px;
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
		margin: 5% auto;
		min-width: 250px;
		padding-bottom: 15px;
		max-width: 600px;
		background: #fff;
		border-radius: 15px;
		background: rgba(27, 29, 27, 0.8); /* Green background with 30% opacity */
	}

	.left {
		color: white;
		box-sizing: border-box;
		padding: 10px 40px 0px;
		width: 300px;
	}

	h1 {
		margin: 70px 0 20px 0;
		font-weight: 300;
		font-size: 28px;
	}
	input {
		border-radius: 5px;
		padding: 10px;
		margin-bottom: 55px;
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
		top: 150px;
		left: 275px;
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
		padding-left: 25px;
		padding-top: 100px;
		padding-right: 15px;
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
