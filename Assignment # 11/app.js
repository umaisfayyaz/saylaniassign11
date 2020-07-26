var list = document.getElementById("todo-list");

function addText() {
    // For li

    var todoItem = document.getElementById("todo-item")
    var li = document.createElement('li')
    var liText = document.createTextNode(todoItem.value)
    li.appendChild(liText)
    list.appendChild(li)
    todoItem.value = ""

    // For Delete Button

    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.appendChild(delText)
    delBtn.setAttribute("class", "btn")
    delBtn.setAttribute("onclick", "delItem(this)")
    li.appendChild(delBtn)

    // For Edit Button
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.appendChild(editText)
    editBtn.setAttribute("class", "btn")
    editBtn.setAttribute("onclick", "editItem(this)")
    li.appendChild(editBtn)
}

function delItem(e) {
    e.parentNode.remove()
}

function deleteAll() {
    list.innerHTML = ""
}

function editItem(e) {
    var a = prompt("Enter updated value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = a
}