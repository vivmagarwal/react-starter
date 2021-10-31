function Card({ title, image, description, authorName, authorURL }) {
  return (
    <div className="card">
      <a href="https://google.com" className="card__title">{title}</a>

      <img
        className="card__img"
        alt="awesome book cover"
        src={image}
      />

      <div className="card__description">
        {description}
      </div>

      <a className="card__author" href={authorURL}>{authorName}</a>
    </div>
  )
}


export default Card;