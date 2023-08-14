import { Route, Routes } from "react-router-dom";
import App from "./layouts/App";
import { Suspense } from "react";
import LoadScreen from "./components/LoadScreen";
import AllConversation from "./pages/conversation/all";
import BlockedConversation from "./pages/conversation/blocked";

export default function Index() {
  return (
    <Suspense fallback={<LoadScreen />}>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Conversation Tab */}
          <Route path="all=conversation" element={<AllConversation />} />
          <Route
            path="blocked-conversation"
            element={<BlockedConversation />}
          />

          {/*  */}
        </Route>
      </Routes>
    </Suspense>
  );
}
