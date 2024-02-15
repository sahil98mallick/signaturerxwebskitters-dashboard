type NETWORK_STATUS_CODE =
  | "success"
  | 200
  | 201
  | 202
  | 203
  | 204
  | 205
  | 206
  | 207
  | 208
  | 209
  | 210
  | 211
  | 212
  | 213
  | 214
  | 215
  | 216
  | 217
  | 218
  | 219
  | 220
  | 221
  | 300
  | 301
  | 302
  | 303
  | 304
  | 305
  | 306
  | 307
  | 308
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 418
  | 419
  | 420
  | 421
  | 422
  | 423
  | 424
  | 425
  | 426
  | 428
  | 429
  | 431
  | 451
  | 500
  | 501
  | 502
  | 503
  | 504
  | 505
  | 506
  | 507
  | 508
  | 510
  | 511;

export interface Context {
  child: string;
  label: string;
  value: string;
  key: string;
}

export interface Message2 {
  message: string;
  path: string[];
  type: string;
  context: Context;
}

export interface Inner {
  message: string | Message2;
}

export interface BaseApiResponse<T = any> {
  status: string;
  data: T;
}

export type PaginationResponseType = Partial<{
  totalCount: number;
  totalPages: number;
  currentPage: number;
}>;

export interface BasePaginationData<T = Array<unknown>> {
  docs: T;
  totalRecords: number;
  perPage: number;
  currentPage: number;
  totalPages: number;
}

export interface BaseApiErrorResponse {
  status: NETWORK_STATUS_CODE;
  name?: string;
  message?: Message2 | string;
  code?: string;
  inner?: Inner;
}

export {};
