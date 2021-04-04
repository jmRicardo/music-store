import {IBrand} from './IBrand';

export class AddBrand {
  static readonly type = '[Todo] Add';

  constructor(public payload: IBrand) {
  }
}

export class GetBrands {
  static readonly type = '[IBrand] Get';
}

export class UpdateBrand {
  static readonly type = '[IBrand] Update';

  constructor(public payload: IBrand, public id: number) {
  }
}

export class DeleteBrand {
  static readonly type = '[IBrand] Delete';

  constructor(public id: number) {
  }
}

export class SetSelectedTodo {
  static readonly type = '[IBrand] Set';

  constructor(public payload: IBrand) {
  }
}
