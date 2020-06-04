// ==UserScript==
// @name         Vidyo fixer
// @namespace    http://cern.ch
// @version      0.2
// @description  Stop showing vidyo banners when someone connects or disconnects
// @author       Alex Iribarren
// @match        https://webrtc.vidyo.cern.ch/*
// @grant        GM_addStyle
// @downloadURL  https://raw.githubusercontent.com/alexiri/vidyo-fixer/master/vidyo-fixer.user.js
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle('@import url(//fonts.googleapis.com/css?family=Coming+Soon);');
    GM_addStyle('.conference-name { font-family: "Coming Soon"; }');

    GM_addStyle('.banners { visibility: hidden; }');
})();
