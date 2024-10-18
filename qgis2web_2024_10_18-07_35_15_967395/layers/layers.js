var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Reclass_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Reclass",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Reclass_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [10647370.157428, 1951076.388084, 10824257.115517, 2345372.835738]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Reclass_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Reclass_1];
