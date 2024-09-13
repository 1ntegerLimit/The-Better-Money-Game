//important variables

var balance = 1000000000;
var moneyPerClick = 1;
var moneyPerSecond = 0;
var upgradePrice = 100;
var upgradeAddition = 1;
var workersCounter = 0;

//worker variables

var baseWorkerAmount = 1;

var basicWorkerPrice = 1000;
var betterWorkerPrice = 2000;
var hardWorkerPrice = 3000;
var harderWorkerPrice = 4000;
var eliteWorkerPrice = 5000;
var impossibleWorkerPrice = 6000;

//casino variables

var range = 10;
var random = Math.floor(Math.random()*range)+1;
var profit = 0;

//if balance = gameLimit (which is the max number JavaScript can handle) player wins.

const gameLimit = 9007199254740991;
function CheckGameLimitStatus(){
    if (balance >= gameLimit-1000000000) {

        balance = 0;
        moneyPerClick = 1;
        moneyPerSecond = 0;
        upgradePrice = 100;
        workersCounter = 0;
    
        document.getElementById("backButton").style.display = "none";
    
        document.getElementById("base").style.display = "none";
    
        document.getElementById("main").style.display = "none";
        document.getElementById("factory").style.display = "none";
        document.getElementById("casino").style.display = "none";
        document.getElementById("ascend").style.display = "none";
        document.getElementById("gameEndScreen").style.display = "inline";
        
        if (ascensionCounter < 10) {
            document.getElementById("gameEnd").textContent = `JavaScript's integer limit is 9,007,199,254,740,991. Your balance almost reached that number. However, it wasn't on your last Ascension, so it doesn't count as winning. Get to your last ascension and do what you've just done to win the game.`;
            
        }
    }
}

//update function

function Update(){
    document.getElementById("balance").textContent = `Balance: £${balance}`;
    document.getElementById("moneyPerClick").textContent = `Money Per Click: £${moneyPerClick}`;
    document.getElementById("moneyPerSecond").textContent = `Money Per Second: £${moneyPerSecond}`;
    document.getElementById("upgradePrice").textContent = `Upgrade Price: £${upgradePrice}`;
    document.getElementById("workersCounter").textContent = `Workers: ${workersCounter}`;
}

//action functions

function MakeMoney(){
    balance += moneyPerClick;

    Update()
}

function Upgrade(){
    if (balance >= upgradePrice) {
        balance -= upgradePrice;
        moneyPerClick += upgradeAddition;
        upgradePrice *= 2;

        Update()
    }
    else{
        alert(`You need £${upgradePrice} to buy this.`);
    }
}

//factory functions

function BasicWorker(){
    if (balance >= basicWorkerPrice) {
        balance -= basicWorkerPrice;
        basicWorkerPrice *= 2;
        workersCounter++;
        moneyPerSecond += (baseWorkerAmount * 1);

        document.getElementById("basicWorkerPrice").textContent = basicWorkerPrice;

        Update();
    }
    else {
        alert(`You need £${basicWorkerPrice} to buy this.`);
    }
}

function BetterWorker(){
    if (balance >= betterWorkerPrice) {
        balance -= betterWorkerPrice;
        betterWorkerPrice *= 2;
        workersCounter++;
        moneyPerSecond += (baseWorkerAmount * 2);
        
        document.getElementById("betterWorkerPrice").textContent = betterWorkerPrice;

        Update();
    }
    else {
        alert(`You need £${betterWorkerPrice} to buy this.`);
    }
}

function HardWorker(){
    if (balance >= hardWorkerPrice) {
        balance -= hardWorkerPrice;
        hardWorkerPrice *= 2;
        workersCounter++;
        moneyPerSecond += (baseWorkerAmount * 3);

        document.getElementById("hardWorkerPrice").textContent = hardWorkerPrice;

        Update();
    }
    else {
        alert(`You need £${hardWorkerPrice} to buy this.`);
    }
}

function HarderWorker(){
    if (balance >= harderWorkerPrice) {
        balance -= harderWorkerPrice;
        harderWorkerPrice *= 2;
        workersCounter++;
        moneyPerSecond += (baseWorkerAmount * 4);

        document.getElementById("harderWorkerPrice").textContent = harderWorkerPrice;

        Update();
    }
    else {
        alert(`You need £${harderWorkerPrice} to buy this.`);
    }
}

function EliteWorker(){
    if (balance >= eliteWorkerPrice) {
        balance -= eliteWorkerPrice;
        eliteWorkerPrice *= 2;
        workersCounter++;
        moneyPerSecond += (baseWorkerAmount * 5);

        document.getElementById("eliteWorkerPrice").textContent = eliteWorkerPrice;

        Update();
    }
    else {
        alert(`You need £${eliteWorkerPrice} to buy this.`);
    }
}

