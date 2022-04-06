export interface IFileInitialState {
    selected_file: File | null;
    uploaded_file: IUploadedFileResponseWithDownloadLink;
    email_share_state: boolean;
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
          payload: { file: File | null };
      }
    | {
          type: 'updateUploadedFile';
          payload: { file: IUploadedFileResponseWithDownloadLink };
      }
    | {
          type: 'updateEmailShareState';
          payload: boolean;
      };
