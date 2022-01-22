import styles from '../styles/Modal.module.css';

const Modal = () => {

	return (
		<div className= {styles.container}>	
			<div className={styles.header}>				
				<p  >ADD BALANCE</p>
			</div>
			<div className={styles.imageSection}>
				<div className={styles.imageWrapper} >
					<div  className={styles.subSection} >
						<div className={styles.subSectionTitle}  >Aerocard</div>
						<div  className={styles.imageContainer} >
							<img  className={styles.sectionImage} src="/assets/img/logo.svg" alt="hero image"/>
						</div>
					</div>
					<div  className={styles.subSection}>
						<div>John Kite</div>
						<div>07/23</div>
					</div>
				</div>
								
			</div>
			<div className={styles.selection}>				
				<div className={styles.item}>				
					<span className={styles.item} >1000</span>
				</div>
				<div className={styles.item}>				
					<span className={styles.itemSelected} >5000</span>
				</div>
				<div className={styles.item}>				
					<span className={styles.item1} >7500</span>
				</div>
			</div>
			<div className={styles.action}>				
				<button className={styles.button} >
					<div>
						<img  className={styles.buttonImage} src="/assets/img/logo.svg" alt="hero image"/>	
					</div>
					<div>
						<span>Add Points</span>
					</div>				
				</button>
			</div>
		</div>
	);
};


export default Modal;