import PortaModel from "@/model/porta"
import styles from "../styles/Porta.module.css"
import Presente from "../components/Presente"

interface PortaProps {
  value: PortaModel
  onChange: (novaPorta: PortaModel) => void
}

export default function Porta(props: PortaProps) {
  const porta = props.value
  const selecionada =
    porta.selecionada && !porta.aberta ? styles.selecionada : ""

  const alterarSelecao = (e: any) => props.onChange(porta.alterarSelecao())

  const abrir = (e: any) => {
    e.stopPropagation()
    props.onChange(porta.abrir())
  }

  function renderizarPortaFechada() {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.numero}</div>
        <div className={styles.macaneta} onClick={abrir}></div>
      </div>
    )
  }

  return (
    <div className={styles.area} onClick={alterarSelecao}>
      <div className={`${styles.estrutura} ${selecionada}`}>
        {porta.fechada ? 
          renderizarPortaFechada() : 
          porta.temPresente ? <Presente /> : false
        }
      </div>
      <div className={styles.chao}></div>
    </div>
  )
}
