export class User {

  constructor(
    public name: string
  ) {}

  static import(rawData: any) {

    return new User(
      rawData.display_name
    );

  }
}
