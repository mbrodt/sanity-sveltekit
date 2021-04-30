export default {
	name: 'author',
	type: 'document',
	fields: [
		{
			name: 'name',
			type: 'string'
		},
		{
			name: 'avatar',
			type: 'image',
			options: {
				hotspot: true
			}
		}
	]
};
