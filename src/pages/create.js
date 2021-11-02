import { useState } from "react";

function Create() {
  const [bookTitle, setBookTitle] = useState('');
  const [favSubject, setFavSubject] = useState('Python')
  
  async function handleSubmit(e) {
    e.preventDefault();


    const respose = await fetch('https://iifsd.herokuapp.com/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: bookTitle,
        favSubject: favSubject
      }),
    })

    const data = await respose.json();

    console.log(data);
  }
  
  
  return (
    <div className="page__create">
      <h1>Create a Book</h1>
      <form onSubmit={handleSubmit}>
        <input placeholder="book title" value={bookTitle} onChange={(e) => setBookTitle(e.target.value)} />
        <input placeholder="fav subject" value={favSubject} onChange={(e) => setFavSubject(e.target.value)} />

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Create;