const url = '/books/'
const init = {
  headers: new Headers({ "Content-Type" : "application/json"}),
  mode: 'cors'
}

export const getBooks = () => {
  let myInit = {method: 'GET', ...init}
  return fetch('/books', myInit).then(
    response => response.text()
  )
}

export const addBook = book => {
  delete book.id
  let body = JSON.stringify(book)
  let myInit = {method: 'POST', body: body, ...init}
  return fetch(url, myInit).then(
    response => response.text()
  )
}

export const updateBook = book => {
  let body = JSON.stringify(book)
  let myInit = {method: 'PUT', body: body, ...init}
  return fetch(url + book.id, myInit).then(
    response => response.text()
  )
} 

export const deleteBook = book => {
  let myInit = {method: 'DELETE', ...init}
  return fetch(url + book.id, myInit).then(
    response => response.text()
  )
}
