import React from "react";
import Navigasjon from './components/nav/navigasjon.jsx';
import Container1 from './components/container/container1.jsx';
import Container2 from './components/container/container2.jsx';
import Container3 from './components/container/container3.jsx';
import Container4 from './components/container/container4.jsx';
import Container5 from './components/container/container5.jsx';

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navigasjon />
      <div className="">

        <Container1 />
        <Container2 />
        <Container3 />
        <Container4 />
        <Container5 />

      </div>

      
    </div>
  );
}
