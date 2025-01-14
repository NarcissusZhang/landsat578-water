// author: xin luo
// created: 2020.11.25
// des: check the selected landsat images

////////////////////////////////////////////////////////////////
// ----------- Source images and scene region
// ----------- Landsat 8
// scene 01
var l8_region_01 = ee.Geometry.Rectangle(97.65, 34.66, 98.19, 35.08)
var l8_scene_01 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_134036_20191017').clip(l8_region_01)
print('l8_scene_01',l8_scene_01)

// scene 02
var l8_region_02 = ee.Geometry.Rectangle(32.44, 48.89, 33.22, 49.39)
var l8_scene_02 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_179026_20190825').clip(l8_region_02)
print('l8_scene_02:',l8_scene_02)

// scene 03
var l8_region_03 = ee.Geometry.Rectangle(-100.80, 45.96, -100.25, 46.33)
var l8_scene_03 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_032028_20190819').clip(l8_region_03)
print('l8_scene_03:',l8_scene_03)

// scene 04
var l8_region_04 = ee.Geometry.Rectangle(-62.32, -4.44, -61.87, -4.04)
var l8_scene_04 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_232063_20170806').clip(l8_region_04)
print('l8_scene_04:',l8_scene_04)

// scene 05
var l8_region_05 = ee.Geometry.Rectangle(-4.32, 15.14, -3.85, 15.52)
var l8_scene_05 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_197049_20150508').clip(l8_region_05)
print('l8_scene_05:',l8_scene_05)

// scene 06
var l8_region_06 = ee.Geometry.Rectangle(24.76, -21.40, 25.17, -21.05)
var l8_scene_06 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_173075_20171012').clip(l8_region_06)
print('l8_scene_06:',l8_scene_06)

// scene 07
var l8_region_07 = ee.Geometry.Rectangle(174.61, -37.08, 175.09, -36.73)
var l8_scene_07 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_073086_20181018').clip(l8_region_07)
print('l8_scene_07:',l8_scene_07)

// scene 08
var l8_region_08 = ee.Geometry.Rectangle(85.95, 68.24, 86.81, 68.53)
var l8_scene_08 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_153012_20190718').clip(l8_region_08)
print('l8_scene_08:',l8_scene_08)

// scene 09
var l8_region_09 = ee.Geometry.Rectangle(-127.21, 64.93, -126.28, 65.27)
var l8_scene_09 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_056014_20150528').clip(l8_region_09)
print('l8_scene_09:',l8_scene_09)

// scene 10
var l8_region_10 = ee.Geometry.Rectangle(139.87, 51.76, 140.42, 52.07)
var l8_scene_10 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_110024_20161016').clip(l8_region_10)
print('l8_scene_10:',l8_scene_10)

// scene 11
var l8_region_11 = ee.Geometry.Rectangle(72.34, 33.91, 72.83, 34.24)   
var l8_scene_11 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_150036_20151006').clip(l8_region_11)
print('l8_scene_11:',l8_scene_11)

// scene 12
var l8_region_12 = ee.Geometry.Rectangle(-0.756, 44.79, -0.24, 45.12)
var l8_scene_12 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_200029_20150716').clip(l8_region_12)
print('l8_scene_12:',l8_scene_12)

// scene 13
var l8_region_13 = ee.Geometry.Rectangle(26.42, 40.19, 26.91, 40.51)
var l8_scene_13 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_181032_20150711').clip(l8_region_13)
print('l8_scene_13:',l8_scene_13)

// scene 14
var l8_region_14 = ee.Geometry.Rectangle(69.28, -49.41, 69.75, -49.11)
var l8_scene_14 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_139094_20160402').clip(l8_region_14)
print('l8_scene_14:',l8_scene_14)

// scene 15
var l8_region_15 = ee.Geometry.Rectangle(33.96, -0.24, 34.33, 0.1);
var l8_scene_15 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_170060_20150815').clip(l8_region_15);
print('l8_scene_15:',l8_scene_15);

// scene 16
var l8_region_16 = ee.Geometry.Rectangle(-54.59, -25.16, -54.18, -24.80);
var l8_scene_16 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_224077_20150622').clip(l8_region_16);
print('l8_scene_16:',l8_scene_16);


