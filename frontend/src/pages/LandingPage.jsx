import React from 'react'
import Hero from '../components/Hero'
import Courses from '../components/Courses'
import Lessons from '../components/Lessons'
import RegisterNow from '../components/RegisterNow'
import MentorSection from '../components/MentorSection'
import SubscribeNow from '../components/SubscribeNow'
import Footer from '../components/Footer'


const LandingPage = () => {
  return ( 
    <>
       <Hero></Hero>
       <Courses></Courses>
       <Lessons></Lessons>
       <RegisterNow></RegisterNow>
       <MentorSection></MentorSection>
       <SubscribeNow></SubscribeNow>
       <Footer></Footer>
    </>

    
  )
}

export default LandingPage