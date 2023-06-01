
import './App.css';
import { useState, useEffect } from 'react'
import BookForm from './components/bookform';
import BookList from './components/booklist';
import { getBooks } from './rest';

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)
  const [refreshFlag, setRefreshFlag] = useState(0)

  useEffect(() => {
    getBooks().then(
      text => {
        let bookArray = JSON.parse(text)
        setBooks(bookArray)
      }
    )
  }, [refreshFlag])

  const refresh = (noChanges=false) => {
    if(!noChanges) {
      setRefreshFlag(refreshFlag + 1)
    }
    setSelectedBook(null)
  }

  const Conditional = () => {
    if(selectedBook) {
      return <BookForm
        book={selectedBook}
        setBook={setSelectedBook}
        refresh={refresh}
        />
    }
    return <div />
  }

  return (
    <div className="App">
      <h3>React Book Project</h3>
      <BookList books={books} 
        selectedBook={selectedBook}
        setSelectedBook={setSelectedBook}
      />
      <Conditional />
    </div>
  );
}

export default App;
