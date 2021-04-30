import sanityClient from '@sanity/client';

export default sanityClient({
	projectId: 'y29geouv',
	dataset: 'production',
	useCdn: false // `false` if you want to ensure fresh data
});
