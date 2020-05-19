// ==UserScript==
// @name         Vidyo fixer
// @namespace    http://cern.ch
// @version      0.1
// @description  Stop showing vidyo banners when someone connects or disconnects
// @author       Alex Iribarren
// @match        https://webrtc.vidyo.cern.ch/*
// @grant        GM_addStyle
// @downloadURL  https://raw.githubusercontent.com/alexiri/vidyo-fixer/master/vidyo-fixer.user.js
// ==/UserScript==

(function() {
    'use strict';

    GM_addStyle('.banners { visibility: hidden; }');
})();
