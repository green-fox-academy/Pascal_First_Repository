class Thing {
  private name: string;
  private completed: boolean;

  constructor(name: string) {
    this.name = name;
  }

  public complete(): void {
    this.completed = true;
  }

  getName(): string {
    return this.name;
  }

  getCompleted(): boolean {
    return this.completed;
  }

  toString():string {
    let x: string;
    if (this.completed) {
      x = "[X]"
    } else {
      x = "[ ]"
    }
    return x + ' ' + this.name;
  }
}

export { Thing };
