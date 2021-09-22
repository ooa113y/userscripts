// ==UserScript==
// @name         PQ QR code Citra converter
// @namespace    https://github.com/ooa113y/userscripts
// @match        https://aqiu384.github.io/*
// @description  Converts the autogenerated Persona Q/Q2 demon QR codes into a format compatible with the Citra emulator
// @icon         https://aqiu384.github.io/favicon.ico
// @homepageURL  https://github.com/ooa113y/userscripts/tree/master/scripts
// @version      2
// ==/UserScript==

document.body.addEventListener('click', event => {
    // Check if user clicked image
    let image = document.querySelector('app-qrcode img')
    if (event.target !== image) return
    // Resize image to fit Citra's virtual camera
    let canvas = document.createElement('canvas')
    canvas.width = 640
    canvas.height = 480
    canvas.getContext("2d").drawImage(image, 0, 0, 640, 480)
    // Generate download
    let a = document.createElement('a')
    a.href = canvas.toDataURL()
    a.download = document.querySelector('[formcontrolname="demon"]').value
    a.click()
})
