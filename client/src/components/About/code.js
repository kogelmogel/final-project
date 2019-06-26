

window.addEventListener("load", function(){
	let nodes = document.querySelectorAll(".overlay");
	for(var i=0; i<nodes.length; i++){
        let words = nodes[i].innerText;
        let html = "";
        for(var i2=0; i2<words.length; i2++){
            if(words[i2] === " "){
                html += words[i2];
            }  else {html += "<span>"+words[i2]+"</span>"}
        }
        nodes[i].innerHTML = html;
    } 
});


