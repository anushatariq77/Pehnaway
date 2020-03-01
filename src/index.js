import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './NavBar';
import  TopNav from './TopNav';
import Carousel from './Carousel';
import Div from './Div';
import Gallery from './Gallery';
import Note from './Note';
import Footer from './Footer';


const App=()=>{
return(
    <div>
<NavBar/>
    <TopNav/>
         <Carousel/>
         <Div/>
         <Gallery/>
         <Note/>
         <Footer/>
     

         
       
    </div>
       
  

    
);
};

ReactDOM.render( <App/>,document.querySelector('#root')
);
   


