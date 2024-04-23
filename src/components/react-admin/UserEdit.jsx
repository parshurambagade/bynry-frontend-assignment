// UserEdit.js
import React from 'react';
import { Edit, SimpleForm, TextInput, ImageInput, ImageField, ArrayInput, SimpleFormIterator, EmailField, NumberInput } from 'react-admin';

const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="name" label="Name" />
      <ImageInput source="profileImage" label="Profile Image" accept="image/*">
        <ImageField source="src" title="name" />
      </ImageInput>
      <TextInput source="role" label="Role" />
      <TextInput source="briefBio" label="Brief Bio" multiline />
      <EmailField source="contactInfo.email" label="Email" />
      <NumberInput source="contactInfo.phone" label="Phone" />
      <ArrayInput source="additionalInfo.skills" label="Skills">
        <SimpleFormIterator>
          <TextInput />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="additionalInfo.languages" label="Languages">
        <SimpleFormIterator>
          <TextInput />
        </SimpleFormIterator>
      </ArrayInput>
      <ArrayInput source="additionalInfo.interests" label="Interests">
        <SimpleFormIterator>
          <TextInput />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);

export default UserEdit;
