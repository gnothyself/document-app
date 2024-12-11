import React from 'react';
import Editor from './Editor';

interface DocumentIdProps {
  params: Promise<{ doc_id: string }>;
}
const page = async ({ params }: DocumentIdProps) => {
  const { doc_id } = await params;
  console.log(doc_id);

  return (
    <div className='min-h-screen bg=[#FAFBFD] '>
      <Editor />
    </div>
  );
};

export default page;
