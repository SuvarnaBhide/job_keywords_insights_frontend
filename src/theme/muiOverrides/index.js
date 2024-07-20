import Dialog from './dialog';
import { merge } from 'lodash';
import Tab from './tabs';

export default function MuiOverrides(theme) {
    return merge(
      Tab(theme),
      Dialog(theme)
    );
}