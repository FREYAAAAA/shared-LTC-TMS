
var toolbarColors = ["", "yellow","blue","red","green", "crimson", "emerald", "aqua", "orange", "purple"];

var toolbarColorRGBs = ["", "yellow","blue","red","green", "crimson", "emerald", "35F3C3", "orange", "purple"];



var buttonoff = new Image();
var button = new Image();
var buttonsel = new Image();





function turnOnButton(idName) {
       var  newImage = "url(" + buttonsel.src + ")";
        document.getElementById(idName).style.backgroundImage = newImage;
      }

function turnOffButton(idName) {
     var  newImage = "url(" + buttonoff.src + ")";
	if (idName == 'Current') newImage = "url(" + button.src + ")";
       document.getElementById(idName).style.backgroundImage = newImage;
      }


var quoteMark = unescape( '%22' );
var singlequoteMark = unescape( '%27' );
var bookTag = "<a href = 'http://www.FiniteAndCalc.org'>";

function writeMailtag(theSubject) {
var theAddress = "mailto:Stefan <zweigmedia@gmail.com>?Subject="+theSubject;
var theTag = "<a href = '" + theAddress + "'>Webmaster</a>";
document.writeln(theTag);
} // writeMailtag


function drawLine(theColorIndex) {
var theColor = toolbarColorRGBs [theColorIndex];
var theStr = '<hr noshade width = 876 color = ' + theColor + '>';
document.writeln(theStr);
} // drawLine



