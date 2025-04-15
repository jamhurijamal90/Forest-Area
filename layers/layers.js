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
var format_Peatland_3 = new ol.format.GeoJSON();
var features_Peatland_3 = format_Peatland_3.readFeatures(json_Peatland_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Peatland_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Peatland_3.addFeatures(features_Peatland_3);
var lyr_Peatland_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Peatland_3, 
                style: style_Peatland_3,
                popuplayertitle: 'Peatland',
                interactive: true,
                title: '<img src="styles/legend/Peatland_3.png" /> Peatland'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Malaysia_1.setVisible(true);lyr_Road_2.setVisible(true);lyr_Peatland_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Malaysia_1,lyr_Road_2,lyr_Peatland_3];
lyr_Malaysia_1.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', });
lyr_Road_2.set('fieldAliases', {'MED_DESCRI': 'MED_DESCRI', 'RTT_DESCRI': 'RTT_DESCRI', 'F_CODE_DES': 'F_CODE_DES', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_Peatland_3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'FID_1': 'FID_1', 'STATE': 'STATE', 'STATE_CODE': 'STATE_CODE', 'FOR_DIST': 'FOR_DIST', 'SMD_CODE': 'SMD_CODE', 'FOR_TYPE': 'FOR_TYPE', 'HSK': 'HSK', 'MUKIM': 'MUKIM', 'GZT_NO': 'GZT_NO', 'GZT_DATE': 'GZT_DATE', 'ARH': 'ARH', 'ARM': 'ARM', 'PERIMETER': 'PERIMETER', 'FOR_CODE': 'FOR_CODE', 'Area': 'Area', 'objectid_2': 'objectid_2', 'objectid': 'objectid', 'layer_revi': 'layer_revi', 'shape_leng': 'shape_leng', 'globalid': 'globalid', 'shape_Le_1': 'shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', 'RECSOL_COD': 'RECSOL_COD', 'SOIL_ABBR': 'SOIL_ABBR', 'NAMA_SIRI': 'NAMA_SIRI', 'SIRI_NAME': 'SIRI_NAME', });
lyr_Malaysia_1.set('fieldImages', {'ID_0': 'Range', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'Range', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', });
lyr_Road_2.set('fieldImages', {'MED_DESCRI': 'TextEdit', 'RTT_DESCRI': 'TextEdit', 'F_CODE_DES': 'TextEdit', 'ISO': 'TextEdit', 'ISOCOUNTRY': 'TextEdit', });
lyr_Peatland_3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'FID_1': 'TextEdit', 'STATE': 'TextEdit', 'STATE_CODE': 'TextEdit', 'FOR_DIST': 'TextEdit', 'SMD_CODE': 'TextEdit', 'FOR_TYPE': 'TextEdit', 'HSK': 'TextEdit', 'MUKIM': 'TextEdit', 'GZT_NO': 'TextEdit', 'GZT_DATE': 'TextEdit', 'ARH': 'TextEdit', 'ARM': 'TextEdit', 'PERIMETER': 'TextEdit', 'FOR_CODE': 'TextEdit', 'Area': 'TextEdit', 'objectid_2': 'Range', 'objectid': 'Range', 'layer_revi': 'TextEdit', 'shape_leng': 'TextEdit', 'globalid': 'TextEdit', 'shape_Le_1': 'TextEdit', 'Shape_Le_2': 'TextEdit', 'Shape_Area': 'TextEdit', 'RECSOL_COD': 'Range', 'SOIL_ABBR': 'TextEdit', 'NAMA_SIRI': 'TextEdit', 'SIRI_NAME': 'TextEdit', });
lyr_Malaysia_1.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'inline label - always visible', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', });
lyr_Road_2.set('fieldLabels', {'MED_DESCRI': 'no label', 'RTT_DESCRI': 'inline label - always visible', 'F_CODE_DES': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', });
lyr_Peatland_3.set('fieldLabels', {'OBJECTID_1': 'no label', 'FID_1': 'no label', 'STATE': 'no label', 'STATE_CODE': 'no label', 'FOR_DIST': 'no label', 'SMD_CODE': 'inline label - always visible', 'FOR_TYPE': 'inline label - visible with data', 'HSK': 'no label', 'MUKIM': 'no label', 'GZT_NO': 'no label', 'GZT_DATE': 'no label', 'ARH': 'no label', 'ARM': 'no label', 'PERIMETER': 'no label', 'FOR_CODE': 'no label', 'Area': 'no label', 'objectid_2': 'no label', 'objectid': 'no label', 'layer_revi': 'no label', 'shape_leng': 'no label', 'globalid': 'no label', 'shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', 'RECSOL_COD': 'no label', 'SOIL_ABBR': 'no label', 'NAMA_SIRI': 'no label', 'SIRI_NAME': 'no label', });
lyr_Peatland_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});