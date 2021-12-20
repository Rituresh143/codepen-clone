import React, { useState, useEffect } from "react";
import Editor from "./Editor";
import useLocalStorage  from "../hooks/useLocalStorage";

function App() {
  const [html,setHtml] = useLocalStorage ("html","")
  const [Css,setcss] = useLocalStorage ("Css","")
  const [js,setJs] = useLocalStorage ("js","")
  const [srcDoc,setSrcDoc] = useState("")


  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
    <html>
      <body>${html}</body>
      <style>${Css}</style>
      <script>${js}</script>
    </html>
      `)   

    },250)

    return () => clearTimeout(timeout)
   
  }, [html,Css,js])

  

  return (
   <>
   <div className="pane top-pane">
     <Editor 
     language="xml" 
     displayName="HTML" 
     value={html}
     onChange={setHtml} 
     />
     <Editor 
     language="css" 
     displayName="CSS" 
     value={Css}
     onChange={setcss} 
     />
     <Editor 
     language="javascript" 
     displayName="JS" 
     value={js}
     onChange={setJs} 
     />
   </div>
   <div className="pane">
    <iframe
    srcDoc={srcDoc}
       title="output"
       sandbox="allow-scripts" 
       frameBorder="0"
       width="100%"
       height="100%"
       />
   </div>
   </>
  );
}

export default App;
