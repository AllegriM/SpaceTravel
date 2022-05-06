//  Creating DESTINATION PAGES 

// GET VALUE when click PLANET to visit
// CREATE PLANET info
// HIDE planets that are not clicked

// Variables

let planetData = dataInfo;
// console.log(planetData)
let planets = planetData.destinations;
// console.log(planets)
let planetMain = document.querySelector('.planet-main');
let extPlanet = document.querySelector('.planetContainer');



// Creacion PLANETAS

class Mundo{
    constructor(number, name, image, desc, dist, travel){
        this.number = number;
        this.name = name;
        this.image = image;
        this.desc = desc;
        this.dist = dist;
        this.travel = travel;
    }
}

const Moon = new Mundo("01", "Moon", "../assets/destination/image-moon.png", "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.", "384,400 km", "3 days")
const Mars = new Mundo("02", "Mars", "../assets/destination/image-mars.png", "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!", "225 mil. km", "9 months")
const Europa = new Mundo("03", "Europa", "../assets/destination/image-europa.png", "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.", "628 mil. km", "3 years")
const Titan = new Mundo("04", "Titan", "../assets/destination/image-titan.png", "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.", "1.6 bil. km", "7 years")

const allPlanets = [Moon, Mars, Europa, Titan];

allPlanets.forEach(planet => {
    let planetRow = document.createElement('div');
    // planetRow.classList.add('planetContainer');
    planetRow.classList.add(`${planet.name}`);
    planetRow.classList.add('ocultar');
    // let itemsList = document.getElementsByClassName('containerBurguers');
    let planetContent = 
                `
                <h3 class="numbered-title"><span>${planet.number}</span>Pick your destination</h3>
                <div class="planet-container">
                    <div class="planet-top">
                        <img class="planet-img" src="${planet.image}" alt="">
                    </div>
                    <div class="planet-bot">
                        <ul class="destination-planets">
                            <a href="#" class="planet" data-planet = "Moon">Moon</a>
                            <a href="#" class="planet" data-planet = "Mars">Mars</a>
                            <a href="#" class="planet" data-planet = "Europa">Europa</a>
                            <a href="#" class="planet" data-planet = "Titan">Titan</a>
                        </ul>
                        <div class="info-desc">
                            <h1 class="main_title">${planet.name}</h1>
                            <p class="main_desc underline">${planet.desc}</p>
                        </div>
                        <div class="info-number">
                            <div class="distance">
                                <p class="dist_title">Avg. distance</p>
                                <p class="dist_number">${planet.dist}</p>
                            </div>
                            <div class="travel-time">
                                <p class="dist_title">Est. travel time</p>
                                <p class="dist_number">${planet.travel}</p>
                            </div>
                        </div>
                    </div>   
                </div>
                `
    planetRow.innerHTML = planetContent;
    // console.log(item);
    planetMain.appendChild(planetRow);
    giveEvent();
});

let planetMoon = document.querySelector('.Moon');
let planetMars = document.querySelector('.Mars');
let planetEuropa = document.querySelector('.Europa');
let planetTitan = document.querySelector('.Titan');

planetMoon.classList.remove('ocultar');

function giveEvent() {
    let spaceBtns = document.querySelectorAll('.planet');
    
    for (let i = 0; i < spaceBtns.length; i++) {
        const spaceBtn = spaceBtns[i];
        spaceBtn.addEventListener('click', pickPlanets)
    }
}

// Funciones

function pickPlanets(e) {
    planets = [planetMoon, planetMars, planetEuropa, planetTitan];
    e.preventDefault();
    giveEvent();
    let spaceName = e.target.textContent;
    let parentContainer = e.target.parentElement.parentElement.parentElement.parentElement;
    let parentClassSpace = parentContainer.className;
    planets.forEach(planet => {
        if (planet.classList[0] === spaceName) {
            planet.classList.remove('ocultar');
        }else{
            planet.classList.add('ocultar')
        }
    });
    // console.log(parentContainer.classList.contains(spaceName));

    // if () {
    //     parentContainer.style.display = "none";
    // }else{
    //     parentContainer.style.display = "block";
    // }
}

// function showPlanet(planet) {
//     if (planet === "Mars") {
//         planetMoon.classList.add('ocultar');
//         planetMars.classList.remove('ocultar');
//         planetTitan.classList.add('ocultar');
//         planetEuropa.classList.add('ocultar');
//     }else if (planet === "Titan"){
//         planetMoon.classList.add('ocultar');
//         planetMars.classList.add('ocultar');
//         planetTitan.classList.remove('ocultar');
//         planetEuropa.classList.add('ocultar');
//     }else if (planet === "Europa"){
//         planetMoon.classList.add('ocultar');
//         planetMars.classList.add('ocultar');
//         planetTitan.classList.add('ocultar');
//         planetEuropa.classList.remove('ocultar');
//     }
//     else if (planet === "Moon"){
//         planetMoon.classList.remove('ocultar');
//         planetMars.classList.add('ocultar');
//         planetTitan.classList.add('ocultar');
//         planetEuropa.classList.add('ocultar');
//     }
// }





































//*********************** CREATION OF PLANET WHEN CLICKED *************************//

// function createPlanetHTML(planets) {
//     // extPlanet.parentNode.removeChild(extPlanet);
//     // delPlanet();
//     let row = document.createElement('div');
//     row.classList.add('planetContainer');
//     let rowContent = `
//                     <h3 class="numbered-title"><span>${planets.number}</span>Pick your destination</h3>
//                     <div class="planet-container">
//                         <div class="planet-top">
//                             <img class="planet-img" src="${planets.images.png}" alt="">
//                         </div>
//                         <div class="planet-bot">
//                             <ul class="destination-planets">
//                                 <a href="#" class="planet" data-planet = "0">Moon</a>
//                                 <a href="#" class="planet" data-planet = "1">Mars</a>
//                                 <a href="#" class="planet" data-planet = "2">Europa</a>
//                                 <a href="#" class="planet" data-planet = "3">Titan</a>
//                             </ul>
//                             <div class="info-desc">
//                                 <h1 class="main_title">${planets.name}</h1>
//                                 <p class="main_desc underline">${planets.description}</p>
//                             </div>
//                             <div class="info-number">
//                                 <div class="distance">
//                                     <p class="dist_title">Avg. distance</p>
//                                     <p class="dist_number">${planets.distance}</p>

//                                 </div>
//                                 <div class="travel-time">
//                                     <p class="dist_title">Est. travel time</p>
//                                     <p class="dist_number">${planets.travel}</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     `
//     row.innerHTML = rowContent;
//     planetMain.appendChild(row);
//     // planetList.push(row);
//     console.log(row);
// }

// function delPlanet() {
//     extPlanet.parentNode.removeChild(extPlanet)
// }


// for (const planet of planets) {
//     // console.log("Este es el array:" + planet)
//     // console.log("Este es el nombre :" + planet.name)
//     // console.log("Este es la imagen:" + planet.images)
//     // console.log("Este es la descripcion:" + planet.description)
//     // console.log("Este es la distancia:" + planet.distance)
//     // console.log("Este es es el tiempo de viaje:" + planet.travel)
// }