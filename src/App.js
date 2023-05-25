import './App.css';

function App() {
  return (
    <>
      <h1 id="title">
        <span id="small-header">welcome to the personal site of  </span>
        <strong>LEAH CARDOZ</strong>
      </h1>
      <div id="about-me-container">
        <div id ="about-me">
          <p style={{textDecoration: "underline"}}>A BIT ABOUT ME:</p>
          <p>concert enthusiast, world traveler, student always</p>
          <p style={{fontStyle: "italic"}}>~currently~</p>
          <p>looking for: frontend or fullstack web development opportunities</p>
          <p>living in: Brooklyn, NY</p>
          <p>listening to: <a href="https://open.spotify.com/album/4FR8Z6TvIsC56NLyNomNRE?si=5zkRDp48T-OWHAAyrIAx9g">Stop Making Sense (Live)</a> by Talking Heads</p>
        </div>
      </div>
      <footer>
        <h3>contact info</h3>
      </footer>
    </>
  );
}

export default App;
