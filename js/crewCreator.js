//  Creating Crew PAGES 

// GET VALUE when click CREW to visit
// CREATE CREW info
// HIDE CREW that are not clicked

// Variables

let planetData = dataInfo;
// console.log(planetData)
let planets = planetData.crew[0].bio;
let planetMain = document.querySelector('.planet-main');
let extPlanet = document.querySelector('.planetContainer');



// Creacion PLANETAS

class Crew{
    constructor(number, prof, image, desc, name){
        this.number = number;
        this.prof = prof;
        this.image = image;
        this.desc = desc;
        this.name = name
    }
}

const commander = new Crew("01", "Commander", "../assets/crew/image-douglas-hurley.png", "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.", "Douglas Hurley")
const misionSpec = new Crew("02", "Mission Specialist", "../assets/crew/image-mark-shuttleworth.png", "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.", "Mark Shuttleworth")
const pilot = new Crew("03", "Pilot", "../assets/crew/image-victor-glover.png", "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.", "Victor Glover")
const engineer = new Crew("04", "Flight Engineer", "../assets/crew/image-anousheh-ansari.png", "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.", "Anousheh Ansari")

const allCrew = [commander, misionSpec, pilot, engineer];

allCrew.forEach(crew => {
    let crewRow = document.createElement('div');
    // planetRow.classList.add('planetContainer');
    crewRow.classList.add(`${crew.prof.replace(' ','_').toLowerCase()}`);
    crewRow.classList.add('ocultar');
    // let itemsList = document.getElementsByClassName('containerBurguers');
    let crewContent = 
                `
                <h3 class="numbered-title"><span>${crew.number}</span>Pick your crew</h3>
                <div class="planet-containert grid-item">
                    <div class="crew-top">
                        <div class="info-desc">
                            <p class="main_subtitle main_role">${crew.prof}</p>
                            <h2 class="main_title crewName">${crew.name}</h2>
                            <p class="main_desc">${crew.desc}</p>
                        </div>
                        <ul class="destination-planets">
                            <a href="#" class="planet dots" data-crewDots = "commander"></a>
                            <a href="#" class="planet dots" data-crewDots = "mission_specialist"></a>
                            <a href="#" class="planet dots" data-crewDots = "pilot"></a>
                            <a href="#" class="planet dots" data-crewDots = "flight_engineer"></a>
                        </ul>
                    </div>
                    <div class="planet-top crew-bot">
                        <source srcset="..assets/crew/image-douglas-hurley.png" type="image/webp">
                        <img class="crew-img" src="${crew.image}" alt="">
                    </div>
                </div>
                `
    crewRow.innerHTML = crewContent;
    // console.log(item);
    planetMain.appendChild(crewRow);
    giveEvent();
});

let crewComm = document.querySelector('.commander');
let crewSpec = document.querySelector('.mission_specialist');
let crewPilot = document.querySelector('.pilot');
let crewEng = document.querySelector('.flight_engineer');

crewComm.classList.remove('ocultar');

function giveEvent() {
    let crewBtns = document.querySelectorAll('.dots');
    
    for (let i = 0; i < crewBtns.length; i++) {
        const crewBtn = crewBtns[i];
        crewBtn.addEventListener('click', pickPlanets)
    }
}

// Funciones

function pickPlanets(e) {
    crewList = [crewComm, crewSpec, crewPilot, crewEng];
    e.preventDefault();
    giveEvent();
    let crewName = e.target.getAttribute('data-crewdots');
    let crewContainer = e.target.parentElement.parentElement.parentElement.parentElement;
    let parentClassCrews = crewContainer.className;
    crewList.forEach(crew => {
        if (crew.classList[0] === crewName) {
            crew.classList.remove('ocultar');
        }else{
            crew.classList.add('ocultar')
        }
    });

}

    // console.log(parentContainer.classList.contains(spaceName));

    // if () {
    //     parentContainer.style.display = "none";
    // }else{
    //     parentContainer.style.display = "block";
    // }