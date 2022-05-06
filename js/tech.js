//  Creating Crew PAGES 

// GET VALUE when click CREW to visit
// CREATE CREW info
// HIDE CREW that are not clicked

// Variables

let planetData = dataInfo;
// console.log(planetData)
let planetMain = document.querySelector('.planet-main');
let extPlanet = document.querySelector('.planetContainer');


fetch('data.json')
    .then((resp)=> resp.json())
    .then((data) => {
        let nameData = data.technology;
        nameData.forEach(tech => {
            let nameTech = tech.name;
            let descTech = tech.description;
            let imgBgTech = tech.images.landscape;
            let imgMachTech = tech.images.portrait;
        });
    })

// Creacion Tech

class Tech{
    constructor(number, name, imgMach, desc){
        this.number = number,
        this.name = name,
        this.imgMach = imgMach,
        this.desc = desc
    }
}

const launch_vehicle = new Tech("01", "Launch vehicle", "../assets/technology/image-launch-vehicle-portrait.jpg", "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!")
const spaceport = new Tech("02", "Spaceport", "../assets/technology/image-spaceport-portrait.jpg", "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.")
const spacecapsule = new Tech("03", "Space capsule", "../assets/technology/image-space-capsule-portrait.jpg", "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.")

const allTech = [launch_vehicle, spaceport, spacecapsule];

allTech.forEach(tech => {
    let techRow = document.createElement('div');
    // planetRow.classList.add('planetContainer');
    techRow.classList.add(`${tech.name.replace(' ','_').toLowerCase()}`);
    techRow.classList.add('ocultar');
    // let itemsList = document.getElementsByClassName('containerBurguers');
    let techContent = 
                `
                <h3 class="numbered-title"><span>${tech.number}</span>Pick your crew</h3>
                <div class="planet-containert grid-item">
                    <div class="planet-top techTop">
                        <source srcset="..assets/crew/image-douglas-hurley.png" type="image/webp">
                        <img class="crew-img tech-img" src="${tech.imgMach}" alt="">
                    </div>
                    <div class="crew-top tech-top">
                        <ul class="destination-planets techUl">
                            <a href="#" class="techDots" data-techDots = "launch_vehicle">1</a>
                            <a href="#" class="techDots" data-techDots = "spaceport">2</a>
                            <a href="#" class="techDots" data-techDots = "space_capsule">3</a>
                        </ul>
                        <div class="info-desc info-tech">
                            <p class="main_subtitle tech_subtitle">The Terminology ...</p>
                            <h2 class="main_title tech_title ">${tech.name}</h2>
                            <p class="main_desc tech_desc">${tech.desc}</p>
                        </div>
                    </div>
                </div>
                `
    techRow.innerHTML = techContent;
    // console.log(item);
    planetMain.appendChild(techRow);
    giveEvent();
});

let techVeh = document.querySelector('.launch_vehicle');
let techBase = document.querySelector('.spaceport');
let techCaps = document.querySelector('.space_capsule');

techVeh.classList.remove('ocultar');

function giveEvent() {
    let techBtns = document.querySelectorAll('.techDots');
    
    for (let i = 0; i < techBtns.length; i++) {
        const techBtn = techBtns[i];
        techBtn.addEventListener('click', pickPlanets)
    }
}

// Funciones

function pickPlanets(e) {
    techList = [techVeh, techBase, techCaps];
    e.preventDefault();
    giveEvent();
    let techName = e.target.getAttribute('data-techDots');
    let crewContainer = e.target.parentElement.parentElement.parentElement.parentElement;
    techList.forEach(tech => {
        if (tech.classList[0] === techName) {
            tech.classList.remove('ocultar');
        }else{
            tech.classList.add('ocultar')
        }
    });
}

    // console.log(parentContainer.classList.contains(spaceName));

    // if () {
    //     parentContainer.style.display = "none";
    // }else{
    //     parentContainer.style.display = "block";
    // }