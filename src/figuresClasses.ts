export interface Figure {
  a: number;
  b?: number;
  c?: number;
  color: string;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    public shape: string = 'triangle',
  ) {
    const sides = [a, b, c].sort((q, w) => q - w);

    if (sides[0] + sides[1] <= sides[2] || sides[0] <= 0) {
      // eslint-disable-next-line no-console
      console.log(sides);
      throw new Error('Invalid triangle sides');
    }
  }

  getInfo(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public shape: string = 'triangle',
  ) {
    if (a <= 0) {
      throw new Error('Invalid circle radius)');
    }
  }

  getInfo(): string {
    return `A ${this.color} circle - ${this.getArea()}`;
  }

  getArea(): number {
    const area = Math.PI * this.a ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public shape: string = 'rectangle',
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Invalid rectangle sides');
    }
  }

  getInfo(): string {
    return `A ${this.color} ${this.shape} - ${this.getArea()}`;
  }

  getArea(): number {
    const area = this.a * this.b;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure): string {
  return figure.getInfo();
}
