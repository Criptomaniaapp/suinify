import '../styles/globals.css'; // Ruta ajustada según el movimiento del archivo

export const metadata = {
  title: 'Suinify',
  description: 'Your custom token creation dApp',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

