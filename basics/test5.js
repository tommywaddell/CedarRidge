// From 3dexperience Hackathon.pdf Page 13 Block 1
mainDiv = document.getElementById("main");
DataDragAndDrop.droppable(mainDiv, {
  drop: function (data) {
    var myjson = JSON.parse(data);
    console.log("The dropped object is = " + JSON.stringify(myjson));
  },
  enter: function () {
    var mainDiv = widget.body.querySelector(".main");
    mainDiv.innerHTML = "Enter";
  },
  over: function () {
    var mainDiv = widget.body.querySelector(".main");
    mainDiv.innerHTML = "Over";
  },
  leave: function () {
    var mainDiv = widget.body.querySelector(".main");
    mainDiv.innerHTML = "Leave";
  },
});