// scene 17
var l8_region_17 = ee.Geometry.Rectangle(49.81, 61.95, 50.65, 62.28);
var l8_scene_17 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_172017_20150914').clip(l8_region_17);
print('l8_scene_17:',l8_scene_17);


// scene 18
var l8_region_18 = ee.Geometry.Rectangle(-69.24, -16.40, -68.85, -16.06);
var l8_scene_18 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_002071_20180713').clip(l8_region_18);
print('l8_scene_18:',l8_scene_18);


// scene 19
var l8_region_19 = ee.Geometry.Rectangle(79.50, 11.16, 79.88, 11.5);
var l8_scene_19 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_142052_20180904').clip(l8_region_19);
print('l8_scene_19:',l8_scene_19);


// scene 20
var l8_region_20 = ee.Geometry.Rectangle(128.41, 72.06, 129.45, 72.36);
var l8_scene_20 = ee.Image('LANDSAT/LC08/C01/T1_SR/LC08_130009_20190615').clip(l8_region_20);
print('l8_scene_20:',l8_scene_20);




// ------ Landsat 7
// scene 01
var l7_region_01 = ee.Geometry.Rectangle(101.70, 56.80, 102.35, 57.13)
var l7_scene_01 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_137020_19990719').clip(l7_region_01)
print('l7_scene_01', l7_scene_01)

// scene 02
var l7_region_02 = ee.Geometry.Rectangle(31.82, 65.87, 32.63, 66.18)
var l7_scene_02 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_186014_20020515').clip(l7_region_02)
print('l7_scene_02', l7_scene_02)

// scene 03
var l7_region_03 = ee.Geometry.Rectangle(32.53, -2.73, 32.95, -2.33)
var l7_scene_03 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_171062_20001007').clip(l7_region_03)
print('l7_scene_03', l7_scene_03)

// scene 04
var l7_region_04 = ee.Geometry.Rectangle(-75.14, -48.95, -74.54, -48.59)
var l7_scene_04 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_232094_20010514').clip(l7_region_04)
print('l7_scene_04', l7_scene_04)

// scene 05
var l7_region_05 = ee.Geometry.Rectangle(104.93, 11.04, 105.37, 11.42)
var l7_scene_05 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_126052_20020308').clip(l7_region_05)
print('l7_scene_05', l7_scene_05)

// scene 06
var l7_region_06 = ee.Geometry.Rectangle(-76.22, 39.32, -75.78, 39.63)
var l7_scene_06 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_014033_20010523').clip(l7_region_06)
print('l7_scene_06', l7_scene_06)

// scene 07
var l7_region_07 = ee.Geometry.Rectangle(-85.71, 77.77, -83.93, 78.14)
var l7_scene_07 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_045004_20100813').clip(l7_region_07)
print('l7_scene_07', l7_scene_07)

// scene 08
var l7_region_08 = ee.Geometry.Rectangle(47.36, 30.59, 47.77, 30.90)
var l7_scene_08 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_166039_20010516').clip(l7_region_08)
print('l7_scene_08', l7_scene_08)

// scene 09
var l7_region_09 = ee.Geometry.Rectangle(154.27, 67.82, 155.16, 68.13)
var l7_scene_09 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_109012_20010704').clip(l7_region_09)
print('l7_scene_09', l7_scene_09)


// scene 10
var l7_region_10 = ee.Geometry.Rectangle(-51.67, -20.77, -51.30, -20.45)
var l7_scene_10 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_223074_20000715').clip(l7_region_10)
print('l7_scene_10', l7_scene_10)

// scene 11
var l7_region_11 = ee.Geometry.Rectangle(31.98, 22.59, 32.34, 22.89)
var l7_scene_11 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_175044_20000325').clip(l7_region_11)
print('l7_scene_11', l7_scene_11)

// scene 12
var l7_region_12 = ee.Geometry.Rectangle(-52.17, 67.86, -51.31, 68.16)
var l7_scene_12 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_008012_20010630').clip(l7_region_12)
print('l7_scene_12', l7_scene_12)


// scene 13
var l7_region_13 = ee.Geometry.Rectangle(143.96, -33.25, 144.33, -32.96)
var l7_scene_13 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_094083_20000403').clip(l7_region_13)
print('l7_scene_13', l7_scene_13)

