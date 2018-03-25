
export class Team {
  constructor(private _name: string, private _score: number) { }

  public get name(): string {
    return this._name;
  }

  public get score(): number {
    return this._score;
  }


  public static nullInstance(): Team {
    return new Team('no name', 0);
  }

  public static isNull(instance: Team): boolean {
    return instance === undefined || instance === null || instance._name === 'no name';
  }
}
