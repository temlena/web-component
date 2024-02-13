class HeaderNavbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    const style = document.createElement("style");
    style.textContent = `
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body{
            background-color: #DADBD8;
        }
        .navigation{
         display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 150px;
        color: black;
        font-size: 18px;
        font-weight: 300;
        cursor: pointer;
        }
        .left{
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .logo {
            width: 50px;
            height: 50px;
          }
          .nav-item{
            display: flex;
            justify-content: space-between;
            align-items:center;
            gap: 40px;
          }
          .header-btn{
            color: white;
            background-color: black;
            padding: 10px 20px;
            border-radius: 30px;
          }
        `;
    this.shadowRoot.appendChild(style);

    this.shadowRoot.innerHTML += `
      <div class="navigation">
        <div class="left">
          <img src="napper-logo.png" alt="Logo" class="logo">
          <p>Napper</p>
        </div>
        <div class="nav-item">
          <div class="about">About</div>
          <div class="how-it-works">How It Works</div>
          <div class="login">Login</div>
          <div class="registration">Registration</div>
        </div>
        <div class ="header-btn">
          <div>Open Dashboard</div>
          </div>
      </div>
      `;
  }
}
customElements.define("header-navbar", HeaderNavbar);

class HeroSection extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const style = document.createElement("style");
    style.textContent = `
        main{
          padding: 50px 100px;
        }
        .hero-container {
          display: flex;
          justify-content: space-around;
        }
        .left img{
            width: 500px;
        }
        .right {
          width: 40%;        
        }
        .right h1{
          font-size: 4rem;
          font-family: "Poppins", sans-serif;
        }
         .desc{
          display: flex;
          align-items:center;
          justify-content:center;
         }
         .desc p{
            line-height: 30px;
            font-family: "Poppins", sans-serif;
         }
         .desc img{
          width: 120px;
          height:120px;
          margin-left: 30px;
         }

      `;

    this.shadowRoot.appendChild(style);

    this.shadowRoot.innerHTML += `
      <main>
      <div class="hero-container">
      <div class="left">
      <img class="img1" src="man.png" alt="hero-image">
      </div>
      <div class="right">
      <h1>Track your productivity <img src="new2.png">online </h1>
      <div class="desc">
             <p>Solving problem with drowsiness, apathy, lack of motivations and other factors that do not allow you to grow</p>
             <img src="new3.png" alt="arrow">
          </div>
      </div>
      </div>
        
      </main>
      `;
  }
}

customElements.define("hero-section", HeroSection);
