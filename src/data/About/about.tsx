import CodeIcon from "@mui/icons-material/Code";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import type { teamMembersType, valuesType } from "../../Types/aboutTypes";

export const teamMembers: teamMembersType = [
  {
    id: 1,
    name: "John Smith",
    position: "CEO & Founder",
    avatar: "https://i.pravatar.cc/300?img=70",
    bio: "Tech enthusiast with 15+ years in the industry. Founded Shopify in 2010 with a mission to make technology accessible for everyone.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "CTO",
    avatar: "https://i.pravatar.cc/300?img=32",
    bio: "Former Google engineer with expertise in mobile technology and consumer electronics. Leads our product team and innovation efforts.",
  },
  {
    id: 3,
    name: "David Chen",
    position: "Head of Design",
    avatar: "https://i.pravatar.cc/300?img=11",
    bio: "Award-winning designer who ensures our store offers an intuitive, beautiful shopping experience for all customers.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    position: "Customer Experience",
    avatar: "https://i.pravatar.cc/300?img=5",
    bio: "Passionate about customer satisfaction. Ensures every interaction with our brand exceeds expectations.",
  },
];

export const values: valuesType = [
  {
    id: 1,
    icon: <CodeIcon sx={{ fontSize: 32 }} />,
    title: "Innovation",
    description:
      "We continuously seek the latest technology and innovative solutions to offer our customers.",
  },
  {
    id: 2,
    icon: <AttachMoneyIcon sx={{ fontSize: 32 }} />,
    title: "Value",
    description:
      "We believe in providing premium products at competitive prices without compromising on quality.",
  },
  {
    id: 3,
    icon: <LocalShippingIcon sx={{ fontSize: 32 }} />,
    title: "Reliability",
    description:
      "From secure payment to fast shipping, we ensure a seamless shopping experience every time.",
  },
  {
    id: 4,
    icon: <SupportAgentIcon sx={{ fontSize: 32 }} />,
    title: "Support",
    description:
      "Our customer support team is available 24/7 to assist with any questions or concerns.",
  },
];
