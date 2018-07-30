$(document).ready(function(){


var topics =['bears','sharks','whales','goats','foxes','dogs','owls','horses','bugs',]

var button=function(){
    $('#buttonsection').empty();
    for(var i=0;i<topics.length; i++){
        var newbutton=$('<button class=btn-success>');
        newbutton.attr('data-type',topics[i]);
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
button();
submit();

});