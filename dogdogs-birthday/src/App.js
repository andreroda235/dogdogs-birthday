import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SoundSystem from "./Components/UI/SoundSystem/SoundSystem";
import Content from './Pages/Content';
import GuessGame from "./Pages/GuessGame";

const App = () => {
    return (
      <BrowserRouter>
        <main>
            <Content>
              <SoundSystem/>
                <Routes>
                  <Route path="https://andreroda235.github.io/dogdogs-birthday/" exact element={<GuessGame/>}/>
                </Routes>
            </Content>
        </main>
      </BrowserRouter>

    );
}

export default App;
