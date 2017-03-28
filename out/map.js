var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var mapJason = [
    { x: 0, y: 0, walkAble: false },
    { x: 64, y: 0, walkAble: false },
    { x: 128, y: 0, walkAble: false },
    { x: 192, y: 0, walkAble: false },
    { x: 256, y: 0, walkAble: false },
    { x: 320, y: 0, walkAble: false },
    { x: 384, y: 0, walkAble: false },
    { x: 448, y: 0, walkAble: false },
    { x: 512, y: 0, walkAble: false },
    { x: 576, y: 0, walkAble: false },
    { x: 0, y: 64, walkAble: false },
    { x: 64, y: 64, walkAble: false },
    { x: 128, y: 64, walkAble: false },
    { x: 192, y: 64, walkAble: false },
    { x: 256, y: 64, walkAble: false },
    { x: 320, y: 64, walkAble: false },
    { x: 384, y: 64, walkAble: false },
    { x: 448, y: 64, walkAble: false },
    { x: 512, y: 64, walkAble: false },
    { x: 576, y: 64, walkAble: false },
    { x: 0, y: 128, walkAble: false },
    { x: 64, y: 128, walkAble: false },
    { x: 128, y: 128, walkAble: false },
    { x: 192, y: 128, walkAble: false },
    { x: 256, y: 128, walkAble: false },
    { x: 320, y: 128, walkAble: false },
    { x: 384, y: 128, walkAble: false },
    { x: 448, y: 128, walkAble: false },
    { x: 512, y: 128, walkAble: false },
    { x: 576, y: 128, walkAble: false },
    { x: 0, y: 192, walkAble: false },
    { x: 64, y: 192, walkAble: false },
    { x: 128, y: 192, walkAble: false },
    { x: 192, y: 192, walkAble: false },
    { x: 256, y: 192, walkAble: false },
    { x: 320, y: 192, walkAble: false },
    { x: 384, y: 192, walkAble: false },
    { x: 448, y: 192, walkAble: false },
    { x: 512, y: 192, walkAble: false },
    { x: 576, y: 192, walkAble: false },
    { x: 0, y: 256, walkAble: false },
    { x: 64, y: 256, walkAble: false },
    { x: 128, y: 256, walkAble: false },
    { x: 192, y: 256, walkAble: false },
    { x: 256, y: 256, walkAble: false },
    { x: 320, y: 256, walkAble: false },
    { x: 384, y: 256, walkAble: false },
    { x: 448, y: 256, walkAble: false },
    { x: 512, y: 256, walkAble: false },
    { x: 576, y: 256, walkAble: false },
    { x: 0, y: 320, walkAble: false },
    { x: 64, y: 320, walkAble: false },
    { x: 128, y: 320, walkAble: false },
    { x: 192, y: 320, walkAble: false },
    { x: 256, y: 320, walkAble: false },
    { x: 320, y: 320, walkAble: false },
    { x: 384, y: 320, walkAble: false },
    { x: 448, y: 320, walkAble: false },
    { x: 512, y: 320, walkAble: false },
    { x: 576, y: 320, walkAble: false },
    { x: 0, y: 384, walkAble: false },
    { x: 64, y: 384, walkAble: false },
    { x: 128, y: 384, walkAble: false },
    { x: 192, y: 384, walkAble: false },
    { x: 256, y: 384, walkAble: false },
    { x: 320, y: 384, walkAble: false },
    { x: 384, y: 384, walkAble: false },
    { x: 448, y: 384, walkAble: false },
    { x: 512, y: 384, walkAble: false },
    { x: 576, y: 384, walkAble: false },
    { x: 0, y: 448, walkAble: false },
    { x: 64, y: 448, walkAble: false },
    { x: 128, y: 448, walkAble: false },
    { x: 192, y: 448, walkAble: false },
    { x: 256, y: 448, walkAble: false },
    { x: 320, y: 448, walkAble: false },
    { x: 384, y: 448, walkAble: false },
    { x: 448, y: 448, walkAble: false },
    { x: 512, y: 448, walkAble: false },
    { x: 576, y: 448, walkAble: false },
    { x: 0, y: 512, walkAble: false },
    { x: 64, y: 512, walkAble: false },
    { x: 128, y: 512, walkAble: false },
    { x: 192, y: 512, walkAble: false },
    { x: 256, y: 512, walkAble: false },
    { x: 320, y: 512, walkAble: false },
    { x: 384, y: 512, walkAble: false },
    { x: 448, y: 512, walkAble: false },
    { x: 512, y: 512, walkAble: false },
    { x: 576, y: 512, walkAble: false },
    { x: 0, y: 576, walkAble: false },
    { x: 64, y: 576, walkAble: false },
    { x: 128, y: 576, walkAble: false },
    { x: 192, y: 576, walkAble: false },
    { x: 256, y: 576, walkAble: false },
    { x: 320, y: 576, walkAble: false },
    { x: 384, y: 576, walkAble: false },
    { x: 448, y: 576, walkAble: false },
    { x: 512, y: 576, walkAble: false },
    { x: 576, y: 576, walkAble: false },
];
var ROW = 10;
var LIST = 10;
var STONEPROBBILITY = 0.2;
var ONETILESIZE = 64;
var manhadun = 0;
var ojilide = 1;
var duijiaoxian = 2;
var tile = (function (_super) {
    __extends(tile, _super);
    function tile() {
        var _this = _super.call(this) || this;
        _this.bitmap = new engine.Bitmap();
        _this.bitmap.x = 0;
        _this.bitmap.y = 0;
        _this.addChild(_this.bitmap);
        _this.weight = 0;
        _this.preTile = null;
        _this.touchEnabled = true;
        return _this;
    }
    return tile;
}(engine.DisplayObjectContainer));
var MainMap = (function (_super) {
    __extends(MainMap, _super);
    function MainMap() {
        var _this = _super.call(this) || this;
        _this.myMap = new Array();
        _this.path = new Array();
        for (var i = 0; i < ROW * LIST; i++) {
            if (Math.random() <= STONEPROBBILITY) {
                mapJason[i].walkAble = false;
            }
            else {
                mapJason[i].walkAble = true;
            }
        }
        //人物初始位置不能为障碍物
        mapJason[0].walkAble = true;
        mapJason[22].walkAble = true;
        mapJason[44].walkAble = true;
        mapJason[99].walkAble = true;
        for (var i = 0; i < ROW * LIST; i++) {
            _this.myMap[i] = new tile();
            _this.myMap[i].walkAble = mapJason[i].walkAble;
            _this.myMap[i].x = mapJason[i].x;
            _this.myMap[i].y = mapJason[i].y;
            if (_this.myMap[i].walkAble) {
                _this.myMap[i].bitmap.texture = engine.Resourse.getInstance().getRes("path.jpg");
            }
            else {
                _this.myMap[i].bitmap.texture = engine.Resourse.getInstance().getRes("wall.jpg");
            }
            _this.addChild(_this.myMap[i]);
        }
        return _this;
    }
    MainMap.prototype.estimulate = function (start, end, method) {
        if (method == 0) {
            return Math.abs(end.x / ONETILESIZE - start.x / ONETILESIZE) + Math.abs(end.y / ONETILESIZE - start.y / ONETILESIZE);
        }
        if (method == 1) {
            return Math.sqrt((start.x - end.x) * (start.x - end.x) + (start.y - end.y) * (start.y - end.y));
        }
        if (method == 2) {
            return Math.sqrt((start.x - Math.abs(end.x - start.x) / 2) * (start.x - Math.abs(end.x - start.x) / 2) + (start.y - end.y / 2) * (start.y - end.y / 2)) + Math.abs(end.x - start.x) / 2;
        }
    };
    MainMap.prototype.sortWeight = function (a, b) {
        return a.weight - b.weight;
    };
    MainMap.prototype.generatePath = function (start, end) {
        //清空路径
        var x = this.path.length;
        for (var i = 0; i < x; i++) {
            this.path.pop();
        }
        this.path.pop();
        //起终点是否相同
        if (start != end) {
            for (var temp = end; temp != start; temp = temp.preTile) {
                this.path.push(temp);
            }
        }
        else if (start = end) {
            this.path.push(start);
        }
        this.path.reverse();
    };
    MainMap.prototype.findWay = function (startTile, endTile) {
        startTile = this.myMap[startTile.y * ROW + startTile.x];
        endTile = this.myMap[endTile.y * ROW + endTile.x];
        if (endTile.walkAble == false) {
            console.log("(" + endTile.x + "," + endTile.y + ")" + "不可达");
            return false;
        }
        else if (startTile == endTile) {
            console.log("起点终点相同" + "  不移动");
            this.generatePath(startTile, endTile);
            return true;
        }
        var currentTile = startTile;
        currentTile.weight = 0;
        currentTile.preTile = null;
        var openList = new Array();
        var closedList = new Array();
        while (currentTile != endTile) {
            closedList.push(currentTile);
            var tempOpenList = new Array();
            for (var i = currentTile.x - 1 * ONETILESIZE; i < currentTile.x + 2 * ONETILESIZE; i += ONETILESIZE) {
                for (var j = currentTile.y - 1 * ONETILESIZE; j < currentTile.y + 2 * ONETILESIZE; j += ONETILESIZE) {
                    //判断是否超出地图
                    if (i < 0 || j < 0 || j > 9 * ONETILESIZE || i > 9 * ONETILESIZE) {
                        continue;
                    }
                    //判断斜线是否可走
                    if (i == currentTile.x - 1 * ONETILESIZE && j == currentTile.y - 1 * ONETILESIZE) {
                        if (this.myMap[(j / ONETILESIZE) * ROW + i / ONETILESIZE + 1].walkAble == false && this.myMap[((j / ONETILESIZE) + 1) * ROW + i / ONETILESIZE].walkAble == false) {
                            continue;
                        }
                    }
                    else if (i == currentTile.x - 1 * ONETILESIZE && j == currentTile.y + 1 * ONETILESIZE) {
                        if (this.myMap[(j / ONETILESIZE) * ROW + i / ONETILESIZE + 1].walkAble == false && this.myMap[((j / ONETILESIZE) - 1) * ROW + i / ONETILESIZE].walkAble == false) {
                            continue;
                        }
                    }
                    else if (i == currentTile.x + 1 * ONETILESIZE && j == currentTile.y - 1 * ONETILESIZE) {
                        if (this.myMap[(j / ONETILESIZE) * ROW + i / ONETILESIZE - 1].walkAble == false && this.myMap[((j / ONETILESIZE) + 1) * ROW + i / ONETILESIZE].walkAble == false) {
                            continue;
                        }
                    }
                    else if (i == currentTile.x + 1 * ONETILESIZE && j == currentTile.y + 1 * ONETILESIZE) {
                        if (this.myMap[(j / ONETILESIZE) * ROW + i / ONETILESIZE - 1].walkAble == false && this.myMap[((j / ONETILESIZE) - 1) * ROW + i / ONETILESIZE].walkAble == false) {
                            continue;
                        }
                    }
                    //计算G函数步进
                    var dg = 0;
                    if ((i == currentTile.x - 1 * ONETILESIZE && j == currentTile.y) || (i == currentTile.x + 1 * ONETILESIZE && j == currentTile.y) || (i == currentTile.x && j == currentTile.y - 1 * ONETILESIZE) || (i == currentTile.x && j == currentTile.y + 1 * ONETILESIZE)) {
                        dg = 1;
                    }
                    else {
                        dg = 1.4;
                    }
                    var testTile = this.myMap[(j / ONETILESIZE) * ROW + i / ONETILESIZE];
                    // console.log("当前判断砖块坐标：" + "(" + i / ONETILESIZE + "," + j / ONETILESIZE + ")");
                    //判断是否为当前地面
                    if (testTile == currentTile) {
                        continue;
                    }
                    else if (testTile.walkAble == false) {
                        continue;
                    }
                    else if (testTile.walkAble) {
                        //testTile到达endtile
                        if (testTile == endTile) {
                            endTile.preTile = currentTile;
                            // console.log("(" + endTile.x + "," + endTile.y + ")" + "已达到");
                            this.generatePath(startTile, endTile);
                            return true;
                        }
                        else if (openList.indexOf(testTile) == -1 && closedList.indexOf(testTile) == -1) {
                            tempOpenList.push(testTile);
                            // console.log("openlist +"+"("+testTile.x+","+testTile.y+")");
                            testTile.weight = currentTile.weight + dg + this.estimulate(testTile, endTile, ojilide);
                            testTile.preTile = currentTile;
                        }
                    }
                }
            }
            if (openList.indexOf(currentTile) != -1) {
                var p = openList.indexOf(currentTile);
                for (var i = p; i < openList.length - 1; i++) {
                    openList[i] = openList[i + 1];
                }
                openList.pop();
                // console.log("openlist -"+"("+currentTile.x+","+currentTile.y+")");
            }
            if (tempOpenList.length != 0) {
                tempOpenList.sort(this.sortWeight);
                currentTile = tempOpenList.shift();
                ;
                for (var i = 0; i < tempOpenList.length; i++) {
                    openList.push(tempOpenList[i]);
                }
                // console.log("此次判断最小权值：" + currentTile.weight);
                // console.log("此次选择点坐标：（" + currentTile.x + "," + currentTile.y + ")");
            }
            else if (openList.length != 0) {
                openList.sort(this.sortWeight);
                currentTile = openList[0];
                // console.log("当前点已经无路可走");
                // console.log("选择开放列表中的最小权值：" + currentTile.weight);
                // console.log("开放列表中选择点坐标：（" + currentTile.x + "," + currentTile.y + ")");
            }
            else {
                console.log("当前判断列表为空且开放列表为空，未找到路径");
                return false;
            }
        }
    };
    MainMap.prototype.getPath = function () {
        if (this.path.length != 0) {
            return this.path;
        }
        else {
            console.log("暂时无路");
            return null;
        }
    };
    return MainMap;
}(engine.DisplayObjectContainer));
