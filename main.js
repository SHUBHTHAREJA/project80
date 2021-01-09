

function show_paragraph1(){
    var inputs =[];
    for (var i = 1; i < 6; i++){
inputs.push(document.getElementById("para1_input_box_"+i).value);
    }
    document.getElementById("show_paragraph1").innerHTML=inputs.join(". ");
    inputs.push("<div>"+inputs[i]+"</div>");
}
function show_paragraph2(){
    for (var j = 1; i < 6; i++){
inputs.push(document.getElementById("para1_input_box_"+j).value);
    }
    document.getElementById("show_paragraph2").innerHTML=inputs.join(". ");
    inputs.push("<div>"+inputs[j]+"</div>");
}