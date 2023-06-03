import React from 'react';

const NoPage = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'center', borderRadius: "30px"}}>
      <div style={{color: 'white', backgroundColor: '#fc3903', fontWeight: '700', textAlign: 'center', margin: '15px', width: '40%', padding: '75px 50px 75px 50px', borderRadius: "30px", fontSize: '20px'}}>
        Oops! This page does not exist.
      </div>
    </div>
  )
}

export default NoPage;