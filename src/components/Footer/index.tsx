// styles
import { Footer } from './StyledFooter';

const PageFooter = () => {
    return (
        <Footer>
            Built by
            <a
                href="https://github.com/imrhlrvndrn/fileShare-client"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: '0.2rem', color: '#8168ff' }}
            >
                Rahul Ravindran
            </a>
        </Footer>
    );
};

export { PageFooter as Footer };
