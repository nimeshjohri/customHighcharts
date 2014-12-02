angular.module('customApp').directive('myCustomer', function() {

  return {
  	
    restrict: 'ACE',
    link: function(scope, element, attr) {
      scope.$watch('Point', function (data) {
        var cInput=[];
        for(var i=0;i<data.length;i++){
        var plot={};
        plot.data=[data[i]];
        cInput.push(plot);
         }
    	console.log(data);
      console.log(cInput);      
    element.highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'World\'s largest cities per 2014'
        },
        subtitle: {
            text: 'Source: <a href="http://en.wikipedia.org/wiki/List_of_cities_proper_by_population">Wikipedia</a>'
        },
        xAxis: {
            type: 'category',
            title: {
                text: 'Values'
            },
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Verdana, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Population (millions)'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>'
        },
        series: cInput
    })
  }, true);
},
template: 'hello'
}
});