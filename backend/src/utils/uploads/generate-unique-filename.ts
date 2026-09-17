import { extname } from "path";

/** Vergibt Dateinamen für Multer-Uploads, kollisionssicher genug für ./uploads. */
export function generateUniqueFilename(originalname: string): string {
  const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
  const fileExtName = extname(originalname);
  const baseName = originalname.slice(0, originalname.length - fileExtName.length);
  return `${baseName}-${uniqueSuffix}${fileExtName}`;
}
