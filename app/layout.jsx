import Navbar from "@/components/shared/Navbar";
import { Zenitho } from "uvcanvas";
import "@/app/globals.css";
import Footer from "@/components/shared/Footer/Footer";

export default function Layout({ children }) {
  return (
    <html>
      <body style={{ margin: 0, padding: 0, boxSizing: "border-box", backgroundColor: "rgb(56, 56, 56)" }}>
        <Navbar />
        <div style={{ position: "fixed", zIndex: -1, top: 0, left: 0, width: "100vw", height: "100vh", opacity: "50%" }}>
          <Zenitho />
        </div>
        
        <main style={{ position: "relative", minHeight: "100vh", overflowX: "hidden"}}>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}