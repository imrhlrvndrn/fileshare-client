export interface IFileInitialState {
    selected_file: File | null;
    uploaded_file: IUploadedFileResponseWithDownloadLink;
}

export interface IUploadedFileResponseWithDownloadLink {
    _id: string;
    download_url: string;
}

export type IFileContextType = [
    state: IFileInitialState,
    dispatch: (action: IFileAction) => void
];

export type IFileAction =
    | {
          type: 'updateSelectedFile';
          payload: { file: File };
      }
    | {
          type: 'updateUploadedFile';
          payload: { file: IUploadedFileResponseWithDownloadLink };
      };
