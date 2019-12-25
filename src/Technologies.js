import React from 'react';

const Technologies = () =>{
    return(
      <div>
        <form oninput="result.value=(cm.value/2.54).toFixed(2)">
      <p>Введите длину в сантиметрах: 
      <input id='calc' type="number" name="cm" autofocus value='10'/></p>
      var = document.getElementById('calc').value
      <p>Длина в дюймах: <output name="result" value='10'>0</output></p>
    </form>
      </div>
      
    );
  }

  export default Technologies;