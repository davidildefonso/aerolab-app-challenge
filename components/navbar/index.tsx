import Link from "next/link";
import styles from '../../styles/NavBar.module.css';

const NavBar = () => {

	return (
		<nav className= {styles.navBar}>	
			<Link  href="/" passHref>				
				<div>
					<img src="/assets/img/aerolab-logo.svg" alt="aerolab logo" ></img>
					<span  className={styles.logoText} >aerolab</span>
				</div>			
			</Link>
			<div className={styles.navMenuLabel} >
				<div  className={styles.navMenuLogoDiv} >
					<img src="/assets/img/aerolab-logo1.svg" alt="aerolab logo"></img>
				</div>
				<div>
					3000
				</div>
				<div>
					<img src="/assets/img/chevron.svg" alt="chevron icon"></img>
				</div>

			</div>
		</nav>
	);
};


export default NavBar;