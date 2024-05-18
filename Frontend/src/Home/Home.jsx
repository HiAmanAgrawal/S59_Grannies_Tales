import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import Footer from '../Components/Footer'
import FreeStory from '../Components/FreeStory'
import AddCard from '../Components/AddCard'

function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <FreeStory/>
    <AddCard/>
    <Footer/>
    </>
  )
}

export default Home