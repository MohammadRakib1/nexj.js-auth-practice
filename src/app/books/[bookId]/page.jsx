import { Suspense } from 'react';

async function BookDetails({ params }) {
    const { bookId } = await params;

    const res = await fetch(`http://localhost:5000/books/${bookId}`);
    const {title, author, price} = await res.json();

    return (
        <div>
            <h2>Book Details Page</h2>
            <p>Book ID: {bookId}</p>
            <p>Title: {title}</p>
            <p>Author: {author}</p>
            <p>Price: ${price.toFixed(2)}</p>
        </div>
    );
}

export default function BookDetailsPage({ params }) {
    return (
        <Suspense fallback={<p>Loading book details...</p>}>
            <BookDetails params={params} />
        </Suspense>
    );
}