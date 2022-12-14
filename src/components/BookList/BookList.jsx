import React from 'react';
import styles from "./BookList.module.css";
import Book from "../Book/Book";

const BookList = (props) => {
  if(props.books.length === 0) {
    return null
  }
  return (
    <section>
    <ul className={styles["book"]}>
      {props.books.map((book) => (
        <Book key={book.key} name={book.name} />
      ))}
    </ul>
    
    </section>
  )
}

export default BookList;