// elements
const button = document.getElementById("button");

const point = document.getElementById("points");
let points = 0;
let interval = 1;


setInterval(checkAura = () => {  
    
if (points >= 30) {
    item1.style.display = "flex";
}


//FIXME: Buttons keep spawning after click due to if statements in buttonpressed
if (points >= 1000) {
    item2.style.display = "flex";
}


if (points >= 10000) {
    item3.style.display = "flex";
}

}, 750)




//TODO: Create object that stores every upgrade

//TODO: Add a function that compares the price to the object upgrade as sees whether I can buy or not
//TODO: Add new upgrade button whenever aura points meets requirements.


// can make an object with all upgrades

    
    // TODO: Implement store system
    
    
    
    // TODO: find way to add store items to the page
    
    
    // the more clicks you the more buffs you get
const upgradeOne = () => {
    interval += 10;
    points -= 30;
    point.innerHTML = `Aura: ${points}`;
    item1.style.visibility = "hidden";
}



const upgradeTwo = () => {
    interval += 100;
    points -= 1000;

    point.innerHTML = `Aura: ${points}`  
    item2.style.visibility = "hidden";

}


const upgradeThree = () => {
    interval += 1000;
    points -= 10000;
    point.innerHTML = `Aura: ${points}` 
    item3.style.visibility = 'hidden';
     
}

// Item 1
let newItem = document.createElement('button');
newItem.textContent = 'Post tiktok +10 aura per click (Cost 20)';
document.getElementById('item1').appendChild(newItem);


// Item 2
let newItem2 = document.createElement('button');
newItem2.textContent = 'Do a backflip in front of the huzz +100 per click (Cost 1000)';
document.getElementById('item2').appendChild(newItem2);


// Item 3
let newItem3 = document.createElement('button');
newItem3.textContent = 'Walking into the function with Duke Dennis and dapping up Barrack Obama +1000 per click (Cost: 10000)';
document.getElementById('item3').appendChild(newItem3);

    
    

    
    
//FIXME: try to make it so yuo dont have to select the img in order to gain aura 
let spacePressed = false;
    // event listener
button.addEventListener("keydown", function(ev) {
    if (ev.code === "Space") {
        if (!spacePressed) {
            spacePressed = true;
            points += interval;
            point.innerHTML = `Aura: ${points}`
            ev.preventDefault();
        }
        
    }

});

button.addEventListener("keyup", function(ev) {
    if (ev.code === "Space") {
        spacePressed = false;
    }
});




//Aura Farms(Passive aura)

const passiveAura = 0;

setInterval(checkAura = () => {  
    
    if (points >= 100) {
        farm1.style.display = "flex";
    }
    
    if (points >= 1500) {
        farm2.style.display = "flex";
    }
    
    
    if (points >= 10000) {
        farm3.style.display = "flex";
    }
    
    }, 750)




const farmOne = () => {
    points -= 100;
    point.innerHTML = `Aura: ${points}`
    setInterval(auraFarm1 = () => {
        points++;
        point.innerHTML = `Aura: ${points}`
    },1000);
    farm1.style.visibility = "hidden";
}

const farmTwo= () => {
    points -= 100
    point.innerHTML = `Aura: ${points}`
    setInterval(auraFarm2 = () => {
        points += 10;
        point.innerHTML = `Aura: ${points}`
    },1000);
    farm2.style.visibility = "hidden";
}

const farmThree = () => {
    points -= 1000;
    point.innerHTML = `Aura: ${points}`
    setInterval(auraFarm3 = () => {
        points += 100;
        point.innerHTML = `Aura: ${points}`
    },1000);
    farm3.style.visibility = "hidden";
}





let newFarm = document.createElement('button');
newFarm.textContent = 'AURA FARM';
document.getElementById('farm1').appendChild(newFarm);

let newFarm1 = document.createElement('button');
newFarm1.textContent = 'AURA FARM 1';
document.getElementById('farm2').appendChild(newFarm1);

let newFarm2 = document.createElement('button');
newFarm2.textContent = 'AURA FARM 2';
document.getElementById('farm3').appendChild(newFarm2);


// each new ability add a picture to the screen or something related






//brief minigames to gain aura
//IDEAS:
//Click a certain amount of times in a minute to get more aura




// Feature to add leaderboard and compete with friends

