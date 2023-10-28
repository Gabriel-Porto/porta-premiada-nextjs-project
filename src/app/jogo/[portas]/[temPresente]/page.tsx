"use client"

import Porta from "@/components/Porta"
import { atualizarPortas, criarPortas } from "@/functions/portas"
import { useState, useEffect, useMemo } from "react"
import styles from "../../../../styles/Jogo.module.css"
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation"
import PortaModel from "@/model/porta"

export default function Jogo() {
  const pathname = usePathname()

  const [portas, setPortas] = useState<PortaModel[]>([])
  const [valido, setValido] = useState(false)

  const regex = useMemo(() => /\/(\d+)\/(\d+)/, [])

  useEffect(() => {
    const resultado = regex.exec(pathname)
    if (resultado) {
      const portas = +resultado[1]
      const temPresente = +resultado[2]
      const qtdePortasValida = portas >= 3 && portas <= 100
      const temPresenteValido = temPresente >= 1 && temPresente <= portas
      setValido(qtdePortasValida && temPresenteValido)
    }
  }, [pathname, regex])

  useEffect(() => {
    const resultado = regex.exec(pathname)

    if (resultado) {
      setPortas(criarPortas(+resultado[1], +resultado[2]))
    }
  }, [pathname, regex])

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      )
    })
  }

  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {valido ? renderizarPortas() : <h2>Valores inválidos!</h2>}
      </div>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar jogo</button>
        </Link>
      </div>
    </div>
  )
}
