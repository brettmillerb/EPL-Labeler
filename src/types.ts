import { LabelValueDefinitionStrings } from '@atproto/api/dist/client/types/com/atproto/label/defs.js';

export interface Label {
  rkey: string;
  identifier: string;
  severity: string;
  defaultSetting: string;
  blurs: string;
  adultOnly: boolean;
  locales: LabelValueDefinitionStrings[];
}
