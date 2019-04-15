import { createBrowserHistory as history } from 'history';

const handleRedirect = route => {
    history.push(route);
};

const handlers = {
    redirect: handleRedirect
}

export default handlers;