// scene 14
var l7_region_14 = ee.Geometry.Rectangle(8.50, 4.46, 8.82, 4.75)
var l7_scene_14 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_187057_20001210').clip(l7_region_14)
print('l7_scene_14', l7_scene_14)

// scene 15
var l7_region_15 = ee.Geometry.Rectangle(-93.93, 16.99, -93.58, 17.3)
var l7_scene_15 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_022048_20000325').clip(l7_region_15)
print('l7_scene_15', l7_scene_15)

// scene 16
var l7_region_16 = ee.Geometry.Rectangle(117.38, 4.08, 117.7, 4.36)
var l7_scene_16 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_117057_20010626').clip(l7_region_16)
print('l7_scene_16', l7_scene_16)

// scene 17
var l7_region_17 = ee.Geometry.Rectangle(87.79, 43.32, 88.24, 43.6)
var l7_scene_17 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_142030_20010305').clip(l7_region_17)
print('l7_scene_17', l7_scene_17)

// scene 18
var l7_region_18 = ee.Geometry.Rectangle(111.08, 62.69, 111.82, 62.99)
var l7_scene_18 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_142030_20010305').clip(l7_region_18)
print('l7_scene_18', l7_scene_18)

// scene 19
var l7_region_19 = ee.Geometry.Rectangle(90.30, 35.0, 90.7, 35.3)
var l7_scene_19 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_139036_20000414').clip(l7_region_19)
print('l7_scene_19', l7_scene_19)

// scene 20
var l7_region_20 = ee.Geometry.Rectangle(119.94, 31.45, 120.31, 31.73);
var l7_scene_20 = ee.Image('LANDSAT/LE07/C01/T1_SR/LE07_119038_20000301').clip(l7_region_20);
print('l7_scene_20', l7_scene_20);





// ------ Landsat 5
// scene 01
var l5_region_01 = ee.Geometry.Rectangle(119.37, -29.26, 119.77, -28.93);
var l5_scene_01 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_111080_19950507').clip(l5_region_01);
print('l5_scene_01', l5_scene_01);

// scene 02
var l5_region_02 = ee.Geometry.Rectangle(66.04, 59.72, 66.72, 60.04);
var l5_scene_02 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_162018_19880727').clip(l5_region_02);
print('l5_scene_02', l5_scene_02);

// scene 03
var l5_region_03 = ee.Geometry.Rectangle(61.5, 45.87, 62.05, 46.22);
var l5_scene_03 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_160028_20010818').clip(l5_region_03);
print('l5_scene_03', l5_scene_03);

// scene 04
var l5_region_04 = ee.Geometry.Rectangle(125.07, 63.80, 125.81, 64.10);
var l5_scene_04 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_125015_20070814').clip(l5_region_04);
print('l5_scene_04', l5_scene_04);

// scene 05
var l5_region_05 = ee.Geometry.Rectangle(113.74, 22.44, 114.09, 22.72);
var l5_scene_05 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_122044_20110921').clip(l5_region_05);
print('l5_scene_05', l5_scene_05);

// scene 06
var l5_region_06 = ee.Geometry.Rectangle(-95.43, 63.69, -94.73, 63.97);
var l5_scene_06 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_034015_20060712').clip(l5_region_06);
print('l5_scene_06', l5_scene_06);


// scene 07
var l5_region_07 = ee.Geometry.Rectangle(-113.33, 26.73, -112.91, 27.07);
var l5_scene_07 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_036041_19870924').clip(l5_region_07);
print('l5_scene_07', l5_scene_07);

// scene 08
var l5_region_08 = ee.Geometry.Rectangle(0.46, 33.98, 0.98, 34.36);
var l5_scene_08 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_197036_19950517').clip(l5_region_08);
print('l5_scene_08', l5_scene_08);

// scene 09
var l5_region_09 = ee.Geometry.Rectangle(-22.2, 75.22, -20.92, 75.53);
var l5_scene_09 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_233006_19850821').clip(l5_region_09);
print('l5_scene_09', l5_scene_09);

// scene 10
var l5_region_10 = ee.Geometry.Rectangle(127.65, 37.80, 128.2, 38.18);
var l5_scene_10 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_115034_19851014').clip(l5_region_10);
print('l5_scene_10', l5_scene_10);

