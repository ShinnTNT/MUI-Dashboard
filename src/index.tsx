import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import LoadScreen from "./components/LoadScreen";
import AllConversation from "./pages/conversation/all";
import BlockedConversation from "./pages/conversation/blocked";
import CurrentUsers from "./pages/campaign/current-user";
import MonthlyUsers from "./pages/campaign/monthly-user";
import GeneralError from "./layouts/components/GeneralError";
import App from "./layouts/App";
import NotFound from "./layouts/components/NotFound";

export default function Index() {
  return (
    <Suspense fallback={<LoadScreen />}>
      <Routes>
        <Route path="/" element={<App />} errorElement={<GeneralError />}>
          {/* Conversation Tab */}
          <Route
            index
            path="conversation/all-conversation"
            element={<AllConversation />}
          />
          <Route
            path="conversation/blocked-conversation"
            element={<BlockedConversation />}
          />

          {/* Campaign Tab  */}
          <Route
            index
            path="campaign/current-users"
            element={<CurrentUsers />}
          />
          <Route path="campaign/monthly-users" element={<MonthlyUsers />} />
        </Route>

        {/* Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
