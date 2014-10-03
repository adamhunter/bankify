Bankify.Tracker = function() {
  this.tracks = [];
}

Bankify.Tracker.prototype.track = function(track) {
  this.tracks.push(track);
  return track;
}

Bankify.service('Tracker', Bankify.Tracker);
