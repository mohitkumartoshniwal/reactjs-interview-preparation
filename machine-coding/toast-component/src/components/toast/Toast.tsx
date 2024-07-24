import {
  AiOutlineCheckCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiOutlineCloseCircle,
  AiOutlineClose,
} from "react-icons/ai";
import "./toast.css";
import { ToastProps, ToastType } from "../../hooks/useToast";
import React, { useEffect, useRef } from "react";

const iconStyles: React.CSSProperties = { marginRight: "10px" };
const icons: Record<ToastType, JSX.Element> = {
  success: <AiOutlineCheckCircle style={iconStyles} />,
  info: <AiOutlineInfoCircle style={iconStyles} />,
  warning: <AiOutlineWarning style={iconStyles} />,
  error: <AiOutlineCloseCircle style={iconStyles} />,
};

const animations: Record<string, string> = {
  fade: "fadeIn",
  pop: "popup",
  slide: "slideIn",
};

type Props = ToastProps & {
  onClose: () => void;
};

const Toast = ({
  type = "success",
  message,
  animation = "slide",
  onClose,
}: Props) => {
  // A11y
  const notificationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (notificationRef.current) {
      notificationRef.current.focus();
    }
  }, []);

  const ariaRole = type === "error" || type === "warning" ? "alert" : "status";
  const ariaLive =
    type === "error" || type === "warning" ? "assertive" : "polite";

  return (
    <div
      className={`toast ${type} ${animations[animation]}`}
      // A11y
      role={ariaRole}
      aria-live={ariaLive}
      tabIndex={-1}
      ref={notificationRef}
    >
      <span>
        {icons[type]} {message}
      </span>
      <button className="closeButton" onClick={onClose}>
        <AiOutlineClose color="white" />
      </button>
    </div>
  );
};

export default Toast;
