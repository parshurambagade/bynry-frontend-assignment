// UserList.js
import React from 'react';
import { List, Datagrid, TextField, EmailField, ImageField, ArrayField, SingleFieldList, ChipField } from 'react-admin';

const UserList = (props) => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" label="ID" />
      <TextField source="name" label="Name" />
      <ImageField source="profileImage" label="Profile Image" title="name" />
      <TextField source="role" label="Role" />
      <TextField source="briefBio" label="Brief Bio" />
      <EmailField source="contactInfo.email" label="Email" />
      <TextField source="contactInfo.phone" label="Phone" />
      <ArrayField source="additionalInfo.skills" label="Skills">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <ArrayField source="additionalInfo.languages" label="Languages">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
      <ArrayField source="additionalInfo.interests" label="Interests">
        <SingleFieldList>
          <ChipField source="name" />
        </SingleFieldList>
      </ArrayField>
    </Datagrid>
  </List>
);

export default UserList;
