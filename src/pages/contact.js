import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <div>
                <h1>My contact details</h1>
                <p>email: <a href="mailto:michael.anthony.brimmer@gmail.com">michael.anthony.brimmer@gmail.com</a></p>
            </div>
        </Layout>
    )
}
export default ContactPage;
