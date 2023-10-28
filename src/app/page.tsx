"use client"

import Cartao from "@/components/Cartao"
import styles from "../styles/Formulario.module.css"
import Link from "next/link"
import EntradaNumerica from "@/components/EntradaNumerica"
import { useState } from "react"

export default function Form() {
  const [qtePortas, setQtePortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="Qtde de Portas?"
            value={qtePortas}
            onChange={(novaQtde) => setQtePortas(novaQtde)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <EntradaNumerica
            text="Qtde de Portas?"
            value={comPresente}
            onChange={(novaPortaComPresente) =>
              setComPresente(novaPortaComPresente)
            }
          />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link
            className={styles.link}
            href={`/jogo/${qtePortas}/${comPresente}`}
          >
            <h2>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
