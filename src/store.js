import { BehaviorSubject } from "rxjs";

export default class {
  constructor() {
    this.configurator = new BehaviorSubject(null);
  }
}
