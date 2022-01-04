import React from 'react'
import Nav from './Nav'
import Main from './Main'
import Comment from './comments'



const App = () => {
  return (
   <div>
     <Nav />
     <Main />
     <Comment author="Mary Smith"/>
     <Comment author="Tony Armstrong"/>
     <Comment author="Julian Slater"/>
   </div> 
  );
}

export default App;
