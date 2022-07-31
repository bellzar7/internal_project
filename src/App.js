import './App.css';
import {Route, Routes, Navigate} from "react-router-dom"

import {MoviesPage} from "./pages";
import {MainLayout} from "./layouts";
import css from './App.css'

function App() {
  return (
    <div>

      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route index element={<Navigate to={'movies'}/>}/>
          <Route path={'movies'} element={<MoviesPage/>}/>

        </Route>
        </Routes>

    </div>
  );
}

export default App;
