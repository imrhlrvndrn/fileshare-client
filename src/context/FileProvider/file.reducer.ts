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
    const reducers = {
        updateSelectedFile: ({ file }: { file: File }) => {
            return { ...state, selected_file: file };
        },
        updateUploadedFile: ({
            file,
        }: {
            file: IUploadedFileResponseWithDownloadLink;
        }) => {
            return {
                ...state,
                uploaded_file: file,
            };
        },
    };

    if (action.type in reducers) {
        console.log('Action type => ', action.type);
        return reducers[`${action.type}`](action.payload);
    }
    return state;
};
