
let paragraph = document.getElementById("postText");

// --------------------

function getUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then(function (data) {
    appendData(data);
})



function appendData(data){
    let table = document.getElementById("userTableRow");
    for (var i = 0; i < data.length; i++) {
        var a = document.createElement("a");
        a.href = "#";
        a.innerHTML = data[i].name + '<br>';
        a.id = 'userNumber' + data[i].id;
        let dataId = data[i].id;
        table.appendChild(a);
    
        a.addEventListener("click", function(){
        getPosts(dataId);
});


        }
    }
}

// --------------------------------------------------------------

function getPosts(user){
    let url = 'https://jsonplaceholder.typicode.com/users/' + user + '/posts';
    fetch(url)

    .then((response) => response.json())
    .then(function (data) {
    appendData(data);
})




function appendData(data){
    let wrapper = document.getElementById("postsWrapper");
    while (wrapper.firstChild){
        wrapper.removeChild(wrapper.lastChild);
    }
    for (let i = 0; i < data.length; i++) {
        let postsH1 = document.getElementById("postsH1");
        paragraph = document.createElement("p");
        postsH1.className = 'postsH1Show';
        wrapper.className = 'postsWrapper';
        paragraph.innerHTML = '<span class="title">Title: </span>' + data[i].title + '<br>' + '<br>' + '<span class="body">Body: </span>' + data[i].body + '<br>';
        wrapper.appendChild(paragraph);
        
        }
    }
}
getUsers();


