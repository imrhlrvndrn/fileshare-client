export interface IFileResponseWithDownloadLink {
    _id: string;
    download_url: string;
}

export interface IFileResponse {
    _id: string;
    file_name: string;
    url: string;
    size: number; // in megs
    format: string;
    sender?: string;
    receiver?: string;
}

export interface IIconProps {
    size?: number;
    color?: string;
}
