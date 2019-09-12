import React from 'react';
import './_print.scss';
import { StaticQuery, graphql } from 'gatsby';

const Print = () => (
  <StaticQuery
    query={graphql`
    query {
  Print {
    getFlat(id: "latestPrint") {
   answer
   author
   flat
   votes
  }
  }
}
  
  
  
  
  
    `}
    render={data => {
      if (!data.Print.getFlat) {
        return <p>Loading…</p>
      }
      const obj = data.Print.getFlat

    return(


            <section className="features" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="features-title">#LATEST PRINT</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                          <p>Flat: {obj.flat}</p>
                          <p>Answer: {obj.answer}</p>
                          <p><i>by {obj.author} || {obj.votes} Votes</i></p>
                        </div>
                    </div>
                </div>
            </section>
        ) } }/>
);

export default Print;
