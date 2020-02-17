function printLabel(labeledObj) {
    console.log(labeledObj.label);
}
var myObj = { size: 9, label: "Size 9 Object" };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
        console.log("newSquare's color is " + newSquare.color);
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
        console.log("newSquare's area is " + newSquare.area);
    }
    return newSquare;
}
var mySquare = createSquare({ color: "blue", width: 13 });
