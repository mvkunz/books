type BookProps = {
  book: {
    title: string,
    pages: number,
    isRead: boolean,
    isFavorite: boolean
  }
};

function Book({ book }: BookProps) {
  return (
    <li>
      <span>
        {book.isRead ? '✅' : '⏳'}
      </span>
      {' '}
      <span>
        {`${book.title} (${book.pages} páginas)`}
      </span>
      {' '}
      {book.isFavorite && <span>🥰</span>}
    </li>
  )
}

export default Book;


// Trata-se de um 'curto circuito': {book.isFavorite && <span> 🥰</span>} e o primeiro elemento dele tem que ser um boolen para não renderizar uma tag vazia caso a condição não seja atendida.
