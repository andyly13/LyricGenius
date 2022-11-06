
function load(){
    $('#Artist-search')
  .search({
    source: artists
  })

  $('#Album-search')
  .search({
    source: albums
  })
  
  $('#Song-search')
  .search({
    source: songs
  })

  ;
  $('body').on('keydown', (e) => {
    if (e.key === "Enter") {
        
        let artist = $('#Artist-input').val()
        if (artist === ''){
            return
        }
        
        let song = $('#Song-input').val()
        if (song === ''){
            return
        }
        
        submit(artist, song)
    } else {
      console.log(e);
    }
  });
}

function submit(artist, song){
    window.location = './lyrics.html?artist=' + artist + '&song=' + song
}





