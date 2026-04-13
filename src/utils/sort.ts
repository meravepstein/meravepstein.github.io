export function sortByFilenameNumber(a: ImageMetadata, b: ImageMetadata): number {
  const extractNumber = (src: string) => {
    // Get the filename part (e.g., "1.B8x9z.png")
    const filename = src.split("/").pop() || "";
    // Match the digits at the very beginning of the filename
    const match = filename.match(/^(\d+)/);
    return match ? parseInt(match[1], 10) : 0;
  };

  return extractNumber(a.src) - extractNumber(b.src);
};