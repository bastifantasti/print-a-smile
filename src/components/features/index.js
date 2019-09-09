import React from 'react';
import './_features.scss';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';



const Features = () => (
  <StaticQuery
    query={graphql`
        query {
  Content {
    getContent(id: "123") {
    intro
    outtro
    video
    description
   why
  }
  }
}
  
  
  
  
  
    `}
    render={data => {
      if (!data.Content) {
        return <p>Loading…</p>
      }
      const divStyle = {
        padding:'56.25% 0 0 0',
        position:'relative'
      }
      const iFrameStyle = {
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
        height:'100%'
      }
      const obj = data.Content.getContent
      console.log(obj)
      const videoURL = 'https://player.vimeo.com/video/'+obj.video

    return(


            <section className="features" id="features">
              <Helmet>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </Helmet>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="features-title">What it is?</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                          <p>{obj.intro}</p>
                          <div style={divStyle}>
                          <iframe
                            src={videoURL}
                            style={iFrameStyle}
                            frameBorder="0" allow="autoplay; fullscreen" allowFullScreen
                          />
                          </div>

                          <p>{obj.outtro}</p>

                        </div>
                    </div>
                </div>
            </section>
        ) } }/>
);

export default Features;
