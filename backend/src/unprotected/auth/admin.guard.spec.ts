import { ExecutionContext, ForbiddenException } from "@nestjs/common";
import { AdminGuard } from "./admin.guard";

const contextWithUser = (user: unknown): ExecutionContext =>
  ({
    switchToHttp: () => ({
      getRequest: () => ({ user }),
    }),
  }) as ExecutionContext;

describe("AdminGuard", () => {
  let guard: AdminGuard;

  beforeEach(() => {
    guard = new AdminGuard();
  });

  it("lässt einen Benutzer mit Admin-Rolle durch", () => {
    expect(guard.canActivate(contextWithUser({ isAdmin: true }))).toBe(true);
  });

  it("verweigert einen Benutzer ohne Admin-Rolle", () => {
    expect(() => guard.canActivate(contextWithUser({ isAdmin: false }))).toThrow(
      ForbiddenException
    );
  });

  it("verweigert einen Benutzer, dessen Admin-Flag fehlt", () => {
    expect(() => guard.canActivate(contextWithUser({}))).toThrow(
      ForbiddenException
    );
  });

  it("verweigert eine Anfrage ohne authentifizierten Benutzer", () => {
    expect(() => guard.canActivate(contextWithUser(undefined))).toThrow(
      ForbiddenException
    );
  });
});
