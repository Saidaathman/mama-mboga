import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type1: "Vegetables",

      veg1: "Cabbage",
      CabbageImg:
        "https://images.pexels.com/photos/134877/pexels-photo-134877.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    CabbageQuantity: 10,

      veg2: "Tomatoes",
      tomatoesImage:
        "https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      TomatoesQuantity: 30,

      veg3: "skumawiki",
      skumawikiImg:
        "https://images.pexels.com/photos/2499671/pexels-photo-2499671.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      skumawikiQuantity: 50,

      type2: "Fruits",

      fruit1: " banana",
      bananaImg:
        "https://images.pexels.com/photos/3310691/pexels-photo-3310691.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      bananaQuantity: 200,



      fruit2: "watermelon",
      watermelonImg:
        "https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        watermelonQuantity: 500,

      fruit3:"pineapple",
      pineappleImg:
      "https://images.pexels.com/photos/137119/pexels-photo-137119.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      pineappleQuantity: 300,

      fruit4:"orange",
      orangeImg:
       "https://images.pexels.com/photos/1271406/pexels-photo-1271406.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      orangeQuantity: 200,      
      
    };
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>MAMA MBOGA</h1>
        <h1> This is my website of {this.state.type1} </h1>

        <section className="products">
          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.CabbageImg }alt="" />
            </div>
            <div className="product-info">
              <h5> Cabbage</h5>
              <p> Kes {this.state.CabbageImgPrice}</p>
              <p> Quantity {this.state.CabbageQuantity} </p>
             
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.tomatoesImage} alt="" />
            </div>
            <div className="product-info">
              <h5> Tomatoes</h5>
              <h6> kes 50</h6>
              <p> Quantity {this.state.TomatoesQuantity} </p>
             
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.skumawikiImg} alt="" />
            </div>
            <div className="product-info">
              <h5> Skumawiki</h5>
              <h6> kes 50</h6>
              <p> Quantity {this.state.skumawikiQuantity} </p>
          
            </div>
          </div>

          <div className="product-card">
            <div className="product-image">
              <img className="photo" src={this.state.bananaImg} alt="" />
            </div>
            <div className="product-info">
              <h5> banana</h5>
              <p> Kes {this.state.bananaImgPrice}</p>
              <p> Quantity {this.state.bananaImgQuantity} </p>
              </div>
              </div>
              
              
              <div className="product-card">


            <div className="product-image">
              <img className="photo" src={this.state.watermelonImg} alt="" />
            </div>
            <div className="product-info">
              <h5> watermelonImg</h5>
              <p> Kes {this.state.watermelonImgPrice}</p>
              <p> Quantity {this.state.watermelonImgQuantity} </p>
              </div>
              </div>


              <div className="product-image">
              <img className="photo" src={this.state.pineappleImg} alt="" />
            </div>
            <div className="product-info">
              <h5> pineappleImg</h5>
              <p> Kes {this.state.pineappleImgPrice}</p>
              <p> Quantity {this.state.pineappleImgQuantity} </p>


              <div className="product-image">
              <img className="photo" src={this.state.orangeImg} alt="" />
            </div>
            <div className="product-info">
              <h5> orangeImg</h5>
              <p> Kes {this.state.orangeImgPrice}</p>
              <p> Quantity {this.state.orangeImgQuantity} </p>














              



              
             
            </div>
          </div>
          </section>
      </div>
    );
  }
}

export default App;