export const Book = (props) => {
  // console.log(props)
  const { img, title, author, getBook, id, number } = props

  // If you pass function with () , JS will execute it immediatly,
  // Hence we should pass as contant and pass the function inside
  const getSingleBook = () => {
    getBook(id)
  }

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <button onClick={getSingleBook}>Click Me</button>
      <h4>{author}</h4>
      <span className="number">{`# ${number}`}</span>
    </article>
  )
}
