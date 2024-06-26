import React from 'react'
import Breadcrumb from '../components/about/Breadcrumb'
import ChooseUs from '../components/about/ChooseUs'
import CtaSection from '../components/about/CtaSection'
import TeamSection from '../components/about/TeamSection'
import FaqSection from '../components/about/FaqSection'

const About = () => {
  return (
    <>
        <Breadcrumb/>
        <ChooseUs/>
        <CtaSection/>
        <TeamSection/>
        <FaqSection/>
    </>
  )
}

export default About