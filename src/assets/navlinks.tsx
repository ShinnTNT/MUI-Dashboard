import { HeartSlash, Message2, UserOctagon, UserSquare } from "iconsax-react";

export interface NavLink {
  link: string;
  label: string;
  title: string;
  icon: React.ReactNode;
  color: string;
}

export interface NavLinks {
  conversation: NavLink[];
  campaign: NavLink[];
}

const navlinks: NavLinks = {
  conversation: [
    {
      link: "all-conversation",
      label: "All",
      title: "All",
      icon: <Message2 color="#3F80FF" variant="Bold" />,
      color: "#3F80FF",
    },
    {
      link: "blocked-conversation",
      label: "Blocked",
      title: "Blocked",
      icon: <HeartSlash color="#FF4D4D" variant="Bold" />,
      color: "#FF4D4D",
    },
  ],
  campaign: [
    {
      link: "current-users",
      label: "Current Users",
      title: "Current Users",
      icon: <UserSquare color="#dada" variant="Bold" />,
      color: "#B92242",
    },
    {
      link: "monthly-users",
      label: "Monthly Users",
      title: "Monthly Users",
      icon: <UserOctagon color="#dada" variant="Bold" />,
      color: "#B92242",
    },
  ],
};

export default navlinks;
