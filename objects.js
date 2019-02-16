var playlist = new Object({});

function updatePlaylist(playlist, name, title) {
  return Object.assign({}, playlist, {[name]: title})
}