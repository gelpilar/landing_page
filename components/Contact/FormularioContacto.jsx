import React from 'react'
import { Form} from '../ui/form'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Label } from '@radix-ui/react-label'
import { Textarea } from "@/components/ui/textarea"

const FormularioContacto = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-transparent">
  <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
    <h2 className="text-2xl font-semibold text-center text-indigo-950 mb-6">Contáctanos</h2>
    <Form className="space-y-6">
      <div>
        <Label className="block text-lg text-indigo-950 mb-2">Email o Teléfono</Label>
        <Input 
          className="w-full p-3 border border-indigo-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" 
          placeholder="Ingresa tu email o teléfono"
        />
      </div>
      
      <div>
        <Label className="block text-lg text-indigo-950 mb-2">Mensaje de contacto o consulta</Label>
        <Textarea 
          className="w-full p-3 border border-indigo-200 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 h-48" 
          placeholder="Escribe tu mensaje"
        ></Textarea>
      </div>
      
      <div>
        <Button 
          className="w-full py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-5"
        >
          Contactar
        </Button>
      </div>
    </Form>
  </div>
</div>

  )
}

export default FormularioContacto
