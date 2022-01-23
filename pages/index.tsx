import type { NextPage } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero';
import NavBar from '../components/navbar';
import styles from '../styles/Home.module.css';
import Modal from '../components/Modal';
import { useState } from 'react';

const Home: NextPage = () => {

	const [visible, setVisible] = useState(false);

	const handleClick = () => {
		setVisible(!visible);
	};


	return (
		< >
			<Head>
				<title>Loyalty program Aerolab</title>
				<meta name="description" content="redeem products with your points" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main  className={styles.main} >
				<NavBar  handleClick={handleClick} visible={visible}  />
				<Modal  visible={visible} />
				<Hero/>
			</main>
			
		</>
	);
};

export default Home;

