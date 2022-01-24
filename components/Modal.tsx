import styles from '../styles/Modal.module.css';

const Modal = ( props: {visible : boolean, name: string}) => {
	return (
		<div className= {`${styles.container}  nav-menu-container   ${props.visible ? "" : "hidden"}`}>	
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
						<div>{props.name} </div>
						<div>07/23</div>
					</div>
				</div>
								
			</div>
			<div className={styles.selection}>				
				<div >				
					<span className={styles.item} >1000</span>
				</div>
				<div >				
					<span className={styles.itemSelected} >5000</span>
				</div>
				<div >				
					<span className={styles.item} >7500</span>
				</div>
			</div>
			<div className={styles.action}>				
				<button className={styles.button} >
					<div  className={styles.imageContainer} >
						<img  className={styles.buttonImage} src="/assets/img/logo1.svg" alt="hero image"/>	
					</div>
					<div className={styles.buttonLabelWrap} >
						<span>Add Points</span>
					</div>				
				</button>
			</div>
		</div>
	);
};


export default Modal;