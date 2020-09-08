import { INurseryField } from "../../../common/interfaces";

export interface INFTableManagerProps {
  currentNurseryFields: INurseryField[];
  currentNurseryFieldsFetched: boolean;
  fetchNurseryFields: () => void;
  getSelectedFields: (fields: string[]) => void;
  getSelectedNurseryFields: (nurseryFields: number[]) => void;
  selectedFields: string[];
  selectedNurseryFields: number[];
}
