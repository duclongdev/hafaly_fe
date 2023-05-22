import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/index";
import { registerLicense } from "@syncfusion/ej2-base";
import "./App.css"
//Import Layout

import DefaultLayoutPublic from "./components/layout/DefaultLayout/DefaultLayoutPublic";
import DefaultLayoutPrivate from "./components/layout/DefaultLayout/DefaultLayoutPrivate";

import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login-SignUp/Login";
import CreateFamily from "./pages/CreateFamily/CreateFamily";
import Schedule from "./pages/Schedule/Schedule";
import Contacts from "./pages/Contacts/Contacts";
import Note from "./pages/Note/Note";

function App() {
  // Registering Syncfusion license key
  registerLicense("Mgo+DSMBaFt+QHJqVk1mQ1lbdF9AXnNAdFZxT2Naby8Nf1dGYl9RQXZWQlRmQXxSck1nXg==;Mgo+DSMBPh8sVXJ1S0R+X1pCaVddX2NLfUN/T2ZedV5zZCQ7a15RRnVfR11qSXdWfkdiXXZZdw==;ORg4AjUWIQA/Gnt2VFhiQlJPcEBKQmFJfFBmTGlceFRwd0U3HVdTRHRcQlhjQH5ac01hWHpeeHM=;MTk4MTUyOEAzMjMxMmUzMjJlMzNBNGpZSitDVUQrWVRDb214dU44L3o1T25POHcxQnZaUlAydmhHTWxFOTJnPQ==;MTk4MTUyOUAzMjMxMmUzMjJlMzNDUEM2ODU4dGl4ZFEzUDZBcno2VXRFSlFmNHZHdzBNL1FmeE82K2wxNm1VPQ==;NRAiBiAaIQQuGjN/V0d+Xk9HfVldVXxLflF1VWpTell6dFZWESFaRnZdQV1mSXdTf0BrW35bdnZS;MTk4MTUzMUAzMjMxMmUzMjJlMzNEeGxWNjBmUHc4cFMwSGZsTFc5WGFtYmpVcUR4TG42WmQ1bXZPM1c3NEZZPQ==;MTk4MTUzMkAzMjMxMmUzMjJlMzNKam1tM1V6bWFtekUrUk5iU0p4dkwyWUlwcCtIcFN6UVdYRlZUZ0E2L3ZZPQ==;Mgo+DSMBMAY9C3t2VFhiQlJPcEBKQmFJfFBmTGlceFRwd0U3HVdTRHRcQlhjQH5ac01hWHlfdHM=;MTk4MTUzNEAzMjMxMmUzMjJlMzNFSFlHc0FmTXNRTEpyT3FYU2R0VTk4VG1aTGdWWFhUMXVOdjNDeHk0Y3NjPQ==;MTk4MTUzNUAzMjMxMmUzMjJlMzNnNVhQOW0zYWNZTXRnZTV3NzJLZ2ZVdWJ6bDBFVmdFNEFxQ0pqb2xKZ1JZPQ==;MTk4MTUzNkAzMjMxMmUzMjJlMzNEeGxWNjBmUHc4cFMwSGZsTFc5WGFtYmpVcUR4TG42WmQ1bXZPM1c3NEZZPQ==");

 

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<DefaultLayoutPublic>{<Homepage />}</DefaultLayoutPublic>}
          />
          <Route
            path="/home"
            element={<DefaultLayoutPublic>{<Homepage />}</DefaultLayoutPublic>}
          />
          <Route
            path="/login"
            element={<DefaultLayoutPublic>{<Login />}</DefaultLayoutPublic>}
          />
          <Route
            path="/dashboard"
            element={<DefaultLayoutPrivate></DefaultLayoutPrivate>}
          />
          <Route
            path="/createfamily"
            element={
              <DefaultLayoutPrivate>{<CreateFamily />}</DefaultLayoutPrivate>
            }
          />
          <Route
            path="/calendar"
            element={
              <DefaultLayoutPrivate>{<Schedule />}</DefaultLayoutPrivate>
            }
          />
          <Route
            path="/contacts"
            element={
              
              <DefaultLayoutPrivate>{<Contacts />}</DefaultLayoutPrivate>
            }
          />
          <Route
            path="/note"
            element={
              
              <DefaultLayoutPrivate>{<Note />}</DefaultLayoutPrivate>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
