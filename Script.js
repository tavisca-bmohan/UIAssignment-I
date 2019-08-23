window.onload = function () {
    ShowItem();
}
var data = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6", "Item7"];

function AddItem() {
    let textrInSearchBar = document.getElementById("searchBar").value;
    if (!data.includes(textrInSearchBar) && textrInSearchBar != "")
        data.push(textrInSearchBar);
    else
        alert("Item already exist"); 
    ShowList();
	/*var addValue = document.getElementById("searchBar").value;
	var list = document.getElementById("list");
	var listItem = list.appendChild(document.createElement("li").appendChild(document.createTextNode(addValue)));
    document.getElementById("content").appendChild(listItem);*/


    // let input = document.getElementById("searchBar");
    // let node = document.createElement("li");
    // let nodeItem = document.createTextNode(input.value);
    // let list = document.getElementById("list");
    // node.appendChild(nodeItem);
    // let flag = checkIfAlreadyExists();
    // if(!list.includes(input.value))
    //     list.appendChild(node);
}

function ShowList() {
    document.getElementById("list").style.display = "block";
    let count = 1;
    let html = `<table id="item-table">`;
    for (var i = 0; i < data.length; i++) {
        html += `
            <tr id="row-${count}">
                <td>${data[i]}</td>
                <td>
                    <button type="button" id="editButton-${count}" onclick="EditItemInList(this)">EDIT</button>
                    <button type="button" id="deleteButton-${count}" onclick="DeleteItemInList(this)">DELETE</button>
                </td>
            </tr>
        `;
        count++;
    }
    html += "</table > ";
    document.getElementById("list").innerHTML = html;
}

let flag = false;
function EditItemInList(element){
    let row = document.getElementById("row-" + element.id.split('-')[1]);
    //let editButton = document.getElementById(element.id);
    //let deleteButton = document.getElementById("deleteButton-" + element.id.split('-')[1]);
    let itemValue = row.cells[0].innerText;
    //console.log(itemValue);
    //flag = true;
    //console.log(itemValue);
    row.deleteCell(0);
    row.deleteCell(0);
    //row.deleteCell(2);
    let index=element.id.split('-')[1];
    let html1 = `<input id="edit" type="text" value="${itemValue}">`;
    let html2 = `<button id="update" onclick="updateEntry('row-${index}')">UPDATE</button>
                <button id="cancel" onclick="cancelUpdate('row-${index}','${itemValue}')">CANCEL</button>`;
                //console.log(html);
    let editText = row.insertCell(0);
    editText.innerHTML = html1; 
    let newButtons = row.insertCell(1);
    newButtons.innerHTML = html2;
}

function updateEntry(rowId){
    //console.log(rowId);
    row = document.getElementById(rowId);
    let updatedValue = document.getElementById("edit").value;
    //console.log(updatedValue);
    row.deleteCell(0);
    row.deleteCell(0);
    let insertItem = row.insertCell(0);
    insertItem.appendChild(
        document.createTextNode(updatedValue)
    );

    html = `<button type="button" id="editButton-${row.id.split('-')[1]}" onclick="EditItemInList(this)">EDIT</button>
            <button type="button" id="deleteButton-${row.id.split('-')[1]}" onclick="DeleteItemInList(this)">DELETE</button>`;
    let newButtons = row.insertCell(1);
    newButtons.innerHTML = html;

}

function cancelUpdate(rowId,value){
    let row = document.getElementById(rowId);
    //console.log(rowId);
    //let edit = document.getElementById("edit").value;
    console.log(value);
    row.deleteCell(0);
    //row.deleteCell(0);
    let insertItem = row.insertCell(0);
    insertItem.appendChild(
        document.createTextNode(value)
    );
    html = `<button type="button" id="editButton-${row.id.split('-')[1]}" onclick="EditItemInList(this)">EDIT</button>
             <button type="button" id="deleteButton-${row.id.split('-')[1]}" onclick="DeleteItemInList(this)">DELETE</button>`;
    
        let newButtons = row.insertCell(1);
        newButtons.innerHTML = html;

        row.deleteCell(2);

}

function DeleteItemInList(element) {
    let deleteRow = document.getElementById("row-" + element.id.split('-')[1]);
    deleteRow.parentNode.removeChild(deleteRow);
}

function ShowItem(event) {
    //console.log(event);
    // IE does not know about the target attribute. It looks for srcElement
    // This function will get the event target in a browser-compatible way
    event = event || window.event;
    let target = event.target || event.srcElement;

    let showId = target.id + "-container";
    let ContentIds = document.getElementsByClassName("show-hide-section");
    //console.log(ContentIds);
    for (let object = 0; object < ContentIds.length; object++) {
        //console.log(ContentIds[object].id);
        //console.log(showId);
        if (ContentIds[object].id == "todo-container") {
            ShowList();
        }
        ContentIds[object].id == showId ?
            document.getElementById(showId).style.display = "block" :
            document.getElementById(ContentIds[object].id).style.display = "none";
    }
}

function showSuggestions() {
    let list = document.getElementById("suggestionListItems");
    list.innerHTML = '';
    list.style.display = "block";
    let suggestItem = document.getElementById("searchBar").value;
    let count = 1;
    for (let i = 0; i < data.length; i++) {
        if (data[i].toLocaleLowerCase().indexOf(suggestItem.toLocaleLowerCase()) > -1) {
            let li = document.createElement("li");
            li.appendChild(document.createTextNode(data[i]));
            list.appendChild(li);
            count++;
            if (count > 3) break;
        }
    }

}
function hideSuggestions() {
    let list = document.getElementById("suggestionListItems");
    list.style.display = "none";

}

function findSimilarItem() {
    let list = document.getElementById("suggestionListItems");
    //list.style.display = "none";
    searchItem = document.getElementById("searchBar").value;
    for (let i = 0; i < data.length; i++) {
        if (searchItem == data[i]) {

        }
    }
}
