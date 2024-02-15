export const MAX_SIZE_FILE = 50000000;
export const SUPPORTED_FILE_TYPE = ["image", "application", "video", "audio","document"];
export const SUPPORTED_FILE_TYPE_ALL_FORMAT: { [category: string]: string[] } =
  {
    image: ["jpg", "jpeg", "png", "gif", "webp", "svg"],
    document: ["doc", "docx", "pdf", "txt", "xlsx", "application"],
    zip: ["zip", "rar"],
    video: ["mp4", "avi", "mov"],
    audio: ["mp3", "wav"]
  };

export const SMALL_PREVIEW = 80;
export const MEDIUM_PREVIEW = 200;
export const LARGE_PREVIEW = 300;
export const MAX_FILE_LIST = 6;
export const INDEX_DB_NAME = "offlineApartureDb";
