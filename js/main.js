const form = document.getElementById('form')



form.addEventListener('submit', function(e) {
    const image = document.getElementById('img').value
    const foodName = document.getElementById('foodName').value
    const option = document.getElementById('operation').value
    const price = document.getElementById('price').value

    let food = {
        img: image,
        title: foodName,
        type: option,
        price: price,
    }
    var result = [];
    let oldstore = JSON.parse(localStorage.getItem('foods')) || [];
    if (oldstore.length) {
        result = [...oldstore, food]
    } else {
        result = [food]
    };
    localStorage.setItem('foods', JSON.stringify(result))

    document.getElementById('img').value = ''
    document.getElementById('foodName').value = ''
    document.getElementById('price').value = ''
    document.getElementById('operation').value = ''    
})

function renderLocalStorage(){
    let oldstore = JSON.parse(localStorage.getItem('foods')) || [];
    const right = document.querySelector('.container');
    oldstore.forEach((item) => {
        const card = `
        <div class="food">
            <img class="con_img" id="conImg" src="${item.img}" height="140px" alt="">
            <h5 class="con_title" id="conTxt">${item.title}</h5>
            <div class="div">
                <p class="con_option" id="conOpt">${item.type}</p>
                <p class="con_price" id="conPrice">${item.price}$</p>
            </div>
        </div>
    `
        right.innerHTML += card
    })
}


function calculateBreakfast() {
    let id = document.getElementById('breakPrice')
    let oldstore = JSON.parse(localStorage.getItem('foods')) || [];
    let breakfast = oldstore.filter(item => item.type === "#breakfast")
    let sumOfItem = breakfast.reduce((sum, item) =>  sum += +item.price,0)
    id.innerHTML = `$${sumOfItem}`
}




this.addEventListener('load', () => {
    renderLocalStorage()
    calculateBreakfast()
})





