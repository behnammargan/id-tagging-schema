
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

var areas = ['bike',
'dash-line',
'driving-lane',
'electric-gates-over-railway',
'lamp',
'long-line',
'parking',
'rail-way',
'stop-line',
'tiny-dash-line',
'traffic-lamp-pole',
'traffic-sign',
'vehicle-lane',
]

var areas = ['road-nonroad',
'road-sidewalk',
'sidewalk-nonsidewalk'
]


var areas = ['building-on-road-sw',
'pedestrian-tunnel',
'planting-box',
'specific-area',
'vegetation-on-road-sw'
]
var areas = ['median-strip'
]

var areas = ['cyclist',
'electricity-pole',
'motorcyclist',
'output',
'person',
'small-traffic-pole',
'traffic-cone-pole'
]
var sss = []  


test(sss,areas);
async function test(sss,areas){
for (let index = 0; index < areas.length; index++) {
    // const element = areas[index];
sss = await `tr_${areas[index]}`;

var dict = await {"geometry" : ["vertex","point"],
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