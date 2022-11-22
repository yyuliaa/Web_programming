var ctx = document.getElementById('myDoughnutChart').getContext('2d');

var myDoughnutChart = new Chart(ctx, {
type:"doughnut",
data:{"labels":
["Russia","Italy","Germany","Other","United States"],
datasets:[{
"label":"My First Dataset",
"data":[45,45,100,90,80],
"backgroundColor":[
"rgb(97,184,194,255)",
"rgb(46,124,173,255)",
"rgb(35,100,158,255)",
    "rgb(00,218,238,255)",
    "rgb(58,147,187,255)"]
}
]},
        options: {
            legend: {
                display: true,
                position: 'right',
                labels: {
                    fontColor: 'rgb(4,17,23,255)'
                }
            }
        }
});
Chart.pluginService.register({
    beforeDraw: function() {
        var width = myDoughnutChart.chart.width,
            height = myDoughnutChart.chart.height,
            ctx = myDoughnutChart.chart.ctx;
        ctx.restore();
        var fontSize = (height / 228).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        var text = "84,254 visits",
            textX = Math.round((width - ctx.measureText(text).width)/3.35),
            textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
    }
});

 