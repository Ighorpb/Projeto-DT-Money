import logoImg from '../../assets/logo.svg' // Importanto a logo da aplicação
import { Container, Content } from './styles' 

interface HeaderProps { // Declaração de valor das PROPRIEDADES que irá a ser recebido pela função.
    onOpenNewTransactionModal: () => void; // onOpenNewTransactionModal é uma FUNÇÃO que vai receber vazio.
}

export function Header( {onOpenNewTransactionModal}: HeaderProps) { // Recebendo as PROPS

   

    return (

        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button type="button" onClick={onOpenNewTransactionModal}> {/* Button de ativação de função */}
                    Nova Transação
                </button>

                
            </Content>
        </Container>

    )
}