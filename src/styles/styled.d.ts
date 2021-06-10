/* eslint @typescript-eslint/no-empty-interface: "off" */

import 'styled-components';

// eslint-disable-next-line import/extensions
import theme from './theme';

export type Theme = typeof theme; // Assim ele já vai conseguir identificar os types do nosso tema

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {} // Ignorar o eslint reclamando aqui
}
