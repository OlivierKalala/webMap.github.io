// Setup the map
var nordKivuCenter = [-0.6531, 28.7214];
var map = L.map('map', {
    zoomControl: false
}).setView(nordKivuCenter, 7.5);

var customIcon = L.icon({
  iconUrl: 'Ressources/Images/plane.png',
  iconSize: [32, 32],
});

var custpoint = L.icon({
  iconUrl: 'Ressources/Images/point.png',
  iconSize: [5, 5],
});

var aero =        {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": 0,
        "geometry": {
          "type": "Point",
          "coordinates": [
            -1.0333301125699745,
            28.666670040015383                
          ]
        },
        "properties": {
          "FID": 0,
          "NOM1": "Kolwezi",
          "CATEGORIE": "Aeroport National de Premiere Classe",
          "REVETEMENT": "Asphalte",
          "USAGE": "Autre",
          "LONGITUDE": 28.666670040015383,
          "LATITUDE": -1.033330112569975
        }
      },
      {
        "type": "Feature",
        "id": 1,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.41666992001578,
            -1.1666700119026612
          ]
        },
        "properties": {
          "FID": 1,
          "NOM1": "Kinshasa N'Dolo",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Asphalte",
          "USAGE": "Militaire / Civi",
          "LONGITUDE": 29.41666992001578,
          "LATITUDE": -1.166670011902661
        }
      },
      {
        "type": "Feature",
        "id": 2,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.266670160015703,
            -0.7833300755848064
          ]
        },
        "properties": {
          "FID": 2,
          "NOM1": "Bandundu",
          "CATEGORIE": "Aeroport National de Premiere Classe",
          "REVETEMENT": "Asphalte",
          "USAGE": "Autre",
          "LONGITUDE": 29.266670160015703,
          "LATITUDE": -0.783330075584806
        }
      },
      {
        "type": "Feature",
        "id": 3,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.263229401173902,
            -1.5746204003394335
          ]
        },
        "properties": {
          "FID": 3,
          "NOM1": "Goma",
          "CATEGORIE": "Aeroport International",
          "REVETEMENT": "Asphalte",
          "USAGE": "Civil",
          "LONGITUDE": 29.263229401173902,
          "LATITUDE": -1.574620400339434
        }
      },
      {
        "type": "Feature",
        "id": 4,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.516670000015836,
            0.7000000413143647
          ]
        },
        "properties": {
          "FID": 4,
          "NOM1": "Nyunzu",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Gravier",
          "USAGE": "Autre",
          "LONGITUDE": 29.516670000015836,
          "LATITUDE": 0.700000041314365
        }
      },
      {
        "type": "Feature",
        "id": 5,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.666670120015922,
            0.08333005817437938
          ]
        },
        "properties": {
          "FID": 5,
          "NOM1": "Kampene",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Gravier",
          "USAGE": "Autre",
          "LONGITUDE": 29.666670120015922,
          "LATITUDE": 0.083330058174379
        }
      },
      {
        "type": "Feature",
        "id": 6,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.599999920015886,
            -0.11667004380356122
          ]
        },
        "properties": {
          "FID": 6,
          "NOM1": "Fatunda",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Herbe",
          "USAGE": "Autre",
          "LONGITUDE": 29.599999920015886,
          "LATITUDE": -0.116670043803561
        }
      },
      {
        "type": "Feature",
        "id": 7,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.366669880015756,
            -1.2916700275909907
          ]
        },
        "properties": {
          "FID": 7,
          "NOM1": "Kitutu",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Herbe",
          "USAGE": "Autre",
          "LONGITUDE": 29.366669880015756,
          "LATITUDE": -1.291670027590991
        }
      },
      {
        "type": "Feature",
        "id": 8,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.350000080015747,
            -0.7999999234942948
          ]
        },
        "properties": {
          "FID": 8,
          "NOM1": "KM 95 CFL",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Herbe",
          "USAGE": "Autre",
          "LONGITUDE": 29.350000080015747,
          "LATITUDE": -0.799999923494295
        }
      },
      {
        "type": "Feature",
        "id": 9,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.41666992001578,
            0.4500000273809123
          ]
        },
        "properties": {
          "FID": 9,
          "NOM1": "Wema",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Herbe",
          "USAGE": "Autre",
          "LONGITUDE": 29.41666992001578,
          "LATITUDE": 0.450000027380912
        }
      },
      {
        "type": "Feature",
        "id": 10,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.549999880015857,
            -0.5833299614466364
          ]
        },
        "properties": {
          "FID": 10,
          "NOM1": "Bokenda",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Non connu",
          "USAGE": "Autre",
          "LONGITUDE": 29.549999880015857,
          "LATITUDE": -0.583329961446636
        }
      },
      {
        "type": "Feature",
        "id": 11,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.900000160016045,
            0.6666699763658824
          ]
        },
        "properties": {
          "FID": 11,
          "NOM1": "Elkasa",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Non connu",
          "USAGE": "Autre",
          "LONGITUDE": 29.900000160016045,
          "LATITUDE": 0.666669976365882
        }
      },
      {
        "type": "Feature",
        "id": 12,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.46666996001581,
            0.5166699446090661
          ]
        },
        "properties": {
          "FID": 12,
          "NOM1": "Kirundu",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Non connu",
          "USAGE": "Autre",
          "LONGITUDE": 29.46666996001581,
          "LATITUDE": 0.516669944609066
        }
      },
      {
        "type": "Feature",
        "id": 13,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.68332984001593,
            0.38333003337252075
          ]
        },
        "properties": {
          "FID": 13,
          "NOM1": "Monbana",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Non connu",
          "USAGE": "Autre",
          "LONGITUDE": 29.68332984001593,
          "LATITUDE": 0.383330033372521
        }
      },
      {
        "type": "Feature",
        "id": 14,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.749999960015426,
            -1.1500000215861517
          ]
        },
        "properties": {
          "FID": 14,
          "NOM1": "Mutombo Dibwe",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Non connu",
          "USAGE": "Autre",
          "LONGITUDE": 28.749999960015426,
          "LATITUDE": -1.150000021586152
        }
      },
      {
        "type": "Feature",
        "id": 15,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.433329920015257,
            -1.4666698967680831
          ]
        },
        "properties": {
          "FID": 15,
          "NOM1": "Tembo Lake",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Non connu",
          "USAGE": "Autre",
          "LONGITUDE": 28.433329920015257,
          "LATITUDE": -1.466669896768083
        }
      },
      {
        "type": "Feature",
        "id": 16,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.783330120014906,
            -1.3500000112651427
          ]
        },
        "properties": {
          "FID": 16,
          "NOM1": "Tshibuba",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Non connu",
          "USAGE": "Autre",
          "LONGITUDE": 27.783330120014906,
          "LATITUDE": -1.350000011265143
        }
      },
      {
        "type": "Feature",
        "id": 17,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.56667004001586,
            0.433329969875923
          ]
        },
        "properties": {
          "FID": 17,
          "NOM1": "Loukolela",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Non connu",
          "USAGE": "Autre",
          "LONGITUDE": 29.56667004001586,
          "LATITUDE": 0.433329969875923
        }
      },
      {
        "type": "Feature",
        "id": 18,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.23332984001569,
            -0.1333299292468676
          ]
        },
        "properties": {
          "FID": 18,
          "NOM1": "Yasa (bonga)",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Non connu",
          "USAGE": "Non connu",
          "LONGITUDE": 29.23332984001569,
          "LATITUDE": -0.133329929246868
        }
      },
      {
        "type": "Feature",
        "id": 19,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.23332984001569,
            -1.649999944438782
          ]
        },
        "properties": {
          "FID": 19,
          "NOM1": "Ikoko",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Non connu",
          "USAGE": "Non connu",
          "LONGITUDE": 29.23332984001569,
          "LATITUDE": -1.649999944438782
        }
      },
      {
        "type": "Feature",
        "id": 20,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.333329920015743,
            0.11667004380356122
          ]
        },
        "properties": {
          "FID": 20,
          "NOM1": "Masuika",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Sol",
          "USAGE": "Autre",
          "LONGITUDE": 29.333329920015743,
          "LATITUDE": 0.116670043803561
        }
      },
      {
        "type": "Feature",
        "id": 21,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.633330160015902,
            0.7499999113853685
          ]
        },
        "properties": {
          "FID": 21,
          "NOM1": "Mbanza Ngungu",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Sol",
          "USAGE": "Autre",
          "LONGITUDE": 29.633330160015902,
          "LATITUDE": 0.749999911385368
        }
      },
      {
        "type": "Feature",
        "id": 22,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.066670000015595,
            -1.133330112804053
          ]
        },
        "properties": {
          "FID": 22,
          "NOM1": "Muetshi",
          "CATEGORIE": "Autre",
          "REVETEMENT": "Sol",
          "USAGE": "Autre",
          "LONGITUDE": 29.066670000015595,
          "LATITUDE": -1.133330112804053
        }
      }
    ]
  };
