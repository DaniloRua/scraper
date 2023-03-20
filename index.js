const PORT = 7000;
const AXIOS = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express();
const url = 'https://www.theguardian.com/international'


// firtst example: Get articles from journal website
AXIOS(url)
    .then(response => {
        const HTML = response.data;
        const $ = cheerio.load(HTML);
        const articles = []


    //    $('.fc-item__title',).each(function(){
    //     const title = $(this).text();
    //     const url = $(this).find('a').attr('href');
    //     articles.push({
    //         title,
    //         url
    //     })
    //     console.log(title[0])
    //    })
       

    }).catch(err=>(console.log(err)))

















;
app.listen(PORT, () => console.log('server is running on port 7000'))