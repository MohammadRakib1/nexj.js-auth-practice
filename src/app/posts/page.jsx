
import { Suspense } from 'react';

async function Posts() {
    const res = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
        {
            cache: 'no-store',
        }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch posts');
    }

    const posts = await res.json();

    return <h2>This post page: {posts.length}</h2>;
}

export default function PostsPage() {
    return (
        <div>
            <Suspense fallback={<p>Loading posts...</p>}>
                <Posts />
            </Suspense>
        </div>
    );
}