var idps =  {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "id": 0,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.716667120000004,
            -1.6000000018706328
          ]
        },
        "properties": {
          "FID": 0,
          "NOM1": "Bulindu",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 27.72,
          "LATITUDE": -1.6
        }
      },
      {
        "type": "Feature",
        "id": 1,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.69999984,
            -1.6166669686935062
          ]
        },
        "properties": {
          "FID": 1,
          "NOM1": "Bushi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 27.7,
          "LATITUDE": -1.62
        }
      },
      {
        "type": "Feature",
        "id": 2,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.68333292,
            -1.5833330779734414
          ]
        },
        "properties": {
          "FID": 2,
          "NOM1": "Masenge-Ibanga",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 27.68,
          "LATITUDE": -1.58
        }
      },
      {
        "type": "Feature",
        "id": 3,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.066667039999995,
            0.30000001244508506
          ]
        },
        "properties": {
          "FID": 3,
          "NOM1": "Asangwa",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.07,
          "LATITUDE": 0.3
        }
      },
      {
        "type": "Feature",
        "id": 4,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.26666684,
            0.1666669668206416
          ]
        },
        "properties": {
          "FID": 4,
          "NOM1": "Moriso",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.27,
          "LATITUDE": 0.17
        }
      },
      {
        "type": "Feature",
        "id": 5,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.283333040000002,
            0.19999998209323908
          ]
        },
        "properties": {
          "FID": 5,
          "NOM1": "Lumbula",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.28,
          "LATITUDE": 0.2
        }
      },
      {
        "type": "Feature",
        "id": 6,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.149999840000003,
            0.13333299321553863
          ]
        },
        "properties": {
          "FID": 6,
          "NOM1": "Munamansi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.15,
          "LATITUDE": 0.13
        }
      },
      {
        "type": "Feature",
        "id": 7,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.38333312,
            0.500000050070494
          ]
        },
        "properties": {
          "FID": 7,
          "NOM1": "Mulamba",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 28.38,
          "LATITUDE": 0.5
        }
      },
      {
        "type": "Feature",
        "id": 8,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.316666880000007,
            0.5666669210444535
          ]
        },
        "properties": {
          "FID": 8,
          "NOM1": "Mutumbia",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.32,
          "LATITUDE": 0.57
        }
      },
      {
        "type": "Feature",
        "id": 9,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.066667039999995,
            -0.33333304518812634
          ]
        },
        "properties": {
          "FID": 9,
          "NOM1": "Mpivi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.07,
          "LATITUDE": -0.33
        }
      },
      {
        "type": "Feature",
        "id": 10,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.16666712,
            -0.3666670449819808
          ]
        },
        "properties": {
          "FID": 10,
          "NOM1": "Kisangani",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.17,
          "LATITUDE": -0.37
        }
      },
      {
        "type": "Feature",
        "id": 11,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.51666696,
            -1.3333330021957985
          ]
        },
        "properties": {
          "FID": 11,
          "NOM1": "Lamata",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.52,
          "LATITUDE": -1.33
        }
      },
      {
        "type": "Feature",
        "id": 12,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.116667079999996,
            -0.33333304518812634
          ]
        },
        "properties": {
          "FID": 12,
          "NOM1": "Mangobo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.12,
          "LATITUDE": -0.33
        }
      },
      {
        "type": "Feature",
        "id": 13,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.749999880000004,
            -1.5333329384978072
          ]
        },
        "properties": {
          "FID": 13,
          "NOM1": "Mukombe",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.75,
          "LATITUDE": -1.53
        }
      },
      {
        "type": "Feature",
        "id": 14,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.866666960000003,
            -1.4166670555755776
          ]
        },
        "properties": {
          "FID": 14,
          "NOM1": "Bihiro",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.87,
          "LATITUDE": -1.42
        }
      },
      {
        "type": "Feature",
        "id": 15,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.07083304,
            -1.5077780372614027
          ]
        },
        "properties": {
          "FID": 15,
          "NOM1": "Bugembwe",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 29.07,
          "LATITUDE": -1.51
        }
      },
      {
        "type": "Feature",
        "id": 16,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.91416716,
            -1.5916669173142068
          ]
        },
        "properties": {
          "FID": 16,
          "NOM1": "Bikaniro",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.91,
          "LATITUDE": -1.59
        }
      },
      {
        "type": "Feature",
        "id": 17,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.033332920000003,
            -1.449999944536759
          ]
        },
        "properties": {
          "FID": 17,
          "NOM1": "Bibatama",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Katoyi",
          "LONGITUDE": 29.03,
          "LATITUDE": -1.45
        }
      },
      {
        "type": "Feature",
        "id": 18,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.069722080000002,
            -1.5191669583344272
          ]
        },
        "properties": {
          "FID": 18,
          "NOM1": "Busangara",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 29.07,
          "LATITUDE": -1.52
        }
      },
      {
        "type": "Feature",
        "id": 19,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.839722039999998,
            -1.5283330750165782
          ]
        },
        "properties": {
          "FID": 19,
          "NOM1": "Bitongo",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.84,
          "LATITUDE": -1.53
        }
      },
      {
        "type": "Feature",
        "id": 20,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.04999984,
            -1.5500000853545788
          ]
        },
        "properties": {
          "FID": 20,
          "NOM1": "Dalaga",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 29.05,
          "LATITUDE": -1.55
        }
      },
      {
        "type": "Feature",
        "id": 21,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.95249996,
            -1.501943921372476
          ]
        },
        "properties": {
          "FID": 21,
          "NOM1": "Buniole",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.95,
          "LATITUDE": -1.5
        }
      },
      {
        "type": "Feature",
        "id": 22,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.033332920000003,
            -1.383332959891931
          ]
        },
        "properties": {
          "FID": 22,
          "NOM1": "Gandjo",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 29.03,
          "LATITUDE": -1.38
        }
      },
      {
        "type": "Feature",
        "id": 23,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.933332840000002,
            -1.4666670139806697
          ]
        },
        "properties": {
          "FID": 23,
          "NOM1": "Gitovu",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.93,
          "LATITUDE": -1.47
        }
      },
      {
        "type": "Feature",
        "id": 24,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.900000080000005,
            -1.4833330567642933
          ]
        },
        "properties": {
          "FID": 24,
          "NOM1": "Kahundu",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.9,
          "LATITUDE": -1.48
        }
      },
      {
        "type": "Feature",
        "id": 25,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.93583304,
            -1.5636109465631283
          ]
        },
        "properties": {
          "FID": 25,
          "NOM1": "Kabonga",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.94,
          "LATITUDE": -1.56
        }
      },
      {
        "type": "Feature",
        "id": 26,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.866666960000003,
            -1.5500000853545788
          ]
        },
        "properties": {
          "FID": 26,
          "NOM1": "Kalenga",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.87,
          "LATITUDE": -1.55
        }
      },
      {
        "type": "Feature",
        "id": 27,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.933332840000002,
            -1.3666670847281945
          ]
        },
        "properties": {
          "FID": 27,
          "NOM1": "Kaonge",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.93,
          "LATITUDE": -1.37
        }
      },
      {
        "type": "Feature",
        "id": 28,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.986111,
            -1.5827779919347593
          ]
        },
        "properties": {
          "FID": 28,
          "NOM1": "Karuba",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.99,
          "LATITUDE": -1.58
        }
      },
      {
        "type": "Feature",
        "id": 29,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.04638904,
            -1.5269439717195101
          ]
        },
        "properties": {
          "FID": 29,
          "NOM1": "Karambi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 29.05,
          "LATITUDE": -1.53
        }
      },
      {
        "type": "Feature",
        "id": 30,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.837221840000005,
            -1.5525000828927722
          ]
        },
        "properties": {
          "FID": 30,
          "NOM1": "Kibahi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.84,
          "LATITUDE": -1.55
        }
      },
      {
        "type": "Feature",
        "id": 31,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.064166920000005,
            -1.540556063666525
          ]
        },
        "properties": {
          "FID": 31,
          "NOM1": "Kimoka",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 29.06,
          "LATITUDE": -1.54
        }
      },
      {
        "type": "Feature",
        "id": 32,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.791943920000005,
            -1.5319440186507507
          ]
        },
        "properties": {
          "FID": 32,
          "NOM1": "Kinigi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.79,
          "LATITUDE": -1.53
        }
      },
      {
        "type": "Feature",
        "id": 33,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.066667119999998,
            -1.4833330567642933
          ]
        },
        "properties": {
          "FID": 33,
          "NOM1": "Kingi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 29.07,
          "LATITUDE": -1.48
        }
      },
      {
        "type": "Feature",
        "id": 34,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.03638896,
            -1.6005559840245822
          ]
        },
        "properties": {
          "FID": 34,
          "NOM1": "Kitumbili",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 29.04,
          "LATITUDE": -1.6
        }
      },
      {
        "type": "Feature",
        "id": 35,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.91083284,
            -1.522221914556939
          ]
        },
        "properties": {
          "FID": 35,
          "NOM1": "Kongo-Matanda",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.91,
          "LATITUDE": -1.52
        }
      },
      {
        "type": "Feature",
        "id": 36,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.066667119999998,
            -1.5000000533651863
          ]
        },
        "properties": {
          "FID": 36,
          "NOM1": "Luhonga",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 29.07,
          "LATITUDE": -1.5
        }
      },
      {
        "type": "Feature",
        "id": 37,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.90305612,
            -1.6988890471934501
          ]
        },
        "properties": {
          "FID": 37,
          "NOM1": "Lusirandaka",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.9,
          "LATITUDE": -1.7
        }
      },
      {
        "type": "Feature",
        "id": 38,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.016667079999998,
            -1.566666919097176
          ]
        },
        "properties": {
          "FID": 38,
          "NOM1": "Lushangi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 29.02,
          "LATITUDE": -1.57
        }
      },
      {
        "type": "Feature",
        "id": 39,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.033332920000003,
            -1.5500000853545788
          ]
        },
        "properties": {
          "FID": 39,
          "NOM1": "Malene",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 29.03,
          "LATITUDE": -1.55
        }
      },
      {
        "type": "Feature",
        "id": 40,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.08333296,
            -1.4666670139806697
          ]
        },
        "properties": {
          "FID": 40,
          "NOM1": "Mugando",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 29.08,
          "LATITUDE": -1.47
        }
      },
      {
        "type": "Feature",
        "id": 41,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.88055612,
            -1.585555942917631
          ]
        },
        "properties": {
          "FID": 41,
          "NOM1": "Mumba",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.88,
          "LATITUDE": -1.59
        }
      },
      {
        "type": "Feature",
        "id": 42,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.95000012,
            -1.433332930901363
          ]
        },
        "properties": {
          "FID": 42,
          "NOM1": "Mukaka",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.95,
          "LATITUDE": -1.43
        }
      },
      {
        "type": "Feature",
        "id": 43,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.95000004,
            -1.6000000018706328
          ]
        },
        "properties": {
          "FID": 43,
          "NOM1": "Dongi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 27.95,
          "LATITUDE": -1.6
        }
      },
      {
        "type": "Feature",
        "id": 44,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.10000016,
            -1.7166670687210368
          ]
        },
        "properties": {
          "FID": 44,
          "NOM1": "Basluka",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.1,
          "LATITUDE": -1.72
        }
      },
      {
        "type": "Feature",
        "id": 45,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.966666960000005,
            -1.6333330762108733
          ]
        },
        "properties": {
          "FID": 45,
          "NOM1": "Dipo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 27.97,
          "LATITUDE": -1.63
        }
      },
      {
        "type": "Feature",
        "id": 46,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.233333000000002,
            -1.7166670687210368
          ]
        },
        "properties": {
          "FID": 46,
          "NOM1": "Idunga",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.23,
          "LATITUDE": -1.72
        }
      },
      {
        "type": "Feature",
        "id": 47,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.833333040000003,
            -1.566666919097176
          ]
        },
        "properties": {
          "FID": 47,
          "NOM1": "Ibanga",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 27.83,
          "LATITUDE": -1.57
        }
      },
      {
        "type": "Feature",
        "id": 48,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.450000080000002,
            -1.8666670013747626
          ]
        },
        "properties": {
          "FID": 48,
          "NOM1": "Hombo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.45,
          "LATITUDE": -1.87
        }
      },
      {
        "type": "Feature",
        "id": 49,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.18333296,
            -1.6833330747301698
          ]
        },
        "properties": {
          "FID": 49,
          "NOM1": "Isangi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.18,
          "LATITUDE": -1.68
        }
      },
      {
        "type": "Feature",
        "id": 50,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.816666840000003,
            -1.5000000533651863
          ]
        },
        "properties": {
          "FID": 50,
          "NOM1": "Kibira",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 27.82,
          "LATITUDE": -1.5
        }
      },
      {
        "type": "Feature",
        "id": 51,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.283333040000002,
            -1.6499999444370659
          ]
        },
        "properties": {
          "FID": 51,
          "NOM1": "Makumbu",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.28,
          "LATITUDE": -1.65
        }
      },
      {
        "type": "Feature",
        "id": 52,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.149999840000003,
            -1.7166670687210368
          ]
        },
        "properties": {
          "FID": 52,
          "NOM1": "Makongo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.15,
          "LATITUDE": -1.72
        }
      },
      {
        "type": "Feature",
        "id": 53,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.016667,
            -1.7666670418530503
          ]
        },
        "properties": {
          "FID": 53,
          "NOM1": "Makelele",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.02,
          "LATITUDE": -1.77
        }
      },
      {
        "type": "Feature",
        "id": 54,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.149999840000003,
            -1.7666670418530503
          ]
        },
        "properties": {
          "FID": 54,
          "NOM1": "Masingu",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.15,
          "LATITUDE": -1.77
        }
      },
      {
        "type": "Feature",
        "id": 55,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.033332839999996,
            -1.6833330747301698
          ]
        },
        "properties": {
          "FID": 55,
          "NOM1": "Mikolo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.03,
          "LATITUDE": -1.68
        }
      },
      {
        "type": "Feature",
        "id": 56,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.081222200015073,
            -1.5670555364356384
          ]
        },
        "properties": {
          "FID": 56,
          "NOM1": "Mika",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.08,
          "LATITUDE": -1.57
        }
      },
      {
        "type": "Feature",
        "id": 57,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.199999879999993,
            -1.6499999444370659
          ]
        },
        "properties": {
          "FID": 57,
          "NOM1": "Mutiko",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.2,
          "LATITUDE": -1.65
        }
      },
      {
        "type": "Feature",
        "id": 58,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.08333296,
            -0.6166670646716303
          ]
        },
        "properties": {
          "FID": 58,
          "NOM1": "Buhimba",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 29.08,
          "LATITUDE": -0.62
        }
      },
      {
        "type": "Feature",
        "id": 59,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.016667079999998,
            -0.5999999805816757
          ]
        },
        "properties": {
          "FID": 59,
          "NOM1": "Busekere",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 29.02,
          "LATITUDE": -0.6
        }
      },
      {
        "type": "Feature",
        "id": 60,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.916667000000004,
            -0.5166670609840603
          ]
        },
        "properties": {
          "FID": 60,
          "NOM1": "Bitakongo",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 28.92,
          "LATITUDE": -0.52
        }
      },
      {
        "type": "Feature",
        "id": 61,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.30000004,
            -0.3833329170500264
          ]
        },
        "properties": {
          "FID": 61,
          "NOM1": "Bungulu",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 29.3,
          "LATITUDE": -0.38
        }
      },
      {
        "type": "Feature",
        "id": 62,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.116667160000002,
            -0.5999999805816757
          ]
        },
        "properties": {
          "FID": 62,
          "NOM1": "Bungenie",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 29.12,
          "LATITUDE": -0.6
        }
      },
      {
        "type": "Feature",
        "id": 63,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.116667160000002,
            -0.63333301454188
          ]
        },
        "properties": {
          "FID": 63,
          "NOM1": "Kabale",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 29.12,
          "LATITUDE": -0.63
        }
      },
      {
        "type": "Feature",
        "id": 64,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.800000000000004,
            -0.3833329170500264
          ]
        },
        "properties": {
          "FID": 64,
          "NOM1": "Kabenga",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 28.8,
          "LATITUDE": -0.38
        }
      },
      {
        "type": "Feature",
        "id": 65,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.78333308,
            -0.3833329170500264
          ]
        },
        "properties": {
          "FID": 65,
          "NOM1": "Kabiri",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 28.78,
          "LATITUDE": -0.38
        }
      },
      {
        "type": "Feature",
        "id": 66,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.30000004,
            -0.3666670449819808
          ]
        },
        "properties": {
          "FID": 66,
          "NOM1": "Kalimba",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.3,
          "LATITUDE": -0.37
        }
      },
      {
        "type": "Feature",
        "id": 67,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.850000040000005,
            -0.41666708436214284
          ]
        },
        "properties": {
          "FID": 67,
          "NOM1": "Kasinga",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 28.85,
          "LATITUDE": -0.42
        }
      },
      {
        "type": "Feature",
        "id": 68,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.28333312,
            -0.3000000124451235
          ]
        },
        "properties": {
          "FID": 68,
          "NOM1": "Kasinga",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 29.28,
          "LATITUDE": -0.3
        }
      },
      {
        "type": "Feature",
        "id": 69,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.666667160000003,
            -0.3833329170500264
          ]
        },
        "properties": {
          "FID": 69,
          "NOM1": "Kasambili",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 28.67,
          "LATITUDE": -0.38
        }
      },
      {
        "type": "Feature",
        "id": 70,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.983332880000003,
            -0.5999999805816757
          ]
        },
        "properties": {
          "FID": 70,
          "NOM1": "Kiamba",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 28.98,
          "LATITUDE": -0.6
        }
      },
      {
        "type": "Feature",
        "id": 71,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.30000004,
            -0.23333292876800413
          ]
        },
        "properties": {
          "FID": 71,
          "NOM1": "Kipese",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 29.3,
          "LATITUDE": -0.23
        }
      },
      {
        "type": "Feature",
        "id": 72,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.833333120000006,
            -0.23333292876800413
          ]
        },
        "properties": {
          "FID": 72,
          "NOM1": "Kiniankobe",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 28.83,
          "LATITUDE": -0.23
        }
      },
      {
        "type": "Feature",
        "id": 73,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.766666880000006,
            -0.2499999135050967
          ]
        },
        "properties": {
          "FID": 73,
          "NOM1": "Kingiki",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 28.77,
          "LATITUDE": -0.25
        }
      },
      {
        "type": "Feature",
        "id": 74,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.25,
            -0.2499999135050967
          ]
        },
        "properties": {
          "FID": 74,
          "NOM1": "Kitobo",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.25,
          "LATITUDE": -0.25
        }
      },
      {
        "type": "Feature",
        "id": 75,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.216666880000002,
            -0.3166670830869122
          ]
        },
        "properties": {
          "FID": 75,
          "NOM1": "Lobango",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 29.22,
          "LATITUDE": -0.32
        }
      },
      {
        "type": "Feature",
        "id": 76,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.116667160000002,
            -0.6166670646716303
          ]
        },
        "properties": {
          "FID": 76,
          "NOM1": "Luofu",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 29.12,
          "LATITUDE": -0.62
        }
      },
      {
        "type": "Feature",
        "id": 77,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.73333304,
            -0.48333299627957726
          ]
        },
        "properties": {
          "FID": 77,
          "NOM1": "Malubo",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 28.73,
          "LATITUDE": -0.48
        }
      },
      {
        "type": "Feature",
        "id": 78,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.74999996,
            -0.5166670609840603
          ]
        },
        "properties": {
          "FID": 78,
          "NOM1": "Makulu",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 28.75,
          "LATITUDE": -0.52
        }
      },
      {
        "type": "Feature",
        "id": 79,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.583332920000004,
            -0.19999998209327752
          ]
        },
        "properties": {
          "FID": 79,
          "NOM1": "Matalimbo",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 28.58,
          "LATITUDE": -0.2
        }
      },
      {
        "type": "Feature",
        "id": 80,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.78333308,
            -0.40000001785696493
          ]
        },
        "properties": {
          "FID": 80,
          "NOM1": "Mbohe",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 28.78,
          "LATITUDE": -0.4
        }
      },
      {
        "type": "Feature",
        "id": 81,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.23333308,
            -0.40000001785696493
          ]
        },
        "properties": {
          "FID": 81,
          "NOM1": "Muhuma",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 29.23,
          "LATITUDE": -0.4
        }
      },
      {
        "type": "Feature",
        "id": 82,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.95000012,
            -0.5333329462349135
          ]
        },
        "properties": {
          "FID": 82,
          "NOM1": "Mutoyi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 28.95,
          "LATITUDE": -0.53
        }
      },
      {
        "type": "Feature",
        "id": 83,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.233333000000002,
            0.06666708304168507
          ]
        },
        "properties": {
          "FID": 83,
          "NOM1": "Nguva",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 28.23,
          "LATITUDE": 0.07
        }
      },
      {
        "type": "Feature",
        "id": 84,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.71666684,
            0.3666670449819424
          ]
        },
        "properties": {
          "FID": 84,
          "NOM1": "Biaboye",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.72,
          "LATITUDE": 0.37
        }
      },
      {
        "type": "Feature",
        "id": 85,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.69999992,
            0.3333330451881135
          ]
        },
        "properties": {
          "FID": 85,
          "NOM1": "Eohe",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.7,
          "LATITUDE": 0.33
        }
      },
      {
        "type": "Feature",
        "id": 86,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.48333284,
            0.3333330451881135
          ]
        },
        "properties": {
          "FID": 86,
          "NOM1": "Etaeto",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.48,
          "LATITUDE": 0.33
        }
      },
      {
        "type": "Feature",
        "id": 87,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.416666959999997,
            0.21666700541785516
          ]
        },
        "properties": {
          "FID": 87,
          "NOM1": "Ebitu",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.42,
          "LATITUDE": 0.22
        }
      },
      {
        "type": "Feature",
        "id": 88,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.766666880000006,
            0.3666670449819424
          ]
        },
        "properties": {
          "FID": 88,
          "NOM1": "Motokolea",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.77,
          "LATITUDE": 0.37
        }
      },
      {
        "type": "Feature",
        "id": 89,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.69999992,
            0.3666670449819424
          ]
        },
        "properties": {
          "FID": 89,
          "NOM1": "Chutes",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.7,
          "LATITUDE": 0.37
        }
      },
      {
        "type": "Feature",
        "id": 90,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.466666999999998,
            0.31666708308688657
          ]
        },
        "properties": {
          "FID": 90,
          "NOM1": "Logobi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.47,
          "LATITUDE": 0.32
        }
      },
      {
        "type": "Feature",
        "id": 91,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.64999988,
            0.30000001244508506
          ]
        },
        "properties": {
          "FID": 91,
          "NOM1": "Makwasori",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.65,
          "LATITUDE": 0.3
        }
      },
      {
        "type": "Feature",
        "id": 92,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.88333388,
            0.43333303376390925
          ]
        },
        "properties": {
          "FID": 92,
          "NOM1": "Mbunia",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.88,
          "LATITUDE": 0.43
        }
      },
      {
        "type": "Feature",
        "id": 93,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.566667080000006,
            0.033333006535749374
          ]
        },
        "properties": {
          "FID": 93,
          "NOM1": "Muli-Matiso",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.57,
          "LATITUDE": 0.03
        }
      },
      {
        "type": "Feature",
        "id": 94,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.933332840000002,
            -1.3000000839126158
          ]
        },
        "properties": {
          "FID": 94,
          "NOM1": "Abaye",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.93,
          "LATITUDE": -1.3
        }
      },
      {
        "type": "Feature",
        "id": 95,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.69999992,
            -1.0833329634759663
          ]
        },
        "properties": {
          "FID": 95,
          "NOM1": "Bukutsha",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.7,
          "LATITUDE": -1.08
        }
      },
      {
        "type": "Feature",
        "id": 96,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.933332840000002,
            -1.2333329208860853
          ]
        },
        "properties": {
          "FID": 96,
          "NOM1": "Busha",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.93,
          "LATITUDE": -1.23
        }
      },
      {
        "type": "Feature",
        "id": 97,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.900000080000005,
            -1.0500000425779612
          ]
        },
        "properties": {
          "FID": 97,
          "NOM1": "Binza",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.9,
          "LATITUDE": -1.05
        }
      },
      {
        "type": "Feature",
        "id": 98,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.016667079999998,
            -1.1999999603549685
          ]
        },
        "properties": {
          "FID": 98,
          "NOM1": "Bweremane",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 29.02,
          "LATITUDE": -1.2
        }
      },
      {
        "type": "Feature",
        "id": 99,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.983332880000003,
            -1.266667080045663
          ]
        },
        "properties": {
          "FID": 99,
          "NOM1": "Kalambahiro",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.98,
          "LATITUDE": -1.27
        }
      },
      {
        "type": "Feature",
        "id": 100,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.800000000000004,
            -1.2500000540697322
          ]
        },
        "properties": {
          "FID": 100,
          "NOM1": "Kibira",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.8,
          "LATITUDE": -1.25
        }
      },
      {
        "type": "Feature",
        "id": 101,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.933332840000002,
            -1.2166669432727188
          ]
        },
        "properties": {
          "FID": 101,
          "NOM1": "Kirumbu",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.93,
          "LATITUDE": -1.22
        }
      },
      {
        "type": "Feature",
        "id": 102,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.81666692,
            -1.1833330547146284
          ]
        },
        "properties": {
          "FID": 102,
          "NOM1": "Lwama",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.82,
          "LATITUDE": -1.18
        }
      },
      {
        "type": "Feature",
        "id": 103,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.95000012,
            -1.1833330547146284
          ]
        },
        "properties": {
          "FID": 103,
          "NOM1": "Mbati",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.95,
          "LATITUDE": -1.18
        }
      },
      {
        "type": "Feature",
        "id": 104,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.850000040000005,
            -1.0333329958369353
          ]
        },
        "properties": {
          "FID": 104,
          "NOM1": "Mumo",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.85,
          "LATITUDE": -1.03
        }
      },
      {
        "type": "Feature",
        "id": 105,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.866666960000003,
            -1.3666670847281945
          ]
        },
        "properties": {
          "FID": 105,
          "NOM1": "Mutobo",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.87,
          "LATITUDE": -1.37
        }
      },
      {
        "type": "Feature",
        "id": 106,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.483332920000002,
            -0.06666708304168507
          ]
        },
        "properties": {
          "FID": 106,
          "NOM1": "Bulambo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.48,
          "LATITUDE": -0.07
        }
      },
      {
        "type": "Feature",
        "id": 107,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.43333288,
            0.08333294191448189
          ]
        },
        "properties": {
          "FID": 107,
          "NOM1": "Busese",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.43,
          "LATITUDE": 0.08
        }
      },
      {
        "type": "Feature",
        "id": 108,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.383332839999998,
            0.13333299321553863
          ]
        },
        "properties": {
          "FID": 108,
          "NOM1": "Busega",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.38,
          "LATITUDE": 0.13
        }
      },
      {
        "type": "Feature",
        "id": 109,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.466667080000004,
            0.1500000765661711
          ]
        },
        "properties": {
          "FID": 109,
          "NOM1": "Muhongue",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.47,
          "LATITUDE": 0.15
        }
      },
      {
        "type": "Feature",
        "id": 110,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.466667080000004,
            0.11666697983263526
          ]
        },
        "properties": {
          "FID": 110,
          "NOM1": "Bwino",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.47,
          "LATITUDE": 0.12
        }
      },
      {
        "type": "Feature",
        "id": 111,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.266666920000006,
            0.21666700541785516
          ]
        },
        "properties": {
          "FID": 111,
          "NOM1": "Butuhe",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.27,
          "LATITUDE": 0.22
        }
      },
      {
        "type": "Feature",
        "id": 112,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.31666696,
            0.2499999135050967
          ]
        },
        "properties": {
          "FID": 112,
          "NOM1": "Kabiabo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.32,
          "LATITUDE": 0.25
        }
      },
      {
        "type": "Feature",
        "id": 113,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.23333308,
            0.3333330451881135
          ]
        },
        "properties": {
          "FID": 113,
          "NOM1": "Kaliberio",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.23,
          "LATITUDE": 0.33
        }
      },
      {
        "type": "Feature",
        "id": 114,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.400000120000005,
            0.033333006535749374
          ]
        },
        "properties": {
          "FID": 114,
          "NOM1": "Kalengehya",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.4,
          "LATITUDE": 0.03
        }
      },
      {
        "type": "Feature",
        "id": 115,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.43333288,
            0.2333329287679913
          ]
        },
        "properties": {
          "FID": 115,
          "NOM1": "Kiabisale",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.43,
          "LATITUDE": 0.23
        }
      },
      {
        "type": "Feature",
        "id": 116,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.400000120000005,
            0.1666669668206416
          ]
        },
        "properties": {
          "FID": 116,
          "NOM1": "Kayangiro",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.4,
          "LATITUDE": 0.17
        }
      },
      {
        "type": "Feature",
        "id": 117,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.383332839999998,
            0.26666705703605703
          ]
        },
        "properties": {
          "FID": 117,
          "NOM1": "Kikio",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.38,
          "LATITUDE": 0.27
        }
      },
      {
        "type": "Feature",
        "id": 118,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.499999839999997,
            0
          ]
        },
        "properties": {
          "FID": 118,
          "NOM1": "Kihoma",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.5,
          "LATITUDE": 0
        }
      },
      {
        "type": "Feature",
        "id": 119,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.23333308,
            0.31666708308688657
          ]
        },
        "properties": {
          "FID": 119,
          "NOM1": "Kiavaranga",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.23,
          "LATITUDE": 0.32
        }
      },
      {
        "type": "Feature",
        "id": 120,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.18333304,
            0.2833329160771258
          ]
        },
        "properties": {
          "FID": 120,
          "NOM1": "Kialala",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.18,
          "LATITUDE": 0.28
        }
      },
      {
        "type": "Feature",
        "id": 121,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.31666696,
            0.21666700541785516
          ]
        },
        "properties": {
          "FID": 121,
          "NOM1": "Kivetia",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.32,
          "LATITUDE": 0.22
        }
      },
      {
        "type": "Feature",
        "id": 122,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.35000008,
            0.2499999135050967
          ]
        },
        "properties": {
          "FID": 122,
          "NOM1": "Kitwa",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.35,
          "LATITUDE": 0.25
        }
      },
      {
        "type": "Feature",
        "id": 123,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.499999839999997,
            -0.033333006535787794
          ]
        },
        "properties": {
          "FID": 123,
          "NOM1": "Kiteraga",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.5,
          "LATITUDE": -0.03
        }
      },
      {
        "type": "Feature",
        "id": 124,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.333333880000005,
            0.31666708308688657
          ]
        },
        "properties": {
          "FID": 124,
          "NOM1": "Maboyo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.33,
          "LATITUDE": 0.32
        }
      },
      {
        "type": "Feature",
        "id": 125,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.466667080000004,
            0.049999956815604235
          ]
        },
        "properties": {
          "FID": 125,
          "NOM1": "Luwere",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.47,
          "LATITUDE": 0.05
        }
      },
      {
        "type": "Feature",
        "id": 126,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.25,
            0.2499999135050967
          ]
        },
        "properties": {
          "FID": 126,
          "NOM1": "Malepe",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.25,
          "LATITUDE": 0.25
        }
      },
      {
        "type": "Feature",
        "id": 127,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.333333880000005,
            0.2333329287679913
          ]
        },
        "properties": {
          "FID": 127,
          "NOM1": "Moheta",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.33,
          "LATITUDE": 0.23
        }
      },
      {
        "type": "Feature",
        "id": 128,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.366667,
            0.11666697983263526
          ]
        },
        "properties": {
          "FID": 128,
          "NOM1": "Muhayirwa",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.37,
          "LATITUDE": 0.12
        }
      },
      {
        "type": "Feature",
        "id": 129,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.95000012,
            0.26666705703605703
          ]
        },
        "properties": {
          "FID": 129,
          "NOM1": "Biambe",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 28.95,
          "LATITUDE": 0.27
        }
      },
      {
        "type": "Feature",
        "id": 130,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.199999960000007,
            -0.10000005527804229
          ]
        },
        "properties": {
          "FID": 130,
          "NOM1": "Balonge",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.2,
          "LATITUDE": -0.1
        }
      },
      {
        "type": "Feature",
        "id": 131,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.199999960000007,
            0.016666954567300954
          ]
        },
        "properties": {
          "FID": 131,
          "NOM1": "Besarabwe",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.2,
          "LATITUDE": 0.02
        }
      },
      {
        "type": "Feature",
        "id": 132,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.199999960000007,
            0.06666708304168507
          ]
        },
        "properties": {
          "FID": 132,
          "NOM1": "Bohano",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.2,
          "LATITUDE": 0.07
        }
      },
      {
        "type": "Feature",
        "id": 133,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.333333880000005,
            -0.13333299321556422
          ]
        },
        "properties": {
          "FID": 133,
          "NOM1": "Masereke",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.33,
          "LATITUDE": -0.13
        }
      },
      {
        "type": "Feature",
        "id": 134,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.266666920000006,
            -0.1666669668206416
          ]
        },
        "properties": {
          "FID": 134,
          "NOM1": "Ilambula",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.27,
          "LATITUDE": -0.17
        }
      },
      {
        "type": "Feature",
        "id": 135,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.366667,
            0.06666708304168507
          ]
        },
        "properties": {
          "FID": 135,
          "NOM1": "Mosenda",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.37,
          "LATITUDE": 0.07
        }
      },
      {
        "type": "Feature",
        "id": 136,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.35000008,
            -0.049999956815604235
          ]
        },
        "properties": {
          "FID": 136,
          "NOM1": "Boyangwa",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.35,
          "LATITUDE": -0.05
        }
      },
      {
        "type": "Feature",
        "id": 137,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.23333308,
            0.033333006535749374
          ]
        },
        "properties": {
          "FID": 137,
          "NOM1": "Musenene",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.23,
          "LATITUDE": 0.03
        }
      },
      {
        "type": "Feature",
        "id": 138,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.400000120000005,
            -0.2833329160771514
          ]
        },
        "properties": {
          "FID": 138,
          "NOM1": "Hangi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.4,
          "LATITUDE": -0.28
        }
      },
      {
        "type": "Feature",
        "id": 139,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.14999992,
            0.08333294191448189
          ]
        },
        "properties": {
          "FID": 139,
          "NOM1": "Kabasinze",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.15,
          "LATITUDE": 0.08
        }
      },
      {
        "type": "Feature",
        "id": 140,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.18333304,
            0.08333294191448189
          ]
        },
        "properties": {
          "FID": 140,
          "NOM1": "Irangira",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.18,
          "LATITUDE": 0.08
        }
      },
      {
        "type": "Feature",
        "id": 141,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.400000120000005,
            -0.049999956815604235
          ]
        },
        "properties": {
          "FID": 141,
          "NOM1": "Kahakaviro",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.4,
          "LATITUDE": -0.05
        }
      },
      {
        "type": "Feature",
        "id": 142,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.016667079999998,
            0.2499999135050967
          ]
        },
        "properties": {
          "FID": 142,
          "NOM1": "Kanzoka",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.02,
          "LATITUDE": 0.25
        }
      },
      {
        "type": "Feature",
        "id": 143,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.28333312,
            -0.06666708304168507
          ]
        },
        "properties": {
          "FID": 143,
          "NOM1": "Kamukahere",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.28,
          "LATITUDE": -0.07
        }
      },
      {
        "type": "Feature",
        "id": 144,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.366667,
            -0.016666954567300954
          ]
        },
        "properties": {
          "FID": 144,
          "NOM1": "Katiri",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.37,
          "LATITUDE": -0.02
        }
      },
      {
        "type": "Feature",
        "id": 145,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.383332839999998,
            -0.13333299321556422
          ]
        },
        "properties": {
          "FID": 145,
          "NOM1": "Katero",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.38,
          "LATITUDE": -0.13
        }
      },
      {
        "type": "Feature",
        "id": 146,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.14999992,
            -0.049999956815604235
          ]
        },
        "properties": {
          "FID": 146,
          "NOM1": "Kibakari",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.15,
          "LATITUDE": -0.05
        }
      },
      {
        "type": "Feature",
        "id": 147,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.066667119999998,
            0.19999998209323908
          ]
        },
        "properties": {
          "FID": 147,
          "NOM1": "Kialamahindi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.07,
          "LATITUDE": 0.2
        }
      },
      {
        "type": "Feature",
        "id": 148,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.23333308,
            -0.049999956815604235
          ]
        },
        "properties": {
          "FID": 148,
          "NOM1": "Kimbulu",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.23,
          "LATITUDE": -0.05
        }
      },
      {
        "type": "Feature",
        "id": 149,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.28333312,
            -0.033333006535787794
          ]
        },
        "properties": {
          "FID": 149,
          "NOM1": "Kirirye",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.28,
          "LATITUDE": -0.03
        }
      },
      {
        "type": "Feature",
        "id": 150,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.099999880000002,
            -0.10000005527804229
          ]
        },
        "properties": {
          "FID": 150,
          "NOM1": "Lubero",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.1,
          "LATITUDE": -0.1
        }
      },
      {
        "type": "Feature",
        "id": 151,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.30000004,
            -0.08333294191452031
          ]
        },
        "properties": {
          "FID": 151,
          "NOM1": "Lotanga",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.3,
          "LATITUDE": -0.08
        }
      },
      {
        "type": "Feature",
        "id": 152,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.366667,
            -0.06666708304168507
          ]
        },
        "properties": {
          "FID": 152,
          "NOM1": "Mageria",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.37,
          "LATITUDE": -0.07
        }
      },
      {
        "type": "Feature",
        "id": 153,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.08333296,
            -0.016666954567300954
          ]
        },
        "properties": {
          "FID": 153,
          "NOM1": "Mabungu",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.08,
          "LATITUDE": -0.02
        }
      },
      {
        "type": "Feature",
        "id": 154,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.016667079999998,
            -0.06666708304168507
          ]
        },
        "properties": {
          "FID": 154,
          "NOM1": "Makombi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.02,
          "LATITUDE": -0.07
        }
      },
      {
        "type": "Feature",
        "id": 155,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.14999992,
            -0.033333006535787794
          ]
        },
        "properties": {
          "FID": 155,
          "NOM1": "Masumo",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.15,
          "LATITUDE": -0.03
        }
      },
      {
        "type": "Feature",
        "id": 156,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.08333296,
            0.049999956815604235
          ]
        },
        "properties": {
          "FID": 156,
          "NOM1": "Mohangi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.08,
          "LATITUDE": 0.05
        }
      },
      {
        "type": "Feature",
        "id": 157,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.016667079999998,
            0.016666954567300954
          ]
        },
        "properties": {
          "FID": 157,
          "NOM1": "Milinde",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.02,
          "LATITUDE": 0.02
        }
      },
      {
        "type": "Feature",
        "id": 158,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.16666684,
            0.016666954567300954
          ]
        },
        "properties": {
          "FID": 158,
          "NOM1": "Mukama",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.17,
          "LATITUDE": 0.02
        }
      },
      {
        "type": "Feature",
        "id": 159,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.133333,
            -0.06666708304168507
          ]
        },
        "properties": {
          "FID": 159,
          "NOM1": "Mutushi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.13,
          "LATITUDE": -0.07
        }
      },
      {
        "type": "Feature",
        "id": 160,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.266666920000006,
            -0.666666912598124
          ]
        },
        "properties": {
          "FID": 160,
          "NOM1": "Bukwesha",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.27,
          "LATITUDE": -0.67
        }
      },
      {
        "type": "Feature",
        "id": 161,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.133333,
            -0.35000006009187984
          ]
        },
        "properties": {
          "FID": 161,
          "NOM1": "Bilundule",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.13,
          "LATITUDE": -0.35
        }
      },
      {
        "type": "Feature",
        "id": 162,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.30000004,
            -0.5666669210444664
          ]
        },
        "properties": {
          "FID": 162,
          "NOM1": "Buhimba",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.3,
          "LATITUDE": -0.57
        }
      },
      {
        "type": "Feature",
        "id": 163,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.199999960000007,
            -0.2499999135050967
          ]
        },
        "properties": {
          "FID": 163,
          "NOM1": "Bikara",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.2,
          "LATITUDE": -0.25
        }
      },
      {
        "type": "Feature",
        "id": 164,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.033332920000003,
            -0.23333292876800413
          ]
        },
        "properties": {
          "FID": 164,
          "NOM1": "Bukula",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.03,
          "LATITUDE": -0.23
        }
      },
      {
        "type": "Feature",
        "id": 165,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.850000040000005,
            -0.45000002738046396
          ]
        },
        "properties": {
          "FID": 165,
          "NOM1": "Bonyatenge",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 28.85,
          "LATITUDE": -0.45
        }
      },
      {
        "type": "Feature",
        "id": 166,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.08333296,
            -0.7000000413136602
          ]
        },
        "properties": {
          "FID": 166,
          "NOM1": "Biriseke",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.08,
          "LATITUDE": -0.7
        }
      },
      {
        "type": "Feature",
        "id": 167,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.833333120000006,
            -0.5166670609840603
          ]
        },
        "properties": {
          "FID": 167,
          "NOM1": "Buniakahemba",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 28.83,
          "LATITUDE": -0.52
        }
      },
      {
        "type": "Feature",
        "id": 168,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.28333312,
            -0.4666669824077908
          ]
        },
        "properties": {
          "FID": 168,
          "NOM1": "Butungi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.28,
          "LATITUDE": -0.47
        }
      },
      {
        "type": "Feature",
        "id": 169,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.683333,
            -0.06666708304168507
          ]
        },
        "properties": {
          "FID": 169,
          "NOM1": "Burako",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 28.68,
          "LATITUDE": -0.07
        }
      },
      {
        "type": "Feature",
        "id": 170,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.35000008,
            -0.3666670449819808
          ]
        },
        "properties": {
          "FID": 170,
          "NOM1": "Igalika",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.35,
          "LATITUDE": -0.37
        }
      },
      {
        "type": "Feature",
        "id": 171,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.08333296,
            -0.13333299321556422
          ]
        },
        "properties": {
          "FID": 171,
          "NOM1": "Kahasero",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.08,
          "LATITUDE": -0.13
        }
      },
      {
        "type": "Feature",
        "id": 172,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.28333312,
            -0.63333301454188
          ]
        },
        "properties": {
          "FID": 172,
          "NOM1": "Kabuya",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.28,
          "LATITUDE": -0.63
        }
      },
      {
        "type": "Feature",
        "id": 173,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.04999984,
            -0.40000001785696493
          ]
        },
        "properties": {
          "FID": 173,
          "NOM1": "Kabingu",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.05,
          "LATITUDE": -0.4
        }
      },
      {
        "type": "Feature",
        "id": 174,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.30000004,
            -0.5999999805816757
          ]
        },
        "properties": {
          "FID": 174,
          "NOM1": "Kamandi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.3,
          "LATITUDE": -0.6
        }
      },
      {
        "type": "Feature",
        "id": 175,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.18333304,
            -0.26666705703605703
          ]
        },
        "properties": {
          "FID": 175,
          "NOM1": "Kalungu",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.18,
          "LATITUDE": -0.27
        }
      },
      {
        "type": "Feature",
        "id": 176,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.23333308,
            -0.666666912598124
          ]
        },
        "properties": {
          "FID": 176,
          "NOM1": "Kalia",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.23,
          "LATITUDE": -0.67
        }
      },
      {
        "type": "Feature",
        "id": 177,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.116667160000002,
            -0.3833329170500264
          ]
        },
        "properties": {
          "FID": 177,
          "NOM1": "Kanyamabo",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.12,
          "LATITUDE": -0.38
        }
      },
      {
        "type": "Feature",
        "id": 178,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.30000004,
            -0.5833330252623535
          ]
        },
        "properties": {
          "FID": 178,
          "NOM1": "Kaniatsi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.3,
          "LATITUDE": -0.58
        }
      },
      {
        "type": "Feature",
        "id": 179,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.88333388,
            -0.43333303376390925
          ]
        },
        "properties": {
          "FID": 179,
          "NOM1": "Kamuhina",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 28.88,
          "LATITUDE": -0.43
        }
      },
      {
        "type": "Feature",
        "id": 180,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.016667079999998,
            -0.1500000765662095
          ]
        },
        "properties": {
          "FID": 180,
          "NOM1": "Kasone Kimule",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.02,
          "LATITUDE": -0.15
        }
      },
      {
        "type": "Feature",
        "id": 181,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.04999984,
            -0.1666669668206416
          ]
        },
        "properties": {
          "FID": 181,
          "NOM1": "Kasone",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.05,
          "LATITUDE": -0.17
        }
      },
      {
        "type": "Feature",
        "id": 182,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.333333880000005,
            -0.5999999805816757
          ]
        },
        "properties": {
          "FID": 182,
          "NOM1": "Kataro",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.33,
          "LATITUDE": -0.6
        }
      },
      {
        "type": "Feature",
        "id": 183,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.983332880000003,
            -0.3000000124451235
          ]
        },
        "properties": {
          "FID": 183,
          "NOM1": "Katandele",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 28.98,
          "LATITUDE": -0.3
        }
      },
      {
        "type": "Feature",
        "id": 184,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.08333296,
            -0.6499999914404839
          ]
        },
        "properties": {
          "FID": 184,
          "NOM1": "Kashetsi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.08,
          "LATITUDE": -0.65
        }
      },
      {
        "type": "Feature",
        "id": 185,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.833333120000006,
            -0.45000002738046396
          ]
        },
        "properties": {
          "FID": 185,
          "NOM1": "Katundu",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 28.83,
          "LATITUDE": -0.45
        }
      },
      {
        "type": "Feature",
        "id": 186,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.966667040000004,
            -0.43333303376390925
          ]
        },
        "properties": {
          "FID": 186,
          "NOM1": "Kibukulu",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 28.97,
          "LATITUDE": -0.43
        }
      },
      {
        "type": "Feature",
        "id": 187,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.133333,
            -0.41666708436214284
          ]
        },
        "properties": {
          "FID": 187,
          "NOM1": "Kisenga",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.13,
          "LATITUDE": -0.42
        }
      },
      {
        "type": "Feature",
        "id": 188,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.25,
            -0.5999999805816757
          ]
        },
        "properties": {
          "FID": 188,
          "NOM1": "Kisangani",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.25,
          "LATITUDE": -0.6
        }
      },
      {
        "type": "Feature",
        "id": 189,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.033332920000003,
            -0.18333294161811078
          ]
        },
        "properties": {
          "FID": 189,
          "NOM1": "Kirungu",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.03,
          "LATITUDE": -0.18
        }
      },
      {
        "type": "Feature",
        "id": 190,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.199999960000007,
            -0.2833329160771514
          ]
        },
        "properties": {
          "FID": 190,
          "NOM1": "Kitsambiro",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.2,
          "LATITUDE": -0.28
        }
      },
      {
        "type": "Feature",
        "id": 191,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.066667119999998,
            -0.23333292876800413
          ]
        },
        "properties": {
          "FID": 191,
          "NOM1": "Luhunga",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.07,
          "LATITUDE": -0.23
        }
      },
      {
        "type": "Feature",
        "id": 192,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.81666692,
            -0.4666669824077908
          ]
        },
        "properties": {
          "FID": 192,
          "NOM1": "Lutunguru",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 28.82,
          "LATITUDE": -0.47
        }
      },
      {
        "type": "Feature",
        "id": 193,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.016667079999998,
            -0.10000005527804229
          ]
        },
        "properties": {
          "FID": 193,
          "NOM1": "Mangada",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.02,
          "LATITUDE": -0.1
        }
      },
      {
        "type": "Feature",
        "id": 194,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.14999992,
            -0.33333304518812634
          ]
        },
        "properties": {
          "FID": 194,
          "NOM1": "Mambosa",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.15,
          "LATITUDE": -0.33
        }
      },
      {
        "type": "Feature",
        "id": 195,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.216666880000002,
            -0.23333292876800413
          ]
        },
        "properties": {
          "FID": 195,
          "NOM1": "Makoka",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.22,
          "LATITUDE": -0.23
        }
      },
      {
        "type": "Feature",
        "id": 196,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.916667000000004,
            -0.1666669668206416
          ]
        },
        "properties": {
          "FID": 196,
          "NOM1": "Maipi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 28.92,
          "LATITUDE": -0.17
        }
      },
      {
        "type": "Feature",
        "id": 197,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.95000012,
            -0.23333292876800413
          ]
        },
        "properties": {
          "FID": 197,
          "NOM1": "Matete",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 28.95,
          "LATITUDE": -0.23
        }
      },
      {
        "type": "Feature",
        "id": 198,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.08333296,
            -0.48333299627957726
          ]
        },
        "properties": {
          "FID": 198,
          "NOM1": "Masima",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.08,
          "LATITUDE": -0.48
        }
      },
      {
        "type": "Feature",
        "id": 199,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.016667079999998,
            -0.33333304518812634
          ]
        },
        "properties": {
          "FID": 199,
          "NOM1": "Manzia",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.02,
          "LATITUDE": -0.33
        }
      },
      {
        "type": "Feature",
        "id": 200,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.983332880000003,
            -0.049999956815604235
          ]
        },
        "properties": {
          "FID": 200,
          "NOM1": "Manzamba",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 28.98,
          "LATITUDE": -0.05
        }
      },
      {
        "type": "Feature",
        "id": 201,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.900000080000005,
            -0.41666708436214284
          ]
        },
        "properties": {
          "FID": 201,
          "NOM1": "Mohanga",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 28.9,
          "LATITUDE": -0.42
        }
      },
      {
        "type": "Feature",
        "id": 202,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.74999996,
            -0.19999998209327752
          ]
        },
        "properties": {
          "FID": 202,
          "NOM1": "Mbumbalo",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 28.75,
          "LATITUDE": -0.2
        }
      },
      {
        "type": "Feature",
        "id": 203,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.14999992,
            -0.5333329462349135
          ]
        },
        "properties": {
          "FID": 203,
          "NOM1": "Mulinga",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.15,
          "LATITUDE": -0.53
        }
      },
      {
        "type": "Feature",
        "id": 204,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.033332920000003,
            -0.2499999135050967
          ]
        },
        "properties": {
          "FID": 204,
          "NOM1": "Mukula",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.03,
          "LATITUDE": -0.25
        }
      },
      {
        "type": "Feature",
        "id": 205,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.016667079999998,
            -0.6833330557019955
          ]
        },
        "properties": {
          "FID": 205,
          "NOM1": "Mukomomole",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Babila-Babombi",
          "LONGITUDE": 29.02,
          "LATITUDE": -0.68
        }
      },
      {
        "type": "Feature",
        "id": 206,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.66666688,
            0.8666670809065039
          ]
        },
        "properties": {
          "FID": 206,
          "NOM1": "Abia",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.67,
          "LATITUDE": 0.87
        }
      },
      {
        "type": "Feature",
        "id": 207,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.483332920000002,
            0.5666669210444535
          ]
        },
        "properties": {
          "FID": 207,
          "NOM1": "Bendera",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.48,
          "LATITUDE": 0.57
        }
      },
      {
        "type": "Feature",
        "id": 208,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.612366846621164,
            0.85186413299681
          ]
        },
        "properties": {
          "FID": 208,
          "NOM1": "Eringiti",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.61,
          "LATITUDE": 0.85
        }
      },
      {
        "type": "Feature",
        "id": 209,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.14999992,
            0.500000050070494
          ]
        },
        "properties": {
          "FID": 209,
          "NOM1": "Aloi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.15,
          "LATITUDE": 0.5
        }
      },
      {
        "type": "Feature",
        "id": 210,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.31666696,
            0.5333329462349007
          ]
        },
        "properties": {
          "FID": 210,
          "NOM1": "Bingo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.32,
          "LATITUDE": 0.53
        }
      },
      {
        "type": "Feature",
        "id": 211,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.31666696,
            0.5666669210444535
          ]
        },
        "properties": {
          "FID": 211,
          "NOM1": "Home",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.32,
          "LATITUDE": 0.57
        }
      },
      {
        "type": "Feature",
        "id": 212,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.54999988,
            0.7166669668961321
          ]
        },
        "properties": {
          "FID": 212,
          "NOM1": "Kisikivi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.55,
          "LATITUDE": 0.72
        }
      },
      {
        "type": "Feature",
        "id": 213,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.25,
            0.6166670646716303
          ]
        },
        "properties": {
          "FID": 213,
          "NOM1": "Lebia",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.25,
          "LATITUDE": 0.62
        }
      },
      {
        "type": "Feature",
        "id": 214,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.099999880000002,
            0.4500000273804256
          ]
        },
        "properties": {
          "FID": 214,
          "NOM1": "Lubena",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.1,
          "LATITUDE": 0.45
        }
      },
      {
        "type": "Feature",
        "id": 215,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.383332839999998,
            0.40000001785696493
          ]
        },
        "properties": {
          "FID": 215,
          "NOM1": "Mbaya",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.38,
          "LATITUDE": 0.4
        }
      },
      {
        "type": "Feature",
        "id": 216,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.499999839999997,
            0.6333330145418672
          ]
        },
        "properties": {
          "FID": 216,
          "NOM1": "Mbau",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.5,
          "LATITUDE": 0.63
        }
      },
      {
        "type": "Feature",
        "id": 217,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.28333312,
            0.6166670646716303
          ]
        },
        "properties": {
          "FID": 217,
          "NOM1": "Matango",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.28,
          "LATITUDE": 0.62
        }
      },
      {
        "type": "Feature",
        "id": 218,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.346111000000004,
            -1.5277779743140605
          ]
        },
        "properties": {
          "FID": 218,
          "NOM1": "Buhumba",
          "TERRITOIRE": "Nyiragongo",
          "COLLECTIV": "Bukumu",
          "LONGITUDE": 29.35,
          "LATITUDE": -1.53
        }
      },
      {
        "type": "Feature",
        "id": 219,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.18277792,
            -1.625277937428512
          ]
        },
        "properties": {
          "FID": 219,
          "NOM1": "Bugamba",
          "TERRITOIRE": "Nyiragongo",
          "COLLECTIV": "Bukumu",
          "LONGITUDE": 29.18,
          "LATITUDE": -1.63
        }
      },
      {
        "type": "Feature",
        "id": 220,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.25,
            -1.6336110626809877
          ]
        },
        "properties": {
          "FID": 220,
          "NOM1": "Monigi",
          "TERRITOIRE": "Nyiragongo",
          "COLLECTIV": "Bukumu",
          "LONGITUDE": 29.25,
          "LATITUDE": -1.63
        }
      },
      {
        "type": "Feature",
        "id": 221,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.428332840000003,
            -1.4805560523967929
          ]
        },
        "properties": {
          "FID": 221,
          "NOM1": "Kabare",
          "TERRITOIRE": "Nyiragongo",
          "COLLECTIV": "Bukumu",
          "LONGITUDE": 29.43,
          "LATITUDE": -1.48
        }
      },
      {
        "type": "Feature",
        "id": 222,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.133333,
            -1.1999999603549685
          ]
        },
        "properties": {
          "FID": 222,
          "NOM1": "Birambizo",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.13,
          "LATITUDE": -1.2
        }
      },
      {
        "type": "Feature",
        "id": 223,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.983332880000003,
            -1.0333329958369353
          ]
        },
        "properties": {
          "FID": 223,
          "NOM1": "Binsha",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 28.98,
          "LATITUDE": -1.03
        }
      },
      {
        "type": "Feature",
        "id": 224,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.133333,
            -0.7499999113846127
          ]
        },
        "properties": {
          "FID": 224,
          "NOM1": "Itundula",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.13,
          "LATITUDE": -0.75
        }
      },
      {
        "type": "Feature",
        "id": 225,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.16666684,
            -0.733332929925552
          ]
        },
        "properties": {
          "FID": 225,
          "NOM1": "Kagemere",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.17,
          "LATITUDE": -0.73
        }
      },
      {
        "type": "Feature",
        "id": 226,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.199999960000007,
            -0.7833329590541606
          ]
        },
        "properties": {
          "FID": 226,
          "NOM1": "Kashwa",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.2,
          "LATITUDE": -0.78
        }
      },
      {
        "type": "Feature",
        "id": 227,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.216666880000002,
            -1.2333329208860853
          ]
        },
        "properties": {
          "FID": 227,
          "NOM1": "Katungonda",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.22,
          "LATITUDE": -1.23
        }
      },
      {
        "type": "Feature",
        "id": 228,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.116667160000002,
            -1.0500000425779612
          ]
        },
        "properties": {
          "FID": 228,
          "NOM1": "Kihindo",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.12,
          "LATITUDE": -1.05
        }
      },
      {
        "type": "Feature",
        "id": 229,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.203332840000005,
            -1.1886109612609759
          ]
        },
        "properties": {
          "FID": 229,
          "NOM1": "Mahondo",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.2,
          "LATITUDE": -1.19
        }
      },
      {
        "type": "Feature",
        "id": 230,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.099999880000002,
            -1.1166669543606609
          ]
        },
        "properties": {
          "FID": 230,
          "NOM1": "Lutiba",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.1,
          "LATITUDE": -1.12
        }
      },
      {
        "type": "Feature",
        "id": 231,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.133333,
            -1.0500000425779612
          ]
        },
        "properties": {
          "FID": 231,
          "NOM1": "Lushekere",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.13,
          "LATITUDE": -1.05
        }
      },
      {
        "type": "Feature",
        "id": 232,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.16666684,
            -0.8666670809065039
          ]
        },
        "properties": {
          "FID": 232,
          "NOM1": "Matoto",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.17,
          "LATITUDE": -0.87
        }
      },
      {
        "type": "Feature",
        "id": 233,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.208056040000006,
            -1.0102779400599462
          ]
        },
        "properties": {
          "FID": 233,
          "NOM1": "Mugende",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.21,
          "LATITUDE": -1.01
        }
      },
      {
        "type": "Feature",
        "id": 234,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.18333304,
            -1.2500000540697322
          ]
        },
        "properties": {
          "FID": 234,
          "NOM1": "Muhindo",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.18,
          "LATITUDE": -1.25
        }
      },
      {
        "type": "Feature",
        "id": 235,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.14999992,
            -1.1833330547146284
          ]
        },
        "properties": {
          "FID": 235,
          "NOM1": "Muhanga",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.15,
          "LATITUDE": -1.18
        }
      },
      {
        "type": "Feature",
        "id": 236,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.95000012,
            -1.0333329958369353
          ]
        },
        "properties": {
          "FID": 236,
          "NOM1": "Muhanga",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 28.95,
          "LATITUDE": -1.03
        }
      },
      {
        "type": "Feature",
        "id": 237,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.77999984,
            -1.5527780804161253
          ]
        },
        "properties": {
          "FID": 237,
          "NOM1": "Bukumbiri",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Katoyi",
          "LONGITUDE": 28.78,
          "LATITUDE": -1.55
        }
      },
      {
        "type": "Feature",
        "id": 238,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.780556040000004,
            -1.6083330521211416
          ]
        },
        "properties": {
          "FID": 238,
          "NOM1": "Biso",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Katoyi",
          "LONGITUDE": 28.78,
          "LATITUDE": -1.61
        }
      },
      {
        "type": "Feature",
        "id": 239,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.672499879999997,
            -1.7400000283402737
          ]
        },
        "properties": {
          "FID": 239,
          "NOM1": "Biriko",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Katoyi",
          "LONGITUDE": 28.67,
          "LATITUDE": -1.74
        }
      },
      {
        "type": "Feature",
        "id": 240,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.55000016,
            -1.6666670314512033
          ]
        },
        "properties": {
          "FID": 240,
          "NOM1": "Karali",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Katoyi",
          "LONGITUDE": 28.55,
          "LATITUDE": -1.67
        }
      },
      {
        "type": "Feature",
        "id": 241,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.73333304,
            -1.7166670687210368
          ]
        },
        "properties": {
          "FID": 241,
          "NOM1": "Katuhunda",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Katoyi",
          "LONGITUDE": 28.73,
          "LATITUDE": -1.72
        }
      },
      {
        "type": "Feature",
        "id": 242,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.683333,
            -1.5544440829438062
          ]
        },
        "properties": {
          "FID": 242,
          "NOM1": "Kikoma",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Katoyi",
          "LONGITUDE": 28.68,
          "LATITUDE": -1.55
        }
      },
      {
        "type": "Feature",
        "id": 243,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.699722000000005,
            -1.6797220418292065
          ]
        },
        "properties": {
          "FID": 243,
          "NOM1": "Kilambo",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Katoyi",
          "LONGITUDE": 28.7,
          "LATITUDE": -1.68
        }
      },
      {
        "type": "Feature",
        "id": 244,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.69999992,
            -1.566666919097176
          ]
        },
        "properties": {
          "FID": 244,
          "NOM1": "Luindi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Katoyi",
          "LONGITUDE": 28.7,
          "LATITUDE": -1.57
        }
      },
      {
        "type": "Feature",
        "id": 245,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.64999988,
            -1.6666670314512033
          ]
        },
        "properties": {
          "FID": 245,
          "NOM1": "Matshumbi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Katoyi",
          "LONGITUDE": 28.65,
          "LATITUDE": -1.67
        }
      },
      {
        "type": "Feature",
        "id": 246,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.850000040000005,
            -1.6666670314512033
          ]
        },
        "properties": {
          "FID": 246,
          "NOM1": "Mifuti",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Katoyi",
          "LONGITUDE": 28.85,
          "LATITUDE": -1.67
        }
      },
      {
        "type": "Feature",
        "id": 247,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.766666880000006,
            -1.3333330021957985
          ]
        },
        "properties": {
          "FID": 247,
          "NOM1": "Bukombo",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.77,
          "LATITUDE": -1.33
        }
      },
      {
        "type": "Feature",
        "id": 248,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.800000000000004,
            -1.4833330567642933
          ]
        },
        "properties": {
          "FID": 248,
          "NOM1": "Bogabo",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.8,
          "LATITUDE": -1.48
        }
      },
      {
        "type": "Feature",
        "id": 249,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.566667080000006,
            -1.433332930901363
          ]
        },
        "properties": {
          "FID": 249,
          "NOM1": "Bibatama II",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.57,
          "LATITUDE": -1.43
        }
      },
      {
        "type": "Feature",
        "id": 250,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.55000016,
            -1.4833330567642933
          ]
        },
        "properties": {
          "FID": 250,
          "NOM1": "Bibama III",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.55,
          "LATITUDE": -1.48
        }
      },
      {
        "type": "Feature",
        "id": 251,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.64999988,
            -1.2833329162565434
          ]
        },
        "properties": {
          "FID": 251,
          "NOM1": "Habula",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.65,
          "LATITUDE": -1.28
        }
      },
      {
        "type": "Feature",
        "id": 252,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.666667160000003,
            -1.4833330567642933
          ]
        },
        "properties": {
          "FID": 252,
          "NOM1": "Kakungwe",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.67,
          "LATITUDE": -1.48
        }
      },
      {
        "type": "Feature",
        "id": 253,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.683333,
            -1.3166669598851382
          ]
        },
        "properties": {
          "FID": 253,
          "NOM1": "Kashebere",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.68,
          "LATITUDE": -1.32
        }
      },
      {
        "type": "Feature",
        "id": 254,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.773333000000004,
            -1.5344440376841957
          ]
        },
        "properties": {
          "FID": 254,
          "NOM1": "Karambi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.77,
          "LATITUDE": -1.53
        }
      },
      {
        "type": "Feature",
        "id": 255,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.616667120000002,
            -1.383332959891931
          ]
        },
        "properties": {
          "FID": 255,
          "NOM1": "Kikuningulwa",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.62,
          "LATITUDE": -1.38
        }
      },
      {
        "type": "Feature",
        "id": 256,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.599999840000002,
            -1.5166669213104869
          ]
        },
        "properties": {
          "FID": 256,
          "NOM1": "Kiangitsi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.6,
          "LATITUDE": -1.52
        }
      },
      {
        "type": "Feature",
        "id": 257,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.566667080000006,
            -1.566666919097176
          ]
        },
        "properties": {
          "FID": 257,
          "NOM1": "Kinene",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.57,
          "LATITUDE": -1.57
        }
      },
      {
        "type": "Feature",
        "id": 258,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.71666684,
            -1.3000000839126158
          ]
        },
        "properties": {
          "FID": 258,
          "NOM1": "Kimoho",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.72,
          "LATITUDE": -1.3
        }
      },
      {
        "type": "Feature",
        "id": 259,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.566667080000006,
            -1.4666670139806697
          ]
        },
        "properties": {
          "FID": 259,
          "NOM1": "Luho",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Katoyi",
          "LONGITUDE": 28.57,
          "LATITUDE": -1.47
        }
      },
      {
        "type": "Feature",
        "id": 260,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.616667120000002,
            -1.449999944536759
          ]
        },
        "properties": {
          "FID": 260,
          "NOM1": "Lutoboho",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.62,
          "LATITUDE": -1.45
        }
      },
      {
        "type": "Feature",
        "id": 261,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.616667120000002,
            -1.5500000853545788
          ]
        },
        "properties": {
          "FID": 261,
          "NOM1": "Maya",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.62,
          "LATITUDE": -1.55
        }
      },
      {
        "type": "Feature",
        "id": 262,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.81666692,
            -1.3999999776824477
          ]
        },
        "properties": {
          "FID": 262,
          "NOM1": "Masisi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.82,
          "LATITUDE": -1.4
        }
      },
      {
        "type": "Feature",
        "id": 263,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.800000000000004,
            -1.449999944536759
          ]
        },
        "properties": {
          "FID": 263,
          "NOM1": "Mindi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.8,
          "LATITUDE": -1.45
        }
      },
      {
        "type": "Feature",
        "id": 264,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.88333388,
            -1.449999944536759
          ]
        },
        "properties": {
          "FID": 264,
          "NOM1": "Mumba",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.88,
          "LATITUDE": -1.45
        }
      },
      {
        "type": "Feature",
        "id": 265,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.633332960000004,
            -1.4666670139806697
          ]
        },
        "properties": {
          "FID": 265,
          "NOM1": "Mukota",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.63,
          "LATITUDE": -1.47
        }
      },
      {
        "type": "Feature",
        "id": 266,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.35000008,
            0.35000006009186707
          ]
        },
        "properties": {
          "FID": 266,
          "NOM1": "Bitongo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.35,
          "LATITUDE": 0.35
        }
      },
      {
        "type": "Feature",
        "id": 267,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.366667,
            0.3833329170500136
          ]
        },
        "properties": {
          "FID": 267,
          "NOM1": "Kabasha",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.37,
          "LATITUDE": 0.38
        }
      },
      {
        "type": "Feature",
        "id": 268,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.599999920000002,
            -0.13333299321556422
          ]
        },
        "properties": {
          "FID": 268,
          "NOM1": "Isango-Isoro",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.6,
          "LATITUDE": -0.13
        }
      },
      {
        "type": "Feature",
        "id": 269,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.80000008,
            0.3333330451881135
          ]
        },
        "properties": {
          "FID": 269,
          "NOM1": "Kalonge",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.8,
          "LATITUDE": 0.33
        }
      },
      {
        "type": "Feature",
        "id": 270,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.700000000000003,
            0.10000005527801668
          ]
        },
        "properties": {
          "FID": 270,
          "NOM1": "Kalemia",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.7,
          "LATITUDE": 0.1
        }
      },
      {
        "type": "Feature",
        "id": 271,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.71666692,
            -0.033333006535787794
          ]
        },
        "properties": {
          "FID": 271,
          "NOM1": "Kasindi Vieux",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.72,
          "LATITUDE": -0.03
        }
      },
      {
        "type": "Feature",
        "id": 272,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.68333308,
            0.049999956815604235
          ]
        },
        "properties": {
          "FID": 272,
          "NOM1": "Kasindi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.68,
          "LATITUDE": 0.05
        }
      },
      {
        "type": "Feature",
        "id": 273,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.366667,
            0.3666670449819424
          ]
        },
        "properties": {
          "FID": 273,
          "NOM1": "Karibumba",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.37,
          "LATITUDE": 0.37
        }
      },
      {
        "type": "Feature",
        "id": 274,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.766666960000002,
            0.40000001785696493
          ]
        },
        "properties": {
          "FID": 274,
          "NOM1": "Kiavikere",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.77,
          "LATITUDE": 0.4
        }
      },
      {
        "type": "Feature",
        "id": 275,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.599999920000002,
            0.40000001785696493
          ]
        },
        "properties": {
          "FID": 275,
          "NOM1": "Kilia",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.6,
          "LATITUDE": 0.4
        }
      },
      {
        "type": "Feature",
        "id": 276,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.71666692,
            0.31666708308688657
          ]
        },
        "properties": {
          "FID": 276,
          "NOM1": "Kisanga",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.72,
          "LATITUDE": 0.32
        }
      },
      {
        "type": "Feature",
        "id": 277,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.78333388,
            0.26666705703605703
          ]
        },
        "properties": {
          "FID": 277,
          "NOM1": "Kirivata",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.78,
          "LATITUDE": 0.27
        }
      },
      {
        "type": "Feature",
        "id": 278,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.68333308,
            0.3666670449819424
          ]
        },
        "properties": {
          "FID": 278,
          "NOM1": "Kiondo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.68,
          "LATITUDE": 0.37
        }
      },
      {
        "type": "Feature",
        "id": 279,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.66666688,
            0.40000001785696493
          ]
        },
        "properties": {
          "FID": 279,
          "NOM1": "Kiniambabore",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.67,
          "LATITUDE": 0.4
        }
      },
      {
        "type": "Feature",
        "id": 280,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.41666704,
            0.31666708308688657
          ]
        },
        "properties": {
          "FID": 280,
          "NOM1": "Lisasa",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.42,
          "LATITUDE": 0.32
        }
      },
      {
        "type": "Feature",
        "id": 281,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.649999960000002,
            0.35000006009186707
          ]
        },
        "properties": {
          "FID": 281,
          "NOM1": "Libokora",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.65,
          "LATITUDE": 0.35
        }
      },
      {
        "type": "Feature",
        "id": 282,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.700000000000003,
            0.06666708304168507
          ]
        },
        "properties": {
          "FID": 282,
          "NOM1": "Lubango",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.7,
          "LATITUDE": 0.07
        }
      },
      {
        "type": "Feature",
        "id": 283,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.750000040000003,
            0.40000001785696493
          ]
        },
        "properties": {
          "FID": 283,
          "NOM1": "Loulo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.75,
          "LATITUDE": 0.4
        }
      },
      {
        "type": "Feature",
        "id": 284,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.333333880000005,
            0.3666670449819424
          ]
        },
        "properties": {
          "FID": 284,
          "NOM1": "Mahungu",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.33,
          "LATITUDE": 0.37
        }
      },
      {
        "type": "Feature",
        "id": 285,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.73333312,
            0.30000001244508506
          ]
        },
        "properties": {
          "FID": 285,
          "NOM1": "Manduli",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.73,
          "LATITUDE": 0.3
        }
      },
      {
        "type": "Feature",
        "id": 286,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.71666692,
            0.1500000765661711
          ]
        },
        "properties": {
          "FID": 286,
          "NOM1": "Masambo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.72,
          "LATITUDE": 0.15
        }
      },
      {
        "type": "Feature",
        "id": 287,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.750000040000003,
            0.3333330451881135
          ]
        },
        "properties": {
          "FID": 287,
          "NOM1": "Mutwanga",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.75,
          "LATITUDE": 0.33
        }
      },
      {
        "type": "Feature",
        "id": 288,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.750000040000003,
            0.31666708308688657
          ]
        },
        "properties": {
          "FID": 288,
          "NOM1": "Mutsora",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.75,
          "LATITUDE": 0.32
        }
      },
      {
        "type": "Feature",
        "id": 289,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.716667120000004,
            -1.3000000839126158
          ]
        },
        "properties": {
          "FID": 289,
          "NOM1": "Okondo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.72,
          "LATITUDE": -1.3
        }
      },
      {
        "type": "Feature",
        "id": 290,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.73333304,
            -0.7666670087438974
          ]
        },
        "properties": {
          "FID": 290,
          "NOM1": "Bukumbirwa",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.73,
          "LATITUDE": -0.77
        }
      },
      {
        "type": "Feature",
        "id": 291,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.933332840000002,
            -0.9000000391912666
          ]
        },
        "properties": {
          "FID": 291,
          "NOM1": "Buhimba",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.93,
          "LATITUDE": -0.9
        }
      },
      {
        "type": "Feature",
        "id": 292,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.53333288,
            -0.7666670087438974
          ]
        },
        "properties": {
          "FID": 292,
          "NOM1": "Buluko",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.53,
          "LATITUDE": -0.77
        }
      },
      {
        "type": "Feature",
        "id": 293,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.800000000000004,
            -0.5666669210444664
          ]
        },
        "properties": {
          "FID": 293,
          "NOM1": "Bilati",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.8,
          "LATITUDE": -0.57
        }
      },
      {
        "type": "Feature",
        "id": 294,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.73333304,
            -0.9166670340185668
          ]
        },
        "properties": {
          "FID": 294,
          "NOM1": "Bese",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.73,
          "LATITUDE": -0.92
        }
      },
      {
        "type": "Feature",
        "id": 295,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.18333296,
            -1.3666670847281945
          ]
        },
        "properties": {
          "FID": 295,
          "NOM1": "Bulinga",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.18,
          "LATITUDE": -1.37
        }
      },
      {
        "type": "Feature",
        "id": 296,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.91666692,
            -1.3166669598851382
          ]
        },
        "properties": {
          "FID": 296,
          "NOM1": "Bilobilo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.92,
          "LATITUDE": -1.32
        }
      },
      {
        "type": "Feature",
        "id": 297,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.966666960000005,
            -1.3333330021957985
          ]
        },
        "properties": {
          "FID": 297,
          "NOM1": "Bobolo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.97,
          "LATITUDE": -1.33
        }
      },
      {
        "type": "Feature",
        "id": 298,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.583332920000004,
            -1.7166670687210368
          ]
        },
        "properties": {
          "FID": 298,
          "NOM1": "Busurungi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.58,
          "LATITUDE": -1.72
        }
      },
      {
        "type": "Feature",
        "id": 299,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.966667040000004,
            -0.8833329671804603
          ]
        },
        "properties": {
          "FID": 299,
          "NOM1": "Busisimula",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.97,
          "LATITUDE": -0.88
        }
      },
      {
        "type": "Feature",
        "id": 300,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.69999992,
            -0.6833330557019955
          ]
        },
        "properties": {
          "FID": 300,
          "NOM1": "Biriku",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.7,
          "LATITUDE": -0.68
        }
      },
      {
        "type": "Feature",
        "id": 301,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.316666880000007,
            -1.3999999776824477
          ]
        },
        "properties": {
          "FID": 301,
          "NOM1": "Byungu",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.32,
          "LATITUDE": -1.4
        }
      },
      {
        "type": "Feature",
        "id": 302,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.766666880000006,
            -0.983332951467366
          ]
        },
        "properties": {
          "FID": 302,
          "NOM1": "Burai",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.77,
          "LATITUDE": -0.98
        }
      },
      {
        "type": "Feature",
        "id": 303,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.016667079999998,
            -0.983332951467366
          ]
        },
        "properties": {
          "FID": 303,
          "NOM1": "Ihula",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 29.02,
          "LATITUDE": -0.98
        }
      },
      {
        "type": "Feature",
        "id": 304,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.13333292,
            -1.2333329208860853
          ]
        },
        "properties": {
          "FID": 304,
          "NOM1": "Ishunga",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.13,
          "LATITUDE": -1.23
        }
      },
      {
        "type": "Feature",
        "id": 305,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.13333292,
            -1.3500000112637338
          ]
        },
        "properties": {
          "FID": 305,
          "NOM1": "Isea",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.13,
          "LATITUDE": -1.35
        }
      },
      {
        "type": "Feature",
        "id": 306,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.000000080000003,
            -1.3666670847281945
          ]
        },
        "properties": {
          "FID": 306,
          "NOM1": "Ilunga",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28,
          "LATITUDE": -1.37
        }
      },
      {
        "type": "Feature",
        "id": 307,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.416666959999997,
            -1.3000000839126158
          ]
        },
        "properties": {
          "FID": 307,
          "NOM1": "Kalonge",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.42,
          "LATITUDE": -1.3
        }
      },
      {
        "type": "Feature",
        "id": 308,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.916667000000004,
            -1.0000000795701747
          ]
        },
        "properties": {
          "FID": 308,
          "NOM1": "Kalonge",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.92,
          "LATITUDE": -1
        }
      },
      {
        "type": "Feature",
        "id": 309,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.766666880000006,
            -0.5666669210444664
          ]
        },
        "properties": {
          "FID": 309,
          "NOM1": "Kaleke",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.77,
          "LATITUDE": -0.57
        }
      },
      {
        "type": "Feature",
        "id": 310,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.866666960000003,
            -0.63333301454188
          ]
        },
        "properties": {
          "FID": 310,
          "NOM1": "Kalehe",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.87,
          "LATITUDE": -0.63
        }
      },
      {
        "type": "Feature",
        "id": 311,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.616667120000002,
            -1.3333330021957985
          ]
        },
        "properties": {
          "FID": 311,
          "NOM1": "Kangati",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.62,
          "LATITUDE": -1.33
        }
      },
      {
        "type": "Feature",
        "id": 312,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.666667160000003,
            -0.9666670004875739
          ]
        },
        "properties": {
          "FID": 312,
          "NOM1": "Kananda",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.67,
          "LATITUDE": -0.97
        }
      },
      {
        "type": "Feature",
        "id": 313,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.816666840000003,
            -1.4666670139806697
          ]
        },
        "properties": {
          "FID": 313,
          "NOM1": "Karushi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.82,
          "LATITUDE": -1.47
        }
      },
      {
        "type": "Feature",
        "id": 314,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.316666880000007,
            -0.45000002738046396
          ]
        },
        "properties": {
          "FID": 314,
          "NOM1": "Kenia-Lutoloba",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.32,
          "LATITUDE": -0.45
        }
      },
      {
        "type": "Feature",
        "id": 315,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.966667040000004,
            -0.7999999234934624
          ]
        },
        "properties": {
          "FID": 315,
          "NOM1": "Kawa",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.97,
          "LATITUDE": -0.8
        }
      },
      {
        "type": "Feature",
        "id": 316,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.983332880000003,
            -0.9666670004875739
          ]
        },
        "properties": {
          "FID": 316,
          "NOM1": "Katobo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.98,
          "LATITUDE": -0.97
        }
      },
      {
        "type": "Feature",
        "id": 317,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.64999988,
            -0.41666708436214284
          ]
        },
        "properties": {
          "FID": 317,
          "NOM1": "Katendele",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.65,
          "LATITUDE": -0.42
        }
      },
      {
        "type": "Feature",
        "id": 318,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.583332920000004,
            -1.3000000839126158
          ]
        },
        "properties": {
          "FID": 318,
          "NOM1": "Kibati",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.58,
          "LATITUDE": -1.3
        }
      },
      {
        "type": "Feature",
        "id": 319,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.55000016,
            -1.1333329959744864
          ]
        },
        "properties": {
          "FID": 319,
          "NOM1": "Kimba",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.55,
          "LATITUDE": -1.13
        }
      },
      {
        "type": "Feature",
        "id": 320,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.78333308,
            -0.7666670087438974
          ]
        },
        "properties": {
          "FID": 320,
          "NOM1": "Kilambo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.78,
          "LATITUDE": -0.77
        }
      },
      {
        "type": "Feature",
        "id": 321,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.40000004,
            -1.1500000215849606
          ]
        },
        "properties": {
          "FID": 321,
          "NOM1": "Kinke",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.4,
          "LATITUDE": -1.15
        }
      },
      {
        "type": "Feature",
        "id": 322,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.55000016,
            -1.749999933274474
          ]
        },
        "properties": {
          "FID": 322,
          "NOM1": "Kiuli",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.55,
          "LATITUDE": -1.75
        }
      },
      {
        "type": "Feature",
        "id": 323,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.666667160000003,
            -0.983332951467366
          ]
        },
        "properties": {
          "FID": 323,
          "NOM1": "Kitshanga",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.67,
          "LATITUDE": -0.98
        }
      },
      {
        "type": "Feature",
        "id": 324,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.81666692,
            -0.8833329671804603
          ]
        },
        "properties": {
          "FID": 324,
          "NOM1": "Kisone",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.82,
          "LATITUDE": -0.88
        }
      },
      {
        "type": "Feature",
        "id": 325,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.216667160000004,
            -1.1833330547146284
          ]
        },
        "properties": {
          "FID": 325,
          "NOM1": "Kisi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.22,
          "LATITUDE": -1.18
        }
      },
      {
        "type": "Feature",
        "id": 326,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.53333288,
            -1.3166669598851382
          ]
        },
        "properties": {
          "FID": 326,
          "NOM1": "Kishanga",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.53,
          "LATITUDE": -1.32
        }
      },
      {
        "type": "Feature",
        "id": 327,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.066667039999995,
            -1.2333329208860853
          ]
        },
        "properties": {
          "FID": 327,
          "NOM1": "Kumbwa",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.07,
          "LATITUDE": -1.23
        }
      },
      {
        "type": "Feature",
        "id": 328,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.666667160000003,
            -0.9333330491849695
          ]
        },
        "properties": {
          "FID": 328,
          "NOM1": "Kongomani",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.67,
          "LATITUDE": -0.93
        }
      },
      {
        "type": "Feature",
        "id": 329,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.40000004,
            -0.45000002738046396
          ]
        },
        "properties": {
          "FID": 329,
          "NOM1": "Kongomani",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.4,
          "LATITUDE": -0.45
        }
      },
      {
        "type": "Feature",
        "id": 330,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.816666840000003,
            -1.3999999776824477
          ]
        },
        "properties": {
          "FID": 330,
          "NOM1": "Loba",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.82,
          "LATITUDE": -1.4
        }
      },
      {
        "type": "Feature",
        "id": 331,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.416666959999997,
            -1.2166669432727188
          ]
        },
        "properties": {
          "FID": 331,
          "NOM1": "Limangi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.42,
          "LATITUDE": -1.22
        }
      },
      {
        "type": "Feature",
        "id": 332,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.500000119999996,
            -1.7666670418530503
          ]
        },
        "properties": {
          "FID": 332,
          "NOM1": "Lufunge",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.5,
          "LATITUDE": -1.77
        }
      },
      {
        "type": "Feature",
        "id": 333,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.79999992,
            -1.5333329384978072
          ]
        },
        "properties": {
          "FID": 333,
          "NOM1": "Lukisa",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.8,
          "LATITUDE": -1.53
        }
      },
      {
        "type": "Feature",
        "id": 334,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.26666684,
            -1.2500000540697322
          ]
        },
        "properties": {
          "FID": 334,
          "NOM1": "Lubongo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.27,
          "LATITUDE": -1.25
        }
      },
      {
        "type": "Feature",
        "id": 335,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.95000012,
            -0.6499999914404839
          ]
        },
        "properties": {
          "FID": 335,
          "NOM1": "Lushoa",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.95,
          "LATITUDE": -0.65
        }
      },
      {
        "type": "Feature",
        "id": 336,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.64999988,
            -1.0999999159874754
          ]
        },
        "properties": {
          "FID": 336,
          "NOM1": "Lungoma",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.65,
          "LATITUDE": -1.1
        }
      },
      {
        "type": "Feature",
        "id": 337,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.73333304,
            -0.7499999113846127
          ]
        },
        "properties": {
          "FID": 337,
          "NOM1": "Mangwa",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.73,
          "LATITUDE": -0.75
        }
      },
      {
        "type": "Feature",
        "id": 338,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.216667160000004,
            -0.43333303376390925
          ]
        },
        "properties": {
          "FID": 338,
          "NOM1": "Mandere",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.22,
          "LATITUDE": -0.43
        }
      },
      {
        "type": "Feature",
        "id": 339,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.516667039999994,
            -0.41666708436214284
          ]
        },
        "properties": {
          "FID": 339,
          "NOM1": "Mambasa",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.52,
          "LATITUDE": -0.42
        }
      },
      {
        "type": "Feature",
        "id": 340,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.466666999999998,
            -0.41666708436214284
          ]
        },
        "properties": {
          "FID": 340,
          "NOM1": "Mambao",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.47,
          "LATITUDE": -0.42
        }
      },
      {
        "type": "Feature",
        "id": 341,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.233333000000002,
            -0.4666669824077908
          ]
        },
        "properties": {
          "FID": 341,
          "NOM1": "Makutano",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.23,
          "LATITUDE": -0.47
        }
      },
      {
        "type": "Feature",
        "id": 342,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.55000016,
            -1.7833329180162434
          ]
        },
        "properties": {
          "FID": 342,
          "NOM1": "Makungulano",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.55,
          "LATITUDE": -1.78
        }
      },
      {
        "type": "Feature",
        "id": 343,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.233333000000002,
            -1.4166670555755776
          ]
        },
        "properties": {
          "FID": 343,
          "NOM1": "Makombo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.23,
          "LATITUDE": -1.42
        }
      },
      {
        "type": "Feature",
        "id": 344,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.38333312,
            -1.7166670687210368
          ]
        },
        "properties": {
          "FID": 344,
          "NOM1": "Mayuwano",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.38,
          "LATITUDE": -1.72
        }
      },
      {
        "type": "Feature",
        "id": 345,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.26666684,
            -1.383332959891931
          ]
        },
        "properties": {
          "FID": 345,
          "NOM1": "Mataka",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.27,
          "LATITUDE": -1.38
        }
      },
      {
        "type": "Feature",
        "id": 346,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.900000080000005,
            -0.7000000413136602
          ]
        },
        "properties": {
          "FID": 346,
          "NOM1": "Mashango",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.9,
          "LATITUDE": -0.7
        }
      },
      {
        "type": "Feature",
        "id": 347,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.71666684,
            -0.7999999234934624
          ]
        },
        "properties": {
          "FID": 347,
          "NOM1": "Maruho",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.72,
          "LATITUDE": -0.8
        }
      },
      {
        "type": "Feature",
        "id": 348,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.566667080000006,
            -1.4166670555755776
          ]
        },
        "properties": {
          "FID": 348,
          "NOM1": "Mitwa II",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.57,
          "LATITUDE": -1.42
        }
      },
      {
        "type": "Feature",
        "id": 349,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.599999840000002,
            -1.383332959891931
          ]
        },
        "properties": {
          "FID": 349,
          "NOM1": "Mitwa",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.6,
          "LATITUDE": -1.38
        }
      },
      {
        "type": "Feature",
        "id": 350,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.500000119999996,
            -1.1500000215849606
          ]
        },
        "properties": {
          "FID": 350,
          "NOM1": "Misao",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.5,
          "LATITUDE": -1.15
        }
      },
      {
        "type": "Feature",
        "id": 351,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.616667120000002,
            -1.1833330547146284
          ]
        },
        "properties": {
          "FID": 351,
          "NOM1": "Maniema",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.62,
          "LATITUDE": -1.18
        }
      },
      {
        "type": "Feature",
        "id": 352,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.283333040000002,
            -1.6000000018706328
          ]
        },
        "properties": {
          "FID": 352,
          "NOM1": "Mole",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.28,
          "LATITUDE": -1.6
        }
      },
      {
        "type": "Feature",
        "id": 353,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.450000080000002,
            -1.1833330547146284
          ]
        },
        "properties": {
          "FID": 353,
          "NOM1": "Mohanga",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.45,
          "LATITUDE": -1.18
        }
      },
      {
        "type": "Feature",
        "id": 354,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.48333284,
            -1.5833330779734414
          ]
        },
        "properties": {
          "FID": 354,
          "NOM1": "Mianga",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.48,
          "LATITUDE": -1.58
        }
      },
      {
        "type": "Feature",
        "id": 355,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.40000004,
            -1.4166670555755776
          ]
        },
        "properties": {
          "FID": 355,
          "NOM1": "Muliri",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.4,
          "LATITUDE": -1.42
        }
      },
      {
        "type": "Feature",
        "id": 356,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.69999992,
            -0.6499999914404839
          ]
        },
        "properties": {
          "FID": 356,
          "NOM1": "Mukondoli",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.7,
          "LATITUDE": -0.65
        }
      },
      {
        "type": "Feature",
        "id": 357,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.666667160000003,
            -1.0333329958369353
          ]
        },
        "properties": {
          "FID": 357,
          "NOM1": "Mukaka",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.67,
          "LATITUDE": -1.03
        }
      },
      {
        "type": "Feature",
        "id": 358,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.74999996,
            -0.9000000391912666
          ]
        },
        "properties": {
          "FID": 358,
          "NOM1": "Muheli",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.75,
          "LATITUDE": -0.9
        }
      },
      {
        "type": "Feature",
        "id": 359,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.48333284,
            -1.449999944536759
          ]
        },
        "properties": {
          "FID": 359,
          "NOM1": "Mutumoja",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.48,
          "LATITUDE": -1.45
        }
      },
      {
        "type": "Feature",
        "id": 360,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.73333304,
            -0.5333329462349135
          ]
        },
        "properties": {
          "FID": 360,
          "NOM1": "Mutenda",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.73,
          "LATITUDE": -0.53
        }
      },
      {
        "type": "Feature",
        "id": 361,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.91666708,
            0.6333330145418672
          ]
        },
        "properties": {
          "FID": 361,
          "NOM1": "Baruti",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.92,
          "LATITUDE": 0.63
        }
      },
      {
        "type": "Feature",
        "id": 362,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.90000016,
            0.7499999113845744
          ]
        },
        "properties": {
          "FID": 362,
          "NOM1": "Molopia",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.9,
          "LATITUDE": 0.75
        }
      },
      {
        "type": "Feature",
        "id": 363,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.833332840000004,
            0.666666912598124
          ]
        },
        "properties": {
          "FID": 363,
          "NOM1": "Bovata",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.83,
          "LATITUDE": 0.67
        }
      },
      {
        "type": "Feature",
        "id": 364,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.883332880000005,
            0.6499999914404583
          ]
        },
        "properties": {
          "FID": 364,
          "NOM1": "Kamango",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.88,
          "LATITUDE": 0.65
        }
      },
      {
        "type": "Feature",
        "id": 365,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.949999840000004,
            0.5833330252623535
          ]
        },
        "properties": {
          "FID": 365,
          "NOM1": "Kikura",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.95,
          "LATITUDE": 0.58
        }
      },
      {
        "type": "Feature",
        "id": 366,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.816667000000002,
            0.550000047334969
          ]
        },
        "properties": {
          "FID": 366,
          "NOM1": "Kikingi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.82,
          "LATITUDE": 0.55
        }
      },
      {
        "type": "Feature",
        "id": 367,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.933332919999998,
            0.59999998058165
          ]
        },
        "properties": {
          "FID": 367,
          "NOM1": "Kisangeli",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.93,
          "LATITUDE": 0.6
        }
      },
      {
        "type": "Feature",
        "id": 368,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.86666704,
            0.666666912598124
          ]
        },
        "properties": {
          "FID": 368,
          "NOM1": "Kizamba",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.87,
          "LATITUDE": 0.67
        }
      },
      {
        "type": "Feature",
        "id": 369,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.833332840000004,
            0.5833330252623535
          ]
        },
        "properties": {
          "FID": 369,
          "NOM1": "Kiviriri",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.83,
          "LATITUDE": 0.58
        }
      },
      {
        "type": "Feature",
        "id": 370,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.85000012,
            0.666666912598124
          ]
        },
        "properties": {
          "FID": 370,
          "NOM1": "Maperanga",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.85,
          "LATITUDE": 0.67
        }
      },
      {
        "type": "Feature",
        "id": 371,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.16666684,
            -1.6333330762108733
          ]
        },
        "properties": {
          "FID": 371,
          "NOM1": "Ketshero",
          "TERRITOIRE": "Goma",
          "COLLECTIV": " ",
          "LONGITUDE": 29.17,
          "LATITUDE": -1.63
        }
      },
      {
        "type": "Feature",
        "id": 372,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.18333304,
            -1.6333330762108733
          ]
        },
        "properties": {
          "FID": 372,
          "NOM1": "Ndosho",
          "TERRITOIRE": "Goma",
          "COLLECTIV": " ",
          "LONGITUDE": 29.18,
          "LATITUDE": -1.63
        }
      },
      {
        "type": "Feature",
        "id": 373,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.15569188,
            -1.6205600694356448
          ]
        },
        "properties": {
          "FID": 373,
          "NOM1": "Nzulo",
          "TERRITOIRE": "Goma",
          "COLLECTIV": " ",
          "LONGITUDE": 29.16,
          "LATITUDE": -1.62
        }
      },
      {
        "type": "Feature",
        "id": 374,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.23388892001568,
            -1.693332919738974
          ]
        },
        "properties": {
          "FID": 374,
          "NOM1": "Goma",
          "TERRITOIRE": "Goma",
          "COLLECTIV": " ",
          "LONGITUDE": 29.23,
          "LATITUDE": -1.69
        }
      },
      {
        "type": "Feature",
        "id": 375,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.15602920001564,
            -1.6217671471229962
          ]
        },
        "properties": {
          "FID": 375,
          "NOM1": "Mugunga",
          "TERRITOIRE": "Goma",
          "COLLECTIV": " ",
          "LONGITUDE": 29.16,
          "LATITUDE": -1.62
        }
      },
      {
        "type": "Feature",
        "id": 376,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.214167040000003,
            -1.3838889975408746
          ]
        },
        "properties": {
          "FID": 376,
          "NOM1": "Kanzenze",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": " ",
          "LONGITUDE": 29.21,
          "LATITUDE": -1.38
        }
      },
      {
        "type": "Feature",
        "id": 377,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.168056080000003,
            -1.2874999437801664
          ]
        },
        "properties": {
          "FID": 377,
          "NOM1": "Kashari",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": " ",
          "LONGITUDE": 29.17,
          "LATITUDE": -1.29
        }
      },
      {
        "type": "Feature",
        "id": 378,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.288955561877465,
            0.1336983644478992
          ]
        },
        "properties": {
          "FID": 378,
          "NOM1": "Butembo",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.29,
          "LATITUDE": 0.13
        }
      },
      {
        "type": "Feature",
        "id": 379,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.216666880000002,
            0.1666669668206416
          ]
        },
        "properties": {
          "FID": 379,
          "NOM1": "Mongaha",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.22,
          "LATITUDE": 0.17
        }
      },
      {
        "type": "Feature",
        "id": 380,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.31666696,
            0.10000005527801668
          ]
        },
        "properties": {
          "FID": 380,
          "NOM1": "Katwa",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.32,
          "LATITUDE": 0.1
        }
      },
      {
        "type": "Feature",
        "id": 381,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.23333308,
            0.11666697983263526
          ]
        },
        "properties": {
          "FID": 381,
          "NOM1": "Malinde",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.23,
          "LATITUDE": 0.12
        }
      },
      {
        "type": "Feature",
        "id": 382,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.30000004,
            0.11666697983263526
          ]
        },
        "properties": {
          "FID": 382,
          "NOM1": "Vutetse",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.3,
          "LATITUDE": 0.12
        }
      },
      {
        "type": "Feature",
        "id": 383,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.24833284,
            0.14500004296326305
          ]
        },
        "properties": {
          "FID": 383,
          "NOM1": "Lubro",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.25,
          "LATITUDE": 0.15
        }
      },
      {
        "type": "Feature",
        "id": 384,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.47805604,
            0.514999965364435
          ]
        },
        "properties": {
          "FID": 384,
          "NOM1": "Beni",
          "TERRITOIRE": "Beni",
          "COLLECTIV": " ",
          "LONGITUDE": 29.48,
          "LATITUDE": 0.51
        }
      },
      {
        "type": "Feature",
        "id": 385,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.483332920000002,
            0.5333329462349007
          ]
        },
        "properties": {
          "FID": 385,
          "NOM1": "Boikene",
          "TERRITOIRE": "Beni",
          "COLLECTIV": " ",
          "LONGITUDE": 29.48,
          "LATITUDE": 0.53
        }
      },
      {
        "type": "Feature",
        "id": 386,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.45000016,
            0.3833329170500136
          ]
        },
        "properties": {
          "FID": 386,
          "NOM1": "Butongu",
          "TERRITOIRE": "Beni",
          "COLLECTIV": " ",
          "LONGITUDE": 29.45,
          "LATITUDE": 0.38
        }
      },
      {
        "type": "Feature",
        "id": 387,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.41666704,
            0.4500000273804256
          ]
        },
        "properties": {
          "FID": 387,
          "NOM1": "Kahongera",
          "TERRITOIRE": "Beni",
          "COLLECTIV": " ",
          "LONGITUDE": 29.42,
          "LATITUDE": 0.45
        }
      },
      {
        "type": "Feature",
        "id": 388,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.499999839999997,
            0.500000050070494
          ]
        },
        "properties": {
          "FID": 388,
          "NOM1": "Kitobi",
          "TERRITOIRE": "Beni",
          "COLLECTIV": " ",
          "LONGITUDE": 29.5,
          "LATITUDE": 0.5
        }
      },
      {
        "type": "Feature",
        "id": 389,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.41666704,
            0.4666669824077908
          ]
        },
        "properties": {
          "FID": 389,
          "NOM1": "Mabangwa",
          "TERRITOIRE": "Beni",
          "COLLECTIV": " ",
          "LONGITUDE": 29.42,
          "LATITUDE": 0.47
        }
      },
      {
        "type": "Feature",
        "id": 390,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.43333288,
            0.4500000273804256
          ]
        },
        "properties": {
          "FID": 390,
          "NOM1": "Mukulia",
          "TERRITOIRE": "Beni",
          "COLLECTIV": " ",
          "LONGITUDE": 29.43,
          "LATITUDE": 0.45
        }
      },
      {
        "type": "Feature",
        "id": 391,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.483332920000002,
            0.500000050070494
          ]
        },
        "properties": {
          "FID": 391,
          "NOM1": "Munyambelu",
          "TERRITOIRE": "Beni",
          "COLLECTIV": " ",
          "LONGITUDE": 29.48,
          "LATITUDE": 0.5
        }
      },
      {
        "type": "Feature",
        "id": 392,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.400000120000005,
            0.5166670609840603
          ]
        },
        "properties": {
          "FID": 392,
          "NOM1": "Pasisi",
          "TERRITOIRE": "Beni",
          "COLLECTIV": " ",
          "LONGITUDE": 29.4,
          "LATITUDE": 0.52
        }
      },
      {
        "type": "Feature",
        "id": 393,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.483332920000002,
            0.4833329962795517
          ]
        },
        "properties": {
          "FID": 393,
          "NOM1": "Paida",
          "TERRITOIRE": "Beni",
          "COLLECTIV": " ",
          "LONGITUDE": 29.48,
          "LATITUDE": 0.48
        }
      },
      {
        "type": "Feature",
        "id": 394,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.483332920000002,
            0.4500000273804256
          ]
        },
        "properties": {
          "FID": 394,
          "NOM1": "Supa",
          "TERRITOIRE": "Beni",
          "COLLECTIV": " ",
          "LONGITUDE": 29.48,
          "LATITUDE": 0.45
        }
      },
      {
        "type": "Feature",
        "id": 395,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.51979984,
            0.4804560247698245
          ]
        },
        "properties": {
          "FID": 395,
          "NOM1": "Nyaleke",
          "TERRITOIRE": "Beni",
          "COLLECTIV": " ",
          "LONGITUDE": 29.52,
          "LATITUDE": 0.48
        }
      },
      {
        "type": "Feature",
        "id": 396,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.554545185162524,
            -0.15224098507974554
          ]
        },
        "properties": {
          "FID": 396,
          "NOM1": "Kavinyonge",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": " ",
          "LONGITUDE": 29.55,
          "LATITUDE": -0.15
        }
      },
      {
        "type": "Feature",
        "id": 397,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.50944408,
            -0.16388903257665446
          ]
        },
        "properties": {
          "FID": 397,
          "NOM1": "Age",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": " ",
          "LONGITUDE": 29.51,
          "LATITUDE": -0.16
        }
      },
      {
        "type": "Feature",
        "id": 398,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.95000012,
            -1.383332959891931
          ]
        },
        "properties": {
          "FID": 398,
          "NOM1": "Mutanda",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 28.95,
          "LATITUDE": -1.38
        }
      },
      {
        "type": "Feature",
        "id": 399,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.033332920000003,
            -1.4666670139806697
          ]
        },
        "properties": {
          "FID": 399,
          "NOM1": "Nyamulongo",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 29.03,
          "LATITUDE": -1.47
        }
      },
      {
        "type": "Feature",
        "id": 400,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.016667079999998,
            -1.4666670139806697
          ]
        },
        "properties": {
          "FID": 400,
          "NOM1": "Rushengo",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 29.02,
          "LATITUDE": -1.47
        }
      },
      {
        "type": "Feature",
        "id": 401,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.95000012,
            -1.4166670555755776
          ]
        },
        "properties": {
          "FID": 401,
          "NOM1": "Tunda",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 28.95,
          "LATITUDE": -1.42
        }
      },
      {
        "type": "Feature",
        "id": 402,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.04999984,
            -1.566666919097176
          ]
        },
        "properties": {
          "FID": 402,
          "NOM1": "Masha",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 29.05,
          "LATITUDE": -1.57
        }
      },
      {
        "type": "Feature",
        "id": 403,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.935500040000004,
            -1.5420399262753122
          ]
        },
        "properties": {
          "FID": 403,
          "NOM1": "Matanda",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 28.94,
          "LATITUDE": -1.54
        }
      },
      {
        "type": "Feature",
        "id": 404,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.97849988,
            -1.3032299327909305
          ]
        },
        "properties": {
          "FID": 404,
          "NOM1": "Bitale",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 28.98,
          "LATITUDE": -1.3
        }
      },
      {
        "type": "Feature",
        "id": 405,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.00111112,
            -1.6827780166809232
          ]
        },
        "properties": {
          "FID": 405,
          "NOM1": "Lushebere",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 29,
          "LATITUDE": -1.68
        }
      },
      {
        "type": "Feature",
        "id": 406,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.98888912,
            -1.3752779667863917
          ]
        },
        "properties": {
          "FID": 406,
          "NOM1": "Nyakariba",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.99,
          "LATITUDE": -1.38
        }
      },
      {
        "type": "Feature",
        "id": 407,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.02722192,
            -1.396667016115945
          ]
        },
        "properties": {
          "FID": 407,
          "NOM1": "Loashi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 29.03,
          "LATITUDE": -1.4
        }
      },
      {
        "type": "Feature",
        "id": 408,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.025500040000004,
            -1.3298900342834923
          ]
        },
        "properties": {
          "FID": 408,
          "NOM1": "Burungu",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 29.03,
          "LATITUDE": -1.33
        }
      },
      {
        "type": "Feature",
        "id": 409,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.019099960000002,
            -1.4005999751194322
          ]
        },
        "properties": {
          "FID": 409,
          "NOM1": "Kirolirwe",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 29.02,
          "LATITUDE": -1.4
        }
      },
      {
        "type": "Feature",
        "id": 410,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.05362396,
            -1.5712809570265776
          ]
        },
        "properties": {
          "FID": 410,
          "NOM1": "Sake",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 29.05,
          "LATITUDE": -1.57
        }
      },
      {
        "type": "Feature",
        "id": 411,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.037099960000006,
            -1.318410076029225
          ]
        },
        "properties": {
          "FID": 411,
          "NOM1": "Kabalekasha",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 29.04,
          "LATITUDE": -1.32
        }
      },
      {
        "type": "Feature",
        "id": 412,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.891334160000003,
            -1.5148580140570431
          ]
        },
        "properties": {
          "FID": 412,
          "NOM1": "Bihambwe",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 28.89,
          "LATITUDE": -1.51
        }
      },
      {
        "type": "Feature",
        "id": 413,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.877898960000007,
            -1.4980089786666257
          ]
        },
        "properties": {
          "FID": 413,
          "NOM1": "Mema",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 28.88,
          "LATITUDE": -1.5
        }
      },
      {
        "type": "Feature",
        "id": 414,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.98181692,
            -1.5330549383991257
          ]
        },
        "properties": {
          "FID": 414,
          "NOM1": "Mushaki",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 28.98,
          "LATITUDE": -1.53
        }
      },
      {
        "type": "Feature",
        "id": 415,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.92236508,
            -1.527234944794183
          ]
        },
        "properties": {
          "FID": 415,
          "NOM1": "Niacajanga",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 28.92,
          "LATITUDE": -1.53
        }
      },
      {
        "type": "Feature",
        "id": 416,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.921611960000003,
            -1.5279860695311736
          ]
        },
        "properties": {
          "FID": 416,
          "NOM1": "Osso",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 28.92,
          "LATITUDE": -1.53
        }
      },
      {
        "type": "Feature",
        "id": 417,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.139059879999998,
            -1.6074900739414557
          ]
        },
        "properties": {
          "FID": 417,
          "NOM1": "Bulengo-Mugunga",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 29.14,
          "LATITUDE": -1.61
        }
      },
      {
        "type": "Feature",
        "id": 418,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.98578592001555,
            -1.6597999868842832
          ]
        },
        "properties": {
          "FID": 418,
          "NOM1": "Kabase",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 28.99,
          "LATITUDE": -1.66
        }
      },
      {
        "type": "Feature",
        "id": 419,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.03116608001558,
            -1.6131089609414329
          ]
        },
        "properties": {
          "FID": 419,
          "NOM1": "Kirotshe",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 29.03,
          "LATITUDE": -1.61
        }
      },
      {
        "type": "Feature",
        "id": 420,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.999569600015562,
            -1.381060699678199
          ]
        },
        "properties": {
          "FID": 420,
          "NOM1": "Nyamitaba",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 29,
          "LATITUDE": -1.38
        }
      },
      {
        "type": "Feature",
        "id": 421,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.02842288001558,
            -1.6384079896241464
          ]
        },
        "properties": {
          "FID": 421,
          "NOM1": "Nyamubingwa",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 29.03,
          "LATITUDE": -1.64
        }
      },
      {
        "type": "Feature",
        "id": 422,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.028219120015578,
            -1.649451002250787
          ]
        },
        "properties": {
          "FID": 422,
          "NOM1": "Buhanga-Bukobati",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 29.03,
          "LATITUDE": -1.65
        }
      },
      {
        "type": "Feature",
        "id": 423,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.029857120015574,
            -1.6299399446366292
          ]
        },
        "properties": {
          "FID": 423,
          "NOM1": "Kihindo",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 29.03,
          "LATITUDE": -1.63
        }
      },
      {
        "type": "Feature",
        "id": 424,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.86853896001549,
            -1.5435499121513154
          ]
        },
        "properties": {
          "FID": 424,
          "NOM1": "Rubaya",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 28.87,
          "LATITUDE": -1.54
        }
      },
      {
        "type": "Feature",
        "id": 425,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.964889000015546,
            -1.7089999649598246
          ]
        },
        "properties": {
          "FID": 425,
          "NOM1": "Bitonga",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 28.96,
          "LATITUDE": -1.71
        }
      },
      {
        "type": "Feature",
        "id": 426,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.008208160015567,
            -1.6413919656104912
          ]
        },
        "properties": {
          "FID": 426,
          "NOM1": "Kiluku",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 29.01,
          "LATITUDE": -1.64
        }
      },
      {
        "type": "Feature",
        "id": 427,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.015973000015567,
            -1.6224449119154905
          ]
        },
        "properties": {
          "FID": 427,
          "NOM1": "Shasha",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 29.02,
          "LATITUDE": -1.62
        }
      },
      {
        "type": "Feature",
        "id": 428,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.000000080000003,
            -1.7666670418530503
          ]
        },
        "properties": {
          "FID": 428,
          "NOM1": "Musheko",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 28,
          "LATITUDE": -1.77
        }
      },
      {
        "type": "Feature",
        "id": 429,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.10000016,
            -1.7333330348819802
          ]
        },
        "properties": {
          "FID": 429,
          "NOM1": "Nkuba",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 28.1,
          "LATITUDE": -1.73
        }
      },
      {
        "type": "Feature",
        "id": 430,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.13333292,
            -1.566666919097176
          ]
        },
        "properties": {
          "FID": 430,
          "NOM1": "Nyenzila",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 28.13,
          "LATITUDE": -1.57
        }
      },
      {
        "type": "Feature",
        "id": 431,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.16666712,
            -1.6499999444370659
          ]
        },
        "properties": {
          "FID": 431,
          "NOM1": "Tusisi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 28.17,
          "LATITUDE": -1.65
        }
      },
      {
        "type": "Feature",
        "id": 432,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.79999992,
            -1.6833330747301698
          ]
        },
        "properties": {
          "FID": 432,
          "NOM1": "Usumbuka",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 27.8,
          "LATITUDE": -1.68
        }
      },
      {
        "type": "Feature",
        "id": 433,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.91666692,
            -1.566666919097176
          ]
        },
        "properties": {
          "FID": 433,
          "NOM1": "Tulakwa",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 27.92,
          "LATITUDE": -1.57
        }
      },
      {
        "type": "Feature",
        "id": 434,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.352499840000004,
            -1.6808330603061583
          ]
        },
        "properties": {
          "FID": 434,
          "NOM1": "Mufuti",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 28.35,
          "LATITUDE": -1.68
        }
      },
      {
        "type": "Feature",
        "id": 435,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.4347222222,
            -1.833888888900004
          ]
        },
        "properties": {
          "FID": 435,
          "NOM1": "Irangi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 28.43,
          "LATITUDE": -1.83
        }
      },
      {
        "type": "Feature",
        "id": 436,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.69999992,
            -0.41666708436214284
          ]
        },
        "properties": {
          "FID": 436,
          "NOM1": "Ndiba",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 28.7,
          "LATITUDE": -0.42
        }
      },
      {
        "type": "Feature",
        "id": 437,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.00000016,
            -0.5666669210444664
          ]
        },
        "properties": {
          "FID": 437,
          "NOM1": "Niungu",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 29,
          "LATITUDE": -0.57
        }
      },
      {
        "type": "Feature",
        "id": 438,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.633332960000004,
            -0.11666697983264808
          ]
        },
        "properties": {
          "FID": 438,
          "NOM1": "Ngele",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 28.63,
          "LATITUDE": -0.12
        }
      },
      {
        "type": "Feature",
        "id": 439,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.156519160015648,
            -0.3684524053162198
          ]
        },
        "properties": {
          "FID": 439,
          "NOM1": "Alimbongo",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Yawende-Loolo",
          "LONGITUDE": 29.16,
          "LATITUDE": -0.37
        }
      },
      {
        "type": "Feature",
        "id": 440,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.500000119999996,
            -0.016666954567300954
          ]
        },
        "properties": {
          "FID": 440,
          "NOM1": "Munongo",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.5,
          "LATITUDE": -0.02
        }
      },
      {
        "type": "Feature",
        "id": 441,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.78333308,
            0.35000006009186707
          ]
        },
        "properties": {
          "FID": 441,
          "NOM1": "Ntoyo",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.78,
          "LATITUDE": 0.35
        }
      },
      {
        "type": "Feature",
        "id": 442,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.850000040000005,
            0.5333329462349007
          ]
        },
        "properties": {
          "FID": 442,
          "NOM1": "Nkei",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.85,
          "LATITUDE": 0.53
        }
      },
      {
        "type": "Feature",
        "id": 443,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.73333304,
            0.3333330451881135
          ]
        },
        "properties": {
          "FID": 443,
          "NOM1": "Ngoma",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.73,
          "LATITUDE": 0.33
        }
      },
      {
        "type": "Feature",
        "id": 444,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.616667120000002,
            0.2833329160771258
          ]
        },
        "properties": {
          "FID": 444,
          "NOM1": "Ombole",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.62,
          "LATITUDE": 0.28
        }
      },
      {
        "type": "Feature",
        "id": 445,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.74999996,
            0.26666705703605703
          ]
        },
        "properties": {
          "FID": 445,
          "NOM1": "Sabani",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.75,
          "LATITUDE": 0.27
        }
      },
      {
        "type": "Feature",
        "id": 446,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.666667160000003,
            0.26666705703605703
          ]
        },
        "properties": {
          "FID": 446,
          "NOM1": "Tembe",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.67,
          "LATITUDE": 0.27
        }
      },
      {
        "type": "Feature",
        "id": 447,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.866666960000003,
            0.40000001785696493
          ]
        },
        "properties": {
          "FID": 447,
          "NOM1": "Zacharia",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.87,
          "LATITUDE": 0.4
        }
      },
      {
        "type": "Feature",
        "id": 448,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.745399880000004,
            0.3400780027082075
          ]
        },
        "properties": {
          "FID": 448,
          "NOM1": "Manguredjpa",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bapere",
          "LONGITUDE": 28.75,
          "LATITUDE": 0.34
        }
      },
      {
        "type": "Feature",
        "id": 449,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.88333388,
            -1.2166669432727188
          ]
        },
        "properties": {
          "FID": 449,
          "NOM1": "Nabura",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.88,
          "LATITUDE": -1.22
        }
      },
      {
        "type": "Feature",
        "id": 450,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.00000016,
            -1.3166669598851382
          ]
        },
        "properties": {
          "FID": 450,
          "NOM1": "Mwamvula",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 29,
          "LATITUDE": -1.32
        }
      },
      {
        "type": "Feature",
        "id": 451,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.88333388,
            -1.0000000795701747
          ]
        },
        "properties": {
          "FID": 451,
          "NOM1": "Ngingwe",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.88,
          "LATITUDE": -1
        }
      },
      {
        "type": "Feature",
        "id": 452,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.866666960000003,
            -1.2833329162565434
          ]
        },
        "properties": {
          "FID": 452,
          "NOM1": "Shungo",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.87,
          "LATITUDE": -1.28
        }
      },
      {
        "type": "Feature",
        "id": 453,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.850000040000005,
            -1.1333329959744864
          ]
        },
        "properties": {
          "FID": 453,
          "NOM1": "Nyange",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.85,
          "LATITUDE": -1.13
        }
      },
      {
        "type": "Feature",
        "id": 454,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.810199880000003,
            -1.1321699963921557
          ]
        },
        "properties": {
          "FID": 454,
          "NOM1": "Bibwe",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.81,
          "LATITUDE": -1.13
        }
      },
      {
        "type": "Feature",
        "id": 455,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.03476284,
            -1.1620160835274442
          ]
        },
        "properties": {
          "FID": 455,
          "NOM1": "Muhongozi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 29.03,
          "LATITUDE": -1.16
        }
      },
      {
        "type": "Feature",
        "id": 456,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.989299880000004,
            -1.0557899687248011
          ]
        },
        "properties": {
          "FID": 456,
          "NOM1": "Kashuga",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.99,
          "LATITUDE": -1.06
        }
      },
      {
        "type": "Feature",
        "id": 457,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.005880040015565,
            -1.0794899879099207
          ]
        },
        "properties": {
          "FID": 457,
          "NOM1": "Mbuhi-Pilote",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 29.01,
          "LATITUDE": -1.08
        }
      },
      {
        "type": "Feature",
        "id": 458,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.988280000015557,
            -1.0652500682157795
          ]
        },
        "properties": {
          "FID": 458,
          "NOM1": "Rujagati-Misinga",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.99,
          "LATITUDE": -1.07
        }
      },
      {
        "type": "Feature",
        "id": 459,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.98612612001555,
            -1.2907451247537893
          ]
        },
        "properties": {
          "FID": 459,
          "NOM1": "Mokoto",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.99,
          "LATITUDE": -1.29
        }
      },
      {
        "type": "Feature",
        "id": 460,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.968603120015548,
            -1.0553830704442324
          ]
        },
        "properties": {
          "FID": 460,
          "NOM1": "Misinga",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.97,
          "LATITUDE": -1.06
        }
      },
      {
        "type": "Feature",
        "id": 461,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.97930232001555,
            -1.2518821430624953
          ]
        },
        "properties": {
          "FID": 461,
          "NOM1": "Kibarizo",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.98,
          "LATITUDE": -1.25
        }
      },
      {
        "type": "Feature",
        "id": 462,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.703403000015406,
            -1.0127530625107157
          ]
        },
        "properties": {
          "FID": 462,
          "NOM1": "Biriba",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.7,
          "LATITUDE": -1.01
        }
      },
      {
        "type": "Feature",
        "id": 463,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.383332839999998,
            -0.033333006535787794
          ]
        },
        "properties": {
          "FID": 463,
          "NOM1": "Talia",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.38,
          "LATITUDE": -0.03
        }
      },
      {
        "type": "Feature",
        "id": 464,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.400000120000005,
            0.049999956815604235
          ]
        },
        "properties": {
          "FID": 464,
          "NOM1": "Viakuno",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.4,
          "LATITUDE": 0.05
        }
      },
      {
        "type": "Feature",
        "id": 465,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.43333288,
            0.033333006535749374
          ]
        },
        "properties": {
          "FID": 465,
          "NOM1": "Vehamba",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.43,
          "LATITUDE": 0.03
        }
      },
      {
        "type": "Feature",
        "id": 466,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.400000120000005,
            -0.016666954567300954
          ]
        },
        "properties": {
          "FID": 466,
          "NOM1": "Vayana",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.4,
          "LATITUDE": -0.02
        }
      },
      {
        "type": "Feature",
        "id": 467,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.366667,
            0.1666669668206416
          ]
        },
        "properties": {
          "FID": 467,
          "NOM1": "Vutondi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.37,
          "LATITUDE": 0.17
        }
      },
      {
        "type": "Feature",
        "id": 468,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.400000120000005,
            0.1500000765661711
          ]
        },
        "properties": {
          "FID": 468,
          "NOM1": "Vuhovi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.4,
          "LATITUDE": 0.15
        }
      },
      {
        "type": "Feature",
        "id": 469,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.43333288,
            0.19999998209323908
          ]
        },
        "properties": {
          "FID": 469,
          "NOM1": "Vuhombwe",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.43,
          "LATITUDE": 0.2
        }
      },
      {
        "type": "Feature",
        "id": 470,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.41666704,
            -0.049999956815604235
          ]
        },
        "properties": {
          "FID": 470,
          "NOM1": "Mbua",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.42,
          "LATITUDE": -0.05
        }
      },
      {
        "type": "Feature",
        "id": 471,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.413900080000005,
            0.19113901222174495
          ]
        },
        "properties": {
          "FID": 471,
          "NOM1": "Balambo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.41,
          "LATITUDE": 0.19
        }
      },
      {
        "type": "Feature",
        "id": 472,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.417500080000003,
            0.12408593354656655
          ]
        },
        "properties": {
          "FID": 472,
          "NOM1": "Isale",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.42,
          "LATITUDE": 0.12
        }
      },
      {
        "type": "Feature",
        "id": 473,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.516667119999997,
            -0.08333294191452031
          ]
        },
        "properties": {
          "FID": 473,
          "NOM1": "Mwalika",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.52,
          "LATITUDE": -0.08
        }
      },
      {
        "type": "Feature",
        "id": 474,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.52511092,
            -0.07663797801658412
          ]
        },
        "properties": {
          "FID": 474,
          "NOM1": "Museya",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.53,
          "LATITUDE": -0.08
        }
      },
      {
        "type": "Feature",
        "id": 475,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.266666920000006,
            0.033333006535749374
          ]
        },
        "properties": {
          "FID": 475,
          "NOM1": "Musienene",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.27,
          "LATITUDE": 0.03
        }
      },
      {
        "type": "Feature",
        "id": 476,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.099999880000002,
            0.08333294191448189
          ]
        },
        "properties": {
          "FID": 476,
          "NOM1": "Ndeko",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.1,
          "LATITUDE": 0.08
        }
      },
      {
        "type": "Feature",
        "id": 477,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.099999880000002,
            0.21666700541785516
          ]
        },
        "properties": {
          "FID": 477,
          "NOM1": "Naombia",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.1,
          "LATITUDE": 0.22
        }
      },
      {
        "type": "Feature",
        "id": 478,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.400000120000005,
            -0.10000005527804229
          ]
        },
        "properties": {
          "FID": 478,
          "NOM1": "Ngitse",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.4,
          "LATITUDE": -0.1
        }
      },
      {
        "type": "Feature",
        "id": 479,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.333333880000005,
            0.049999956815604235
          ]
        },
        "properties": {
          "FID": 479,
          "NOM1": "Ngeleza",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.33,
          "LATITUDE": 0.05
        }
      },
      {
        "type": "Feature",
        "id": 480,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.35000008,
            0.033333006535749374
          ]
        },
        "properties": {
          "FID": 480,
          "NOM1": "Ngeleza",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.35,
          "LATITUDE": 0.03
        }
      },
      {
        "type": "Feature",
        "id": 481,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.16666684,
            0.1666669668206416
          ]
        },
        "properties": {
          "FID": 481,
          "NOM1": "Sindani",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.17,
          "LATITUDE": 0.17
        }
      },
      {
        "type": "Feature",
        "id": 482,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.466667080000004,
            -0.1666669668206416
          ]
        },
        "properties": {
          "FID": 482,
          "NOM1": "Wuhevi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.47,
          "LATITUDE": -0.17
        }
      },
      {
        "type": "Feature",
        "id": 483,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.133333,
            0.18333294161807234
          ]
        },
        "properties": {
          "FID": 483,
          "NOM1": "Wobo",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.13,
          "LATITUDE": 0.18
        }
      },
      {
        "type": "Feature",
        "id": 484,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.400000120000005,
            -0.19999998209327752
          ]
        },
        "properties": {
          "FID": 484,
          "NOM1": "Bulambo",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.4,
          "LATITUDE": -0.2
        }
      },
      {
        "type": "Feature",
        "id": 485,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.16666684,
            -0.049999956815604235
          ]
        },
        "properties": {
          "FID": 485,
          "NOM1": "Kyondo",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.17,
          "LATITUDE": -0.05
        }
      },
      {
        "type": "Feature",
        "id": 486,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.31666696,
            -0.11666697983264808
          ]
        },
        "properties": {
          "FID": 486,
          "NOM1": "Loutu",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.32,
          "LATITUDE": -0.12
        }
      },
      {
        "type": "Feature",
        "id": 487,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.35000008,
            -0.1500000765662095
          ]
        },
        "properties": {
          "FID": 487,
          "NOM1": "Lukanga",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.35,
          "LATITUDE": -0.15
        }
      },
      {
        "type": "Feature",
        "id": 488,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.115555840000003,
            -0.06944394560946632
          ]
        },
        "properties": {
          "FID": 488,
          "NOM1": "Mabami",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.12,
          "LATITUDE": -0.07
        }
      },
      {
        "type": "Feature",
        "id": 489,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.30222196,
            -0.05611096665448237
          ]
        },
        "properties": {
          "FID": 489,
          "NOM1": "Lukanga",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.3,
          "LATITUDE": -0.06
        }
      },
      {
        "type": "Feature",
        "id": 490,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.23859883501592,
            -0.1586686320254151
          ]
        },
        "properties": {
          "FID": 490,
          "NOM1": "Lubero",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.24,
          "LATITUDE": -0.16
        }
      },
      {
        "type": "Feature",
        "id": 491,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.900000080000005,
            -0.21666700541785516
          ]
        },
        "properties": {
          "FID": 491,
          "NOM1": "Musuku",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 28.9,
          "LATITUDE": -0.22
        }
      },
      {
        "type": "Feature",
        "id": 492,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.266666920000006,
            -0.5333329462349135
          ]
        },
        "properties": {
          "FID": 492,
          "NOM1": "Mushenge",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.27,
          "LATITUDE": -0.53
        }
      },
      {
        "type": "Feature",
        "id": 493,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.016667079999998,
            -0.41666708436214284
          ]
        },
        "properties": {
          "FID": 493,
          "NOM1": "Mupando",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.02,
          "LATITUDE": -0.42
        }
      },
      {
        "type": "Feature",
        "id": 494,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.933332840000002,
            -0.35000006009187984
          ]
        },
        "properties": {
          "FID": 494,
          "NOM1": "Tayna",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 28.93,
          "LATITUDE": -0.35
        }
      },
      {
        "type": "Feature",
        "id": 495,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.14999992,
            -0.11666697983264808
          ]
        },
        "properties": {
          "FID": 495,
          "NOM1": "Tungutwasa",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.15,
          "LATITUDE": -0.12
        }
      },
      {
        "type": "Feature",
        "id": 496,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.866666960000003,
            -0.1500000765662095
          ]
        },
        "properties": {
          "FID": 496,
          "NOM1": "Yama",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 28.87,
          "LATITUDE": -0.15
        }
      },
      {
        "type": "Feature",
        "id": 497,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.16666684,
            -0.2833329160771514
          ]
        },
        "properties": {
          "FID": 497,
          "NOM1": "Wimbi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.17,
          "LATITUDE": -0.28
        }
      },
      {
        "type": "Feature",
        "id": 498,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.18333304,
            -0.43333303376390925
          ]
        },
        "properties": {
          "FID": 498,
          "NOM1": "Matembe",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.18,
          "LATITUDE": -0.43
        }
      },
      {
        "type": "Feature",
        "id": 499,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.14999992,
            -0.19999998209327752
          ]
        },
        "properties": {
          "FID": 499,
          "NOM1": "Maitana Buliba",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.15,
          "LATITUDE": -0.2
        }
      },
      {
        "type": "Feature",
        "id": 500,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.983332880000003,
            -0.6833330557019955
          ]
        },
        "properties": {
          "FID": 500,
          "NOM1": "Kanune",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 28.98,
          "LATITUDE": -0.68
        }
      },
      {
        "type": "Feature",
        "id": 501,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.2878,
            -0.6143890406955306
          ]
        },
        "properties": {
          "FID": 501,
          "NOM1": "Kikovu",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.29,
          "LATITUDE": -0.61
        }
      },
      {
        "type": "Feature",
        "id": 502,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.962299880000003,
            -0.15873003655468232
          ]
        },
        "properties": {
          "FID": 502,
          "NOM1": "Kashugo",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 28.96,
          "LATITUDE": -0.16
        }
      },
      {
        "type": "Feature",
        "id": 503,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.12513904,
            -0.21944402982409578
          ]
        },
        "properties": {
          "FID": 503,
          "NOM1": "Kagheri",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.13,
          "LATITUDE": -0.22
        }
      },
      {
        "type": "Feature",
        "id": 504,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.14805592,
            -0.691027944015357
          ]
        },
        "properties": {
          "FID": 504,
          "NOM1": "Musange",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.15,
          "LATITUDE": -0.69
        }
      },
      {
        "type": "Feature",
        "id": 505,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.176666920000002,
            -0.5866669970918579
          ]
        },
        "properties": {
          "FID": 505,
          "NOM1": "Bulotwa",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.18,
          "LATITUDE": -0.59
        }
      },
      {
        "type": "Feature",
        "id": 506,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.176005600015657,
            -0.48960797269448253
          ]
        },
        "properties": {
          "FID": 506,
          "NOM1": "Kasegbe",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.18,
          "LATITUDE": -0.49
        }
      },
      {
        "type": "Feature",
        "id": 507,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.172670560015654,
            -0.6091681448559959
          ]
        },
        "properties": {
          "FID": 507,
          "NOM1": "Kayna",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.17,
          "LATITUDE": -0.61
        }
      },
      {
        "type": "Feature",
        "id": 508,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.056317120015596,
            -0.7121939125350278
          ]
        },
        "properties": {
          "FID": 508,
          "NOM1": "Miriki",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.06,
          "LATITUDE": -0.71
        }
      },
      {
        "type": "Feature",
        "id": 509,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.181816000015658,
            -0.5644606058918419
          ]
        },
        "properties": {
          "FID": 509,
          "NOM1": "Kirumba",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.18,
          "LATITUDE": -0.56
        }
      },
      {
        "type": "Feature",
        "id": 510,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.000300040015563,
            -0.25589999400353225
          ]
        },
        "properties": {
          "FID": 510,
          "NOM1": "Kasugho",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29,
          "LATITUDE": -0.26
        }
      },
      {
        "type": "Feature",
        "id": 511,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.115500040015622,
            -0.5247999580539779
          ]
        },
        "properties": {
          "FID": 511,
          "NOM1": "Bukomerwa",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.12,
          "LATITUDE": -0.52
        }
      },
      {
        "type": "Feature",
        "id": 512,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.148721920015642,
            -0.5201890468333448
          ]
        },
        "properties": {
          "FID": 512,
          "NOM1": "Bwasinge",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.15,
          "LATITUDE": -0.52
        }
      },
      {
        "type": "Feature",
        "id": 513,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.25,
            0.59999998058165
          ]
        },
        "properties": {
          "FID": 513,
          "NOM1": "Mununzi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.25,
          "LATITUDE": 0.6
        }
      },
      {
        "type": "Feature",
        "id": 514,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.199999960000007,
            0.5166670609840603
          ]
        },
        "properties": {
          "FID": 514,
          "NOM1": "Pandekali",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.2,
          "LATITUDE": 0.52
        }
      },
      {
        "type": "Feature",
        "id": 515,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.483332920000002,
            0.6166670646716303
          ]
        },
        "properties": {
          "FID": 515,
          "NOM1": "Sikwakira",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.48,
          "LATITUDE": 0.62
        }
      },
      {
        "type": "Feature",
        "id": 516,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.594599920000004,
            0.8276469680947715
          ]
        },
        "properties": {
          "FID": 516,
          "NOM1": "Linzo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.59,
          "LATITUDE": 0.83
        }
      },
      {
        "type": "Feature",
        "id": 517,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.580900120000003,
            0.7771300694157789
          ]
        },
        "properties": {
          "FID": 517,
          "NOM1": "Maymoya",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.58,
          "LATITUDE": 0.78
        }
      },
      {
        "type": "Feature",
        "id": 518,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.51520012,
            0.6981489979902301
          ]
        },
        "properties": {
          "FID": 518,
          "NOM1": "Oicha",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.52,
          "LATITUDE": 0.7
        }
      },
      {
        "type": "Feature",
        "id": 519,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.646600120000006,
            0.7817090243759751
          ]
        },
        "properties": {
          "FID": 519,
          "NOM1": "Parking",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.65,
          "LATITUDE": 0.78
        }
      },
      {
        "type": "Feature",
        "id": 520,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.6649,
            0.812935998316009
          ]
        },
        "properties": {
          "FID": 520,
          "NOM1": "Tchuchubo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.66,
          "LATITUDE": 0.81
        }
      },
      {
        "type": "Feature",
        "id": 521,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.47330008,
            0.5530299983402611
          ]
        },
        "properties": {
          "FID": 521,
          "NOM1": "Mavivi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.47,
          "LATITUDE": 0.55
        }
      },
      {
        "type": "Feature",
        "id": 522,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.35000008,
            -1.480000038511771
          ]
        },
        "properties": {
          "FID": 522,
          "NOM1": "Nyarusambo",
          "TERRITOIRE": "Nyiragongo",
          "COLLECTIV": "Bukumu",
          "LONGITUDE": 29.35,
          "LATITUDE": -1.48
        }
      },
      {
        "type": "Feature",
        "id": 523,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.18805588,
            -1.556666979018277
          ]
        },
        "properties": {
          "FID": 523,
          "NOM1": "Rutoke",
          "TERRITOIRE": "Nyiragongo",
          "COLLECTIV": "Bukumu",
          "LONGITUDE": 29.19,
          "LATITUDE": -1.56
        }
      },
      {
        "type": "Feature",
        "id": 524,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.34140004,
            -1.5044600107825545
          ]
        },
        "properties": {
          "FID": 524,
          "NOM1": "Kibumba",
          "TERRITOIRE": "Nyiragongo",
          "COLLECTIV": "Bukumu",
          "LONGITUDE": 29.34,
          "LATITUDE": -1.5
        }
      },
      {
        "type": "Feature",
        "id": 525,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.24425008,
            -1.6478330001123718
          ]
        },
        "properties": {
          "FID": 525,
          "NOM1": "Buzove",
          "TERRITOIRE": "Nyiragongo",
          "COLLECTIV": "Bukumu",
          "LONGITUDE": 29.24,
          "LATITUDE": -1.65
        }
      },
      {
        "type": "Feature",
        "id": 526,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.264667120000006,
            -1.588167058456001
          ]
        },
        "properties": {
          "FID": 526,
          "NOM1": "Kanyanza",
          "TERRITOIRE": "Nyiragongo",
          "COLLECTIV": "Bukumu",
          "LONGITUDE": 29.26,
          "LATITUDE": -1.59
        }
      },
      {
        "type": "Feature",
        "id": 527,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.347805880000003,
            -1.4769169155346615
          ]
        },
        "properties": {
          "FID": 527,
          "NOM1": "Kibumba",
          "TERRITOIRE": "Nyiragongo",
          "COLLECTIV": "Bukumu",
          "LONGITUDE": 29.35,
          "LATITUDE": -1.48
        }
      },
      {
        "type": "Feature",
        "id": 528,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.188510200015667,
            -1.5743603396583963
          ]
        },
        "properties": {
          "FID": 528,
          "NOM1": "Rusayo",
          "TERRITOIRE": "Nyiragongo",
          "COLLECTIV": "Bukumu",
          "LONGITUDE": 29.19,
          "LATITUDE": -1.57
        }
      },
      {
        "type": "Feature",
        "id": 529,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.280169800015713,
            -1.569696943295443
          ]
        },
        "properties": {
          "FID": 529,
          "NOM1": "Kibati",
          "TERRITOIRE": "Nyiragongo",
          "COLLECTIV": "Bukumu",
          "LONGITUDE": 29.28,
          "LATITUDE": -1.57
        }
      },
      {
        "type": "Feature",
        "id": 530,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.116667160000002,
            -1.1666669485678816
          ]
        },
        "properties": {
          "FID": 530,
          "NOM1": "Ngololo",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.12,
          "LATITUDE": -1.17
        }
      },
      {
        "type": "Feature",
        "id": 531,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.116667160000002,
            -1.2833329162565434
          ]
        },
        "properties": {
          "FID": 531,
          "NOM1": "Ngesho",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.12,
          "LATITUDE": -1.28
        }
      },
      {
        "type": "Feature",
        "id": 532,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.116667160000002,
            -1.2166669432727188
          ]
        },
        "properties": {
          "FID": 532,
          "NOM1": "Sisa",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.12,
          "LATITUDE": -1.22
        }
      },
      {
        "type": "Feature",
        "id": 533,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.133333,
            -0.983332951467366
          ]
        },
        "properties": {
          "FID": 533,
          "NOM1": "Shigiko",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.13,
          "LATITUDE": -0.98
        }
      },
      {
        "type": "Feature",
        "id": 534,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.116775160000003,
            -0.9655190755784553
          ]
        },
        "properties": {
          "FID": 534,
          "NOM1": "Mutanda",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.12,
          "LATITUDE": -0.97
        }
      },
      {
        "type": "Feature",
        "id": 535,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.10629988,
            -0.8191110800753142
          ]
        },
        "properties": {
          "FID": 535,
          "NOM1": "Birundule",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.11,
          "LATITUDE": -0.82
        }
      },
      {
        "type": "Feature",
        "id": 536,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.194174080000003,
            -0.9487899629311795
          ]
        },
        "properties": {
          "FID": 536,
          "NOM1": "Kibingu",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.19,
          "LATITUDE": -0.95
        }
      },
      {
        "type": "Feature",
        "id": 537,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.19240792,
            -0.9823419927111794
          ]
        },
        "properties": {
          "FID": 537,
          "NOM1": "Kirima",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.19,
          "LATITUDE": -0.98
        }
      },
      {
        "type": "Feature",
        "id": 538,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.176382160000003,
            -0.9842520073305
          ]
        },
        "properties": {
          "FID": 538,
          "NOM1": "Kasesero",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.18,
          "LATITUDE": -0.98
        }
      },
      {
        "type": "Feature",
        "id": 539,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.166234839999998,
            -0.9864130490463962
          ]
        },
        "properties": {
          "FID": 539,
          "NOM1": "Kashalira",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.17,
          "LATITUDE": -0.99
        }
      },
      {
        "type": "Feature",
        "id": 540,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.153467080000002,
            -0.9955199716897591
          ]
        },
        "properties": {
          "FID": 540,
          "NOM1": "Katoro",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwisha",
          "LONGITUDE": 29.15,
          "LATITUDE": -1
        }
      },
      {
        "type": "Feature",
        "id": 541,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.250762840000004,
            -1.1417049932271133
          ]
        },
        "properties": {
          "FID": 541,
          "NOM1": "Butale",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.25,
          "LATITUDE": -1.14
        }
      },
      {
        "type": "Feature",
        "id": 542,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.24281512,
            -1.160645329222389
          ]
        },
        "properties": {
          "FID": 542,
          "NOM1": "Kabizo",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.24,
          "LATITUDE": -1.16
        }
      },
      {
        "type": "Feature",
        "id": 543,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.11354704,
            -1.021331009341372
          ]
        },
        "properties": {
          "FID": 543,
          "NOM1": "Nyanzale",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.11,
          "LATITUDE": -1.02
        }
      },
      {
        "type": "Feature",
        "id": 544,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.12309712,
            -1.0418750261306835
          ]
        },
        "properties": {
          "FID": 544,
          "NOM1": "Singa",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.12,
          "LATITUDE": -1.04
        }
      },
      {
        "type": "Feature",
        "id": 545,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.242990080015694,
            -1.1809060071431008
          ]
        },
        "properties": {
          "FID": 545,
          "NOM1": "Bishongera",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.24,
          "LATITUDE": -1.18
        }
      },
      {
        "type": "Feature",
        "id": 546,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.08933416001561,
            -1.2566921400479032
          ]
        },
        "properties": {
          "FID": 546,
          "NOM1": "Kahe",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.09,
          "LATITUDE": -1.26
        }
      },
      {
        "type": "Feature",
        "id": 547,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.17308168001565,
            -0.7006160343426926
          ]
        },
        "properties": {
          "FID": 547,
          "NOM1": "Kanyabayonga",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.17,
          "LATITUDE": -0.7
        }
      },
      {
        "type": "Feature",
        "id": 548,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.100748320015615,
            -0.9006242915069755
          ]
        },
        "properties": {
          "FID": 548,
          "NOM1": "Kitotoma",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.1,
          "LATITUDE": -0.9
        }
      },
      {
        "type": "Feature",
        "id": 549,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.041265880015583,
            -1.1288188466746059
          ]
        },
        "properties": {
          "FID": 549,
          "NOM1": "Mweso",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 29.04,
          "LATITUDE": -1.13
        }
      },
      {
        "type": "Feature",
        "id": 550,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.0763471600156,
            -0.9824820136347812
          ]
        },
        "properties": {
          "FID": 550,
          "NOM1": "Kikuku",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.08,
          "LATITUDE": -0.98
        }
      },
      {
        "type": "Feature",
        "id": 551,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.059869960015593,
            -1.2496861622172333
          ]
        },
        "properties": {
          "FID": 551,
          "NOM1": "Kitchanga",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.06,
          "LATITUDE": -1.25
        }
      },
      {
        "type": "Feature",
        "id": 552,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.203041240015665,
            -0.9081174733432916
          ]
        },
        "properties": {
          "FID": 552,
          "NOM1": "Kibirizi",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.2,
          "LATITUDE": -0.91
        }
      },
      {
        "type": "Feature",
        "id": 553,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.286540000015712,
            -1.0807499568093477
          ]
        },
        "properties": {
          "FID": 553,
          "NOM1": "Kirumba",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.29,
          "LATITUDE": -1.08
        }
      },
      {
        "type": "Feature",
        "id": 554,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.125221840015627,
            -1.2641109130208852
          ]
        },
        "properties": {
          "FID": 554,
          "NOM1": "Bishusha",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.13,
          "LATITUDE": -1.26
        }
      },
      {
        "type": "Feature",
        "id": 555,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.118328207416216,
            -0.7983499815046248
          ]
        },
        "properties": {
          "FID": 555,
          "NOM1": "Bulindi",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.12,
          "LATITUDE": -0.8
        }
      },
      {
        "type": "Feature",
        "id": 556,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.03595984001558,
            -1.1137599783096168
          ]
        },
        "properties": {
          "FID": 556,
          "NOM1": "Bukama",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.04,
          "LATITUDE": -1.11
        }
      },
      {
        "type": "Feature",
        "id": 557,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.20411116001567,
            -1.2390830100710073
          ]
        },
        "properties": {
          "FID": 557,
          "NOM1": "Mulimbi",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.2,
          "LATITUDE": -1.24
        }
      },
      {
        "type": "Feature",
        "id": 558,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.249861040015695,
            -1.1527500092028
          ]
        },
        "properties": {
          "FID": 558,
          "NOM1": "Butare",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.25,
          "LATITUDE": -1.15
        }
      },
      {
        "type": "Feature",
        "id": 559,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.24297208001569,
            -1.132694012997535
          ]
        },
        "properties": {
          "FID": 559,
          "NOM1": "Bukonya",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.24,
          "LATITUDE": -1.13
        }
      },
      {
        "type": "Feature",
        "id": 560,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.283666840015716,
            -1.1010000274618388
          ]
        },
        "properties": {
          "FID": 560,
          "NOM1": "Kagando",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.28,
          "LATITUDE": -1.1
        }
      },
      {
        "type": "Feature",
        "id": 561,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.231805960015688,
            -1.1033810122000627
          ]
        },
        "properties": {
          "FID": 561,
          "NOM1": "Kigwene",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.23,
          "LATITUDE": -1.1
        }
      },
      {
        "type": "Feature",
        "id": 562,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.241010080015688,
            -1.125069994440804
          ]
        },
        "properties": {
          "FID": 562,
          "NOM1": "Ruza",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.24,
          "LATITUDE": -1.13
        }
      },
      {
        "type": "Feature",
        "id": 563,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.208556080015676,
            -1.2463329948025839
          ]
        },
        "properties": {
          "FID": 563,
          "NOM1": "Birega",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.21,
          "LATITUDE": -1.25
        }
      },
      {
        "type": "Feature",
        "id": 564,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.160555840015647,
            -1.2761670038922837
          ]
        },
        "properties": {
          "FID": 564,
          "NOM1": "Kitembe",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.16,
          "LATITUDE": -1.28
        }
      },
      {
        "type": "Feature",
        "id": 565,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.141638920015637,
            -1.2755559840998292
          ]
        },
        "properties": {
          "FID": 565,
          "NOM1": "Burindi",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.14,
          "LATITUDE": -1.28
        }
      },
      {
        "type": "Feature",
        "id": 566,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.10286116001562,
            -1.2590830803676594
          ]
        },
        "properties": {
          "FID": 566,
          "NOM1": "Budey",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.1,
          "LATITUDE": -1.26
        }
      },
      {
        "type": "Feature",
        "id": 567,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.092318920015607,
            -1.2480759792974037
          ]
        },
        "properties": {
          "FID": 567,
          "NOM1": "Kizimba",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.09,
          "LATITUDE": -1.25
        }
      },
      {
        "type": "Feature",
        "id": 568,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.096624880015614,
            -0.9820749257624102
          ]
        },
        "properties": {
          "FID": 568,
          "NOM1": "Katwe",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.1,
          "LATITUDE": -0.98
        }
      },
      {
        "type": "Feature",
        "id": 569,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.108243160015615,
            -0.9846145838092893
          ]
        },
        "properties": {
          "FID": 569,
          "NOM1": "Kabati",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.11,
          "LATITUDE": -0.98
        }
      },
      {
        "type": "Feature",
        "id": 570,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.171058480015652,
            -1.2811821896814266
          ]
        },
        "properties": {
          "FID": 570,
          "NOM1": "Rusekera",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.17,
          "LATITUDE": -1.28
        }
      },
      {
        "type": "Feature",
        "id": 571,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.20297788001567,
            -1.1030427766138782
          ]
        },
        "properties": {
          "FID": 571,
          "NOM1": "Mushababwe",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.2,
          "LATITUDE": -1.1
        }
      },
      {
        "type": "Feature",
        "id": 572,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.218844880015677,
            -1.0275325760103118
          ]
        },
        "properties": {
          "FID": 572,
          "NOM1": "Kisheshe",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.22,
          "LATITUDE": -1.03
        }
      },
      {
        "type": "Feature",
        "id": 573,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.227198680015686,
            -1.0826458558096852
          ]
        },
        "properties": {
          "FID": 573,
          "NOM1": "Bambu",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.23,
          "LATITUDE": -1.08
        }
      },
      {
        "type": "Feature",
        "id": 574,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.245471920015692,
            -1.1896670819302162
          ]
        },
        "properties": {
          "FID": 574,
          "NOM1": "Busenene",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.25,
          "LATITUDE": -1.19
        }
      },
      {
        "type": "Feature",
        "id": 575,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.69999992,
            -1.7166670687210368
          ]
        },
        "properties": {
          "FID": 575,
          "NOM1": "Niakabasha",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Katoyi",
          "LONGITUDE": 28.7,
          "LATITUDE": -1.72
        }
      },
      {
        "type": "Feature",
        "id": 576,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.80222192,
            -1.693054941793746
          ]
        },
        "properties": {
          "FID": 576,
          "NOM1": "Shabunda",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Katoyi",
          "LONGITUDE": 28.8,
          "LATITUDE": -1.69
        }
      },
      {
        "type": "Feature",
        "id": 577,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.78333308,
            -1.6833330747301698
          ]
        },
        "properties": {
          "FID": 577,
          "NOM1": "Remeka",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.78,
          "LATITUDE": -1.68
        }
      },
      {
        "type": "Feature",
        "id": 578,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.72379988,
            -1.564200089125438
          ]
        },
        "properties": {
          "FID": 578,
          "NOM1": "Katoyi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Katoyi",
          "LONGITUDE": 28.72,
          "LATITUDE": -1.56
        }
      },
      {
        "type": "Feature",
        "id": 579,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.583332920000004,
            -1.5000000533651863
          ]
        },
        "properties": {
          "FID": 579,
          "NOM1": "Ngoi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.58,
          "LATITUDE": -1.5
        }
      },
      {
        "type": "Feature",
        "id": 580,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.850000040000005,
            -1.5000000533651863
          ]
        },
        "properties": {
          "FID": 580,
          "NOM1": "Shekatiti",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.85,
          "LATITUDE": -1.5
        }
      },
      {
        "type": "Feature",
        "id": 581,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.86254784,
            -1.4067060662960718
          ]
        },
        "properties": {
          "FID": 581,
          "NOM1": "Lushebere",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.86,
          "LATITUDE": -1.41
        }
      },
      {
        "type": "Feature",
        "id": 582,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.84754304,
            -1.437736087413036
          ]
        },
        "properties": {
          "FID": 582,
          "NOM1": "Katale",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.85,
          "LATITUDE": -1.44
        }
      },
      {
        "type": "Feature",
        "id": 583,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.87361388,
            -1.4727320267996966
          ]
        },
        "properties": {
          "FID": 583,
          "NOM1": "Kisuma",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.87,
          "LATITUDE": -1.47
        }
      },
      {
        "type": "Feature",
        "id": 584,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.861941960000003,
            -1.4149299575835022
          ]
        },
        "properties": {
          "FID": 584,
          "NOM1": "Kitsule",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.86,
          "LATITUDE": -1.41
        }
      },
      {
        "type": "Feature",
        "id": 585,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.766666960000002,
            0.3833329170500136
          ]
        },
        "properties": {
          "FID": 585,
          "NOM1": "Murambi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.77,
          "LATITUDE": 0.38
        }
      },
      {
        "type": "Feature",
        "id": 586,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.700000000000003,
            0.13333299321553863
          ]
        },
        "properties": {
          "FID": 586,
          "NOM1": "Muramba",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.7,
          "LATITUDE": 0.13
        }
      },
      {
        "type": "Feature",
        "id": 587,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.766666960000002,
            0.4166670843621044
          ]
        },
        "properties": {
          "FID": 587,
          "NOM1": "Mwenda",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.77,
          "LATITUDE": 0.42
        }
      },
      {
        "type": "Feature",
        "id": 588,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.41666704,
            0.3333330451881135
          ]
        },
        "properties": {
          "FID": 588,
          "NOM1": "Pabuka",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.42,
          "LATITUDE": 0.33
        }
      },
      {
        "type": "Feature",
        "id": 589,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.71666692,
            0.35000006009186707
          ]
        },
        "properties": {
          "FID": 589,
          "NOM1": "Nzenga",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.72,
          "LATITUDE": 0.35
        }
      },
      {
        "type": "Feature",
        "id": 590,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.80000008,
            0.2499999135050967
          ]
        },
        "properties": {
          "FID": 590,
          "NOM1": "Nyangaleka",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.8,
          "LATITUDE": 0.25
        }
      },
      {
        "type": "Feature",
        "id": 591,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.71666692,
            0.2333329287679913
          ]
        },
        "properties": {
          "FID": 591,
          "NOM1": "Rugetsi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.72,
          "LATITUDE": 0.23
        }
      },
      {
        "type": "Feature",
        "id": 592,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.54999988,
            0.43333303376390925
          ]
        },
        "properties": {
          "FID": 592,
          "NOM1": "Vieux Beni",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.55,
          "LATITUDE": 0.43
        }
      },
      {
        "type": "Feature",
        "id": 593,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.633333040000004,
            0.40000001785696493
          ]
        },
        "properties": {
          "FID": 593,
          "NOM1": "Tumbula",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.63,
          "LATITUDE": 0.4
        }
      },
      {
        "type": "Feature",
        "id": 594,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.766666960000002,
            0.2333329287679913
          ]
        },
        "properties": {
          "FID": 594,
          "NOM1": "Malia-Bwana",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.77,
          "LATITUDE": 0.23
        }
      },
      {
        "type": "Feature",
        "id": 595,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.00000016,
            -0.7833329590541606
          ]
        },
        "properties": {
          "FID": 595,
          "NOM1": "Murungi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 29,
          "LATITUDE": -0.78
        }
      },
      {
        "type": "Feature",
        "id": 596,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.466666999999998,
            -1.7833329180162434
          ]
        },
        "properties": {
          "FID": 596,
          "NOM1": "Nyabitekere",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.47,
          "LATITUDE": -1.78
        }
      },
      {
        "type": "Feature",
        "id": 597,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.500000119999996,
            -1.4666670139806697
          ]
        },
        "properties": {
          "FID": 597,
          "NOM1": "Ntoto",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.5,
          "LATITUDE": -1.47
        }
      },
      {
        "type": "Feature",
        "id": 598,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.316666880000007,
            -1.2500000540697322
          ]
        },
        "properties": {
          "FID": 598,
          "NOM1": "Nsindo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.32,
          "LATITUDE": -1.25
        }
      },
      {
        "type": "Feature",
        "id": 599,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.233333000000002,
            -1.449999944536759
          ]
        },
        "properties": {
          "FID": 599,
          "NOM1": "Nkuru",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.23,
          "LATITUDE": -1.45
        }
      },
      {
        "type": "Feature",
        "id": 600,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.53333288,
            -0.950000065572063
          ]
        },
        "properties": {
          "FID": 600,
          "NOM1": "Nikila",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.53,
          "LATITUDE": -0.95
        }
      },
      {
        "type": "Feature",
        "id": 601,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.566667080000006,
            -1.6833330747301698
          ]
        },
        "properties": {
          "FID": 601,
          "NOM1": "Niamimba",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.57,
          "LATITUDE": -1.68
        }
      },
      {
        "type": "Feature",
        "id": 602,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.066667039999995,
            -1.3666670847281945
          ]
        },
        "properties": {
          "FID": 602,
          "NOM1": "Niamianda",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.07,
          "LATITUDE": -1.37
        }
      },
      {
        "type": "Feature",
        "id": 603,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.933332840000002,
            -0.8833329671804603
          ]
        },
        "properties": {
          "FID": 603,
          "NOM1": "Niamalere",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.93,
          "LATITUDE": -0.88
        }
      },
      {
        "type": "Feature",
        "id": 604,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.583332920000004,
            -0.40000001785696493
          ]
        },
        "properties": {
          "FID": 604,
          "NOM1": "Ngumba",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.58,
          "LATITUDE": -0.4
        }
      },
      {
        "type": "Feature",
        "id": 605,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.98333388,
            -0.9333330491849695
          ]
        },
        "properties": {
          "FID": 605,
          "NOM1": "Obokala",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.98,
          "LATITUDE": -0.93
        }
      },
      {
        "type": "Feature",
        "id": 606,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.516667039999994,
            -0.950000065572063
          ]
        },
        "properties": {
          "FID": 606,
          "NOM1": "Nzoka",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.52,
          "LATITUDE": -0.95
        }
      },
      {
        "type": "Feature",
        "id": 607,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.683333,
            -0.5000000500705067
          ]
        },
        "properties": {
          "FID": 607,
          "NOM1": "Sake",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.68,
          "LATITUDE": -0.5
        }
      },
      {
        "type": "Feature",
        "id": 608,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.81666692,
            -0.9666670004875739
          ]
        },
        "properties": {
          "FID": 608,
          "NOM1": "Peti",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.82,
          "LATITUDE": -0.97
        }
      },
      {
        "type": "Feature",
        "id": 609,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.18333296,
            -1.2166669432727188
          ]
        },
        "properties": {
          "FID": 609,
          "NOM1": "Usumbura",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.18,
          "LATITUDE": -1.22
        }
      },
      {
        "type": "Feature",
        "id": 610,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.69999992,
            -0.5833330252623535
          ]
        },
        "properties": {
          "FID": 610,
          "NOM1": "Tuberi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.7,
          "LATITUDE": -0.58
        }
      },
      {
        "type": "Feature",
        "id": 611,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.583332920000004,
            -1.3666670847281945
          ]
        },
        "properties": {
          "FID": 611,
          "NOM1": "Ngenge",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.58,
          "LATITUDE": -1.37
        }
      },
      {
        "type": "Feature",
        "id": 612,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.633332960000004,
            -1.0999999159874754
          ]
        },
        "properties": {
          "FID": 612,
          "NOM1": "Misoko",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.63,
          "LATITUDE": -1.1
        }
      },
      {
        "type": "Feature",
        "id": 613,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.405599840000004,
            -1.5437700770437297
          ]
        },
        "properties": {
          "FID": 613,
          "NOM1": "Kalenga",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.41,
          "LATITUDE": -1.54
        }
      },
      {
        "type": "Feature",
        "id": 614,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.38027816,
            -1.743056085998381
          ]
        },
        "properties": {
          "FID": 614,
          "NOM1": "Otobora",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.38,
          "LATITUDE": -1.74
        }
      },
      {
        "type": "Feature",
        "id": 615,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.618099920000006,
            -1.7376200686203267
          ]
        },
        "properties": {
          "FID": 615,
          "NOM1": "Kilambo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.62,
          "LATITUDE": -1.74
        }
      },
      {
        "type": "Feature",
        "id": 616,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.071785880015064,
            -1.4286766168907958
          ]
        },
        "properties": {
          "FID": 616,
          "NOM1": "Walikale",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.07,
          "LATITUDE": -1.43
        }
      },
      {
        "type": "Feature",
        "id": 617,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.7019817200154,
            -0.9839568282411268
          ]
        },
        "properties": {
          "FID": 617,
          "NOM1": "Pinga",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.7,
          "LATITUDE": -0.98
        }
      },
      {
        "type": "Feature",
        "id": 618,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.93830012001553,
            -1.0252400124499452
          ]
        },
        "properties": {
          "FID": 618,
          "NOM1": "Kalembe",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.94,
          "LATITUDE": -1.03
        }
      },
      {
        "type": "Feature",
        "id": 619,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.539891000015313,
            -1.262827062484199
          ]
        },
        "properties": {
          "FID": 619,
          "NOM1": "Mutero",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.54,
          "LATITUDE": -1.26
        }
      },
      {
        "type": "Feature",
        "id": 620,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.801022040015454,
            -0.9633189151075073
          ]
        },
        "properties": {
          "FID": 620,
          "NOM1": "Katobi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.8,
          "LATITUDE": -0.96
        }
      },
      {
        "type": "Feature",
        "id": 621,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.850321880015482,
            -0.9658030834114825
          ]
        },
        "properties": {
          "FID": 621,
          "NOM1": "Minjenji",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.85,
          "LATITUDE": -0.97
        }
      },
      {
        "type": "Feature",
        "id": 622,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.881438840015498,
            -0.9861189513924343
          ]
        },
        "properties": {
          "FID": 622,
          "NOM1": "Malemo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.88,
          "LATITUDE": -0.99
        }
      },
      {
        "type": "Feature",
        "id": 623,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.817517240015462,
            -0.9547208133284812
          ]
        },
        "properties": {
          "FID": 623,
          "NOM1": "Mera",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.82,
          "LATITUDE": -0.95
        }
      },
      {
        "type": "Feature",
        "id": 624,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.048038356013407,
            -1.38980881237199
          ]
        },
        "properties": {
          "FID": 624,
          "NOM1": "Kakumbi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.05,
          "LATITUDE": -1.39
        }
      },
      {
        "type": "Feature",
        "id": 625,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.043862072760408,
            -1.383116030331138
          ]
        },
        "properties": {
          "FID": 625,
          "NOM1": "Nyamitaba 1",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.04,
          "LATITUDE": -1.38
        }
      },
      {
        "type": "Feature",
        "id": 626,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.034647343694637,
            -1.3749109015018333
          ]
        },
        "properties": {
          "FID": 626,
          "NOM1": "Nyamitaba II",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.03,
          "LATITUDE": -1.37
        }
      },
      {
        "type": "Feature",
        "id": 627,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.01335672291701,
            -1.362730822733617
          ]
        },
        "properties": {
          "FID": 627,
          "NOM1": "Kirundu",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.01,
          "LATITUDE": -1.36
        }
      },
      {
        "type": "Feature",
        "id": 628,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.939704688330707,
            -1.3261137243769157
          ]
        },
        "properties": {
          "FID": 628,
          "NOM1": "Boboro",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.94,
          "LATITUDE": -1.33
        }
      },
      {
        "type": "Feature",
        "id": 629,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.966272974437494,
            -1.3301102996259946
          ]
        },
        "properties": {
          "FID": 629,
          "NOM1": "Mutoyo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.97,
          "LATITUDE": -1.33
        }
      },
      {
        "type": "Feature",
        "id": 630,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.954192053583736,
            -1.3285463203140648
          ]
        },
        "properties": {
          "FID": 630,
          "NOM1": "Rekesha",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.95,
          "LATITUDE": -1.33
        }
      },
      {
        "type": "Feature",
        "id": 631,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.856878157813842,
            -1.2951881059087018
          ]
        },
        "properties": {
          "FID": 631,
          "NOM1": "Mubi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.86,
          "LATITUDE": -1.3
        }
      },
      {
        "type": "Feature",
        "id": 632,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.81113677112653,
            -1.292319986282996
          ]
        },
        "properties": {
          "FID": 632,
          "NOM1": "Osokari",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.81,
          "LATITUDE": -1.29
        }
      },
      {
        "type": "Feature",
        "id": 633,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.733638784091045,
            -1.27969181097146
          ]
        },
        "properties": {
          "FID": 633,
          "NOM1": "Balambankoko",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.73,
          "LATITUDE": -1.28
        }
      },
      {
        "type": "Feature",
        "id": 634,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.772012058799323,
            -1.2782155901856873
          ]
        },
        "properties": {
          "FID": 634,
          "NOM1": "Ndjingala",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.77,
          "LATITUDE": -1.28
        }
      },
      {
        "type": "Feature",
        "id": 635,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.727375742225565,
            -1.2788242001746375
          ]
        },
        "properties": {
          "FID": 635,
          "NOM1": "Kanyama",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.73,
          "LATITUDE": -1.28
        }
      },
      {
        "type": "Feature",
        "id": 636,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.70269455779782,
            -1.278061279348369
          ]
        },
        "properties": {
          "FID": 636,
          "NOM1": "Olema",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.7,
          "LATITUDE": -1.28
        }
      },
      {
        "type": "Feature",
        "id": 637,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.655144943140275,
            -1.2592566472310676
          ]
        },
        "properties": {
          "FID": 637,
          "NOM1": "Mafombi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.66,
          "LATITUDE": -1.26
        }
      },
      {
        "type": "Feature",
        "id": 638,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.6238284765274,
            -1.219916603811498
          ]
        },
        "properties": {
          "FID": 638,
          "NOM1": "Tengeza",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.62,
          "LATITUDE": -1.22
        }
      },
      {
        "type": "Feature",
        "id": 639,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.645418415067123,
            -1.2519682471511615
          ]
        },
        "properties": {
          "FID": 639,
          "NOM1": "Obianda",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.65,
          "LATITUDE": -1.25
        }
      },
      {
        "type": "Feature",
        "id": 640,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.687161717762763,
            -1.2677168373737506
          ]
        },
        "properties": {
          "FID": 640,
          "NOM1": "Logu",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.69,
          "LATITUDE": -1.27
        }
      },
      {
        "type": "Feature",
        "id": 641,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.60195682222223,
            -1.2111692496663327
          ]
        },
        "properties": {
          "FID": 641,
          "NOM1": "Biruwe",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.6,
          "LATITUDE": -1.21
        }
      },
      {
        "type": "Feature",
        "id": 642,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.481042923714114,
            -1.1790769540963049
          ]
        },
        "properties": {
          "FID": 642,
          "NOM1": "Mabenga",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.48,
          "LATITUDE": -1.18
        }
      },
      {
        "type": "Feature",
        "id": 643,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.498694457412714,
            -1.1900989891229652
          ]
        },
        "properties": {
          "FID": 643,
          "NOM1": "Utufalu",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.5,
          "LATITUDE": -1.19
        }
      },
      {
        "type": "Feature",
        "id": 644,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.421031514522895,
            -1.1408308328590657
          ]
        },
        "properties": {
          "FID": 644,
          "NOM1": "Kibati Utfalo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.42,
          "LATITUDE": -1.14
        }
      },
      {
        "type": "Feature",
        "id": 645,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.344211623453628,
            -1.086122402344582
          ]
        },
        "properties": {
          "FID": 645,
          "NOM1": "Lukumbi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.34,
          "LATITUDE": -1.09
        }
      },
      {
        "type": "Feature",
        "id": 646,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.33634587788357,
            -1.0716632841052318
          ]
        },
        "properties": {
          "FID": 646,
          "NOM1": "Makote",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.34,
          "LATITUDE": -1.07
        }
      },
      {
        "type": "Feature",
        "id": 647,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.349759353702833,
            -1.0945419402568959
          ]
        },
        "properties": {
          "FID": 647,
          "NOM1": "Molisho",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.35,
          "LATITUDE": -1.09
        }
      },
      {
        "type": "Feature",
        "id": 648,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.385248080255188,
            -1.123147364109394
          ]
        },
        "properties": {
          "FID": 648,
          "NOM1": "Munyanya",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.39,
          "LATITUDE": -1.12
        }
      },
      {
        "type": "Feature",
        "id": 649,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.371884225302676,
            -1.1192393855767893
          ]
        },
        "properties": {
          "FID": 649,
          "NOM1": "Mundindi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.37,
          "LATITUDE": -1.12
        }
      },
      {
        "type": "Feature",
        "id": 650,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.308110012141693,
            -1.0339772416376116
          ]
        },
        "properties": {
          "FID": 650,
          "NOM1": "Botokolo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.31,
          "LATITUDE": -1.03
        }
      },
      {
        "type": "Feature",
        "id": 651,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.91666708,
            0.7499999113845744
          ]
        },
        "properties": {
          "FID": 651,
          "NOM1": "Soa",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.92,
          "LATITUDE": 0.75
        }
      },
      {
        "type": "Feature",
        "id": 652,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.933332919999998,
            0.7833329590541606
          ]
        },
        "properties": {
          "FID": 652,
          "NOM1": "Tingba",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.93,
          "LATITUDE": 0.78
        }
      },
      {
        "type": "Feature",
        "id": 653,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.85000012,
            0.7000000413136217
          ]
        },
        "properties": {
          "FID": 653,
          "NOM1": "Kitimba",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.85,
          "LATITUDE": 0.7
        }
      },
      {
        "type": "Feature",
        "id": 654,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.094749920015083,
            -1.540638940917693
          ]
        },
        "properties": {
          "FID": 654,
          "NOM1": "Busisi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.09,
          "LATITUDE": -1.54
        }
      },
      {
        "type": "Feature",
        "id": 655,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.081055520015074,
            -1.5499721594515437
          ]
        },
        "properties": {
          "FID": 655,
          "NOM1": "Katete",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.08,
          "LATITUDE": -1.55
        }
      },
      {
        "type": "Feature",
        "id": 656,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.05019452001505,
            -1.3936666619277496
          ]
        },
        "properties": {
          "FID": 656,
          "NOM1": "Kakuku",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.05,
          "LATITUDE": -1.39
        }
      },
      {
        "type": "Feature",
        "id": 657,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.222833320015692,
            0.2838889309272851
          ]
        },
        "properties": {
          "FID": 657,
          "NOM1": "Kivira",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.22,
          "LATITUDE": 0.28
        }
      },
      {
        "type": "Feature",
        "id": 658,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.30447232001573,
            0.3216389388165582
          ]
        },
        "properties": {
          "FID": 658,
          "NOM1": "Mabuku",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.3,
          "LATITUDE": 0.32
        }
      },
      {
        "type": "Feature",
        "id": 659,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.29923324001573,
            0.28665008044389517
          ]
        },
        "properties": {
          "FID": 659,
          "NOM1": "Vusumba",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.3,
          "LATITUDE": 0.29
        }
      },
      {
        "type": "Feature",
        "id": 660,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.30794992001573,
            0.30853324736192683
          ]
        },
        "properties": {
          "FID": 660,
          "NOM1": "Mundiba",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.31,
          "LATITUDE": 0.31
        }
      },
      {
        "type": "Feature",
        "id": 661,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.307133440015736,
            0.3161665811271323
          ]
        },
        "properties": {
          "FID": 661,
          "NOM1": "Vunyondo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.31,
          "LATITUDE": 0.32
        }
      },
      {
        "type": "Feature",
        "id": 662,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.247766560015698,
            0.3219500176517859
          ]
        },
        "properties": {
          "FID": 662,
          "NOM1": "Kyavisogho",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.25,
          "LATITUDE": 0.32
        }
      },
      {
        "type": "Feature",
        "id": 663,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.28218328001572,
            0.326716587680911
          ]
        },
        "properties": {
          "FID": 663,
          "NOM1": "Kaseghe",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.28,
          "LATITUDE": 0.33
        }
      },
      {
        "type": "Feature",
        "id": 664,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.621083320015902,
            0.7469999963938965
          ]
        },
        "properties": {
          "FID": 664,
          "NOM1": "Abialose",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.62,
          "LATITUDE": 0.75
        }
      },
      {
        "type": "Feature",
        "id": 665,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.64427776001591,
            0.7565277739816675
          ]
        },
        "properties": {
          "FID": 665,
          "NOM1": "Tungudu",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.64,
          "LATITUDE": 0.76
        }
      },
      {
        "type": "Feature",
        "id": 666,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.815633440016008,
            0.8988499297076133
          ]
        },
        "properties": {
          "FID": 666,
          "NOM1": "Mutido",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.82,
          "LATITUDE": 0.9
        }
      },
      {
        "type": "Feature",
        "id": 667,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.83835016001602,
            0.9089332885128957
          ]
        },
        "properties": {
          "FID": 667,
          "NOM1": "Muzirandulu",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.84,
          "LATITUDE": 0.91
        }
      },
      {
        "type": "Feature",
        "id": 668,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.838449880016015,
            0.911549950884642
          ]
        },
        "properties": {
          "FID": 668,
          "NOM1": "Kitsimba",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.84,
          "LATITUDE": 0.91
        }
      },
      {
        "type": "Feature",
        "id": 669,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.855983320016026,
            0.9267833206392555
          ]
        },
        "properties": {
          "FID": 669,
          "NOM1": "Ibanda",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.86,
          "LATITUDE": 0.93
        }
      },
      {
        "type": "Feature",
        "id": 670,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.86111656001603,
            0.9369500366480583
          ]
        },
        "properties": {
          "FID": 670,
          "NOM1": "Kisui",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.86,
          "LATITUDE": 0.94
        }
      },
      {
        "type": "Feature",
        "id": 671,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.800066680016,
            0.8995666306940375
          ]
        },
        "properties": {
          "FID": 671,
          "NOM1": "Kainama II & III",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.8,
          "LATITUDE": 0.9
        }
      },
      {
        "type": "Feature",
        "id": 672,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.77363872001598,
            0.9016943865910795
          ]
        },
        "properties": {
          "FID": 672,
          "NOM1": "Manzati",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.77,
          "LATITUDE": 0.9
        }
      },
      {
        "type": "Feature",
        "id": 673,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.765333160015985,
            0.9023334159386929
          ]
        },
        "properties": {
          "FID": 673,
          "NOM1": "Bango",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.77,
          "LATITUDE": 0.9
        }
      },
      {
        "type": "Feature",
        "id": 674,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.791722240015993,
            0.9041112000309011
          ]
        },
        "properties": {
          "FID": 674,
          "NOM1": "Kakuka III",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.79,
          "LATITUDE": 0.9
        }
      },
      {
        "type": "Feature",
        "id": 675,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.784555720015987,
            0.9071111748956747
          ]
        },
        "properties": {
          "FID": 675,
          "NOM1": "Kakuka II",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.78,
          "LATITUDE": 0.91
        }
      },
      {
        "type": "Feature",
        "id": 676,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.654805600015916,
            0.8619166616057421
          ]
        },
        "properties": {
          "FID": 676,
          "NOM1": "Bunake",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.65,
          "LATITUDE": 0.86
        }
      },
      {
        "type": "Feature",
        "id": 677,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.677055400015934,
            0.8791111323810883
          ]
        },
        "properties": {
          "FID": 677,
          "NOM1": "Kamungu",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.68,
          "LATITUDE": 0.88
        }
      },
      {
        "type": "Feature",
        "id": 678,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.60255556001589,
            0.7848055109679285
          ]
        },
        "properties": {
          "FID": 678,
          "NOM1": "Kokola I",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.6,
          "LATITUDE": 0.78
        }
      },
      {
        "type": "Feature",
        "id": 679,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.6233056000159,
            0.7966943974890259
          ]
        },
        "properties": {
          "FID": 679,
          "NOM1": "Atokaka",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.62,
          "LATITUDE": 0.8
        }
      },
      {
        "type": "Feature",
        "id": 680,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.565472320015875,
            0.8261389295212498
          ]
        },
        "properties": {
          "FID": 680,
          "NOM1": "Makembi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.57,
          "LATITUDE": 0.83
        }
      },
      {
        "type": "Feature",
        "id": 681,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.586694320015884,
            0.7804721952186316
          ]
        },
        "properties": {
          "FID": 681,
          "NOM1": "Kokola II",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.59,
          "LATITUDE": 0.78
        }
      },
      {
        "type": "Feature",
        "id": 682,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.588610960015888,
            0.7917777334611356
          ]
        },
        "properties": {
          "FID": 682,
          "NOM1": "Kokola III",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.59,
          "LATITUDE": 0.79
        }
      },
      {
        "type": "Feature",
        "id": 683,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.600055720015888,
            0.7927222481122095
          ]
        },
        "properties": {
          "FID": 683,
          "NOM1": "Opira I",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.6,
          "LATITUDE": 0.79
        }
      },
      {
        "type": "Feature",
        "id": 684,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.600555400015892,
            0.8019722085797536
          ]
        },
        "properties": {
          "FID": 684,
          "NOM1": "Opira III",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.6,
          "LATITUDE": 0.8
        }
      },
      {
        "type": "Feature",
        "id": 685,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.65627764001592,
            0.7062778318289472
          ]
        },
        "properties": {
          "FID": 685,
          "NOM1": "Kazaroho",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.66,
          "LATITUDE": 0.71
        }
      },
      {
        "type": "Feature",
        "id": 686,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.54333340001586,
            0.5033333475935066
          ]
        },
        "properties": {
          "FID": 686,
          "NOM1": "Vulengi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.54,
          "LATITUDE": 0.5
        }
      },
      {
        "type": "Feature",
        "id": 687,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.475000000015825,
            0.3124999574542707
          ]
        },
        "properties": {
          "FID": 687,
          "NOM1": "Lukono",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.48,
          "LATITUDE": 0.31
        }
      },
      {
        "type": "Feature",
        "id": 688,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.220000120015687,
            0.3505000196182134
          ]
        },
        "properties": {
          "FID": 688,
          "NOM1": "Kitolu Mbilinga",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.22,
          "LATITUDE": 0.35
        }
      },
      {
        "type": "Feature",
        "id": 689,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.18211120001567,
            0.35402785149392335
          ]
        },
        "properties": {
          "FID": 689,
          "NOM1": "Mashua",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.18,
          "LATITUDE": 0.35
        }
      },
      {
        "type": "Feature",
        "id": 690,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.275416720015713,
            0.3570277871552738
          ]
        },
        "properties": {
          "FID": 690,
          "NOM1": "Mandelya",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.28,
          "LATITUDE": 0.36
        }
      },
      {
        "type": "Feature",
        "id": 691,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.293166520015728,
            0.3586943775990022
          ]
        },
        "properties": {
          "FID": 691,
          "NOM1": "Kivinduliro",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.29,
          "LATITUDE": 0.36
        }
      },
      {
        "type": "Feature",
        "id": 692,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.29083336001572,
            0.35950000734533494
          ]
        },
        "properties": {
          "FID": 692,
          "NOM1": "Tutu",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.29,
          "LATITUDE": 0.36
        }
      },
      {
        "type": "Feature",
        "id": 693,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.2452220800157,
            0.369027700028656
          ]
        },
        "properties": {
          "FID": 693,
          "NOM1": "Vulambayiri",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.25,
          "LATITUDE": 0.37
        }
      },
      {
        "type": "Feature",
        "id": 694,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.28763872001572,
            0.37169438517606535
          ]
        },
        "properties": {
          "FID": 694,
          "NOM1": "Kasese",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.29,
          "LATITUDE": 0.37
        }
      },
      {
        "type": "Feature",
        "id": 695,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.204388720015675,
            0.4098055782983324
          ]
        },
        "properties": {
          "FID": 695,
          "NOM1": "Mambombo Masangi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.2,
          "LATITUDE": 0.41
        }
      },
      {
        "type": "Feature",
        "id": 696,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.17244448001566,
            0.4159443655340195
          ]
        },
        "properties": {
          "FID": 696,
          "NOM1": "Runzai",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.17,
          "LATITUDE": 0.42
        }
      },
      {
        "type": "Feature",
        "id": 697,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.225527920015686,
            0.41830554717343216
          ]
        },
        "properties": {
          "FID": 697,
          "NOM1": "Mambena",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.23,
          "LATITUDE": 0.42
        }
      },
      {
        "type": "Feature",
        "id": 698,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.30266656001573,
            0.4652777856371801
          ]
        },
        "properties": {
          "FID": 698,
          "NOM1": "Mapata",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.3,
          "LATITUDE": 0.47
        }
      },
      {
        "type": "Feature",
        "id": 699,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.207638800015676,
            0.2989166411339433
          ]
        },
        "properties": {
          "FID": 699,
          "NOM1": "Kanimba",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.21,
          "LATITUDE": 0.3
        }
      },
      {
        "type": "Feature",
        "id": 700,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.220388920015687,
            0.3003889519115265
          ]
        },
        "properties": {
          "FID": 700,
          "NOM1": "Ndiba",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.22,
          "LATITUDE": 0.3
        }
      },
      {
        "type": "Feature",
        "id": 701,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.219694480015686,
            0.30455554165703674
          ]
        },
        "properties": {
          "FID": 701,
          "NOM1": "Buma Malepe",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.22,
          "LATITUDE": 0.3
        }
      },
      {
        "type": "Feature",
        "id": 702,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.212638840015682,
            0.3084166377053707
          ]
        },
        "properties": {
          "FID": 702,
          "NOM1": "Ngundi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.21,
          "LATITUDE": 0.31
        }
      },
      {
        "type": "Feature",
        "id": 703,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.23052760001569,
            0.28250006525821436
          ]
        },
        "properties": {
          "FID": 703,
          "NOM1": "Makusa",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.23,
          "LATITUDE": 0.28
        }
      },
      {
        "type": "Feature",
        "id": 704,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.234833200015697,
            0.2913056437407537
          ]
        },
        "properties": {
          "FID": 704,
          "NOM1": "Vukembe",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.23,
          "LATITUDE": 0.29
        }
      },
      {
        "type": "Feature",
        "id": 705,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.239083360015698,
            0.3065278134132046
          ]
        },
        "properties": {
          "FID": 705,
          "NOM1": "Maghombi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.24,
          "LATITUDE": 0.31
        }
      },
      {
        "type": "Feature",
        "id": 706,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.209194360015683,
            0.28908338795432464
          ]
        },
        "properties": {
          "FID": 706,
          "NOM1": "Vukoka",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.21,
          "LATITUDE": 0.29
        }
      },
      {
        "type": "Feature",
        "id": 707,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.166883200015658,
            0.19093336643707176
          ]
        },
        "properties": {
          "FID": 707,
          "NOM1": "Karongo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.17,
          "LATITUDE": 0.19
        }
      },
      {
        "type": "Feature",
        "id": 708,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.175900120015662,
            0.19875006728051225
          ]
        },
        "properties": {
          "FID": 708,
          "NOM1": "Ngango",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.18,
          "LATITUDE": 0.2
        }
      },
      {
        "type": "Feature",
        "id": 709,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.18858328001567,
            0.20263336394461942
          ]
        },
        "properties": {
          "FID": 709,
          "NOM1": "Kitowa",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.19,
          "LATITUDE": 0.2
        }
      },
      {
        "type": "Feature",
        "id": 710,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.18153340001567,
            0.20400006930938017
          ]
        },
        "properties": {
          "FID": 710,
          "NOM1": "Misugho",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.18,
          "LATITUDE": 0.2
        }
      },
      {
        "type": "Feature",
        "id": 711,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.17448316001566,
            0.21140006577824258
          ]
        },
        "properties": {
          "FID": 711,
          "NOM1": "Migheri",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.17,
          "LATITUDE": 0.21
        }
      },
      {
        "type": "Feature",
        "id": 712,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.20972788001568,
            0.19899716652513044
          ]
        },
        "properties": {
          "FID": 712,
          "NOM1": "Kisesa",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.21,
          "LATITUDE": 0.2
        }
      },
      {
        "type": "Feature",
        "id": 713,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.050266600015593,
            0.051055045975664216
          ]
        },
        "properties": {
          "FID": 713,
          "NOM1": "Vuhinga",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.05,
          "LATITUDE": 0.05
        }
      },
      {
        "type": "Feature",
        "id": 714,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.17448316001566,
            -0.211400065778281
          ]
        },
        "properties": {
          "FID": 714,
          "NOM1": "Ngango",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.17,
          "LATITUDE": -0.21
        }
      },
      {
        "type": "Feature",
        "id": 715,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.18153340001567,
            -0.20400006930940578
          ]
        },
        "properties": {
          "FID": 715,
          "NOM1": "Migheri",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.18,
          "LATITUDE": -0.2
        }
      },
      {
        "type": "Feature",
        "id": 716,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.175900120015662,
            -0.19875006728051225
          ]
        },
        "properties": {
          "FID": 716,
          "NOM1": "Kitowa",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.18,
          "LATITUDE": -0.2
        }
      },
      {
        "type": "Feature",
        "id": 717,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.18858328001567,
            -0.19600007412259335
          ]
        },
        "properties": {
          "FID": 717,
          "NOM1": "Karongo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.19,
          "LATITUDE": -0.2
        }
      },
      {
        "type": "Feature",
        "id": 718,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.812333320016005,
            0.789611169933085
          ]
        },
        "properties": {
          "FID": 718,
          "NOM1": "Kambi Ya Yua",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.81,
          "LATITUDE": 0.79
        }
      },
      {
        "type": "Feature",
        "id": 719,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.764222200015976,
            0.7943333830748484
          ]
        },
        "properties": {
          "FID": 719,
          "NOM1": "Opira II",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.76,
          "LATITUDE": 0.79
        }
      },
      {
        "type": "Feature",
        "id": 720,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.89098324001605,
            0.638966595851051
          ]
        },
        "properties": {
          "FID": 720,
          "NOM1": "Kitindula II",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.89,
          "LATITUDE": 0.64
        }
      },
      {
        "type": "Feature",
        "id": 721,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.892183480016048,
            0.6415832470736691
          ]
        },
        "properties": {
          "FID": 721,
          "NOM1": "Kitindula I",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.89,
          "LATITUDE": 0.64
        }
      },
      {
        "type": "Feature",
        "id": 722,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.900783160016054,
            0.6459332757910051
          ]
        },
        "properties": {
          "FID": 722,
          "NOM1": "Bwisegha IV",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.9,
          "LATITUDE": 0.65
        }
      },
      {
        "type": "Feature",
        "id": 723,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.90481660001605,
            0.645983377603741
          ]
        },
        "properties": {
          "FID": 723,
          "NOM1": "Bwisegha I",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.9,
          "LATITUDE": 0.65
        }
      },
      {
        "type": "Feature",
        "id": 724,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.908333440016058,
            0.6463000282575541
          ]
        },
        "properties": {
          "FID": 724,
          "NOM1": "Kayenze",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.91,
          "LATITUDE": 0.65
        }
      },
      {
        "type": "Feature",
        "id": 725,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.900166840016055,
            0.6493333494703492
          ]
        },
        "properties": {
          "FID": 725,
          "NOM1": "Bwisegha II",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.9,
          "LATITUDE": 0.65
        }
      },
      {
        "type": "Feature",
        "id": 726,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.900000160016052,
            0.6333333749881295
          ]
        },
        "properties": {
          "FID": 726,
          "NOM1": "Bwisegha",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.9,
          "LATITUDE": 0.63
        }
      },
      {
        "type": "Feature",
        "id": 727,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.902055400016053,
            0.6213889150168442
          ]
        },
        "properties": {
          "FID": 727,
          "NOM1": "Mabhale",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.9,
          "LATITUDE": 0.62
        }
      },
      {
        "type": "Feature",
        "id": 728,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.911444560016058,
            0.6249166030153316
          ]
        },
        "properties": {
          "FID": 728,
          "NOM1": "Mbimba II",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.91,
          "LATITUDE": 0.62
        }
      },
      {
        "type": "Feature",
        "id": 729,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.88091656001604,
            0.6222222670925653
          ]
        },
        "properties": {
          "FID": 729,
          "NOM1": "Matolu III",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.88,
          "LATITUDE": 0.62
        }
      },
      {
        "type": "Feature",
        "id": 730,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.88088884001604,
            0.6166389498254081
          ]
        },
        "properties": {
          "FID": 730,
          "NOM1": "Matolu I",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.88,
          "LATITUDE": 0.62
        }
      },
      {
        "type": "Feature",
        "id": 731,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.888472240016043,
            0.6031666945176182
          ]
        },
        "properties": {
          "FID": 731,
          "NOM1": "Bambausu",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.89,
          "LATITUDE": 0.6
        }
      },
      {
        "type": "Feature",
        "id": 732,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.904722280016053,
            0.6033334015623357
          ]
        },
        "properties": {
          "FID": 732,
          "NOM1": "Kipanya",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.9,
          "LATITUDE": 0.6
        }
      },
      {
        "type": "Feature",
        "id": 733,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.90297232001605,
            0.6033889105014824
          ]
        },
        "properties": {
          "FID": 733,
          "NOM1": "Luanoli",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.9,
          "LATITUDE": 0.6
        }
      },
      {
        "type": "Feature",
        "id": 734,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.89550016001605,
            0.6101388292521105
          ]
        },
        "properties": {
          "FID": 734,
          "NOM1": "Kakindo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.9,
          "LATITUDE": 0.61
        }
      },
      {
        "type": "Feature",
        "id": 735,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.86783344001604,
            0.6098888591135821
          ]
        },
        "properties": {
          "FID": 735,
          "NOM1": "Kisuba",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.87,
          "LATITUDE": 0.61
        }
      },
      {
        "type": "Feature",
        "id": 736,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.870888760016033,
            0.6106667041490691
          ]
        },
        "properties": {
          "FID": 736,
          "NOM1": "Sangyo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.87,
          "LATITUDE": 0.61
        }
      },
      {
        "type": "Feature",
        "id": 737,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.86972236001603,
            0.6126943992784142
          ]
        },
        "properties": {
          "FID": 737,
          "NOM1": "Matolu",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.87,
          "LATITUDE": 0.61
        }
      },
      {
        "type": "Feature",
        "id": 738,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.86783344001604,
            0.6141388905349248
          ]
        },
        "properties": {
          "FID": 738,
          "NOM1": "Musu",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.87,
          "LATITUDE": 0.61
        }
      },
      {
        "type": "Feature",
        "id": 739,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.874027600016035,
            0.5967222467758557
          ]
        },
        "properties": {
          "FID": 739,
          "NOM1": "Mwaka",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.87,
          "LATITUDE": 0.6
        }
      },
      {
        "type": "Feature",
        "id": 740,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.877222240016042,
            0.5993055776933411
          ]
        },
        "properties": {
          "FID": 740,
          "NOM1": "Kiule",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.88,
          "LATITUDE": 0.6
        }
      },
      {
        "type": "Feature",
        "id": 741,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.85052788001602,
            0.5722778639145285
          ]
        },
        "properties": {
          "FID": 741,
          "NOM1": "Ngumwa",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.85,
          "LATITUDE": 0.57
        }
      },
      {
        "type": "Feature",
        "id": 742,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.85500016001603,
            0.5741943745908397
          ]
        },
        "properties": {
          "FID": 742,
          "NOM1": "Ngasa",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.86,
          "LATITUDE": 0.57
        }
      },
      {
        "type": "Feature",
        "id": 743,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.857583160016027,
            0.5756332890812194
          ]
        },
        "properties": {
          "FID": 743,
          "NOM1": "Ndama II",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.86,
          "LATITUDE": 0.58
        }
      },
      {
        "type": "Feature",
        "id": 744,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.857166640016025,
            0.5805555849609744
          ]
        },
        "properties": {
          "FID": 744,
          "NOM1": "Bunditombi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.86,
          "LATITUDE": 0.58
        }
      },
      {
        "type": "Feature",
        "id": 745,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.856055680016024,
            0.5912499209710779
          ]
        },
        "properties": {
          "FID": 745,
          "NOM1": "Kalonge",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.86,
          "LATITUDE": 0.59
        }
      },
      {
        "type": "Feature",
        "id": 746,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.947166640016075,
            0.5823055653530214
          ]
        },
        "properties": {
          "FID": 746,
          "NOM1": "Katswamba",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.95,
          "LATITUDE": 0.58
        }
      },
      {
        "type": "Feature",
        "id": 747,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.944805400016072,
            0.5854443547562113
          ]
        },
        "properties": {
          "FID": 747,
          "NOM1": "Kasangali",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.94,
          "LATITUDE": 0.59
        }
      },
      {
        "type": "Feature",
        "id": 748,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.953110960016076,
            0.5917777977178683
          ]
        },
        "properties": {
          "FID": 748,
          "NOM1": "Vutwandara",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.95,
          "LATITUDE": 0.59
        }
      },
      {
        "type": "Feature",
        "id": 749,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.943666720016076,
            0.5918610613038708
          ]
        },
        "properties": {
          "FID": 749,
          "NOM1": "Musuku",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.94,
          "LATITUDE": 0.59
        }
      },
      {
        "type": "Feature",
        "id": 750,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.939433480016074,
            0.601883320435929
          ]
        },
        "properties": {
          "FID": 750,
          "NOM1": "Sungu I",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.94,
          "LATITUDE": 0.6
        }
      },
      {
        "type": "Feature",
        "id": 751,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.93000004001606,
            0.6049999310532025
          ]
        },
        "properties": {
          "FID": 751,
          "NOM1": "Musololo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.93,
          "LATITUDE": 0.6
        }
      },
      {
        "type": "Feature",
        "id": 752,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.935816560016068,
            0.61084999152844
          ]
        },
        "properties": {
          "FID": 752,
          "NOM1": "Nsungu IV",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.94,
          "LATITUDE": 0.61
        }
      },
      {
        "type": "Feature",
        "id": 753,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.950683480016078,
            0.6200666171268142
          ]
        },
        "properties": {
          "FID": 753,
          "NOM1": "Nsungu III",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.95,
          "LATITUDE": 0.62
        }
      },
      {
        "type": "Feature",
        "id": 754,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.681111160015934,
            0.2752778169004276
          ]
        },
        "properties": {
          "FID": 754,
          "NOM1": "Vuteke",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.68,
          "LATITUDE": 0.28
        }
      },
      {
        "type": "Feature",
        "id": 755,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.69722224001594,
            0.28444440505495777
          ]
        },
        "properties": {
          "FID": 755,
          "NOM1": "Kalivuli",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.7,
          "LATITUDE": 0.28
        }
      },
      {
        "type": "Feature",
        "id": 756,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.73027780001596,
            0.19277769002586495
          ]
        },
        "properties": {
          "FID": 756,
          "NOM1": "Kihondo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.73,
          "LATITUDE": 0.19
        }
      },
      {
        "type": "Feature",
        "id": 757,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.624722200015903,
            0.11583339952707619
          ]
        },
        "properties": {
          "FID": 757,
          "NOM1": "Kitongote",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.62,
          "LATITUDE": 0.12
        }
      },
      {
        "type": "Feature",
        "id": 758,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.65583340001592,
            0.15416671027500484
          ]
        },
        "properties": {
          "FID": 758,
          "NOM1": "Kivandya",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.66,
          "LATITUDE": 0.15
        }
      },
      {
        "type": "Feature",
        "id": 759,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.611666800015893,
            0.1649999900417926
          ]
        },
        "properties": {
          "FID": 759,
          "NOM1": "Kalengehya",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.61,
          "LATITUDE": 0.16
        }
      },
      {
        "type": "Feature",
        "id": 760,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.647222200015914,
            0.17555552462865603
          ]
        },
        "properties": {
          "FID": 760,
          "NOM1": "Mukoku",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.65,
          "LATITUDE": 0.18
        }
      },
      {
        "type": "Feature",
        "id": 761,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.630555640015903,
            0.17861119632079508
          ]
        },
        "properties": {
          "FID": 761,
          "NOM1": "Kasaka",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.63,
          "LATITUDE": 0.18
        }
      },
      {
        "type": "Feature",
        "id": 762,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.538055440015853,
            0.06416669902813267
          ]
        },
        "properties": {
          "FID": 762,
          "NOM1": "Magherya",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.54,
          "LATITUDE": 0.06
        }
      },
      {
        "type": "Feature",
        "id": 763,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.55250008001586,
            -0.08250008168982066
          ]
        },
        "properties": {
          "FID": 763,
          "NOM1": "Musalala",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.55,
          "LATITUDE": -0.08
        }
      },
      {
        "type": "Feature",
        "id": 764,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.54777760001586,
            -0.07416661218710538
          ]
        },
        "properties": {
          "FID": 764,
          "NOM1": "Ndalihya",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.55,
          "LATITUDE": -0.07
        }
      },
      {
        "type": "Feature",
        "id": 765,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.517777720015843,
            -0.0016666233867379673
          ]
        },
        "properties": {
          "FID": 765,
          "NOM1": "Kyangendi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.52,
          "LATITUDE": 0
        }
      },
      {
        "type": "Feature",
        "id": 766,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.51083332001584,
            -0.0013888828613342124
          ]
        },
        "properties": {
          "FID": 766,
          "NOM1": "Kivuwe",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.51,
          "LATITUDE": 0
        }
      },
      {
        "type": "Feature",
        "id": 767,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.504999880015834,
            -0.051111098713287735
          ]
        },
        "properties": {
          "FID": 767,
          "NOM1": "Kyasenda",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.5,
          "LATITUDE": -0.05
        }
      },
      {
        "type": "Feature",
        "id": 768,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.526111000015852,
            -0.0366666131468762
          ]
        },
        "properties": {
          "FID": 768,
          "NOM1": "Karuruma",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.53,
          "LATITUDE": -0.04
        }
      },
      {
        "type": "Feature",
        "id": 769,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.4360832800158,
            0.082849915428445
          ]
        },
        "properties": {
          "FID": 769,
          "NOM1": "Kisunga",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.44,
          "LATITUDE": 0.08
        }
      },
      {
        "type": "Feature",
        "id": 770,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.4305500800158,
            0.09041666881314718
          ]
        },
        "properties": {
          "FID": 770,
          "NOM1": "Kinihya",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.43,
          "LATITUDE": 0.09
        }
      },
      {
        "type": "Feature",
        "id": 771,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.434722120015802,
            0.10888881852263077
          ]
        },
        "properties": {
          "FID": 771,
          "NOM1": "Tako",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.43,
          "LATITUDE": 0.11
        }
      },
      {
        "type": "Feature",
        "id": 772,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.471391720015824,
            0.15252496513267047
          ]
        },
        "properties": {
          "FID": 772,
          "NOM1": "Makungwe",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.47,
          "LATITUDE": 0.15
        }
      },
      {
        "type": "Feature",
        "id": 773,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.49694452001583,
            0.18999994000789952
          ]
        },
        "properties": {
          "FID": 773,
          "NOM1": "Kitamyaka",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.5,
          "LATITUDE": 0.19
        }
      },
      {
        "type": "Feature",
        "id": 774,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.469166560015818,
            0.19249995109121365
          ]
        },
        "properties": {
          "FID": 774,
          "NOM1": "Kivombo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.47,
          "LATITUDE": 0.19
        }
      },
      {
        "type": "Feature",
        "id": 775,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.518611120015844,
            0.19305560918885886
          ]
        },
        "properties": {
          "FID": 775,
          "NOM1": "Vwikya",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.52,
          "LATITUDE": 0.19
        }
      },
      {
        "type": "Feature",
        "id": 776,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.11872240001563,
            0.4022500026792888
          ]
        },
        "properties": {
          "FID": 776,
          "NOM1": "Kenge Kitara",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.12,
          "LATITUDE": 0.4
        }
      },
      {
        "type": "Feature",
        "id": 777,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.157361200015654,
            0.41663896861883937
          ]
        },
        "properties": {
          "FID": 777,
          "NOM1": "Ngazi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.16,
          "LATITUDE": 0.42
        }
      },
      {
        "type": "Feature",
        "id": 778,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.120249880015635,
            0.4808889312930131
          ]
        },
        "properties": {
          "FID": 778,
          "NOM1": "Kipabashi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.12,
          "LATITUDE": 0.48
        }
      },
      {
        "type": "Feature",
        "id": 779,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.202579360015676,
            -1.002486743108626
          ]
        },
        "properties": {
          "FID": 779,
          "NOM1": "Kishishi",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.2,
          "LATITUDE": -1
        }
      },
      {
        "type": "Feature",
        "id": 780,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.023860960015583,
            -1.5349443654404593
          ]
        },
        "properties": {
          "FID": 780,
          "NOM1": "Murambi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 29.02,
          "LATITUDE": -1.53
        }
      },
      {
        "type": "Feature",
        "id": 781,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.030111280015582,
            -1.5003611167567974
          ]
        },
        "properties": {
          "FID": 781,
          "NOM1": "Katembe",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 29.03,
          "LATITUDE": -1.5
        }
      },
      {
        "type": "Feature",
        "id": 782,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.133583480015098,
            -1.2447222692311333
          ]
        },
        "properties": {
          "FID": 782,
          "NOM1": "Busao",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.13,
          "LATITUDE": -1.24
        }
      },
      {
        "type": "Feature",
        "id": 783,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.12383324001509,
            -1.2421943704720342
          ]
        },
        "properties": {
          "FID": 783,
          "NOM1": "BanaKabutwa",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.12,
          "LATITUDE": -1.24
        }
      },
      {
        "type": "Feature",
        "id": 784,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.06455564001506,
            -1.2306943733488314
          ]
        },
        "properties": {
          "FID": 784,
          "NOM1": "Tutero",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.06,
          "LATITUDE": -1.23
        }
      },
      {
        "type": "Feature",
        "id": 785,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.070027640015066,
            -1.2684999651928235
          ]
        },
        "properties": {
          "FID": 785,
          "NOM1": "Mutakato III",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.07,
          "LATITUDE": -1.27
        }
      },
      {
        "type": "Feature",
        "id": 786,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.070888760015066,
            -1.2678889435605871
          ]
        },
        "properties": {
          "FID": 786,
          "NOM1": "Mutakato I",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.07,
          "LATITUDE": -1.27
        }
      },
      {
        "type": "Feature",
        "id": 787,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.065694320015066,
            -1.2538889223199692
          ]
        },
        "properties": {
          "FID": 787,
          "NOM1": "Lekesa",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.07,
          "LATITUDE": -1.25
        }
      },
      {
        "type": "Feature",
        "id": 788,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.139083200015108,
            -1.5249722001872148
          ]
        },
        "properties": {
          "FID": 788,
          "NOM1": "Karumya",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.14,
          "LATITUDE": -1.52
        }
      },
      {
        "type": "Feature",
        "id": 789,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.11355560001509,
            -1.522083364209042
          ]
        },
        "properties": {
          "FID": 789,
          "NOM1": "Kabangwa",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.11,
          "LATITUDE": -1.52
        }
      },
      {
        "type": "Feature",
        "id": 790,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.1246666400151,
            -1.5206944369950357
          ]
        },
        "properties": {
          "FID": 790,
          "NOM1": "Butua",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.12,
          "LATITUDE": -1.52
        }
      },
      {
        "type": "Feature",
        "id": 791,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.083916800015075,
            -1.5796667328045169
          ]
        },
        "properties": {
          "FID": 791,
          "NOM1": "Likoka",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.08,
          "LATITUDE": -1.58
        }
      },
      {
        "type": "Feature",
        "id": 792,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.924916680014984,
            -1.321500076996142
          ]
        },
        "properties": {
          "FID": 792,
          "NOM1": "Katoto",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.92,
          "LATITUDE": -1.32
        }
      },
      {
        "type": "Feature",
        "id": 793,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.827388720014934,
            -1.2985277759586265
          ]
        },
        "properties": {
          "FID": 793,
          "NOM1": "Eliba I & II",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.83,
          "LATITUDE": -1.3
        }
      },
      {
        "type": "Feature",
        "id": 794,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.819916560014935,
            -1.2979165814082834
          ]
        },
        "properties": {
          "FID": 794,
          "NOM1": "Shemakongolo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.82,
          "LATITUDE": -1.3
        }
      },
      {
        "type": "Feature",
        "id": 795,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.843972120014946,
            -1.297222140248708
          ]
        },
        "properties": {
          "FID": 795,
          "NOM1": "Kabusa",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.84,
          "LATITUDE": -1.3
        }
      },
      {
        "type": "Feature",
        "id": 796,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.84902760001495,
            -1.2963055280748064
          ]
        },
        "properties": {
          "FID": 796,
          "NOM1": "Nyandakala",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 27.85,
          "LATITUDE": -1.3
        }
      },
      {
        "type": "Feature",
        "id": 797,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.068222240015068,
            -1.4208610580127157
          ]
        },
        "properties": {
          "FID": 797,
          "NOM1": "Kinkambe",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.07,
          "LATITUDE": -1.42
        }
      },
      {
        "type": "Feature",
        "id": 798,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.74749688,
            -1.3652209435627427
          ]
        },
        "properties": {
          "FID": 798,
          "NOM1": "Kinyeere",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.75,
          "LATITUDE": -1.37
        }
      },
      {
        "type": "Feature",
        "id": 799,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.749062879999997,
            -1.2570559436794615
          ]
        },
        "properties": {
          "FID": 799,
          "NOM1": "Lwibo",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.75,
          "LATITUDE": -1.26
        }
      },
      {
        "type": "Feature",
        "id": 800,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.744417079999998,
            -1.2626329982826692
          ]
        },
        "properties": {
          "FID": 800,
          "NOM1": "Lwibo",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.74,
          "LATITUDE": -1.26
        }
      },
      {
        "type": "Feature",
        "id": 801,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.711632960000003,
            -1.3405310020194268
          ]
        },
        "properties": {
          "FID": 801,
          "NOM1": "Kaandja",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.71,
          "LATITUDE": -1.34
        }
      },
      {
        "type": "Feature",
        "id": 802,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.734726960000003,
            -1.2818910503340868
          ]
        },
        "properties": {
          "FID": 802,
          "NOM1": "Kinyumba",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.73,
          "LATITUDE": -1.28
        }
      },
      {
        "type": "Feature",
        "id": 803,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.74100716,
            -1.2785849542594216
          ]
        },
        "properties": {
          "FID": 803,
          "NOM1": "Kishee",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.74,
          "LATITUDE": -1.28
        }
      },
      {
        "type": "Feature",
        "id": 804,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.79417196,
            -1.3734159720592394
          ]
        },
        "properties": {
          "FID": 804,
          "NOM1": "Mukohwa",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.79,
          "LATITUDE": -1.37
        }
      },
      {
        "type": "Feature",
        "id": 805,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.77681996,
            -1.3632180383946486
          ]
        },
        "properties": {
          "FID": 805,
          "NOM1": "Ngesha",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.78,
          "LATITUDE": -1.36
        }
      },
      {
        "type": "Feature",
        "id": 806,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.11496112,
            -1.1351870549123413
          ]
        },
        "properties": {
          "FID": 806,
          "NOM1": "Rugebeshe",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.11,
          "LATITUDE": -1.14
        }
      },
      {
        "type": "Feature",
        "id": 807,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.982977560000002,
            -1.3663627573122687
          ]
        },
        "properties": {
          "FID": 807,
          "NOM1": "Kanyatsi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.98,
          "LATITUDE": -1.37
        }
      },
      {
        "type": "Feature",
        "id": 808,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.95593796,
            -1.4197929637803377
          ]
        },
        "properties": {
          "FID": 808,
          "NOM1": "Murangara",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.96,
          "LATITUDE": -1.42
        }
      },
      {
        "type": "Feature",
        "id": 809,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.9807668,
            -1.4380168023128044
          ]
        },
        "properties": {
          "FID": 809,
          "NOM1": "Kausa",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.98,
          "LATITUDE": -1.44
        }
      },
      {
        "type": "Feature",
        "id": 810,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.145930840000002,
            -1.0553369384820916
          ]
        },
        "properties": {
          "FID": 810,
          "NOM1": "Munguli",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.15,
          "LATITUDE": -1.06
        }
      },
      {
        "type": "Feature",
        "id": 811,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.001855960000004,
            -1.4160499454037685
          ]
        },
        "properties": {
          "FID": 811,
          "NOM1": "Rushinga",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 29,
          "LATITUDE": -1.42
        }
      },
      {
        "type": "Feature",
        "id": 812,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.73642544,
            -1.5041757009341887
          ]
        },
        "properties": {
          "FID": 812,
          "NOM1": "Luke",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.74,
          "LATITUDE": -1.5
        }
      },
      {
        "type": "Feature",
        "id": 813,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.096107119999996,
            -1.3800549296832043
          ]
        },
        "properties": {
          "FID": 813,
          "NOM1": "Birengeti",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.1,
          "LATITUDE": -1.38
        }
      },
      {
        "type": "Feature",
        "id": 814,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.303485839999997,
            -1.1777349308359324
          ]
        },
        "properties": {
          "FID": 814,
          "NOM1": "Bunyampuli",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.3,
          "LATITUDE": -1.18
        }
      },
      {
        "type": "Feature",
        "id": 815,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.359291960000004,
            -1.2057930077617594
          ]
        },
        "properties": {
          "FID": 815,
          "NOM1": "Burumu",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.36,
          "LATITUDE": -1.21
        }
      },
      {
        "type": "Feature",
        "id": 816,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.344935160000002,
            -1.197110009069666
          ]
        },
        "properties": {
          "FID": 816,
          "NOM1": "Kasuka",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.34,
          "LATITUDE": -1.2
        }
      },
      {
        "type": "Feature",
        "id": 817,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.17572904,
            -1.2399690102787533
          ]
        },
        "properties": {
          "FID": 817,
          "NOM1": "Kayilenge",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.18,
          "LATITUDE": -1.24
        }
      },
      {
        "type": "Feature",
        "id": 818,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.200521159999997,
            -1.2000379812672413
          ]
        },
        "properties": {
          "FID": 818,
          "NOM1": "Kigoma",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.2,
          "LATITUDE": -1.2
        }
      },
      {
        "type": "Feature",
        "id": 819,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.36463688,
            -1.2083470693649756
          ]
        },
        "properties": {
          "FID": 819,
          "NOM1": "Kitika",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.36,
          "LATITUDE": -1.21
        }
      },
      {
        "type": "Feature",
        "id": 820,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.402628040000003,
            -1.2359010109115702
          ]
        },
        "properties": {
          "FID": 820,
          "NOM1": "Mera",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.4,
          "LATITUDE": -1.24
        }
      },
      {
        "type": "Feature",
        "id": 821,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.203073919999998,
            -1.1742949990577083
          ]
        },
        "properties": {
          "FID": 821,
          "NOM1": "Mpofi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.2,
          "LATITUDE": -1.17
        }
      },
      {
        "type": "Feature",
        "id": 822,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.091865960000003,
            -1.4010019552971207
          ]
        },
        "properties": {
          "FID": 822,
          "NOM1": "Mubanda",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.09,
          "LATITUDE": -1.4
        }
      },
      {
        "type": "Feature",
        "id": 823,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.22467212,
            -1.1743890611571262
          ]
        },
        "properties": {
          "FID": 823,
          "NOM1": "Munangili",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.22,
          "LATITUDE": -1.17
        }
      },
      {
        "type": "Feature",
        "id": 824,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.092251160000004,
            -1.3485709774149708
          ]
        },
        "properties": {
          "FID": 824,
          "NOM1": "Mutongo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.09,
          "LATITUDE": -1.35
        }
      },
      {
        "type": "Feature",
        "id": 825,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.09300392,
            -1.3885520689254747
          ]
        },
        "properties": {
          "FID": 825,
          "NOM1": "Nyamianda",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.09,
          "LATITUDE": -1.39
        }
      },
      {
        "type": "Feature",
        "id": 826,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.279674000000004,
            -1.1757089935359915
          ]
        },
        "properties": {
          "FID": 826,
          "NOM1": "Ruvungi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.28,
          "LATITUDE": -1.18
        }
      },
      {
        "type": "Feature",
        "id": 827,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.070603999999996,
            -1.2907220607381322
          ]
        },
        "properties": {
          "FID": 827,
          "NOM1": "Tendelukala",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.07,
          "LATITUDE": -1.29
        }
      },
      {
        "type": "Feature",
        "id": 828,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.094511960000006,
            -1.363400022471246
          ]
        },
        "properties": {
          "FID": 828,
          "NOM1": "Wenga",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.09,
          "LATITUDE": -1.36
        }
      },
      {
        "type": "Feature",
        "id": 829,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.22055012,
            -1.6227859561521807
          ]
        },
        "properties": {
          "FID": 829,
          "NOM1": "Nyakatanda",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.22,
          "LATITUDE": -1.62
        }
      },
      {
        "type": "Feature",
        "id": 830,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.20149316,
            -1.6290739150620146
          ]
        },
        "properties": {
          "FID": 830,
          "NOM1": "Filo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.2,
          "LATITUDE": -1.63
        }
      },
      {
        "type": "Feature",
        "id": 831,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.192951080000004,
            -1.6388729806827136
          ]
        },
        "properties": {
          "FID": 831,
          "NOM1": "Lukonda",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.19,
          "LATITUDE": -1.64
        }
      },
      {
        "type": "Feature",
        "id": 832,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.172943000000007,
            -1.678139015045246
          ]
        },
        "properties": {
          "FID": 832,
          "NOM1": "Savieme",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.17,
          "LATITUDE": -1.68
        }
      },
      {
        "type": "Feature",
        "id": 833,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.159300079999998,
            -1.6796989819286476
          ]
        },
        "properties": {
          "FID": 833,
          "NOM1": "Tusoki",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.16,
          "LATITUDE": -1.68
        }
      },
      {
        "type": "Feature",
        "id": 834,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.122707159999997,
            -1.666309060080512
          ]
        },
        "properties": {
          "FID": 834,
          "NOM1": "Muteke",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.12,
          "LATITUDE": -1.67
        }
      },
      {
        "type": "Feature",
        "id": 835,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.081242000000003,
            -1.603035021191965
          ]
        },
        "properties": {
          "FID": 835,
          "NOM1": "Nyamiala",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.08,
          "LATITUDE": -1.6
        }
      },
      {
        "type": "Feature",
        "id": 836,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.07704188,
            -1.5938949979069108
          ]
        },
        "properties": {
          "FID": 836,
          "NOM1": "Makaki",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.08,
          "LATITUDE": -1.59
        }
      },
      {
        "type": "Feature",
        "id": 837,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.10623284,
            -1.5026570388842149
          ]
        },
        "properties": {
          "FID": 837,
          "NOM1": "Bucaguzi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.11,
          "LATITUDE": -1.5
        }
      },
      {
        "type": "Feature",
        "id": 838,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.10352996,
            -1.4939929514600712
          ]
        },
        "properties": {
          "FID": 838,
          "NOM1": "Bulambo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.1,
          "LATITUDE": -1.49
        }
      },
      {
        "type": "Feature",
        "id": 839,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.099023120000002,
            -1.4758270471007218
          ]
        },
        "properties": {
          "FID": 839,
          "NOM1": "Kampala",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.1,
          "LATITUDE": -1.48
        }
      },
      {
        "type": "Feature",
        "id": 840,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.167402960000004,
            -1.6784270838602187
          ]
        },
        "properties": {
          "FID": 840,
          "NOM1": "Kabunga",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.17,
          "LATITUDE": -1.68
        }
      },
      {
        "type": "Feature",
        "id": 841,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.11115412,
            -1.0949739452479308
          ]
        },
        "properties": {
          "FID": 841,
          "NOM1": "Luve",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.11,
          "LATITUDE": -1.09
        }
      },
      {
        "type": "Feature",
        "id": 842,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.96275384,
            -1.3524910435187816
          ]
        },
        "properties": {
          "FID": 842,
          "NOM1": "Kanzenze",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.96,
          "LATITUDE": -1.35
        }
      },
      {
        "type": "Feature",
        "id": 843,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.90909044,
            -1.1191569467810543
          ]
        },
        "properties": {
          "FID": 843,
          "NOM1": "Kivuye",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.91,
          "LATITUDE": -1.12
        }
      },
      {
        "type": "Feature",
        "id": 844,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.12178708,
            -0.9822019717827076
          ]
        },
        "properties": {
          "FID": 844,
          "NOM1": "Bwalanda",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.12,
          "LATITUDE": -0.98
        }
      },
      {
        "type": "Feature",
        "id": 845,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.04166404,
            -1.1461290233939085
          ]
        },
        "properties": {
          "FID": 845,
          "NOM1": "Kubudanda",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.04,
          "LATITUDE": -1.15
        }
      },
      {
        "type": "Feature",
        "id": 846,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.20960188,
            -1.0013420743987564
          ]
        },
        "properties": {
          "FID": 846,
          "NOM1": "Rugebere",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.21,
          "LATITUDE": -1
        }
      },
      {
        "type": "Feature",
        "id": 847,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.968732000000003,
            -1.0867259719823186
          ]
        },
        "properties": {
          "FID": 847,
          "NOM1": "Mihara",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.97,
          "LATITUDE": -1.09
        }
      },
      {
        "type": "Feature",
        "id": 848,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.95736716,
            -1.0977789465017664
          ]
        },
        "properties": {
          "FID": 848,
          "NOM1": "Rusave",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.96,
          "LATITUDE": -1.1
        }
      },
      {
        "type": "Feature",
        "id": 849,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.00421216,
            -1.0741509719547995
          ]
        },
        "properties": {
          "FID": 849,
          "NOM1": "Bushenge",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 29,
          "LATITUDE": -1.07
        }
      },
      {
        "type": "Feature",
        "id": 850,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.136283119999998,
            -1.2473449458299803
          ]
        },
        "properties": {
          "FID": 850,
          "NOM1": "Nkumbwa",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.14,
          "LATITUDE": -1.25
        }
      },
      {
        "type": "Feature",
        "id": 851,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.76344992,
            -1.3701040538657554
          ]
        },
        "properties": {
          "FID": 851,
          "NOM1": "Busoro",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.76,
          "LATITUDE": -1.37
        }
      },
      {
        "type": "Feature",
        "id": 852,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.210480920000006,
            -1.6234629999562187
          ]
        },
        "properties": {
          "FID": 852,
          "NOM1": "Mutiko",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.21,
          "LATITUDE": -1.62
        }
      },
      {
        "type": "Feature",
        "id": 853,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.115623080000002,
            -1.6480580179706608
          ]
        },
        "properties": {
          "FID": 853,
          "NOM1": "Nyamakombola",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.12,
          "LATITUDE": -1.65
        }
      },
      {
        "type": "Feature",
        "id": 854,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.01746268,
            -1.3813062862291283
          ]
        },
        "properties": {
          "FID": 854,
          "NOM1": "Mihanga",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 29.02,
          "LATITUDE": -1.38
        }
      },
      {
        "type": "Feature",
        "id": 855,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.131775920000006,
            -1.6769200817350456
          ]
        },
        "properties": {
          "FID": 855,
          "NOM1": "Itebero",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.13,
          "LATITUDE": -1.68
        }
      },
      {
        "type": "Feature",
        "id": 856,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.746393120000004,
            -1.2282799820062942
          ]
        },
        "properties": {
          "FID": 856,
          "NOM1": "Kilambo",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.75,
          "LATITUDE": -1.23
        }
      },
      {
        "type": "Feature",
        "id": 857,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.744677,
            -1.2160539273720634
          ]
        },
        "properties": {
          "FID": 857,
          "NOM1": "Lukweti",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.74,
          "LATITUDE": -1.22
        }
      },
      {
        "type": "Feature",
        "id": 858,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.733454000000002,
            -1.3583990589441286
          ]
        },
        "properties": {
          "FID": 858,
          "NOM1": "Burora",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.73,
          "LATITUDE": -1.36
        }
      },
      {
        "type": "Feature",
        "id": 859,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.79188308,
            -1.360501969441618
          ]
        },
        "properties": {
          "FID": 859,
          "NOM1": "Loashi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.79,
          "LATITUDE": -1.36
        }
      },
      {
        "type": "Feature",
        "id": 860,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.754889839999997,
            -1.36786205144455
          ]
        },
        "properties": {
          "FID": 860,
          "NOM1": "Lushoa",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.75,
          "LATITUDE": -1.37
        }
      },
      {
        "type": "Feature",
        "id": 861,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.268398080000004,
            -1.1730720112774005
          ]
        },
        "properties": {
          "FID": 861,
          "NOM1": "Kembe",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.27,
          "LATITUDE": -1.17
        }
      },
      {
        "type": "Feature",
        "id": 862,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.416251879999997,
            -1.233965033090183
          ]
        },
        "properties": {
          "FID": 862,
          "NOM1": "Kibua",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.42,
          "LATITUDE": -1.23
        }
      },
      {
        "type": "Feature",
        "id": 863,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.948168080000002,
            -1.339192955508797
          ]
        },
        "properties": {
          "FID": 863,
          "NOM1": "Muheto",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.95,
          "LATITUDE": -1.34
        }
      },
      {
        "type": "Feature",
        "id": 864,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.107959120000004,
            -1.1212400477827038
          ]
        },
        "properties": {
          "FID": 864,
          "NOM1": "Katsiru",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.11,
          "LATITUDE": -1.12
        }
      },
      {
        "type": "Feature",
        "id": 865,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.27858472,
            -1.208491404225626
          ]
        },
        "properties": {
          "FID": 865,
          "NOM1": "Tongo",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.28,
          "LATITUDE": -1.21
        }
      },
      {
        "type": "Feature",
        "id": 866,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.731093120000004,
            -1.3123729499852794
          ]
        },
        "properties": {
          "FID": 866,
          "NOM1": "Nyabiondo",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.73,
          "LATITUDE": -1.31
        }
      },
      {
        "type": "Feature",
        "id": 867,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.264943159999998,
            -1.6149860634928737
          ]
        },
        "properties": {
          "FID": 867,
          "NOM1": "Musenge",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.26,
          "LATITUDE": -1.61
        }
      },
      {
        "type": "Feature",
        "id": 868,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.09329588,
            -1.337841934997858
          ]
        },
        "properties": {
          "FID": 868,
          "NOM1": "Ngora",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.09,
          "LATITUDE": -1.34
        }
      },
      {
        "type": "Feature",
        "id": 869,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.112645160000007,
            -1.5182140402726259
          ]
        },
        "properties": {
          "FID": 869,
          "NOM1": "Nyasi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.11,
          "LATITUDE": -1.52
        }
      },
      {
        "type": "Feature",
        "id": 870,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.228250879999997,
            -1.6196129633441436
          ]
        },
        "properties": {
          "FID": 870,
          "NOM1": "Kabamba",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.23,
          "LATITUDE": -1.62
        }
      },
      {
        "type": "Feature",
        "id": 871,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.924957080000006,
            -1.3391870094345848
          ]
        },
        "properties": {
          "FID": 871,
          "NOM1": "Busihe",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.92,
          "LATITUDE": -1.34
        }
      },
      {
        "type": "Feature",
        "id": 872,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.12870404,
            -1.2424729457910397
          ]
        },
        "properties": {
          "FID": 872,
          "NOM1": "Busayu",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.13,
          "LATITUDE": -1.24
        }
      },
      {
        "type": "Feature",
        "id": 873,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.12070196,
            -1.241013938754194
          ]
        },
        "properties": {
          "FID": 873,
          "NOM1": "Musimya",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.12,
          "LATITUDE": -1.24
        }
      },
      {
        "type": "Feature",
        "id": 874,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.112358959999998,
            -1.2391320220882407
          ]
        },
        "properties": {
          "FID": 874,
          "NOM1": "Bunesa",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.11,
          "LATITUDE": -1.24
        }
      },
      {
        "type": "Feature",
        "id": 875,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.103933879999996,
            -1.2361329173175688
          ]
        },
        "properties": {
          "FID": 875,
          "NOM1": "Lisala",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.1,
          "LATITUDE": -1.24
        }
      },
      {
        "type": "Feature",
        "id": 876,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.092753000000002,
            -1.234565972002835
          ]
        },
        "properties": {
          "FID": 876,
          "NOM1": "Katanga",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.09,
          "LATITUDE": -1.23
        }
      },
      {
        "type": "Feature",
        "id": 877,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.079202960000003,
            -1.233530951493212
          ]
        },
        "properties": {
          "FID": 877,
          "NOM1": "Shabunda",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.08,
          "LATITUDE": -1.23
        }
      },
      {
        "type": "Feature",
        "id": 878,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.08672984,
            -1.3189200012335391
          ]
        },
        "properties": {
          "FID": 878,
          "NOM1": "Mitusenge",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.09,
          "LATITUDE": -1.32
        }
      },
      {
        "type": "Feature",
        "id": 879,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.099118160000003,
            -1.5395689233056478
          ]
        },
        "properties": {
          "FID": 879,
          "NOM1": "Kakundu",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.1,
          "LATITUDE": -1.54
        }
      },
      {
        "type": "Feature",
        "id": 880,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.078277039999996,
            -1.5550939442802547
          ]
        },
        "properties": {
          "FID": 880,
          "NOM1": "Lowa",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.08,
          "LATITUDE": -1.56
        }
      },
      {
        "type": "Feature",
        "id": 881,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.106966160000006,
            -1.637018961045939
          ]
        },
        "properties": {
          "FID": 881,
          "NOM1": "Kasindi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Bakano",
          "LONGITUDE": 28.11,
          "LATITUDE": -1.64
        }
      },
      {
        "type": "Feature",
        "id": 882,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.23398,
            0.3839099999999964
          ]
        },
        "properties": {
          "FID": 882,
          "NOM1": "Visiki",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.23,
          "LATITUDE": 0.38
        }
      },
      {
        "type": "Feature",
        "id": 883,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.27531,
            0.36655999999998434
          ]
        },
        "properties": {
          "FID": 883,
          "NOM1": "Mabingi Centre",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.28,
          "LATITUDE": 0.37
        }
      },
      {
        "type": "Feature",
        "id": 884,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.2517,
            0.25664999999998767
          ]
        },
        "properties": {
          "FID": 884,
          "NOM1": "Mikama",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.25,
          "LATITUDE": 0.26
        }
      },
      {
        "type": "Feature",
        "id": 885,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.248633,
            0.2436169999999922
          ]
        },
        "properties": {
          "FID": 885,
          "NOM1": "Mutitiro",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.25,
          "LATITUDE": 0.24
        }
      },
      {
        "type": "Feature",
        "id": 886,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.245267,
            0.23748299999999117
          ]
        },
        "properties": {
          "FID": 886,
          "NOM1": "Misebere",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.25,
          "LATITUDE": 0.24
        }
      },
      {
        "type": "Feature",
        "id": 887,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.219500000000004,
            0.2345829999999894
          ]
        },
        "properties": {
          "FID": 887,
          "NOM1": "Lughatika",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.22,
          "LATITUDE": 0.23
        }
      },
      {
        "type": "Feature",
        "id": 888,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.241683000000002,
            0.23018299999998992
          ]
        },
        "properties": {
          "FID": 888,
          "NOM1": "Misebere Ya Katumba",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.24,
          "LATITUDE": 0.23
        }
      },
      {
        "type": "Feature",
        "id": 889,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.222725,
            0.11800699999999377
          ]
        },
        "properties": {
          "FID": 889,
          "NOM1": "Musingiri",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.22,
          "LATITUDE": 0.12
        }
      },
      {
        "type": "Feature",
        "id": 890,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.316983,
            0.09250000000000526
          ]
        },
        "properties": {
          "FID": 890,
          "NOM1": "Leproserie",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.32,
          "LATITUDE": 0.09
        }
      },
      {
        "type": "Feature",
        "id": 891,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.31035,
            0.16638300000000483
          ]
        },
        "properties": {
          "FID": 891,
          "NOM1": "Kikyo",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.31,
          "LATITUDE": 0.17
        }
      },
      {
        "type": "Feature",
        "id": 892,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.299732999999996,
            0.15229999999998795
          ]
        },
        "properties": {
          "FID": 892,
          "NOM1": "Kivisire",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.3,
          "LATITUDE": 0.15
        }
      },
      {
        "type": "Feature",
        "id": 893,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.300717000000002,
            0.1492829999999852
          ]
        },
        "properties": {
          "FID": 893,
          "NOM1": "Makerere",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.3,
          "LATITUDE": 0.15
        }
      },
      {
        "type": "Feature",
        "id": 894,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.308817,
            0.14978299999999972
          ]
        },
        "properties": {
          "FID": 894,
          "NOM1": "Mukondo",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.31,
          "LATITUDE": 0.15
        }
      },
      {
        "type": "Feature",
        "id": 895,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.311283,
            0.14946699999998708
          ]
        },
        "properties": {
          "FID": 895,
          "NOM1": "Katwikira",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.31,
          "LATITUDE": 0.15
        }
      },
      {
        "type": "Feature",
        "id": 896,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.3222,
            0.14720000000000097
          ]
        },
        "properties": {
          "FID": 896,
          "NOM1": "Kalengere",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.32,
          "LATITUDE": 0.15
        }
      },
      {
        "type": "Feature",
        "id": 897,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.319433,
            0.160933000000004
          ]
        },
        "properties": {
          "FID": 897,
          "NOM1": "Vuhira",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.32,
          "LATITUDE": 0.16
        }
      },
      {
        "type": "Feature",
        "id": 898,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.32,
            0.1578829999999812
          ]
        },
        "properties": {
          "FID": 898,
          "NOM1": "Kisitu",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.32,
          "LATITUDE": 0.16
        }
      },
      {
        "type": "Feature",
        "id": 899,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.330417000000004,
            0.17593299999999673
          ]
        },
        "properties": {
          "FID": 899,
          "NOM1": "Kamusonge",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.33,
          "LATITUDE": 0.18
        }
      },
      {
        "type": "Feature",
        "id": 900,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.32535,
            0.1490670000000023
          ]
        },
        "properties": {
          "FID": 900,
          "NOM1": "Mwiri",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.33,
          "LATITUDE": 0.15
        }
      },
      {
        "type": "Feature",
        "id": 901,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.335167,
            0.14473300000000466
          ]
        },
        "properties": {
          "FID": 901,
          "NOM1": "Bulengera",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.34,
          "LATITUDE": 0.14
        }
      },
      {
        "type": "Feature",
        "id": 902,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.322733,
            0.15714999999998291
          ]
        },
        "properties": {
          "FID": 902,
          "NOM1": "Wayene",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.32,
          "LATITUDE": 0.16
        }
      },
      {
        "type": "Feature",
        "id": 903,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.3229,
            0.15116700000000102
          ]
        },
        "properties": {
          "FID": 903,
          "NOM1": "Ivatama",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.32,
          "LATITUDE": 0.15
        }
      },
      {
        "type": "Feature",
        "id": 904,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.317599999999995,
            0.1728499999999837
          ]
        },
        "properties": {
          "FID": 904,
          "NOM1": "Mavono",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.32,
          "LATITUDE": 0.17
        }
      },
      {
        "type": "Feature",
        "id": 905,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.309417,
            0.1576829999999984
          ]
        },
        "properties": {
          "FID": 905,
          "NOM1": "Vusegheseghe",
          "TERRITOIRE": "Butembo",
          "COLLECTIV": " ",
          "LONGITUDE": 29.31,
          "LATITUDE": 0.16
        }
      },
      {
        "type": "Feature",
        "id": 906,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.061913,
            0.03103100000000081
          ]
        },
        "properties": {
          "FID": 906,
          "NOM1": "Vuhesi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.06,
          "LATITUDE": 0.03
        }
      },
      {
        "type": "Feature",
        "id": 907,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.112953,
            0.06735299999999428
          ]
        },
        "properties": {
          "FID": 907,
          "NOM1": "Ngongi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.11,
          "LATITUDE": 0.07
        }
      },
      {
        "type": "Feature",
        "id": 908,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.138843999999995,
            0.0803669999999871
          ]
        },
        "properties": {
          "FID": 908,
          "NOM1": "Mbangi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.14,
          "LATITUDE": 0.08
        }
      },
      {
        "type": "Feature",
        "id": 909,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.980361,
            0.09612199999999321
          ]
        },
        "properties": {
          "FID": 909,
          "NOM1": "Vuhima",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 28.98,
          "LATITUDE": 0.1
        }
      },
      {
        "type": "Feature",
        "id": 910,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.093067,
            -0.09911400000001754
          ]
        },
        "properties": {
          "FID": 910,
          "NOM1": "Katimbya",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswaga",
          "LONGITUDE": 29.09,
          "LATITUDE": -0.1
        }
      },
      {
        "type": "Feature",
        "id": 911,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.325718,
            -0.026838000000004334
          ]
        },
        "properties": {
          "FID": 911,
          "NOM1": "Kaseya",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.33,
          "LATITUDE": -0.03
        }
      },
      {
        "type": "Feature",
        "id": 912,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.46113,
            -0.036968000000015475
          ]
        },
        "properties": {
          "FID": 912,
          "NOM1": "Matenga",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.46,
          "LATITUDE": -0.04
        }
      },
      {
        "type": "Feature",
        "id": 913,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.454804999999997,
            -0.043216999999998285
          ]
        },
        "properties": {
          "FID": 913,
          "NOM1": "Ngangatiro",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.45,
          "LATITUDE": -0.04
        }
      },
      {
        "type": "Feature",
        "id": 914,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.516394999999996,
            -0.041106000000011605
          ]
        },
        "properties": {
          "FID": 914,
          "NOM1": "Vurondo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.52,
          "LATITUDE": -0.04
        }
      },
      {
        "type": "Feature",
        "id": 915,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.377328999999996,
            -0.032376000000016544
          ]
        },
        "properties": {
          "FID": 915,
          "NOM1": "Kyatenga",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.38,
          "LATITUDE": -0.03
        }
      },
      {
        "type": "Feature",
        "id": 916,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.384394,
            -0.02898599999999894
          ]
        },
        "properties": {
          "FID": 916,
          "NOM1": "Mukoku",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.38,
          "LATITUDE": -0.03
        }
      },
      {
        "type": "Feature",
        "id": 917,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.385851,
            -0.03243400000001479
          ]
        },
        "properties": {
          "FID": 917,
          "NOM1": "Vulimiro",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.39,
          "LATITUDE": -0.03
        }
      },
      {
        "type": "Feature",
        "id": 918,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.388653,
            -0.030836000000015303
          ]
        },
        "properties": {
          "FID": 918,
          "NOM1": "Itunduliro",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.39,
          "LATITUDE": -0.03
        }
      },
      {
        "type": "Feature",
        "id": 919,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.388672999999997,
            -0.033303000000010186
          ]
        },
        "properties": {
          "FID": 919,
          "NOM1": "Kanyasi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.39,
          "LATITUDE": -0.03
        }
      },
      {
        "type": "Feature",
        "id": 920,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.396777,
            -0.06876599999999604
          ]
        },
        "properties": {
          "FID": 920,
          "NOM1": "Mumole",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.4,
          "LATITUDE": -0.07
        }
      },
      {
        "type": "Feature",
        "id": 921,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.396717,
            -0.07000100000001018
          ]
        },
        "properties": {
          "FID": 921,
          "NOM1": "Mavono",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.4,
          "LATITUDE": -0.07
        }
      },
      {
        "type": "Feature",
        "id": 922,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.377377000000003,
            -0.08780299999999519
          ]
        },
        "properties": {
          "FID": 922,
          "NOM1": "Kibwe",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.38,
          "LATITUDE": -0.09
        }
      },
      {
        "type": "Feature",
        "id": 923,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.390184,
            -0.10014800000001164
          ]
        },
        "properties": {
          "FID": 923,
          "NOM1": "Bwalyana",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.39,
          "LATITUDE": -0.1
        }
      },
      {
        "type": "Feature",
        "id": 924,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.389594000000002,
            -0.10548299999999987
          ]
        },
        "properties": {
          "FID": 924,
          "NOM1": "Vulera",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.39,
          "LATITUDE": -0.11
        }
      },
      {
        "type": "Feature",
        "id": 925,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.393665,
            -0.11351900000001891
          ]
        },
        "properties": {
          "FID": 925,
          "NOM1": "Kaliro Mangina",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.39,
          "LATITUDE": -0.11
        }
      },
      {
        "type": "Feature",
        "id": 926,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.384301,
            -0.09840599999999716
          ]
        },
        "properties": {
          "FID": 926,
          "NOM1": "Vuserio",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.38,
          "LATITUDE": -0.1
        }
      },
      {
        "type": "Feature",
        "id": 927,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.383046,
            -0.09863500000000365
          ]
        },
        "properties": {
          "FID": 927,
          "NOM1": "Kamole",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.38,
          "LATITUDE": -0.1
        }
      },
      {
        "type": "Feature",
        "id": 928,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.294241,
            -0.29607600000001455
          ]
        },
        "properties": {
          "FID": 928,
          "NOM1": "Lunyasenge",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 29.29,
          "LATITUDE": -0.3
        }
      },
      {
        "type": "Feature",
        "id": 929,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.312956,
            -0.3647500000000028
          ]
        },
        "properties": {
          "FID": 929,
          "NOM1": "Kirikiri",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.31,
          "LATITUDE": -0.36
        }
      },
      {
        "type": "Feature",
        "id": 930,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.316172999999996,
            -0.38618600000000747
          ]
        },
        "properties": {
          "FID": 930,
          "NOM1": "Kiribata",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 29.32,
          "LATITUDE": -0.39
        }
      },
      {
        "type": "Feature",
        "id": 931,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.320677999999997,
            -0.39799299999999854
          ]
        },
        "properties": {
          "FID": 931,
          "NOM1": "Kalimba",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.32,
          "LATITUDE": -0.4
        }
      },
      {
        "type": "Feature",
        "id": 932,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.870027777777782,
            -1.640888888888893
          ]
        },
        "properties": {
          "FID": 932,
          "NOM1": "Bishasha",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.87,
          "LATITUDE": -1.64
        }
      },
      {
        "type": "Feature",
        "id": 933,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.835444444444445,
            -1.6611111111111132
          ]
        },
        "properties": {
          "FID": 933,
          "NOM1": "Mitoyo",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.84,
          "LATITUDE": -1.66
        }
      },
      {
        "type": "Feature",
        "id": 934,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.85622222222222,
            -1.6762222222222234
          ]
        },
        "properties": {
          "FID": 934,
          "NOM1": "Katahandwa",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.86,
          "LATITUDE": -1.68
        }
      },
      {
        "type": "Feature",
        "id": 935,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.876666666666665,
            -1.657361111111124
          ]
        },
        "properties": {
          "FID": 935,
          "NOM1": "Ngungu Centre",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.88,
          "LATITUDE": -1.66
        }
      },
      {
        "type": "Feature",
        "id": 936,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.991583333333335,
            -1.582916666666678
          ]
        },
        "properties": {
          "FID": 936,
          "NOM1": "Murambi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.99,
          "LATITUDE": -1.58
        }
      },
      {
        "type": "Feature",
        "id": 937,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.959666666666667,
            -1.578250000000006
          ]
        },
        "properties": {
          "FID": 937,
          "NOM1": "Rushoga",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.96,
          "LATITUDE": -1.58
        }
      },
      {
        "type": "Feature",
        "id": 938,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.932611111111115,
            -1.6100833333333453
          ]
        },
        "properties": {
          "FID": 938,
          "NOM1": "Kazinga",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.93,
          "LATITUDE": -1.61
        }
      },
      {
        "type": "Feature",
        "id": 939,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.011833333333332,
            -1.5588888888888968
          ]
        },
        "properties": {
          "FID": 939,
          "NOM1": "Mitumbala Centre",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 29.01,
          "LATITUDE": -1.56
        }
      },
      {
        "type": "Feature",
        "id": 940,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.043666666666667,
            -1.3823611111111238
          ]
        },
        "properties": {
          "FID": 940,
          "NOM1": "Majaliwa",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanyanga",
          "LONGITUDE": 28.04,
          "LATITUDE": -1.38
        }
      },
      {
        "type": "Feature",
        "id": 941,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.060305555555555,
            -1.3971111111111116
          ]
        },
        "properties": {
          "FID": 941,
          "NOM1": "Katindo",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanyanga",
          "LONGITUDE": 28.06,
          "LATITUDE": -1.4
        }
      },
      {
        "type": "Feature",
        "id": 942,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.05627777777778,
            -1.3934166666666714
          ]
        },
        "properties": {
          "FID": 942,
          "NOM1": "Nyamukaka",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanyanga",
          "LONGITUDE": 28.06,
          "LATITUDE": -1.39
        }
      },
      {
        "type": "Feature",
        "id": 943,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.786250000000003,
            -1.2759166666666761
          ]
        },
        "properties": {
          "FID": 943,
          "NOM1": "Isanga",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanyanga",
          "LONGITUDE": 27.79,
          "LATITUDE": -1.28
        }
      },
      {
        "type": "Feature",
        "id": 944,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.763277777777777,
            -1.2810277777777894
          ]
        },
        "properties": {
          "FID": 944,
          "NOM1": "Densite",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanyanga",
          "LONGITUDE": 27.76,
          "LATITUDE": -1.28
        }
      },
      {
        "type": "Feature",
        "id": 945,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.790805555555558,
            -1.2776388888888839
          ]
        },
        "properties": {
          "FID": 945,
          "NOM1": "Mayuwano",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanyanga",
          "LONGITUDE": 27.79,
          "LATITUDE": -1.28
        }
      },
      {
        "type": "Feature",
        "id": 946,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.74061111111111,
            -1.2793055555555637
          ]
        },
        "properties": {
          "FID": 946,
          "NOM1": "Matenda",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanyanga",
          "LONGITUDE": 27.74,
          "LATITUDE": -1.28
        }
      },
      {
        "type": "Feature",
        "id": 947,
        "geometry": {
          "type": "Point",
          "coordinates": [
            27.632833333333334,
            -1.3302222222222175
          ]
        },
        "properties": {
          "FID": 947,
          "NOM1": "Boboro",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanyanga",
          "LONGITUDE": 27.63,
          "LATITUDE": -1.33
        }
      },
      {
        "type": "Feature",
        "id": 948,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.067916666666665,
            -1.2837500000000133
          ]
        },
        "properties": {
          "FID": 948,
          "NOM1": "Tenderukara",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanyanga",
          "LONGITUDE": 28.07,
          "LATITUDE": -1.28
        }
      },
      {
        "type": "Feature",
        "id": 949,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.07036111111111,
            -1.2879444444444568
          ]
        },
        "properties": {
          "FID": 949,
          "NOM1": "Mutakato II",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanyanga",
          "LONGITUDE": 28.07,
          "LATITUDE": -1.29
        }
      },
      {
        "type": "Feature",
        "id": 950,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.515555555555554,
            -0.046666666666670825
          ]
        },
        "properties": {
          "FID": 950,
          "NOM1": "Kiwanza",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.52,
          "LATITUDE": -0.05
        }
      },
      {
        "type": "Feature",
        "id": 951,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.440483333333336,
            0.05194999999998352
          ]
        },
        "properties": {
          "FID": 951,
          "NOM1": "Musalala",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.44,
          "LATITUDE": 0.05
        }
      },
      {
        "type": "Feature",
        "id": 952,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.440200000000004,
            0.03578333333331546
          ]
        },
        "properties": {
          "FID": 952,
          "NOM1": "Ndalihya",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.44,
          "LATITUDE": 0.04
        }
      },
      {
        "type": "Feature",
        "id": 953,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.43583333333333,
            0.06574999999998611
          ]
        },
        "properties": {
          "FID": 953,
          "NOM1": "Lukomo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.44,
          "LATITUDE": 0.07
        }
      },
      {
        "type": "Feature",
        "id": 954,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.45528333333333,
            0.035183333333323956
          ]
        },
        "properties": {
          "FID": 954,
          "NOM1": "Magheria",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.46,
          "LATITUDE": 0.04
        }
      },
      {
        "type": "Feature",
        "id": 955,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.462349999999997,
            0.05624999999999343
          ]
        },
        "properties": {
          "FID": 955,
          "NOM1": "Kivandya",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.46,
          "LATITUDE": 0.06
        }
      },
      {
        "type": "Feature",
        "id": 956,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.46681666666667,
            0.058549999999985676
          ]
        },
        "properties": {
          "FID": 956,
          "NOM1": "Kivombo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.47,
          "LATITUDE": 0.06
        }
      },
      {
        "type": "Feature",
        "id": 957,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.460483333333332,
            0.05394999999998595
          ]
        },
        "properties": {
          "FID": 957,
          "NOM1": "Kitongote",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.46,
          "LATITUDE": 0.05
        }
      },
      {
        "type": "Feature",
        "id": 958,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.460399999999996,
            0.06639999999999213
          ]
        },
        "properties": {
          "FID": 958,
          "NOM1": "Mbungwe",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.46,
          "LATITUDE": 0.07
        }
      },
      {
        "type": "Feature",
        "id": 959,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.19886111111111,
            0.1484722222222284
          ]
        },
        "properties": {
          "FID": 959,
          "NOM1": "Katambi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.2,
          "LATITUDE": 0.15
        }
      },
      {
        "type": "Feature",
        "id": 960,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.201861111111107,
            0.12497222222222433
          ]
        },
        "properties": {
          "FID": 960,
          "NOM1": "Ndavakwa",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.2,
          "LATITUDE": 0.12
        }
      },
      {
        "type": "Feature",
        "id": 961,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.172805555555556,
            0.1688916666666534
          ]
        },
        "properties": {
          "FID": 961,
          "NOM1": "Beme",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.17,
          "LATITUDE": 0.17
        }
      },
      {
        "type": "Feature",
        "id": 962,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.173194444444448,
            0.16802777777777933
          ]
        },
        "properties": {
          "FID": 962,
          "NOM1": "Kiragho",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.17,
          "LATITUDE": 0.17
        }
      },
      {
        "type": "Feature",
        "id": 963,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.1666668400157,
            0.19999998209076716
          ]
        },
        "properties": {
          "FID": 963,
          "NOM1": "Misugho Centre",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.17,
          "LATITUDE": 0.2
        }
      },
      {
        "type": "Feature",
        "id": 964,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.18858333333333,
            0.19599999999999415
          ]
        },
        "properties": {
          "FID": 964,
          "NOM1": "Karongo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.19,
          "LATITUDE": 0.2
        }
      },
      {
        "type": "Feature",
        "id": 965,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.119083333333336,
            0.20025000000000265
          ]
        },
        "properties": {
          "FID": 965,
          "NOM1": "Vuvo",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.12,
          "LATITUDE": 0.2
        }
      },
      {
        "type": "Feature",
        "id": 966,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.117361111111112,
            0.1883611111110947
          ]
        },
        "properties": {
          "FID": 966,
          "NOM1": "Kirima",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.12,
          "LATITUDE": 0.19
        }
      },
      {
        "type": "Feature",
        "id": 967,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.103138888888893,
            0.2264166666666721
          ]
        },
        "properties": {
          "FID": 967,
          "NOM1": "Lubana",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.1,
          "LATITUDE": 0.23
        }
      },
      {
        "type": "Feature",
        "id": 968,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.082694444444446,
            0.19972222222220376
          ]
        },
        "properties": {
          "FID": 968,
          "NOM1": "Kyalamahendi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.08,
          "LATITUDE": 0.2
        }
      },
      {
        "type": "Feature",
        "id": 969,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.122000000000003,
            0.2310555555555589
          ]
        },
        "properties": {
          "FID": 969,
          "NOM1": "Mbata",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.12,
          "LATITUDE": 0.23
        }
      },
      {
        "type": "Feature",
        "id": 970,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.049722222222226,
            0.2176666666666523
          ]
        },
        "properties": {
          "FID": 970,
          "NOM1": "Vingyo",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.05,
          "LATITUDE": 0.22
        }
      },
      {
        "type": "Feature",
        "id": 971,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.032805555555555,
            0.25455555555555215
          ]
        },
        "properties": {
          "FID": 971,
          "NOM1": "Itendi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.03,
          "LATITUDE": 0.25
        }
      },
      {
        "type": "Feature",
        "id": 972,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.024833333333333,
            0.25522222222222146
          ]
        },
        "properties": {
          "FID": 972,
          "NOM1": "Mangimu",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.02,
          "LATITUDE": 0.26
        }
      },
      {
        "type": "Feature",
        "id": 973,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.059694444444442,
            0.23302777777776099
          ]
        },
        "properties": {
          "FID": 973,
          "NOM1": "Manzeku",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.06,
          "LATITUDE": 0.23
        }
      },
      {
        "type": "Feature",
        "id": 974,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.04977777777778,
            0.24841666666666265
          ]
        },
        "properties": {
          "FID": 974,
          "NOM1": "Kitulu",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.05,
          "LATITUDE": 0.25
        }
      },
      {
        "type": "Feature",
        "id": 975,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.078888888888887,
            0.20113888888888323
          ]
        },
        "properties": {
          "FID": 975,
          "NOM1": "Nzalihwa",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.08,
          "LATITUDE": 0.2
        }
      },
      {
        "type": "Feature",
        "id": 976,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.012888888888888,
            0.26552777777777214
          ]
        },
        "properties": {
          "FID": 976,
          "NOM1": "Kalenguko",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.01,
          "LATITUDE": 0.27
        }
      },
      {
        "type": "Feature",
        "id": 977,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.06163888888889,
            0.257138888888894
          ]
        },
        "properties": {
          "FID": 977,
          "NOM1": "Vupereghe",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.06,
          "LATITUDE": 0.26
        }
      },
      {
        "type": "Feature",
        "id": 978,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.08136111111111,
            0.22661111111111437
          ]
        },
        "properties": {
          "FID": 978,
          "NOM1": "Luvika",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.08,
          "LATITUDE": 0.23
        }
      },
      {
        "type": "Feature",
        "id": 979,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.128611111111113,
            0.2935555555555586
          ]
        },
        "properties": {
          "FID": 979,
          "NOM1": "Ngubi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.13,
          "LATITUDE": 0.29
        }
      },
      {
        "type": "Feature",
        "id": 980,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.11861111111111,
            0.29509166666665504
          ]
        },
        "properties": {
          "FID": 980,
          "NOM1": "Makumo",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.12,
          "LATITUDE": 0.3
        }
      },
      {
        "type": "Feature",
        "id": 981,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.090833333333336,
            0.28655555555554985
          ]
        },
        "properties": {
          "FID": 981,
          "NOM1": "Kamirihi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.09,
          "LATITUDE": 0.29
        }
      },
      {
        "type": "Feature",
        "id": 982,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.149972222222225,
            0.3061388888888742
          ]
        },
        "properties": {
          "FID": 982,
          "NOM1": "Kavali",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.15,
          "LATITUDE": 0.31
        }
      },
      {
        "type": "Feature",
        "id": 983,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.130444444444446,
            0.27219444444443147
          ]
        },
        "properties": {
          "FID": 983,
          "NOM1": "Kaniyi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.13,
          "LATITUDE": 0.27
        }
      },
      {
        "type": "Feature",
        "id": 984,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.05755555555556,
            0.29399999999999266
          ]
        },
        "properties": {
          "FID": 984,
          "NOM1": "Mako",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.06,
          "LATITUDE": 0.29
        }
      },
      {
        "type": "Feature",
        "id": 985,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.117166666666662,
            0.30041666666665523
          ]
        },
        "properties": {
          "FID": 985,
          "NOM1": "Kalundu",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.12,
          "LATITUDE": 0.3
        }
      },
      {
        "type": "Feature",
        "id": 986,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.11369444444444,
            0.2867499999999842
          ]
        },
        "properties": {
          "FID": 986,
          "NOM1": "Vusinge",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.11,
          "LATITUDE": 0.29
        }
      },
      {
        "type": "Feature",
        "id": 987,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.06488888888889,
            0.273611111111116
          ]
        },
        "properties": {
          "FID": 987,
          "NOM1": "Mambasa",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.06,
          "LATITUDE": 0.27
        }
      },
      {
        "type": "Feature",
        "id": 988,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.10933333333334,
            0.2943333333333376
          ]
        },
        "properties": {
          "FID": 988,
          "NOM1": "Masoya",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.11,
          "LATITUDE": 0.29
        }
      },
      {
        "type": "Feature",
        "id": 989,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.127222222222223,
            0.25844444444443426
          ]
        },
        "properties": {
          "FID": 989,
          "NOM1": "Musenge",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.13,
          "LATITUDE": 0.26
        }
      },
      {
        "type": "Feature",
        "id": 990,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.10088888888889,
            0.26716666666665934
          ]
        },
        "properties": {
          "FID": 990,
          "NOM1": "Mihanga",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.1,
          "LATITUDE": 0.27
        }
      },
      {
        "type": "Feature",
        "id": 991,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.114305555555553,
            0.2650000000000051
          ]
        },
        "properties": {
          "FID": 991,
          "NOM1": "Vulima",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.11,
          "LATITUDE": 0.27
        }
      },
      {
        "type": "Feature",
        "id": 992,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.122000000000003,
            0.25319444444443484
          ]
        },
        "properties": {
          "FID": 992,
          "NOM1": "Vunzuli",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.12,
          "LATITUDE": 0.25
        }
      },
      {
        "type": "Feature",
        "id": 993,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.157277777777775,
            0.2461111111111097
          ]
        },
        "properties": {
          "FID": 993,
          "NOM1": "Mukohwa",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.16,
          "LATITUDE": 0.25
        }
      },
      {
        "type": "Feature",
        "id": 994,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.135055555555553,
            0.2551111111111014
          ]
        },
        "properties": {
          "FID": 994,
          "NOM1": "Manzabya",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.14,
          "LATITUDE": 0.26
        }
      },
      {
        "type": "Feature",
        "id": 995,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.1666668400157,
            0.2666670570327525
          ]
        },
        "properties": {
          "FID": 995,
          "NOM1": "Vurondo Centre",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.17,
          "LATITUDE": 0.27
        }
      },
      {
        "type": "Feature",
        "id": 996,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.083499999999994,
            0.36094444444444607
          ]
        },
        "properties": {
          "FID": 996,
          "NOM1": "Bukoka",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.08,
          "LATITUDE": 0.36
        }
      },
      {
        "type": "Feature",
        "id": 997,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.0635,
            0.3189194444444316
          ]
        },
        "properties": {
          "FID": 997,
          "NOM1": "Lukono",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.06,
          "LATITUDE": 0.32
        }
      },
      {
        "type": "Feature",
        "id": 998,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.09225,
            0.33247222222221146
          ]
        },
        "properties": {
          "FID": 998,
          "NOM1": "Ngere",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.09,
          "LATITUDE": 0.33
        }
      },
      {
        "type": "Feature",
        "id": 999,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.104472222222228,
            0.32661111111109276
          ]
        },
        "properties": {
          "FID": 999,
          "NOM1": "Mambia",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.1,
          "LATITUDE": 0.33
        }
      },
      {
        "type": "Feature",
        "id": 1000,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.039555555555562,
            0.3424166666666595
          ]
        },
        "properties": {
          "FID": 1000,
          "NOM1": "Lumba",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.04,
          "LATITUDE": 0.34
        }
      },
      {
        "type": "Feature",
        "id": 1001,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.047583333333336,
            0.38311111111111246
          ]
        },
        "properties": {
          "FID": 1001,
          "NOM1": "Lose",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.05,
          "LATITUDE": 0.38
        }
      },
      {
        "type": "Feature",
        "id": 1002,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.092361111111106,
            0.3378333333333176
          ]
        },
        "properties": {
          "FID": 1002,
          "NOM1": "Pombi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Baswagha",
          "LONGITUDE": 29.09,
          "LATITUDE": 0.34
        }
      },
      {
        "type": "Feature",
        "id": 1003,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.272055555555553,
            0.28416666666665674
          ]
        },
        "properties": {
          "FID": 1003,
          "NOM1": "Kanyatsi-Irangi",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Bashu",
          "LONGITUDE": 29.27,
          "LATITUDE": 0.28
        }
      },
      {
        "type": "Feature",
        "id": 1004,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.84591666666666,
            0.5672777777777688
          ]
        },
        "properties": {
          "FID": 1004,
          "NOM1": "Solia",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.85,
          "LATITUDE": 0.57
        }
      },
      {
        "type": "Feature",
        "id": 1005,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.870316666666668,
            0.5997400000000012
          ]
        },
        "properties": {
          "FID": 1005,
          "NOM1": "Kombo I",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.87,
          "LATITUDE": 0.6
        }
      },
      {
        "type": "Feature",
        "id": 1006,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.879756666666665,
            0.6019066666666539
          ]
        },
        "properties": {
          "FID": 1006,
          "NOM1": "Ndegya",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.88,
          "LATITUDE": 0.6
        }
      },
      {
        "type": "Feature",
        "id": 1007,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.867305555555557,
            0.6372222222222138
          ]
        },
        "properties": {
          "FID": 1007,
          "NOM1": "Lughali",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.87,
          "LATITUDE": 0.64
        }
      },
      {
        "type": "Feature",
        "id": 1008,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.871416666666665,
            0.6277222222222197
          ]
        },
        "properties": {
          "FID": 1008,
          "NOM1": "Njiangbada",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.87,
          "LATITUDE": 0.63
        }
      },
      {
        "type": "Feature",
        "id": 1009,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.882305555555554,
            0.6374999999999867
          ]
        },
        "properties": {
          "FID": 1009,
          "NOM1": "Butuba",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.88,
          "LATITUDE": 0.64
        }
      },
      {
        "type": "Feature",
        "id": 1010,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.87386111111111,
            0.6229722222222269
          ]
        },
        "properties": {
          "FID": 1010,
          "NOM1": "Mulembo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.87,
          "LATITUDE": 0.62
        }
      },
      {
        "type": "Feature",
        "id": 1011,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.86038333333333,
            0.6356666666666488
          ]
        },
        "properties": {
          "FID": 1011,
          "NOM1": "Mumio",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.86,
          "LATITUDE": 0.64
        }
      },
      {
        "type": "Feature",
        "id": 1012,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.879527777777778,
            0.6430555555555562
          ]
        },
        "properties": {
          "FID": 1012,
          "NOM1": "Maale",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.88,
          "LATITUDE": 0.64
        }
      },
      {
        "type": "Feature",
        "id": 1013,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.86028333333333,
            0.6384500000000043
          ]
        },
        "properties": {
          "FID": 1013,
          "NOM1": "Kaghema II",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.86,
          "LATITUDE": 0.64
        }
      },
      {
        "type": "Feature",
        "id": 1014,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.866916666666672,
            0.6422777777777696
          ]
        },
        "properties": {
          "FID": 1014,
          "NOM1": "Kaghema II",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.87,
          "LATITUDE": 0.64
        }
      },
      {
        "type": "Feature",
        "id": 1015,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.877750000000002,
            0.63224999999999
          ]
        },
        "properties": {
          "FID": 1015,
          "NOM1": "Kaghema I",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.88,
          "LATITUDE": 0.63
        }
      },
      {
        "type": "Feature",
        "id": 1016,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.919166666666673,
            0.620000000000001
          ]
        },
        "properties": {
          "FID": 1016,
          "NOM1": "Katumiko",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.92,
          "LATITUDE": 0.62
        }
      },
      {
        "type": "Feature",
        "id": 1017,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.919166666666673,
            0.632222222222212
          ]
        },
        "properties": {
          "FID": 1017,
          "NOM1": "Lutalika",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.92,
          "LATITUDE": 0.63
        }
      },
      {
        "type": "Feature",
        "id": 1018,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.910555555555554,
            0.6169444444444445
          ]
        },
        "properties": {
          "FID": 1018,
          "NOM1": "Mbimba",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.91,
          "LATITUDE": 0.62
        }
      },
      {
        "type": "Feature",
        "id": 1019,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.926666666666666,
            0.6238888888888712
          ]
        },
        "properties": {
          "FID": 1019,
          "NOM1": "Kisegeta",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.93,
          "LATITUDE": 0.62
        }
      },
      {
        "type": "Feature",
        "id": 1020,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.939277777777775,
            0.6038611111110973
          ]
        },
        "properties": {
          "FID": 1020,
          "NOM1": "Kikura II",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.94,
          "LATITUDE": 0.6
        }
      },
      {
        "type": "Feature",
        "id": 1021,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.950138888888883,
            0.5974166666666482
          ]
        },
        "properties": {
          "FID": 1021,
          "NOM1": "Kalyavakwenda",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Ruwenzori",
          "LONGITUDE": 29.95,
          "LATITUDE": 0.6
        }
      },
      {
        "type": "Feature",
        "id": 1022,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.945700000000002,
            0.6166833333333158
          ]
        },
        "properties": {
          "FID": 1022,
          "NOM1": "Nsungu II",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.95,
          "LATITUDE": 0.62
        }
      },
      {
        "type": "Feature",
        "id": 1023,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.925216666666667,
            0.634233333333336
          ]
        },
        "properties": {
          "FID": 1023,
          "NOM1": "Busingya",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.93,
          "LATITUDE": 0.63
        }
      },
      {
        "type": "Feature",
        "id": 1024,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.94075,
            0.6353833333333306
          ]
        },
        "properties": {
          "FID": 1024,
          "NOM1": "Kalegha",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.94,
          "LATITUDE": 0.64
        }
      },
      {
        "type": "Feature",
        "id": 1025,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.916516666666663,
            0.6400999999999909
          ]
        },
        "properties": {
          "FID": 1025,
          "NOM1": "Kisuba",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Watalinga",
          "LONGITUDE": 29.92,
          "LATITUDE": 0.64
        }
      },
      {
        "type": "Feature",
        "id": 1026,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.54158333333333,
            0.8292222222222088
          ]
        },
        "properties": {
          "FID": 1026,
          "NOM1": "Mambabio",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni Mbau",
          "LONGITUDE": 29.54,
          "LATITUDE": 0.83
        }
      },
      {
        "type": "Feature",
        "id": 1027,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.608666666666668,
            0.711305555555556
          ]
        },
        "properties": {
          "FID": 1027,
          "NOM1": "Mapobu",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni Mbau",
          "LONGITUDE": 29.61,
          "LATITUDE": 0.71
        }
      },
      {
        "type": "Feature",
        "id": 1028,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.55875,
            0.7457222222222206
          ]
        },
        "properties": {
          "FID": 1028,
          "NOM1": "Maibo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni Mbau",
          "LONGITUDE": 29.56,
          "LATITUDE": 0.75
        }
      },
      {
        "type": "Feature",
        "id": 1029,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.618249999999996,
            0.7119166666666503
          ]
        },
        "properties": {
          "FID": 1029,
          "NOM1": "Sesele",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni Mbau",
          "LONGITUDE": 29.62,
          "LATITUDE": 0.71
        }
      },
      {
        "type": "Feature",
        "id": 1030,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.565472222222223,
            0.7590000000000044
          ]
        },
        "properties": {
          "FID": 1030,
          "NOM1": "Kisiki",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni Mbau",
          "LONGITUDE": 29.57,
          "LATITUDE": 0.76
        }
      },
      {
        "type": "Feature",
        "id": 1031,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.641388888888883,
            0.814666666666659
          ]
        },
        "properties": {
          "FID": 1031,
          "NOM1": "Atokaka",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni Mbau",
          "LONGITUDE": 29.64,
          "LATITUDE": 0.81
        }
      },
      {
        "type": "Feature",
        "id": 1032,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.647472222222223,
            0.8100833333333143
          ]
        },
        "properties": {
          "FID": 1032,
          "NOM1": "Chuchubo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni Mbau",
          "LONGITUDE": 29.65,
          "LATITUDE": 0.81
        }
      },
      {
        "type": "Feature",
        "id": 1033,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.606250000000003,
            0.8314166666666476
          ]
        },
        "properties": {
          "FID": 1033,
          "NOM1": "Linzo sisene I",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni Mbau",
          "LONGITUDE": 29.61,
          "LATITUDE": 0.83
        }
      },
      {
        "type": "Feature",
        "id": 1034,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.603805555555557,
            0.8119166666666547
          ]
        },
        "properties": {
          "FID": 1034,
          "NOM1": "Linzo sisene III",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni Mbau",
          "LONGITUDE": 29.6,
          "LATITUDE": 0.81
        }
      },
      {
        "type": "Feature",
        "id": 1035,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.602722222222223,
            0.8189166666666672
          ]
        },
        "properties": {
          "FID": 1035,
          "NOM1": "Bilimani",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni Mbau",
          "LONGITUDE": 29.6,
          "LATITUDE": 0.82
        }
      },
      {
        "type": "Feature",
        "id": 1036,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.602861111111114,
            0.8058333333333324
          ]
        },
        "properties": {
          "FID": 1036,
          "NOM1": "Linzo sisene IV",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni Mbau",
          "LONGITUDE": 29.6,
          "LATITUDE": 0.81
        }
      },
      {
        "type": "Feature",
        "id": 1037,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.605333333333334,
            0.8177222222222095
          ]
        },
        "properties": {
          "FID": 1037,
          "NOM1": "Linzo sisene III",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni Mbau",
          "LONGITUDE": 29.61,
          "LATITUDE": 0.82
        }
      },
      {
        "type": "Feature",
        "id": 1038,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.620888888888885,
            0.8426666666666619
          ]
        },
        "properties": {
          "FID": 1038,
          "NOM1": "Makoyoba",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.62,
          "LATITUDE": 0.84
        }
      },
      {
        "type": "Feature",
        "id": 1039,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.620972222222225,
            0.8427222222222105
          ]
        },
        "properties": {
          "FID": 1039,
          "NOM1": "Tsutsubo",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.62,
          "LATITUDE": 0.84
        }
      },
      {
        "type": "Feature",
        "id": 1040,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.774749999999997,
            0.901666666666669
          ]
        },
        "properties": {
          "FID": 1040,
          "NOM1": "Bulemba",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.77,
          "LATITUDE": 0.9
        }
      },
      {
        "type": "Feature",
        "id": 1041,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.788722222222223,
            0.9066944444444339
          ]
        },
        "properties": {
          "FID": 1041,
          "NOM1": "Kakuka I",
          "TERRITOIRE": "Oicha",
          "COLLECTIV": "Beni",
          "LONGITUDE": 29.79,
          "LATITUDE": 0.91
        }
      },
      {
        "type": "Feature",
        "id": 1042,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.675010879999995,
            -1.0754509478876941
          ]
        },
        "properties": {
          "FID": 1042,
          "NOM1": "Burumbi",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.68,
          "LATITUDE": -1.08
        }
      },
      {
        "type": "Feature",
        "id": 1043,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.65415103999999,
            -1.1183210029729405
          ]
        },
        "properties": {
          "FID": 1043,
          "NOM1": "Kaseke",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.65,
          "LATITUDE": -1.12
        }
      },
      {
        "type": "Feature",
        "id": 1044,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.663238159999995,
            -1.094523984308259
          ]
        },
        "properties": {
          "FID": 1044,
          "NOM1": "Missoke",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.66,
          "LATITUDE": -1.09
        }
      },
      {
        "type": "Feature",
        "id": 1045,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.674955079999993,
            -1.0486879821711486
          ]
        },
        "properties": {
          "FID": 1045,
          "NOM1": "Rugoma",
          "TERRITOIRE": "Walikale",
          "COLLECTIV": "Wanianga",
          "LONGITUDE": 28.67,
          "LATITUDE": -1.05
        }
      },
      {
        "type": "Feature",
        "id": 1046,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.796282639999994,
            -1.5012715223303557
          ]
        },
        "properties": {
          "FID": 1046,
          "NOM1": "Kaniro",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.8,
          "LATITUDE": -1.5
        }
      },
      {
        "type": "Feature",
        "id": 1047,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.728587519999998,
            -1.5205769663923336
          ]
        },
        "properties": {
          "FID": 1047,
          "NOM1": "Kaloba",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.73,
          "LATITUDE": -1.52
        }
      },
      {
        "type": "Feature",
        "id": 1048,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.82718972,
            -1.4596535451444264
          ]
        },
        "properties": {
          "FID": 1048,
          "NOM1": "Mashaki",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.83,
          "LATITUDE": -1.46
        }
      },
      {
        "type": "Feature",
        "id": 1049,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.839400919999996,
            -1.4728338248938477
          ]
        },
        "properties": {
          "FID": 1049,
          "NOM1": "Lukopfu",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.84,
          "LATITUDE": -1.47
        }
      },
      {
        "type": "Feature",
        "id": 1050,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.115709199999994,
            -1.1505204309541766
          ]
        },
        "properties": {
          "FID": 1050,
          "NOM1": "Mashango",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.12,
          "LATITUDE": -1.15
        }
      },
      {
        "type": "Feature",
        "id": 1051,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.110985999999997,
            -1.1734278977140427
          ]
        },
        "properties": {
          "FID": 1051,
          "NOM1": "Karambi",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.11,
          "LATITUDE": -1.17
        }
      },
      {
        "type": "Feature",
        "id": 1052,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.783412639999995,
            -1.337591118623672
          ]
        },
        "properties": {
          "FID": 1052,
          "NOM1": "Kasho",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.78,
          "LATITUDE": -1.34
        }
      },
      {
        "type": "Feature",
        "id": 1053,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.777015799999997,
            -1.3347919556745436
          ]
        },
        "properties": {
          "FID": 1053,
          "NOM1": "Bonde",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.78,
          "LATITUDE": -1.33
        }
      },
      {
        "type": "Feature",
        "id": 1054,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.764778319999994,
            -1.3241551070763466
          ]
        },
        "properties": {
          "FID": 1054,
          "NOM1": "Buzee",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.76,
          "LATITUDE": -1.32
        }
      },
      {
        "type": "Feature",
        "id": 1055,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.757964599999994,
            -1.322615424220561
          ]
        },
        "properties": {
          "FID": 1055,
          "NOM1": "Mabambya",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.76,
          "LATITUDE": -1.32
        }
      },
      {
        "type": "Feature",
        "id": 1056,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.747173959999998,
            -1.3165154236806824
          ]
        },
        "properties": {
          "FID": 1056,
          "NOM1": "Kautu",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.75,
          "LATITUDE": -1.32
        }
      },
      {
        "type": "Feature",
        "id": 1057,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.743608159999997,
            -1.3160865815770442
          ]
        },
        "properties": {
          "FID": 1057,
          "NOM1": "Bushani",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.74,
          "LATITUDE": -1.32
        }
      },
      {
        "type": "Feature",
        "id": 1058,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.742651279999997,
            -1.3125963806710088
          ]
        },
        "properties": {
          "FID": 1058,
          "NOM1": "Buhama",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.74,
          "LATITUDE": -1.31
        }
      },
      {
        "type": "Feature",
        "id": 1059,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.707240239999997,
            -1.3734554318040304
          ]
        },
        "properties": {
          "FID": 1059,
          "NOM1": "Kasopo",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.71,
          "LATITUDE": -1.37
        }
      },
      {
        "type": "Feature",
        "id": 1060,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.666853999999994,
            -1.3801864617921238
          ]
        },
        "properties": {
          "FID": 1060,
          "NOM1": "Mahanga",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.67,
          "LATITUDE": -1.38
        }
      },
      {
        "type": "Feature",
        "id": 1061,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.890692999999995,
            -1.3869727878702567
          ]
        },
        "properties": {
          "FID": 1061,
          "NOM1": "Bikenge",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.89,
          "LATITUDE": -1.39
        }
      },
      {
        "type": "Feature",
        "id": 1062,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.913055479999997,
            -1.3760354490275808
          ]
        },
        "properties": {
          "FID": 1062,
          "NOM1": "Matovu",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.91,
          "LATITUDE": -1.38
        }
      },
      {
        "type": "Feature",
        "id": 1063,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.901720159999996,
            -1.4207417803064786
          ]
        },
        "properties": {
          "FID": 1063,
          "NOM1": "Buguri",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bahunde",
          "LONGITUDE": 28.9,
          "LATITUDE": -1.42
        }
      },
      {
        "type": "Feature",
        "id": 1064,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.830683879999995,
            -1.413286551040012
          ]
        },
        "properties": {
          "FID": 1064,
          "NOM1": "Kanii",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Osso",
          "LONGITUDE": 28.83,
          "LATITUDE": -1.41
        }
      },
      {
        "type": "Feature",
        "id": 1065,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.74135743999999,
            -1.1942299653831345
          ]
        },
        "properties": {
          "FID": 1065,
          "NOM1": "Mutongo",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.74,
          "LATITUDE": -1.19
        }
      },
      {
        "type": "Feature",
        "id": 1066,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.922377679999993,
            -1.2612426548925915
          ]
        },
        "properties": {
          "FID": 1066,
          "NOM1": "Kahira",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.92,
          "LATITUDE": -1.26
        }
      },
      {
        "type": "Feature",
        "id": 1067,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.910436839999996,
            -1.221149955612385
          ]
        },
        "properties": {
          "FID": 1067,
          "NOM1": "Butumbalonge",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.91,
          "LATITUDE": -1.22
        }
      },
      {
        "type": "Feature",
        "id": 1068,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.905572879999998,
            -1.1928869770633763
          ]
        },
        "properties": {
          "FID": 1068,
          "NOM1": "Chogero",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.91,
          "LATITUDE": -1.19
        }
      },
      {
        "type": "Feature",
        "id": 1069,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.886772959999995,
            -1.1889250405263914
          ]
        },
        "properties": {
          "FID": 1069,
          "NOM1": "Gahinga",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.89,
          "LATITUDE": -1.19
        }
      },
      {
        "type": "Feature",
        "id": 1070,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.923909119999994,
            -1.2094579610697664
          ]
        },
        "properties": {
          "FID": 1070,
          "NOM1": "Kalunda",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.92,
          "LATITUDE": -1.21
        }
      },
      {
        "type": "Feature",
        "id": 1071,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.896419879999993,
            -1.191438934706766
          ]
        },
        "properties": {
          "FID": 1071,
          "NOM1": "Kaninda",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.9,
          "LATITUDE": -1.19
        }
      },
      {
        "type": "Feature",
        "id": 1072,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.907440919999996,
            -1.1972370459007748
          ]
        },
        "properties": {
          "FID": 1072,
          "NOM1": "Lungu",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.91,
          "LATITUDE": -1.2
        }
      },
      {
        "type": "Feature",
        "id": 1073,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.924350119999996,
            -1.2267980826807556
          ]
        },
        "properties": {
          "FID": 1073,
          "NOM1": "Maliba",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.92,
          "LATITUDE": -1.23
        }
      },
      {
        "type": "Feature",
        "id": 1074,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.930817159999997,
            -1.1942090628462394
          ]
        },
        "properties": {
          "FID": 1074,
          "NOM1": "Musingi",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.93,
          "LATITUDE": -1.19
        }
      },
      {
        "type": "Feature",
        "id": 1075,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.978062839999993,
            -1.1762879616277337
          ]
        },
        "properties": {
          "FID": 1075,
          "NOM1": "Busumba",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.98,
          "LATITUDE": -1.18
        }
      },
      {
        "type": "Feature",
        "id": 1076,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.00065211999999,
            -1.1597209211144812
          ]
        },
        "properties": {
          "FID": 1076,
          "NOM1": "Kabare",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 29,
          "LATITUDE": -1.16
        }
      },
      {
        "type": "Feature",
        "id": 1077,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.969076879999992,
            -1.1833640482549725
          ]
        },
        "properties": {
          "FID": 1077,
          "NOM1": "Rugogwe",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.97,
          "LATITUDE": -1.18
        }
      },
      {
        "type": "Feature",
        "id": 1078,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.07893772,
            -1.2098770905697431
          ]
        },
        "properties": {
          "FID": 1078,
          "NOM1": "Kyahemba",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.08,
          "LATITUDE": -1.21
        }
      },
      {
        "type": "Feature",
        "id": 1079,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.174945759999996,
            -1.2709899984578528
          ]
        },
        "properties": {
          "FID": 1079,
          "NOM1": "Nyange",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.17,
          "LATITUDE": -1.27
        }
      },
      {
        "type": "Feature",
        "id": 1080,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.168952839999996,
            -1.2787928917569826
          ]
        },
        "properties": {
          "FID": 1080,
          "NOM1": "Kitunda",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.17,
          "LATITUDE": -1.28
        }
      },
      {
        "type": "Feature",
        "id": 1081,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.937766599999996,
            -1.1092726481796644
          ]
        },
        "properties": {
          "FID": 1081,
          "NOM1": "Bweru",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.94,
          "LATITUDE": -1.11
        }
      },
      {
        "type": "Feature",
        "id": 1082,
        "geometry": {
          "type": "Point",
          "coordinates": [
            28.951435079999996,
            -1.1890470322909692
          ]
        },
        "properties": {
          "FID": 1082,
          "NOM1": "Kabati",
          "TERRITOIRE": "Masisi",
          "COLLECTIV": "Bashali",
          "LONGITUDE": 28.95,
          "LATITUDE": -1.19
        }
      },
      {
        "type": "Feature",
        "id": 1083,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.175825959999997,
            -1.130778324594188
          ]
        },
        "properties": {
          "FID": 1083,
          "NOM1": "Makomalehe",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.18,
          "LATITUDE": -1.13
        }
      },
      {
        "type": "Feature",
        "id": 1084,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.08399427999999,
            -1.067425831080937
          ]
        },
        "properties": {
          "FID": 1084,
          "NOM1": "Mubirubiru",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.08,
          "LATITUDE": -1.07
        }
      },
      {
        "type": "Feature",
        "id": 1085,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.05207488,
            -0.9543483221315079
          ]
        },
        "properties": {
          "FID": 1085,
          "NOM1": "Kyala",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.05,
          "LATITUDE": -0.95
        }
      },
      {
        "type": "Feature",
        "id": 1086,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.16202392,
            -0.7434460874464776
          ]
        },
        "properties": {
          "FID": 1086,
          "NOM1": "Butalongola",
          "TERRITOIRE": "Rutshuru",
          "COLLECTIV": "Bwito",
          "LONGITUDE": 29.16,
          "LATITUDE": -0.74
        }
      },
      {
        "type": "Feature",
        "id": 1087,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.023815959999997,
            -0.5823412498078406
          ]
        },
        "properties": {
          "FID": 1087,
          "NOM1": "Mbwavinwa",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 29.02,
          "LATITUDE": -0.58
        }
      },
      {
        "type": "Feature",
        "id": 1088,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.046188879999995,
            -0.5470798521803882
          ]
        },
        "properties": {
          "FID": 1088,
          "NOM1": "Kanyatsi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 29.05,
          "LATITUDE": -0.55
        }
      },
      {
        "type": "Feature",
        "id": 1089,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.06902115999999,
            -0.5883000099667807
          ]
        },
        "properties": {
          "FID": 1089,
          "NOM1": "Kasiki",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Bamate",
          "LONGITUDE": 29.07,
          "LATITUDE": -0.59
        }
      },
      {
        "type": "Feature",
        "id": 1090,
        "geometry": {
          "type": "Point",
          "coordinates": [
            29.03004108,
            -0.45858069265797197
          ]
        },
        "properties": {
          "FID": 1090,
          "NOM1": "Bingi",
          "TERRITOIRE": "Lubero",
          "COLLECTIV": "Batangi",
          "LONGITUDE": 29.03,
          "LATITUDE": -0.46
        }
      }
    ]
  };
 
  // Create separate layer groups for Aero and IDPS data
var aeroLayer = L.geoJSON(aero, {
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { icon: customIcon });
    }
  });
  
  var idpsLayer = L.geoJSON(idps, {
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, { icon: custpoint });
    }
  });
  
  // Add the layer groups to a common layer control
  var overlayMaps = {
    "Aero": aeroLayer,
    "IDPs": idpsLayer,
    
  };
  
  L.control.layers(null, overlayMaps, {
    collapsed: false
  }).addTo(map);
  
  // Initially, add only IDPs points to the map
  idpsLayer.addTo(map);
 
  
  // Add the basemap (OpenStreetMap or Mapbox Streets)
  var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© DTM Nord-Kivu UN MIGRATION',
    
  });
  
  // Add your tile layer from Mapbox (if needed)
  var mapboxUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}';
  var mapboxAttribution = '© DTM Nord-Kivu UN MIGRATION';
  var streets = L.tileLayer(mapboxUrl, {
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    attribution: mapboxAttribution,
    
  });
  
  // Add base layers to the map
  var baseMaps = {
    'OpenStreetMap': osm,
    'Mapbox Streets': streets
  };
  
  osm.addTo(map); // Choose the default basemap here if you prefer
  
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps, {collapsed: false}).addTo(map);

  // Initialize the feature group for drawn items
  var drawnItems = new L.FeatureGroup();
  map.addLayer(drawnItems);

  // Add the drawing control to the left panel
  var drawControl = new L.Control.Draw({
    edit: {
      featureGroup: drawnItems,
      poly: {
        allowIntersection: false
      }
    }
  });
  drawControl.addTo(map);

  // Add the measurement control to the left panel
  L.control.measure({
    primaryLengthUnit: 'meters',
    secondaryLengthUnit: 'kilometers',
    primaryAreaUnit: 'sqmeters',
    secondaryAreaUnit: 'sqkilometers'
  }).addTo(map);

  var currentPolygon; // Store the current polygon being drawn
  
