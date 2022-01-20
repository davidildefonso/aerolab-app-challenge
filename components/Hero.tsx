import Link from "next/link";
import styles from '../styles/Hero.module.css';

const Hero = () => {

	return (
		<section className= {styles.section}>	
			<div className={styles.titleWrap}>				
				<p className={styles.firstLine} >EXPLORE THE</p>
				<p className={styles.secondLine} >TECH</p>			
				<p className={styles.thirdLine}>ZONE</p>
				<p className={styles.fourthLine} >Here you&#39;ll be able to exchange all of your hard-earned Aeropoints and exchange them for cool tech</p>
				<Link  href="#products-section" passHref>
					<div className={styles.heroButton}>
						<span  className={styles.buttonText} >VIEW ALL PRODUCTS</span>
						<span className={styles.buttonIcon} ><img  src="/assets/img/Vector.svg" alt="arrow down" /></span>
					</div>
				</Link>
			</div>
			<div className={styles.sectionRight}>
				<div className={styles.heroImageContainer}>
					<div className={styles.imageWrap} >	
						<img  className={styles.image} src="/assets/img/Saly-19.svg" alt="hero image"></img>						
					</div>
					<div className={styles.imageBg} >						
					</div>	
				</div>				
			</div>
			
		</section>
	);
};


export default Hero;