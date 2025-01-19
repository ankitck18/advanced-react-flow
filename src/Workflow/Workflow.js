import { ReactFlow,Background,Controls, useNodesState,useEdgesState, BackgroundVariant, ConnectionMode } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useCallback } from 'react';
import { addEdge } from '@xyflow/react';
import {v4 as uuid} from "uuid"
import { COMPONENTS,initialNodes,initialEdges } from '../constants';
import { Box } from '@mui/material';
import ElectricalComponent from '../Components/ElectricalComponent';


const nodeTypes ={
  electricalComponent : ElectricalComponent
}

export const Workflow = () => {
  const [nodes,setNodes,onNodesChange] = useNodesState(initialNodes);
  const [edges,setEdges,onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback((connection) => {
    const edge = {...connection,
        id:uuid(),
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
        nodeTypes={nodeTypes}>
        <Background variant={BackgroundVariant.Lines} gap={10} color="#f1f1f1" id="1"/>
        <Background variant={BackgroundVariant.Lines} gap={100} color="#ccc" id="2"/>
        <Controls />
      </ReactFlow>
    </Box>
      
  );
};
