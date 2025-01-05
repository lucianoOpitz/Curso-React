import React from 'react';
import {TareaProvider} from '../TareaContext'
import { AppUI } from './AppUI';
function App() {
  return (
    <TareaProvider>
      <AppUI/>
    </TareaProvider>
  );
}
export default App;
