<<<<<<< HEAD


=======
var curOffset = 0;
var limitPerPage = 1;
>>>>>>> 9446eb23eb6252d44c8c2eba6eb0ad02d1a8e6e0

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById("search").addEventListener("click", function(e){
        e.preventDefault()
    const access_token = localStorage.getItem('access_token')
    const searchString = document.querySelector('.form-control').value
    const urlEncodedSearchString = encodeURIComponent(searchString)
    const searchedSong = 'q=' + urlEncodedSearchString + '&type=track%2Cartist&market=US&limit=10&offset=5'
    console.log(access_token)
        if (!access_token) {
            alert('Please Login again');
            return
        } else {
            $.ajax({
                
                url: 'https://api.spotify.com/v1/search?' + searchedSong,
                headers: {
                    'Authorization': 'Bearer ' + access_token,
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
<<<<<<< HEAD
=======

                // data: {
                //     q: query,
                //     type: 'track',
                //     limit: limitPerPage,
                //     offset: curOffset
                //   },

>>>>>>> 9446eb23eb6252d44c8c2eba6eb0ad02d1a8e6e0
                success: function (response) {
                    const musicContainer = document.querySelector('.music-container');
                    let musicHTML = renderSongs(response.tracks.items)
                    musicContainer.innerHTML = musicHTML
                    console.log(response)
                }
            });
        }

    })
})


function renderSongs(songs) {
    const musicHtmlArray = songs.map(function(currentSong){
        return `<div class="result">
            <img src="${currentSong.album.images[0].url}" class="album-cover">
            <div>${currentSong.name}</div>
            <div>${currentSong.popularity}</div>
            <div>${currentSong.artists[0].name}</div>
            <a href="${currentSong.preview_url}">Click Here For a Preview</a>
            </div>`
        });
        return musicHtmlArray.join('')
        
    }







