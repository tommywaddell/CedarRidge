// From 3dexperience Hackathon.pdf Page 9 Block 1
// var MyWidget = {
//   greeting: "Hello World!",
//   onLoad: function () {
//     MyWidget.sayHello();
//   },
//   sayHello: function () {
//     document.getElementById("main").innerHTML += this.greeting;
//   },
// };

// From 3dexperience Hackathon.pdf Page 9 Block 2
i3DXCompassServices.getServiceUrl({
  serviceName: "3DDrive",
  platformId: widget.getValue("x3dPlatformId"),
  onComplete: function (datafromCompass) {
    DriveURL = datafromCompass;
  },
  onFailure: function () {
    console.log("Cannot load url");
  },
});
