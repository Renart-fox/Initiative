import { Grid } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import {
    BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Cyberpunk from "./cyberpunk";
import Sidebar from "./sidebar";
import Vampire from "./vampire";
import Zaelthar from "./zaelthar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Zaelthar />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

const Main = () => {
    return (
        
        <React.StrictMode>
        <BrowserRouter>
                <Grid container spacing={2}>
                    <Grid item xl={2}>
                        <Sidebar />
                    </Grid>
                    <Grid item xl={10}>
                        <Routes>
                            <Route path='/' element={<Zaelthar/>} />
                            <Route path='/cpred' element={<Cyberpunk/>} />
                            <Route path='/vp5e' element={<Vampire/>} />
                        </Routes>
                    </Grid>
                </Grid>
        </BrowserRouter>
      </React.StrictMode>
    );
}
export default Main;