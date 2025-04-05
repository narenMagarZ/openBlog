class Utils {
  private static instance: Utils;
  static get() {
    if(!Utils.instance) {
      Utils.instance = new Utils();
    }
    return Utils.instance;
  }

  public slugify(label: string): string {
    label.replace(/\S/, "-");
    return label.trim().split(" ").join("-");
  }

  public determineReadTime(content: string): number {
    return 0;
  }



}

const utils = Utils.get();
export { utils as Utils };