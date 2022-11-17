import { PingService } from "../../src/services/ping-service";

describe("PingService", () => {
  it("should return a pong", () => {
    const pingService = new PingService();
    const pong = pingService.getPing();
    expect(pong).toEqual({ message: "pong" });
  });
});
