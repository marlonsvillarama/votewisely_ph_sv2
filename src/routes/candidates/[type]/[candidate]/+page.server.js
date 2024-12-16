import candidates from '$lib/data/candidates.json';
import tags from '$lib/data/tags.json';

export const load = ({ params }) => {
    return {
        candidates,
        tags
    };
};