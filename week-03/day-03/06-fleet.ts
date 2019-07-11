import { Thing } from "./06-things";

class Fleet {
  private things: Thing[];

  constructor() {
    this.things = [];
  }

  add(thing: Thing): void {
    this.things.push(thing);
  }

  getThings(): Thing[] {
    return this.things;
  }

  toString(): string {
    return this.things
      .map(function(thing: Thing) {
        return thing.toString();
      })
      .join("\n");
  }
}

export { Fleet };
