// ********** prompt ile Kullanicidan Bilgi Almak **********
// https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt

let fullName = prompt("Lutfen Adinizi Giriniz: ")

let myName = document.querySelector("#myName")

myName.innerHTML = `${myName.innerHTML} <strong style="color:#e98208">${fullName}</strong>`