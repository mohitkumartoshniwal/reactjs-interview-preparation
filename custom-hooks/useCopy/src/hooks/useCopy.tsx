import { useState } from "react";

type CopyFunction = (text: string) => Promise<void>;

const useCopy = (): [string, CopyFunction] => {
  const [copiedText, setCopiedText] = useState("");

  async function copy(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
    } catch (error) {
      console.error("Error copying text: ", error);
      setCopiedText("");
    }
  }
  return [copiedText, copy];
};

export default useCopy;
