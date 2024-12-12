import candidates from '$lib/data/candidates.json';

export const load = ({ params }) => {
    let slug = params.slug;
    console.log('candidate slug', slug);
    return candidates;
};