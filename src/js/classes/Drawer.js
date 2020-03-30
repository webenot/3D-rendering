export class Drawer {
  surface = null;
  width = 0;
  height = 0;

  constructor(surface, width, height) {
    this.surface = surface;
    this.width = width;
    this.height = height;
  }

  drawPixel(x, y, r, g, b)  {
    const offset = (this.width * y + x) * 4;

    this.surface[offset] = r;
    this.surface[offset + 1] = g;
    this.surface[offset + 2] = b;
    this.surface[offset + 3] = 255;
  }

  clearSurface() {
    const surfaceSize = this.width * this.height * 4;
    for (let i = 0; i < surfaceSize; i++) {
      this.surface[i] = 0;
    }
  }

  drawLine(x1, y1, x2, y2, r, g, b) {
    const c1 = Math.abs(y2 - y1);
    const c2 = Math.abs(x2 - x1);
    let error = 0;
    const deltaerr = c1 + 1;
    let y = y1;
    let diry = y2 - y1;

    if (diry > 0) {
      diry = 1;
    }

    if (diry < 0) {
      diry = -1;
    }

    for (let x = x1; x2 > x1 ? x <= x2 : x >= x2; x2 > x1 ? x++ : x--) {
      this.drawPixel(x, y, r, g, b);
      error += deltaerr;
      if (error >= 1) {
        y += diry;
        error -= c2 + 1;
      }
    }
  }
}
