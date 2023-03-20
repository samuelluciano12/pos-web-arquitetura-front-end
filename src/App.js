import LayoutContainer from "./components/layout-container";
import { Routes, Route } from "react-router-dom";
import CharacterList from "./components/character-list";
import CharacterCard from "./components/character-card";
import EpisodeList from "./components/episode-list";
import EpisodeCard from "./components/episode-card";
import LocationList from "./components/location-list";
import LocationCard from "./components/location-card";
import Main from "./pages/main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutContainer />}>
          <Route index element={<Main />} />
          <Route exact path="/character" element={<CharacterList />} />
          <Route exact path="/character/:id" element={<CharacterCard />} />
          <Route exact path="/episode" element={<EpisodeList />} />
          <Route exact path="/episode/:id" element={<EpisodeCard />} />
          <Route exact path="/location" element={<LocationList />} />
          <Route exact path="/location/:id" element={<LocationCard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
