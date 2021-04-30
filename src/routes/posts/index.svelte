<script context="module">
	import client from '../../client.js';
	export async function load() {
		const data = await client.fetch("*[_type == 'post']");
		console.log('data:', data);
		return {
			props: {
				data: [...data]
			}
		};
		// const data = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
		// const poke = await data.json();
		// console.log('poke:', poke);
		// return {
		// 	props: {
		// 		poke
		// 	}
		// };
	}
</script>

<!--
<script>
	export let data;
</script> -->

<h1>Hello world</h1>

<!-- {#each posts as post}
	{post.title}
{/each} -->
