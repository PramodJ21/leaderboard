import React, { useLayoutEffect, useRef } from 'react';
import styles from './ProfileCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const ProfileCard = (props) => {

    return (props.trigger ? (
        <div className={styles.profileCard}>
            
            
            <div className={styles.cardImage}>
            <div className={styles.cancel}>
            <FontAwesomeIcon onClick={() => { props.setTrigger(false) }} icon={faXmark} />
            </div> 
            
            <img src={props.data.avatar} />
            <div className={styles.details}>
            {/* <div className={styles.realRank}>
                <div className={styles.inner}>
                        <p>1</p>
                </div>
            </div> */}
            <div className={styles.heading}>
                    <div>
                        <h1>{props.data.handle}</h1>
                    </div>
                </div>
            </div>
                
            </div>
            <div className={styles.cardContent}>
                
                <div className={styles.cardHistory}>
                    <div className={styles.col1}>
                        <div className={styles.country}>
                            <h1>Country</h1>
                            <p>{props.data.country ? props.data.country : "-"}</p>
                        </div>
                        <div className={styles.maxRating}>
                            <h1>Max Rating</h1>
                            <p>{props.data.maxRating}</p>
                        </div>
                    </div>
                    <div className={styles.col2}>
                        <div className={styles.city}>
                            <h1>City</h1>
                            <p>{props.data.city ? props.data.city : "-"}</p>
                        </div>
                        <div className={styles.maxRank}>
                            <h1>Max Rank</h1>
                            <p>{props.data.maxRank}</p>
                        </div>
                    </div>
                </div>
                <div className={styles.cardCurrent}>
                    <div className={styles.currentRank}>
                        <div>
                            <p>Rank</p>
                            <h1>{props.data.rank}</h1>
                        </div>
                    </div>
                    <div className={styles.currentRating}>
                        <div>
                            <p>Rating</p>
                            <h1>{props.data.rating}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : ""
  );
}

export default ProfileCard;
