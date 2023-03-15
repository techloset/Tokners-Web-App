import { useState } from "react";

export default function useHome() {
  const [readMore, setReadMore] = useState(true);
  return {
    readMore,
    setReadMore,
  };
}
