import type { NextPage, GetServerSideProps  } from 'next';
import Head from 'next/head';
import Hero from '../components/Hero';
import NavBar from '../components/navbar';
import styles from '../styles/Home.module.css';
import Modal from '../components/Modal';
import { useState } from 'react';
import userService from '../services/user';
import { User } from '../types';


export const getServerSideProps: GetServerSideProps = async () => {
	const user :  User | unknown =  await userService.getUser("NEXT_PUBLIC_ENV_TOKEN"); 
	return {
		props: {
			user
		}
	};
};


const Home: NextPage | React.ElementType  = (props: {user : User} ) => {
	console.log(props.user);
	const {name, points } = props.user;
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
				<NavBar  handleClick={handleClick} visible={visible} points={points} />
				<Modal  visible={visible}   name={name} />
				<Hero/>
			</main>
			
		</>
	);
};

export default Home;

