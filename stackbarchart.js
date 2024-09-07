 ayushapp.directive('stackbarchart',function(){
        directive = {};
		
		directive.restrict='A';
		
		//directive.template="<canvas id='stack_bar'></canvas>";
		
		directive.scope= false;

        directive.compile=function(element, attributes){
		    //alert("I am here......");
            //alert(JSON.stringify(element.tagName));
            //var promise1=$http.post();
			//var promise2=$http.post();
			//$q.all([promise1,promise2]).then(function(response){
			//},
			//function(error){
			//});
			//var value = $cookies.JSESSIONID;
			//		alert(JSON.stringify(value));
			//alert("SessionId:"+ $cookies.get('SessionId'));
            var  canvas=document.getElementById("stack_bar_chart");
            //alert(JSON.stringify(x1.tagName));
			var  ctx=canvas.getContext('2d');
			var  mychart=new Chart(ctx,{
				type : 'bar',
				data : {
					labels : ["2020-2021","2021-2022"],
					datasets : [ {
						label : "Scholarship",
						backgroundColor : "#caf270",
						data : [120,160]
					},
					{
						label : "Certification",
						backgroundColor : "#45c490",
						data : [130,100]
	                }],	
				},
				options : {
					tooltips: {
								displayColors: true,
								callbacks:{
								mode: 'x',
								},
					},
					scales: {
							x: {
								stacked: true,
							},
							y: {
								stacked: true
							}
					},
					responsive: true,
					maintainAspectRatio: true,
					legend: { position: 'top' },
				}
				
			});
			
			
		}			
		
	return directive;
});
