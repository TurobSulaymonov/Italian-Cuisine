import { Button, Container, Stack } from "@mui/material"


export function Products (){
  return <div className="menu-frame">
   
     <section>
      <div className="container">
        <div className="heading">
          <span>Our customer love this</span>
          <h1>Our Products</h1>
        </div>
        <Stack className="category">
                    <Stack className="btn-item">
                        <Button>All category</Button>
                    </Stack>
                    <Stack>
                        <Button>Dinner</Button>
                    </Stack>
                     <Stack>
                        <Button>Lunch</Button>
                    </Stack>
                    <Stack>
                        <Button>Dessert</Button>
                    </Stack>
                    <Stack>
                        <Button>Drink</Button>
                    </Stack>
                </Stack>
        <div className="row">
          {/* 1th product */}
          <div className="col">
            <div className="imgContainer">
              <img src="/img/kis-ita.png" alt="image" />
            </div>
            <div className="title">
              <h2>Pizza</h2>
              <p>$120.00</p>
            </div>
            <div className="para">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
                laudantium.
              </p>
            </div>
            <div className="footer">
              <div className="star-container">
                <ul>
                  <li>
                    <i className="fa fa-star checked"></i>
                  </li>
                  <li>
                    <i className="fa fa-star checked"></i>
                  </li>
                  <li>
                    <i className="fa fa-star checked"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
              </div>
              <div className="button-container">
                <button>Add To Cart</button>
              </div>
            </div>
          </div>

          {/* 2th product */}
          <div className="col">
            <div className="imgContainer">
              <img src="/img/osh-img.jpg" alt="image" />
            </div>
            <div className="title">
              <h2>Burger</h2>
              <p>$20.00</p>
            </div>
            <div className="para">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
                laudantium.
              </p>
            </div>
            <div className="footer">
              <div className="star-container">
                <ul>
                  <li>
                    <i className="fa fa-star checked"></i>
                  </li>
                  <li>
                    <i className="fa fa-star checked"></i>
                  </li>
                  <li>
                    <i className="fa fa-star checked"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
              </div>
              <div className="button-container">
                <button>Add To Cart</button>
              </div>
            </div>
          </div>

         {/* 3th product */}
          <div className="col">
            <div className="imgContainer">
              <img src="/img/popular-menu.png" alt="image" />
            </div>
            <div className="title">
              <h2>Pot Pie</h2>
              <p>$19.23</p>
            </div>
            <div className="para">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
                laudantium.
              </p>
            </div>
            <div className="footer">
              <div className="star-container">
                <ul>
                  <li>
                    <i className="fa fa-star checked"></i>
                  </li>
                  <li>
                    <i className="fa fa-star checked"></i>
                  </li>
                  <li>
                    <i className="fa fa-star checked"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
              </div>
              <div className="button-container">
                <button>Add To Cart</button>
              </div>
            </div>
          </div>

          {/* 4th product */}
          <div className="col">
            <div className="imgContainer">
              <img src="./images/chicken-bucket.png" alt="image" />
            </div>
            <div className="title">
              <h2>Chicken Bucket</h2>
              <p>$28.78</p>
            </div>
            <div className="para">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo,
                laudantium.
              </p>
            </div>
            <div className="footer">
              <div className="star-container">
                <ul>
                  <li>
                    <i className="fa fa-star checked"></i>
                  </li>
                  <li>
                    <i className="fa fa-star checked"></i>
                  </li>
                  <li>
                    <i className="fa fa-star checked"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                  <li>
                    <i className="fa fa-star"></i>
                  </li>
                </ul>
              </div>
              <div className="button-container">
                <button>Add To Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
  
  </div>
} 