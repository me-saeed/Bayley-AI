import React from "react";
import { Route, Routes } from "react-router-dom";

import Landingpage from "pages/customer/Landingpage";
import ChatGpt from "pages/customer/ChatApp/ChatGpt";
import HomeScreen from "pages/customer/ChatApp/HomeScreen";
import Askserc from "pages/Askbayley/Askserc";
import Showresult from "pages/Askbayley/Showresult";
import Testask from "pages/Askbayley/testask";

function Main() {
  return (
    <>
      <main>
        <section className=' '>
          <Routes>
            <Route path='/landingPage' element={<Landingpage />} />
            <Route path='/ChatGpt' element={<ChatGpt />} />
            <Route path='/' element={<HomeScreen />} />
            <Route path='/Askserc' element={<Askserc />} />
            <Route path='/Showresult' element={<Showresult />} />
            <Route path='/Testask' element={<Testask />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default Main;
