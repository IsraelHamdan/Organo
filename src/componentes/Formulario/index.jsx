import { useState } from 'react'
import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './formulario.css'

const Formulario = ({aoCadastrar, times, cadastrarTime}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSubmeter = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario-container">
            {/*criando um novo colaborador*/}
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite seu nome '
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label='Cargo' 
                    placeholder='Digite seu cargo '
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label='Imagem' 
                    placeholder='Informe o endereço da imagem '
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa 
                    obrigatorio={true}
                    label='Times'
                    items={times} 
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao texto='Criar card' />
            </form>
            {/*criando um novo time*/}
            <form className="formulario" onSubmit={(evento) => {evento.preventDefault(); cadastrarTime({nome: nomeTime, cor:corTime})} }>
                <h2>Preencha os dados para criar um novo time.</h2>
                <CampoTexto
                    obrigatorio
                    label='Nome'
                    placeholder='Digite o nome do time '
                    valor={nome}
                    aoAlterado={valor => setNomeTime(valor)}
                />
                <CampoTexto
                    obrigatorio
                    label='Cargo' 
                    placeholder='Digite a cor do time '
                    valor={cargo}
                    aoAlterado={valor => setCorTime(valor)}
                />
                <Botao texto='Criar time' />
            </form>
        </section>
    )
}

export default Formulario