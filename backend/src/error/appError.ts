export default class AppError extends Error {
  public readonly status: number;
  public readonly details?: any;
  constructor(message: string, status = 500, details?: any) {
    super(message);
    this.status = status;
    this.details = details;
  }
}
