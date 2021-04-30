<script context="module">
	import blocksToHtml from '@sanity/block-content-to-html';

	import groq from 'groq';
	import client from '../../client.js';

	const query = groq`
    *[_type == 'post' && slug.current == $slug][0] {
      ...,
      featured_image {
        asset->
      }
    }
  `;

	const h = blocksToHtml.h;

	const serializers = {
		types: {
			code: (props) => h('pre', { className: props.node.language }, h('code', props.node.code))
		}
	};

	export async function load({ page }) {
		const post = await client.fetch(query, {
			slug: page.params.slug
		});
		console.log('post:', post);

		const testHtml = blocksToHtml({
			blocks: post.body.content,
			serializers: serializers
		});
		post.html = testHtml;
		console.log('testHtml:', testHtml);

		return {
			props: {
				post
			}
		};
	}
</script>

<script>
	export let post;
</script>

<div class="max-w-6xl mx-auto py-16">
	<h1 class="text-5xl font-bold mb-4">{post.title}</h1>
	<div class="prose prose-lg">
		{@html post.html}
	</div>
</div>
