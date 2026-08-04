import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

export default function EmojiPicker({ theme, onSelect }) {
  return (
    <Picker
      data={data}
      theme={theme}
      onEmojiSelect={onSelect}
      previewPosition="none"
    />
  );
}
