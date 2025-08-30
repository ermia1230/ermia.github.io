import React from 'react';
import './ErrorPage.css';

function ErrorPage() {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative', overflow: 'hidden', backgroundColor: '#FFF' }}>
      <div id="error">
        <h1>Error 404</h1>
        <h2>Ooops! Page not found...</h2>
        <h3>Get a life!!</h3>§
        <h4>U Mad Bro?</h4>
        <h5>Seriously this is a problem. Send DM to site Admin (Owner of the insta account) with your link above and tell us where you were going, Thank You!</h5>
        <p><a href="https://en.wikipedia.org/wiki/Trollface" target="_blank" rel="noopener noreferrer" style={{color: '#666', fontSize: '12px'}}>Checking my link</a></p>
      </div>
      <div id="trollbox">
        <img 
          src="https://m.media-amazon.com/images/I/514xijeBDqL.jpg_BO30,255,255,255_UF900,850_SR1910,1000,0,C_QL100_.jpg" 
          className="troll"
          alt="Troll face"
        />
      </div>

      <style jsx>{`
        #trollbox {
          bottom: 0px;
          right: 400px;
          width: 800px;
          height: 600px;
          position: absolute;
          overflow: hidden;
        }
        .troll {
          width: 555px;
          height: 400px;
          position: absolute;
          overflow: hidden;
          bottom: -150px;
          -webkit-transition: top 5s;
          -moz-transition: top 5s;
          -o-transition: top 5s;
        }
        .troll:hover {
          bottom: -100px;
          -webkit-transition: top 0.5s;
          -moz-transition: top 0.5s;
          -o-transition: top 0.5s;
        }
        #error {
          height: auto;
          width: auto;
          margin-top: 150px;
          margin-right: auto;
          margin-left: auto;
        }
        h1, h2, h3, h4, h5 {
          font-weight: bold;
          text-align: center;
          font-family: Arial, Helvetica, sans-serif;
        }
      `}</style>
    </div>
  );
}

export default ErrorPage;
