import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/Footer';
import Book from './components/Book';
import Button from './components/Button/Button';

import { booksList } from './data';
import './App.css'
import { useState } from 'react';

function App() {

  const [bookTitle, setBookTitle] = useState('');
  const [bookPages, setBookPages] = useState(0);
  const [books, setBooks] = useState(booksList);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBookTitle(event.target.value);
  }

  function handlePagesChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBookPages(event.target.valueAsNumber)
  }

  function handleAddClick() {
    const newBook = {
      title: bookTitle,
      pages: bookPages,
      isRead: false,
      isFavorite: false,
    };
    setBooks([...books, newBook]);
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Title
          text={ 'Seus livros:' }
        />
        <ul className="books-list">
          {books.map((book) => (
            <Book
              key= { book.title }
              book={ book }
            />
          ))}
        <div className="books-form">
          <input
            type="text"
            placeholder='Título'
            value={ bookTitle }
            onChange={ handleNameChange }
          />
          <input
            type="number"
            placeholder='Quantidade de páginas'
            value={bookPages}
            onChange={ handlePagesChange }
          />
          <Button
            onClick={ handleAddClick }
          >
            Adicionar
          </Button>
        </div>
        </ul>
      </div>
       <Footer />
    </div>
  )
}

export default App

// Se fosse usar a prop CHILDREN:

// <Title>
// <s>Livros emprestados:</s>
//  Meus livros:
// </Title>
// Não precisa escrever 'children' aqui para vincular com o title, ele vincula automaticamente.

// NO MAP: foi alterado o objeto para o estado inicial.