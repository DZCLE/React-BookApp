
const BookList = props => {
  const newBook = {
    'id': -1,
    'isbn': '',
    'title': '',
    'price': 0
  }

  const isSelected = book => {
    return (props.selectedBook != null && props.selectedBook === book)
  }

  return (
    <div id='book-list'>
      <h4>Book List</h4>
      <ul>
        {props.books.map(
          (book, index) => {
            return <li key={index}
              className={(isSelected(book)) ? 'selected' : ''}
              onClick={e => props.setSelectedBook(book)}
            >
              {book.isbn} - {book.title} - {book.price}
            </li>
          }
        )}
      </ul>
      <input type='button'
        value='New Book'
        onClick={e => props.setSelectedBook(newBook)}
      />
    </div>
  )
}

export default BookList