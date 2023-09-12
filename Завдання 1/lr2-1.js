const body = document.querySelector('body')
const pAll = document.querySelectorAll('p')

body.style.fontFamily = 'Arial, Helvetica, sans-serif'
pAll[0].style.cssText = `color:orange;
background-color:yellow;
font-size:16px;
padding:5px;
text-align:center;
font-size:35px;
`
pAll[1].style.cssText = `color: #7d7de4;
background-color:lightblue;
font-size:14px;
padding:5px;
text-align:right;
font-size:35px;
`
pAll[2].style.cssText = `color: #851313;;
background-color: rgb(244 121 160);
font-size:16px;
padding:5px;
text-align:left;
font-size:35px;
`