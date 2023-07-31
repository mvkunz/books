import { useState } from 'react';
import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/Footer';
import Book from './components/Book';
import Button from './components/Button/Button';

import './App.css'

import { Booktype } from './type';

function App() {

  const [bookTitle, setBookTitle] = useState('');
  const [bookPages, setBookPages] = useState(0);
  const [books, setBooks] = useState<Booktype[]>([]);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBookTitle(event.target.value);
  }

  function handlePagesChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBookPages(event.target.valueAsNumber)
  }

  function updateState() {
    const newBook = {
      title: bookTitle,
      pages: bookPages,
      isRead: false,
      isFavorite: false,
    };
    setBooks([...books, newBook]);
  }

  function resetForm() {
    setBookTitle('');
    setBookPages(0);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    updateState();
    resetForm();
  }
// handleSubmit-> Quando fizer o submit do form (botão adicionar), vai chamar a preventDefault para evitar o comportamento padrão do form (que é recarregar a página) e depois vai chamar a função updateState que vai atualizar o estado. Logo após chamar a updateState, chamará a função resetForm para APAGAR o que havia sido digitado no input.

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
          <form
            className="books-form"
            onSubmit={ handleSubmit }
          >
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
            <Button>
              Adicionar
            </Button>
          </form>

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

// Quando um button está dentro do form, automaticamente vira um tipo submit. É a mesma coisa que colcoar type=submit.

// O preventDefault impede que o comportamento padrão do evento seja realizado. No caso do form, ele impedirá que o form recarregue a página.