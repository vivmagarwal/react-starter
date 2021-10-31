// import { useEffect, useState } from "react";
import Card from "../card/card";

function CardList({ cards }) {
  // const [loadedBooks, setLoadedBooks] = useState([]);

  // useEffect(() => {
  //   fetch('https://openlibrary.org/authors/OL34184A/works.json?limit=10')
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       const books = [];

  //       data.entries.map((book) => {
  //         console.log('title ', book?.title);
  //         console.log('description ', book?.description?.value?.substring(0, 50) + '...');
  //         console.log( 'author ', book?.authors[0]?.author?.key);
  //       })

  //       console.log(data);
  //     })
  // },[])


  return (
    <div className="container card-list-wrapper">
      <div className="card-list">
        {cards.map((cardItem) => (
          <Card key={cardItem.id} {...cardItem} />
        ))}
      </div>
    </div>
  )
}

export default CardList;