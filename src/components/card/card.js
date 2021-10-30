function Card() {
  return (
    <div className="card">
      <a href="https://google.com" className="card__title">The Afganisthan Papers: A secret history of the war</a>
      <img
        className="card__img"
        alt="my good book"
        src="https://imgv2-1-f.scribdassets.com/img/audiobook_square_badge/510417754/396x396/e1986f8af6/1632395555?v=1"
      />
      <div className="card__description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero deleniti incidunt rem. Voluptate, tempore
        quos, suscipit temporibus autem sapiente.
      </div>
      <a className="card__author" href="https://google.com">Author Name</a>
    </div>
  )
}

export default Card;