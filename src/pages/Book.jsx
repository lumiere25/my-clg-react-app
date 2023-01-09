import React, { useCallback, useState, useEffect } from 'react';
import Button from "../components/BasicButton/BasicButton";
import BookList from '../components/BookList/BookList';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const Home = () => {

 const [books, setBooks ] = useState([]);
 const [ error, setError ] = useState(null);
 const [ isLoading, setIsLoading ] = useState(false);

 const fetchBookHandler = useCallback(async ()  => {
   setIsLoading(true);
   setError(null);

   try {
  const response = await fetch("https://openlibrary.org/authors/OL23919A/works.json?limit=5");
   if( response.status.code === 404) {
   setError(true);
   console.log(response);
   throw new Error("Sorry, something went wrong");
   }
   const data = await response.json();
  
    const transformedBooks = data.entries.map((bookData) => {
       return {
         key: bookData.key,
         name: bookData.title
       };
     });
     setBooks(transformedBooks);     
 } catch (error) {
      setError(error.message);
 }
      setIsLoading(false);
}, )
  

 useEffect(() => {
   fetchBookHandler()
 }, [])

let content = <p>No books found!</p>

if(books.length > 0) {
  content =   <BookList books={books} />
}

if(error) {
  content = <p>{error}</p>
}

if(isLoading) {
  content = <LoadingSpinner />
}






  return (
   <React.Fragment>
    <section>
     <Button onClick={fetchBookHandler}>
     Some of J.K Rowling's Work
     </Button>
    </section>
    <section>
    </section>
    {content}
   </React.Fragment>
  )
}

export default Home;