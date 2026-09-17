import { MulterModuleOptions } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { generateUniqueFilename } from "./generate-unique-filename";

/**
 * Gemeinsame Multer-Konfiguration für alle Upload-Module (siehe
 * InseratModule, UploadsModule). Stand vorher identisch dupliziert in
 * beiden Modulen.
 */
export const uploadStorageOptions: MulterModuleOptions = {
  storage: diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
      cb(null, generateUniqueFilename(file.originalname));
    },
  }),
};
