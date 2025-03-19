import { useEffect, useRef } from 'react';
import { Html5Qrcode } from 'html5-qrcode';

const QRScanner = () => {
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html5QrCode = new Html5Qrcode('qr-reader');

    const config = {
      fps: 10, // Frames per second for scanning
      qrbox: 250, // Size of the scanning box
      supportedScanTypes: [], // Allow all scan types (QR codes, barcodes, etc.)
    };

    // Start the camera and QR code scanner
    html5QrCode.start(
      { facingMode: 'environment' }, // Use the rear camera
      config,
      (decodedText) => {
        console.log('QR Code detected:', decodedText);
        // Handle the decoded QR code data here
      },
      (errorMessage) => {
        console.error('QR Code scan error:', errorMessage);
      }
    ).catch((err) => {
      console.error('Unable to start QR scanner:', err);
    });

    // Clean up the scanner when the component unmounts
    return () => {
      html5QrCode.stop().then(() => {
        console.log('QR Code scanner stopped.');
      }).catch((err) => {
        console.error('Failed to stop QR scanner:', err);
      });
    };
  }, []);

  return (
    <div>
      <div id="qr-reader" ref={qrRef} style={{ width: '100%' }}></div>
    </div>
  );
};

export default QRScanner;


