export default {
	name: 'post',
	type: 'document',
	title: 'Post',
	fields: [
		{
			name: 'title',
			title: 'Title',
			type: 'string'
		},
		{
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title'
			}
		},
		{
			name: 'featured_image',
			type: 'image'
		},
		{
			name: 'body',
			type: 'richtext'
		},
		{
			name: 'author',
			type: 'reference',
			to: [{ type: 'author' }]
		}
	]
};
