  function formSurahSubmit() {
		var value = $('#surah').val();
		var trans = $('#urdu').val();
		
		if (value != null && value == 0) {
			console.log(value);
			window.location.href = appContext;
			return		
		}
		if($('#tafseerchk').is(":checked")) {
			if (trans != null && trans > '0') {
				
				if(value =='surah-al-taubah'){
					 window.location.href = appContext + value +"/ayat-1/translation-"+trans+"/tafseer";
					 return
				}
				
				window.location.href = appContext +value +"/ayat-0/translation-"+trans+"/tafseer";
				return	
			}	
		}
		else {
			
			if (trans != null && trans > '0') {
				window.location.href = appContext +value + "/translation-"+trans;
				return	
			}	

		}
		
		if (value != null && value.trim().length > 0) {
			console.log(value);
			window.location.href = appContext + value ;
		}
	} 
	function formParaSubmit() {
		var value = $('#para').val();
		var trans = $('#urdu').val();
		
		if (value != null && value == 0) {
			console.log(value);
			window.location.href = appContext;
			return		
		}
		
	
		if (trans != null && trans > '0') {
			window.location.href = appContext +"para-" +value + "/translation-"+trans;
			return	
		}	
	
		
		if (value != null && value.trim().length > 0) {
			console.log(value);
			window.location.href = appContext+"para-" + value ;
				
		}
	}
	
	  function formAayaatSubmit() {
		var ayat = $('#ayat').val();
		var trans = $('#urdu').val();
		var surah = $('#surah').val();
		
		if (ayat != null && ayat.trim().length > 0) {
			console.log(ayat);
			
			if($('#tafseerchk').is(":checked")) {
				if(trans != null && trans > '0'){
					 window.location.href = appContext + ayat+"/translation-"+trans+"/tafseer";
				 }
				 else {
					 window.location.href = appContext + ayat+"/translation-1/tafseer";
				}
				
				if (ayat != null && ayat == '-1'){
					
					if(surah =='surah-al-taubah'){
						 window.location.href = appContext + surah +"/ayat-1/translation-"+trans+"/tafseer";
						 return
					}
					
					 window.location.href = appContext + surah +"/ayat-0/translation-"+trans+"/tafseer";
				}
				
				return
	         }
			
			var trans = $('#urdu').val();
			if (trans != null && trans > '0') {
				
				if (ayat != null && ayat == '-1'){
					 window.location.href = appContext + surah +"/translation-"+trans;
					 return
				}
				
				window.location.href = appContext + ayat +"/translation-"+trans;
				return
			}
			
			if (ayat != null && ayat == '-1'){
				 window.location.href = appContext + surah ;
				 return
			}
			
			window.location.href = appContext + ayat ;
			
		}
	} 
	
	  function fortranslation() {
		var para = $('#para').val();
		var surah = $('#surah').val();
		var ayat = $('#ayat').val();
		
		var trans = $('#urdu').val();
		
		
		if($('#tafseerchk').is(":checked")) {
			
			if(trans != null && trans > '0'){
				 window.location.href = appContext + ayat+"/translation-"+trans+"/tafseer";
			 }
			 else {
				 window.location.href = appContext + ayat+"/translation-1/tafseer";
			}
			
			return
		}
		
		
		
		if(trans == 0){
				if(ayat != null && ayat != '-1'){
					window.location.href = appContext + ayat ;
					return
				}
				else if (para != null && para != '0'){
					window.location.href = appContext+"para-" + para ;
					return
				}
				else if(surah != null && surah != '0'){
					window.location.href = appContext + surah ;
					return
				}
		
		}
		else{
			if (para != null && para != '0') {
				window.location.href = appContext + "para-"+para+"/translation-"+trans ;
			}
			else if(ayat != null && ayat != '-1'){
				window.location.href = appContext + ayat +"/translation-"+trans;
			}
			else if(surah != null && surah != '0'){
				window.location.href = appContext + surah +"/translation-"+trans;
			}
		}	
	} 
	  
	  
	  function fortafseer() {
		  var surah = $('#surah').val();
		  var ayat = $('#ayat').val();
          var trans = $('#urdu').val();
          
          var para = $('#para').val();
          var forTafseerSurah =$('#forTafseerSurah').val();
    if($('#tafseerchk').is(":checked")) {
              
          if(para != null && para > '0'){
        	  if(trans != null && trans > '0'){
        		  window.location.href = appContext + forTafseerSurah +"/ayat-0/translation-"+trans+"/tafseer";
        	  }
        	  else  {
        	  window.location.href = appContext + forTafseerSurah +"/ayat-0/translation-1/tafseer";
        	  }
          }
          
           if(ayat != null && ayat != '-1'){
        	   
        	   if(trans != null && trans > '0'){
				window.location.href = appContext + ayat +"/translation-"+trans+"/tafseer";
        	   }
        	   else{
        		window.location.href = appContext + ayat +"/translation-1/tafseer";   
        	   }
			}
			else if(surah != null && surah != '0'){
				
				
				if(surah =='surah-al-taubah'){
					
					if(trans != null && trans > '0'){
						 window.location.href = appContext + surah +"/ayat-1/translation-"+trans+"/tafseer";
					 }
					 else {
						 window.location.href = appContext + surah +"/ayat-1/translation-1/tafseer";
					}
				}
				else {
				
					if(trans != null && trans > '0'){
						 window.location.href = appContext + surah +"/ayat-0/translation-"+trans+"/tafseer";
					 }
					 else {
						 window.location.href = appContext + surah +"/ayat-0/translation-1/tafseer";
					}
				}
			}
		  
    }     
     else{
	    	 if (surah != null && surah.trim().length > 0) {
	 			console.log(surah);
	 			window.location.href = appContext + surah +"/translation-"+trans;
	 		}
        	 
         }
	}
	  
	  
