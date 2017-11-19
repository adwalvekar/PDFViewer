console.log(document.getElementById('contents').innerHTML);
filedata = JSON.parse(document.getElementById('contents').innerHTML);
PDFObject.embed("/static/pdf/"+filedata[0], "#pdfwindow");
console.log(filedata.length)
var i = 0;
function goLeft(){
	if (i!=0){
		i--;
		PDFObject.embed("/static/pdf/"+filedata[i], "#pdfwindow");	
	}
	else{
		i = 0;	
	}

}

function goRight(){

	if (i!=filedata.length){
		i++;
		console.log(i);
		PDFObject.embed("/static/pdf/"+filedata[i], "#pdfwindow");	
	}
	else{
		i = filedata.length-1;
	}
	
}