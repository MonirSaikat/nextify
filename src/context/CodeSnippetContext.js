"use client";
import { createContext } from "react";

export const CodeSnippetContext = createContext();

const CodeSnippetProvider = () => {
  const [codeSnippets, setCodeSnippets] = useState();

  const values = {
    setCodeSnippets
  };
  
  return(
    <CodeSnippetContext.Provider value={values}>
      
    </CodeSnippetContext.Provider>
  );
}