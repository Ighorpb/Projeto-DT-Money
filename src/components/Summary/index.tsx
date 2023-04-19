import { Container } from "./styles";
import imgIncome from '../../assets/income.svg'
import imgOutcome from '../../assets/outcome.svg'
import imgTotal from '../../assets/total.svg'
import { useTransaction } from "../../hooks/useTransactions";

export function Summary() {

    const { transactions } = useTransaction();


    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'deposit') {
            acc.deposit += transaction.amount;
            acc.total += transaction.amount;
        } else {
            acc.withdraws += transaction.amount;
            acc.total -= transaction.amount;
        }

        return acc;
    }, {
        deposit: 0,
        withdraws: 0,
        total: 0,
    })


    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={imgIncome} alt="Seta para cima" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.deposit)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saída</p>
                    <img src={imgOutcome} alt="Seta para baixo" />
                </header>
                <strong>
                    -
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div style={{
                backgroundColor: summary.total < 0 ? 'red' : 'green', 
            }}>
                <header>
                    <p>Total</p>
                    <img src={imgTotal} alt="Seta para cima" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>

            

        </Container>
    );
}