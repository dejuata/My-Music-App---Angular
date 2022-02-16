export class Track {

  constructor(
    public id: string,
    public name: string,
    public album: string,
    public artists: string,
    public duration: string,
    public image: string,
    public favorite: boolean,
  ) {

  }

  public static import(rawData: any, favorite: boolean) {
    return  new Track(
      rawData.id,
      rawData.name,
      rawData.album.name,
      rawData.artists[0].name,
      rawData.duration_ms,
      rawData.album.images[1].url,
      favorite
    );
  }

  public setFavorite( favorite: boolean) {
    this.favorite = favorite;
  }


}
