// Componente MAIN que vai receber os outros componentes e envia-los para o App.tsx


import { Summary } from "../Summary";                    // Importando o componente 'Summary'
import { TransactiosTable } from "../TransactionsTable"; // Importando o componente 'TransactiosTable'
import { Container } from "./styles";                    // Importando o componente 'Container' (Arquivo de estilização do Dashboard)

export function Dashboard() {                            // Exportando a função Dashboard que está recebendo seus componentes.
  return (
    <Container>
      <Summary />
      <TransactiosTable />
    </Container>
  );
}