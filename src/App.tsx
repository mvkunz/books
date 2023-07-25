import Header from './components/Header';
import Footer from './components/Footer';
import Book from './components/Book';
import './App.css'


const booksList = [
    {
      title: 'The fault in our stars',
      pages: 288,
      isRead: true,
      isFavorite: false,
    },
    {
      title: 'Fifty Shades of Grey',
      pages: 480,
      isRead: true,
      isFavorite: false,
    },
    {
      title: 'GREY',
      pages: 528,
      isRead: true,
      isFavorite: true,
    },
    {
      title: 'Harry Potter and the Philosophers Stone',
      pages: 264,
      isRead: true,
      isFavorite: false,
    },
    {
      title: 'Harry Potter and the Chamber Of Secrets',
      pages: 224,
      isRead: true,
      isFavorite: true,
    },
    {
      title: 'Harry Potter and the Half-Blood Prince',
      pages: 512,
      isRead: false,
      isFavorite: false,
    },
    {
      title: 'Harry Potter and the Deathly Hallows',
      pages: 759,
      isRead: false,
      isFavorite: false,
    },
];

function App() {
  return (
    <div>
      <Header />
      <p>Seus livros:</p>
      <ul>
        {booksList.map((book) => (
          <Book
            key= { book.title }
            book={ book }
          />
        ))}
      </ul>
       <Footer />
    </div>
  )
}

export default App
