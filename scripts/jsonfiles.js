
var fs = require('fs');



var areas = ['bike-sign',
'building',
'bus',
'bus-sign',
'car',
'construction-wagon',
'crosswalk',
'disabled-sign',
'electric-gates-over-railway',
'IN-signal',
'manhole',
'others',
'OUT-sign',
'parking-place',
'parking-space',
'restricted-zone',
'speed-sign',
'stop-sign',
'traffic-lamp',
'traffic-light',
'transporter',
'truck',
'turn-back-lane',
'turn-left',
'turn-right',
'turn-straight',
'turn-straight-left',
'van',
'wagon',
'X-lane']

var sss = []  


test(sss,areas);
async function test(sss,areas){
for (let index = 0; index < areas.length; index++) {
    // const element = areas[index];
sss = await `tr_${areas[index]}`;

var dict = await {"geometry" : ["area"],
        "tags" : {},
        "terms" : [],
        "name" : areas[index]
    };
dict.tags[sss] = "*";
var dictstring = JSON.stringify(dict);

// fs.writeFile("thing.json", dictstring);
fs.writeFile(`${areas[index]}.json`, dictstring, function(err, result) {
    if(err) console.log('error', err);
  });
}
return true
}