import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Learn from "./routes/Learn";
import Cards from "./routes/Cards";
import Quiz from "./routes/Quiz";
import Mock from "./routes/Mock";
import Missed from "./routes/Missed";
import Review from "./routes/Review";
import Reference from "./routes/Reference";
import Saved from "./routes/Saved";
import Settings from "./routes/Settings";
import UIKitDemo from "./routes/__UIKit";
import TabBar from "./components/TabBar";

export default function App() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <main className="flex-1 overflow-y-auto pt-safe pl-safe pr-safe pb-[calc(5rem+env(safe-area-inset-bottom))]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/mock" element={<Mock />} />
          <Route path="/missed" element={<Missed />} />
          <Route path="/review" element={<Review />} />
          <Route path="/reference" element={<Reference />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/settings" element={<Settings />} />
          {import.meta.env.DEV && (
            <Route path="/__uikit" element={<UIKitDemo />} />
          )}
        </Routes>
      </main>
      <TabBar />
    </div>
  );
}
