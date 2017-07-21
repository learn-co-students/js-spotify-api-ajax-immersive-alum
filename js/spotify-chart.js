var url = "https://api.spotify.com/v1/artists/43ZHCT0cAZBISjO8DG9PnE/top-tracks?country=SE";

var dataSetProperties = {
  fillColor: 'rgba(220,220,220,0.5)',
  strokeColor: 'rgba(220,220,220,0.8)',
  highlightFill: 'rgba(220,220,220,0.75)',
  highlightStroke: 'rgba(220,220,220,1)'
};

$(function() {
  getSpotifyTracks(success);
});

function extractTop10Tracks(tracks) {
  return tracks.slice(0, 10)
}

function extractPopularity(tracks) {
  return tracks.map(track => {
    return track.popularity
  })
}

function extractNames(tracks) {
  return tracks.map(track => {
    return track.name
  })
}

function chartData(labels, inputData) {
  let data = {
    labels: labels,
    datasets: [{
      label: 'Popularity',
      fillColor: 'rgba(220,220,220,0.5)',
      strokeColor: 'rgba(220,220,220,0.8)',
      highlightFill: 'rgba(220,220,220,0.75)',
      highlightStroke: 'rgba(220,220,220,1)',
      data: inputData
    }]
  }
  return data
}

function getSpotifyTracks(callback){
  $.ajax({
    url: url,
    success: function(response) {
      callback(response)
    }
    })
  }

function success(parsedJSON) {
  console.log(parsedJSON)
  let tracks = extractTop10Tracks(parsedJSON.tracks)
  let names = extractNames(tracks)
  let popularity = extractPopularity(tracks)
  let data = chartData(names, popularity)
  var ctx = document.getElementById("spotifyChart").getContext('2d')
  new Chart(ctx).Bar(data)
}
