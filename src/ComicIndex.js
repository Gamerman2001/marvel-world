import React from 'react'
import SingleComic from './SingleComic'

export default function comicIndex() {
  return (
    <div>
          <div className="jumbotron">
        <div className="container">
          <h1 className="header-main-title"> Marvel Search</h1>
          <form action="" id="connectionForm">
            <div className="form-group">
              <input
                required
                type="text"
                name="name"
                id="name"
                className="form-control character-search-box"
                placeholder="Enter a Character"
              />
            </div>
            <input
              type="submit"
              value="Search!"
              className="btn btn-danger mb-2 float-right sserach-character-button"
            />
          </form>
        </div>
      </div>
      <div className="continer" id="contentContainer">
        <div
          className="d-flex align-items-center"
          id="characterSpinnerSection"
        ></div>
        <div
          className="d-flex align-items-center"
          id="comicsSpinnerSection"
        ></div>
      </div>

      <section id="characterSection"></section>

      <section id="comicSection"></section>

    </div>
  )
}
