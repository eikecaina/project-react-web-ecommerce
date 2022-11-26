import Texto from '../textos';
import Listasuspensa from '../listasuspensa';
import './formulario.css';
import Botao from '../botao';


const Formulario = () => {

    const planos = [
        'Básico',
        'Avançado',
        'Premium',
        'Premium Plus'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault();
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para entrarmos em contato com você</h2>
                <Texto obrigatorio={true} label="Nome*" placeholder="Informe o seu nome" />
                <Texto obrigatorio={true} label="Cidade*" placeholder="Informe a sua cidade" />
                <Texto obrigatorio={true} label="CPF/CNPJ*" placeholder="Informe o seu CPF ou CNPJ" />
                <Listasuspensa label="Plano" itens={planos} />
                <Botao>
                    Enviar
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;