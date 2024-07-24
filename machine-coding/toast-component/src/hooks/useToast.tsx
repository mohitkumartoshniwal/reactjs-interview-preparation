import { useState } from "react";
import { nanoid } from "nanoid";
import Toast from "../components/toast/Toast";

type PositionType = "top-left" | "top-right" | "bottom-left" | "bottom-right";

export type ToastType = "success" | "info" | "warning" | "error";

export interface ToastProps {
  type: ToastType;
  message: string;
  duration: number;
  animation?: "fade" | "pop" | "slide";
}

interface useToastReturn {
  ToastWrapperComponent: JSX.Element;
  triggerNotification: (props: ToastProps) => void;
}

const useToast = (position: PositionType): useToastReturn => {
  const [toasts, setToasts] = useState<(ToastProps & { id: string })[]>([]);

  const triggerNotification = (toastProps: ToastProps) => {
    const id = nanoid();
    setToasts((prevToasts) => [
      ...prevToasts,
      {
        id,
        ...toastProps,
      },
    ]);

    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
    }, toastProps.duration);
  };

  const handleClose = (id: string) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const ToastWrapperComponent = (
    <div className={`toast-container ${position} ${position.split("-")[0]}`}>
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          {...toast}
          onClose={() => handleClose(toast.id)}
        />
      ))}
    </div>
  );

  return { ToastWrapperComponent, triggerNotification };
};

export default useToast;
