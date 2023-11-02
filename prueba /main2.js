
// function getStreamersLOL(streamers) {
//   const streamersLeagueOfLegends = streamers.filter(function(streamer) {
//     return streamer.gameMorePlayed === 'League of Legends';
//   });
//   return streamersLeagueOfLegends;
// }



// console.log(getStreamersLOL(streamers));



const streamers = [
  { name: 'Streamer1', gameMorePlayed: 'League of Legends' },
  { name: 'Streamer2', gameMorePlayed: 'Fortnite' },
  { name: 'Streamer3', gameMorePlayed: 'League of Legends' },
  { name: 'Streamer4', gameMorePlayed: 'Minecraft' },
  { name: 'Streamer5', gameMorePlayed: 'League of Legends' }
];


function getStreamersLOL(str) {
  const lolStreamers = str.filter(function(str) {
    return str.gameMorePlayed.toLowerCase() == "league of legends"
  });
  return lolStreamers;
}
getStreamersLOL(streamers)
