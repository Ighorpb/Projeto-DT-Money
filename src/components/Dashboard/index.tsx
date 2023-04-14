import { Summary } from "../Summary";
import { TransactiosTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactiosTable />
    </Container>
  );
}