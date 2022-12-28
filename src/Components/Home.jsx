import React from 'react';
import styles from './Home.module.css';
import Feed from './Feed/Feed';
import Head from './Helper/Head';

const Home = () => {
  return (
    <section className="container mainContainer" style={styles.home}>
      <Head title="Fotos" description="Home do site Dogs, com feed de fotos" />
      <Feed />
    </section>
  );
};

export default Home;
