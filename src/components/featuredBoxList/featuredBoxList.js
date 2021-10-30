import FeaturedBox from "../featuredBox/featuredBox";

function FeaturedBoxList() {
  return (
    <div class="featured-boxes">
      <div class="featured-boxes__container container">
        <div class="featured-boxes__title-wrapper">
          <h3 class="featured-boxes__title section-heading">What You Get with Open Library?</h3>
          <p class="featured-boxes__description">
            Best-Selling &amp; Most Trusted HTML5 Template. Experience the Ever-Growing Feature Rich Template since
            2014.
          </p>

          <div class="featured-box-list">
            <FeaturedBox />
            <FeaturedBox />
            <FeaturedBox />
            <FeaturedBox />
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedBoxList;