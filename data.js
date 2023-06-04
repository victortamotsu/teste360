var APP_DATA = {
  "scenes": [
    {
      "id": "0-ponte",
      "name": "Ponte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 809.5,
      "initialViewParameters": {
        "yaw": 0.34492154004253095,
        "pitch": 0.018179815681222067,
        "fov": 1.2820191017947098
      },
      "linkHotspots": [
        {
          "yaw": -2.118422468311582,
          "pitch": 0.40953176710578987,
          "rotation": 0,
          "target": "1-telefrico"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.45666218157410654,
          "pitch": -0.3170760193846487,
          "title": "Ponte do Brooklyn",
          "text": "Ponte bonita"
        },
        {
          "yaw": 0.9689280900654413,
          "pitch": -0.09753006580372237,
          "title": "Prédi legal",
          "text": "Muito legal"
        },
        {
          "yaw": 0.79000338398453,
          "pitch": 0.3567478815137086,
          "title": "Moça bonita",
          "text": "De vermelho"
        }
      ]
    },
    {
      "id": "1-telefrico",
      "name": "Teleférico",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 787.5,
      "initialViewParameters": {
        "yaw": -1.8302241765135445,
        "pitch": 0.21615525568017446,
        "fov": 1.2820191017947098
      },
      "linkHotspots": [
        {
          "yaw": -2.9761277673294106,
          "pitch": 0.6294507654549122,
          "rotation": 0,
          "target": "0-ponte"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.6084810832485346,
          "pitch": 0.09495012556510751,
          "title": "Teleférico da Roosevelt Island",
          "text": "Custa $ 2,58"
        },
        {
          "yaw": 1.2241684230204317,
          "pitch": 0.3793703125158885,
          "title": "Placa",
          "text": "Não entre"
        }
      ]
    }
  ],
  "name": "Teste360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
