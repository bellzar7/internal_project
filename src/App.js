import {Navigate, Route, Routes} from "react-router-dom"

import {GenresPage, MoviesPage, NotFoundPages, SingleMoviePage, SortsByGenrePage,} from "./pages";
import {MainLayout} from "./layouts";

function App() {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<Navigate to={'movies'}/>}/>

                    <Route path={'movies'} element={<MoviesPage/>}/>
                    <Route path={'movies/:id'} element={<SingleMoviePage/>}/>

                    <Route path={'genres'} element={<GenresPage/>}>
                        <Route path={':name/:id'} element={<SortsByGenrePage/>}/>
                        <Route path={':name/:id/:ids'} element={<SingleMoviePage/>}/>
                    </Route>

                    <Route path={'*'} element={<NotFoundPages/>}/>
                </Route>
            </Routes>

        </div>
    );
}

export default App;
