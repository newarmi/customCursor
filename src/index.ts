import Cursor from "./classes/Cursor";

window.onload = () => {
    const canvas = document.querySelector('.mouse-area') as HTMLCanvasElement;
    console.log(canvas)
    new Cursor(canvas)

}
