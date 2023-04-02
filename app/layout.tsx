import './globals.css';

export const metadata = {
  title: 'Mihai Sturza',
  description: 'Tech and entrepreneurship enthusiast.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
