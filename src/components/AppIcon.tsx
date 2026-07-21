"use client";

import { Icon, type IconProps } from "@iconify/react";
import calculator from "@iconify-icons/lucide/calculator";
import calendarDays from "@iconify-icons/lucide/calendar-days";
import checkCircle from "@iconify-icons/lucide/check-circle-2";
import clock from "@iconify-icons/lucide/clock";
import clockThree from "@iconify-icons/lucide/clock-3";
import cookie from "@iconify-icons/lucide/cookie";
import folderOpen from "@iconify-icons/lucide/folder-open";
import handshake from "@iconify-icons/lucide/heart-handshake";
import mail from "@iconify-icons/lucide/mail";
import mapPin from "@iconify-icons/lucide/map-pin";
import menu from "@iconify-icons/lucide/menu";
import phone from "@iconify-icons/lucide/phone";
import phoneCall from "@iconify-icons/lucide/phone-call";
import scale from "@iconify-icons/lucide/scale";
import user from "@iconify-icons/lucide/user";
import users from "@iconify-icons/lucide/users";
import close from "@iconify-icons/lucide/x";

const localIcons = {
  "lucide:calculator": calculator,
  "lucide:calendar-days": calendarDays,
  "lucide:circle-check": checkCircle,
  "lucide:clock": clock,
  "lucide:clock-3": clockThree,
  "lucide:cookie": cookie,
  "lucide:folder-open": folderOpen,
  "lucide:handshake": handshake,
  "lucide:mail": mail,
  "lucide:map-pin": mapPin,
  "lucide:menu": menu,
  "lucide:phone": phone,
  "lucide:phone-call": phoneCall,
  "lucide:scale": scale,
  "lucide:user-round": user,
  "lucide:users-round": users,
  "lucide:x": close,
} as const;

export function AppIcon({ icon, ...props }: IconProps) {
  const localIcon = typeof icon === "string" ? localIcons[icon as keyof typeof localIcons] : icon;

  return <Icon icon={localIcon ?? icon} {...props} />;
}
