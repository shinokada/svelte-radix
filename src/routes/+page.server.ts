export async function load() {
  const files = import.meta.glob('/src/lib/**/*');

  return {
    fileCount: Object.keys(files).length,
    files: Object.keys(files)
  };
}
