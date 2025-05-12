//lines 1-260 are from inputs into Google Earth Engine
var salt_river_mouth = 
    /* color: #48abff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-64.76225666594435, 17.79804831324403],
          [-64.76225666594435, 17.785789470099814],
          [-64.75375942778517, 17.785789470099814],
          [-64.75375942778517, 17.79804831324403]]], null, false),
    usvi_roi = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-65.1111475565645, 18.36407337223098],
          [-64.99991098429888, 17.828877741356546],
          [-64.9243799784395, 17.636595575936678],
          [-64.54123178508013, 17.716411174804964],
          [-64.6387354471895, 18.324968312409673],
          [-64.66208139445513, 18.36407337223098],
          [-64.69778696086138, 18.37449989285431],
          [-64.78979745890825, 18.394047920192534],
          [-64.86120859172075, 18.39535104319036],
          [-64.89416757609575, 18.417502625621385],
          [-64.99304452922075, 18.420108506732735],
          [-65.094668064377, 18.407078706556813]]], null, false),
    salt_river_bay = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-64.75767363411848, 17.787053225949865],
          [-64.75767363411848, 17.775978759261825],
          [-64.75419749123517, 17.775978759261825],
          [-64.75419749123517, 17.787053225949865]]], null, false),
    fl_roi = 
    /* color: #e9ffdf */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-80.57909497487739, 24.942577209637523],
          [-80.52828320729927, 24.899298726577467],
          [-80.33911236989692, 25.016333520155314],
          [-80.25826576302302, 25.104382638896023],
          [-80.37705543587458, 25.13733266788895],
          [-80.54507269585953, 24.996335818267646]]]),
    st_croix = 
    /* color: #d63000 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-64.885927830002, 17.770037894023318],
          [-64.9024073221895, 17.757613646515146],
          [-64.89348093058794, 17.7082350888785],
          [-64.91476694133013, 17.66800277372721],
          [-64.91064706828325, 17.657861501165826],
          [-64.90034738566607, 17.6398675147131],
          [-64.76404825236528, 17.65917008457975],
          [-64.62053934123247, 17.702020929506613],
          [-64.59967752165022, 17.730358634746995],
          [-64.55676217741194, 17.74343875764914],
          [-64.44621225065413, 17.805883160964978],
          [-64.45273538297835, 17.82614837763014],
          [-64.62851663297835, 17.806210037572416],
          [-64.6532358712596, 17.78430798104827],
          [-64.69409127897444, 17.775481019733554],
          [-64.703017670576, 17.76273019484205],
          [-64.74833627409163, 17.793134506186423],
          [-64.79622147389655, 17.78626946877986],
          [-64.81441757985358, 17.781692630567164],
          [-64.82540390797858, 17.77090390517339],
          [-64.84600327321296, 17.7686153039438],
          [-64.8703791887403, 17.774500219337817]]]),
    thomas_john = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Geometry.Polygon(
        [[[-64.96789144233635, 18.400212608386283],
          [-64.97510122016838, 18.40607637437704],
          [-64.97990773872307, 18.397280650522802],
          [-64.97956441596916, 18.388158684734563],
          [-64.98299764350823, 18.380339472634287],
          [-64.99432729438713, 18.374149011576403],
          [-65.02797292426995, 18.369261648542587],
          [-65.05784200385979, 18.365677494330953],
          [-65.06196187690666, 18.35981235415643],
          [-65.02712448086208, 18.337499778417744],
          [-64.99210555996365, 18.344017430427883],
          [-64.98489578213162, 18.332611378135],
          [-64.97184951748318, 18.324463737233536],
          [-64.9622364803738, 18.30197425762138],
          [-64.9457569881863, 18.303929980510258],
          [-64.94163711513943, 18.31501199304319],
          [-64.92756088222927, 18.31696756867806],
          [-64.9069615169949, 18.3045818832328],
          [-64.88670547451443, 18.303929980510258],
          [-64.87674911465115, 18.29578098948079],
          [-64.85546310390896, 18.303929980510258],
          [-64.84207351650662, 18.300996387896696],
          [-64.83383377041287, 18.29806274560468],
          [-64.82250411953396, 18.293173231406712],
          [-64.8080845638699, 18.292847258888465],
          [-64.81598098720974, 18.30327807533414],
          [-64.82113082851833, 18.31566385404311],
          [-64.8304005428738, 18.328048746516114],
          [-64.83967025722927, 18.341084517439228],
          [-64.84859664883083, 18.35183828834921],
          [-64.83074386562771, 18.355096874644815],
          [-64.80568130459255, 18.356400291947164],
          [-64.79263503994412, 18.34662442240616],
          [-64.80224807705349, 18.33717388936578],
          [-64.81254775967068, 18.333263172824985],
          [-64.80739791836208, 18.322508246310548],
          [-64.7970982357449, 18.320878653658124],
          [-64.79263503994412, 18.31273046021181],
          [-64.77890212978787, 18.307841360038935],
          [-64.77237899746365, 18.310448897311478],
          [-64.76173599209255, 18.3091451335836],
          [-64.74868972744412, 18.314360129588387],
          [-64.72843368496365, 18.310448897311478],
          [-64.71779067959255, 18.303604028228893],
          [-64.70268447842068, 18.296432922867858],
          [-64.69513137783474, 18.300018512652173],
          [-64.69581802334255, 18.310448897311478],
          [-64.6927281185574, 18.327071024080375],
          [-64.69753463711208, 18.337499778417744],
          [-64.68036849941677, 18.326419206052865],
          [-64.66629226650662, 18.327396932173034],
          [-64.65736587490505, 18.33652210941877],
          [-64.6546192928738, 18.34532093133375],
          [-64.67384536709255, 18.353793447504515],
          [-64.6817417904324, 18.35802954973955],
          [-64.69444473232693, 18.36584977311731],
          [-64.70234115566677, 18.367153109233584],
          [-64.71229751553005, 18.37008557950394],
          [-64.72706039394802, 18.37008557950394],
          [-64.7421665951199, 18.375624554026952],
          [-64.7586460873074, 18.373995462334967],
          [-64.75246627773708, 18.36389475048763],
          [-64.76036270107693, 18.362591389765203],
          [-64.77409561123318, 18.359658792158008],
          [-64.78439529385037, 18.356400291947164],
          [-64.79023178066677, 18.362917230868472],
          [-64.79435165371365, 18.373995462334967],
          [-64.81048782314724, 18.367804773600444],
          [-64.82010086025662, 18.36356891122968],
          [-64.83623702969021, 18.361939705713432],
          [-64.84447677578396, 18.35802954973955],
          [-64.8523731991238, 18.364872264570668],
          [-64.8633595272488, 18.364872264570668],
          [-64.87159927334255, 18.367478941724627],
          [-64.88018234219021, 18.362591389765203],
          [-64.88567550625271, 18.359984638796714],
          [-64.89116867031521, 18.367804773600444],
          [-64.90627487148708, 18.370411406457585],
          [-64.9018116756863, 18.37953431130827],
          [-64.8959751888699, 18.383118177612875],
          [-64.89357192959255, 18.395824012320784],
          [-64.90215499844021, 18.41569536182238],
          [-64.90970809902615, 18.41895274125938],
          [-64.91348464931912, 18.412763667608207],
          [-64.91657455410427, 18.408203155127147],
          [-64.92206771816677, 18.40201369495206],
          [-64.91897781338162, 18.39810444758853],
          [-64.91485794033474, 18.388330941065956],
          [-64.91005142178005, 18.383118177612875],
          [-64.90764816250271, 18.379860120414026],
          [-64.91211135830349, 18.372366355257558],
          [-64.92172439541287, 18.376602001656664],
          [-64.93339736904568, 18.383118177612875],
          [-64.94404037441677, 18.385398781019738],
          [-64.94129379238552, 18.37823106872958],
          [-64.93889053310818, 18.373995462334967],
          [-64.94816024746365, 18.37855688029758],
          [-64.95845993008083, 18.379860120414026],
          [-64.95845993008083, 18.38605037645158],
          [-64.9622364803738, 18.393869329494034],
          [-64.96498306240505, 18.399407539901585]]]),
    ROI_salt = 
    /* color: #d63000 */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-64.7634805844783, 17.789272669517278],
          [-64.7634805844783, 17.768512847926345],
          [-64.7455419705867, 17.768512847926345],
          [-64.7455419705867, 17.789272669517278]]], null, false),
    NW = 
    /* color: #d621bb */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-64.76399297936686, 17.789119078424275],
          [-64.76399297936686, 17.77976110292267],
          [-64.7554099105192, 17.77976110292267],
          [-64.7554099105192, 17.789119078424275]]], null, false),
    SW = 
    /* color: #98ff00 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-64.76391787751444, 17.77976110292271],
          [-64.76391787751444, 17.76854314578948],
          [-64.75539918168315, 17.76854314578948],
          [-64.75539918168315, 17.77976110292271]]], null, false),
    NE = 
    /* color: #ffc82d */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-64.7554099105192, 17.789119078424275],
          [-64.7554099105192, 17.779689588122007],
          [-64.74550719483622, 17.779689588122007],
          [-64.74550719483622, 17.789119078424275]]], null, false),
    SE = 
    /* color: #00ffff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Geometry.Polygon(
        [[[-64.75538845284709, 17.779766211121625],
          [-64.75538845284709, 17.768543145789533],
          [-64.74550719483622, 17.768543145789533],
          [-64.74550719483622, 17.779766211121625]]], null, false),
    remove_geo = 
    /* color: #d6be15 */
    /* shown: false */
    ee.Geometry.MultiPolygon(
        [[[[-64.75209757808969, 17.779643841666932],
           [-64.75164696697519, 17.77997076632002],
           [-64.75253746036813, 17.781319324190733],
           [-64.75319191936777, 17.7810128346594]]],
         [[[-64.74822446827218, 17.780358988568587],
           [-64.74870726589486, 17.780226175789007],
           [-64.74831029896066, 17.779746005685283],
           [-64.74782750133798, 17.779746005685283]]]]);

