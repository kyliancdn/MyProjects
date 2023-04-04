// async function ipFind() {
//     fetch('https://api.ipify.org?format=json').then(res => console.log(res))
// }

// ipFind
{
    console.log(data)
    alert(Math.round(data.main.temp)); 
}

const temp = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=cd73f70f866d3ff56bb0c172f4df20b1&lang=fr&units=metric')
.then(res => res.json())
.then(data => Math.round(data.main.temp))

const desc = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=cd73f70f866d3ff56bb0c172f4df20b1&lang=fr&units=metric')
.then(res => res.json())
.then(data => Math.round(data.main.description))

const ville = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=cd73f70f866d3ff56bb0c172f4df20b1&lang=fr&units=metric')
.then(res => res.json())
.then(data => Math.round(data.main.city))

