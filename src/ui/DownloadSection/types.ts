export interface DownloadItem {
  title: string;
  description: string;
  fileName: string;
}

export interface DownloadSectionProps {
  title: string;
  subtitle: string;
  downloads: DownloadItem[];
}
