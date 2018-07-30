$(document).ready(function(){


var topics =['bears','sharks','whales','goats','foxes','dogs','owls','horses','bugs',]

var button=function(){
    $('#buttonsection').empty();
    for(var i=0;i<topics.length; i++){
        var newbutton=$('<button class=btn-success>');
        newbutton.attr('data-type',topics[i]);
        newbutton.attr('class','gif');
        newbutton.text(topics[i]);
        $('#buttonsection').append(newbutton)

    }
}
var submit=function(){ 
    $('#submit').on('click',function(event){
        event.preventDefault();
       var userinput= $('#userinput').val();
       topics.push(userinput);
       button();
       console.log(userinput);
       console.log(topics);
       
    });
}
var gif=function(){
    var buttonval =$(this).data('type');
    console.log(buttonval);

    var Apikey='S3NXExQ136K15fjsYcVgl7EiFHU5qkBT'
    var apisearch='http://api.giphy.com/v1/gifs/search?q='+buttonval+'&api_key=' + Apikey;
    $.ajax({
        url:apisearch,
        method:'GET'
    }).done(function(response){
        $('.gifimage').empty();
        for(var i=0;i<10;i++){
        gifstopped=response['data'][i]['images']['fixed_height_still']['url'];
        gifplaying=response['data'][i]['images']['fixed_height']['url'];
        }
        var gifs=$('<img>');
        gifs.attr('data-still',gifstopped);
        gifs.attr('data-animate',gifplaying);
        gifs.attr('src',gifstopped);
        $('.gif').append(gifs)
    });
    
}


button();
submit();
$(document).on('click','.gif',gif);



});