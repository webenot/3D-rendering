import { Drawer } from './classes/Drawer';

// Получаем доступ к элементу (окну) в котором будем рисовать
const ctx = document
  .getElementById('surface')
  .getContext('2d');

// Получаем доступ к массиву пикселей, который будем менять
// + указываем размеры окна в котором будем рисовать
const imageData = ctx.createImageData(800, 600);

const drawer = new Drawer(
  imageData.data,
  imageData.width,
  imageData.height
);

// код после определения класса Drawer
drawer.drawPixel(10, 10, 255, 0, 0);
drawer.drawPixel(10, 20, 0, 0, 255);

// применить все изменения пикселей в массиве к элементу canvas
ctx.putImageData(imageData, 0, 0);

drawer.drawLine(300, 150, 350, 50, 255, 0, 0);
ctx.putImageData(imageData, 0, 0);