// scene 11
var l5_region_11 = ee.Geometry.Rectangle(139.05, -7.3, 139.4, -6.99);
var l5_scene_11 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_101065_19890601').clip(l5_region_11);
print('l5_scene_11', l5_scene_11);

// scene 12
var l5_region_12 = ee.Geometry.Rectangle(-91.05, 29.18, -90.67, 29.50);
var l5_scene_12 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_022040_19960322').clip(l5_region_12);
print('l5_scene_12', l5_scene_12);

// scene 13
var l5_region_13 = ee.Geometry.Rectangle(116.38, 43.16, 116.82, 43.48);
var l5_scene_13 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_124030_20020606').clip(l5_region_13);
print('l5_scene_13', l5_scene_13);

// scene 14
var l5_region_14 = ee.Geometry.Rectangle(6.82, 60.92, 7.52, 61.23);
var l5_scene_14 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_200017_20060605').clip(l5_region_14);
print('l5_scene_14', l5_scene_14);

// scene 15
var l5_region_15 = ee.Geometry.Rectangle(6.82, 60.92, 7.52, 61.23);
var l5_scene_15 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_025038_19840529').clip(l5_region_15);
print('l5_scene_15', l5_scene_15);

// scene 16
var l5_region_16 = ee.Geometry.Rectangle(6.82, 60.92, 7.52, 61.23);
var l5_scene_16 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_108017_20090727').clip(l5_region_16);
print('l5_scene_16', l5_scene_16);

// scene 17
var l5_region_17 = ee.Geometry.Rectangle(38.66, 59.8, 39.33, 60.1);
var l5_scene_17 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_178018_19860503').clip(l5_region_17);
print('l5_scene_17', l5_scene_17);


// scene 18
var l5_region_18 = ee.Geometry.Rectangle(89.58, 23.61, 89.97, 23.93);
var l5_scene_18 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_137044_19890221').clip(l5_region_18);
print('l5_scene_18', l5_scene_18);


// scene 19
var l5_region_19 = ee.Geometry.Rectangle(-100.82, 75.32, -99.53, 75.62);
var l5_scene_19 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_049006_19930903').clip(l5_region_19);
print('l5_scene_19', l5_scene_19);


// scene 20
var l5_region_20 = ee.Geometry.Rectangle(46.03, 40.78, 46.45, 41.07);
var l5_scene_20 = ee.Image('LANDSAT/LT05/C01/T1_SR/LT05_169032_20000204').clip(l5_region_20);
print('l5_scene_20', l5_scene_20);



//////////////////////////////////////////////////////////
// ------------- Visualization -------------
// --------- Landsat 8 -----------
Map.setCenter(17.80, 42.54, 2);
var empty = ee.Image().byte();
// scene 01
var l8_scene_01_outline = empty.paint({
    featureCollection: l8_region_01, color: 1, width: 3});
Map.addLayer(l8_scene_01_outline, {palette: 'FF0000'}, 'l8_scene_01_outline');
// Map.addLayer(l8_scene_01, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 01');

// scene 02
var l8_scene_02_outline = empty.paint({
    featureCollection: l8_region_02, color: 1, width: 3});
Map.addLayer(l8_scene_02_outline, {palette: 'FF0000'}, 'l8_scene_02_outline');
// Map.addLayer(l8_scene_02, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 02');

// scene 03
var l8_scene_03_outline = empty.paint({
    featureCollection: l8_region_03, color: 1, width: 3});
Map.addLayer(l8_scene_03_outline, {palette: 'FF0000'}, 'l8_scene_03_outline');
// Map.addLayer(l8_scene_03, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 03');

// scene 04
var l8_scene_04_outline = empty.paint({
    featureCollection: l8_region_04, color: 1, width: 3});
Map.addLayer(l8_scene_04_outline, {palette: 'FF0000'}, 'l8_scene_04_outline');
// Map.addLayer(l8_scene_04, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 04');

// scene 05
var l8_scene_05_outline = empty.paint({
    featureCollection: l8_region_05, color: 1, width: 3});
