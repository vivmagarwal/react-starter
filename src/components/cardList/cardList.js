import Card from "../card/card";

function CardList() {
  return (
    <div className="container card-list-wrapper">
      <div className="card-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default CardList;