// USF FL Keys seagrass classification script.
// authors: Chelsea Bryant + Tylar Murray '
// edits: Digna Rueda Roa
// forked from: 
//     SEAGRASS CLASSIFICATION SCRIPT
//     2021/09/28
//     Luis Lizcano-Sandoval

//Splitting the titles up to merge them together at the end of the code

// Create a MultiPolygon geometry containing both polygons
var roi = ee.Geometry.MultiPolygon(st_croix);

Map.centerObject(ROI_salt);

// Remove the unwanted section
var salt = ROI_salt.difference(remove_geo,1);


var class_data = require(  // import the data module
'users/bryant117/thesis:ground_truth/gt_23-12-05' 
);
var s2_maskers = require(  // import sentinel 2 helper modules
  'users/tylarmurray/sat_fns:s2_fns'
);
var classification_util = require(  // import sentinel 2 helper modules
 // 'users/bryant117/thesis:class_helpers/ch_18-12-21'
  'users/bryant117/thesis:classification_helpers'
);

// var seagrass = class_data.filter(ee.Filter.eq('class',1))
// print('seagrass ground truth:', seagrass);
// Map.addLayer(class_data, {}, 'gt_seagrass')
//--------------------------------------------------------------------------------
//Satellite Collection
//--------------------------------------------------------------------------------
var collection = ee.ImageCollection('COPERNICUS/S2_SR_HARMONIZED') //Sentinel-2_L2

