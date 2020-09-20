const canvas=document.getElementById("canvas");

const ctx= canvas.getContext('2d');


const reader=new FileReader();

const img = new Image();

const uploadImage=(e)=>{
    reader.onload=()=>{
        img.onload=()=>{
            canvas.width=img.width;
            canvas.height=img.height;
            ctx.drawImage(img, 0 ,0);

        };
        img.src= reader.result;

    };
   reader.readAsDataURL(e.target.files[0]);
};



const imageLoader=document.getElementById("uploader");

imageLoader.addEventListener('change', uploadImage);
var clickState=0;
const greyScale =()=>{
    if (clickState == 0) {
        clickState = 1;
        const imgData= ctx.getImageData(0,0, canvas.width, canvas.height );
        const data= imgData.data;

        for (let i = 0; i <data.length ; i+=4) {
            const gray= data[i]*0.21+data[i+1]*0.71+data[i+2]*0.07;
            data[i]= gray;
            data[i+1]= gray;
            data[i+2]= gray;
        }
        ctx.putImageData(imgData, 0, 0)
    } else {
        clickState=0;
        img.src=reader.result;
    }

};
const sepia =()=>{
    if (clickState == 0) {
        clickState = 1;
        const imgData= ctx.getImageData(0,0, canvas.width, canvas.height );
        const data= imgData.data;

        for (let i = 0; i <data.length ; i+=4) {
            const gray= data[i]*0.21+data[i+1]*0.71+data[i+2]*0.07;
            data[i]= gray+95;
            data[i+1]= gray+58;
            data[i+2]= gray;
        }
        ctx.putImageData(imgData, 0, 0)
    } else {
        clickState=0;
        img.src=reader.result;
    }

};
const invert =()=>{
    if (clickState == 0) {
        clickState = 1;
        const imgData= ctx.getImageData(0,0, canvas.width, canvas.height );
        const data= imgData.data;

        for (let i = 0; i <data.length ; i+=4) {

            data[i]= 255- data[i];
            data[i+1]= 255- data[i+1];
            data[i+2]= 255- data[i+2];
        }
        ctx.putImageData(imgData, 0, 0)
    } else {
        clickState=0;
        img.src=reader.result;
    }

};
const rbg =()=>{
    if (clickState == 0) {
        clickState = 1;
        const imgData= ctx.getImageData(0,0, canvas.width, canvas.height );
        const data= imgData.data;

        for (let i = 0; i <data.length ; i+=4) {

            data[i]= data[i];
            data[i+1]= data[i+2];
            data[i+2]= data[i+1];
        }
        ctx.putImageData(imgData, 0, 0)
    } else {
        clickState=0;
        img.src=reader.result;
    }

};
const bgr =()=>{
    if (clickState == 0) {
        clickState = 1;
        const imgData= ctx.getImageData(0,0, canvas.width, canvas.height );
        const data= imgData.data;

        for (let i = 0; i <data.length ; i+=4) {

            data[i]= data[i+2];
            data[i+1]= data[i+1];
            data[i+2]= data[i];
        }
        ctx.putImageData(imgData, 0, 0)
    } else {
        clickState=0;
        img.src=reader.result;
    }

};
const gbr =()=>{
    if (clickState == 0) {
        clickState = 1;
        const imgData= ctx.getImageData(0,0, canvas.width, canvas.height );
        const data= imgData.data;

        for (let i = 0; i <data.length ; i+=4) {

            data[i]= data[i+1];
            data[i+1]= data[i+2];
            data[i+2]= data[i];
        }
        ctx.putImageData(imgData, 0, 0)
    } else {
        clickState=0;
        img.src=reader.result;
    }

};
const grb =()=>{
    if (clickState == 0) {
        clickState = 1;
        const imgData= ctx.getImageData(0,0, canvas.width, canvas.height );
        const data= imgData.data;

        for (let i = 0; i <data.length ; i+=4) {

            data[i]= data[i+1];
            data[i+1]= data[i];
            data[i+2]= data[i+2];
        }
        ctx.putImageData(imgData, 0, 0)
    } else {
        clickState=0;
        img.src=reader.result;
    }


};

const clearFilters=()=>{
img.src=reader.result;
};

document.querySelectorAll("button")[0].addEventListener('click', greyScale);
document.querySelectorAll("button")[1].addEventListener('click', sepia);
document.querySelectorAll("button")[2].addEventListener('click', invert);
document.querySelectorAll("button")[3].addEventListener('click', rbg);
document.querySelectorAll("button")[4].addEventListener('click', bgr);
document.querySelectorAll("button")[5].addEventListener('click', gbr);
document.querySelectorAll("button")[6].addEventListener('click', grb);
document.querySelectorAll("button")[7].addEventListener('click', clearFilters);