// ==UserScript==
// @name         Add NATIONAL DEX number
// @namespace    http://tampermonkey.net/
// @version      2025-08-20
// @description  
// @author       MerúM
// @match        https://mudae.net/character/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mudae.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const inputData = document.querySelector(".misc-input.element-data");

    if(document.getElementById("series-name").innerText == "Pokédex") {
        document.querySelector(".more[data-contribution='misc']").click();
        document.querySelector(".misc-label.element-name").value = "National Nº";

        document.body.onkeyup = function(e) {
            if(e.key == " " || e.code == "Space" || e.keyCode == 32) {
                if(document.querySelector(".misc-input.element-data") === document.activeElement) {
                    inputData.value = inputData.value + "| ";
                }
            }
        }
    }

})();
