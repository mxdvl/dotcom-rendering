// @flow

// $FlowFixMe https://github.com/facebook/flow/issues/5035
import { hydrate as hydrateDOM } from 'react-dom';
import { hydrate as hydrateCSS } from 'emotion';

// webpack-specific
// eslint-disable-next-line camelcase,no-undef
__webpack_public_path__ = '/assets/javascript/';

const { state, cssIDs } = window.gu.app;

if (module.hot) {
    module.hot.accept();
}

// create code split points for all ../pages
import(/* webpackChunkName: "[request]" */ `./pages/${state.page}`).then(
    ({ default: Page }) => {
        hydrateCSS(cssIDs);
        hydrateDOM(<Page state={state} />, document.getElementById('app'));
    },
);
