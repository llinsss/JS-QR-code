import { useState } from 'react';

const QRScanner = () => {
  const [zoom, setZoom] = useState(1);

  useEffect(() => {
    const html5QrCode = new Html5Qrcode('qr-reader');

    const config = {
      fps: 10,
      qrbox: 250 * zoom, // Adjust the scanning box size based on zoom
      supportedScanTypes: [],
    };

    html5QrCode.start(
      { facingMode: 'environment', zoom: zoom }, // Apply zoom to the camera
      config,
      (decodedText) => {
        console.log('QR Code detected:', decodedText);
      },
      (errorMessage) => {
        console.error('QR Code scan error:', errorMessage);
      }
    );

    return () => {
      html5QrCode.stop();
    };
  }, [zoom]);

  return (
    <div>
      <div id="qr-reader" style={{ width: '100%' }}></div>
      <input
        type="range"
        min="1"
        max="3"
        step="0.1"
        value={zoom}
        onChange={(e) => setZoom(parseFloat(e.target.value))}
      />
      <p>Zoom: {zoom}x</p>
    </div>
  );
};

export default QRScanner;