import React from 'react'

export default function ComicCreator() {
  return (
    <div class="comic-creator__body">
      <div className="jumbotron">
        <a href="ComicIndex.js">Home</a>
        <div className="d-flex align-items center container" id="comicCreatorSpinnerSection"></div>
        <div className="d-flex align-items center container" id="comicCreatorSpinnerSection1"></div>
        <div className="container comic-creator__container" id="comicCreatorContainerDiv"></div>
        
      </div>
    </div>
  )
}
