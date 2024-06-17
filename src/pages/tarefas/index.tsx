import styles from './tarefas.module.css'
import { Link } from 'react-router-dom'
import { Input, Stack, Checkbox, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

interface Tarefa {
    id: number
    title: string
    completed: boolean
}

export default function Tarefas() {
    const [tarefas, setTarefas] = useState<Tarefa[]>([])
    const [novaTarefa, setNovaTarefa] = useState('')
    const [isCompleted, setIsCompleted] = useState(false)

    function atualizarTarefas(){
        fetch('https://workshop-node-ts-intro-exemplo1.onrender.com/task')
        .then((dados) => dados.json())
        .then((tarefas) => setTarefas(tarefas))
    }

    useEffect(() => {
        atualizarTarefas()
    },[])

    function inserirTarefa() {
        if (!novaTarefa) return;
        const tarefa = { title: novaTarefa, completed: isCompleted };
        fetch('https://workshop-node-ts-intro-exemplo1.onrender.com/task', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(tarefa),
        })
        .then(response => response.json())
        .then(() => {
            atualizarTarefas();
            setNovaTarefa('');
            setIsCompleted(false);
        });
    }

    function apagarTarefa(id) {
        fetch(`https://workshop-node-ts-intro-exemplo1.onrender.com/task/${id}`, {
            method: 'DELETE',
        })
        .then(() => atualizarTarefas());
    }

    return (
        <>
            <h1>Lista de Tarefas</h1>
            <h3>Inserir nova tarefa</h3>
            <Input 
                className={styles.tarefas} 
                value={novaTarefa}
                onChange={(e) => setNovaTarefa(e.target.value)}
                placeholder='Digite o título da task' 
            />
            <Checkbox 
                isChecked={isCompleted}
                onChange={(e) => setIsCompleted(e.target.checked)}
            >
                Realizada?
            </Checkbox>
            <Button colorScheme='blue' size='sm' onClick={inserirTarefa}>Inserir</Button>
            {
                tarefas.map(tarefa => (
                    <div key={tarefa.id}>
                        {tarefa.title}
                        <Stack direction='row' spacing={4}>
                            <Button colorScheme={tarefa.completed ? 'green' : 'red'}>
                                {tarefa.completed ? 'Concluída' : 'Pendente'}
                            </Button>
                            <Button colorScheme='red' onClick={() => apagarTarefa(tarefa.id)}>
                                Excluir
                            </Button>
                        </Stack>
                    </div>
                ))
            }
            <Link to="/">Página Inicial</Link>        
        </>
    )
}