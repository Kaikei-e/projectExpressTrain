const port = 3000;
const express = require("express");
const app = express();
const path = require('path');
const { createProxyMiddleware } = require('http-proxy-middleware');


const sendJson = require("./static/test.json")

app.use(express.static("./static/"))

app.use('/api', createProxyMiddleware({
  target: ' http://server:8085/', changeOrigin: true, pathRewrite: {
    '^/api/': '/api/v1/'
  }
}));

app.get("/", (request, response) => {
  response.sendFile('index.html')

}).post('/', function (req, res) {
  console.log("---------------------------");
  console.log(req)
  
  const request = require("request")
  const options = {
    method: 'POST',
    json: req,
    url: "localhost:3000/api/v1/parseJson",
  }
  request(options, function (error, response, body) {
    console.log(response);
  });
  



}).listen(port, () => {
  console.log(`The server has started and is listening on port number: ${port}`);
});



const sendData = [
  {
    "_id": "6166eb78bdcb2b2424e6230f",
    "index": 0,
    "guid": "b234fcb7-882a-43d3-9a3c-16a6e50b070b",
    "isActive": false,
    "balance": "$3,098.74",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "brown",
    "name": "Adkins Hall",
    "gender": "male",
    "company": "KAGE",
    "email": "adkinshall@kage.com",
    "phone": "+1 (875) 599-2214",
    "address": "103 Herkimer Street, Felt, North Carolina, 1733",
    "about": "Irure ipsum do cupidatat nisi in culpa consectetur et esse veniam ad ex irure cillum. Quis officia qui esse aute eiusmod enim nulla est tempor ut enim nulla magna. Minim irure elit dolor laborum sunt. Do nisi est eu deserunt mollit amet do qui officia labore qui cillum. Mollit non mollit amet qui sit proident amet ipsum eu adipisicing. Ad ad elit pariatur eu velit sit proident esse culpa et nostrud aliqua. Voluptate aute Lorem in ex minim officia est irure pariatur voluptate in cupidatat nisi.\r\n",
    "registered": "2018-02-27T02:01:17 -09:00",
    "latitude": 1.651889,
    "longitude": -143.574656,
    "tags": [
      "irure",
      "laborum",
      "magna",
      "ex",
      "est",
      "laboris",
      "nulla"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Andrews Turner"
      },
      {
        "id": 1,
        "name": "Hutchinson Tate"
      },
      {
        "id": 2,
        "name": "Lee Harrington"
      }
    ],
    "greeting": "Hello, Adkins Hall! You have 4 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "6166eb78499729b495cc2837",
    "index": 1,
    "guid": "ad505e9c-2d6c-4cfc-bb5e-b446b987b252",
    "isActive": false,
    "balance": "$3,339.37",
    "picture": "http://placehold.it/32x32",
    "age": 30,
    "eyeColor": "blue",
    "name": "Joni Vargas",
    "gender": "female",
    "company": "RADIANTIX",
    "email": "jonivargas@radiantix.com",
    "phone": "+1 (917) 434-3902",
    "address": "658 Thornton Street, Deseret, Northern Mariana Islands, 4609",
    "about": "Sunt sunt fugiat aliquip et. Esse occaecat minim minim id magna ut do. Do elit enim deserunt tempor commodo incididunt nostrud quis.\r\n",
    "registered": "2015-03-23T09:15:28 -09:00",
    "latitude": 83.726164,
    "longitude": -40.559647,
    "tags": [
      "occaecat",
      "incididunt",
      "adipisicing",
      "aliquip",
      "non",
      "duis",
      "culpa"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Heath Hinton"
      },
      {
        "id": 1,
        "name": "Nielsen Mitchell"
      },
      {
        "id": 2,
        "name": "Ruth Rice"
      }
    ],
    "greeting": "Hello, Joni Vargas! You have 1 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "6166eb7833c407a18b413a6c",
    "index": 2,
    "guid": "683b5cc3-75d0-4df7-b6cc-1f5f2dcdce2f",
    "isActive": true,
    "balance": "$3,454.25",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "blue",
    "name": "Katrina Fuentes",
    "gender": "female",
    "company": "EQUICOM",
    "email": "katrinafuentes@equicom.com",
    "phone": "+1 (908) 583-2366",
    "address": "501 Seigel Street, Galesville, New Hampshire, 3953",
    "about": "Consectetur Lorem voluptate tempor veniam ut. Do do enim excepteur amet nulla elit. Est do non irure irure qui esse aute officia do magna. Pariatur labore enim occaecat eu do. Cillum reprehenderit officia non elit dolor est aliqua Lorem ad commodo esse cillum esse. Consectetur laborum consectetur nostrud eu Lorem quis fugiat.\r\n",
    "registered": "2014-12-11T11:49:50 -09:00",
    "latitude": -45.017524,
    "longitude": -36.260579,
    "tags": [
      "laboris",
      "dolor",
      "veniam",
      "exercitation",
      "proident",
      "consectetur",
      "id"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Elnora Phelps"
      },
      {
        "id": 1,
        "name": "Kelli Stevenson"
      },
      {
        "id": 2,
        "name": "Jeanine Chambers"
      }
    ],
    "greeting": "Hello, Katrina Fuentes! You have 9 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "6166eb784781344b6bae5a37",
    "index": 3,
    "guid": "b2249e6f-9449-4317-804e-2f1da0124391",
    "isActive": true,
    "balance": "$1,734.46",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "blue",
    "name": "Logan Chan",
    "gender": "male",
    "company": "ZENTILITY",
    "email": "loganchan@zentility.com",
    "phone": "+1 (939) 548-2116",
    "address": "397 Coventry Road, Rockingham, West Virginia, 3365",
    "about": "Duis ut ex proident amet officia magna do. Veniam tempor excepteur culpa eu qui sint ex veniam id. Culpa cillum ad nisi quis proident do nisi eiusmod.\r\n",
    "registered": "2015-05-05T11:48:35 -09:00",
    "latitude": 0.180156,
    "longitude": -7.234676,
    "tags": [
      "officia",
      "laboris",
      "quis",
      "quis",
      "eu",
      "aliquip",
      "duis"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Mullen Battle"
      },
      {
        "id": 1,
        "name": "Betty Ayala"
      },
      {
        "id": 2,
        "name": "Delia Bryan"
      }
    ],
    "greeting": "Hello, Logan Chan! You have 6 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "6166eb78ab6cb361228babe2",
    "index": 4,
    "guid": "6a7ce644-daff-4bd1-8b20-d7ace2889d75",
    "isActive": false,
    "balance": "$1,036.96",
    "picture": "http://placehold.it/32x32",
    "age": 32,
    "eyeColor": "brown",
    "name": "Dickerson York",
    "gender": "male",
    "company": "FORTEAN",
    "email": "dickersonyork@fortean.com",
    "phone": "+1 (806) 568-3860",
    "address": "136 Stryker Court, Virgie, Ohio, 4734",
    "about": "Eu culpa eu voluptate incididunt non laborum aliquip aliquip fugiat duis dolor. Elit quis et laborum officia Lorem proident cillum et laboris officia nisi minim officia. Nostrud aliqua adipisicing quis labore pariatur non occaecat pariatur ex mollit anim. Reprehenderit deserunt anim commodo incididunt tempor nostrud. Esse occaecat eiusmod pariatur eiusmod nulla fugiat quis dolore cupidatat. Fugiat consectetur non proident Lorem laboris aliqua eiusmod velit sit ex sit aliqua ipsum. Ea dolor magna deserunt sit ut voluptate ea culpa.\r\n",
    "registered": "2021-06-26T01:22:05 -09:00",
    "latitude": 37.590461,
    "longitude": 51.569176,
    "tags": [
      "aute",
      "excepteur",
      "sunt",
      "voluptate",
      "pariatur",
      "ipsum",
      "exercitation"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Rebecca Christensen"
      },
      {
        "id": 1,
        "name": "Autumn Saunders"
      },
      {
        "id": 2,
        "name": "Wall Carter"
      }
    ],
    "greeting": "Hello, Dickerson York! You have 2 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "6166eb787f1d1aa15c9a5277",
    "index": 5,
    "guid": "5626e53d-70dd-451d-a327-7af7394f126c",
    "isActive": true,
    "balance": "$1,732.49",
    "picture": "http://placehold.it/32x32",
    "age": 36,
    "eyeColor": "blue",
    "name": "Theresa Mcleod",
    "gender": "female",
    "company": "KOFFEE",
    "email": "theresamcleod@koffee.com",
    "phone": "+1 (801) 559-2495",
    "address": "937 Conover Street, Newry, Massachusetts, 2599",
    "about": "Cupidatat dolore commodo sint pariatur tempor. Ullamco minim commodo deserunt esse sint aute. Occaecat voluptate Lorem Lorem quis velit occaecat aliqua veniam nisi nisi. Proident pariatur enim cupidatat eu id eiusmod veniam ea ad. Veniam voluptate aliquip sit dolore.\r\n",
    "registered": "2019-09-22T01:28:42 -09:00",
    "latitude": 58.610069,
    "longitude": 130.022237,
    "tags": [
      "minim",
      "aute",
      "minim",
      "mollit",
      "do",
      "do",
      "fugiat"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Duran Vaughan"
      },
      {
        "id": 1,
        "name": "Irene Powell"
      },
      {
        "id": 2,
        "name": "Atkins Coleman"
      }
    ],
    "greeting": "Hello, Theresa Mcleod! You have 3 unread messages.",
    "favoriteFruit": "strawberry"
  },
  {
    "_id": "6166eb78c362209215d6cdbe",
    "index": 6,
    "guid": "3343d23a-19ad-4b93-858f-5082932c7b2c",
    "isActive": true,
    "balance": "$1,277.21",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "green",
    "name": "Deloris Chapman",
    "gender": "female",
    "company": "ECLIPSENT",
    "email": "delorischapman@eclipsent.com",
    "phone": "+1 (984) 459-3903",
    "address": "227 Nevins Street, Brady, Michigan, 1903",
    "about": "Sit duis Lorem aliqua ex excepteur minim enim dolore duis ex veniam dolore laboris laboris. Labore labore non fugiat incididunt dolor deserunt sit fugiat esse. Nisi dolor irure minim dolor sunt fugiat do reprehenderit minim ipsum. Qui magna nostrud id ea Lorem ipsum aliqua ipsum ullamco ad anim consequat. Quis tempor cupidatat id voluptate amet.\r\n",
    "registered": "2014-04-07T01:23:14 -09:00",
    "latitude": 22.841643,
    "longitude": -170.02194,
    "tags": [
      "qui",
      "reprehenderit",
      "do",
      "in",
      "cillum",
      "reprehenderit",
      "aliquip"
    ],
    "friends": [
      {
        "id": 0,
        "name": "Bradford Goodman"
      },
      {
        "id": 1,
        "name": "Cheri Morgan"
      },
      {
        "id": 2,
        "name": "Rhonda Head"
      }
    ],
    "greeting": "Hello, Deloris Chapman! You have 8 unread messages.",
    "favoriteFruit": "banana"
  }
]