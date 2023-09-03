// const gambar = document.getElementById('gambar');
// gambar.setAttribute('width', 300);
// gambar.setAttribute('height', 215);

// const buttons = document.querySelectorAll('.button');
// const playButton = buttons[3];

// const playButtonElement = playButton.child[0];
// playButtonElement.setAttribute('type', 'submit');

function welcome() {
    alert('Sim salabim muncullah elemen-elemen HTML!');
    const contents = document.querySelector('.contents');
    contents.removeAttribute('hidden');
}


function increment() {
    document.getElementById('count').innerText++;

    if (document.getElementById('count').innerText == 7) {
        const hiddenMessage = document.createElement('h4');
        hiddenMessage.innerText = 'Selamat! Anda menemukan hadiah tersembunyi...';
        const image = document.createElement('img');
        image.setAttribute('src', 'https://i.ibb.co/0V49VRZ/catto.jpg');
        const contents = document.querySelector('.contents');
        contents.appendChild(hiddenMessage).appendChild(image);
    }
}

// document.getElementById('incrementButton').onclick = increment;
// document.body.onload = welcome;
