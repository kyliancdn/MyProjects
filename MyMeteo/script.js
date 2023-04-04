// async function ipFind() {
//     fetch('https://api.ipify.org?format=json').then(res => console.log(res))
// }

// ipFind

async function main() {

    const villeNm = document.querySelector('#ville')
    villeNm.contentEditable = true
    console.log(villeNm.value);

    const temp = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${villeNm.textContent}&appid=cd73f70f866d3ff56bb0c172f4df20b1&lang=fr&units=metric`)
        .then(res => res.json())
        .then(data => { Math.round(data.main.temp)
        //console.log(Math.round(data.main.temp))
             })
            
    const desc = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=cd73f70f866d3ff56bb0c172f4df20b1&lang=fr&units=metric')
    .then(res => res.json())
    .then(data => data.weather[0].description)

    const ville = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Londres&appid=cd73f70f866d3ff56bb0c172f4df20b1&lang=fr&units=metric')
        .then(res => res.json())
        .then(data => data.name)

    console.log(temp, desc, ville)
    
    document.querySelector('#ville').textContent = ville
    document.querySelector('#temperature').textContent = temp
    document.querySelector('#conditions').textContent = desc
    
    villeNm.addEventListener('keydown', (e) => {
        if(e.keyCode === 13){
            e.preventDefault()
        }
    })
}

main()

