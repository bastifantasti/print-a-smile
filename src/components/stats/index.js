import React from 'react';
import './_stats.scss';
import { StaticQuery, graphql } from 'gatsby';

const Stats = () => (
  <StaticQuery
    query={graphql`
    query {
  Stats {
    getStats(id: "stats") {
   earned
   flats
   paper
   prints
  }
  }
}
  
  
  
  
  
    `}
    render={data => {
      if (!data) {
        return <p>Loading…</p>
      }
      console.log('DATA',data.Stats.getStats)
      const obj = data.Stats.getStats
      const spend = obj.earned / 100

    return(


            <section className="features" id="features">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="features-title">#STATS</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                          <p>Money spend: {spend} €</p>
                          <p>Flats print: {obj.prints}</p>
                          <p>Paperroll used: {obj.paper}</p>
                          <p>Flats in DB: {obj.flats}</p>
                        </div>
                    </div>
                </div>
            </section>
        ) } }/>
);

export default Stats;
