var stage = new Kinetic.Stage({
    container: 'container',
    width: 678,
    height: 500
});

var layer = new Kinetic.Layer();

var X=80, Y=50;

var frontWidth =400, frontHeight = 350;
var backWidth=340, backHeight= 310;
var glubX=30, glubY=20;

var group = new Kinetic.Group({
    x: 0+0.5,
    y: 0+0.5,
    draggable: true,
    dragBoundFunc: function(pos) {

        var x= pos.x;
        if(x<0)x=0;
        if(x>400)x=400;
        smechenie(x);
        return {x: x,y: this.getAbsolutePosition().y}
    }
});

var rect2 = new Kinetic.Rect({
    x: X-2,
    y: Y,
    width: 5,
    height: frontHeight,
    fill: "#ffddaa",
    stroke: '#555',
    strokeWidth: 1
});

var rect = new Kinetic.Polygon({
    points: [X+2,Y, X+glubX,Y+glubY,  X+glubX,Y+frontHeight-glubY,  X+2,Y+frontHeight],
    fill: '#ffddaa',
    stroke: '#555',
    strokeWidth: 1
});














function smechenie(x){
    console.log("### = "+Math.ceil(x/frontWidth*100));
    var procent = x/frontWidth;
    var Lift = (procent<0.5)?2:-2
    rect.setPoints([X+Lift,Y, X+glubX-2*glubX*procent,Y+glubY,  X+glubX-2*glubX*procent,Y+frontHeight-glubY,  X+Lift,Y+frontHeight])
}
/*
var ramaFront =  new Kinetic.Rect({
    x: X-0.5,
    y: Y-0.5,
    width: frontWidth,
    height: frontHeight,
    stroke: '#ccc',
    strokeWidth: 1,

    listening:false
})*/

var karkas = new Kinetic.Group({
    x: 0+0.5,
    y: 0+0.5
});
var ramaFront =  new Kinetic.Rect({
    x: X,    y: Y,
    width: frontWidth,
    height: frontHeight,
    stroke: '#00f',
    strokeWidth: 1,
    listening:false
});

var ramaBack =  new Kinetic.Rect({
    x: X-0.5+glubX,
    y: Y-0.5+glubY,
    width: backWidth,
    height: backHeight,
    stroke: '#ccc',
    strokeWidth: 1,

    listening:false
})

//karkas.add(ramaFront);
//karkas.add(ramaFaceOut);


// add the shape to the layer
layer.add(ramaBack);
group.add(rect);
group.add(rect2);

layer.add(group);
layer.add(ramaFront);
layer.add(karkas);
// add the layer to the stage
stage.add(layer);

