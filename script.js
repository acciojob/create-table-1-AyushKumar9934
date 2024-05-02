function insert_Row() {
    //Write your code here
  let oldtable=document.getElementById("sampleTable");
  let prevHTML=oldtable.innerHTML;
	oldtable.innerHTML="";
	oldtable.innerHTML+=`<tr><td value="New Cell1">New Cell1</td> 
		<td value="New Cell2">New Cell2</td></tr>`+prevHTML;
		
  
}
