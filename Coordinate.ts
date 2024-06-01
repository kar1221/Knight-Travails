class Coordinate {
  public row: number;

  public column: number;

  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
  }

  public isEqualTo(other: Coordinate) {
    return this.row === other.row && this.column === other.column;
  }

  public add(other: Coordinate): Coordinate {
    return new Coordinate(this.row + other.row, this.column + other.column);
  }

  public toString(): string {
    return `(${this.row}, ${this.column})`
  }
}

export default Coordinate;