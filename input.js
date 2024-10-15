let ota = document.getElementById('ota')

fetch('https://fakestoreapi.com/products?limit=10')
    .then((response) => response.json())
    .then((data) => getdata(data));

function getdata(params) {

    console.log(params);


    params.map((item) => {

        let div = document.createElement('div')
        let img = document.createElement('img')
        let tel = document.createElement('h4')
        let $ = document.createElement('p')



        img.src = item.image
        tel.innerHTML = 'Tet:' + item.title
        $.innerHTML = 'Pri' + item.price



        div.appendChild(img)
        div.appendChild(tel)
        div.appendChild($)
        div.classList.add('card')
        ota.appendChild(div)
    })
}