const alleTekst = document.querySelectorAll('.tekst');
const alleNice = document.querySelectorAll('.nice');

let alleInhoud = [];

for (let i = 0; i < alleTekst.length; i++) {
  alleInhoud.push(alleTekst[i]);
  alleTekst[i].remove();
}

function verwijderModaal() {
  document.getElementById('modaal').remove();
}

function maakModaal(num) {
  console.log(alleInhoud[num]);
  let modaal = document.createElement('div');
  modaal.className = 'modaal';
  modaal.id = 'modaal';
  modaal.addEventListener('click', verwijderModaal);

  let sltknop = document.createElement('span');
  sltknop.className = ' sluiten';
  sltknop.innerHTML = '&#8855;'
  sltknop.addEventListener('click', verwijderModaal);

  let modaalInhoud = document.createElement('div');
  modaalInhoud.className = 'modaal-inhoud';
  modaalInhoud.innerHTML = alleInhoud[num].innerHTML;
  modaalInhoud.addEventListener('click', function(e) {
    e.stopPropagation();
  });
  modaalInhoud.prepend(sltknop);
  modaal.append(modaalInhoud);

  document.body.append(modaal);
}

for (let i = 0; i < alleNice.length; i++) {
  alleNice[i].addEventListener('click', function() {
    maakModaal(i)
  })
}


/*&#8855; fas fa-times-circle*/
