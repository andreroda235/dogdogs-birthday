import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Content from './Pages/Content';
import GuessGame from "./Pages/GuessGame";
import Page from "./Pages/Page";


const App = () => {
    return (
      <BrowserRouter>
        <main>
            <Content>
              <Page gradient>
                <Routes>
                  <Route path="/" exact element={<GuessGame/>}/>
                </Routes>
              </Page>
            </Content>
        </main>
      </BrowserRouter>

    );
}

export default App;
