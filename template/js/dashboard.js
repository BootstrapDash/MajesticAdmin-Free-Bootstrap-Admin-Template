(function($) {
  'use strict';
  $(function() {

    if ($('#cash-deposits-chart').length) {
      var cashDepositsCanvas = $("#cash-deposits-chart").get(0).getContext("2d");
      var data = {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8"],
        datasets: [
          {
            label: 'Returns',
            data: [27, 35, 30, 40, 52, 48, 54, 46, 70],
            borderColor: [
              '#ff4747'
            ],
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: "#fff"
          },
          {
            label: 'Sales',
            data: [29, 40, 37, 48, 64, 58, 70, 57, 80],
            borderColor: [
              '#4d83ff'
            ],
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: "#fff"
          },
          {
            label: 'Loss',
            data: [90, 62, 80, 63, 72, 62, 40, 50, 38],
            borderColor: [
              '#ffc100'
            ],
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: "#fff"
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: true,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
              zeroLineColor: "#e9e9e9",
            },
            ticks: {
              min: 0,
              max: 100,
              stepSize: 20,
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }],
          xAxes: [{
            display: true,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
            },
            ticks : {
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }]
        },
        legend: {
          display: false
        },
        legendCallback: function(chart) {
          var text = [];
          text.push('<ul class="dashboard-chart-legend">');
          for(var i=0; i < chart.data.datasets.length; i++) {
            text.push('<li><span style="background-color: ' + chart.data.datasets[i].borderColor[0] + ' "></span>');
            if (chart.data.datasets[i].label) {
              text.push(chart.data.datasets[i].label);
            }
          }
          text.push('</ul>');
          return text.join("");
        },
        elements: {
          point: {
            radius: 3
          },
          line :{
            tension: 0
          }
        },
        stepsize: 1,
        layout : {
          padding : {
            top: 0,
            bottom : -10,
            left : -10,
            right: 0
          }
        }
      };
      var cashDeposits = new Chart(cashDepositsCanvas, {
        type: 'line',
        data: data,
        options: options
      });
      document.getElementById('cash-deposits-chart-legend').innerHTML = cashDeposits.generateLegend();
    }

    if ($('#total-sales-chart').length) {
      var totalSalesChartCanvas = $("#total-sales-chart").get(0).getContext("2d");

      var data = {
        labels: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",'10', '11','12', '13', '14', '15','16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26','27','28','29', '30','31', '32', '33', '34', '35', '36', '37','38', '39', '40'],
        datasets: [
          {
            label: '2019',
            data: [42, 42, 30, 30, 18, 22, 16, 21, 22, 22, 22, 20, 24, 20, 18, 22, 30, 34 ,32, 33, 33, 24, 32, 34 , 30, 34, 19 ,34, 18, 10, 22, 24, 20, 22, 20, 21, 10, 10, 5, 9, 14 ],
            borderColor: [
              'transparent'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(47,91,191,0.77)"
          },
          {
            label: '2018',
            data: [35, 28, 32, 42, 44, 46, 42, 50, 48, 30, 35, 48, 42, 40, 54, 58, 56, 55, 59, 58, 57, 60, 66, 54, 38, 40, 42, 44, 42, 43, 42, 38, 43, 41, 43, 50, 58 ,58, 68, 72, 72 ],
            borderColor: [
              'transparent'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(77,131,255,0.77)"
          },
          {
            label: 'Past years',
            data: [98, 88, 92, 90, 98, 98, 90, 92, 78, 88, 84, 76, 80, 72, 74, 74, 88, 80, 72, 62, 62, 72, 72, 78, 78, 72, 75, 78, 68, 68, 60, 68, 70, 75, 70, 80, 82, 78, 78, 84, 82 ],
            borderColor: [
              'transparent'
            ],
            borderWidth: 2,
            fill: true,
            backgroundColor: "rgba(77,131,255,0.43)"
          }
        ]
      };
      var options = {
        scales: {
          yAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
              zeroLineColor: "#e9e9e9",
            },
            ticks: {
              display : true,
              min: 0,
              max: 100,
              stepSize: 10,
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }],
          xAxes: [{
            display: false,
            gridLines: {
              drawBorder: false,
              lineWidth: 1,
              color: "#e9e9e9",
            },
            ticks : {
              display: true,
              fontColor: "#6c7383",
              fontSize: 16,
              fontStyle: 300,
              padding: 15
            }
          }]
        },
        legend: {
          display: false
        },
        legendCallback: function(chart) {
          var text = [];
          text.push('<ul class="dashboard-chart-legend mb-0 mt-4">');
          for(var i=0; i < chart.data.datasets.length; i++) {
            text.push('<li><span style="background-color: ' + chart.data.datasets[i].backgroundColor + ' "></span>');
            if (chart.data.datasets[i].label) {
              text.push(chart.data.datasets[i].label);
            }
          }
          text.push('</ul>');
          return text.join("");
        },
        elements: {
          point: {
            radius: 0
          },
          line :{
            tension: 0
          }
        },
        stepsize: 1,
        layout : {
          padding : {
            top: 0,
            bottom : 0,
            left : 0,
            right: 0
          }
        }
      };
      var totalSalesChart = new Chart(totalSalesChartCanvas, {
        type: 'line',
        data: data,
        options: options
      });
      document.getElementById('total-sales-chart-legend').innerHTML = totalSalesChart.generateLegend();
    }

    $('#recent-purchases-listing').DataTable({
      "aLengthMenu": [
        [5, 10, 15, -1],
        [5, 10, 15, "All"]
      ],
      "iDisplayLength": 10,
      "language": {
        search: ""
      },
      searching: false, paging: false, info: false
    });

  });
})(jQuery);