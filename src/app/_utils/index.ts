class Utils {
  private static instance: Utils;
  static get() {
    if(!Utils.instance) {
      Utils.instance = new Utils();
    }
    return Utils.instance;
  }

  public slugify(label: string): string {
    return label.trim().split(" ").join("-");
  }

  public determineReadTime(content: string): number {
    return 0;
  }

  public generateId() {
    const random = Math.random();
    return random;
  }

}

const utils = Utils.get();
export { utils as Utils };