// Image ID's
var id1 = 
'20231205T145719_20231205T145721_T20QLE' // 2023-12-05


// Load image
var image = ee.Image('COPERNICUS/S2_SR_HARMONIZED'+'/'+id1);
//clip image to the roi so there isn't extra image
var clippedImage = image.clip(st_croix);
var data = class_data.groundData;

//points from ground truth file
//Map.addLayer(data, {}, 'gt_seagrass')

// apply masks to the images
var maskedImage = s2_maskers.landMask(clippedImage);
//image = s2_maskers.cloudMask(s2_maskers.landMask(image));
// write it this way for image collection
//image1 = image1.map(s2_maskers.cloudMask).map(s2_maskers.landMask);


// Display the merged image
Map.addLayer(image, {bands: ['B4', 'B3', 'B2'], max: 3000}, 'OG Image');

//// COLOR PALETTES ////
//RGB color palette
var rgbVis = {
  min: 0,
  max: 0.2,
  gamma: 2,
  bands: ['B4', 'B3', 'B2'],
};
var rgbVis2 = {
  min: 0,
  max: 2000,
  gamma: 2,
  bands: ['B4', 'B3', 'B2'],
};

// Define visualization parameters
var visParams = {
  bands: ['B4', 'B3', 'B2'],  // RGB bands
  min: 0,
  max: 3000,
  gamma: 1.4
};

