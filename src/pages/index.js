import React from "react"
import { Link } from 'gatsby'

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
    return (
        <Layout>
            <div>
                <Head  title="Home"/>
                <h1>Hello</h1>
                <h2>All about me</h2>
                <p>Gatbsy internal link method <a href="https://twitter.com" target="_blank">Twitter</a></p>
                <p>External link method: <Link to="/contact">Contact me</Link></p>
            </div>
        </Layout>
    )
}

export default IndexPage;
