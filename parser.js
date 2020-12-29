const fetch = require('node-fetch')

let bodyRegexp = /<div class="text">(.*?)<\/div>/is;

const joke = async () => {
    let result = await(await fetch('https://www.anekdot.ru/random/anekdot/')).text()

    result = JSON.parse(JSON.stringify(result))
    


    let body = result.match(bodyRegexp)[1]

    body = body.replace(/<br(?:\s*\/)?>/ig, '\n')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/ig, '<')
    .replace(/&gt;/ig, '>');


    return{
        body
    }
}

module.exports = joke