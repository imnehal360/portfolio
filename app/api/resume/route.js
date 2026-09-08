import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const candidatePaths = [
    path.join(process.cwd(), 'public', 'resume', 'resume_nehal.pdf'),
    path.join(process.cwd(), 'public', 'Muhammad_Nehal_Resume_ai_full_stack.pdf'),
    path.join(process.cwd(), 'public', 'resume_nehal.pdf')
  ];

  const filePath = candidatePaths.find(p => fs.existsSync(p));

  if (!filePath) {
    return new NextResponse('Resume not found', { status: 404 });
  }

  try {
    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="Muhammad_Nehal_Resume.pdf"',
      },
    });
  } catch (error) {
    console.error('Error serving resume:', error);
    return new NextResponse('Resume not found', { status: 404 });
  }
}
