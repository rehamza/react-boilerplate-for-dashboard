import { TemplateData, Placeholder, Placeholders, Image } from '../../types/Website';

export const gelAllPlaceholders = (data: TemplateData) => {
  const placeholders = data.templates.reduce<Record<string, Placeholder>>((acc, template) => {
    template.pages.forEach((page) => {
      Object.entries(page.placeholders).forEach(([key, value]) => {
        acc[key] = value;
      });
    });
    return acc;
  }, {} as Record<string, Placeholder>); // Explicitly cast the initial value to the correct type

  return placeholders;
};

export const separateByTypeWithLabels = (data: Placeholders) => {
  const images: Record<string, Image> = {};
  const strings: Record<string, Placeholder> = {};
  const placeholdersInitialValues: any = {};

  for (const [key, value] of Object.entries(data)) {
    const label = key
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space between camel case
      .replace(/^./, (str) => str.toUpperCase()); // Capitalize first letter

    const modifiedValue = { ...value, label };

    if (value.type === 'image') {
      // Check if the value is of type `Image`
      if (isImage(modifiedValue)) {
        images[key] = modifiedValue;
      }
    } else if (value.type === 'string') {
      strings[key] = modifiedValue as Placeholder;
    }
    placeholdersInitialValues[key] = value.value;
  }

  return { images, strings, placeholdersInitialValues };
};

function isImage(value: any): value is Image {
  return (
    Object.prototype.hasOwnProperty.call(value, 'dimensions') && Object.prototype.hasOwnProperty.call(value, 'size')
  );
}

function hexToRgb(hex: string): [number, number, number] {
  const hexString = hex.replace('#', '');
  return [
    parseInt(hexString.substring(0, 2), 16),
    parseInt(hexString.substring(2, 4), 16),
    parseInt(hexString.substring(4, 6), 16),
  ];
}

export const compareColors = (primaryHex: string, secondaryHex: string, threshold = 32): boolean => {
  const primaryRgb = hexToRgb(primaryHex);
  const secondaryRgb = hexToRgb(secondaryHex);
  const deltaR = Math.abs(primaryRgb[0] - secondaryRgb[0]);
  const deltaG = Math.abs(primaryRgb[1] - secondaryRgb[1]);
  const deltaB = Math.abs(primaryRgb[2] - secondaryRgb[2]);
  return deltaR <= threshold && deltaG <= threshold && deltaB <= threshold;
};

export const stringFieldValidation = (key: string, value: string) => {
  const allRegexs = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    mapLink:
      /^https?:(\/\/(www\.)?maps\.)?google\.[a-z]+\/maps\/?\?([^&]+&)*(ll=-?[0-9]{1,2}\.[0-9]+,-?[0-9]{1,2}\.[0-9]+|q=[^&]+)+($|&)/,
    contactNumber: /^[+]{1}(?:[0-9\-\\(\\)\\/.]\s?){6,15}[0-9]{1}$/,
  };

  const regex = allRegexs[key as keyof typeof allRegexs] as RegExp | undefined;

  if (!regex) {
    throw new Error(`The key '${key}' is not a valid regex key.`);
  }

  const result = regex.test(value);
  return result;
};
