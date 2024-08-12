"use client";

import Team from "@/components/team";
import { Provider } from "react-redux";
import { store } from "@/app/store";

export default function Page() {
  return (
    <Provider store={store}>
      <Team />
    </Provider>
  );
}
