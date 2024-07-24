import useToast from "./hooks/useToast";

export default function App() {
  const { ToastWrapperComponent, triggerNotification } =
    useToast("bottom-left");
  return (
    <div>
      {ToastWrapperComponent}
      <div className="btn-container">
        <button
          onClick={() => {
            triggerNotification({
              type: "success",
              message: "Sucess message",
              duration: 10000,
              animation: "pop",
            });
          }}
        >
          Show Success
        </button>
        <button
          onClick={() => {
            triggerNotification({
              type: "info",
              message: "Info message",
              duration: 10000,
              animation: "slide",
            });
          }}
        >
          Show Info
        </button>
        <button
          onClick={() => {
            triggerNotification({
              type: "warning",
              message: "Warning message",
              duration: 10000,
              animation: "fade",
            });
          }}
        >
          Show Warning
        </button>
        <button
          onClick={() => {
            triggerNotification({
              type: "error",
              message: "Error message",
              duration: 10000,
            });
          }}
        >
          Show Error
        </button>
      </div>
    </div>
  );
}
