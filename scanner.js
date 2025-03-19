import QRScanner from '@/components/QRScanner';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600 text-center p-4">
        QR Code Scanner
      </h1>
      <QRScanner />
    </div>
  );
}