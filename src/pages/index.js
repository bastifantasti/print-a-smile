import React from 'react';
import Features from '../components/features';
import HowTo from '../components/how-to';
import Why from '../components/why';
import Stats from '../components/stats';
import LatestPrint from '../components/print';
import Layout from '../components/layout';

const IndexPage = () => (
    <Layout>
        <main>
            <Features />
            <HowTo />
          <LatestPrint />
          <Stats />
            <Why />
        </main>
    </Layout>
);

export default IndexPage;
