import { createBrowserHistory as history } from 'history';
import actions from '@/features/search/actions/search.actions';

const handleSetField = field => event => {
    actions.setField({ field, value: event.target.value });
};

const handleGetAlbum = id => {
    history.push(`/album/${id}`);
};

const handlers = {
    setField: handleSetField,
    getAlbum: handleGetAlbum
}

export default handlers;