var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['droupouts', 'graduates'],
    datasets: [{
      label: '# of Tomatoes',
      data: [74, 26],
      backgroundColor: [
        'rgba(232, 224, 209)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(232, 224, 209)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderWidth: 1,
      hoverOffset: 4 
    }]
  },
  options: {
   	//cutoutPercentage: 40,
    responsive: false,

  }
});