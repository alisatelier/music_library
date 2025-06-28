const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },
            
  generateUid() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },

  printPlaylists() {
    for (let playlistId in this.playlists) {
      const playlist = this.playlists[playlistId];
      console.log(`${playlistId}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    }
  },

  printTracks() {
    for (let trackId in this.tracks) {
      const track = this.tracks[trackId];
      console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },

  printPlaylist(playlistId) {
    const playlist = this.playlists[playlistId];
    if (!playlist) {
      console.log(`Playlist ${playlistId} not found.`);
      return;
    }
    console.log(`${playlist.id}: ${playlist.name} - ${playlist.tracks.length} tracks`);
    for (let trackId of playlist.tracks) {
      const track = this.tracks[trackId];
      console.log(`${track.id}: ${track.name} by ${track.artist} (${track.album})`);
    }
  },

  addTrack(name, artist, album) {
    const id = this.generateUid();
    this.tracks[id] = {
      id: id,
      name: name,
      artist: artist,
      album: album
    };
    console.log(`Track "${name}" added with ID: ${id}`);
    return id;
  },

  addPlaylist(name) {
    const id = this.generateUid();
    this.playlists[id] = {
      id: id,
      name: name,
      tracks: []
    };
    console.log(`Playlist "${name}" added with ID: ${id}`);
    return id;
  },

  addTrackToPlaylist(trackId, playlistId) {
    const playlist = this.playlists[playlistId];
    if (!playlist) {
      console.log(`Playlist ${playlistId} not found.`);
      return;
    }
    if (!this.tracks[trackId]) {
      console.log(`Track ${trackId} not found.`);
      return;
    }
    if (!playlist.tracks.includes(trackId)) {
      playlist.tracks.push(trackId);
      console.log(`Added track ${trackId} to playlist ${playlistId}.`);
    } else {
      console.log(`Track ${trackId} already exists in playlist ${playlistId}.`);
    }
  }
};

library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");

const newTrackId = library.addTrack("Sleep", "One True God", "Unholy");
const newPlaylistId = library.addPlaylist("Car Jam");
library.addTrackToPlaylist(newTrackId, newPlaylistId);
library.printPlaylist(newPlaylistId);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}