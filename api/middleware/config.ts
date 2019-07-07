// TODO - Move logging config to somewhere else and use env file.
interface IConfig {
  port: number;
  prettyLog: boolean;
}

const config: IConfig = {
  port: 3000,
  prettyLog: true
};

export default class Config implements IConfig {
  port: number;
  prettyLog: boolean;

  constructor(port: number = 3000, prettyLog: boolean = true) {
    this.port = port;
    this.prettyLog = prettyLog;
  }

  getConfig(): object {
    return {
      port: this.port,
      prettyLog: this.prettyLog
    };
  }
}
