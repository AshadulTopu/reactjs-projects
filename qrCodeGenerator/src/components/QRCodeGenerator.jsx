import { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState("");
  const [text, setText] = useState("");

  const handleGenerateQRCode = () => {
    setQrCode(text);
    setText("");
  };
  return (
    <div className="container">
      <div className="input-area">
        <input
          type="text"
          placeholder="Enter Text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="button"
          disabled={!text}
          //   onClick={() => {
          //     setQrCode(text);
          //   }}
          onClick={handleGenerateQRCode}
        >
          Generate
        </button>
      </div>
      <div className="qrcode-area">
        <QRCode id="qrcode-value" value={qrCode} size={300} />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
