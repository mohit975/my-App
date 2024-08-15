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
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book {...book} key={book.id} />
      })}
    </section>
  )
}

const Book = (props) => {
  console.log(props)
  const { img, title, author } = props

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Booklist />)
