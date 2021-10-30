function BookDetail() {
  return (
    <div className="book-detail">
      <div className="container">
        <div className="book-detail__left">
          <img
            className="book-detail__img"
            src="https://imgv2-1-f.scribdassets.com/img/audiobook_square_badge/510417754/396x396/e1986f8af6/1632395555?v=1"
          />
        </div>
        <div className="book-detail__right">
          <h1 className="book-detail__title"><a href="#">The Afganisthan Papers: A secret history of the war</a></h1>
          <div className="book-detail__author">Written by <a href="#">Author Name</a></div>

          <hr className="rule" />

          <div className ="book-detail__description">
          <div className ="_3939a6 description _1rtTp9" data-e2e="description"><b>“THE BOOK CHINA DOESN'T WANT YOU TO READ.”—CNN&ZeroWidthSpace;</b>   <b>A riveting insider's story of how the Party and big money work in China today, by a man who, with his wife, Whitney Duan, rose to the zenith of power and wealth—and then fell out of favor.She was disappeared four years ago.News of this book led to a phone call from Whitney, proof that she's alive.</b>  As Desmond Shum was growing up impoverished in China, he vowed his life would be different.   Through hard work and sheer tenacity he earned an American college degree and returned to his native country to establish himself in business. There, he met his future wife, the highly intelligent and equally ambitious Whitney Duan who was determined to make her mark within China’s male-dominated society. Whitney and Desmond formed an effective team and, aided by relationships they formed with top members of China’s Communist Party, the so-called red aristocracy, he vaulted into China’s billionaire className. Soon they were developing the massive air cargo facility at Beijing International Airport, and they followed that feat with the creation of one of Beijing’s premier hotels. They were dazzlingly successful, traveling in private jets, funding multi-million-dollar buildings and endowments, and purchasing expensive homes, vehicles, and art.   But in 2017, their fates diverged irrevocably when Desmond, while residing overseas with his son, learned that his now ex-wife Whitney had vanished along with three coworkers.   This is both Desmond’s story and Whitney’s, because she has not been able to tell it herself.</div>
          </div>

          <div className ="book-detail__pill-list">
          <ul className ="pill-list">
          <li className ="pill-list__item"><a href="#">Business</a></li>
          <li className ="pill-list__item"><a href="#">Personal memories</a></li>
          <li className ="pill-list__item"><a href="#">Asia</a></li>
          <li className ="pill-list__item"><a href="#">Business</a></li>
          <li className ="pill-list__item"><a href="#">Business</a></li>
          <li className ="pill-list__item"><a href="#">Business</a></li>
          <li className ="pill-list__item"><a href="#">Business</a></li>
          </ul>
          </div>

          <div className ="book-detail__product-metadata">
          <ul className ="product-metadata">
          <li className ="product-metadata__item"><span>Publisher: </span><a href="#">Business</a></li>
          <li className ="product-metadata__item"><span>Released: </span><a href="#">Personal memories</a></li>
          <li className ="product-metadata__item"><span>ISBN: </span><a href="#">Asia</a></li>
          <li className ="product-metadata__item"><span>Format: </span><a href="#">Business</a></li>
          </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default BookDetail;