import { useState } from 'react';

import Header from './components/Header';
import Title from './components/Title';
import Footer from './components/Footer';
import Book from './components/Book';
import Form from './components/Form';

import './App.css'

import { Booktype } from './type';

function App() {

  const [books, setBooks] = useState<Booktype[]>([]);
  
  function updateState(title: string, pages: number) {

    const newBook = {
      title: title,
      pages: pages,
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
        {books.map((book) => (
            <Book
              book={ book }
            />
          ))}
        <Form
          submitFunction={ updateState }
        />
        
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