import { ReactFlowState } from "@xyflow/react";
import { ElectricalComponentType } from "../types";

export const zoomSelector = (s) => s.transform[2] >= 0.7;

export function isPointInBox(point, box) {
  return (
    point.x >= box.x &&
    point.x <= box.x + box.width &&
    point.y >= box.y &&
    point.y <= box.y + box.height
  );
}

export function getUnit(type) {
  let unit;
  switch (type) {
    case ElectricalComponentType.Resistor: {
      unit = "kΩ";
      break;
    }
    case ElectricalComponentType.Inductor: {
      unit = "H";
      break;
    }
    case ElectricalComponentType.Capacitor: {
      unit = "μF";
      break;
    }
    case ElectricalComponentType.Battery: {
      unit = "V";
      break;
    }
    case ElectricalComponentType.Bulb: {
      unit = "W";
      break;
    }
  }
  return unit;
}

export function downloadImage(dataUrl) {
  const a = document.createElement("a");

  a.setAttribute("download", "reactflow.png");
  a.setAttribute("href", dataUrl);
  a.click();
}
