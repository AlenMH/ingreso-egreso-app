export class User {
  public uid: string;
  public email: string;
  public nombre: string;

  constructor(obj: DataObj) {
    this.uid = obj && obj.uid || null;
    this.email = obj && obj.email || null;
    this.nombre = obj && obj.nombre || null;
  }

}

interface DataObj {
  uid: string;
  email: string;
  nombre: string;
}
