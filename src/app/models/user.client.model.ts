export class User {
  uid: string;
  username: string;
  password: string;
  img: string;
  type: string;

  constructor(uid, username, password, img, type) {
    this.uid = uid;
    this.username = username;
    this.password = password;
    this.img = img;
    this.type = type;
  }
}
