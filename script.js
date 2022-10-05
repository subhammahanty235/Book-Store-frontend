let form = document.getElementById('frm1')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // alert("Hello")
    let name = document.getElementById('inputname').value
    let isbn = document.getElementById('inputisbn').value
    let author = document.getElementById('inputauthor').value
    let stock = document.getElementById('inputstock').value
    let coor = document.getElementById('inputcoor').value
    let nop = document.getElementById('inputnop').value
    let price = document.getElementById('inputprice').value
    let df = document.getElementById('inputdf').value
    let year = document.getElementById('inputyear').value
    const data = await fetch('https://bookstoreapinode.herokuapp.com/api/v1/store/addbook', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            name: name,
            ISBN: isbn,
            author: author,
            price: price,
            coor: coor,
            nop: nop,
            year: year,
            stock: stock,
            digital_format: df

        })
    })
    const responce = await data.json()
    if(responce.flag === true){
        alert("Successfully added")
        document.getElementById("frm1").reset();
    }
    else{
        alert(responce.msg)
        document.getElementById("frm1").reset();
    }

    
})