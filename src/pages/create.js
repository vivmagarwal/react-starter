import { useState } from 'react';

function Create() {
  const [bookTitle, setBookTitle] = useState('');
  const [favSubject, setFavSubject] = useState('Javascript');
  const [err, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (!bookTitle) {
      setError('Book title is required.')
      return;
    }

    if (!favSubject) {
      setError('FavSubject is required.')
      return;
    }

    try {
      const respose = await fetch('https://iifsd.herokuapp.com/studentss', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: bookTitle,
          favSubject: favSubject,
        }),
      });

      if (!respose.ok) {
        throw new Error("Server responds with error!")
      }

      const data = await respose.json();

      console.log(data);
    } catch (error) {
      console.log(error);
      setError(error);
    }
  }

  return (
    <div className="page__create">
      
      ERR:{err && <p className="msg msg--error">{err.toString()}</p>}

      <h1>Create a Book</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="book title" value={bookTitle} onChange={(e) => { setError(''); setBookTitle(e.target.value)}} />
        <input placeholder="fav subject" value={favSubject} onChange={(e) => { setError(''); setFavSubject(e.target.value) }} />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Create;
