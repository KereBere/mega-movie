<script>
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
		clientId="1082370461576-ufpkai7fq1n2mdkrjbej29m3u24nv1m2.apps.googleusercontent.com"
		on:auth-success={(e) => {
			const id_token = e.detail.user.wc.id_token;
			let xhr = new XMLHttpRequest();
			xhr.open('POST', 'https://localhost:3443/user/google');
			xhr.setRequestHeader('Content-Type', 'application/json');
			console.log(xhr.responseText);
			xhr.onload = function () {
				if (xhr.responseText == 'success') {
					signOut();
					location.assign('/movie');
				}
			};
			xhr.send(JSON.stringify({ token: id_token }));
			console.log(id_token);
		}}
	/>
	<FacebookAuth
		class="facebook"
		appId="2945418792437629"
		on:auth-success={(e) => console.dir(e)}
	/>
</div>

<style>
	.social-con {
		justify-content: space-between;
		display: flex;
		flex-direction: column;
		height: 120px; 
		width: 100%;
	}
</style>
