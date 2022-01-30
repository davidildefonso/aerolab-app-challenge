import styles from '../styles/Modal.module.css';
import { useState } from 'react';
import userService from '../services/user';
import redeemService from '../services/redeem';

const Modal = ( props: {visible : boolean, name: string}) => {

	const [points , setPoints]  = useState(0);

	const addPoints = async () => {
		if(points === 0){
			console.log("nothing");
			return;
		}
		


		const res =  await userService.addPoints( "" ,points);
		console.log(res);


		const test = await redeemService.redeem("", "5a0b35c1734d1d08bf7084c3");
		console.log(test);
	};
	

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
						<div   data-testid = "modal-username"   >{props.name}</div>
						<div>07/23</div>
					</div>
				</div>
								
			</div>
			<div className={styles.selection}>				
				<div onClick={() => setPoints(1000)}   data-testid="points-to-add-one" >				
					<span className={styles.item} >1000</span>
				</div>
				<div  onClick={() => setPoints(5000)}  data-testid="points-to-add-two" >				
					<span className={styles.itemSelected} >5000</span>
				</div>
				<div  onClick={() => setPoints(7500)} data-testid="points-to-add-three" >				
					<span className={styles.item} >7500</span>
				</div>
			</div>
			<div className={styles.action}>				
				<button className={styles.button} >
					<div  className={styles.imageContainer} >
						<img  className={styles.buttonImage} src="/assets/img/logo1.svg" alt="hero image"/>	
					</div>
					<div  onClick={addPoints} className={styles.buttonLabelWrap} >
						<span>Add Points</span>
					</div>				
				</button>
			</div>
		</div>
	);
};


export default Modal;