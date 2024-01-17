import React, { useState, useEffect } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import portFolioData from '../../data/portfolio.json'
import './index.scss'

function Portfolio() {
  const [letterClass, setLetterClass] = useState('text-animate')
  useEffect(() => {
    // Set the timeout
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    // Return the cleanup function
    return () => {
      // Clear the timeout when the component is unmounted
      clearTimeout(timeoutId)
    }
  }, [])
  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              <img
                src={port.cover}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="description">{port.title}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={'Portfolio'.split('')}
              idx={15}
            />
          </h1>
          <div>{renderPortfolio(portFolioData.portfolio)}</div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
