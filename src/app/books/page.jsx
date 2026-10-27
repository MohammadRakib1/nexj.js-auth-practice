import { Suspense } from 'react';
import BookCard from '@/components/BookCard';

async function Books() {
    const res = await fetch(
        'http://localhost:5000/books',
        {
            cache: 'no-store',
        }
    );

    if (!res.ok) {
        throw new Error('Failed to fetch books');
    }

    const books = await res.json();

    return (
        <div>
            <h2>Books: {books.length}</h2>

            <div className="grid grid-cols-3 gap-4">
                {books.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
}

export default function BooksPage() {
    return (
        <div>
            <Suspense fallback={<p>Loading books...</p>}>
                <Books />
            </Suspense>
        </div>
    );
}