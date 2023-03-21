import React from 'react';
import { Card } from 'flowbite-react';

function CardSmallRandomNovel() {
  return (
<div className="max-w-lg">
  <Card
    imgAlt="Meaningful alt text for an image that is not purely decorative"
    imgSrc="Image PropHere"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Book Title
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Small book description
    </p>
  </Card>
</div>
  );
};

export default CardSmallRandomNovel;
