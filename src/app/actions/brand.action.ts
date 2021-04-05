export class UpdatePositions {
  static readonly type = '[IBrand] Update';

  constructor(public row: number, public col: number) {
  }
}

export class GetBrands {
  static readonly type = '[IBrand] Get';
}
