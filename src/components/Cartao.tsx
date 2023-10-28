import styles from "../styles/Cartao.module.css"

interface ICartao {
  bgcolor?: string
  children?: any
}

export default function Cartao({ bgcolor, children }: ICartao) {
  return (
    <div
      className={styles.cartao}
      style={{ backgroundColor: bgcolor ?? "#fff" }}
    >
      {children}
    </div>
  )
}