// Add the masked image to the map
Map.addLayer(maskedImage, visParams, 'Masked Sentinel-2 Image');


// Print the image information to the console
print('Masked Image:', maskedImage);
//--------------------------------------------------------------------------------
// Process the image
//--------------------------------------------------------------------------------
var img_rescale = image.divide(10000);

// // mask land
// Calculate Normalized Difference Water Index (NDWI) with Blue and NIR
var image_NDWI = img_rescale.normalizedDifference(['B2','B8']);
// Map.addLayer(image_NDWI, {min: -0.7, max: 0.7, palette: ['green', 'white', 'blue']}, 'NDWI');

// Create a mask 
var mask = image_NDWI.gte(-0.1);

// Apply the mask to the variable image
var maskedImage1 = img_rescale.updateMask(mask);

// Select bands B2, B3, B4, B8, and AOT from the image (10 m pix)
//var selectedBands = maskedImage1.select(['B2', 'B3', 'B4', 'B8', 'AOT']);
var selectedBands = maskedImage1.select(['B2', 'B3', 'B4', 'B8']);

// Sum the selected bands to create the BandSum variable
var BandSum = selectedBands.reduce(ee.Reducer.sum());

// Display the BandSum
print('BandSum', BandSum);
// Map.addLayer(BandSum, {min: 0, max: 0.5}, 'BandSum');

// Create a mask 
//play with threshold value maybe 0.30
var mask = BandSum.lt(0.35) //previously it was .80

// Apply the mask to the variable image
var img_masked = img_rescale.updateMask(mask);

// Display the masked image
Map.addLayer(img_masked, rgbVis, 'Masked Image with BandSum and NDWI');

// // Add some layers to map
// Map.addLayer(image, rgbVis, 'Initial Image',false);
// Map.addLayer(img_masked, rgbVis, 'Masked Image',true);
// Map.addLayer(continuos, {color: '#004E00'}, 'SeagrassContinuos',false);
// Map.addLayer(discontinuos, {color: '#78F878'}, 'SeagrassDiscontinuos',false);
// Map.addLayer(springsCoast, {}, 'Ground-Points',false)

////////////////////////////////////////////////////////////////////////////////////
//--------------------------------------------------------------------------------
// Apply Depth Invariant Index
//--------------------------------------------------------------------------------
// Define bands of interest for the DII:
var bands = ['B1','B2','B3']

//why sand?
var sand = data.filter(ee.Filter.eq('class',0))
print('sand',sand)

// Get standard deviation values:
var imgSTD = img_masked.select(bands).reduceRegion({
  reducer:ee.Reducer.stdDev(),
  geometry:sand, //polygons of sand areas at different depths
  scale: 10,
  maxPixels:1e13}).toArray();
  
// Calculate the Variance:
var imgVAR = imgSTD.multiply(imgSTD).toList();

// Get mean values:
var imgMEAN = img_masked.reduceRegion({
  reducer:ee.Reducer.mean(),
  geometry:sand,
  scale: 10,
  maxPixels:1e13}).toArray();

// Calculate the coefficient of variation:
var CV = imgSTD.divide(imgMEAN);

// Covariance Matrix for band pairs
var imgCOV = img_masked.select(['B1', 'B2', 'B3']).toArray().reduceRegion({
  reducer: ee.Reducer.covariance(),
  geometry: sand,
  scale: 10,
  maxPixels: 1e13
})
imgCOV = ee.Array(imgCOV.get('array'));

