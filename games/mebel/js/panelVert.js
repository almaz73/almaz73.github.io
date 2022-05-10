function panelVert(bort, align, move){
    var INbort = JSON.parse(JSON.stringify(bort))

    var compressX = bort.frontHeight/bort.backHeight;
    var group = new Kinetic.Group({
        draggable: (move!="static"),
        dragBoundFunc: function(pos) {

            var x= pos.x;
            if(x<0)x=0;
            if(x>bort.frontWidth-bort.thickness)x=bort.frontWidth-bort.thickness;
            smechenie(x);
            return {x: x,y: this.getAbsolutePosition().y}
        }
    });





    var kant = new Kinetic.Rect({
        x: bort.x,
        y: bort.y,
        width: bort.thickness,
        height: bort.frontHeight,
        fill: bort.fillKant||bort.fill,
        stroke: bort.stroke,
        strokeWidth: 1,
       // opacity:0.5
    });

    var backX = Math.floor(bort.x+bort.glubX+bort.thickness/compressX)+0.5;
    var sideLeft = new Kinetic.Polygon({
        fill: bort.fill,
        stroke: bort.stroke,
        strokeWidth: 1
    });


    var sideRight = new Kinetic.Polygon({
        fill: bort.fill2||bort.fill,//bort.fill,
        stroke: bort.stroke,
        strokeWidth: 1

    });

    if(!isNaN(align)){
        //align = "20%"
        align = align/(bort.frontWidth-bort.thickness)*100
    }

    if(align=="left"){smechenie(0)};
    if(align=="right"){
        group.setX(bort.frontWidth-bort.thickness);
        smechenie(bort.frontWidth-bort.thickness);
    } else if(align!="right" &&  align!="left"){
        var sdvig =(bort.frontWidth-bort.thickness)/100*parseFloat(align);
        group.setX(sdvig);
        smechenie(sdvig);
    }


    var X1,X3;
    group.add(sideLeft);
    group.add(sideRight);
    group.add(kant);
    if(X1>X3)sideRight.moveToBottom();


    INbort.group = group;





    return INbort;

    function smechenie(x){
        var x1, x2, x4, x3, y1, y2, y3, y4;
        var procent = x/(bort.frontWidth)*100;
        var backThickness = bort.thickness/compressX;

        x1 = bort.x//+bort.thickness;
        x2 = bort.x+bort.thickness;
        x4 = -x+ bort.x+bort.glubX +Math.floor(bort.backWidth*procent/100)+backThickness;
        x3=x4-backThickness;

        y1 = bort.y;
        y2 = bort.y+bort.frontHeight;
        y3 = bort.y+bort.glubY;
        y4 = bort.y+bort.glubY+bort.backHeight;


        sideLeft.setPoints([
            x1,
            y1,

            x3,
            y3,

            x3,
            y4,

            x1,
            y2
        ])

        sideRight.setPoints([
            x2,
            y1,

            x4,
            y3,

            x4,
            y4,

            x2,
            y2
        ])


        INbort.x1 = group.getX() + bort.x;
        INbort.x2 = group.getX() + bort.x + bort.thickness;
        INbort.x4 = group.getX() + bort.x + x4 ;
        INbort.x3 = group.getX() + bort.x + x3;
        INbort.y1=y1;
        INbort.y2=y2;
        INbort.y3=y3;
        INbort.y4=y4;


        X1=x1; X3=x3;
        (x1<x3)?sideLeft.moveToBottom():sideRight.moveToBottom();




    }
}
