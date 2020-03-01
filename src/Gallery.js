import React from 'react';


const Gallery=()=>{
return(
    <div style={{backgroundColor:"#E3AFBC"}}>
        <h3 style={{textAlign:"center",letterSpacing:'1px',fontWeight:'initial' ,color:"white", paddingTop:'25px'}}>GALLERY</h3>
        <hr style={{backgroundColor:"white",marginLeft:'120px',width:'36%',marginTop:'-25px',position:'absolute'}}></hr>
        <hr style={{backgroundColor:"white",marginLeft:'750px',width:'36%',marginTop:'-25px',position:'absolute'}}></hr>

<div className = "row" style ={{display: 'flex'}}>
<div className="column" style={{  flex: '33.33%',
  padding: '5px'}}>
      <div className="ui card" style={{margin:'50px 0 0 150px'}}>
        <div className="ui slide masked reveal image"  >
          <img src="khaadigallery1.jpg" className="visible content" />
          <img src="khaadigallery2.jpg" className="hidden content" />
        </div>
        <div className="content" style={{width:"40vh", textAlign:"center"}}>
          <a className="header"  style={{color:"#D79922"}}>KHAADI SUMMER 2019</a>
          <hr ></hr>
          <div className="meta">
            <span className="date" style={{color:"grey"}}>Bring Colors to summer with the latest colorful designs, Hit the summer with colors.</span>
          </div>
        </div>
      </div>

      <div className="ui card" style={{margin:'10px 0 0 150px'}}>
       
        <div className="content" style={{width:"40vh", textAlign:"center"}}>
          <a className="header"  style={{color:"#F13C20"}}>BONANZA SATRANGI 2019</a>
          <hr ></hr>
          <div className="meta">
            <span className="date" style={{color:"grey"}}>Wear the elegant designs of your favourite outlet in this summer.</span>
          </div>
        </div>
        <div className="ui slide masked reveal image"  >
          <img src="satrangigallery1.jpg" className="visible content" />
          <img src="satrangigallery2.jpg" className="hidden content" />
        </div>
      </div>
</div>



<div className="column" style={{  flex: '33.33%',
    padding: '5px'}}>
      

      <div className="ui card" style={{margin:'50px 0 0 100px'}}>
        <div className="ui slide masked reveal image"  >
          <img src="alkaramgallery1.jpg" className="visible content" />
          <img src="alkaramgallery2.jpg" className="hidden content" />
        </div>
        <div className="content" style={{width:"40vh", textAlign:"center"}}>
          <a className="header" style={{color:"#C3073F"}} >ALKARAM COLLECTION 2018</a>
          <hr ></hr>
          <div className="meta" >
            <span className="date" style={{color:"grey"}}>Festive Collection has embrace engaging designs to enlighten your heartist events. </span>
          </div>
        </div>
</div>
</div>




 <div className = "column" style={{  flex: '33.33%',
  padding: '5px'}}>
      <div className="ui card" style={{margin:'50px 0 0 50px'}}>
        <div className="ui slide masked reveal image"  >
          <img src="sapphiregallery1.jpg" className="visible content" />
          <img src="sapphiregallery2.jpg" className="hidden content" />
        </div>
        <div className="content" style={{width:"40vh", textAlign:"center"}}>
          <a className="header" style={{color:'#AC3B61'}}>SAPPHIRE LAWN 2019</a>
          <hr ></hr>
          <div className="meta">
            <span className="date" style={{color:"grey"}}>Revatilze your wearing with comfy and beautiful lawn collection.</span>
          </div>
        </div>

     
      </div>
      <div className="ui card" style={{margin:'10px 0 10px 50px'}}>
       
        <div className="content" style={{width:"40vh", textAlign:"center"}}>
          <a className="header" style={{color:'#5D0015'}}>NISHAT WINTER COLLECTION 2019</a>

          <hr ></hr>
          <div className="meta">
            <span className="date" style={{color:"grey"}}>Make the beautiful hurdle of Nishat winter stuff to minimize the winter. </span>
          </div>
        </div>
        <div className="ui slide masked reveal image"  >
          <img src="nishatgallery1.jpg" className="visible content" />
          <img src="nishatgallery2.jpg" className="hidden content" />
        </div>
      </div>
    </div>
    </div>
    </div>
       
);

};
export default Gallery;