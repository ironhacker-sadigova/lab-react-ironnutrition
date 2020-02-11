
import React, { Component } from "react";
import 'bulma/css/bulma.css';
import "./App.css";
import foods from "./foods.json";
import FoodBox from "./Components/FoodBox";

class App extends Component {
  state = {
    calories: 0
  };
  render() {
    const { calories } = this.state;
    return (
      <div className="App">
        <div className="container">
        <h1 className="title">IronNutrition</h1>
          <div>
          <input className="input search-bar" name="search" placeholder="Search" value=""/>          </div>
           <div className="columns">
            <div className="column">
            <div class="box"></div>
              {foods.map((food, index) => (
                <FoodBox key={index} {...food} />
              ))}
            </div>
            <div className="column content">
              <div className="has-text-left">
                <strong>Total:{calories} calories</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;


/*

     
          div className="container">
      <h1 className="title">IronNutrition</h1>
      <div>
        <input className="input search-bar" name="search" placeholder="Search" value="">
      </div>
      <div className="columns">
        <div className="column">
          <div className="box">
            <article className="media">
              <div class="media-left">
                <figure className="image is-64x64">
                  <img src="https://i.imgur.com/eTmWoAN.png">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Pizza</strong> <br>
                    <small>400 cal</small>
                  </p>
                </div>
              </div>
              <div class="media-right">
                <div class="field has-addons">
                  <div class="control">
                    <input type="number" class="input" value="1">
                  </div>
                  <div class="control">
                    <button class="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="https://i.imgur.com/DupGBz5.jpg">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Salad</strong> <br>
                    <small>150 cal</small>
                  </p>
                </div>
              </div>
              <div class="media-right">
                <div class="field has-addons">
                  <div class="control">
                    <input type="number" class="input" value="1">
                  </div>
                  <div class="control">
                    <button class="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div class="box">
            <article class="media">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img src="https://i.imgur.com/hGraGyR.jpg">
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Sweet Potato</strong> <br>
                    <small>120 cal</small>
                  </p>
                </div>
              </div>
              <div class="media-right">
                <div class="field has-addons">
                  <div class="control">
                    <input type="number" class="input" value="1">
                  </div>
                  <div class="control">
                    <button class="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
          <div className="box">
            {foods.map((food, index) => (
                <FoodBox key={index} {...food} />
              ))}
              </div>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>Gnocchi</strong> <br>
                    <small>500 cal</small>
                  </p>
                </div>
              </div>
              <div class="media-right">
                <div class="field has-addons">
                  <div class="control">
                    <input type="number" class="input" value="1">
                  </div>
                  <div class="control">
                    <button class="button is-info">+</button>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div class="column content">
          <h2 class="subtitle">Today's foods</h2>
          <ul>
            <li>1 Pizza = 400 cal</li>
            <li>2 Salad = 300 cal</li>
          </ul>
          <strong>Total: 700 cal</strong>
        </div>
      </div>
    </div>
  </div>
*/