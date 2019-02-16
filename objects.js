var playlist = new Object({ artist: "song"});

function updatePlaylist(playlist, name, title) {
  return Object.assign({}, playlist, {[name]: title})
}