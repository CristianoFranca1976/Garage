const btnMenu = document.querySelector(".btn-menu");
const aside = document.querySelector("aside");
const logos = document.querySelector(".logos");
const nav = document.querySelector("nav");
const nameLogo = document.querySelectorAll(".name-logo");
const alink = document.querySelectorAll("a");
const btns = document.querySelectorAll(".btns");

const section = document.querySelector("section");

let basket = `
<button type="button" title="Basket" id='basket' onclick="openBasket()"><img src="./assets/shopping-basket.png" alt="Basket" class="logos"> <sapn class='total-basket'>0</span></button>
`;

let home = `
  ${basket}
    <h1>My Garage</h1> 
    <img src="/assets/car.jpg" alt="Img car" class="img-car" />
`;

let btnsTwo = `
 <div class="btn-options">
    <button type="button" title="Back" class='back' onclick="backBtn()">
    <img src="/assets/left-arrow.png" alt="Arrow img" class="logos" />
    </button>
    <button type="button" title="Enviar" class='send' onclick="addItem()">
    <img src="/assets/add-to-cart.png" alt="Send logo" class="logos" />
    </button>
  </div>
`;

const backA = document.querySelectorAll(".back");
function backBtn(event) {
  section.innerHTML = home;
}

section.innerHTML = home;
btnMenu.addEventListener("click", () => {
  if (aside.style.width == "300px") {
    aside.style.width = "80px";
    for (let i = 0; i < btns.length; i++) {
      btns[i].style.justifyContent = "center";
      btns[i].style.justifyContent = "center";
    }

    nav.style.justifyContent = "center";
    nav.style.width = "auto";
    nav.style.marginRight = "0px";
    for (let i = 0; i < nameLogo.length; i++) {
      nameLogo[i].style.display = "none";
    }
  } else {
    aside.style.width = "300px";
    for (let i = 0; i < btns.length; i++) {
      btns[i].style.width = "100%";
      btns[i].style.justifyContent = "space-around";
    }
    nav.style.width = "100%";
    nav.style.marginRight = "15px";
    for (let i = 0; i < nameLogo.length; i++) {
      nameLogo[i].style.display = "block";
      nameLogo[i].style.transition = "all 15s";
    }
  }
});

const service = document.querySelector(".service");

service.addEventListener("click", () => {
  section.innerHTML = `
  ${basket}
  <h1> Service</h1>
 <div class="types-service">
    <div class="card">
      <p>Basic</p>
      <ul>
        <li>Oil, oil filter and air filter.</li>
        <li>Check all levels (brake fluid, coolant System, screenshawer, power steering fluid.</li>
        <li>Stamp book service.</li>
        <li>Reset service dashboard.</li>
      </ul>
      <div class="items-engine">
          <label for="input_1_0"> 
          <input type="radio" name="opcao" id="input_1_0" class='inputB' title="check" onclick="marcaDesmarca('Basic £ 60.00')" value='Basic £ 60.00'/>
          <span>£ 60.00</span>
          </label> 
        </div>
    </div>
    </div>
    <div class="card">
      <p>Plus</p>
      <ul>
        <li>Oil, oil filter and air filter.</li>
        <li>Check all levels (brake fluid, coolant System, screenshawer, power steering fluid.</li>
        <li>Stamp book service.</li>
        <li>Reset service dashboard.</li>
        <li>Check all car (brake system, suspension, tyres and others).</li>
      </ul>
     <div class="items-engine">
          <label for="input_1_1"> 
          <input type="radio" name="opcao" id="input_1_1" class='inputB' title="check" onclick="marcaDesmarca('Plus £ 95.00')" value='Plus £ 95.00' />
          <span>£ 95.00</span>
          </label> 
        </div>
    </div>
    <div class="div-confirm"> 
    <p class="confirm-item"></p</>
    </div>
  </div>
  ${btnsTwo}
  `;
});

const engine = document.querySelector(".engine");

engine.addEventListener("click", () => {
  section.innerHTML = `
   ${basket}
      <h1>Engine</h1>
    <div class="input-checkbox">
      <div class="fluids types">
        <div class="itens">
          <h2>Fluid change</h2>
          <input type="checkbox" name="opcao" id="" title="Brake fluid" />
          <span>Brake</span>
        </div>
        <div class="itens">
          <input type="checkbox" name="opcao" id="" title="Coolant" />
          <span>Coolant</span>
        </div>
        <div class="itens">
          <input
            type="checkbox"
            name="opcao"
            id=""
            title="Power steering"
          />
          <span>Power steering</span>
        </div>
      </div>
      <div class="battery types">
        <div class="itens">
          <h2>Battery</h2>
          <input type="checkbox" name="opcao" id="" title="Battery change" />
          <span>Change</span>
        </div>
        <div class="itens">
          <input type="checkbox" name="opcao" id="" title="Battery check" />
          <span>Check</span>
        </div>
      </div>
    </div>
     ${btnsTwo}
  `;
});

const brake = document.querySelector(".brake");

brake.addEventListener("click", () => {
  section.innerHTML = `
  ${basket}
  <h1>Brake</h1>
   ${btnsTwo}
  `;
});

const exhaust = document.querySelector(".exhaust");

exhaust.addEventListener("click", () => {
  section.innerHTML = `
  ${basket}
  <h1>Exhaust</h1>
   ${btnsTwo}
  `;
});

const suspension = document.querySelector(".suspension");

suspension.addEventListener("click", () => {
  section.innerHTML = `
  ${basket}
  <h1>Suspension</h1>
   ${btnsTwo}
  `;
});

let invoce = `
  <h1>Basket</h1>
  <div class='invoce'>
  <header>
  <img src="/assets/LetraC.png" alt="Arrow img" class="logo-company" />
  <address>
  Cristiano auto/motocycle<br>
Contact me at:<br>  
Written by <a href="mailto:cristiano.franca@hotmail.co.uk" title='Email'>cristiano.franca@hotmail.co.uk</a>.<br> 
Moblile : 07927132927<br>
Oxford<br>
UK
</address>
  </header>
  <main>
   <div class='description'>
   <p>DESCRIPTION</p>
   <p>AMOUNT</p>
   </div>
   <div class='items'>
   <p class='service-description'></p>
   <p>£</p>
   </div>
  </main>
  <footer>
<h3>Thank you</h3>
<div class='term'>
<p>TERMS & CONDITIONS</p>
<p>Before starting work, full payment for the parts and after the work, labor.</p>
</div>
  </footer>
  </div>
`;

var checks = document.querySelectorAll('input[type="checkbox"]');
for (var i = 0; i < checks.length; i++) {
  if (checks[i].checked) {
    console.log('Checked');
  } else {
    console.log('Unchecked');
  }
}



function marcaDesmarca(item) {
  
  let serviceDescription = document.querySelector(".service-description");
  let confirmItem = document.querySelector(".confirm-item");

  if (item === 'Basic £ 60.00') {
    confirmItem.textContent = 'Add the service ' + item + ' in your basket below';
    
    confirmItem.style.display = 'flex';
    
    item.checked = false;
  } else if (item === 'Plus £ 95.00') {
    confirmItem.textContent = 'Add the service ' + item + ' in your basket below';
    confirmItem.style.display = 'flex';
  } else {
    confirmItem.style.display = 'none';
  }
};

function addItem() { 
  
  openBasket()
 
  console.log('teste');
}

function sendBasket() {
  section.innerHTML = `
  ${basket}
  ${invoce}
  `;
}

function openBasket() {
  section.innerHTML = `
  ${basket}
  ${invoce}
  `;
}
