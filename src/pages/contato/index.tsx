import {Link} from 'react-router-dom'
import ButtonFatec from "../../components/buttonfatec/ButtonFatec"
import InputFatec from '../../components/inputfatec'

export default function Contato() {
    return (
        <>
            <h1>Entre em Contato</h1>
            <hr />
            <InputFatec
                placeholder="Digite seu nome"
                defaultValue="" type="text" /><br />
            <InputFatec
                placeholder="Digite seu email"
                defaultValue="" type="email" /><br />
            <InputFatec
                placeholder="Digite seu telefone"
                defaultValue="" type="text" /><br />
            <ButtonFatec label="Fatec: Enviar mensagem" type="button" />
            <hr />
            <Link to="/">Página Inicial</Link>
        </>
    )
}