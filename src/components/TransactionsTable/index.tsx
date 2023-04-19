import { Container } from "./styles";
import { useTransaction } from "../../hooks/useTransactions";
import imgRemove from "../../assets/remover.svg"




export function TransactiosTable() {
    const { transactions, deleteTransaction } = useTransaction()



    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                        <th>Excluir</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className={transaction.type}>
                                    {new Intl.NumberFormat('pt-BR', {
                                        style: 'currency',
                                        currency: 'BRL'
                                    }).format(transaction.amount)}
                                </td>
                                <td>{transaction.category}</td>
                                <td>
                                    {new Intl.DateTimeFormat('pt-BR').format(
                                        new Date(transaction.createdAt)
                                    )}
                                </td>

                                <td>
                                    <button onClick={() => {
                                        deleteTransaction(transaction.id)
                                    }}>
                                        <img src={imgRemove} alt="Lixeira" />
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Container>
    );
}
