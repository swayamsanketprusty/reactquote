import React, { useEffect, useState } from 'react'
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';
import axios from 'axios'
import './App.css'


function App() {
  const [quote, setQuote] = useState([])

  useEffect(() => {
    let data = async () => {
      let res = await axios.get("https://api.quotable.io/random")
      setQuote(res.data)

    }
    data()
  }, [])

  let fetchData = async () => {
    let res = await axios.get("https://api.quotable.io/random")
    setQuote(res.data)

  }

  const shareUrl = 'https://your-website-url.com';
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card-body">
            <h3 className="card-title">Quote Of The Day</h3>
            <p className="card-text">{quote.content}</p>
            <h5 className='author'> ~{quote.author}</h5>
            <div className="button">
              <div>
                <FacebookShareButton url={shareUrl} quote={quote}>
                  <FacebookIcon size={40} round={true} />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={quote}>
                  <TwitterIcon size={40} round={true} />
                </TwitterShareButton>
              </div>
              <button className="btn btn-primary" onClick={fetchData}>New Daily Quote</button>
            </div>
          </div>
        </div>
      </div>
      

    </>
  )
}

export default App
