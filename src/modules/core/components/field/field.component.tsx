import { withField } from '@core/shared/formik';
import { Checkbox } from '../checkbox';
import { Text } from '../text';
import { Switch } from '../switch';
import { Select } from '../select';

/**
 * Group of wrapped components, with props provided according formik context
 */
const Field = {
  Text: withField(Text),
  Checkbox: withField(Checkbox),
  Switch: withField(Switch),
  Select: withField(Select)
};

export { Field };