function ImpossibleWorker(){
    if (balance >= impossibleWorkerPrice) {
        balance -= impossibleWorkerPrice;
        impossibleWorkerPrice *= 2;
        workersCounter++;
        moneyPerSecond += (baseWorkerAmount * 6);

        document.getElementById("impossibleWorkerPrice").textContent = impossibleWorkerPrice;

        Update();
    }
    else {
        alert(`You need £${impossibleWorkerPrice} to buy this.`);
    }
}

//casino function

function Gamble(input){
    if (balance >= input) {
        random = Math.floor(Math.random()*range)+1;
        if (random == 1) {
            balance += (input*8);
            profit += (input*8);

            document.getElementById("result").textContent = "You won";
        }
        else{
            balance -= input;
            profit -= input;

            document.getElementById("result").textContent = "You lost";
        }
        document.getElementById("profit").textContent = `Profit: £${profit}`;
        Update();
    }
    else {
        alert("Don't gamble money you don't have.")
    }
}

//show functions

function Main(){
    document.getElementById("base").style.display = "inline";
    document.getElementById("backButton").style.display = "none";
    document.getElementById("main").style.display = "inline";
    document.getElementById("factory").style.display = "none";
    document.getElementById("casino").style.display = "none";
    document.getElementById("ascend").style.display = "none";

    if (ascensionCounter >= 10) {
        document.getElementById("ascensionButton").style.display = "none";
        document.getElementById("ascensionCounter").textContent = "You've reached your last ascension! You can't ascend anymore.\nReach the integer limit of JavaScript (~9 quadrillion) to win the game."
    }

    document.body.style.backgroundImage = `https://thumbs.dreamstime.com/b/white-dollar-sign-seamless-background-20732285.jpg`
}

function Factory(){
    document.getElementById("backButton").style.display = "inline";
    document.getElementById("main").style.display = "none";
    document.getElementById("factory").style.display = "inline";
    document.getElementById("casino").style.display = "none";
    document.getElementById("ascend").style.display = "none";
}

function Casino(){
    document.getElementById("backButton").style.display = "inline";
    document.getElementById("main").style.display = "none";
    document.getElementById("factory").style.display = "none";
    document.getElementById("casino").style.display = "inline";
    document.getElementById("ascend").style.display = "none";
}

function ShowNothing(){
    document.getElementById("base").style.display = "none";
    document.getElementById("backButton").style.display = "none";
    document.getElementById("main").style.display = "none";
    document.getElementById("factory").style.display = "none";
    document.getElementById("casino").style.display = "none";
    document.getElementById("ascend").style.display = "none";
}

//initialisation

Main();
document.getElementById("base").style.display = "inline";
document.getElementById("gameEndScreen").style.display = "none";
document.getElementById("ascensionLoadingScreen").style.display = "none";

PerInterval();

//per interval function

function PerInterval(){
    balance += moneyPerSecond;

    CheckAscensionStatus();
    CheckGameLimitStatus();

    Update();
}

setInterval(PerInterval, 1000);

//everything ascension related

//FINISHME

function CheckAscensionStatus(){
    if (balance >= requirement) {
        document.getElementById("ascensionButton").style.backgroundColor = `green`;
        document.getElementById("ascensionButton").addEventListener('mouseover', function(){document.getElementById("ascensionButton").style.backgroundColor = 'darkgreen';});
        document.getElementById("ascensionButton").addEventListener('mouseout', function(){document.getElementById("ascensionButton").style.backgroundColor = 'green';});
    }
    
    if (balance < requirement) {
        document.getElementById("ascensionButton").style.backgroundColor = `rgb(255, 75, 75)`;
        document.getElementById("ascensionButton").addEventListener('mouseover', function(){document.getElementById("ascensionButton").style.backgroundColor = 'red';});
        document.getElementById("ascensionButton").addEventListener('mouseout', function(){document.getElementById("ascensionButton").style.backgroundColor = 'rgb(255, 75, 75)';});
    }
}

//ascension variables

var requirement = 1000000;
var ascensionCounter = 0;

//extra ascension variables

var attributeSelector = 0;

var ascensionCounterWorkers = 0;
var ascensionCounterMoneyStats = 0;
var ascensionCounterGambling = 0;

//ascension functions

function Ascension(){
    if (balance >= requirement && ascensionCounter <= 10) {
        document.getElementById("base").style.display = "none";
        document.getElementById("backButton").style.display = "inline";
        document.getElementById("main").style.display = "none";
        document.getElementById("factory").style.display = "none";
        document.getElementById("casino").style.display = "none";
        document.getElementById("ascend").style.display = "inline";
    }
    if (balance < requirement) {
        alert(`You need ${requirement - balance} more to ascend!`)
    }
}

//ascension screen function modified to skip the requirement check, for the "fail" end screen.

function ModdedAscension(){
    document.getElementById("base").style.display = "none";
    document.getElementById("backButton").style.display = "inline";
    document.getElementById("main").style.display = "none";
    document.getElementById("factory").style.display = "none";
    document.getElementById("casino").style.display = "none";
    document.getElementById("ascend").style.display = "inline";

    document.getElementById("gameEndScreen").style.display = "none";
}

