<script>
	import {isAuth, userData, favMovies, popular} from "../stores"
	import {goto} from "$app/navigation"
	import { GoogleAuth, FacebookAuth } from '@beyonk/svelte-social-auth';
	export function signOut() {
		let auth2 = gapi.auth2.getAuthInstance();
		auth2.signOut().then(function () {
			console.log('User signed out.');
		});
	}
	

</script>

<div class="social-con">
	<GoogleAuth
		clientId="1076165607566-n80j275v4u2nat71sndbltght69lr2v1.apps.googleusercontent.com"
		on:auth-success={ async(e) => {
			const id_token = e.detail.user.wc.id_token;
			try {
			console.log('giriş init');
			const submit = await fetch('https://localhost:3443/user/google', {
				credentials: 'same-origin',
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					token : id_token
				})
			});
			console.log(submit);
			const data = await submit.json();
			if (data.success) {
				console.log(data)
				$userData =data.user;
				console.log($userData)
				$userData = data.user;
				$isAuth = 1;
				$favMovies = data.favMovies.map((a) => +a.id);
				$popular = data.favMovies;
				goto('/');
			} else {
				throw new Error('something went wrong. IDK neither');
			}
		} catch (err) {
			console.log(err);
		}
		}}
	/>
	<FacebookAuth
		class="facebook"
		appId="2945418792437629"
		on:auth-success={(e) => console.dir(e.detail)}
	/>
</div>

<style>
	.social-con {
		margin-top: 10px;
		justify-content: space-around;
		display: flex;
		flex-direction: column;
		height: 120px; 
		width: 100%;
	}
</style>
