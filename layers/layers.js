ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11150835.054922, 224496.679206, 11561828.975429, 575491.487230]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MYS_roads_1 = new ol.format.GeoJSON();
var features_MYS_roads_1 = format_MYS_roads_1.readFeatures(json_MYS_roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MYS_roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MYS_roads_1.addFeatures(features_MYS_roads_1);
var lyr_MYS_roads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MYS_roads_1, 
                style: style_MYS_roads_1,
                popuplayertitle: 'MYS_roads',
                interactive: true,
                title: '<img src="styles/legend/MYS_roads_1.png" /> MYS_roads'
            });
var format_HSK2018_2 = new ol.format.GeoJSON();
var features_HSK2018_2 = format_HSK2018_2.readFeatures(json_HSK2018_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HSK2018_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HSK2018_2.addFeatures(features_HSK2018_2);
var lyr_HSK2018_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HSK2018_2, 
                style: style_HSK2018_2,
                popuplayertitle: 'HSK 2018',
                interactive: true,
                title: '<img src="styles/legend/HSK2018_2.png" /> HSK 2018'
            });

lyr_OSMStandard_0.setVisible(true);lyr_MYS_roads_1.setVisible(true);lyr_HSK2018_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MYS_roads_1,lyr_HSK2018_2];
lyr_MYS_roads_1.set('fieldAliases', {'MED_DESCRI': 'MED_DESCRI', 'RTT_DESCRI': 'RTT_DESCRI', 'F_CODE_DES': 'F_CODE_DES', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_HSK2018_2.set('fieldAliases', {'FID': 'FID', 'STATE': 'STATE', 'STATE_CODE': 'STATE_CODE', 'FOR_DIST': 'FOR_DIST', 'SMD_CODE': 'SMD_CODE', 'FOR_TYPE': 'FOR_TYPE', 'HSK': 'HSK', 'MUKIM': 'MUKIM', 'GZT_NO': 'GZT_NO', 'GZT_DATE': 'GZT_DATE', 'ARH': 'ARH', 'ARM': 'ARM', 'PERIMETER': 'PERIMETER', 'FOR_CODE': 'FOR_CODE', });
lyr_MYS_roads_1.set('fieldImages', {'MED_DESCRI': '', 'RTT_DESCRI': '', 'F_CODE_DES': '', 'ISO': '', 'ISOCOUNTRY': '', });
lyr_HSK2018_2.set('fieldImages', {'FID': 'TextEdit', 'STATE': 'TextEdit', 'STATE_CODE': 'TextEdit', 'FOR_DIST': 'TextEdit', 'SMD_CODE': 'TextEdit', 'FOR_TYPE': 'TextEdit', 'HSK': 'TextEdit', 'MUKIM': 'TextEdit', 'GZT_NO': 'TextEdit', 'GZT_DATE': 'TextEdit', 'ARH': 'TextEdit', 'ARM': 'TextEdit', 'PERIMETER': 'TextEdit', 'FOR_CODE': 'TextEdit', });
lyr_MYS_roads_1.set('fieldLabels', {'MED_DESCRI': 'no label', 'RTT_DESCRI': 'inline label - always visible', 'F_CODE_DES': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', });
lyr_HSK2018_2.set('fieldLabels', {'FID': 'no label', 'STATE': 'no label', 'STATE_CODE': 'no label', 'FOR_DIST': 'no label', 'SMD_CODE': 'no label', 'FOR_TYPE': 'no label', 'HSK': 'inline label - always visible', 'MUKIM': 'no label', 'GZT_NO': 'no label', 'GZT_DATE': 'no label', 'ARH': 'no label', 'ARM': 'no label', 'PERIMETER': 'no label', 'FOR_CODE': 'no label', });
lyr_HSK2018_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});