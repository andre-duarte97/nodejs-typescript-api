import * as path from 'path';
import modulasAlias from 'module-alias'

const files = path.resolve(__dirname, '../..');

modulasAlias.addAliases({
    '@src': path.join(files, 'src'),
    '@test': path.join(files, 'test'),
});