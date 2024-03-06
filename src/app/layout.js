import PostProvider from "@/context/PostContext";
import { Toaster} from 'react-hot-toast';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <div>
          <PostProvider>{children}</PostProvider>
          <Toaster position="top-right" />
        </div>
      </body>
    </html>
  );
}
