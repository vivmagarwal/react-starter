import { useEffect, useState } from "react";
import Card from "../card/card";

function CardList() {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    fetch('https://iifsd.herokuapp.com/books')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setBookList(data);
      })
  },[])


  return (
    <div className="container card-list-wrapper">
      <div className="card-list">
        {bookList.map((book) => (
          <Card key={book.id} title={book.book_title} image={  book.cover_url } description={ book.book_short_description } authorName={ book.authors[0].author_name } authorURL= 'https://google.com' />
        ))}
      </div>
    </div>
  )
}

export default CardList;