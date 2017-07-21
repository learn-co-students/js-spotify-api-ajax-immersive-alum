var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: [//FILL IN FROM THE API CALL - SONGS],
    datasets: [{
      label: 'Popularity',
      data: [//FILL IN POPULARITY # FOR EACH SONG]
      }]
  }
})
