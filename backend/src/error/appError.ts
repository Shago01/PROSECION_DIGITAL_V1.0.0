export default class AppError extends Error {
  public readonly status: number;
  constructor(message: string, status = 500) {
    super(message);
    this.status = status;
  }
}
