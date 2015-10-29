newGrid(16);

$('.square').on('mouseenter',this.id,function(){
    $(this).addClass('highlighted');
});

$('#clearButton').on('click',function(){
    $('.square').removeClass('highlighted');
    var userSize = prompt('How many squares per side?', '16');
    if (userSize < 2 || userSize === 0) {
        userSize = 2;
    }
    else if (userSize % 2 > 0) {
            // if sideSize is not square then round - parseInt() to avoid concatenation and do integer addition
		userSize = parseInt(userSize) + 1;
    }
    newGrid(userSize);
});

/*function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}*/

function newGrid(sideSize){
    $('#container').empty();
    var squareSize = (400 / sideSize) - 4;
    sideSize = Math.pow(sideSize,2);
    for (i = 0; i < sideSize; i++){
        $('#container').append("<div class='square'></div>");
    }
    $('.square').css('width', squareSize);
    $('.square').css('height', squareSize);
    $('.square').on('mouseenter',this.id,function(){
    	$(this).addClass('highlighted');
        //$(this).css('background-color', getRandomColor);
	});
}
