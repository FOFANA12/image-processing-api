export enum HttpCode {
  OK = 200,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500
}

interface AppErrorArgs {
  httpCode: HttpCode;
  description: string;
}

export class AppError extends Error {
  public httpCode: HttpCode;

  constructor(args: AppErrorArgs) {
    super(args.description);

    Object.setPrototypeOf(this, new.target.prototype);

    this.httpCode = args.httpCode;

    Error.captureStackTrace(this);
  }
}
