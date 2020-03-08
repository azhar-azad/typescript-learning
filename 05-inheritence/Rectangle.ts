import { Shape } from "./Shape";

export class Rectangle extends Shape {

  constructor(
    private theX: number,
    private theY: number,
    private _width: number,
    private _height: number
  ) {
    super(theX, theY);
   }

   public get width(): number {
     return this._width;
   }

   public set width(value: number) {
     this._width = value;
   }

   public get height(): number {
     return this._height;
   }

   public set height(value: number) {
     this._height = value;
   }

   public getInfo(): string {
     return `${super.getInfo()}, width: ${this._width}, height: ${this._height}`;
   }
}