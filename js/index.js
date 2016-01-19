
$('document').ready(function() {
    var images = [ 
        { 
            name: ['new york', 'ny', 'nyc'],
		    src: 'images/nyc.jpg'},
		{ 
		    name: ['austin'],
		    src: 'images/austin.jpg'},
		{
		    name: ['la', 'los angeles', 'lax'],
		    src: 'images/la.jpg'},
		{
		    name: ['sf', 'san fransisco', 'san fran'],
		    src: 'images/sf.jpg'},
		{
		    name: ['sydney', 'syd'],
		    src: 'images/sydney.jpg'}
    ];
    
    $('#submit-btn').click(function(e) {
        e.preventDefault();
       // console.log('button clicked');
     
       var userInput = $('#city-type').val();
       userInput = userInput.toLowerCase().trim();
       
       
        images.forEach(function(element, index) {
           // console.log(element, index);
        
        
            //console.log(element.src);
            element.name.forEach(function(element1, index1) {
              //  console.log(element1, index1);
                
                if(userInput === element1) {
                    $('body').css('background-image', 'url(' + element.src + ')');
                    
                //    console.log('new image');
                }
            });
        
        });
    
          /*  version 2
            
            images.forEach(imagesObject);
            
            function imagesObject(element, index) {
                console.log(element, index);
                
                element.name.forEach(cityName);
                // body...
            }
            
            function cityName(element1, index1) {
                console.log(element1, index1);
                
                console.log(images(index).src);
                console.log(element.src);
                
                if(userInput === element1) {
                    $('body').css('background-image', 'url(' + element.src + ')');
           
          
            }
        });
                 end of version 2 */
    });

});
/* 
Use the .css function of Jquery to change the background
*/