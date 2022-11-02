window.onload = function () {
    fetch('https://api.npoint.io/b2fe586642a328d6895b')
        .then((response) =>response.json())
        .then(json => {
            console.log(json);
            displayPosts(json);
        }).catch(err => {
            console.log(err)
        })
}

function displayPosts(json) {
    document.querySelector('.main-footer').style.display = 'none';
    for (let post of json) {
        const div = document.createElement('div');
        div.className = 'post';

        const headDiv = document.createElement('div');
        headDiv.className = 'post-head';

        const author = document.createElement('p');
        author.className = 'author';
        author.innerText = post.author;
        const date = document.createElement('p');
        date.innerText = post.time;
        headDiv.append(author,date);

        const img = document.createElement('img');
        img.src = post.img;

        const text = document.createElement('p');
        text.innerText = post.text;

        const button = document.createElement('button');
        button.type = 'submit';

        const buttonIcon = document.createElement('i');
        buttonIcon.className = 'fa-regular fa-thumbs-up fa-xl';
        button.appendChild(buttonIcon);

        div.append(headDiv,img,text,button);


        document.getElementById('main').append(div);
        document.querySelector('.main-footer').style.display = '';

    }
}
