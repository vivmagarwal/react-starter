import BestBookGridItem from "../bestBookGridItem/bestBookGridItem";

function BestBooksGrid() {
  return (
    <div className="best-books-grid">
      <div className="best-books-grid__container container">
        <div className="best-books-grid__title">
          <h3 className="section-heading">Bestselling Books and Audiobooks</h3>
        </div>
        <div className="best-books-grid__content">
          <ul className="best-books-grid__grid">

            <BestBookGridItem />
            <BestBookGridItem />
            <BestBookGridItem />
            <BestBookGridItem />
            <BestBookGridItem />
            <BestBookGridItem />
            <BestBookGridItem />
            <BestBookGridItem />
            <BestBookGridItem />
            <BestBookGridItem />
            <BestBookGridItem />
            <BestBookGridItem />

          </ul>
        </div>

        <div className="best-books-grid__cta">
          <a href="#" className="hero__btn btn btn--large btn--white">
            Read free for 30 days
          </a>
          <div className="hero__under-btn under-btn">
            Only ₹299/month after. Cancel anytime.
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestBooksGrid;