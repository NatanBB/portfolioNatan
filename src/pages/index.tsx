import React from 'react';
import { Banner } from '../components/Banner/Banner';
import { NavBar } from '../components/NavBar/NavBar';
import { Skills } from '../components/Skills/Skills';
import { Projects } from '../components/ProjectCard/Projects';
import { Contact } from '../components/Contact/Contact';
import { Footer } from '../components/Footer/Footer';

export default function MainPage() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}