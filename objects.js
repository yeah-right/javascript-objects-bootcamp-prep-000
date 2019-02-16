var playlist = new Object({ 'Slowdive': 'Alison'});

function updatePlaylist(playlist, artistName, songTitle) {
  console.log(playlist);
  return Object.assign({}, playlist, { [artistName]: songTitle });
  console.log(playlist);
}