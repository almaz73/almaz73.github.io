function panelHor(bort, valign, moveable){
    var INbort = JSON.parse(JSON.stringify(bort))

    var compressY = bort.frontHeight/bort.backHeight;
    var group = new Kinetic.Group({
        draggable: (moveable!="static"),
        dragBoundFunc: function(pos) {
            var y= pos.y;
            if(y<0)y=0;
            if(y>bort.frontHeight-bort.thickness)y=bort.frontHeight-bort.thickness;
            smechenie(y);
            return {x: this.getAbsolutePosition().x,y: y}
        }
    });


    var kant = new Kinetic.Rect({
        x: bort.x,
        y: bort.y,
        width: bort.frontWidth,
        height: bort.thickness,
        fill: bort.fillKant||bort.fill,
        stroke: bort.stroke,
        strokeWidth: 1
    });

    var sideTop = new Kinetic.Polygon({
        fill: bort.fill2||bort.fill,
        stroke: bort.stroke,
        strokeWidth: 1
    });
    var sideBottom = new Kinetic.Polygon({
        fill: bort.fill,
        stroke: bort.stroke,
        strokeWidth: 1
    });

    smechenie(0);
    if(valign=="bottom"){
        group.setY(bort.frontHeight-bort.thickness);
        smechenie(bort.frontHeight-bort.thickness);
    }

    if(valign!="top" &&  valign!="bottom"){
        var sdvig =(bort.frontHeight-bort.thickness)/100*parseFloat(valign);
        group.setY(sdvig);
        smechenie(sdvig);
    }

    var Y1, Y3;

    group.add(sideTop);
    group.add(sideBottom);
    group.add(kant);
    if(Y1>Y3)sideBottom.moveToBottom();

    INbort.group = group;
    return INbort;



    function smechenie(y){
        var x1, x2, x4, x3, y1, y2, y3, y4;
        var procent = y/(bort.frontHeight-bort.thickness)*100;
        var backThickness = bort.thickness/compressY;

        var y1 = bort.y;
        var y2 = bort.y+bort.frontHeight;

        var glubglub = bort.thickness/compressY*(100-procent)/100;
        var y4 = -y+ bort.y+bort.glubY +bort.backHeight*procent/100+glubglub-bort.thickness+3;

        //var y4 = -y+ bort.y+bort.glubY +bort.backHeight*procent/100//-backThickness;

        var y3=y4+backThickness;



        var x1 = bort.x;
        var x2 = bort.x+bort.frontWidth;
        var x3 = bort.x+bort.glubX;
        var x4 = bort.x+bort.glubX+bort.backWidth;







        sideTop.setPoints([
            x1,
            y1,

            x3,
            y4,

            x4,
            y4,

            x2,
            y1
        ])

        sideBottom.setPoints([
            x1,
            bort.y+bort.thickness,

            x3,
            y3,

            x4,
            y3,

            x2,
            bort.y+bort.thickness,
        ])
        INbort.y1 = group.getY() + bort.y;
        INbort.y2 = group.getY() + bort.y + bort.thickness;
        INbort.y4 = group.getY() + bort.y + y4;
        INbort.y3 = group.getY() + bort.y + y3;

        INbort.x1=x1;
        INbort.x2=x2;
        INbort.x3=x3;
        INbort.x4=x4;

        Y1=y1; Y3=y3;
        (y1<y3)?sideTop.moveToBottom():sideBottom.moveToBottom();

    }
}
