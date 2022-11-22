    const data23 = {
      labels: [ , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , ],
      datasets: [{
        data: [15,6,7,11,5,6,4,3,6,7,8,11,12,13,15,18,12,11,13,8,9,7,8,5,0,1,4,15,21,23,27,23,18,13,10,7,6,4,3,5,7,0], //зелений
        backgroundColor:
          'rgba(141,185,134, 1)',
        borderColor: 'rgba(0, 0, 0, 1)',

        borderWidth: 0.1,
	tension : 0.4
	//fill : 1
      },
{
        data: [34,45,50,45,51,46,54,40,30,36,39,30,34,39,41,46,43,41,42,38,33,31,35,37,33,38,33,37,32,30,24,22,30,20,40,20,44,25,13,5,20,20], //синій
        backgroundColor:
          'rgba(144,170,227,1)',
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 0.1,
	tension : 0.4,
	//fill : 1
      },
        {
         data: [57,70,55,60,62,60,74,73,77,71,70,77,65,68,57,70,80,72,77,59,64,55,66,57,70,58,61,58,60,65,60,58,59,66,58,53,61,52,62,50,41,47], //бузковий
              backgroundColor:
                  'rgba(220,194,241,1)',
              borderColor: 'rgba(0, 0, 0, 1)',
              borderWidth: 0.1,
              tension : 0.4,
              //fill : 1
          }


]

    };

    // config 
    const config23 = {
      type: 'line',
      data: data23,
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
    const myChart23 = new Chart(
      document.getElementById('myLineChart23'),
      config23
    );
