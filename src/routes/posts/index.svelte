<script context="module">
	import groq from 'groq';
	import client from '../../client.js';

	const query = groq`
    *[_type == 'post'] {
      ...,
      featured_image {
        asset->
      }
    }
  `;
	export async function load() {
		const posts = await client.fetch(query);
		console.log('posts:', posts);
		return {
			props: {
				posts
			}
		};
	}
</script>

<script>
	export let posts;
	console.log('posts:', posts);
</script>

<div class="max-w-6xl mx-auto py-16">
	<h1 class="text-5xl font-bold mb-4">Hello world</h1>
	<div class="grid grid-cols-2 gap-8">
		{#each posts as post}
			<a
				class="block bg-gray-800 text-white rounded-lg p-8 shadow-lg filter blur-sm hover:blur-0 transition-all duration-300 ease-in-out transform hover:-translate-y-2"
				href="/posts/{post.slug.current}"
			>
				<h2 class="text-center text-3xl mb-4">{post.title}</h2>
				<img
					class="rounded-lg h-64 w-full object-cover"
					src={post.featured_image.asset.url}
					alt="test"
				/>
			</a>
		{/each}
	</div>
</div>
