// https://github.com/CarpeNoctem/NoSoundCloudComments

// ==UserScript==
// @match http://*.soundcloud.com/*
// @name           NoSoundCloudComments
// @version        0.1
// @namespace      http://soundcloud.com
// @description    Toggles the comments off for each SoundCloud track on the "old version" of SoundCloud.
// ==/UserScript==

var s = document.createElement("script");
s.innerHTML = "$(document).ready(function() {$('a.comments-toggle').click();});";
document.body.appendChild(s);
