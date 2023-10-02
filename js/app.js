const docTitle = document.querySelector('body h1');

console.log(`My ${docTitle.innerText.toLowerCase()}/app.js is being run…`);
const titlePEl = document.createElement('p');
titlePEl.innerHTML = `My <strong>${docTitle.innerText.toLowerCase()}/app.js</strong> is being run…`;
document.querySelector('body').appendChild(titlePEl);

