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
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  
  for (let playlistId in library.playlists){
    let formatPlaylists = library.playlists[playlistId]
      let  playlistName = formatPlaylists.name;
      let tracksToPlay = formatPlaylists.tracks.length;
      let printAllPlaylists = `${playlistId}: ${playlistName} - ${tracksToPlay} tracks`;
      console.log(printAllPlaylists)
    }
  }

//printPlaylists()

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {

  for (let trackListId in library.tracks){
    let formatTrackList = library.tracks[trackListId]
    let trackName = formatTrackList.name
    let trackArtist = formatTrackList.artist;
    let trackAlbum = formatTrackList.album

    let printAllTracks = `${trackListId}: ${trackName} by ${trackArtist} (${trackAlbum})`
    console.log(printAllTracks);
  }

}

//printTracks()

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  const currentPlaylist= library.playlists[playlistId]  
  let playlistsId = currentPlaylist.id;
  let playlistName = currentPlaylist.name;
  let playlistLength = currentPlaylist.tracks.length;

  console.log(`${playlistsId}: ${playlistName} - ${playlistLength} tracks`)

  for (let trackData of currentPlaylist.tracks){
      const tracks = library.tracks[trackData]
      let trackId = tracks.id;
      let trackName = tracks.name;
      let trackArtist = tracks.artist;
      let trackAlbum = tracks.album;

      console.log (`${trackId}: ${trackName} by ${trackArtist} (${trackAlbum})`)
    }
}
//printPlaylist("p02")

// adds an existing track to an existing playlist  

let modifyLibrary = JSON.parse(JSON.stringify(library));

const addTrackToPlaylist = function(trackId, playlistId) {
  let currentPlaylist = modifyLibrary.playlists[playlistId];
  
  if(!currentPlaylist.tracks.includes(trackId)){
    currentPlaylist.tracks.push(trackId)
    console.log("Tracks in New Library: " + modifyLibrary.playlists["p01"].tracks)
  }

  return modifyLibrary;
}
  
//addTrackToPlaylist("t03", "p01")

// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}


// adds a track to the library
const addTrack = function(name, artist, album) {
  const newId = generateUid()
  modifyLibrary.tracks[newId] = {
    id: newId,
    name: name,
    artist: artist,
    album: album,
  }
  return modifyLibrary
}

console.log(addTrack("Sleep", "One True God", "Unholy"))


// adds a playlist to the library
const addPlaylist = function(name) {
  const newId = generateUid();
  modifyLibrary.playlists[newId]= {
    id: newId,
    name: name,
    tracks: [],
  }
  return modifyLibrary
}
console.log(addPlaylist("Car Jam"))

// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

}