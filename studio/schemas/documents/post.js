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
			name: 'featured_image',
			type: 'image'
		},
		{
			name: 'author',
			type: 'reference',
			to: [{ type: 'author' }]
		}
	]
};
