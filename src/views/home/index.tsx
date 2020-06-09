import React from 'react';

import Layout from '~/components/Layout';
import { Navbar } from './Navbar';
import { Landing } from './Landing';
import { Customization } from './Customization';
import { Community } from './Community';
import { Download } from './Download';

export default () => {
  return (
    <Layout>
      <Navbar />
      <Landing />
      <Customization />
      <Community />
      <Download />
    </Layout>
  );
};
