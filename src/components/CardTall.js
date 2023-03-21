import React from 'react';
import { Card } from 'flowbite-react';

function CardTall() {
  return (
<Card>
  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white max-w-lg">
    Blog
  </h5>
  <p className="font-normal text-gray-700 dark:text-gray-400">
    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
  </p>
</Card>
  );
};

export default CardTall;
