import * as React from 'react';
import { Admin, Resource } from 'react-admin';
import { PostList, PostEdit, PostCreate } from './Components/posts';
import { UserList } from './Components/users'; 
//import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import { FirebaseDataProvider } from 'react-admin-firebase';
import Dashboard from './Components/Dashboard';
import authProvider from './Components/authProvider';


const config = {
    apiKey: "AIzaSyAjQ4cwHsjs9P97KoF6HJiaxFeA3itu_WY",
    authDomain: "fir-auth-react-283b6.firebaseapp.com",
    databaseURL: "https://fir-auth-react-283b6.firebaseio.com",
    projectId: "fir-auth-react-283b6",
    storageBucket: "fir-auth-react-283b6.appspot.com",
    messagingSenderId: "509478731346"

   
  };

const dataProvider = FirebaseDataProvider(config);
const App = () => (
<Admin 
dashboard={Dashboard} 
authProvider={authProvider} 
dataProvider={dataProvider} >
    <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} />
    <Resource name="users" list={UserList} icon={UserIcon}/>
    </Admin>


    );

    export default App;
   