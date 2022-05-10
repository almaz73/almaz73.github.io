function createCanvas(DIV){
    var stage = new Kinetic.Stage({
        container: DIV,
        width:parseInt(DIV.style.width),
        height:parseInt(DIV.style.height)
    });
    var layer = new Kinetic.Layer();
    this.showBorder = function(bort, opacity){
        var color='#f00';
        var dashArray = [12, 8]
        var x1=bort.x,y1=bort.y//,x3,x4
        var xx1=bort.x+bort.glubX,yy1=bort.y+bort.glubY//,xx3,xx4
        var ramaFront =  new Kinetic.Rect({
            x: bort.x,
            y: bort.y,
            width: bort.frontWidth,
            height: bort.frontHeight,
            stroke: color,
            strokeWidth: 1,
            listening:false,
            dashArray: dashArray,
            opacity:1
        });
        var blueLine = new Kinetic.Line({
            points: [
                x1, y1,
                xx1, yy1,
                xx1+bort.backWidth, yy1,
                x1+bort.frontWidth,y1,
                x1+bort.frontWidth,y1+bort.frontHeight,
                xx1+bort.backWidth,y1+bort.backHeight+bort.glubY,
                xx1, y1+bort.backHeight+bort.glubY,
                x1, y1+bort.frontHeight,
                x1, y1,
            ],
            stroke: color,
            strokeWidth: 1,
            listening:false,
            dashArray: dashArray
        });
        var ramaBack =  new Kinetic.Rect({
            x: bort.x+bort.glubX,
            y: bort.y+bort.glubY,
            width: bort.backWidth,
            height: bort.backHeight,
            stroke: color,
            strokeWidth: 1,
            listening:false,
            dashArray: dashArray,
            opacity:1
        });

        layer.add(blueLine);
        layer.add(ramaFront);
        layer.add(ramaBack);
        stage.add(layer);

    }

    this.vertPanel = function(bort, place, state){

        if(bort.length!=undefined){
            bort = ogrankaTopBottom(bort[0], bort[1]);
        }


        var vPanel = new panelVert(bort, place, state);
        vPanel.group.setOpacity(bort.opacity);



        layer.add(vPanel.group);


        layer.draw();

        return vPanel
    }

    this.horPanel = function(bort, place, state){

        if(bort.length!=undefined){
            bort = ogrankaLeftRight(bort[0], bort[1]);
        }

        var hPanel = new panelHor(bort, place, state);//////////////newbort
        hPanel.group.setOpacity(bort.opacity);
        layer.add(hPanel.group);
        layer.draw()
        return hPanel
    }

// возвращает границы области, по двум введнным ограничивающим объектам
    function ogrankaLeftRight(obj1, obj2){
        if(obj1.x1>obj2.x1){
            var temp = JSON.parse(JSON.stringify(obj1));
            obj1 = JSON.parse(JSON.stringify(obj2));
            obj2 = temp
        }


        var frontWidth = (obj2.x2- obj1.x1) -2*obj2.thickness;
        var backWidth=(obj2.x3 - obj1.x4);//(obj2.x3- obj1.x4) -2*obj2.thickness+obj2.glubX-2
        console.log("    frontWidth, backWidth   = "+frontWidth,backWidth);

        var frontHeight = obj1.frontHeight;
        var backHeight = (obj1.y4-obj1.y3);
        console.log("    frontHeight, backHeight = "+frontHeight, backHeight);


        var glubX = obj1.x4-obj1.x2-obj1.x;
        var glubY = obj1.glubY;
        console.log("    glubX,glubY= "+glubX.toFixed(2),glubY);




        myBort = {
            "fill": obj1.fill,
            "fill2": obj2.fill2||obj1.fill,      /* цвет заливки */// Если закомменитровать все в один цвет красится, удобно при тестировании
            "fillKant":obj1.fillKant||obj1.fill,
            "stroke":obj1.stroke,
            "thickness": obj1.thickness,
            "x": obj1.x2,
            "y": obj1.y1,
            "frontWidth": frontWidth,
            "frontHeight": frontHeight,
            "backHeight": backHeight,
            "glubY": glubY,
            "glubX": glubX,
            "backWidth":backWidth ,
            "opacity":obj1.opacity
        };

        return myBort;
    }


    // возвращает границы области, по двум введнным ограничивающим объектам
    function ogrankaTopBottom(obj1, obj2){
        if(obj1.y1>obj2.y1){
            var temp = JSON.parse(JSON.stringify(obj1));
            obj1 = JSON.parse(JSON.stringify(obj2));
            obj2 = temp
        }

        var compressX = obj2.frontHeight/obj2.backHeight;
        var backThickness = obj2.thickness/compressX;


        var frontHeight = (obj2.y2- obj1.y1) -2*obj2.thickness;
        var backHeight=(obj2.y3 - obj1.y4)-2*backThickness//(obj2.y3 - obj1.y4);//(obj2.y3- obj1.y4) -2*obj2.thickness+obj2.glubX-2
        console.log("    frontHeight, backHeight   = "+frontHeight,backHeight);

        var frontWidth = obj1.frontWidth;
        var backWidth = obj1.backWidth-3//(obj1.y4-obj1.y3);
        console.log("    frontWidth, backWidth = "+frontWidth, backWidth);


        var glubX = obj1.glubX//-obj1.y2-obj1.y1;
        //var glubY = obj1.glubY//-3;
        var glubY =obj1.y4-obj1.y2-obj1.y+ backThickness
        console.log("    glubX,glubY= "+glubX.toFixed(2),glubY);




        myBort = {
            "fill": obj1.fill,
            "fill2": obj2.fill2||obj1.fill,      /* цвет заливки */// Если закомменитровать все в один цвет красится, удобно при тестировании
            "fillKant":obj1.fillKant||obj1.fill,
            "stroke":obj1.stroke,
            "thickness": obj1.thickness,
            "x": obj1.x1    ,
            "y": obj1.y2,
            "frontWidth": frontWidth,
            "frontHeight": frontHeight,
            "backHeight": backHeight,
            "glubY": glubY,
            "glubX": glubX,
            "backWidth":backWidth ,
            "opacity":obj1.opacity
        };

        return myBort;
    }
}