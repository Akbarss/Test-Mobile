"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";
import { UrlObject } from "url";

interface NavigationLinkProps {
  href: string | UrlObject;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  href,
  children,
  style,
}) => {
  const { locale } = useParams();

  return (
    <Link style={style} href={`/${locale}/${href}`}>
      {children}
    </Link>
  );
};