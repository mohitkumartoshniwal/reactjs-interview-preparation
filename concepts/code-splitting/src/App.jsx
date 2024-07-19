import { lazy, Suspense, useState } from "react";

// This will be sent always
import NormalHome from "./components/NormalHome";

// This and the below one will be lazy loaded as needed...
// Here Home is a default export
const LazyHome = lazy(() => import("./components/Home"));

// Here NamedHome is a named export
const LazyNamedHome = lazy(() =>
  import("./components/NamedHome").then((module) => {
    return { default: module.NamedHome };
  })
);

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <NormalHome />
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && (
        <>
          <Suspense fallback={<div>Loading....</div>}>
            <LazyHome />
          </Suspense>

          <Suspense fallback={<div>Loading LazyNamedHome....</div>}>
            <LazyNamedHome />
          </Suspense>
        </>
      )}
    </>
  );
}
