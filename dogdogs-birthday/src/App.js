import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from './Pages/Content';
import GuessGame from "./Pages/GuessGame";

const App = () => {
    return (
      <BrowserRouter>
        <main>
            <Content>
                <Routes>
                  <Route path="/" exact element={<GuessGame/>}/>
                </Routes>
            </Content>
        </main>
      </BrowserRouter>

    );
}

export default App;
