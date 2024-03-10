import QRCode from "react-qr-code";
import { useRef, useState } from 'react';

function App() {
  const input = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState<string>('');
  const changeQRCode = () => {
    if (input.current?.value == null) {
      setValue('');
    }
    else{
      setValue(input.current.value);
    }
  }

  // TEST
  return (
    <>
      <div>
        <QRCode id="QRCode" value={value} style={{ width: '500px', height: '500px'}}/>
      </div>
      <div className="container">
        <input type="text" ref={input} onChange={changeQRCode} placeholder="Enter here..."/>
        <label htmlFor="text">Enter text or URL</label>
      </div>
      
    </>
  )
}

export default App



