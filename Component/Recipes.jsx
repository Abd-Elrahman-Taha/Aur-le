import { Link } from "react-router-dom";

export default function Recipes({ food }) {
  return (
    <div className="container-fluid">
      <div className="blur-box">
        <h1 className="text-center mb-5">Our Recipes</h1>
        <div id="recipes-container" className="display-box">
          <div className="container">
            <div className="row justify-content-center">
              {food.map((item) => (
                <div key={item.id} className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm">
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt={item.name}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                    </div>
                    <div className="card-footer text-center">
                      <Link to={`/Recipes/${item.id}`}>
                        <button className="btn btn-primary btn-sm">
                          Show Recipe
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
