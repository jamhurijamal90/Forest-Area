ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11113138.691950, 224496.679206, 11599525.338402, 575491.487230]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Malaysia_1 = new ol.format.GeoJSON();
var features_Malaysia_1 = format_Malaysia_1.readFeatures(json_Malaysia_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Malaysia_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malaysia_1.addFeatures(features_Malaysia_1);
var lyr_Malaysia_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Malaysia_1, 
                style: style_Malaysia_1,
                popuplayertitle: 'Malaysia',
                interactive: true,
                title: '<img src="styles/legend/Malaysia_1.png" /> Malaysia'
            });
var format_Road_2 = new ol.format.GeoJSON();
var features_Road_2 = format_Road_2.readFeatures(json_Road_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Road_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Road_2.addFeatures(features_Road_2);
var lyr_Road_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Road_2, 
                style: style_Road_2,
                popuplayertitle: 'Road',
                interactive: true,
                title: '<img src="styles/legend/Road_2.png" /> Road'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Malaysia_1.setVisible(true);lyr_Road_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Malaysia_1,lyr_Road_2];
lyr_Malaysia_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', });
lyr_Road_2.set('fieldAliases', {'MED_DESCRI': 'MED_DESCRI', 'RTT_DESCRI': 'RTT_DESCRI', 'F_CODE_DES': 'F_CODE_DES', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_Malaysia_1.set('fieldImages', {'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', });
lyr_Road_2.set('fieldImages', {'MED_DESCRI': 'TextEdit', 'RTT_DESCRI': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'ISO': 'TextEdit', 'ISOCOUNTRY': 'TextEdit', });
lyr_Malaysia_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'inline label - always visible', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', });
lyr_Road_2.set('fieldLabels', {'MED_DESCRI': 'no label', 'RTT_DESCRI': 'inline label - always visible', 'F_CODE_DES': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', });
lyr_Road_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});