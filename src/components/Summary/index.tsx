import { Container } from "./styles";
import imgIncome from '../../assets/income.svg'
import imgOutcome from '../../assets/outcome.svg'
import imgTotal from '../../assets/total.svg'

export function Summary() {
    return (
        <Container>
            
                <div>
                    <header>
                        <p>Entrada</p>
                        <img src={imgIncome} alt="Seta para cima" />
                    </header>
                    <strong>R$1000,00</strong>
                </div>
                <div>
                    <header>
                        <p>Saída</p>
                        <img src={imgOutcome} alt="Seta para baixo" />
                    </header>
                    <strong> -R$500,00</strong>
                </div>
                <div className="highlight-background">
                    <header>
                        <p>Total</p>
                        <img src={imgTotal} alt="Seta para cima" />
                    </header>
                    <strong>R$500,00</strong>
                </div>
            
        </Container>
    );
}