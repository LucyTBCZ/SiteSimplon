// Fait à 4 mains
var partAfficher=null
var listIdPart=["Presentation","Qui","Dev","Simplon"]
var listDivPart=[]
for (var i = 0; i < listIdPart.length; i++) {
    var div = document.getElementById (listIdPart[i])
    listDivPart[i]= div
}

var listIdButton=["un","deux","trois","quatre"]
var listDivButton=[]
for (var i = 0; i < listIdButton.length; i++) {
    var div = document.getElementById (listIdButton[i])
    listDivButton[i]= div
}

for (var i = 0; i < listDivButton.length; i++) {
    listDivButton[i].onclick=function (event){
    	cacherTout()
        for (var i = 0; i < listIdButton.length; i++) {
            if(event.target.id == listIdButton[i])
            {
             
               listDivPart[i].style.display="block"
            }
        }

    }
}

var cacherTout= function(){
	for (var i = 0; i < listDivPart.length; i++) {
		listDivPart[i].style.display="none";
	}
}