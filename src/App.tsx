import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal"
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions"

Modal.setAppElement('#root');



function App() {

  const [isNewTrasactionModelOpen, setIsNewTrasactionModel] = useState(false); // Setando o estado.


  function handleOpenNewTrasactionModel() {
    setIsNewTrasactionModel(true);
  }

  function handleCloseNewTrasactionModel() {
    setIsNewTrasactionModel(false);
  }

  return (
    <TransactionsProvider>


      <Header onOpenNewTransactionModal={handleOpenNewTrasactionModel} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTrasactionModelOpen}
        onRequestClose={handleCloseNewTrasactionModel}
      />

      <GlobalStyle />

    </TransactionsProvider>
  );
}

export default App;
