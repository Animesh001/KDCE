import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { Vission } from "./components/vission";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import {News} from "./components/news";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  
  

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Vission data={landingPageData.Vission}/>
      <Services data={landingPageData.Services} />
      <Testimonials data={landingPageData.Testimonials} />
      <Gallery data={landingPageData.Gallery} />
      <Team data={landingPageData.Team} />
      <News data={landingPageData.News}/>
      <Contact data={landingPageData.Contact} />

    </div>
  );
};

export default App;
