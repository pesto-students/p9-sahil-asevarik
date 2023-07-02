const express = require('express')
const app = express()
const indexRouter = require('./v1/Routers/indexRouter');
const bodyparser = require('body-parser');
const sequelize = require('./Common/database');
const Sentry = require('@sentry/node');
Sentry.init({
    dsn: "https://7cb4be02e3f14624a1d4dcfed1741dd2@o4505447323140096.ingest.sentry.io/4505447599767552",
    integrations: [
      // enable HTTP calls tracing
      new Sentry.Integrations.Http({ tracing: true }),
      // enable Express.js middleware tracing
      new Sentry.Integrations.Express({ app }),
      // Automatically instrument Node.js libraries and frameworks
      ...Sentry.autoDiscoverNodePerformanceMonitoringIntegrations(),
    ],
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });



require('dotenv').config()

// RequestHandler creates a separate execution context, so that all
// transactions/spans/breadcrumbs are isolated across requests
app.use(Sentry.Handlers.requestHandler());
// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());


app.listen(process.env.PORT || 3020,()=>{
    // sequelize.sync({force:true});
    sequelize.sync();
    console.log('app listening at port',process.env.PORT);
})


app.use(bodyparser.json());
app.use('/v1',indexRouter);
// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());
