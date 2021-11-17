import { Fragment } from "react";
import { useEffect, useState } from "react";
import BookDetail from "../components/bookDetail/bookDetail";
import SectionHeading from "../components/sectionHeading/sectionHeading";

function Detail(props) {

  const id = props.match.params?.id || 1;

  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await fetch(`https://iifsd.herokuapp.com/books/${id}`);

        if (!response.ok) {
          throw new Error("Server responds with error!")
        }

        const data = await response.json();
        setLoading(false);
        setBook(data);
      } catch {
        setLoading(false);
      }
    }
    fetchBook();
  }, [id, loading])


  return (
    <div className="page__detail">

      {loading && <p>Loading book from the server....</p>}

      {!loading &&
        <>
          {book.id &&
            <>
              <SectionHeading book_title={book.book_title} />
              <BookDetail {...book} />
            </>
          }

          {!book.id && <p>Something went wrong....</p>}
        </>
      }

    </div>
  )

}

export default Detail;