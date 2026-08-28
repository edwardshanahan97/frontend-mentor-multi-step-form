export const addOns = [
  {
    id: 1,
    name: "Online service",
    description: "Access to multiplayer games",
    monthlyPrice: 1,
    yearlyPrice: 10,
    value: "online-service",
  },
  {
    id: 2,
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthlyPrice: 2,
    yearlyPrice: 20,
    value: "larger-storage",
  },
  {
    id: 3,
    name: "Customizable profile",
    description: "Custom theme on your profile",
    monthlyPrice: 2,
    yearlyPrice: 20,
    value: "customizable-profile",
  },
];

import ArcadeIcon from "../assets/images/icon-arcade.svg";
import AdvancedIcon from "../assets/images/icon-advanced.svg";
import ProIcon from "../assets/images/icon-pro.svg";

export const plans = [
  {
    id: 1,
    name: "Arcade",
    monthlyPrice: 9,
    yearlyPrice: 90,
    icon: ArcadeIcon,
    value: "arcade",
  },
  {
    id: 2,
    name: "Advanced",
    monthlyPrice: 12,
    yearlyPrice: 120,
    icon: AdvancedIcon,
    value: "advanced",
  },
  {
    id: 3,
    name: "Pro",
    monthlyPrice: 15,
    yearlyPrice: 150,
    icon: ProIcon,
    value: "pro",
  },
];

export const stepData = [
  { id: 1, number: 1, text: "Your Info" },
  { id: 2, number: 2, text: "Select Plan" },
  { id: 3, number: 3, text: "Add-Ons" },
  { id: 4, number: 4, text: "Summary" },
];
