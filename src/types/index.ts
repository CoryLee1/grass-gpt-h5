// types/index.ts - MVP简化版

export interface GrassPoint {
    id: string;
    name: string;
    type: string;
    address: string;
    completed: boolean;
    description?: string;
    lat?: number;
    lng?: number;
    time?: string;
    status?: 'none' | 'liked' | 'disliked';
    photoUrl?: string;
    comments?: { text: string; user?: string; time?: string }[];
    grassStatus?: 'none' | 'planted' | 'removed';
  }
  
  export interface TravelPlan {
    id: string;
    title: string;
    city: string;
    grassPoints: GrassPoint[];
  }
  
  export interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: number;
    spotPosts?: Array<{
      spot: string;
      posts: Array<{ url: string; title: string }>;
    }>;
  }
  
  export interface AppState {
    currentPlan: TravelPlan | null;
    chatHistory: Message[];
    loading: boolean;
  }