print('Covariance Values:', imgCOV);

// Get covariances for band ratios
var imgCOVB12 =  ee.Number(imgCOV.get([0,1])); // Ratio B1/B2
var imgCOVB13 =  ee.Number(imgCOV.get([0,2])); // Ratio B1/B3
var imgCOVB23 =  ee.Number(imgCOV.get([1,2])); // Ratio B2/B3

// Attenuation Coefficient (a) of band pairs
var var1 = ee.Number(imgVAR.get(0)) // Variance of B1
var var2 = ee.Number(imgVAR.get(1)) // Variance of B2
var var3 = ee.Number(imgVAR.get(2)) // Variance of B3
var a1_2 = (var1.subtract(var2)).divide(imgCOVB12.multiply(2)); // B1B2
var a1_3 = (var1.subtract(var3)).divide(imgCOVB13.multiply(2)); // B1B3
var a2_3 = (var2.subtract(var3)).divide(imgCOVB23.multiply(2)); // B2B3

// Ratio of Attenuation Coefficient
var k1_2 = a1_2.add(((a1_2.multiply(a1_2).add(1))).pow(0.5)); // B1B2
var k1_3 = a1_3.add(((a1_3.multiply(a1_3).add(1))).pow(0.5)); // B1B3
var k2_3 = a2_3.add(((a2_3.multiply(a2_3).add(1))).pow(0.5)); // B2B3

// Depth invariance index DII
var DII_1_2 = img_masked.select('B1').log().subtract(img_masked.select('B2').log().multiply(k1_2)) // B1B2
var DII_1_3 = img_masked.select('B1').log().subtract(img_masked.select('B3').log().multiply(k1_3)) // B1B3
var DII_2_3 = img_masked.select('B2').log().subtract(img_masked.select('B3').log().multiply(k2_3)) // B2B3

// Make depth invariance images separately. 
// I prefer to use the ratio GREEN/BLUE only.
var DI_image = ee.Image();
DI_image = DI_image.addBands(DII_2_3.select(['B2'],['B2B3'])); // B2B3
//DI_image = DI_image.select('B1B2','B1B3','B2B3');
//Map.addLayer(DI_image.select('B2B3'),{},'DII', false)

// Add the B1/B2 as a band to our image:
var finalImage = img_masked.addBands(DI_image);

print('Band Names',finalImage.bandNames());

//--------------------------------------------------------------------------------
// Apply Supervised Classification
//--------------------------------------------------------------------------------
// Collection with classes
//add data asset
var Data = data;
//print ('classes', classNames)
//print('classes',points.aggregate_array('class').distinct())
print('Ground Points per Class:',Data.aggregate_histogram('class'))
/*** Number of Ground Points per Class:
* 0: 971
* 1: 311
* 2: 800
* 3: 127
*/

// //Select bands to sample
var samplingBands = ['B1','B2', 'B3', 'B4','B2B3'];
//var samplingBands = ['B1','B2', 'B3', 'B4'];


// Sample multi-spectral data using all ground points.
var samplingData = finalImage.select(samplingBands).sampleRegions({
    collection: Data,
    properties: ['class'],
    scale: 10
});
// print ('Sampling',samplingData)
/*
// Export sampling data:
Export.table.toDrive({
  collection: samplingData,
  description: 'SamplingData',
  folder: 'FromGEE',
  fileFormat: 'CSV'
  });
*/

// double check line 270-284
// // Parse sample classes
// var sand = samplingData.filter(ee.Filter.eq('class',0)) //Softbottom
// var seagrass = samplingData.filter(ee.Filter.eq('class',1)) //Hardbottom
// var coral = samplingData.filter(ee.Filter.eq('class',2)) //Dense seagrass
// var algae = samplingData.filter(ee.Filter.eq('class',3)) //Sparse seagrass

// //// Generate random numbers from 0 to 1 for each sampled class.
// var softRandom = sand.randomColumn("random");
// var hardRandom = seagrass.randomColumn("random");
// var denseRandom = coral.randomColumn("random");
// var sparseRandom = algae.randomColumn("random");

