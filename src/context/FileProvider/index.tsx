import {
    createContext,
    FunctionComponent,
    ReactNode,
    useContext,
    useReducer,
} from 'react';
import { fileReducers, initialState } from './file.reducer';
import { IFileContextType } from './FileProvider.types';

const FileContext = createContext<IFileContextType>({} as IFileContextType);

export const useFile = () => useContext(FileContext);

export const FileProvider: FunctionComponent<{ children: ReactNode }> = ({
    children,
}) => {
    return (
        <FileContext.Provider value={useReducer(fileReducers, initialState)}>
            {children}
        </FileContext.Provider>
    );
};