Map.addLayer(l8_scene_05_outline, {palette: 'FF0000'}, 'l8_scene_05_outline');
// Map.addLayer(l8_scene_05, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 05');

// scene 06
var l8_scene_06_outline = empty.paint({
    featureCollection: l8_region_06, color: 1, width: 3});
Map.addLayer(l8_scene_06_outline, {palette: 'FF0000'}, 'l8_scene_06_outline');
// Map.addLayer(l8_scene_06, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 06');

// scene 07
var l8_scene_07_outline = empty.paint({
    featureCollection: l8_region_07, color: 1, width: 3});
Map.addLayer(l8_scene_07_outline, {palette: 'FF0000'}, 'l8_scene_07_outline');
// Map.addLayer(l8_scene_07, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 07');

// scene 08
var l8_scene_08_outline = empty.paint({
    featureCollection: l8_region_08, color: 1, width: 3});
Map.addLayer(l8_scene_08_outline, {palette: 'FF0000'}, 'l8_scene_08_outline');
// Map.addLayer(l8_scene_08, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 08');

// scene 09
var l8_scene_09_outline = empty.paint({
    featureCollection: l8_region_09, color: 1, width: 3});
Map.addLayer(l8_scene_09_outline, {palette: 'FF0000'}, 'l8_scene_09_outline');
// Map.addLayer(l8_scene_09, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 09');

// scene 10
var l8_scene_10_outline = empty.paint({
    featureCollection: l8_region_10, color: 1, width: 3});
Map.addLayer(l8_scene_10_outline, {palette: 'FF0000'}, 'l8_scene_10_outline');
// Map.addLayer(l8_scene_10, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 10');

// scene 11
var l8_scene_11_outline = empty.paint({
    featureCollection: l8_region_11, color: 1, width: 3});
Map.addLayer(l8_scene_11_outline, {palette: 'FF0000'}, 'l8_scene_11_outline');
// Map.addLayer(l8_scene_11, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 11');

// scene 12
var l8_scene_12_outline = empty.paint({
    featureCollection: l8_region_12, color: 1, width: 3});
Map.addLayer(l8_scene_12_outline, {palette: 'FF0000'}, 'l8_scene_12_outline');
// Map.addLayer(l8_scene_12, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 12');

// scene 13
var l8_scene_13_outline = empty.paint({
    featureCollection: l8_region_13, color: 1, width: 3});
Map.addLayer(l8_scene_13_outline, {palette: 'FF0000'}, 'l8_scene_13_outline');
// Map.addLayer(l8_scene_13, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 13');

// scene 14
var l8_scene_14_outline = empty.paint({
    featureCollection: l8_region_14, color: 1, width: 3});
Map.addLayer(l8_scene_14_outline, {palette: 'FF0000'}, 'l8_scene_14_outline');
// Map.addLayer(l8_scene_14, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 14');

// scene 15
var l8_scene_15_outline = empty.paint({
    featureCollection: l8_region_15, color: 1, width: 3});
