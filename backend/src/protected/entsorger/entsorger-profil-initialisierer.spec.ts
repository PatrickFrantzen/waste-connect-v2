import { Types } from "mongoose";
import { EntsorgerProfilInitialisierer } from "./entsorger-profil-initialisierer";

describe("EntsorgerProfilInitialisierer", () => {
  it("delegiert erstelleProfil an EntsorgerService.create", async () => {
    const create = jest.fn().mockResolvedValue(undefined);
    const entsorgerService = { create } as any;
    const initialisierer = new EntsorgerProfilInitialisierer(entsorgerService);
    const benutzerId = new Types.ObjectId();

    await initialisierer.erstelleProfil(benutzerId);

    expect(create).toHaveBeenCalledWith(benutzerId);
  });
});
