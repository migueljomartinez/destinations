import React from 'react'
import Button from '../../Atoms/Button/Button'
import styles from './Header.module.sass'

const Header = ({}) => {
  return (
    <header className={styles.container}>
      <div className={styles.left}>
        <Button type="icon" active>
          +
        </Button>
      </div>
      <div className={styles.right}>
        <Button type="icon" active>
          List mode
        </Button>
        <Button type="icon">
          Block mode
        </Button>
      </div>
    </header>
  )
}

export default Header
