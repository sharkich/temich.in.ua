export class Post {

  public title: string;
  public date: string;
  public content: string;

  private isShow: boolean = true;

  constructor(data) {
    this.title = data.title;
    this.date = data.date;
    this.content = data.content;
  }

  get isShowContent() {
    return this.isShow;
  }

  showContent() {
    this.isShow = true;
  }

  hideContent() {
    this.isShow = false;
  }

  toggleContent() {
    this.isShow = !this.isShow;
  }

}
