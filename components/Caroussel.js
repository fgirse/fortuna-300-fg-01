/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */
import Layout from './Layout'
import Image from 'next/image'



    <div className="container">
    <h2>Carousel Example</h2>  
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      {/* Indicators */}
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
  
      {/* Wrapper for slides */}
      <div className="carousel-inner">
        <div className="item active">
          <img src="/Impress01.jpg" alt="Los Angeles" style={{width:"100%"}}/>
        </div>
  
        <div className="item">
          <img src="Impress02.jpg" alt="Chicago" style={{width:"100%"}}/>
        </div>
      
        <div className="item">
          <img src="Impress03.jpg" alt="New york" style={{width:"100%"}}/>
        </div>
      </div>
  
      {/* Left and right controls */}
      <a className="left carousel-control" href="#myCarousel" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#myCarousel" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  </div>
   
   

