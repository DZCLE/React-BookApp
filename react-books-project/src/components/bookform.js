import { useState } from 'react' 
import { addBook, updateBook, deleteBook } from '../rest'

const BookForm = props => {
  const [book, setBook] = useState(props.book)
  const usage = (book.id < 0) ? 'add' : 'edit'

  const handleChange = e => {
    const name = e.target.name
    const value = e.target.value
    book[name] = value
    setBook({ ...book })
  }

  const handleSaveBook = () => {
    if (usage === 'add') {
      addBook(book).then(text => {
        console.log('handleSaveBook.add')
        props.refresh()
      })
    }
    if (usage === 'edit') {
      updateBook(book).then(text => {
        console.log('handleSaveBook.edit')
        props.refresh()
      })
    }
  }

  const handleDeleteBook = () => {
    if (usage === 'add') {
      props.refresh(true)
    }

    if (usage === 'edit') {
      deleteBook(book).then(text => {
        props.refresh()
      })
    }
  }

  return (
    <div id='book-form'>
      <h4>Book Form - {usage}</h4>
      <form>
      <table><tbody>
          <tr>
            <td>ISBN:</td>
            <td>
              <input type='text'
                name='isbn'
                value={book.isbn}
                onChange={e => handleChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Title:</td>
            <td>
              <input type='text'
                name='title'
                value={book.title}
                onChange={e => handleChange(e)}
              />
            </td>
          </tr>
          <tr>
            <td>Price:</td>
            <td>
              <input type='number'
                name='price'
                value={book.price}
                onChange={e => handleChange(e)}
              />
            </td>
          </tr>
        </tbody></table>
        <input type='button'
          value='Cancel'
          onClick={() => props.refresh(true)}
        />
        <input type='button'
          value='Save'
          onClick={() => handleSaveBook()}
        />
        <input type='button'
          value='Delete'
          onClick={() => handleDeleteBook()}
        />
      </form>
    </div>
  )
}

export default BookForm