import BookSpine from "./BookSpine";

export default function Bookshelf({ books }) {
  return (
    <section className="bookshelf" aria-label="bookshelf">
      <div className="bookshelf__scene">
        <div className="bookshelf__books-scroll">
          <div className="bookshelf__books">
            {books.map((book) => (
              <BookSpine key={book.id} book={book} />
            ))}
          </div>
        </div>
        <div className="bookshelf__plank" />
      </div>
    </section>
  );
}
