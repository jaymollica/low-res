console.log("heres app.js");

window.addEventListener('load', ()=> {
    document.getElementById('coffee-button').addEventListener('click', ()=> {
        let numCups = document.getElementById('coffee-num').value;
        console.log(numCups);

        let  cups_obj = {"number" : numCups};
        // stringify
        let cups_json = JSON.stringify(cups_obj);

        // send data
        fetch("/cups", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: cups_json
        })
        .then(response => response.json())
        .then(data => {console.log(data)})

    })

    document.getElementById("get-cups").addEventListener("click", ()=> {
        
        fetch('/getCups')
        .then(response => response.json())
        .then(data => {
            document.getElementById('coffee-info').innerHTML = '';
            console.log(data.data);
            for(let i=0;i<data.data.length;i++) {
                let string = data.data[i].date +": "+data.data[i].coffee;
                let elt = document.createElement("p");
                elt.innerHTML = string;
                document.getElementById('coffee-info').appendChild(elt);
            }
        })
    })

})