
$('document').ready(function() {
    var images = [ 
        { 
            name: ['new york', 'ny', 'NYC'],
		    src: '../images/nyc.jpg'},
		{ 
		    name: ['austin'],
		    src: '../images/austin.jpg'},
		{
		    name: ['la', 'los angeles', 'lax'],
		    src: '../images/la.jpg'
		},
		{
		    name: ['sf', 'san fransisco', 'san fran'],
		    src: '../images/sf.jpg'
		},
		{
		    name: ['sydney', 'syd'],
		    src: '../images/sydney.jpg'
		}
];
    $('#submit-btn').click(function(e) {
        e.preventDefault();
        console.log('button clicked');
        images.forEach()
    });
    
});

/* 
Use the .css function of Jquery to change the background
*/