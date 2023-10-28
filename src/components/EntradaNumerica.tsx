"use client"

import styles from "../styles/EntradaNumerica.module.css"

interface IEntradaNumerica {
  text: string
  value: number
  onChange: (newValue: number) => void
}

export default function EntradaNumerica({
  text,
  value,
  onChange,
}: IEntradaNumerica) {
  const inc = () => onChange(value + 1)
  const dec = () => onChange(value - 1)

  return (
    <div className={styles.entradaNumerica}>
      <span className={styles.text}>{text}</span>
      <span className={styles.value}>{value}</span>
      <div className={styles.butoes}>
        <button className={styles.btn} onClick={dec}>
          -
        </button>
        <button className={styles.btn} onClick={inc}>
          +
        </button>
      </div>
    </div>
  )
}
