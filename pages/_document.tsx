import React from 'react';
import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

class LHBBDocument extends Document {

    static async getInitialProps(context: DocumentContext) {
        const originalRenderPage = context.renderPage;
        const styleSheet = new ServerStyleSheet();
        context.renderPage = () => originalRenderPage({
            enhanceApp: (App) => props => {
                return styleSheet.collectStyles(<App {...props}/>)
            }
        })
        const initialProps = await Document.getInitialProps(context);
        return {
            ...initialProps,
            styles: <>
                {initialProps.styles}
                {styleSheet.getStyleElement()} 
            </>
        }
    }

}

export default LHBBDocument