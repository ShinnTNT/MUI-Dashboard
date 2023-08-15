import { HeartSlash, Message2, UserOctagon, UserSquare } from "iconsax-react";

export interface NavLink {
  link: string;
  label: string;
  title: string;
  icon: React.ReactNode;
}

export interface NavLinks {
  conversation: NavLink[];
  campaign: NavLink[];
}

const navlinks: NavLinks = {
  conversation: [
    {
      link: "conversation/all-conversation",
      label: "All",
      title: "All",
      icon: <Message2 size={20} variant="Outline" />,
    },
    {
      link: "conversation/blocked-conversation",
      label: "Blocked",
      title: "Blocked",
      icon: <HeartSlash size={20} variant="Outline" />,
    },
  ],
  campaign: [
    {
      link: "campaign/current-users",
      label: "Current Users",
      title: "Current Users",
      icon: <UserSquare variant="Bold" />,
    },
    {
      link: "campaign/monthly-users",
      label: "Monthly Users",
      title: "Monthly Users",
      icon: <UserOctagon variant="Bold" />,
    },
  ],
};

export default navlinks;
