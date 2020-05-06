import React from 'react';
// Components 
import Layout from '../components/layout/layout';
// Hooks
import useHome from '../hooks/useHome';

export default () => {
  
  const { name, content, image } = useHome()

  return (
    <Layout>

      <main className="container">
        <section className="txt-a-c">
          <h1>{ name }</h1>
          <p>{ content }</p>
        </section>
      </main>

    </Layout>
  );
};