import React from 'react';
import Nav from"./container/nav"
const liste=[
    {title:"Home"},
    {title:"Services"},
    {title:"Contact"}
   
]
 function App() {
  return (
      <div >
                 <Nav liste={liste }/>
      </div>
  )
}
export default App;
