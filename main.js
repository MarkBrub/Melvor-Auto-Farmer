// ==UserScript==
// @name            Melvor Auto Farmer
// @version         1
// @description     Automaticly harvests and replants your selected crops
// @author          MarkBrub
// @match           https://*.melvoridle.com/*
// @exclude         https://wiki.melvoridle.com*
// ==/UserScript==

function AutoFarmer() {
    function HarvestAndPlant() {
        for (let i = 0; i <= 2; i++) {
            loadFarmingArea(i);
            harvestAll();
            plantAllSelectedCrops();
        }
    }

    // Run once per minute
    setInterval(HarvestAndPlant, 1000 * 60);
}

// Injecting the script when possible
// Code from Polfy's Melvor Items Drop Rates script
(() => {
    function loadScript() {
        // Load script after the actual Melvor game has loaded
        if (typeof isLoaded !== typeof undefined && isLoaded) {
            clearInterval(scriptLoader);

            const scriptElem = document.createElement("script");
            scriptElem.textContent = `try {(${AutoFarmer})();} catch (e) {console.log(e);}`;
            document.body.appendChild(scriptElem).parentNode.removeChild(scriptElem);
        }
    }

    const scriptLoader = setInterval(loadScript, 250);
})();
