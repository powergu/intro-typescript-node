import styles from './index.module.css'
import { Input } from '@chakra-ui/react'

interface Props {
    type: 'text' | 'email'| 'number'
    placeholder: string
    defaultValue: string
}

export default function InputFatec({type, placeholder, defaultValue}:Props){
    return(
        <Input my={1} //margem em cima e embaixo
        className={styles.inputFatec} 
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}/>
    )
}