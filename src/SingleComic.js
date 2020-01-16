import React from 'react'

export default function SingleComic() {
  return (
    <div className="single-comic__body">
      <div className="jumbotron">
        <a href="ComicIndex.js">Home</a>
        <div className="d-flex align-items center container" id="comicsSpinnerSection"></div>
        <div className="container single-comic__container" id="singleComicContainerDiv"></div>
        
      </div>
    </div>
  )
}