// // Merge classes again.
// var groundData = softRandom.merge(hardRandom).merge(denseRandom).merge(sparseRandom);
// //print('Survey Data:',groundData)

var split_data = class_data.get_train_test_split(samplingData, 0.7);
var trainingPoints = split_data.trainingPoints;
var validationPoints = split_data.validationPoints;
// Map.addLayer(trainingPoints.draw(
//   {color: '660066', strokeWidth: 5}), {}, 'Training Points',true);
// Map.addLayer(validationPoints.draw(
//   {color: 'D9BFD9', strokeWidth: 5}), {}, 'Validation Points',true);
//print('Training Samples (70%):',trainingPoints)

//// Define and train the SVM classifier:
var SVM = ee.Classifier.libsvm({
  kernelType: 'RBF',
  gamma: 100,
  cost: 100
});
var trainSVM = SVM.train({
  features: trainingPoints,
  classProperty: 'class',
  inputProperties: samplingBands
});

//// Classify the image using the trained classifier
var classifiedSVM = finalImage.classify(trainSVM);

// Clip the classified image to the desired geometry (e.g., 'salt')
var classifiedSVM = classifiedSVM.clip(salt);

// //--------------------------------------------------------------------------------
// // Display Classification Map and Accuracy Assessment
// //--------------------------------------------------------------------------------

////Define a palette for the distinct classes
//note0-3 is four colors
// var classPalette = {
//   min:0, max:4, palette: class_data.COLORS};
var classPalette = {
  min:0, max:3, palette: [ '#e0d05e','#668438','#ff6161','#000000']
};

//// Display Classified map
Map.addLayer(classifiedSVM, classPalette, 'SVM classification', true);
// //To show only seagrass (SVM):
// var classifiedSVMDense = classifiedSVM.eq(2)
// var classifiedSVMSpare = classifiedSVM.eq(3)
// Map.addLayer(classifiedSVM.mask(classifiedSVMDense), {palette: ['#004E00']},  'SVM Dense');
// Map.addLayer(classifiedSVM.mask(classifiedSVMSpare), {palette: ['#78F878']},  'SVM Sparse');

// Apply a majority filter (mode filter) with a 3x3 window.
var majorityFiltered = classifiedSVM.reduceNeighborhood({
  reducer: ee.Reducer.mode(),
  kernel: ee.Kernel.square({radius: 2, units: 'pixels'})
});

Map.addLayer(majorityFiltered, classPalette, 'smooth image', true);
//// Calculate accuracy using validation data
//// Classify the image using the trained classifier
var validationSVM = validationPoints.classify(trainSVM);


// // Get a confusion matrix representing expected accuracy (Using validation points - 30%)
var errorMatrixSVM = validationSVM.errorMatrix(
  'class', 'classification'
);
print('SVM Confussion Matrix', errorMatrixSVM);

//// Get a confusion matrix representing resubstitution accuracy.
//// Axis 0 of the matrix correspond to the input classes, and axis 1 to the output classes.
print('Validation overall accuracy: ', errorMatrixSVM.accuracy());

 
// Estimate user and producer accuracies
var producerAccuracySVM = errorMatrixSVM.producersAccuracy()
var userAccuracySVM = errorMatrixSVM.consumersAccuracy()

print('Producer Accuracy SVM: ',producerAccuracySVM)
print('User Accuracy SVM: ',userAccuracySVM)
 
// The Kappa Coefficient is generated from a statistical test to evaluate the accuracy 
// of a classification. Kappa essentially evaluate how well the classification performed 
// as compared to just randomly assigning values, i.e. did the classification do better 
// than random. The Kappa Coefficient can range from -1 t0 1. A value of 0 indicated that 
// the classification is no better than a random classification. A negative number 
// indicates the classification is significantly worse than random. A value close to 1 
// indicates that the classification is significantly better than random.
var kappaSVM = errorMatrixSVM.kappa()
print('Kappa Statistic: ', kappaSVM)

classification_util.add_legend()

print(
  ui.Chart.image.histogram(
    classifiedSVM, roi, 300
  )
)

