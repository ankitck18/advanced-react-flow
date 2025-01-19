import { ReactFlow,Background,Controls, useNodesState,useEdgesState, BackgroundVariant, ConnectionMode, MarkerType } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback } from 'react';
import { addEdge } from '@xyflow/react';
import {v4 as uuid} from "uuid"
import { COMPONENTS,initialNodes,initialEdges } from '../constants';
import { Box } from '@mui/material';
import ElectricalComponent from '../Components/ElectricalComponent';
import Wire from '../Components/Wire';


const nodeTypes ={
  electricalComponent : ElectricalComponent
}
const edgeTypes = {
  wire:Wire
}

export const Workflow = () => {
  const [nodes,setNodes,onNodesChange] = useNodesState(initialNodes);
  const [edges,setEdges,onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((connection) => {
    const edge = {...connection,
      type:"wire",
        id:uuid(),
        markerEnd:{
          type:MarkerType.ArrowClosed,
          width:20,
          height:20,
          color:"#FFC300",
        }
        };
        setEdges((eds)=> eds.concat(edge));
  },[])

  return (
    <Box sx={{width:'100%',height:'100vh'}}>
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        connectionMode={ConnectionMode.Loose}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onConnect={onConnect}>
        <Background variant={BackgroundVariant.Lines} gap={10} color="#f1f1f1" id="1"/>
        <Background variant={BackgroundVariant.Lines} gap={100} color="#ccc" id="2"/>
        <Controls />
        <svg>
          <defs>
            <linearGradient id="wire">
                <stop offset="0%" stopColor='#ecff02'/>
                <stop offset="100%" stopColor='#f69900'/>
            </linearGradient>
          </defs>
        </svg>
      </ReactFlow>
    </Box>
      
  );
};
