import './book.css';

type BookProps = {
  book: {
    title: string;
    pages: number;
    isRead: boolean;
    isFavorite: boolean;
  };
};

function Book({ book }: BookProps) {
  const favoriteClass = book.isFavorite ? 'favorite-book' : '';
  return (
    <li className={`book-item ${favoriteClass}`}>
      <span>
        {book.isRead ? '✅' : '⏳'}
      </span>
      {' '}
      <span>
        {`${book.title} (${book.pages} páginas)`}
      </span>
      {' '}
      
      {book.isFavorite && <span>🤩</span>}
    </li>
  );
}

export default Book;


// Trata-se de um 'curto circuito': {book.isFavorite && <span> 🥰</span>} e o primeiro elemento dele tem que ser um boolen para não renderizar uma tag vazia caso a condição não seja atendida.

// book inside of function 'Book' it's a props, it's was 'typed' before (BookProps) of the function.