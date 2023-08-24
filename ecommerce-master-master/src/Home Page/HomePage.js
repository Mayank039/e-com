import React from 'react'
import Footer from '../Layout/Footer'
import Header from '../Layout/Header'
import './Home.css'

const HomePage = () => {
  return (
    <>
    <Header/>
    <header>
    <button className="latest-album text-center" style={{backgroundColor:"#d3d3d3",padding: 40,
    fontSize: 100 }} >Get our Latest Album</button><br></br>
    <button className="play-btn text-center" style={{backgroundColor:"#d3d3d3",padding: 40,
    fontSize: 100}}>►</button>
    </header>
    <section id="tours" className='container'>
        <h2>TOURS</h2>
        <div>
            <div className="tour-item">
                <span className="tour-date">JUL16</span>
                <span className="tour-place">DETROIT, MI</span>
                <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div className="tour-item">
                <span className="tour-date">JUL19</span>
                <span className="tour-place">TORONTO,ON</span>
                <span className="tour-spec-place">BUDWEISER STAGE</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div className="tour-item">
                <span className="tour-date">JUL 22</span>
                <span className="tour-place"> BRISTOW, VA</span>
                <span className="tour-spec-place">JIGGY LUBE LIVE</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div className="tour-item">
                <span className="tour-date">JUL 29</span>
                <span className="tour-place">PHOENIX, AZ</span>
                <span className="tour-spec-place"> AK-CHIN PAVILION</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div className="tour-item">
                <span className="tour-date">AUG 2</span>
                <span className="tour-place">LAS VEGAS, NV</span>
                <span className="tour-spec-place">T-MOBILE ARENA</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div className="tour-item">
                <span className="tour-date">AUG 7</span>
                <span className="tour-place">CONCORD, CA</span>
                <span className="tour-spec-place"> CONCORD PAVILION</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
        </div>
        </section>
        <Footer/>
    </>
  )
}

export default HomePage