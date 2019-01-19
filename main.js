function makePie(data) {
 
  
    let canvasP = document.getElementById("pie")
    let ctxP = canvasP.getContext("2d");
 
 
 
    canvasP.width = 800;
    canvasP.height = 600;
    var cx = canvasP.width / 2;
    var cy = canvasP.height / 2;
    let radius = 200;
    let startAngle = 0;
    let yards = 0;
 
 
 
    data.forEach(data => {
        yards = yards + Number(data.yards)
    })
    console.log("Total is", yards)
 
 
   
    data.forEach(pie => {
       
        ctxP.fillStyle = pie.color;
        ctxP.lineWidth = 1;
        ctxP.strokeStlye = '#333';
 
        
        console.log("Creating slice:")
        ctxP.beginPath();
        let endAngle = ((pie.yards / yards) * Math.PI * 2) + startAngle;
       
        ctxP.moveTo(cx, cy);
        ctxP.arc(cx, cy, radius, startAngle, endAngle, false);
        ctxP.lineTo(cx, cy);
        ctxP.fill();
        ctxP.stroke();
        ctxP.closePath();
 
      
        ctxP.beginPath();
        ctxP.font = "22px Helvetica, Calibri";
        ctxP.textAlign = "center";
        ctxP.fillStyle = "#333";
 
        
        let theta = (startAngle + endAngle) / 2;
        let deltaY = Math.sin(theta) * 1.4 * radius;
        let deltaX = Math.cos(theta) * 1.4 * radius;
        
        console.log(pie.title)
        ctxP.fillText(pie.title, deltaX + cx, deltaY + cy);
        ctxP.closePath();
 
        
        ctxP.beginPath();
        ctxP.font = "22px Helvetica, Calibri";
        ctxP.textAlign = "center";
        ctxP.fillStyle = "#333";
        let percent = Math.trunc((pie.yards / yards) * 100)
        ctxP.fillText(percent + "%", (deltaX / 2) + cx, (deltaY / 2) + cy);
        ctxP.closePath();
        startAngle = endAngle;
    });
}
 
function plotGraph(data) {
    let canvasB = document.getElementById("bar")
    let ctxB = canvasB.getContext("2d");
    let startPoint = 10;
    let endPoint = 60;
    let width = 60;
    let total = 0;
 
    canvasB.width = 800;
    canvasB.height = 600;
 
    data.forEach(graph => {
 
 
        console.log(graph.title)
        ctxB.beginPath();
        ctxB.fillStyle = graph.color;
    
        console.log((graph.yards / total) * 100);

        ctxB.fillRect(endPoint, 599, width, (graph.yards) * -4);
        endPoint = endPoint + startPoint + 80;
        console.log(startPoint)
        ctxB.closePath();
 

        txB.beginPath();
        ctxB.font = "22px Helvetica, Calibri";
        ctxB.textAlign = "center";
        ctxB.fillStyle = "#333";
        context.fillText(graph.title, x, graphHeight - barHeight - 30 - 1);
        ctxB.closePath();

        txB.beginPath();
        ctxB.font = "22px Helvetica, Calibri";
        ctxB.textAlign = "center";
        ctxB.fillStyle = "#333";
 
        ctxB.closePath();
    });
}
