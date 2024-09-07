	
	var fontSizeInc =0;
	var fontSizeDec =0;
	var vrInc = 0;
	var vrDec = 0;
	
	
	function  initialfont(){
		vrInc = 0;
		vrDec = 0;
	
	fontSizeInc = $(".SizeInc").css("fontSize");
	fontSizeDec = $(".SizeDec").css("fontSize");
	}
	 
	function  normalfont(){
		vrInc = 0;
		vrDec = 0;
	
     $(".SizeInc").css("fontSize", fontSizeInc );
     $(".SizeDec").css("fontSize", fontSizeDec );
}



function  increasefont(){
	vrDec = 0;
	vrInc = vrInc + 1;
	console.log(vrInc);
		
	if(vrInc >= 7){
		alert("You have reached the maximum limit");
		return;
		
	}
	
	
		$(".SizeInc").each(function(){
		var fontSize = $(this).css("fontSize");
		
		fontSize = parseInt(fontSize) + 1 + "px";
		$(this).css("fontSize",fontSize);
		console.log(this);
	 })
	
}


function  decreasefont(){
	vrInc = 0;
	vrDec = vrDec + 1;
	console.log(vrDec);
		
	if(vrDec >= 5){
		alert("You have reached the maximum limit");
		return;
		
		
	}
	
	
		$(".SizeInc").each(function(){
		var fontSize = $(this).css("fontSize");
		
		fontSize = parseInt(fontSize) - 1 + "px";
		$(this).css("fontSize",fontSize);
		 
		 
	 })
	
	
	
}