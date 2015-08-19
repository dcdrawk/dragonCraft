//'use strict';
///* jshint ignore:start */
////
//// Define your database
////
//// Code here will be linted with ignored by JSHint.
//var db = new Dexie("test-database");
//db.version(1).stores({
//    charClasses: 'name,shoeSize',
//    characters: 'name,race,subrace,class,background,level'
////    classes: 'name'
//    // ...add more stores (tables) here...
//});
//
////
//// Open it
////
//db.open();
//
////
//// Put some data into it
////
//
//
//db.on("populate", function() {
//  db.charClasses.add({name: "Fighter"});
//  db.charClasses.add({name: "Wizard"});
//  db.charClasses.add({name: "Rogue"});
//  db.charClasses.add({name: "Ranger"});
//});
//
//db.charClasses.each(function(friend) {
//        console.log("Friend: " + JSON.stringify(friend));
//    });
//    
////    
////db.friends.put({name: "Jerry", shoeSize: 6}).then (function(){
////    //
////    // Then when data is stored, read from it
////    //
////    return db.friends.get('Jerry');
////}).then(function (friend) {
////    //
////    // Display the result
////    //
////    console.log("Nicolas has shoe size " + friend.shoeSize);
////}).catch(function(error) {
////   //
////   // Finally don't forget to catch any error
////   // that could have happened anywhere in the
////   // code blocks above.
////   //
////   alert ("Ooops: " + error);
////});
///* jshint ignore:end */