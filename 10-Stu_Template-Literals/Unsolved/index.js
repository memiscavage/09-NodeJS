// music should be an object with title, artist, and album properties
const music = {
  // code here
  title: "Blowin' in the Wind",
  artist: "Bob Dylan",
  album: "The Freewheelin' Bob Dylan"
};

// Write code between the backticks tags to output the data from the music object above.
const songSnippet = `The song title is ${music.title}, which is on the album ${music.album} by ${music.artist}`;

console.log(songSnippet)