// Define the IDPs GeoJSON data
var idpsData = idps;

// Function to filter and display IDPs based on search
function filterIDPs() {
    var searchText = document.getElementById('search-input').value.toLowerCase();
    drawnItems.clearLayers(); // Clear existing IDPs from the map

    idpsData.features.forEach(function (feature) {
      var name = feature.properties.NOM1.toLowerCase();
      if (name.includes(searchText)) {
        L.marker([feature.geometry.coordinates[1], feature.geometry.coordinates[0]])
          .addTo(map);
      }
    });
  }

  // Attach the filterIDPs function to the input field's "keyup" event
  document.getElementById('search-input').addEventListener('keyup', filterIDPs);
  // Function to handle adding a marker
  function addMarker() {
    map.off('click'); // Remove other event listeners
    map.on('click', function (e) {
      var marker = L.marker(e.latlng).addTo(drawnItems);
    });
  }

  // Function to handle adding a polygon
  function addPolygon() {
    map.off('click'); // Remove other event listeners
    var polygonPoints = [];
    currentPolygon = L.polyline(polygonPoints, { color: 'red' }).addTo(map);

    map.on('click', function (e) {
      polygonPoints.push(e.latlng);
      currentPolygon.setLatLngs(polygonPoints);
      updatePolygonArea(polygonPoints);
    });
  }

  // Function to update the polygon area and display it at each point
  function updatePolygonArea(points) {
    if (points.length >= 3) {
      var area = L.GeometryUtil.geodesicArea(points);
      var roundedArea = L.GeometryUtil.readableArea(area, true);
      var lastPoint = points[points.length - 1];
      var popupContent = 'Area: ' + roundedArea + '<br>Double-click to stop drawing.';
      currentPolygon.bindPopup(popupContent).openPopup(lastPoint);
    }
  }

  // Function to stop drawing and measuring
  function stopDrawing() {
    if (currentPolygon) {
      map.off('click');
      currentPolygon.disableEdit();
      currentPolygon.unbindPopup();
      currentPolygon = null;
    }
  }

  // Function to handle double-clicking on the map to stop drawing and measuring
  map.on('dblclick', function (e) {
    stopDrawing();
  });

  // Update the cursor style based on drawing and measuring state
  map.on('draw:created draw:edited measure:measurestart measure:measurestop', function (e) {
    var container = document.getElementById('map-container');
    container.classList.toggle('leaflet-draw-draw-enabled', e.type === 'draw:created');
    container.classList.toggle('leaflet-draw-edit-enabled', e.type === 'draw:edited');
    container.classList.toggle('leaflet-measure-path-measure', e.type === 'measure:measurestart');
  });

var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
    edit: {
      featureGroup: drawnItems,
      poly: {
        allowIntersection: false
      }
    },
    draw: {
      polygon: true, // Enable drawing polygons
      rectangle: true, // Disable drawing rectangles (if not needed)
      circle: true, // Disable drawing circles (if not needed)
      marker: true, // Disable drawing markers (if not needed)
      circlemarker: true // Disable drawing circle markers (if not needed)
    }
  });
  drawControl.addTo(map);

  map.on(L.Draw.Event.CREATED, function (event) {
    var layer = event.layer;
    drawnItems.addLayer(layer);
  });

