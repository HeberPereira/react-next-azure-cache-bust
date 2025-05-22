import "../app/globals.css";
import VersionWatcher from "../components/VersionWatcher";
import BuildTag from "../components/BuildTag";

export const metadata = {
  title: "React Next Cache Bust",
  description: "Sample Next.js app"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <VersionWatcher />
        {children}
        <BuildTag />
      </body>
    </html>
  );
}
