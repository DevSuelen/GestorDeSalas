import { useState } from "react";
import { Ways } from "./Routes";
import { createContext } from "react";


export const LoginContext = createContext(null)

const App = () => {

  const [logado, setLogado] = useState(false);

  return(
    <>
      <LoginContext.Provider value={{logado, setLogado}}>
        <Ways /> 
      </LoginContext.Provider>
    </>
  );
}

export default App;