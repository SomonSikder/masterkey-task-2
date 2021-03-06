import React, { Component } from "react";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import Banner from "./Components/Banner/Banner";
import Book from "./Components/Books/Books";
import ContactUs from "./Components/ContactUs.js/ContactUs";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header></Header>
        <Banner></Banner>
        <Book></Book>
        <AboutUs></AboutUs>
        <ContactUs></ContactUs>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
