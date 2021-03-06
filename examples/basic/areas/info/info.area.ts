import { Area } from "../../../../mod.ts";
import { InfoController } from "./info.controller.ts";

@Area({
  baseRoute: "/test",
  controllers: [InfoController],
})
export class InfoArea {
}
