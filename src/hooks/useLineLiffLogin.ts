"use client";
import liff from "@line/liff";
import { useEffect, useState } from "react";

export const useLineLiffLogin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const login = async () => {
    await liff.init({
      liffId: process.env.NEXT_PUBLIC_LINE_LIFF_ID as string,
    });
    console.log(liff.isLoggedIn);
    if (!liff.isLoggedIn()) {
      liff.login();
      return;
    }

    const accessToken = liff.getAccessToken();
    const jwt = liff.getDecodedIDToken();
    console.log(jwt);

    setIsLoggedIn(true);
  };

  useEffect(() => {
    login();
  }, []);

  return {
    isLoggedIn,
  };
};
