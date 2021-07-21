import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const AddressEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address 1" source="address_1" />
        <TextInput label="Address 2" source="address_2" />
        <TextInput label="Address 3" source="address_3" />
        <TextInput label="City" source="city" />
        <TextInput label="State" source="state" />
        <NumberInput step={1} label="Zip" source="zip" />
      </SimpleForm>
    </Edit>
  );
};