// Export shapefiles to Drive
/*
Export.table.toDrive({
  collection: S2_svmClassifiedDense,
  description: 'Seagrass_Dense_17RLM',
  folder: 'FromGEE',
  fileFormat: 'SHP'
  });
Export.image.toDrive({
  image: S2_svmClassified,
  description: 'Seagrass_SVM_17RLM',
  folder: 'FromGEE',
  scale: 10,
  region: imageGeometry,
  maxPixels: 1e13,
  fileFormat: 'GeoTIFF'
  });
  
*/
////THIS IS THE DOWNLOAD IMAGE LINE!!!! uncomaand this line!!!!
// Export.image.toDrive({
//   image: classifiedSVM,
//   description: 'classifiedSVM__12_21_2018_geotiff' ,
//   folder: 'fromGEE', // name of folder in Google Drive to save the image
//   fileFormat: 'GeoTIFF',
//   fileNamePrefix: 'classifiedSVM__12_21_2018',
//   crs: 'EPSG:4326',
//   maxPixels: 1e13, 
//   scale: 10,
//   skipEmptyTiles: true // it makes much faster the download
//   }) ;

// //Calculate area of seagrass 
var Area = classifiedSVM.eq(1).multiply(ee.Image.pixelArea());
var reducerArea = Area.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: salt,
  scale: 10,
  maxPixels: 1e15
  });
print(reducerArea)
var areaSqKm = ee.Number(reducerArea.get('classification')).divide(1e6);
print('Area (km^2):',areaSqKm);

// //Calculate area of seagrass in the full map
var area = classifiedSVM.eq(0)
    .or(classifiedSVM.eq(1))
    .or(classifiedSVM.eq(2))
    .or(classifiedSVM.eq(3))
    .multiply(ee.Image.pixelArea());
var reducerarea = area.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: salt,
  scale: 10,
  maxPixels: 1e15
  });
print(reducerarea)

var TareaSqKm = ee.Number(reducerarea.get('classification')).divide(1e6);
print('total Area (km^2):',TareaSqKm);


var ratio = areaSqKm.divide(TareaSqKm); // Ratio of seagrass area to total area
//print('Seagrass Area to Total Area Ratio:', ratio);

// Calculate the percentage of seagrass area to total area
var percentage = ratio.multiply(100);
print('Seagrass Area as a Percentage of Total Area:', percentage);

// //Calculate area of seagrass in the NW bay
var NW_Area = classifiedSVM.eq(1).multiply(ee.Image.pixelArea());
var NW_reducerArea = NW_Area.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: NW,
  scale: 10,
  maxPixels: 1e15
  });
print(NW_reducerArea)
var NW_areaSqKm = ee.Number(NW_reducerArea.get('classification')).divide(1e6);
print('NW Area (km^2):',NW_areaSqKm);
//////
//Calculate area of seagrass in the NW bay map
//////
var NW_area = classifiedSVM.eq(0)
    .or(classifiedSVM.eq(1))
    .or(classifiedSVM.eq(2))
    .or(classifiedSVM.eq(3))
    .multiply(ee.Image.pixelArea());
var NW_reducerarea = NW_area.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: NW,
  scale: 10,
  maxPixels: 1e15
  });
print(NW_reducerarea)

var NW_TareaSqKm = ee.Number(NW_reducerarea.get('classification')).divide(1e6);
print('total NW Area (km^2):',NW_TareaSqKm);


var NW_ratio = NW_areaSqKm.divide(NW_TareaSqKm); // Ratio of seagrass area to total area
//print('Seagrass Area to Total Area Ratio:', ratio);

// Calculate the percentage of seagrass area to total area
var NW_percentage = NW_ratio.multiply(100);
print('Seagrass Area as a Percentage of Total Area in the NW Bay:', NW_percentage);

//////
//Calculate area of seagrass in the SW bay!!!!!!
//////
var SW_Area = classifiedSVM.eq(1).multiply(ee.Image.pixelArea());
var SW_reducerArea = SW_Area.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: SW,
  scale: 10,
  maxPixels: 1e15
  });
