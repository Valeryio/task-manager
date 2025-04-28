import { useState } from 'react';
import Home from './pages/home';
import SignIn from './pages/signIn';
import SignOut from './pages/signOut';
import Contact from './pages/contact';
import Dashboard from './pages/dashboard';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter, Routes, Route } from "react-router";


function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<Home />} ></Route>
              <Route path="/home" element={<Home />} ></Route>
              <Route path="/contact" element={<Contact />} ></Route>
              <Route path="/login" element={<SignIn />} ></Route>
              <Route path="/dashboard" element={<Dashboard />} ></Route>
              <Route path="/register" element={<SignOut />} ></Route>
            </Routes>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
