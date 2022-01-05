import logo from './logo.svg';
import './App.css';
import myImage from './Images/Work space.jpg'

function App() {
  return (
    <div className="App">
      <div style={{ border: 'solid 1px black', maxwidth: '100vw' }}>

        <h1 class="title red">Christian Alafaa</h1>

          <br/>

      <div /><img src={myImage} alt='workSpaceImage' width='500' height='300'/></div>

          <br/>

      <div><img src="/Cup.jpg" alt='a cup on a table' width='400' height='700'/></div>

          <br/>

      <video width="320" height="240" controls>

        <source src="myVideo.mp4" type="video/mp4"/>

      </video>
    </div>
  );
}

export default App;
