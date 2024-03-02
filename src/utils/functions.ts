export const truncateTitle = (title: string, maxLength: number): string => {
  const parts = title.split('.');
  const filename = parts[0];

  if (filename.length > maxLength) {
    return filename.slice(0, maxLength) + '...';
  }
  return title;
};

export const convertIntoMB = (size: number) => {
  const data = (size / 1024 / 1024).toFixed(2);
  return `${data} MB`;
};

// Function to get the image width
export const getImageWidth = async (file: File) => {
  const img = new Image();
  const objectUrl = URL.createObjectURL(file);

  return new Promise<number>((resolve) => {
    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(img.width);
    };
    img.src = objectUrl;
  });
};

// Function to get the image height
export const getImageHeight = async (file: File) => {
  const img = new Image();
  const objectUrl = URL.createObjectURL(file);

  return new Promise<number>((resolve) => {
    img.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(img.height);
    };
    img.src = objectUrl;
  });
};
