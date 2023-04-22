/*
            
** RAPIDAPI **

id de ligas:
    - Liga Argentina    : 128 <
    - Ligue 1 francia   : 61  <
    - Premier league    : 39  <
    - Serie A           : 71, 135  <
    - La Liga           : 140 <
    - Copa Libertadores : 13  < 'Group Stage - 3  '
    - Champions league  : 2   <
    - Copa America      : 9   <
    - Copa Argentina    : 130

    En la funcion getFixture hay que pasar parametros:
        * idLeague: id de Ligas
        * inputRoundPhase = tipo String ( esta dentro de prop round )
        * inputDataNumber = fecha en juego (1 , 2 , 3 etc)
*/

export const getFixture = async (idLeague, inputRoundFase, inputDataNumber) => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY_RAPIDAPI,
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };
    
    const connect = await fetch(`https://api-football-v1.p.rapidapi.com/v3/fixtures?league=${idLeague}&season=2023&round=${inputRoundFase}${inputDataNumber}`, options)
    const res = await connect.json();
    
    const fixturie = [res].map(games => games.response)
    
    console.log(fixturie);
  }