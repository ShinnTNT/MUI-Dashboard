import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import LoadScreen from "./components/LoadScreen";
import AllConversation from "./pages/conversation/all";
import BlockedConversation from "./pages/conversation/blocked";
import CurrentUsers from "./pages/campaign/current-user";
import MonthlyUsers from "./pages/campaign/monthly-user";
import GeneralError from "./layouts/components/GeneralError";

export default function Index() {
  return (
    <Suspense fallback={<LoadScreen />}>
      <Routes>
        <Route
          path="/"
          element={<GeneralError />}
          errorElement={<GeneralError />}
        >
          {/* Conversation Tab */}
          <Route path="all-conversation" element={<AllConversation />} />
          <Route
            path="blocked-conversation"
            element={<BlockedConversation />}
          />

          {/* Campaign Tab  */}
          <Route path="current-users" element={<CurrentUsers />} />
          <Route path="monthly-users" element={<MonthlyUsers />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
