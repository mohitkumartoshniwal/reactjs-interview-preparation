import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";

import ErrorBoundary1 from "./components/ErrorBoundary1";
import Home from "./components/Home";

// Comment one of them if there is any confusion
export default function App() {
  return (
    <>
      <>
        {/* Error Boundary created using class component */}
        <ErrorBoundary1 fallback={<p>Something went wrong</p>}>
          <Home />
        </ErrorBoundary1>
      </>

      {/** Error Boundary created using react-error-boundary
       * @see https://github.com/bvaughn/react-error-boundary
       */}
      <ReactErrorBoundary fallback={<div>Something went wrong 2</div>}>
        <Home />
      </ReactErrorBoundary>
    </>
  );
}
