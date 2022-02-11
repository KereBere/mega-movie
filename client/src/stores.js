import { browser } from '$app/env';
import { writable } from 'svelte/store';

const localAuth = browser && window.localStorage.getItem('isAuth', 0);
export const isAuth = writable(localAuth);
isAuth.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('isAuth', value);
	}
});

const localUser = browser && window.localStorage.getItem('userData');
export const userData = writable(localUser);
userData.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('userData', value);
	}
});

let localMovies = browser && window.localStorage.getItem('favMovies');
export let favMovies = writable(JSON.parse(localMovies));
favMovies.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('favMovies', JSON.stringify(value));
	}
});

// // get local storage
// let storage = localStorage.getItem("userInputs");

// // if storage exists, use it. otherwise set empty array
// export let userInputs = writable(JSON.parse(storage) || []);
// export let userExpenses = writable(storage.expenses || []);
// export let userOptions = writable(storage.options || []);

// // subscribe inputs to localStorage
// userInputs.subscribe((val) =>
//     localStorage.setItem("userInputs", JSON.stringify(val))
// );
