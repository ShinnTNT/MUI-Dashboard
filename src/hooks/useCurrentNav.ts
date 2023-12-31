import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import navlinks, { NavLink } from "../assets/navlinks";

const useCurrentNav = () => {
  const { pathname } = useLocation();

  const [currentNav, setCurrentNav] = useState<NavLink | null>(null);

  const [activeTab, setActiveTab] = useState<"conversation" | "campaign">(
    "conversation"
  );

  useEffect(() => {
    const links = [...navlinks.conversation, ...navlinks.campaign];

    const conversationLinks = navlinks.conversation.map(
      (link) => "/" + link.link
    );

    const activeLink = links.find((nav) => pathname === "/" + nav.link);

    activeLink
      ? setCurrentNav(activeLink)
      : setCurrentNav(navlinks.conversation[0]);

    setActiveTab(
      conversationLinks.includes(pathname) ? "conversation" : "campaign"
    );
  }, [pathname]);

  return { currentNav, activeTab, setActiveTab };
};

export default useCurrentNav;
