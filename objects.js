var playlist = new Object({ 'Slowdive': 'Alison'});

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {artistName: songTitle});
}