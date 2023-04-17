import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import  Modal from "react-modal"
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

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
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTrasactionModel}/>

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTrasactionModelOpen}
        onRequestClose={handleCloseNewTrasactionModel}
      />

      <GlobalStyle />

    </>
  );
}

export default App;
