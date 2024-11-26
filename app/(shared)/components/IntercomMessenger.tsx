"use client";

import { useEffect } from "react";
import { Intercom as IntercomSDK } from "@intercom/messenger-js-sdk";

function IntercomMessenger(): React.ReactElement | null {
  useEffect(() => {
    // Initialize Intercom using a factory function pattern
    IntercomSDK({
      app_id: "r8e9gnqq",
    });

    // // Load the Intercom messenger
    // intercom.boot();

    // // Update Intercom with user information (if available)
    // const userSettings: Partial<IntercomSettings> = {
    //   email: "user@example.com",
    //   user_id: "123",
    //   name: "John Doe",
    // };
    // intercom.update(userSettings);

    // Clean up on component unmount
    // return () => {
    //   intercom.shutdown();
    // };
  }, []);

  return null; // This component doesn't render any UI
}

export default IntercomMessenger;
