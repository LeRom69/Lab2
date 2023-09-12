const tbodyElementsTd = document.querySelectorAll('td')
for (i = 0; i < tbodyElementsTd.length; i++)
  if (i % 2 == 0) tbodyElementsTd[i].classList.add('selected')