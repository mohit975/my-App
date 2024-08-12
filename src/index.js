import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { books } from './books'
import { Book } from './book'

const DisplayBooklist = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book.id)
  }

  return (
    <>
      <h1>Amazon Best seller</h1>
      <section className="Displaybooklist">
        {books.map((book, index) => {
          return (
            <Book
              {...book}
              key={book.id}
              getBook={getBook}
              number={index + 1}
            />
          )
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<DisplayBooklist />)
