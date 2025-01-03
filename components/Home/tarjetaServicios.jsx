import Image from 'next/image';
import React from 'react';

const TarjetaServicios = ({ ico, title, descript }) => {
  return (
    <div className="bg-transparent text-white p-0 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 shadow-indigo-950	 w-2/3 w-max-10 h-max-64		">
      <div className="flex justify-center m-2 p-2">
        <Image src={ico} alt="alte" width={70} height={70} />
      </div>
      <h1 className="text-xl font-semibold  text-center p-2">{title}</h1>
      <p className="text-sm text-center p-2 mb-10">{descript}</p>
    </div>
  );
};

export default TarjetaServicios;
