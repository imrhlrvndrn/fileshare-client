import { Footer } from '@components/Footer';
import { Fragment, FunctionComponent, ReactNode } from 'react';

export const BasicLayout: FunctionComponent<{ children: ReactNode }> = ({
children,
}) => {
    return (
        <Fragment>
            {children}
            <Footer />
        </Fragment>
    );
};
