import React from 'react';
import './_why.scss';
import { StaticQuery, graphql } from 'gatsby';

const Features = () => (
  <StaticQuery
    query={graphql`
    query {
  Content {
    getContent(id: "123") {
   why
  }
  }
}
  
  
  
  
  
    `}
    render={data => {
      if (!data.Content) {
        return <p>Loading…</p>
      }
      console.log('DATA',data)

    return(


            <section className="features" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="features-title">Why?</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                          <p>{data.Content.getContent.why}</p>

                        </div>
                    </div>
                </div>
            </section>
        ) } }/>
);

export default Features;
