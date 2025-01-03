import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
const Persona = ({ nombre, role, description, photo }) => {
  return (
    <Card>
      <CardContent>
      
   <CardHeader className="items-center"><Image
        src={photo}
        alt="Prueba"
        width={120} 
        height={120} 
        objectFit="contain"
        layout="intrinsic" 
      /></CardHeader>
      
   
   <CardTitle>
   <h1 className='items-center hover:text-indigo-950 transition'>{nombre} / {role}</h1>
   </CardTitle>
    <CardDescription>
    <p className='items-center'>{description}</p>
    </CardDescription>
    
    
    
    
</CardContent>
    </Card>
    

  
  );
};

export default Persona;
