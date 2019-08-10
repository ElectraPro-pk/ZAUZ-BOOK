const $rdf = require('rdflib');
//const store = new $rdf.IndexedFormula;
const store  = $rdf.graph();


var messages = document.getElementById('messages');
var textbox  = document.getElementById('textbox');
var button   = document.getElementById('send');


button.addEventListener('click',function(){
    if(!textbox.value == ""){
        var m = wordWraping(textbox.value);
        
        var newMessage = document.createElement('tr');
    newMessage.innerHTML = `<td colspan="2" id="me">`+m+`</td>`;
    messages.appendChild(newMessage);
    textbox.value = "";
    }
    
    

});

function wordWraping(data){
    
    if(data.length > 40){
        var breakpoint  = 40;
        var linebreakerS = "<p>";
        var linebreakerE = "<p>";
        var output = '';
        var previous = 0;
        for (var  i =0;i<data.length;i++){
            if(i % 40 == 0 && i!=0){
                output += linebreakerS+ data.charAt(i) +linebreakerS;
            }
            else{
                output += data.charAt(i);
            }
            //output = data.slice(previous,i);
            //previous = i;
            
        }
        
        return output;
    }
    
    return '<p>'+ data + '</p>';
}