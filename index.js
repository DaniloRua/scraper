const PORT = 7000;
const AXIOS = require('axios');
const cheerio = require('cheerio');
const express = require('express');
const app = express();



// firtst example: Get articles from journal website
const journalUrl = 'https://www.theguardian.com/world'
AXIOS(journalUrl)
    .then(response => {
        //load HTML content using axios
        //Cheerio parses markup and provides an API for traversing/manipulating the resulting data structure.
        const HTML = response.data;
        const $ = cheerio.load(HTML);
        let list = []
        
        //selecting the elements from journal webpage
        //find a className to search
        $('.fc-item__content').each(function () {
            const title = $(this).find('span').text()
            const link = $(this).find('a').attr('href');
            list.push(
                {title,
                link
            })
        })
        console.log(list)//will show articles + links
    })













app.listen(PORT, () => console.log('server is running on port 7000'))