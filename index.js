const fs = require('fs');

const achievements = [];

const years = ['2019.json', '2018.json', '2017.json', '2016.json', '2015.json', '2014.json', '2013.json', '2012.json', '2011.json', '2010.json', '1987.json']

years.forEach(year => {

    let rawdata = fs.readFileSync('input/' + year)
    let currentYear = JSON.parse(rawdata)

    currentYear.achievement.forEach(cheevo => {

        achievements.push({
            'title': cheevo.title,
            'description': cheevo.description,
            'icon': cheevo.icon,
            'data': cheevo.date,
            'prettyYear': cheevo.date.split('-', 1)[0]
        })

    })

})

let output = JSON.stringify(achievements)
fs.writeFileSync('output/merged.json', output)
