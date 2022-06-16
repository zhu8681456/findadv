
    // 创建地图实例
        var layeroption =0


        var mapOpts={};
        if (layeroption==1){
                mapOpts = {
                showIndoorMap: false, // 是否在有矢量底图的时候自动展示室内地图，PC默认true,移动端默认false
                resizeEnable: 1, //是否监控地图容器尺寸变化，默认值为false
                dragEnable: true, // 地图是否可通过鼠标拖拽平移，默认为true
                keyboardEnable: false, //地图是否可通过键盘控制，默认为true
                doubleClickZoom: false, // 地图是否可通过双击鼠标放大地图，默认为true
                zoomEnable: 1, //地图是否可缩放，默认值为true
                rotateEnable: 0, // 地图是否可旋转，3D视图默认为true，2D视图默认false
                zoom: 10,
                center: [116.473195,39.973253],
                layers: [new AMap.TileLayer.Satellite()],
                zIndex:0,
             }
            }

        else{

            mapOpts = {
                showIndoorMap: false, // 是否在有矢量底图的时候自动展示室内地图，PC默认true,移动端默认false
                resizeEnable: 1, //是否监控地图容器尺寸变化，默认值为false
                dragEnable: true, // 地图是否可通过鼠标拖拽平移，默认为true
                keyboardEnable: false, //地图是否可通过键盘控制，默认为true
                doubleClickZoom: false, // 地图是否可通过双击鼠标放大地图，默认为true
                zoomEnable: 1, //地图是否可缩放，默认值为true
                rotateEnable: 0, // 地图是否可旋转，3D视图默认为true，2D视图默认false
                zoom: 10,
                center: [116.473195,39.973253],
                 zIndex:0,
             }



        }







    var map = new AMap.Map("container",mapOpts);

  

   
/*
    var positions = [
        [116.493195,39.993253],
        [116.473195,39.993253],
        [116.453195,39.993253],
        [116.493195,39.973253],
        [116.473195,39.973253],
        [116.453195,39.973253],
        [116.493195,39.953253],
        [116.473195,39.953253],
        [116.453195,39.953253]
    ];

    var anchor = [
        'bottom-left',
        'bottom-center',
        'bottom-right',
        'middle-left',
        'center',
        'middle-right',
        'top-left',
        'top-center',
        'top-right'
    ]

  */




    var pos_icon = [];
    var pos_marker = [];
    var icon = [];
    var marker = [];
   
    for (var i = 0; i < positions.length; i++) {
        // 创建一个 Icon
        pos_icon[i] = new AMap.Icon({
            // 图标尺寸
            size: new AMap.Size(20, 20),
            // 图标的取图地址
             image: 'data/icon/poi-marker-default.png' ,  
            // 图标所用图片大小
            imageSize: new AMap.Size(20, 20),
        });
        var labelContent = "<div class='labelContent'>"+position_name[i]+"</div>"

        // 将 Icon 传入 marker
        pos_marker[i] = new AMap.Marker({
            position: positions[i],
            icon: pos_icon[i],
            anchor: 'center', //设置锚点
            offset: new AMap.Pixel(0,5) //设置偏移量
        });
        map.add(pos_marker[i]);

        // 创建一个 Icon
        var imageUrl = 'data/icon/marker.png'

        /*
        icon[i] = new AMap.Icon({
            // 图标尺寸
            size: new AMap.Size(0, 0),
            // 图标的取图地址
            image: imageUrl,
            // 图标所用图片大小
            imageSize: new AMap.Size(10, 10),
        });
        */

        // 将 Icon 传入 marker
        var labelOffset = new AMap.Pixel(0, 0);
        marker[i] = new AMap.Marker({
            position: positions[i],
            //icon: icon[i],
            anchor: anchor[i], //设置锚点
            offset: new AMap.Pixel(0,0), //设置偏移量
            label: {
                direction: 'center',
                content: labelContent,
                offset: labelOffset,
            }
        });
        map.add(marker[i]);


       
    }









  