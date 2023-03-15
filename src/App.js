import Banner from "./components/banner/banner.js";
import Location from "./components/location/localtion.js";
import Story from "./components/story/story.js";
import Video from "./components/video/video.js";
import Event from "./components/events/event.js";


function App() {
  return (
    <>
    
    <div className="App">
      <header className="App-header">
        <Banner/>
      


          <Story />
          <Location />
          <Video/>
          <Event/>
      </header>
    </div>
    </>
  );
}

export default App;
