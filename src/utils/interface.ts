export type MediaType = 'image' | 'video';
export type MediaSide = 'left' | 'right';

export interface MediaItem {
  side: MediaSide;
  data: {
    type: MediaType;
    url: string;
  }[];
}
