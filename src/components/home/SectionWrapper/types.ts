import { ComponentType } from "react";

export interface NewsProps {
  description?: string;
  videoUrl?: string;
  benefits?: string[];
  fallbackImageUrl?: string;
}

export interface TransitionWrapperProps {
  heroComponent: ComponentType;
  newsComponent: ComponentType<NewsProps>;
  newsProps?: NewsProps;
}
