import useResponsive from "./hooks/useResponsive";

export default function App() {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  return (
    <div className="container">
      {isMobile && <div>Mobile</div>}
      {isTablet && <div>Tablet</div>}
      {isDesktop && <div>Desktop</div>}
    </div>
  );
}
