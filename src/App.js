import Banner from "./components/banner/banner.js";
import Location from "./components/location/localtion.js";
import Story from "./components/story/story.js";


function App() {
  return (
    <>
    
    <div className="App">
      <header className="App-header">
        <Banner/>
      


          <Story />
          <Location />
          <Story />
          <Story />
      </header>
    </div>
    </>
  );
}

export default App;
