import Navbar from "@/components/shared/Navbar";
import PostProvider from "@/context/PostContext";
import { Toaster} from 'react-hot-toast';

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
          />
      </head>
      <body>
        <div className="container">
          <Navbar />
          <PostProvider>{children}</PostProvider>
          <Toaster position="top-right" />
        </div>
      </body>
    </html>
  );
}
