import React from 'react';
import Search from '../features/search/search';
import StopCard from '../features/stopCard/stopCard';
import styles from './home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.stopCard}>
        <StopCard />
      </div>
    </div>
  );
};
export default Home;
