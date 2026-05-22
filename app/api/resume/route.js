import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'resume', 'resume_nehal.pdf');

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