function Reset(){
    requirement *= 10;

    balance = 0; upgradePrice = 100; workersCounter = 0;

    profit = 0;

    if (ascensionCounterMoneyStats == 0) {
        moneyPerClick = 1;
        moneyPerSecond = 0;
    }
}

function AscendWorkers(){
    ascensionCounterWorkers++;
    baseWorkerAmount *= 2;
}

function AscendMoneyStats(){
    ascensionCounterMoneyStats++;
    if (ascensionCounterMoneyStats == 1) {
        moneyPerSecond = 1; moneyPerClick = 4; upgradeAddition = 2;
    }
    if (ascensionCounterMoneyStats == 2) {
        moneyPerSecond = 4; moneyPerClick = 16; upgradeAddition = 4;
    }
    if (ascensionCounterMoneyStats == 3) {
        moneyPerSecond = 16; moneyPerClick = 64; upgradeAddition = 8;
    }
}

function AscendGambling(){
    ascensionCounterGambling++;
    range -= 2;
    chance = 100/range;

    if (range == 6) {
        document.getElementById("chance").textContent = `Win Probability: 16.667%`;
    }
    else {
        document.getElementById("chance").textContent = `Win Probability: ${chance}%`;
    }
}

//attribute button mouseover events

document.getElementById("ascendWorkers").addEventListener('mouseover', function(){
    document.getElementById("attributeInfo").textContent = `Double the efficiency of all workers.`;
    document.getElementById("attributeInfo").style.display = "inline";
    });
document.getElementById("ascendWorkers").addEventListener('mouseout', function(){
    document.getElementById("attributeInfo").style.display = "none";
});

document.getElementById("ascendMoneyStats").addEventListener('mouseover', function(){
    document.getElementById("attributeInfo").textContent = `Double money per second, money per click, and upgrade effectiveness.`;
    document.getElementById("attributeInfo").style.display = "inline";
    });
document.getElementById("ascendMoneyStats").addEventListener('mouseout', function(){
    document.getElementById("attributeInfo").style.display = "none";
});

document.getElementById("ascendGambling").addEventListener('mouseover', function(){
    document.getElementById("attributeInfo").textContent = `Increase the chance to win gambles and keep the winning amount the same.`;
    document.getElementById("attributeInfo").style.display = "inline";
    });
document.getElementById("ascendGambling").addEventListener('mouseout', function(){
    document.getElementById("attributeInfo").style.display = "none";
});

//attribute button onclick functions

function SelectWorkers(){
    if (ascensionCounterWorkers >= 3) {
        alert("You've reached the limit on this attribute!");
        attributeSelector = 0;
    }
    else {
        attributeSelector = 1;
    }
}

function SelectMoneyStats(){
    if (ascensionCounterMoneyStats >= 3) {
        alert("You've reached the limit on this attribute!");
        attributeSelector = 0;
    }
    else {
        attributeSelector = 2;
    }
}

function SelectGambling(){
    if (ascensionCounterGambling >= 4) {
        alert("You've reached the limit on this attribute!");
        attributeSelector = 0;
    }
    else {
        attributeSelector = 3;
    }
}

//ascend

async function Ascend(){
    if (attributeSelector == 0) {
        alert("You have to select an attribute!")
    }
    else {
        ascensionCounter++;

        //cosmetic loading screen

        Reset(); ShowNothing();
        document.getElementById("ascensionLoadingScreen").style.display = "inline";

        await Delay(1000); document.getElementById("ascensionLoadingScreen").textContent = `ASCENDING.`;
        await Delay(1000); document.getElementById("ascensionLoadingScreen").textContent = `ASCENDING..`;
        await Delay(1000); document.getElementById("ascensionLoadingScreen").textContent = `ASCENDING...`;
        await Delay(1000);

        document.getElementById("ascensionLoadingScreen").style.display = "none";
        document.getElementById("ascensionLoadingScreen").textContent = `ASCENDING`

        Main();

        if (attributeSelector == 1) {
            AscendWorkers(); attributeSelector = 0;
        }
        if (attributeSelector == 2) {
            AscendMoneyStats(); attributeSelector = 0;
        }
        if (attributeSelector == 3) {
            AscendGambling(); attributeSelector = 0;
        }
    }

    if (ascensionCounter == 1) {
        document.getElementById("ascensionCounter").textContent = `You've ascended ${ascensionCounter} time.`;
    }
    if (ascensionCounter > 1 && ascensionCounter != 10) {
        document.getElementById("ascensionCounter").textContent = `You've ascended ${ascensionCounter} times.`;
    }
    if (ascensionCounter == 10) {
        document.getElementById("ascensionCounter").textContent = "You've reached your last ascension! You can't ascend anymore.\nReach the integer limit of JavaScript (~9 quadrillion) to win the game."
    }
}

//delay function

function Delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
