$(document).ready(function(){


var topics =['bears','sharks','whales','goats','foxes','dogs','owls','horses','bugs',]

var button=function(){
    $('#buttonsection').empty();
    for(var i=0;i<topics.length; i++){
        var newbutton=$('<btn>');
        newbutton.attr('data-type');
        newbutton.text(topics[i]);
        $('#buttonsection').append()
    }
}

button();
});