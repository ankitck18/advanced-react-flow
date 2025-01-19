import { Edge, Node } from "@xyflow/react";
import { ElectricalComponentType } from "../types";
import { Box } from "@mui/material";
import { Battery,Resistor, Capacitor,Inductor,Bulb} from "../icons";

export const initialEdges = [];

export const initialNodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    type: "electricalComponent",
    data: { type: "Resistor", value: 3 },
  },
  {
    id: "2",
    position: { x: 200, y: 200 },
    type: "electricalComponent",
    data: { type: "Capacitor", value: 3 },
  },
  {
    id: "3",
    position: { x: 300, y: 300 },
    type: "electricalComponent",
    data: { type: "Inductor", value: 3 },
  },
];


export const COMPONENTS = [
  {
    icon: <Resistor/>,
    // type: ElectricalComponentType.Resistor,
    label: "Resistor",
  },
  {
    icon: <Capacitor height={16} />,
    // type: ElectricalComponentType.Capacitor,
    label: "Capacitor",
  },
  {
    icon: <Inductor height={8}/>,
    // type: ElectricalComponentType.Inductor,
    label: "Inductor",
  },
  {
    icon: <Battery height={24}/>,
    // type: ElectricalComponentType.Battery,
    label: "Battery",
  },
  {
    icon: <Bulb color="black" height={24} isOn />,
    // type: ElectricalComponentType.Bulb,
    label: "Bulb",
  },
  {
    icon: (
      <Box
        sx={{
          height: "18px",
          width: "18px",
          borderRadius: "4px",
          border: "1px solid black",
        }}
      ></Box>
    ),
    // type: ElectricalComponentType.Board,
    label: "Bulb",
  },
];

export const HistoryAction = {
  AddNode: "addNode",
  RemoveNode: "removeNode",
  AddEdge: "addEdge",
  RemoveEdge: "removeEdge",
  MoveNode: "moveNode",
};
