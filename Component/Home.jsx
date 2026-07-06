export default function Home() {
  return (
    <>

    <div className="container-fluid" >
      
      <div className="blur-box">
        
       <div className="display-box">
        
        <h1>Home</h1>
       
        </div>
        <div className="row m-0 p-0 ">
        <div className="col-12  col-lg-8 col-md-6 col-sm-3 m-0 p-0">
        <h3>Welcome to Our Kitchen!</h3>
        <h3>Discover a world of delicious flavors and easy-to-follow cooking recipes made for everyone — from beginners to seasoned chefs. Whether you're looking for quick weekday meals, comforting classics, or exciting new dishes, our recipes bring creativity and taste to your table. Let’s make cooking fun, simple, and absolutely delicious!
        </h3>
        <a href="/Recipes" className="btn"><button>Recipes</button></a>
        </div>
        <div className="col-12  col-lg-4 col-md-6 col-sm-3">
          <img src="/Images/Prato_de_coxa_assada-removebg-preview.png" id="image" className="gallery-img"></img>
          <img src="/Images/Spiral_Ratatouille-removebg-preview.png" id="image" className="gallery-img"></img>
        </div>
       </div>

      </div>
    </div>
    </>
  );
}
