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
//'users/bryant117/thesis:class_gt_croix' //23-12-05
//'users/bryant117/thesis:ground_truth/gt_18-12-21'
//'users/bryant117/thesis:ground_truth/gt_19-01-05' //comeback to this one
//'users/bryant117/thesis:ground_truth/gt_19-03-16'
//'users/bryant117/thesis:ground_truth/gt_19-10-17'
//'users/bryant117/thesis:ground_truth/gt_19-11-21'// comeback to this one
//'users/bryant117/thesis:ground_truth/gt_20-02-09'
//'users/bryant117/thesis:ground_truth/gt_20-02-24'
//'users/bryant117/thesis:ground_truth/gt_20-03-30'//comeback to this one
//'users/bryant117/thesis:ground_truth/gt_20-10-26' // Error
//'users/bryant117/thesis:ground_truth/gt_20-12-15' //Error
//'users/bryant117/thesis:ground_truth/gt_21-03-25' // this is the image that the extra bay closes
//'users/bryant117/thesis:ground_truth/gt_21-10-26'
//'users/bryant117/thesis:ground_truth/gt_21-12-25'
//'users/bryant117/thesis:ground_truth/gt_22-01-29'
//'users/bryant117/thesis:ground_truth/gt_22-10-21'
//'users/bryant117/thesis:ground_truth/gt_22-11-25' // there is clouds every where
//'users/bryant117/thesis:ground_truth/gt_23-11-15'
'users/bryant117/thesis:ground_truth/gt_23-12-05' //already done maybe
//'users/bryant117/thesis:ground_truth/gt_23-12-30' //come back to this image
//'users/bryant117/thesis:ground_truth/gt_24-03-09'
//'users/bryant117/thesis:ground_truth/gt_24-04-03'
//'users/bryant117/thesis:ground_truth/gt_24-04-13'
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
var id1 = //'20231205T145719_20231205T145721_T20QLE' // 2023-12-05

//'20181221T145719_20181221T145720_T20QLE' // 2018-12-21
//'20190105T145721_20190105T145720_T20QLE' // 2019-01-05
//'20190316T145721_20190316T145722_T20QLE' // 2019-03-16
//'20191017T145729_20191017T145726_T20QLE' // 2019-10-17
//'20191121T145731_20191121T145726_T20QLE' // 2019-11-21
//'20200209T145721_20200209T145718_T20QLE' // 2020-02-09
//'20200224T145719_20200224T145722_T20QLE' // 2020-02-24
//'20200330T145721_20200330T145721_T20QLE' // 2020-03-30
//'20201026T145731_20201026T145731_T20QLE' // 2020-10-26 //Error
//'20201215T145721_20201215T145723_T20QLE' // 2020-12-15// come back to this one
//'20210325T145721_20210325T145724_T20QLE' // 2021-03-25
//'20211026T145729_20211026T145727_T20QLE' // 2021-10-26
//'20211225T145719_20211225T145720_T20QLE' // 2021-12-25
//'20220129T145731_20220129T145725_T20QLE' // 2022-01-29
//'20221021T145729_20221021T145725_T20QLE' // 2022-10-21
//'20221125T145731_20221125T145725_T20QLE' // 2022-11-25
//'20231115T145729_20231115T145723_T20QLE' // 2023-11-15 //more clouds WTF
'20231205T145719_20231205T145721_T20QLE' // 2023-12-05
//'20231230T145721_20231230T145721_T20QLE' // 2023-12-30
//'20240309T145731_20240309T145725_T20QLE' // 2024-03-09
//'20240403T145719_20240403T145722_T20QLE' // 2024-04-03
//'20240413T145729_20240413T145725_T20QLE' // 2024-04-13


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
