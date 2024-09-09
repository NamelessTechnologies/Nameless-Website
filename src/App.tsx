import hsr_logo from './assets/hsr_logo.png'
import poopmap_img from './assets/poopmap_img.png'
import itc from './assets/itc.png'
import './App.css'

function App() {
  return (
    <div>
      <div>
      <a href="https://hsr.hoyoverse.com/en-us/" target="_blank">
          <img src={hsr_logo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>The Nameless</h1>
      <h2>Past Projects</h2>
        <a href="https://github.com/christopherjlo/CPP-Poop-Map" target="_blank">PoopMap</a>
        <br></br>
        <img id="hi" src={poopmap_img}></img>
        <br></br>
        <a href="https://github.com/The-The-ITC-2023/Roommate-Finder-Application" target="_blank">Roommate Finder</a>
        <br></br>
        <img id="hi" src={itc}></img>

      <div className="card">
      </div>
      <p className="read-the-docs">
      <a href="https://docs.google.com/document/d/1xMEFJQjbSX-atfuir_cXXS8ycZIpC1TAxNxTOi4zjus/edit?usp=drive_web&ouid=113272704952034982292">
        Meeting Logs</a>
      </p>
    </div>
  )
}

export default App
