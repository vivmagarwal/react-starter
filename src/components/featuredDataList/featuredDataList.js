import FeaturedDataItem from "../featuredDataItem/featuredDataItem";

function FeaturedDataList() {
  return (
    <div class="featured-data">
      <div class="featured-data__container container">
        <FeaturedDataItem />
        <FeaturedDataItem />
        <FeaturedDataItem />
        <FeaturedDataItem />
      </div>
    </div>
  )
}

export default FeaturedDataList;