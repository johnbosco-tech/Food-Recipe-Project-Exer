import React from 'react'
import Header from '../component/Header'
import Recipes from '../component/Recipes'

const Home = () => {
  return (
    <div>
        <Header 
         title={
            <p>Taste the World with <br />FlavorVerse!</p>
         }
         type="home"
        />

        <section id='recipes' className='lg:max-w-[1440px] mx-auto px-4'>
            <Recipes />
        </section>
    </div>

  )
}

export default Home