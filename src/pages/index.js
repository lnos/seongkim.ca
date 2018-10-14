import React from 'react'
import './index.css'
import Layout from '../components/layout'

const IndexPage = () => (
  <div className="background">
    <div className="app">
      <Layout>
        <h3>Seong is a software developer in Toronto</h3>
        <h3>He is currently building digital solution for <a ID="CIBC" href="https://www.cibc.com">CIBC</a></h3>
        <div className="projects">
         <p>Projects</p>
         <a href="http://bit.ly/bearfishgame">Bear Fish</a>
         <div></div>
         <a href="https://github.com/lnos/sbuxchart">Caffeine Visualizaiton</a>
         <div></div>
         <a href="https://lnos.github.io">Old personal website under development</a>
        </div>       
      </Layout>
    </div>
  </div>
)

export default IndexPage
