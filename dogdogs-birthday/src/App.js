import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SoundSystem from "./Components/UI/SoundSystem/SoundSystem";
import Content from './Pages/Content';
import GuessGame from "./Pages/GuessGame";

const App = () => {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <main>
            <Content>
              <SoundSystem/>
                <Routes>
                  <Route path="/" exact element={<GuessGame/>}/>
                </Routes>
            </Content>
        </main>
      </BrowserRouter>

    );
}

export default App;
