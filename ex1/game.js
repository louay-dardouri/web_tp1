function play() {
  const difficulty = prompt(
    "choisir un niveau (facile, intermediaire, difficile)",
  );
  const gameSettings = getSettings(difficulty);
  const random = Math.floor(Math.random() * gameSettings.range);
  console.log(random);
  let att = gameSettings.attempts;

  while (att) {
    let guess = prompt(
      `donner un nombre entre 1 et ${gameSettings.range} reste ${att} attempts`,
    );
    guess = parseInt(guess);

    if (isNaN(guess) || guess > gameSettings.range) {
      alert("invalide");
      continue;
    }
    if (guess == random) {
      alert("vous avez gagne");
      replay();
      return;
    }

    let msg = guess > random ? "tres grand" : "tres petit";
    alert(msg);
    att--;
  }

  prompt(`vous avez perdu le num etait: ${random}`);
  replay();
}

function getSettings(diff) {
  const settings = {
    facile: { attempts: 7, range: 30 },
    intermediaire: { attempts: 5, range: 50 },
    difficile: { attempts: 3, range: 100 },
  };
  return settings[diff.toLowerCase()] || settings["facile"];
}

function replay() {
  let c = confirm("jouer une autre fois?");
  if (c) {
    play();
  } else {
    return;
  }
}

play();
