var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Tes_1 = new ol.format.GeoJSON();
var features_Tes_1 = format_Tes_1.readFeatures(json_Tes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tes_1.addFeatures(features_Tes_1);
var lyr_Tes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tes_1, 
                style: style_Tes_1,
                interactive: true,
    title: 'Tes<br />\
    <img src="styles/legend/Tes_1_0.png" /> Permanent Footbradge<br />\
    <img src="styles/legend/Tes_1_1.png" /> Permanent Road Bridge<br />\
    <img src="styles/legend/Tes_1_2.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_Tes_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Tes_1];
lyr_Tes_1.set('fieldAliases', {'Number': 'Number', 'Tanggal': 'Tanggal', 'Village_Rt': 'Village_Rt', 'Longitude_': 'Longitude_', 'Latitude__': 'Latitude__', 'Type_of_Br': 'Type_of_Br', 'Building_C': 'Building_C', 'Name_of_ow': 'Name_of_ow', 'Name_of_in': 'Name_of_in', 'Status': 'Status', 'Submitted_': 'Submitted_', 'Photo1': 'Photo1', });
lyr_Tes_1.set('fieldImages', {'Number': 'TextEdit', 'Tanggal': 'TextEdit', 'Village_Rt': 'TextEdit', 'Longitude_': 'TextEdit', 'Latitude__': 'TextEdit', 'Type_of_Br': 'TextEdit', 'Building_C': 'TextEdit', 'Name_of_ow': 'TextEdit', 'Name_of_in': 'TextEdit', 'Status': 'TextEdit', 'Submitted_': 'TextEdit', 'Photo1': 'ExternalResource', });
lyr_Tes_1.set('fieldLabels', {'Number': 'inline label', 'Tanggal': 'inline label', 'Village_Rt': 'inline label', 'Longitude_': 'inline label', 'Latitude__': 'inline label', 'Type_of_Br': 'inline label', 'Building_C': 'inline label', 'Name_of_ow': 'inline label', 'Name_of_in': 'inline label', 'Status': 'inline label', 'Submitted_': 'inline label', 'Photo1': 'header label', });
lyr_Tes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});