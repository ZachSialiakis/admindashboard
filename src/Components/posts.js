import React from 'react';
import { List, Datagrid, TextField, ReferenceField, EditButton } from 'react-admin';
import { Create, SimpleForm, ReferenceInput } from 'react-admin';
import { SelectInput, DisabledInput, Edit, TextInput, LongTextInput } from 'react-admin';
export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <LongTextInput source="body" />
        </SimpleForm>
    </Create>
);

export const PostEdit = props => (
    <Edit {...props}>
        <SimpleForm>
          <DisabledInput source="id" />
            <ReferenceInput source="userId" reference="users">

               <SelectInput optionText="name" />
            </ReferenceInput>

            <TextInput source="title" />
           
          <LongTextInput source="body" />
        </SimpleForm>
    </Edit>
);

export const PostList = props => (
    <List {...props}>

       <Datagrid>
           <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>

            <TextField source="title" />

           <EditButton />
        </Datagrid>
    </List>
);






