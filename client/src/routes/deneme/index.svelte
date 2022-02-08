<script>

		export async function logWith({ fetch }) {
		const res = await fetch(
			
			`https://localhost:3443/post`,
		);
		const data = await res.json();
		console.log(data);
		if (res.ok) {
			return {
				props: {
					popular: data.results
				}
			};
		}
	}
	// function loginWithFacebook() {
	// 	fetch('https://localhost:3443/user/facebook-login', {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json'
	// 		},
	// 		body: JSON.stringify({ "accessToken," : "userID" })
	// 	}).then((res) => {
	// 		console.log(res);
	// 	});
	// }
</script>

<button on:click|preventDefault={logWith}> Click me </button>
