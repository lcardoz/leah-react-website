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
          {/* <p style={{textDecoration: "underline"}}>A BIT ABOUT ME:</p> */}
          <p style={{fontSize: "20px"}}>software engineer + concert enthusiast + student always</p>
          <p >~CURRENTLY~</p>
          <p>looking for: frontend or fullstack web development opportunities</p>
          <p>listening to: <a href="https://open.spotify.com/album/4FR8Z6TvIsC56NLyNomNRE?si=5zkRDp48T-OWHAAyrIAx9g">Stop Making Sense (Live)</a> by Talking Heads</p>
          <p>living in: Brooklyn, NY</p>
        </div>
      </div>
      <div>
        <h3>pic of me</h3>
      </div>
      <footer>
        <h3>links to pages: projects | resumes | contact links</h3>
      </footer>
    </>
  );
}

export default App;
