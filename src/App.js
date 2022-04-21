import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Routes, Redirect, Route} from "react-router-dom";
import HomeScreen from "./components/home_screen";
import {Fragment} from "react";

function App() {
  return (
    <BrowserRouter>
        <Fragment>
            <Routes>
              <Route exact path="/" element={<HomeScreen/>}/>
            </Routes>
        </Fragment>
    </BrowserRouter>
  );
}

export default App;
