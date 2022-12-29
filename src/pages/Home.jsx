import React from "react";
import { Element } from "react-scroll";
import { useSelector } from "react-redux";
import { selectData } from "../pages/homeSlice";
// Components
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import { BackToTop } from "../components/globalStyledComponents";

export default function Home() {
  const { name } = useSelector(selectData);

  React.useEffect(
    function () {
      document.title = `${name} | Portfolio`;
    },
    [name]
  );

  return (
    <>
      <Element name={"Home"} id="home">
        <NavBar />
        <Hero />
      </Element>
      <main>
        <Projects />
      </main>
      <BackToTop home={"Home"} />
    </>
  );
}
