import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen } from "lucide-react";
import type { ThematicAreaType } from "./types";
import { ThematicTag } from "./ThematicTag";

const DISPLAY_COUNT = 5;
const ROTATION_INTERVAL = 3000;
// Update this with the correct proxy URL for local development to bypass CORS
const API_URL = "http://localhost:5000/proxy/thematic"; // Use a proxy server if CORS is an issue

// Retry fetch with exponential backoff logic
const fetchWithRetry = async (url: string, retries: number = 3, delay: number = 1000) => {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Error ${res.status}: ${res.statusText}`);
      return res.json();
    } catch (error) {
      if (i === retries - 1) {
        throw error; // If it's the last attempt, throw the error
      }
      console.warn(`Attempt ${i + 1} failed, retrying...`);
      await new Promise((resolve) => setTimeout(resolve, delay * (i + 1))); // Exponential backoff
    }
  }
};

export function ThematicAreas() {
  const [thematicAreas, setThematicAreas] = useState<string[]>([]);
  const [visibleIndices, setVisibleIndices] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch thematic areas with retry mechanism
  const fetchThematicAreas = () => {
    setLoading(true);
    setError(null);
    fetchWithRetry(API_URL)
      .then((data: ThematicAreaType[]) => {
        const uniqueAreas = Array.from(
          new Set(data.map((area) => area.thematic_area.trim()))
        ).filter((area) => area.length > 0);
        setThematicAreas(uniqueAreas);
        setVisibleIndices(Array.from({ length: DISPLAY_COUNT }, (_, i) => i));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching thematic areas:", error);
        setError(error.message || "An unexpected error occurred.");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchThematicAreas();
  }, []);

  // Rotation effect to rotate thematic areas
  useEffect(() => {
    if (thematicAreas.length === 0) return;

    const interval = setInterval(() => {
      setVisibleIndices((current) => {
        const newIndices = current.map(
          (index) => (index + DISPLAY_COUNT) % thematicAreas.length
        );
        return newIndices;
      });
    }, ROTATION_INTERVAL);

    return () => clearInterval(interval);
  }, [thematicAreas]);

  if (loading) {
    return (
      <div className="flex h-12 items-center justify-center">
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-teal-500 border-t-transparent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center text-sm text-red-600">
        <p>Failed to load thematic areas: {error}</p>
        <button
          onClick={fetchThematicAreas}
          className="mt-2 rounded bg-teal-500 px-3 py-1 text-white"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="relative bg-[#ccd6e8] py-2">
      <div className="flex items-center justify-center gap-2 text-sm font-medium text-teal-700">
        <BookOpen className="h-4 w-4" />
        <span>Research Areas</span>
      </div>

      <div className="relative mt-2 flex h-10 items-center justify-center overflow-hidden px-4">
        <AnimatePresence mode="popLayout">
          {visibleIndices.map((index) => (
            <motion.div
              key={`${index}-${thematicAreas[index]}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                opacity: { duration: 0.3 },
                y: { type: "spring", stiffness: 300, damping: 30 },
              }}
              className="mx-1.5"
            >
              <ThematicTag title={thematicAreas[index]} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

console.log("ThematicAreas loaded");
