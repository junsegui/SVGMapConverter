import React, { useState,ChangeEvent } from 'react';

const SvgInput = () => {
  const [svgCode, setSvgCode] = useState('');

  const handleInputChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
    setSvgCode(event.target.value);
  };

  return (
    <div>
      <textarea
        value={svgCode}
        onChange={handleInputChange}
        placeholder="Insert your SVG code here"
      />

      <div>
        <h2>Preview:</h2>
        <div dangerouslySetInnerHTML={{ __html: svgCode }} />
      </div>
    </div>
  );
};

export default SvgInput;
