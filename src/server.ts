import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';

validateEnv();

(async () => {
    const app = new App();

    app.initialize([new IndexRoute(), new UsersRoute(), new AuthRoute()]);

    app.listen();
})();
