console.log('HTML parsing starts:', new Date() - document.startTime, 'ms');
console.log('eventlistener script: start');

// console.log('HTML ready State:', document.readyState);
// document.addEventListener('readystatechange', (e) => {
//     console.log('State Change:', document.readyState);
// });

if (document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', () => {
        console.log('HTML parsed with/without scripts:', new Date() - document.startTime, 'ms');
    });
}

window.addEventListener('load', () => {
    console.log('Document loaded with scripts:', new Date() - document.startTime, 'ms');
});

console.log('eventlistener script: end');