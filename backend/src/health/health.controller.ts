import { Controller, Get } from "@nestjs/common";

@Controller("health")
export class HealthController {
  /**
   * Liveness-Probe für Deployment und Monitoring: antwortet ohne Auth und ohne
   * Datenbankzugriff, sobald die Anwendung Requests annimmt.
   */
  @Get()
  getHealth() {
    return { status: "ok" };
  }
}
