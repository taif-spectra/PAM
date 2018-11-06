var sizePic = document.getElementById("sizePicker");
const table = document.getElementById("pixelCanvas");


sizePic.addEventListener("submit", function makeGrid(event){
    event.preventDefault();
    if (table.hasChildNodes){
        table.removeChild(table.row); // I want to remove any previuosly made tables when the user press submit without changing the HTML and CSS files 
    }else{
   

        var tWidth = document.getElementById("inputWidth").value;
        var tHeight = document.getElementById("inputHeight").value;
        var cell = document.createElement("td");
    
   
        for (var x = 0 ; x < tHeight; x++){
            var row = document.createElement("tr");
            table.appendChild(row);

            for (var y =0 ; y < tWidth; y++){
                    var cell = document.createElement("td");
                    row.appendChild(cell);
                
                    row.children[y].addEventListener("click", function color(event) {
                            event.preventDefault();
                            var cColor = document.getElementById("colorPicker").value
                            if (this.style.backgroundColor){  
                                this.style.backgroundColor = null
                            }else{
                                this.style.backgroundColor = cColor
                            }
                    })
            }
        }
    }
})
