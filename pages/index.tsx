import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero';
import NavBar from '../components/navbar';
import styles from '../styles/Home.module.css';
import Modal from '../components/Modal';

const Home: NextPage = () => {
  return (
    < >
		<Head>
			<title>Loyalty program Aerolab</title>
			<meta name="description" content="redeem products with your points" />
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<main  className={styles.main} >
			<NavBar/>
			<Modal/>
			<Hero/>
		</main>
		
    </>
  );
};

export default Home;

