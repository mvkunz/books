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
  const [showFormMessage, setShowFormMessage] = useState(false);

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
    if (bookTitle !== '' && bookPages > 0) {
      updateState();
      resetForm();
      setShowFormMessage(false);
    } else {
      setShowFormMessage(true);
    }
  }
// handleSubmit-> Quando fizer o submit do form (botão adicionar), vai chamar a preventDefault para evitar o comportamento padrão do form (que é recarregar a página) e depois vai chamar a função updateState que vai atualizar o estado. Logo após chamar a updateState, chamará a função resetForm para APAGAR o que havia sido digitado no input.
// É realizada uma VALIDAÇÃO para verificar se o title NÃO é vazio e se numero de paginas é maior que 0.

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
            {showFormMessage && (
              <div className="form-message">
                <p>Todos os campos são obrigatórios!</p>
              </div>
            )}
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

//             {showFormMessage && (
//  <div className="form-message">
//  <p>Todos os campos são obrigatórios!</p>
//</div>
//)}
// É necessária a criação de um estado para controlar a mensagem do campo. Para isso, deve fazer uma condicional para definir qnd deverá ser exibida.
// Só deverá ser exibido a mensagem quando a validação falhar, então deve fazer um else no if do handleSubmit e mudar o estado. MAS, para a mensagem não aparecer, deve alterar no if tb.