function writeToolbar(number, theColorIndex, folderDepth) {
// number = which tag is active
// theColorIndex = index in toolbarColors
// folderDepth =  0 if not in folder, 1 if in folder, etc

var theColor = toolbarColors [theColorIndex]; // this is global for some readopn

var buttonoffsrcString = "nwelts/" + theColor + "buttonoff.gif";

var buttonsrcString = "nwelts/" + theColor + "button.gif";

var buttonselsrcString = "nwelts/" + theColor + "buttonsel.gif";

var theIdentities = ["", "Other0", "Other1","Other2","Other3", "Other4", "Other5", "Other6"];
theIdentities[number] = "Current";
var theMainPages = ['', 'index.html', 'tcfinitep.html', 'tccalcp.html', 'tccombop.html', 'summaryindex.html', 'tutindex.html', 'utilsindex.html'];
theMainPages[number] = '#';
var buttonFolderStr = "nwelts";
if (folderDepth > 0) {
	for (var i = 1; i <= folderDepth; i++) {
		buttonoffsrcString = "../" + buttonoffsrcString;
		buttonsrcString = "../" + buttonsrcString;
		buttonselsrcString = "../" + buttonselsrcString;
		buttonFolderStr = "../" + buttonFolderStr;
		for (var j = 1; j <= 7; j++) {
			theMainPages[j] = "../" + theMainPages[j];
			} // j
		} // i
	} // if in a folder
buttonoff.src = buttonoffsrcString;
button.src = buttonsrcString;
buttonsel.src = buttonselsrcString;

var theBrokenLineStr = "<td width = 10><img src = '" + buttonFolderStr  + "/" + theColor + "line.gif' height = 2 width = 10></td>";
for (var i = 1; i <= number-1; i++) {
	theBrokenLineStr += "<td width = 118><img src = '" + buttonFolderStr  + "/" + theColor + "line.gif' height = 2 width = 118></td><td width = 5><img src = '" + buttonFolderStr  + "/" + theColor + "line.gif' height = 2 width = 5></td>";
	}// i
if(number > 0) theBrokenLineStr += "<td width = 118></td><td width = 5><img src = '" + buttonFolderStr  + "/" + theColor + "line.gif' height = 2 width = 5></td>";
for (var i = number+1; i <= 7; i++) {
	theBrokenLineStr += "<td width = 118><img src = '" + buttonFolderStr  + "/" + theColor + "line.gif' height = 2 width = 118></td>";
if (i < 7) theBrokenLineStr += "<td width = 5><img src = '" + buttonFolderStr  + "/" + theColor + "line.gif' height = 2 width = 5></td>";
	}// i
theBrokenLineStr += "<td width = 10><img src = '" + buttonFolderStr  + "/" + theColor + "line.gif' height = 2 width = 10></td>";

var theToolBarString = "<div id = 'toolbar'><table cellspacing = 0 cellpadding = 0><tr><td width = 10></td><td id='" + theIdentities[1] + "' align = center width = 118 height = 34><a onMouseover = " + quoteMark + "Javascript: turnOnButton('" + theIdentities[1] + "')" + quoteMark + "onMouseout = " + quoteMark + "Javascript: turnOffButton('" + theIdentities[1] + "')" + quoteMark + " href = '" + theMainPages[1] + "' target = '_top'>Main Page</a></td><td width = 5></td><td id='" + theIdentities[2] + "' align = center width = 118 height = 34><a onMouseover = " + quoteMark + "Javascript: turnOnButton('" + theIdentities[2] + "')" + quoteMark + "onMouseout = " + quoteMark + "Javascript: turnOffButton('" + theIdentities[2] + "')" + quoteMark + " href = '" + theMainPages[2] + "' target = '_top'>&nbsp;Everything for Finite Math&nbsp;</a></td><td width = 5></td><td id='" + theIdentities[3] + "' align = center width = 118 height = 34><a onMouseover = " + quoteMark + "Javascript: turnOnButton('" + theIdentities[3] + "')" + quoteMark + "onMouseout = " + quoteMark + "Javascript: turnOffButton('" + theIdentities[3] + "')" + quoteMark + " href = '" + theMainPages[3] + "' target = '_top'>&nbsp;Everything for Applied Calc&nbsp;</a></td><td width = 5></td><td id='" + theIdentities[4] + "' align = center width = 118 height = 34><a onMouseover = " + quoteMark + "Javascript: turnOnButton('" + theIdentities[4] + "')" + quoteMark + "onMouseout = " + quoteMark + "Javascript: turnOffButton('" + theIdentities[4] + "')" + quoteMark + " href = '" + theMainPages[4] + "' target = '_top'>Everything</a></td><td width = 5></td><td id='" + theIdentities[5] + "' align = center width = 118 height = 34><a onMouseover = " + quoteMark + "Javascript: turnOnButton('" + theIdentities[5] + "')" + quoteMark + "onMouseout = " + quoteMark + "Javascript: turnOffButton('" + theIdentities[5] + "')" + quoteMark + " href = '" + theMainPages[5] + "' target = '_top'>Topic Summaries</a></td><td width = 5></td><td id='" + theIdentities[6] + "' align = center width = 118 height = 34><a onMouseover = " + quoteMark + "Javascript: turnOnButton('" + theIdentities[6] + "')" + quoteMark + "onMouseout = " + quoteMark + "Javascript: turnOffButton('" + theIdentities[6] + "')" + quoteMark + " href = '" + theMainPages[6] + "' target = '_top'>On Line Tutorials</a></td><td width = 5></td><td id='" + theIdentities[7] + "' align = center width = 118 height = 34><a onMouseover = " + quoteMark + "Javascript: turnOnButton('" + theIdentities[7] + "')" + quoteMark + "onMouseout = " + quoteMark + "Javascript: turnOffButton('" + theIdentities[7] + "')" + quoteMark + " href = '" + theMainPages[7] + "' target = '_top'>On Line Utilities</a></td><td width = 5></td><td width = 10></td></tr><tr>" + theBrokenLineStr + "</tr></table></div>";
document.write(theToolBarString);

} // writeToolbar




// *** Error Handler ******
function myErrorTrap(message,url,linenumber) {
this.parent.bottom.window.location = "wrong.html";
return (true);
} // end of on error
// ********************

function sesame(url,hsize,vsize){
// Default size is 550 x 400
        var tb="toolbar=0,directories=0,status=0,menubar=0"
        tb+=",scrollbars=1,resizable=1,"
    var tbend="width="+hsize+",height="+vsize;
    if(tbend.indexOf("<undefined>")!=-1){tbend="width=550,height=400"}
        tb+=tbend;
        Win_1 = window.open(url,"win1",tb);
	Win_1.focus();
    }
