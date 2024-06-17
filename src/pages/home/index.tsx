import {Link} from 'react-router-dom'
import Layout from '../../components/layout'

export default function Home() {
    return (
        <Layout>
        <>
            <h1>Breve apresentação do projeto</h1>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptate earum laboriosam, laudantium ex enim optio ad quas cum ipsa vero quisquam molestias temporibus consequatur iusto in sequi incidunt culpa nulla.
            Asperiores vero veniam ad natus quod provident incidunt, consequatur tempore distinctio dignissimos quas neque aut dolor accusamus adipisci blanditiis consectetur assumenda vitae.</p>
            <hr />
            <Link to="/sobre">Sobre</Link><br />
            <Link to="/contato">Contato</Link><br />
            <Link to="/tarefas">Tarefas</Link><br />
        </>
        </Layout>
    )
}