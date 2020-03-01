 //import react libraries
 import React from 'react';


 const TopNav=()=>{
     return(
  <div className="pos-f-t">
    <div className="collapse" id="navbarToggleExternalContent">
      <div className=" p-4"  style={{backgroundColor:'#E3E2DF'}} >
        {/* <h5 className="text-white h4" style={{marginLeft: '150px'}}>Collapsed content</h5> */}
        <span className="text-muted" style={{marginLeft: '220px',letterSpacing:'2px',fontSize:'15px',color:'black',fontWeight:'bold'}}><a href="#" style={{color:'black'}}>NEW ARRIVALS</a></span>
        <span className="text-muted" style={{marginLeft: '40px',letterSpacing:'2px',fontSize:'15px',position:'absolute',color:'black',fontWeight:'bold'}}><a href="#" style={{color:'black'}}>ACTIVEWEAR</a></span>
        <span className="text-muted" style={{marginLeft: '180px',letterSpacing:'2px',fontSize:'15px',position:'absolute',color:'black',fontWeight:'bold'}}><a href="#" style={{color:'black'}}>UNSTITCHED</a></span>
        <span className="text-muted" style={{marginLeft: '320px',letterSpacing:'2px',fontSize:'15px',position:'absolute',color:'black',fontWeight:'bold'}}><a href="#" style={{color:'black'}}>KURTI</a></span>
        <span className="text-muted" style={{marginLeft: '400px',letterSpacing:'2px',fontSize:'15px',position:'absolute',color:'black',fontWeight:'bold'}}><a href="#" style={{color:'black'}}>FANCY</a></span>
        <div style={{marginLeft: '1000px', marginTop: '-40px'}}>
          <i className="huge user icon" style={{color: 'black'}} />
          <i className="huge opencart icon" style={{color: 'Black'}} />
        </div>
      </div>
    </div>
  
     
     
    <nav className="navbar navbar-dark " style={{backgroundColor:'#E3E2DF'}}>
         <button  className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation" style={{marginLeft: '80px'}}>
           <span className="navbar-toggler-icon " />
         </button>
       </nav>
       </div>
     );
 
 };
 export default TopNav;
 