Map.addLayer(l8_scene_15_outline, {palette: 'FF0000'}, 'l8_scene_15_outline');
Map.addLayer(l8_scene_15, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 15');

// scene 16
var l8_scene_16_outline = empty.paint({
    featureCollection: l8_region_16, color: 1, width: 3});
Map.addLayer(l8_scene_16_outline, {palette: 'FF0000'}, 'l8_scene_16_outline');
// Map.addLayer(l8_scene_16, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 16');

// scene 17
var l8_scene_17_outline = empty.paint({
    featureCollection: l8_region_17, color: 1, width: 3});
Map.addLayer(l8_scene_17_outline, {palette: 'FF0000'}, 'l8_scene_17_outline');
// Map.addLayer(l8_scene_17, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 17');

// scene 18
var l8_scene_18_outline = empty.paint({
    featureCollection: l8_region_18, color: 1, width: 3});
Map.addLayer(l8_scene_18_outline, {palette: 'FF0000'}, 'l8_scene_18_outline');
// Map.addLayer(l8_scene_18, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 18');

// scene 19
var l8_scene_19_outline = empty.paint({
    featureCollection: l8_region_19, color: 1, width: 3});
Map.addLayer(l8_scene_19_outline, {palette: 'FF0000'}, 'l8_scene_19_outline');
// Map.addLayer(l8_scene_19, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 19');

// scene 20
var l8_scene_20_outline = empty.paint({
    featureCollection: l8_region_20, color: 1, width: 3});
Map.addLayer(l8_scene_20_outline, {palette: 'FF0000'}, 'l8_scene_20_outline');
// Map.addLayer(l8_scene_20, {bands:['B5','B4','B3'], max:3000, min:0}, 'l8 scene 20');



//// ---------- Landsat 7 -----------
// scene 01
var l7_scene_01_outline = empty.paint({
    featureCollection: l7_region_01, color: 1, width: 3});
Map.addLayer(l7_scene_01_outline, {palette: 'FFFF00'}, 'l7_scene_01_outline');
// Map.addLayer(l7_scene_01, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 01');

// scene 02
var l7_scene_02_outline = empty.paint({
    featureCollection: l7_region_02, color: 1, width: 3});
Map.addLayer(l7_scene_02_outline, {palette: 'FFFF00'}, 'l7_scene_02_outline');
// Map.addLayer(l7_scene_02, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 02');

// scene 03
var l7_scene_03_outline = empty.paint({
    featureCollection: l7_region_03, color: 1, width: 3});
Map.addLayer(l7_scene_03_outline, {palette: 'FFFF00'}, 'l7_scene_03_outline');
// Map.addLayer(l7_scene_03, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 03');

// scene 04
var l7_scene_04_outline = empty.paint({
    featureCollection: l7_region_04, color: 1, width: 3});
Map.addLayer(l7_scene_04_outline, {palette: 'FFFF00'}, 'l7_scene_04_outline');
// Map.addLayer(l7_scene_04, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 04');

// scene 05
var l7_scene_05_outline = empty.paint({
    featureCollection: l7_region_05, color: 1, width: 3});
Map.addLayer(l7_scene_05_outline, {palette: 'FFFF00'}, 'l7_scene_05_outline');
// Map.addLayer(l7_scene_05, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 05');

// scene 06
var l7_scene_06_outline = empty.paint({
    featureCollection: l7_region_06, color: 1, width: 3});
Map.addLayer(l7_scene_06_outline, {palette: 'FFFF00'}, 'l7_scene_06_outline');
// Map.addLayer(l7_scene_06, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 06');

// scene 07
var l7_scene_07_outline = empty.paint({
    featureCollection: l7_region_07, color: 1, width: 3});
Map.addLayer(l7_scene_07_outline, {palette: 'FFFF00'}, 'l7_scene_07_outline');
// Map.addLayer(l7_scene_07, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 07');

// scene 08
var l7_scene_08_outline = empty.paint({
    featureCollection: l7_region_08, color: 1, width: 3});
Map.addLayer(l7_scene_08_outline, {palette: 'FFFF00'}, 'l7_scene_08_outline');
// Map.addLayer(l7_scene_08, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 08');

// scene 09
var l7_scene_09_outline = empty.paint({
      featureCollection: l7_region_09, color: 1, width: 3});
Map.addLayer(l7_scene_09_outline, {palette: 'FFFF00'}, 'l7_scene_09_outline');
// Map.addLayer(l7_scene_09, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 09');

// scene 10
var l7_scene_10_outline = empty.paint({
    featureCollection: l7_region_10, color: 1, width: 3});
Map.addLayer(l7_scene_10_outline, {palette: 'FFFF00'}, 'l7_scene_10_outline');
// Map.addLayer(l7_scene_10, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 10');

// scene 11
var l7_scene_11_outline = empty.paint({
    featureCollection: l7_region_11, color: 1, width: 3});
Map.addLayer(l7_scene_11_outline, {palette: 'FFFF00'}, 'l7_scene_11_outline');
// Map.addLayer(l7_scene_11, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 11');

// scene 12
var l7_scene_12_outline = empty.paint({
    featureCollection: l7_region_12, color: 1, width: 3});
Map.addLayer(l7_scene_12_outline, {palette: 'FFFF00'}, 'l7_scene_12_outline');
// Map.addLayer(l7_scene_12, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 12');

// scene 13
var l7_scene_13_outline = empty.paint({
    featureCollection: l7_region_13, color: 1, width: 3});
Map.addLayer(l7_scene_13_outline, {palette: 'FFFF00'}, 'l7_scene_13_outline');
// Map.addLayer(l7_scene_13, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 13');

// scene 14
var l7_scene_14_outline = empty.paint({
    featureCollection: l7_region_14, color: 1, width: 3});
Map.addLayer(l7_scene_14_outline, {palette: 'FFFF00'}, 'l7_scene_14_outline');
// Map.addLayer(l7_scene_14, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 14');

// scene 15
var l7_scene_15_outline = empty.paint({
    featureCollection: l7_region_15, color: 1, width: 3});
Map.addLayer(l7_scene_15_outline, {palette: 'FFFF00'}, 'l7_scene_15_outline');
// Map.addLayer(l7_scene_15, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 15');

// scene 16
var l7_scene_16_outline = empty.paint({
    featureCollection: l7_region_16, color: 1, width: 3});
Map.addLayer(l7_scene_16_outline, {palette: 'FFFF00'}, 'l7_scene_16_outline');
// Map.addLayer(l7_scene_16, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 16');

// scene 17
var l7_scene_17_outline = empty.paint({
    featureCollection: l7_region_17, color: 1, width: 3});
Map.addLayer(l7_scene_17_outline, {palette: 'FFFF00'}, 'l7_scene_17_outline');
// Map.addLayer(l7_scene_17, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 17');

// scene 18
var l7_scene_18_outline = empty.paint({
    featureCollection: l7_region_18, color: 1, width: 3});
Map.addLayer(l7_scene_18_outline, {palette: 'FFFF00'}, 'l7_scene_18_outline');
// Map.addLayer(l7_scene_18, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 18');

// scene 19
var l7_scene_19_outline = empty.paint({
    featureCollection: l7_region_19, color: 1, width: 3});
Map.addLayer(l7_scene_19_outline, {palette: 'FFFF00'}, 'l7_scene_19_outline');
// Map.addLayer(l7_scene_19, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 19');

// scene 20
var l7_scene_20_outline = empty.paint({
    featureCollection: l7_region_20, color: 1, width: 3});
Map.addLayer(l7_scene_20_outline, {palette: 'FFFF00'}, 'l7_scene_20_outline');
// Map.addLayer(l7_scene_20, {bands:['B4','B3','B2'], max:3000, min:0}, 'l7 scene 20');



// ---------- Landsat 5 ----------
// scene 01
var l5_scene_01_outline = empty.paint({
            featureCollection: l5_region_01, color: 1, width: 3});
Map.addLayer(l5_scene_01_outline, {palette: 'FF00FF'}, 'l5_scene_01_outline');
// Map.addLayer(l5_scene_01, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 01');

// scene 02
var l5_scene_02_outline = empty.paint({
    featureCollection: l5_region_02, color: 1, width: 3});
Map.addLayer(l5_scene_02_outline, {palette: 'FF00FF'}, 'l5_scene_02_outline');
// Map.addLayer(l5_scene_02, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 02');

// scene 03
var l5_scene_03_outline = empty.paint({
    featureCollection: l5_region_03, color: 1, width: 3});
Map.addLayer(l5_scene_03_outline, {palette: 'FF00FF'}, 'l5_scene_03_outline');
// Map.addLayer(l5_scene_03, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 03');

// scene 04
var l5_scene_04_outline = empty.paint({
    featureCollection: l5_region_04, color: 1, width: 3});
Map.addLayer(l5_scene_04_outline, {palette: 'FF00FF'}, 'l5_scene_04_outline');
// Map.addLayer(l5_scene_04, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 04');

// scene 05
var l5_scene_05_outline = empty.paint({
    featureCollection: l5_region_05, color: 1, width: 3});
Map.addLayer(l5_scene_05_outline, {palette: 'FF00FF'}, 'l5_scene_05_outline');
// Map.addLayer(l5_scene_05, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 05');

// scene 06
var l5_scene_06_outline = empty.paint({
    featureCollection: l5_region_06, color: 1, width: 3});
Map.addLayer(l5_scene_06_outline, {palette: 'FF00FF'}, 'l5_scene_06_outline');
// Map.addLayer(l5_scene_06, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 06');

// scene 07
var l5_scene_07_outline = empty.paint({
    featureCollection: l5_region_07, color: 1, width: 3});
Map.addLayer(l5_scene_07_outline, {palette: 'FF00FF'}, 'l5_scene_07_outline');
// Map.addLayer(l5_scene_07, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 07');

// scene 08
var l5_scene_08_outline = empty.paint({
    featureCollection: l5_region_08, color: 1, width: 3});
Map.addLayer(l5_scene_08_outline, {palette: 'FF00FF'}, 'l5_scene_08_outline');
// Map.addLayer(l5_scene_08, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 08');

// scene 09
var l5_scene_09_outline = empty.paint({
    featureCollection: l5_region_09, color: 1, width: 3});
Map.addLayer(l5_scene_09_outline, {palette: 'FF00FF'}, 'l5_scene_09_outline');
// Map.addLayer(l5_scene_09, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 09');

// scene 10
var l5_scene_10_outline = empty.paint({
    featureCollection: l5_region_10, color: 1, width: 3});
Map.addLayer(l5_scene_10_outline, {palette: 'FF00FF'}, 'l5_scene_10_outline');
// Map.addLayer(l5_scene_10, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 10');

// scene 11
var l5_scene_11_outline = empty.paint({
    featureCollection: l5_region_11, color: 1, width: 3});
Map.addLayer(l5_scene_11_outline, {palette: 'FF00FF'}, 'l5_scene_11_outline');
// Map.addLayer(l5_scene_11, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 11');

// scene 12
var l5_scene_12_outline = empty.paint({
    featureCollection: l5_region_12, color: 1, width: 3});
Map.addLayer(l5_scene_12_outline, {palette: 'FF00FF'}, 'l5_scene_12_outline');
// Map.addLayer(l5_scene_12, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 12');

// scene 13
var l5_scene_13_outline = empty.paint({
    featureCollection: l5_region_13, color: 1, width: 3});
Map.addLayer(l5_scene_13_outline, {palette: 'FF00FF'}, 'l5_scene_13_outline');
// Map.addLayer(l5_scene_13, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 13');

// scene 14
var l5_scene_14_outline = empty.paint({
    featureCollection: l5_region_14, color: 1, width: 3});
Map.addLayer(l5_scene_14_outline, {palette: 'FF00FF'}, 'l5_scene_14_outline');
// Map.addLayer(l5_scene_14, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 14');

// scene 15
var l5_scene_15_outline = empty.paint({
    featureCollection: l5_region_15, color: 1, width: 3});
Map.addLayer(l5_scene_15_outline, {palette: 'FF00FF'}, 'l5_scene_15_outline');
// Map.addLayer(l5_scene_15, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 15');

// scene 16
var l5_scene_16_outline = empty.paint({
    featureCollection: l5_region_16, color: 1, width: 3});
Map.addLayer(l5_scene_16_outline, {palette: 'FF00FF'}, 'l5_scene_16_outline');
// Map.addLayer(l5_scene_16, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 16');

// scene 17
var l5_scene_17_outline = empty.paint({
    featureCollection: l5_region_17, color: 1, width: 3});
Map.addLayer(l5_scene_17_outline, {palette: 'FF00FF'}, 'l5_scene_17_outline');
// Map.addLayer(l5_scene_17, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 17');


// scene 18
var l5_scene_18_outline = empty.paint({
    featureCollection: l5_region_18, color: 1, width: 3});
Map.addLayer(l5_scene_18_outline, {palette: 'FF00FF'}, 'l5_scene_18_outline');
// Map.addLayer(l5_scene_18, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 18');


// scene 19
var l5_scene_19_outline = empty.paint({
    featureCollection: l5_region_19, color: 1, width: 3});
Map.addLayer(l5_scene_19_outline, {palette: 'FF00FF'}, 'l5_scene_19_outline');
// Map.addLayer(l5_scene_19, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 19');

// scene 20
var l5_scene_20_outline = empty.paint({
    featureCollection: l5_region_20, color: 1, width: 3});
Map.addLayer(l5_scene_20_outline, {palette: 'FF00FF'}, 'l5_scene_20_outline');
// Map.addLayer(l5_scene_20, {bands:['B4','B3','B2'], max:3000, min:0}, 'l5 scene 20');



