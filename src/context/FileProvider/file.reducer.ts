import {
    IFileAction,
    IFileInitialState,
    IUploadedFileResponseWithDownloadLink,
} from './FileProvider.types';

export const initialState: IFileInitialState = {
    selected_file: null,
    uploaded_file: {
        _id: '',
        download_url: '',
    },
};

export const fileReducers = (state: IFileInitialState, action: IFileAction) => {
    console.log('file reducer => ', action);

    switch (action.type) {
        case 'updateSelectedFile':
            return { ...state, selected_file: action.payload.file };

        case 'updateUploadedFile':
            return {
                ...state,
                uploaded_file: action.payload.file,
            };

        default:
            return state;
    }
};
