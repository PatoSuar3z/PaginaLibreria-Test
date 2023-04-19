import BookList from '@/components/BookList'
import React, { useEffect, useState, Fragment } from 'react'

const Libros = () => {
  
  const [books, setBook] = useState([])

  useEffect(() => {
    const getBooks = () => {
      fetch('http://localhost:9000/libros')
        .then(res => res.json())
        .then(res => setBook(res))
    }
    getBooks()
  }, [])

  return (
    <BookList books={books}/>
  )
}

export default Libros