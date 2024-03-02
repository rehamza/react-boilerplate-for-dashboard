import {} from '@zeus/shared';
export interface IVisibility {
  isVisible: boolean;
  isDefault: boolean;
  channelVisibilityType: string; // need to add enums
  device: string | '';
  scheduling: IScheduling[];
}

export enum ChannelVisibilityType {
  OnPrem = 'OnPrem',
  OffPrem = 'OffPrem',
  Custom = 'Custom',
}

export interface IScheduling {
  id?: number | null;
  day: string;
  allDay: boolean;
  startTime: string | '';
  endTime: string | '';
}

// TODO: need to move interface on shared

export enum RecordStatus {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
  ARCHIVED = 'Archived',
}

export interface IMenu {
  id?: number;
  menuName: string;
  posDisplayName?: string | undefined;
  posButtonColor: string;
  menuDescription?: string;
  picture?: string;
  sortOrder?: number;
  status?: RecordStatus;
  settingId?: number;
  restaurantId?: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  createdBy?: number | null;
  updatedBy?: number | null;
  deletedBy?: number | null;
}

export interface IMenuCategory {
  isVisible?: boolean;
  categoryId: number;
  menuId: number;
}
export interface IMenuResponse {
  menus: IMenu[];
  totalCount: number;
}
export interface IMenuResponse {
  menus: IMenu[];
  totalCount: number;
}
export interface IMenuRequest {
  menu: IMenu;
  categories?: Option[];
  onPrem?: IVisibility | null;
  offPrem?: IVisibility | null;
  custom?: IVisibility[] | [];
}

export interface IMenuItemResponse {
  menu: IMenu;
  categories?: IMenuCategories[];
  onPrem?: IVisibility;
  offPrem?: IVisibility;
  custom?: IVisibility[];
}

export interface IMenuCategories {
  // id?: number;
  value: number;
  label: string;
}

export enum Device {
  POS = 'Pos',
  MPOS = 'Mpos',
  KIOSK = 'Kiosk',
  QR = 'QR',
  ONLINE = 'Online',
  DOORDASH = 'Doordash',
}

export interface Option {
  value: number;
  label: string;
}

export interface Image {
  id?: number;
  fileUrl: string;
  name?: string;
  size?: number;
  type?: string;
  fileFor?: string;
}
