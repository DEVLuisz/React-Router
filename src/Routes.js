import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import About from "./Pages/About";
import Home from "./Pages/Home";
import Page404 from "./Pages/Page404";
import NavBar from "./Components/NavBar";
import Footer from "Components/Footer";
import PageDefault from "Components/PageDefault";
import PostPage from "Components/PostPage";
import ScrollToTop from "Utils/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>

    <ScrollToTop />

      <NavBar />

      <Routes>

        <Route path="/" element={<PageDefault />}>
        <Route index element={<Home />}/>
        <Route path="sobremim" element={<About />}/>

        </Route>

        <Route path="posts/:id/*" element={<PostPage />} />
        <Route path="*" element={<Page404 />}/>

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default AppRoutes;
