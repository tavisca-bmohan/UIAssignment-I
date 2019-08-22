window.onload = function () {
    ShowItem();
}

function AddItem(){
	/*var addValue = document.getElementById("searchBar").value;
	var list = document.getElementById("list");
	var listItem = list.appendChild(document.createElement("li").appendChild(document.createTextNode(addValue)));
	document.getElementById("content").appendChild(listItem);*/

	let input = document.getElementById("searchBar");
    let node = document.createElement("li");
    let nodeItem = document.createTextNode(input.value);
    node.appendChild(nodeItem);
    document.getElementById("list").appendChild(node);
}

function ShowItem(event){
	//console.log(event);
	// IE does not know about the target attribute. It looks for srcElement
    // This function will get the event target in a browser-compatible way
    event = event || window.event;
    let target = event.target || event.srcElement;

    let showId = target.id + "-container";
    let ContentIds = document.getElementsByClassName("show-hide-section");
    //console.log(ContentIds);
    for(let object=0;object<ContentIds.length;object++){
    	//console.log(ContentIds[object].id);
    	//console.log(showId);
    	ContentIds[object].id == showId ? 
    	document.getElementById(showId).style.display = "block" : 
    	document.getElementById(ContentIds[object].id).style.display = "none"; 
    }
}


function myFunction() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("searchBar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
