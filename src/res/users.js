window.onload = function () {
    fetch('https://randomuser.me/api/?results=2')
        .then((response) => response.json())
        .then(json => {
            displayUser(json);
            console.log(json);
        }).catch(err => {
        console.log(err)
    })
}

function displayUser(json) {
    const username = document.createElement('p');
    username.innerText = json.results;

}