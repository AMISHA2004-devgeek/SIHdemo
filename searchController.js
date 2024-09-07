var ayushapp=angular.module('ayushapp',['ngRoute','ui.bootstrap']);
var searchcontroller=ayushapp.controller("searchcontroller", function($scope,$http,$window){
    //alert("I am here");
	$scope.search_data="";
	$scope.result_found=false;
	$scope.searchfunction=function(){
		if( $scope.search_data!='' || $scope.search_data!=null ){
		
		var data1={
			text : $scope.search_data,
			category : 'medicine'
		};
		//alert(JSON.stringify(data1));
		var parameter={
			method : 'post',
			url : 'indexsearch',
			data : data1,
			'Content-Type' : 'application/json;charset=utf-8'
		};
		//alert(JSON.stringify(parameter));
		$http(parameter).then(function(response){
			//alert(JSON.stringify(response.data));
			$scope.result_found=true;
			$scope.search_result=response.data;
		});
		}
	};
	
	$scope.viewpdf=function($index)
	{
        //alert($index); 
        var parameter={
			method : 'post',
			url : 'pdfreader',
			'Content-Type' : 'application/json;charset=utf-8',
			data : $scope.search_result[$index]
		};
        //alert(JSON.stringify($scope.search_result[$index]));		
		$http(parameter).then(function(response){
			$window.open('pdfreader#view=Ayush64');
		});
	}
	
});