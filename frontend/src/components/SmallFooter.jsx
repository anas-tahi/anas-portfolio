import { FaHeart } from "react-icons/fa";
import "./../styles/SmallFooter.css";

export default function SmallFooter() {
  return (
    <div className="small-footer">
      <p>© 2026 Anas Tahir-Anas Tahir</p>
      <p>Made with <FaHeart className="footer-heart" /> and passion</p>
    </div>
  );
}
