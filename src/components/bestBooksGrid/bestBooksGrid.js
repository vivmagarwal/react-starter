import BestBookGridItem from "../bestBookGridItem/bestBookGridItem";

function BestBooksGrid() {
  return (
    <div class="best-books-grid">
      <div class="best-books-grid__container container">
        <div class="best-books-grid__title">
          <h3 class="section-heading">Bestselling Books and Audiobooks</h3>
        </div>
        <div class="best-books-grid__content">
          <ul class="best-books-grid__grid">

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

        <div class="best-books-grid__cta">
          <a href="#" class="hero__btn btn btn--large btn--white">
            Read free for 30 days
          </a>
          <div class="hero__under-btn under-btn">
            Only ₹299/month after. Cancel anytime.
          </div>
        </div>
      </div>
    </div>
  )
}

export default BestBooksGrid;