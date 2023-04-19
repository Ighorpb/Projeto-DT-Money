import { createContext, useState, useEffect, ReactNode, useContext } from 'react'
import { api } from '../services/api'


export const TransactionContext = createContext<Transaction[]>([])

interface Transaction {
    id: number;
    title: string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

interface TransactionProviderProps {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transaction[];
    createTransaction: (transactions: TransactionInput) => Promise<void>;
    deleteTransaction: (id: number) => Promise<void>;

}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);


export function TransactionsProvider({ children }: TransactionProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])




    useEffect(() => {
        getTransaction()

    }, []);

    async function getTransaction() {
        try {
        const transactions = await api.get('transactions')
        setTransactions(transactions.data)
      

        } catch (err) {
            console.log(err)
        }

    }

    async function deleteTransaction(id: number) {
        try {
            await api.delete(`transactions/${id}`)

            await getTransaction()
        } catch (err) {
            console.log(err)
        }
    }

    async function createTransaction(transactionInput: TransactionInput) {
        const response = await api.post('transactions', {
            ...transactionInput,
            createdAt: new Date()

        })

        const transaction = response.data;

        setTransactions([
            ...transactions,
            transaction,
        ]);

    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction, deleteTransaction }}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransaction() {
    const context = useContext(TransactionsContext)

    return context
}

