import { IFileAction, IFileInitialState } from './FileProvider.types';

export const initialState: IFileInitialState = {
    selected_file: null,
    uploaded_file: {
        _id: '',
        download_url: '',
    },
    email_share_state: false,
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

        case 'updateEmailShareState':
            return {
                ...state,
                email_share_state: action.payload,
            };

        default:
            return state;
    }
};
