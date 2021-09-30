const images=[
    'images/vacation1.jpg',
    'images/vacation2.jpg',
    'images/vacation3.jpg',
    'images/vacation4.jpg',
    'images/vacation5.jpg'
]
// let imgIndex=0;
// const imgElement=document.getElementById('slider-img')
// setInterval(()=>{
//     if(imgIndex>=images.length){
//         imgIndex=0;
//     }
//     const imgUrl=images[imgIndex];
//    imgElement.setAttribute('src',imgUrl)
//   imgIndex++;

// },1000)
let imgIndex=0;
const imgElement=document.getElementById('slider-img');
setInterval(()=>{
    if(imgIndex>=images.length){
        imgIndex=0;
    }
    const imgUrl=images[imgIndex];
    imgElement.setAttribute('src',imgUrl)
    imgIndex++;
},1000)