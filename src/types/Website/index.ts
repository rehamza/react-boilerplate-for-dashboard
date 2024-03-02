export interface Placeholder {
  value: string;
  type: string;
  label: string;
  validation: boolean;
}

export interface Dimensions {
  width: number;
  height: number;
}

export interface Image {
  value: string;
  type: string;
  label: string;
  dimensions: Dimensions;
  size: number;
}

export interface Page {
  name: string;
  placeholders: Record<string, Placeholder>;
}

export interface Template {
  name: string;
  pages: Page[];
}

export interface TemplateData {
  templates: Template[];
}

export interface Placeholders {
  [key: string]: Placeholder | Image;
}

export interface ImagePlaceholders {
  [key: string]: Image;
}

export interface FormData {
  [key: string]: string | boolean;
}
