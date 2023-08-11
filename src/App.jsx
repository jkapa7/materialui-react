import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import {
  Container,
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableCell,
  Button,
} from "@mui/material";
import axios from "axios";
import "./App.css";

function App() {
  const [users, setUsers] = useState();
  const [count, setCount] = useState(0);

  const action = async () => {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(users.data);
  };

  useEffect(() => {
    action();
  }, []);

  return (
    <Container>
      <div>
        <a href="https://vitejs.dev">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div className="card">
        <Button
          color="primary"
          variant="contained"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <TableContainer>
        <Table>
          <TableBody>
            {users?.map((user) => (
              <TableRow key={user.id}>
                <TableCell className="user-cell">
                  <div className="user-info">
                    <div>
                      <h4>{user.name}</h4>
                      <h4>{user.website}</h4>
                    </div>
                    <div className="user-button">
                      <Button variant="contained">Mirar user</Button>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default App;
