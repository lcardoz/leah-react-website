import React from 'react';

const NoPage = () => {
  return (
    <div id="no-page-container">
      <div id="no-page-box">
        <p style={{fontSize: '20px'}}>Oops!</p>
        <p style={{fontSize: '15px', marginBottom: '0px'}}>This page does not exist.</p>
        <br />
        <div id="no-page-gif-container">
          <img id="no-page-gif" src="https://media.giphy.com/media/xT0BKFZgaGq6af8hZ6/giphy.gif" alt="David Byrne dancing" />
        </div>
      </div>
    </div>
  )
}

export default NoPage;