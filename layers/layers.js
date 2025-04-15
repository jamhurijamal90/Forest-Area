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
var format_Malaysia_Shapefile_2 = new ol.format.GeoJSON();
var features_Malaysia_Shapefile_2 = format_Malaysia_Shapefile_2.readFeatures(json_Malaysia_Shapefile_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Malaysia_Shapefile_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malaysia_Shapefile_2.addFeatures(features_Malaysia_Shapefile_2);
var lyr_Malaysia_Shapefile_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Malaysia_Shapefile_2, 
                style: style_Malaysia_Shapefile_2,
                popuplayertitle: 'Malaysia_Shapefile',
                interactive: true,
                title: '<img src="styles/legend/Malaysia_Shapefile_2.png" /> Malaysia_Shapefile'
            });

lyr_OSMStandard_0.setVisible(true);lyr_MYS_roads_1.setVisible(true);lyr_Malaysia_Shapefile_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MYS_roads_1,lyr_Malaysia_Shapefile_2];
lyr_MYS_roads_1.set('fieldAliases', {'MED_DESCRI': 'MED_DESCRI', 'RTT_DESCRI': 'RTT_DESCRI', 'F_CODE_DES': 'F_CODE_DES', 'ISO': 'ISO', 'ISOCOUNTRY': 'ISOCOUNTRY', });
lyr_Malaysia_Shapefile_2.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', });
lyr_MYS_roads_1.set('fieldImages', {'MED_DESCRI': '', 'RTT_DESCRI': '', 'F_CODE_DES': '', 'ISO': '', 'ISOCOUNTRY': '', });
lyr_Malaysia_Shapefile_2.set('fieldImages', {'ID_0': '', 'ISO': '', 'NAME_0': '', 'ID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'VARNAME_1': '', 'TYPE_1': '', 'ENGTYPE_1': '', });
lyr_MYS_roads_1.set('fieldLabels', {'MED_DESCRI': 'no label', 'RTT_DESCRI': 'inline label - always visible', 'F_CODE_DES': 'no label', 'ISO': 'no label', 'ISOCOUNTRY': 'no label', });
lyr_Malaysia_Shapefile_2.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'inline label - always visible', 'ID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', });
lyr_Malaysia_Shapefile_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});