  
  $(document).ready(function() {
 var score = 0;
    function checkScore(){
    if(score == 5){
      $("#score").fadeIn(5000);
    }}
    //Start
    $("#score").hide()
    $("#header").fadeOut(10000);
    $(".item, .b, .room").hide();
  $("#room1l, #room1s, #room1b, #room1,#crow").show();
  
  //This is to the left.
  $("#room1l").click(function() {
    $(".b, .room").hide();
    $("#room2, #room2s, #room2r").show();
   
   $("#room2s").click(function() {
    $(".b, .room").hide();
    $("#room3, #room3b, #gun").show();
    })
    
   $("#room2r").click(function() {
    $(".b, .room").hide();
    $("#room1, #room1l, #room1s, #room1b, #crow").show();
   
   })
   $("#room3b").click(function() {
    $(".b, .room").hide();
    $("#room2, #room2s, #room2r").show();
   
   })
   
   })//This is the end to the left.
//This is to the basement
  $("#room1b").click(function() {
    $(".b, .room").hide();
    $("#room4, #room4s, #room4b, #cover").show();
   
   $("#room4b").click(function() {
    $(".b, .room").hide();
    $("#room1, #room1s, #room1b, #room1l, #crow").show();
   
  })
  
   $("#room4s").click(function() {
    $(".b, .room").hide();
    $("#room5, #room5b,#torch").show();
   })
   
   
   $("#room5b").click(function() {
    $(".b, .room").hide();
    $("#room4, #room4s, #room4b, #cover").show();
   
  })
  
  
  })//End of the basement

  //This is the start of upstairs
  $("#room1s").click(function() {
    $(".b, .room").hide();
    $("#room6, #room6l, #room6b, #room6s").show();
   
  })
  
  $("#room6b").click(function() {
    $(".b, .room").hide();
    $("#room1, #room1s, #room1l, #room1b, #crow").show();
   
  })
  
  $("#room6s").click(function() {
    $(".b, .room").hide();
    $("#room7, #room7r, #room7b").show();
  });
  
   $("#room7r").click(function() {
    $(".b, .room").hide();
    $("#room8, #room8b,#knife").show();
   });
    
    $("#room7b").click(function() {
    $(".b, .room").hide();
    $("#room6, #room6s, #room6l, #room6b").show();
   });
    
    $("#room8b").click(function() {
    $(".b, .room").hide();
    $("#room7, #room7r, #room7b").show();
    });
    
    $("#room6l").click(function() {
    $(".b, .room").hide();
    $("#room9, #room9l, #room9b,#note").show();
    });
    
    $("#room9b").click(function() {
    $(".b, .room").hide();
    $("#room6, #room6l, #room6b, #room6s").show();
    });
    
    $("#room9l").click(function() {
    $(".b, .room").hide();
    $("#room10, #room10b").show();
    });
    
    $("#room10b").click(function() {
    $(".b, .room").hide();
    $("#room9, #room9l, #room9b, #note").show();
    });
    //This is the end of upstairs//
    //Start of items
    
    $("#torch").click(function() {
    $("#torch").remove();
    score++;
      checkScore();
    $("#room5, #room5b, #torchi").show();
  
    
    
    });
    
    $("#knife").click(function() {
    $("#knife").remove();
      score++;
      checkScore();
    $("#room8, #room8b, #knifei").show();
    
    
    });
    
    $("#gun").click(function() {
    $("#gun").remove();
      score++;
      checkScore();
    $("#room3, #room3b, #guni").show();
    
    
    });
    
    $("#note").click(function() {
    $("#note").remove();
      score++;
      checkScore();
    $("#room9, #room9b, #room9l, #notei").show();
    
    });
    
    $("#crow").click(function() {
    $("#crow").remove();
      score++;
      checkScore();
    $("#room1, #room1b, #room1l, #room1s, #crowi").show();
    
    
    });
    
    
    //End of items
});//This is the end of the jquery.//