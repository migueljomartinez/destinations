import React from 'react'
import styles from './DestinationInfo.module.sass'
import norwayImage from '../../../images/norway2.jpg'

const DestinationInfo = () => {
  return (
    <div className={styles.container}>
      <p>03</p>
      <h1>Norway</h1>
      <p>
        officially the Kingdom of Norway, is a Nordic country in Northwestern Europe whose core territory comprises the western and northernmost portion of the Scandinavian Peninsula; the remote island of Jan Mayen and the archipelago of Svalbard are also part of the Kingdom of Norway.[note 1] The Antarctic Peter I Island and the sub-Antarctic Bouvet Island are dependent territories and thus not considered part of the kingdom.
      </p>
      <figure className={styles.imageContainer}>
        <img src={norwayImage} className={styles.image} alt="Norway" />
      </figure>
    </div>
  )
}

export default DestinationInfo
