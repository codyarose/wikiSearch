$(document).ready(function() {
  
  $('#search').on('click', function() {
    $('#container-results').addClass('animated fadeInRight');
  });
  
  $("#random").click(function(){
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  });
  
  $("#search").on("click", function(){
    var link = "";
    var keyword = $("#search-input").val();
    var linkAPI = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=" + keyword + "&callback=?";
    $.getJSON(linkAPI, function(json) {
      
      for(var i = 0; i < json.query.search.length; i++){
				var tempName = json.query.search[i].title.split(' ').join("_");
				var info = json.query.search[i].snippet;
				var temp = "https://en.wikipedia.org/wiki/" +tempName;	
				link += "<a href =" +  temp + " target = \"_blank\"><div class= \"result\" ><strong>"+ json.query.search[i].title + "</strong><br/></br/>" + info + "</div></a>";
			};
			$(".resultList").html(link);
    });
  });
  
  
});