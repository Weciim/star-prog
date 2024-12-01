import React from 'react'
import Hero from '../components/Hero'
import Courses from '../components/Courses'
import Lessons from '../components/Lessons'
import RegisterNow from '../components/RegisterNow'
import MentorSection from '../components/MentorSection'
import SubscribeNow from '../components/SubscribeNow'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import EducationSection from '../components/education'


const LandingPage = () => {
  return ( 
    <>
       <Hero></Hero>
       <AboutSection></AboutSection>
       <EducationSection></EducationSection>
       <Lessons></Lessons>
       <MentorSection></MentorSection>
       <SubscribeNow></SubscribeNow>
       <Footer></Footer>
    </>

    
  )
}

export default LandingPage