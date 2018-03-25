export class ChatMessage {
  constructor(private _content: string, private _author: string, private _timestamp: Date) { }


  public get content(): string {
    return this._content;
  }

  public get author(): string {
    return this._author;
  }


  public get timestamp(): Date {
    return this._timestamp;
  }


}
