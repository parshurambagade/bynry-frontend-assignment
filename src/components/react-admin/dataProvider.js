// Import the necessary dependencies

import { FirebaseDataProvider } from 'react-admin-firebase';
import { firebaseConfig } from '../../firebaseConfig';

// Initialize the data provider using Firebase and configuration
const dataProvider = FirebaseDataProvider(firebaseConfig);

// Export the data provider instance
export default dataProvider;
