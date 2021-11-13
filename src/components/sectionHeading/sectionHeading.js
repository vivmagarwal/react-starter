function SectionHeading({book_title}) {
  return (
    <div className="section-heading-block">
      <div className="section-heading-block__container container">
        <h3 className="section-heading"> {book_title ? book_title : 'Section Name here'}</h3>
      </div>
    </div>
  )
}

export default SectionHeading;