print(SW_reducerArea)
var SW_areaSqKm = ee.Number(SW_reducerArea.get('classification')).divide(1e6);
print('SW Area (km^2):',SW_areaSqKm);

//Calculate area of seagrass in the SW bay map
var SW_area = classifiedSVM.eq(0)
    .or(classifiedSVM.eq(1))
    .or(classifiedSVM.eq(2))
    .or(classifiedSVM.eq(3))
    .multiply(ee.Image.pixelArea());
var SW_reducerarea = SW_area.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: SW,
  scale: 10,
  maxPixels: 1e15
  });
print(SW_reducerarea)

var SW_TareaSqKm = ee.Number(SW_reducerarea.get('classification')).divide(1e6);
print('total SW Area (km^2):',SW_TareaSqKm);


var SW_ratio = SW_areaSqKm.divide(SW_TareaSqKm); // Ratio of seagrass area to total area
//print('Seagrass Area to Total Area Ratio:', ratio);

// Calculate the percentage of seagrass area to total area
var SW_percentage = SW_ratio.multiply(100);
print('Seagrass Area as a Percentage of Total Area in the SW Bay:', SW_percentage);

//////
//Calculate area of seagrass in the NE bay!!!!!!
//////
var NE_Area = classifiedSVM.eq(1).multiply(ee.Image.pixelArea());
var NE_reducerArea = NE_Area.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: NE,
  scale: 10,
  maxPixels: 1e15
  });
print(NE_reducerArea)
var NE_areaSqKm = ee.Number(NE_reducerArea.get('classification')).divide(1e6);
print('NE Area (km^2):',NE_areaSqKm);

//Calculate area of seagrass in the SW bay map
var NE_area = classifiedSVM.eq(0)
    .or(classifiedSVM.eq(1))
    .or(classifiedSVM.eq(2))
    .or(classifiedSVM.eq(3))
    .multiply(ee.Image.pixelArea());
var NE_reducerarea = NE_area.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: NE,
  scale: 10,
  maxPixels: 1e15
  });
print(NE_reducerarea)

var NE_TareaSqKm = ee.Number(NE_reducerarea.get('classification')).divide(1e6);
print('total NE Area (km^2):',NE_TareaSqKm);


var NE_ratio = NE_areaSqKm.divide(NE_TareaSqKm); // Ratio of seagrass area to total area
//print('Seagrass Area to Total Area Ratio:', ratio);

// Calculate the percentage of seagrass area to total area
var NE_percentage = NE_ratio.multiply(100);
print('Seagrass Area as a Percentage of Total Area in the NE Bay:', NE_percentage);

//////
//Calculate area of seagrass in the SE bay!!!!!!
//////
var SE_Area = classifiedSVM.eq(1).multiply(ee.Image.pixelArea());
var SE_reducerArea = SE_Area.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: SE,
  scale: 10,
  maxPixels: 1e15
  });
print(SE_reducerArea)
var SE_areaSqKm = ee.Number(SE_reducerArea.get('classification')).divide(1e6);
print('SE Area (km^2):',SE_areaSqKm);

//Calculate area of seagrass in the SW bay map
var SE_area = classifiedSVM.eq(0)
    .or(classifiedSVM.eq(1))
    .or(classifiedSVM.eq(2))
    .or(classifiedSVM.eq(3))
    .multiply(ee.Image.pixelArea());
var SE_reducerarea = SE_area.reduceRegion({
  reducer: ee.Reducer.sum(),
  geometry: SE,
  scale: 10,
  maxPixels: 1e15
  });
print(SE_reducerarea)

var SE_TareaSqKm = ee.Number(SE_reducerarea.get('classification')).divide(1e6);
print('total SE Area (km^2):',SE_TareaSqKm);


var SE_ratio = SE_areaSqKm.divide(SE_TareaSqKm); // Ratio of seagrass area to total area
//print('Seagrass Area to Total Area Ratio:', ratio);

// Calculate the percentage of seagrass area to total area
var SE_percentage = SE_ratio.multiply(100);
print('Seagrass Area as a Percentage of Total Area in the SE Bay:', SE_percentage);
