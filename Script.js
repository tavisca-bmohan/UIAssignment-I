function GetAutopopulateData(){
    console.log(AutopopulateData);

    for (var index = 0; index < AutopopulateData.length; ++index) {
        var node = document.createElement("li");
        var textnode = document.createTextNode(
                AutopopulateData[index].id + " :- " + AutopopulateData[index].title
            );
        node.appendChild(textnode);
        document.getElementById("autopopulate-div-ul").appendChild(node);
    }
}

function addItem(){
    var input = document.getElementById("Input");
    var node = document.createElement("LI");
    var nodeItem = document.createTextNode(input.value);
    node.appendChild(nodeItem);
    doccument.getElementById("List").appendChild(node);
}	
function searchItem() {
    var a, txtValue;
    var input = document.getElementById("Input");
    var filter = input.value.toUpperCase();
    var list = document.getElementById("List");
    var listItem = list.getElementsByTagName("li");
    for (var i = 0; i < listItem.length; i++) {
        a = listItem[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            listItem[i].style.display = "";
        } else {
            listItem[i].style.display = "none";
        }
    }
}