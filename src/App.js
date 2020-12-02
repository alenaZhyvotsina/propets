import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import React from "react";

function App() {
    return (
        <div className="container-fluid">
            <Header/>
            <Main/>
            <Footer />
        </div>
    );
}

export default App;
