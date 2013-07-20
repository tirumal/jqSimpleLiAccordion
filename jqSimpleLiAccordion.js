/*
* Type : jQuery Plugin
* Description: jQuery Simple Li Based Acccordion (jqSimpleLiAccordion)
* Version: 1.0
* Author: Tirumal
* URL : www.code-tricks.com
* License: MIT License
*/

;(function($){
  "use strict";
  
  //options
  $.fn.jqSimpleLiAccordion = function(options) {
		var settings = $.extend({
			"openingSpeed" : "fast",
      "closingSpeed" : "fast",
      "toggleFirst" : true
		}, options);
      

      //main
			return this.each(function(index, value) {
        
        //define
				var liElement = $(this).find("> li");
				var divElement = liElement.find("div");
				var anchor = liElement.find("a");
        //toggle class
				$(this).find("li:even").addClass("even");
				$(this).find("li:odd").addClass("odd");
        
				liElement.first().addClass("first-child");
				liElement.last().addClass("last-child");
        
        //init hide
				divElement.hide();
        //Action on event
				anchor.click(function(event){
					event.preventDefault();
					$(this).blur();
					var thisParent = $(this).parent("li");
					var accordionContent = thisParent.find("div");
					var allDivs = thisParent.parent("ul").find("> li div");
					var allList = thisParent.parent("ul").find("li");

					if(accordionContent.is(":visible")){

				        accordionContent.slideUp(settings.closingSpeed);

				        allList.removeClass("active prev next disabled");
                        thisParent.addClass("disabled");
				    } else {
				    	allDivs.slideUp(settings.closingSpeed);

				    	allList.removeClass("active prev next disabled");

				        thisParent.addClass("active");
				        thisParent.next().addClass("next");
				        thisParent.prev().addClass("prev");

				        accordionContent.slideDown(settings.openingSpeed);
				    }
				});
              //Toggle first element : Boolean
              if(settings.toggleFirst){
				        $(this).find("li:first-child a").trigger("click");
              }
			});

	};
}(jQuery));