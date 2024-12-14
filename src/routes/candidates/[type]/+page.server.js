import candidates from '$lib/data/candidates.json';
import tags from '$lib/data/tags.json';

export const load = (params) => {
    let slug = params.slug;
    console.log('type slug', slug);
    return {
        candidates,
        tags
    };
};