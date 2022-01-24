
import Link from "next/link";
import { MouseEventHandler } from "react";
import styles from '../../styles/NavBar.module.css';

const NavBar = (props: {handleClick: MouseEventHandler<HTMLDivElement> | undefined,  visible: boolean , points: number }) => {

	return (
		<nav className= {styles.navBar}>	
			<Link  href="/" passHref>				
				<div>
					<img src="/assets/img/aerolab-logo.svg" alt="aerolab logo" role="navbar-logo" ></img>
					<span  className={styles.logoText} >aerolab</span>
				</div>			
			</Link>
			<div className={styles.navMenuLabel}  onClick={props.handleClick} >
				<div  className={styles.navMenuLogoDiv} >
					<img src="/assets/img/aerolab-logo1.svg" alt="navbar-points-logo" role="navbar-points-logo"></img>
				</div>
				<div>
					{props.points}
				</div>
				<div className={   `${props.visible ? "" : "rotate"}`  }>
					<img src="/assets/img/chevron.svg" alt="chevron icon"></img>
				</div>

			</div>		
		</nav>
	);
};


export default NavBar;