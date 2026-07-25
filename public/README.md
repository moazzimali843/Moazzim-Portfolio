# Media Directories Guide

This folder contains static assets for **Moazzim AI Studio**.

## Folder Structure:

- `public/images/` -> Place all your photo and thumbnail images here (e.g. `my_photo.jpg`, `thumbnail1.png`).
- `public/videos/` -> Place all your portfolio video files here (e.g. `intro.mp4`, `demo_reel.mp4`).

## How to use them on the website:

Whenever you place a file in `public/images/sample.jpg`, you can link it anywhere in the app or in `src/data/portfolioData.ts` using the path:
- `/images/sample.jpg`

Whenever you place a video in `public/videos/sample.mp4`, link it using:
- `/videos/sample.mp4`

### Example in `src/data/portfolioData.ts`:
```ts
{
  id: 'v-custom-1',
  title: 'My Custom AI Avatar Showcase',
  category: 'Digital Twins',
  description: 'My custom AI avatar video.',
  thumbnail: '/images/my_thumbnail.jpg',
  videoUrl: '/videos/my_video.mp4',
  toolsUsed: ['HeyGen', 'ElevenLabs'],
  duration: '01:30',
  aspectRatio: '16:9'
}
```
