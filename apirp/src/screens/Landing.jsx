import React from "react";
// Header&Footer
import { BrowserRouter, Routes, Route } from "react-router-dom"
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer"; 
//Pages
import { HeaderActivités, Activités } from "../components/Sections/Activités";
import { Assoc, Bulletin, Contact, Elu } from "../components/Sections/Contact";
import { HeaderPromouvoir, Promouvoir } from "../components/Sections/Promouvoir";
import { HeaderForum, Forum } from "../components/Sections/Forum";



export default function Landing() {
  return (
    <>
      <TopNavbar />
      <BrowserRouter>
        <Routes>
          <Route path="Forum" element={<><HeaderForum /><Forum /></>} />
          <Route path="Activités" element={<><HeaderActivités /><Activités /></>} />
          <Route path="Contact" element={<><Contact /><Assoc /><Elu /><Bulletin /></>}/>
          <Route path="Adhérer" element={<Forum />} />
          <Route path="Promouvoir" element={<><HeaderPromouvoir /><Promouvoir /></>} />
          <Route path="Apprendre" element={<Forum />} />
          <Route path="Enseigner" element={<Forum />} />
          <Route path="Divers" element={<Forum />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}