//$(document).ready(function(e) {
//
//	$(document).ajaxStart(function(){
//	        $("#wait").css("display", "block");
//	 });
//	$(document).ajaxComplete(function(){
//	        $("#wait").css("display", "none");
//	});	  
//	  
//		
//});	  
	  
	  
	  
	  var processing= false;


		function loadMoreAayaatMobile() {

	        var serializedData = $('#filterform').serialize();

	        $.ajax({
	            // url : appContext,
	            type: 'GET',
	            dataType: 'html',
	            data: serializedData + "&ajax=true",
	            success: function(data) {

	                $('#filterform').remove();
	                $("#araayat").append(data);
	         
	            	
	            	processing = false;
	            	
	

	            },
	            error: function() {
	                console.log("Some error there.");
	            }
	        });

	    }

	    function loadMoreAayaat(positionBeforeLoading) {

	        var serializedData = $('#filterform').serialize();

	        $.ajax({
	            // url : appContext,
	            type: 'GET',
	            data: serializedData + "&ajax=true",
	            success: function(data) {

	                $('#filterform').remove();
	                $("#araayat").append(data);
	            	$(window).scrollTop(positionBeforeLoading);
					processing = false;
	
	            },
	            error: function() {
	                console.log("Some error there.");
	            }
	        });

	    }

	   $(document).ready(function(e) {

	        $(document).scroll(
	            function(e) {
	        
	        if (processing)  {
	             return false;
	         }    
				if ($(window).width() < 700){
				      if ($(window).scrollTop() >= ($(document).height() - $(window).height() * 1.1)) {
	               // if ($(window).scrollTop() == $(document).height() - $(window).height()) {
	  					processing = true;
	  					
	                    if ($('#noMoreData').val() == 'false') {
	                        loadMoreAayaatMobile();
	                    } 
					
	                }
				}
				else
				{
					
					
	               // if ($(window).scrollTop() == $(document).height() - $(window).height()) {
					if (($(window).scrollTop() + $(window).innerHeight()) >= $(document).height()-100){ 
	  					processing = true;
	                    if ($('#noMoreData').val() == 'false') {
	                        loadMoreAayaat($(window).scrollTop());
	                    } 
	                }
					
				}
					
					
	            });

	    });
	  