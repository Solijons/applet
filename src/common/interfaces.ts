export interface INurseryField {
  active: boolean;
  actualPlantingDate?: string;
  farm: string;
  field: string;
  forecastDate: string;
  forecastPlantingDate?: string;
  id?: number;
  location: string;
  pottingDate?: string;
  priority?: string;
  site: string;
  size: number;
  type: string;
  vcrId: string;
  week?: number;
  year?: number;
}

export interface INote {
  createdAt?: string;
  field?: string;
  id?: number;
  modifiedAt?: string;
  note: string;
  nurseryField: number;
  priority?: string;
}

/** Used to request bulk note updates. */
export interface INoteBulk {
  /** A CSV list of notes to update. */
  ids: string;
  /** The content (text) of the note. */
  note: string;
  /** The priority (low, med, high) of the note. */
  priority: string;
}

export interface IEventType {
  id?: number;
  team: string;
  type: string;
}

export interface ITeamEventTypes {
  eventTypes: string[];
  team: string;
}

export interface INurseryFieldEvent {
  comments?: string;
  continuing?: string;
  createdAt?: string;
  date: string;
  /** Apollo field name. */
  field?: string;
  id?: number;
  keyval?: string;
  nurseryField: number;
  proposedAction?: string;
  status: string;
  team: string;
  type: string;
  week?: number;
  year?: number;
}
