"use client";

import { auth, signOut } from "@/auth";

// eslint-disable-next-line @next/next/no-async-client-component
const SettingsPage = async () => {
  const session = await auth();

  return (
    <div>
      <h1>Settings</h1>
    </div>
  );
};

export default SettingsPage;
