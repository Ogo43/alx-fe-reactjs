import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import SearchForm from "./components/SearchForm";
import { fetchUserData } from "./services/githubService";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <main style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;
