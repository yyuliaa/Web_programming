    const data = {
      labels: ['0','25', '50', '75', '100', '125', '150', '175', '200', '225', '250'],
      datasets: [
          {
        data: [1, 2, 7, 3, 6, 5, 15, 3, 13, 4, 0],
        backgroundColor:
          'rgba(58,147,187,255)',
        borderColor: 'rgba(0, 0, 0, 1)',

        borderWidth: 0.1,
	tension : 0.4
	//fill : 1
      },
{

        data: [2, 5, 15, 7, 12, 10, 57, 14, 27, 12, 4],
        backgroundColor:
          'rgba(134,211,205,255)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 0.1,
	tension : 0.4,
	//fill : 1
      }


]

    };

    // config 
    const config = {
      type: 'line',
      data,
      options: {
        scales: {
          y: {
	    stacked : true,
            beginAtZero: true
          }
        }
      }
    };

    // render init block
    const myChart = new Chart(
      document.getElementById('myLineChart'),
      config
    );
