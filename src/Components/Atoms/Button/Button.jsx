import React from 'react'
import styles from './Button.module.sass'

function classnames(classes) {
  return Object
    .keys(classes)
    .reduce((previousValue, currentValue) => {
      const currentClassBoolean = classes[currentValue]

      if (currentClassBoolean) return `${previousValue} ${currentValue}`
      else return previousValue
    }, '')
}

const Button = ({ children, type, active }) => {
  const containerClass = classnames({
    [styles.button]: type !== 'icon',
    [styles.withIcon]: type === 'icon',
    [styles.active]: !!active
  })

  console.log('containerClass', containerClass)

  return (
    <button className={containerClass}>
      {children}
    </button>
  )
}

export default Button
