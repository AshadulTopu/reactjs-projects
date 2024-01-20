import { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import TopBar from "./Topbar";
import { FeatureFlagContext } from "./Context";

const FeatureFlag = () => {
  const { loading, enableFeatureFlags } = useContext(FeatureFlagContext);

  const componentToRender = [
    {
      key: "showTopBar",
      component: <TopBar />,
    },
    {
      key: "showSideBar",
      component: <SideBar />,
    },
    {
      key: "showHeader",
      component: <Header />,
    },
    {
      key: "showNav",
      component: <NavBar />,
    },
    {
      key: "showFooter",
      component: <Footer />,
    },
  ];

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2> render components based on enableFeatureFlags </h2>
      {componentToRender.map((component) => {
        if (enableFeatureFlags[component.key]) {
          return component.component;
        }
        return null;
      })}
    </div>
  );
};

export default FeatureFlag;
