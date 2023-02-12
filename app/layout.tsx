import "../styles/globals.css";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html className="dark">
      <head />
      <body>{children}</body>
    </html>
  );
}
