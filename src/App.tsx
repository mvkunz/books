import Header from './components/Header';
import Footer from './components/Footer';
import Book from './components/Book';
import './App.css'

const book1 = {
  title: 'The fault in our stars',
  pages: 288,
  isRead: true,
  isFavorite: false,
}

const book2 = {
  title: 'Fifty Shades of Grey',
  pages: 480,
  isRead: true,
  isFavorite: false,
}

const book3 = {
  title: 'GREY',
  pages: 528,
  isRead: true,
  isFavorite: true,
}

const book4 = {
  title: 'The Godfather',
  pages: 433,
  isRead: false,
  isFavorite: false,
}

function App() {
  return (
    <div>
      <Header />
      <ul>
      <Book 
        book={ book1 }
        />
              <Book 
        book={ book2 }
        />
              <Book 
        book={ book3 }
        />
              <Book 
        book={ book4 }
        />
      </ul>
      <Footer />
    </div>
  )
}

export default App
