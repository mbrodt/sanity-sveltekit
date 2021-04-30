export default {
	name: 'richtext',
	type: 'object',
	title: 'Rich Text',
	fields: [
		{
			name: 'content',
			type: 'array',
			of: [
				{
					type: 'block'
				},
				{
					type: 'code'
				}
			]
		}
	]
};
