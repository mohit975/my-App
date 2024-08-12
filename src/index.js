import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const books = [
  {
    img: './images/book-1.jpg',
    title: 'It Ends with Us: A Novel',
    author: 'Colleen Hoover',
    id: 1,
  },
  {
    img: './images/book-2.jpg',
    title: 'The Lions of Fifth Avenue: A GMA Book Club Pick (A Novel)',
    author: ' Fiona Davis',
    id: 2,
  },
  {
    img: './images/book-3.jpg',
    title: 'stephen King',
    author: 'Fairy tale',
    id: 3,
  },
]

const Booklist = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }

  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} getBook={getBook} />
      })}
    </section>
  )
}

const Book = (props) => {
  // console.log(props)
  const { img, title, author, getBook, id } = props

  // If you pass function with () , JS will execute it immediatly,
  // Hence we should pass as contant and pass the function inside
  const getSingleBook = () => {
    getBook(id)
  }

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>fuck up</button>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
