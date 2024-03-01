import React from 'react';
import Navbar from '../Navbar';
import AboutCompOne from '../../components/aboutcomp/AboutCompOne/AboutCompOne';
import AboutCompTwo from '../../components/aboutcomp/AboutCompTwo/AboutCompTwo';
import AboutCompThree from "../../components/aboutcomp/AboutCompThree/AboutCompThree";
import AboutCompFour from "../../components/aboutcomp/AboutCompFour/AboutCompFour";
export default function AboutUs() {
  return (
    <div>
     {/* <Navbar/> */}
     <AboutCompOne/>
     <AboutCompTwo/>
     <AboutCompThree/>
     <AboutCompFour/>
    </div>
  )
}