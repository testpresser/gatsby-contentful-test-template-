import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head';

const NotFound = () => {
    return (
        <Layout>
            <Head title="404 page" />
            <h1>Page not Found</h1>
            <p><Link tp="/">Head home</Link></p>
        </Layout>
    )
}

export default NotFound