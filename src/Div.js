import React from 'react';

const Div=()=>{
    return(
   <div id="carousel-with-lb" className="container-fluid carousel slide carousel-multi-item" data-ride="carousel"
   style={{marginTop:"10px", backgroundColor:'#E3E2DF'}} >
       
       <h3 style={{textAlign:'center', paddingTop:'25px', fontWeight:'bold'}}>Top Trending</h3>

       <p style={{textAlign:'center',fontSize:'18px'}}>Choose the best, wear the elegance</p>


      
    
        {/*Controls*/}
   {/* <div className="controls-top">
     <a className="btn-floating btn-secondary" href="#carousel-with-lb" data-slide="prev"><i className="fas fa-chevron-left" /></a>
     <a className="btn-floating btn-secondary" href="#carousel-with-lb" data-slide="next"><i className="fas fa-chevron-right" /></a>
   </div> */}
   {/*/.Controls*/}
 
 
 
   {/*Slides and lightbox*/}
   <div className="carousel-inner mdb-lightbox" role="listbox" style={{marginTop:"-80px"}} >
 
     <div id="mdb-lightbox-ui" />
     
     
     {/*First slide*/}
     <div className="row carousel-item active text-center " >
         
       <figure className="column d-md-inline-block overlay" style={{ margin:'100px 0 30px 82px'}}>
         <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(2).jpg" data-size="1600x1067">
        
       
             
        <img src="picCarousel11.jpg" className="img-fluid" style={{width:"50vh"}} />       
         
    

</a>
       </figure>
       
       <figure className="column d-md-inline-block " style={{ margin:'100px 0 0 5px'}}>
         <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(4).jpg" data-size="1600x1067">
        
         <img src="picCarousel10.jpg" className="img-fluid"  style={{width:"43vh" }} />
      
 

         
      
         </a>
       </figure>
       <figure className="column d-md-inline-block" style={{ margin:'100px 0 0 5px'}}>
         <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(6).jpg" data-size="1600x1067">
         <img src="picCarousel8.jpg" className="img-fluid"  style={{width:"43vh"}} />
      
      
         </a>
       </figure>
       <figure className="column d-md-inline-block" style={{ margin:'100px 0 30px 5px'}}>
         <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(10).jpg" data-size="1600x1067">
           <img src="picCarousel4.jpg" className="img-fluid"  style={{width:"50vh"}}/>
         </a>
       </figure>
       {/* <figure className="col-md-4 d-md-inline-block">
         <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(12).jpg" data-size="1600x1067">
           <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(12).jpg" className="img-fluid" />
         </a>
       </figure>
       <figure className="col-md-4 d-md-inline-block">
         <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg" data-size="1600x1067">
           <img src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(14).jpg" className="img-fluid" />
         </a>
       </figure> */}
     </div>
     {/*/.First slide*/}

     {/*Second slide*/}
     <div className="row carousel-item text-center">
    
       
     <figure className="column d-md-inline-block overlay" style={{ margin:'100px 0 30px 82px'}}>
         <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(25).jpg" data-size="1600x1067">
           <img src="picCarousel12.jpg" className="img-fluid" style={{width:"50vh"}} />
       
         </a>
       </figure>

       <figure className="column d-md-inline-block overlay" style={{ margin:'100px 0 0 5px'}}>
         <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(29).jpg" data-size="1600x1067">
           <img src="picCarousel3.jpg" className="img-fluid" style={{width:"43vh"}} />
         </a>
       </figure>

       <figure className="column d-md-inline-block overlay" style={{ margin:'100px 0 0 5px'}}>
         <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg" data-size="1600x1067">
           <img src="picCarousel6.jpg" className="img-fluid" style={{width:"43vh"}} />
         </a>
       </figure>

       <figure className="column d-md-inline-block overlay" style={{ margin:'100px 0 30px 5px'}}>
         <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg" data-size="1600x1067">
           <img src="picCarousel7.jpg" className="img-fluid" style={{width:"50vh"}} />
         </a>
       </figure>
    </div>
     {/*/.Second slide*/}

     {/*Third slide*/}
     <div className="row carousel-item text-center">
     <figure className="column d-md-inline-block overlay" style={{ margin:'100px 0 30px 82px'}}>
         <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(25).jpg" data-size="1600x1067">
           <img src="picCarousel9.jpg" className="img-fluid" style={{width:"50vh"}} />
         </a>
       </figure>

       <figure className="column d-md-inline-block overlay" style={{ margin:'100px 0 0 5px'}}>
         <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(29).jpg" data-size="1600x1067">
           <img src="picCarousel5.jpg" className="img-fluid" style={{width:"43vh"}} />
         </a>
       </figure>

       <figure className="column d-md-inline-block overlay" style={{ margin:'100px 0 0 5px'}}>
         <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(31).jpg" data-size="1600x1067">
           <img src="picCarousel2.jpg" className="img-fluid" style={{width:"43vh"}} />
         </a>
       </figure>

       <figure className="column d-md-inline-block overlay" style={{ margin:'100px 0 30px 5px'}}>
         <a href="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(32).jpg" data-size="1600x1067">
           <img src="picCarousel1.jpg" className="img-fluid" style={{width:"50vh"}} />
         </a>
       </figure>
     </div>
     {/*/.Third slide*/}
   </div>
   {/*/.Slides*/}
  
 </div>
 

    );
};
export default Div;