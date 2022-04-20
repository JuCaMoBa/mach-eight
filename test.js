async function nbaPlayers(heigth) {
  return await fetch('https://mach-eight.uc.r.appspot.com')
    .then((response) => response.json())
    .then((data) => {
      const infoPlayers = data;
      let pairsPlayers = '';
      for (let i = 0; i < infoPlayers.values.length; i++) {
        const player1 = infoPlayers.values[i];
        for (let j = i + 1; j < infoPlayers.values.length; j++) {
          const player2 = infoPlayers.values[j];
          if (parseInt(player1.h_in) + parseInt(player2.h_in) === heigth) {
            pairsPlayers += `- ${player1.first_name} ${player1.last_name}   ${player2.first_name} ${player2.last_name} \n`;
          }
        }
      }
      return pairsPlayers.length == 0 ? 'no match found' : pairsPlayers;
    });
}

nbaPlayers(140).then((val) => console.log(val));
