const container = document.querySelector(".box");
const randomArray = [];
while (randomArray.length < 5) {
  const randomNumber = Math.floor(Math.random() * 100 + 1);
  if (!randomArray.includes(randomNumber)) {
    randomArray.push(randomNumber);
  }
}

container.innerHTML = randomArray;

setTimeout(() => {
  container.innerHTML = "Scrivi i numeri che hai appena visto";
  setTimeout(() => {
    let numeriInseriti = [];
    let numeriCoretti = [];
    let contatore = 0;
    for (let i = 0; i < 5; i++) {
      const numero = parseInt(prompt("Scrivi un numero di quelli visti"));

      numeriInseriti.push(numero);
    }

    for (let i = 0; i < numeriInseriti.length; i++) {
      if (randomArray.includes(numeriInseriti[i])) {
        contatore++;
        numeriCoretti.push(numeriInseriti[i]);
      }
    }

    if(contatore == 0) {
      container.innerHTML = `
    <ul>
      <li>Hai indovinato <span>${contatore}</span> numero/i</li>
    </ul>
    `;
    } else {
      container.innerHTML = `
    <ul>
      <li>Hai indovinato <span>${contatore}</span> numero/i</li>
      <li>Numeri indovinati: <span>${numeriCoretti}</span></li>
    </ul>
    `;
    }
    console.log(numeriCoretti);
  }, 1000);
}, 4000);
