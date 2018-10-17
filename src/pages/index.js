import React from 'react'
import './index.css'
import Layout from '../components/layout'
import Introduction from '../components/introduction'

const IndexPage = () => (
  <div className="background">
    <div className="app">
      <Layout>
        <Introduction/>
        <div className="projects">
          <div className="project-contents">
            <div className="project">
              <div className="project">
                <a href="http://bit.ly/bearfishgame">Bear Fish</a>
              </div>
              <div className="project">
                <a href="https://github.com/lnos/sbuxchart">Caffeine Visualizaiton</a>  
              </div>
              <div className="project">
                <a href="https://lnos.github.io">Incomplete old personal website</a>
              </div>
            </div>
          </div>     
         </div> 
      </Layout>
    </div>
  </div>
)
export default IndexPage
