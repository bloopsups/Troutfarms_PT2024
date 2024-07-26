var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Border_1 = new ol.format.GeoJSON();
var features_Border_1 = format_Border_1.readFeatures(json_Border_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Border_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Border_1.addFeatures(features_Border_1);
var lyr_Border_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Border_1, 
                style: style_Border_1,
                popuplayertitle: "Border",
                interactive: true,
                    title: '<img src="styles/legend/Border_1.png" /> Border'
                });
var format_SurfaceWaterBody_NorthCentre_2 = new ol.format.GeoJSON();
var features_SurfaceWaterBody_NorthCentre_2 = format_SurfaceWaterBody_NorthCentre_2.readFeatures(json_SurfaceWaterBody_NorthCentre_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SurfaceWaterBody_NorthCentre_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SurfaceWaterBody_NorthCentre_2.addFeatures(features_SurfaceWaterBody_NorthCentre_2);
var lyr_SurfaceWaterBody_NorthCentre_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SurfaceWaterBody_NorthCentre_2, 
                style: style_SurfaceWaterBody_NorthCentre_2,
                popuplayertitle: "SurfaceWaterBody_NorthCentre",
                interactive: true,
                    title: '<img src="styles/legend/SurfaceWaterBody_NorthCentre_2.png" /> SurfaceWaterBody_NorthCentre'
                });
var format_Inlandaquacultures_3 = new ol.format.GeoJSON();
var features_Inlandaquacultures_3 = format_Inlandaquacultures_3.readFeatures(json_Inlandaquacultures_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inlandaquacultures_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inlandaquacultures_3.addFeatures(features_Inlandaquacultures_3);
var lyr_Inlandaquacultures_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inlandaquacultures_3, 
                style: style_Inlandaquacultures_3,
                popuplayertitle: "Inland aquacultures",
                interactive: true,
    title: 'Inland aquacultures<br />\
    <img src="styles/legend/Inlandaquacultures_3_0.png" /> ?<br />\
    <img src="styles/legend/Inlandaquacultures_3_1.png" /> Conservation<br />\
    <img src="styles/legend/Inlandaquacultures_3_2.png" /> Recreational fishing<br />\
    <img src="styles/legend/Inlandaquacultures_3_3.png" /> Restaurant<br />\
    <img src="styles/legend/Inlandaquacultures_3_4.png" /> Self consumption?<br />\
    <img src="styles/legend/Inlandaquacultures_3_5.png" /> Trout farm<br />\
    <img src="styles/legend/Inlandaquacultures_3_6.png" /> <br />'
        });

lyr_GoogleSatellite_0.setVisible(true);lyr_Border_1.setVisible(true);lyr_SurfaceWaterBody_NorthCentre_2.setVisible(true);lyr_Inlandaquacultures_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Border_1,lyr_SurfaceWaterBody_NorthCentre_2,lyr_Inlandaquacultures_3];
lyr_Border_1.set('fieldAliases', {'length': 'length', 'st_length_': 'st_length_', });
lyr_SurfaceWaterBody_NorthCentre_2.set('fieldAliases', {'fid': 'fid', 'codigo': 'codigo', 'nome': 'nome', 'regiao_hid': 'regiao_hid', 'natur_fm_a': 'natur_fm_a', 'transfront': 'transfront', 'est_pot_ec': 'est_pot_ec', 'estado_qui': 'estado_qui', 'st_length_': 'st_length_', });
lyr_Inlandaquacultures_3.set('fieldAliases', {'fid': 'fid', 'name': 'name', 'Category': 'Category', });
lyr_Border_1.set('fieldImages', {'length': '', 'st_length_': '', });
lyr_SurfaceWaterBody_NorthCentre_2.set('fieldImages', {'fid': 'TextEdit', 'codigo': 'TextEdit', 'nome': 'TextEdit', 'regiao_hid': 'TextEdit', 'natur_fm_a': 'TextEdit', 'transfront': 'TextEdit', 'est_pot_ec': 'TextEdit', 'estado_qui': 'TextEdit', 'st_length_': 'TextEdit', });
lyr_Inlandaquacultures_3.set('fieldImages', {'fid': 'TextEdit', 'name': 'TextEdit', 'Category': 'TextEdit', });
lyr_Border_1.set('fieldLabels', {'length': 'no label', 'st_length_': 'no label', });
lyr_SurfaceWaterBody_NorthCentre_2.set('fieldLabels', {'fid': 'no label', 'codigo': 'no label', 'nome': 'no label', 'regiao_hid': 'no label', 'natur_fm_a': 'no label', 'transfront': 'no label', 'est_pot_ec': 'no label', 'estado_qui': 'no label', 'st_length_': 'no label', });
lyr_Inlandaquacultures_3.set('fieldLabels', {'fid': 'no label', 'name': 'no label', 'Category': 'no label', });
lyr_Inlandaquacultures_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});