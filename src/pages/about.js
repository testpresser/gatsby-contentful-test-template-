import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const AboutPage = () => {
    return (
        <Layout>
            <div>
                <Head title="about"/>
                <h1>About my website</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, suscipit! Eius debitis incidunt excepturi, assumenda deserunt in, nam culpa laudantium repudiandae dolorum accusamus laborum voluptatem ex. Recusandae dolore repudiandae sequi.</p>
                <p><Link to="/contact">Contact Page</Link></p>
            </div>
        </Layout>
    )
}
export default AboutPage;