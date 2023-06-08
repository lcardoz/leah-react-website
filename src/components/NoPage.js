import React from 'react';

const NoPage = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', borderRadius: "30px"}}>
      <div style={{color: 'white', backgroundColor: '#fc3903', fontWeight: '700', textAlign: 'center', margin: '15px', width: '50%', padding: '25px 50px 50px 50px', borderRadius: "30px", fontSize: '20px',}}>
        <h2>Oops! This page does not exist.</h2>
        <br />
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <img src="https://media.giphy.com/media/xT0BKFZgaGq6af8hZ6/giphy.gif" alt="David Byrne dancing" style={{maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto'}} />
        </div>
      </div>
    </div>
  )
}

export default NoPage;