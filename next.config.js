/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/resume/nehal_resume.pdf',
        destination: '/resume/resume_nehal.pdf',
        permanent: true,
      },
      {
        source: '/resume.pdf',
        destination: '/resume/resume_nehal.pdf',
        permanent: true,
      },
      {
        source: '/resume',
        destination: '/resume/resume_nehal.pdf',
        permanent: true,
      },
      {
        source: '/download-resume',
        destination: '/resume/resume_nehal.pdf',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
