import styled from "styled-components";
import Landing from "./pages/Landing";

const Button = styled.button`
background: red;
color: white;
font-size: 2rem;
` 
function App() {
  return (
    <div>
    <Button>click me</Button>
      <Landing />
    </div>
  );
}

export default App;
