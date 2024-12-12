import React from 'react';
import Editor from './Editor';
import Toolbar from './Toolbar';

interface DocumentIdProps {
  params: Promise<{ doc_id: string }>;
}
const page = async ({ params }: DocumentIdProps) => {
  const { doc_id } = await params;
  console.log(doc_id);

  return (
    <div className='min-h-screen bg=[#FAFBFD] '>
      <Toolbar />
      <Editor />
    </div>
  );
};

export default page;
