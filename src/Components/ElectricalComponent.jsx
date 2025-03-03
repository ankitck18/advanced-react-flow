import { Box, Typography } from '@mui/material'
import React from 'react'
import { Capacitor, Inductor, Resistor } from '../icons'
import { getUnit } from '../utils';
import { Handle, Position } from '@xyflow/react';
import Terminal from './Terminal';

export default function ElectricalComponent({data : {value,type}}) {
    const unit = getUnit(type);
  return (
    <Box sx={{position:'relative'}}>
        {type === "Resistor" && <Resistor height={24} />}
        {type === "Capacitor" && <Capacitor height={24} />}
        {type === "Inductor" && <Inductor height={24} />}
        <div className='text-xs absolute'>
            {value} {unit}
        </div>
        <Terminal type='source' position={Position.Right} id="right"/>
        <Terminal type='source' position={Position.Left} id="left"/>
    </Box>
  )
}
