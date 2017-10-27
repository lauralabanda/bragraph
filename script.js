// Our labels along the x-axis
var years = [1950,1955,1960,1965,1970,1975,1980,1985,1990,1995,2000,2005,2010,2015,];
// For drawing the lines
var crimesagainstlifeandhealth = [8441,9816,9823,12931,19881,23087,26563,34304,34304,43203,57147,61788,76376,93030,91300];
var murder= [66,59,73,201,100,122,135,126,121,179,175,238,329,305];
var sexualoffences = [2829,3200,4045,3934,3321,2738,3096,4098,5246,7761,8734,11711,17167,18057];
var crimesagainstthenarcoticsdrugsact = [5,35,146,737,15803,21110,59447,35971,26517,28473,32423,51807,87890,94035];


var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: years,
    datasets: [
      { 
        data: crimesagainstlifeandhealth,
        label: 'crimes against life and health',
        fill: false, 
        borderColor: "purple"
      },
        { 
        data: murder,
        label: 'murder',
        fill: false, 
        borderColor: "#00ff00"
      
      },
      { 
        data: sexualoffences,
        label: 'sexual offences',
        fill: false, 
        borderColor: "pink"
      },
      { 
        data: crimesagainstthenarcoticsdrugsact,
        label: 'crimes against the narcotics drugs act',
        fill: false, 
        borderColor: "yellow"
      },
    ]
  }
});
