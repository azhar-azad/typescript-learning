import { Shape } from "./Shape";

export class Circle extends Shape {

  constructor(
    private theX: number,
    private theY: number,
    private _radius: number
  ) {
    super(theX, theY);
  }

  public get radius(): number {
    return this._radius;
  }

  public set radius(rad: number) {
    this._radius = rad;
  }

  public getInfo(): string {
    return `${super.getInfo()}, radius: ${this._radius}`;
  }
}