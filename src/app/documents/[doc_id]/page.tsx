import React from 'react';
import Editor from './Editor';
import Toolbar from './Toolbar';

// interface DocumentIdProps {
//   params: Promise<{ doc_id: string }>;
// }
const page = async () => {
  return (
    <div className='min-h-screen bg=[#FAFBFD] '>
      <Toolbar />
      <Editor />
    </div>
  );
};

export default page;
