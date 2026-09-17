import { Types } from "mongoose";
import { LogistikerProfilInitialisierer } from "./logistiker-profil-initialisierer";

describe("LogistikerProfilInitialisierer", () => {
  it("delegiert erstelleProfil an LogistikerService.create", async () => {
    const create = jest.fn().mockResolvedValue(undefined);
    const logistikerService = { create } as any;
    const initialisierer = new LogistikerProfilInitialisierer(logistikerService);
    const benutzerId = new Types.ObjectId();

    await initialisierer.erstelleProfil(benutzerId);

    expect(create).toHaveBeenCalledWith(benutzerId);
  });
});
