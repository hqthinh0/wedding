import Banner from "./components/banner/banner.js";
import Location from "./components/location/localtion.js"
import Map from './components/loadjs.js'

function App() {
  return (
    <>
    
    <div className="App">
      <header className="App-header">
        {/* <Banner/>
        <Location/> */}

          <Map/>
      </header>
    </div>
    </>
  );
}

export default App;
