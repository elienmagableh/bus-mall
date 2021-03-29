'use strict';
let LIndex;
let MIndex;
let RIndex;
let max= 25;
let attempt= 1;
let votes = [];
let views = [];
const names = [
  'bag.jpg',
  'banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg',
];
const LImage = document.getElementById('Limage');
const MImage = document.getElementById('Mimage');
const RImage = document.getElementById('Rimage');
const imagesSec = document.getElementById('images-sec');
function bus(name) {
  this.name = name;
  this.path = `./images/${name}`;
  this.votes = 0;
  this.views = 0;
  bus.all.push(this);
}
bus.all = [];
for(let i =0;i<names.length;i++){
  new bus(names[i]);
}
function render(){
  LIndex = randomNumber(0,bus.all.length-1);
  LImage.src = bus.all[LIndex].path;
  LImage.alt = bus.all[LIndex].name;
  LImage.title = bus.all[LIndex].name;
  bus.all[LIndex].views++;
  RIndex = randomNumber(0,bus.all.length-1);
  RImage.src = bus.all[RIndex].path;
  RImage.alt = bus.all[RIndex].name;
  RImage.title = bus.all[RIndex].name;
  bus.all[RIndex].views++;
  MIndex = randomNumber(0,bus.all.length-1);
  MImage.src = bus.all[MIndex].path;
  MImage.alt = bus.all[MIndex].name;
  MImage.title = bus.all[MIndex].name;
  bus.all[MIndex].views++;
}
imagesSec.addEventListener('click',handelClick);
function handelClick(event){
  if (event.target.id !== 'images-sec') {
    if (attempt < max) {
      attempt++;
      if (event.target.id === RImage.id) {
        bus.all[RIndex].votes++;
      }
      else if(event.target.id === LImage.id) {
        bus.all[LIndex].votes++;
      }
      else{
        bus.all[MIndex].votes++;
      }
      render();
    }
    else {
      if (event.target.id === RImage.id) {
        bus.all[RIndex].votes++;
      }
      else if(event.target.id === LImage.id) {
        bus.all[LIndex].votes++;
      }
      else{
        bus.all[MIndex].votes++;
      }
      let ulEl = document.getElementById('Result');
      let liEl;
      for (let i = 0; i < bus.all.length; i++) {
        votes.push(bus.all[i].votes);
        views.push(bus.all[i].views);
        liEl = document.createElement('li');
        liEl.textContent = `${bus.all[i].name} has ${bus.all[i].views} views and has ${bus.all[i].votes} votes.`;
        ulEl.appendChild(liEl);
      }
      imagesSec.removeEventListener('click', handelClick);
      
    }
  }
}
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
render();