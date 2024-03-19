import React from 'react'
import Heading from '../common/Heading'

function About() {
  return (
 <>
 <section className='about'>
 <div className="weAre"></div>
 <div className="container flex mtop">
 <Heading title="Our Agency Story" subtile="Check out our company story and work process"/>

<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis aperiam eius accusamus quia quibusdam? Sunt, aut iste, molestias voluptate consequuntur vitae sequi quis eos, aliquam autem dicta odit amet similique!</p>
 </div>

 <div className="right">
 <img src="./immio.jpg" alt="" />
 </div>
 </section>
 
 </>  )
}

export default About
